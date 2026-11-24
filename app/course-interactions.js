export function setupCourseInteractions() {
  const events = new AbortController();

  // Course, exercises, and quiz views
  const views = [...document.querySelectorAll('.view')];
  const tabs = [...document.querySelectorAll('.tab')];
  const groups = [...document.querySelectorAll('.navgroup')];
  const { signal } = events;
  let current = 'cours';
  function showView(name, scroll) {
    current = name;
    views.forEach(v => v.classList.toggle('hidden', v.dataset.view !== name));
    groups.forEach(g => g.classList.toggle('hidden', g.dataset.view !== name));
    tabs.forEach(t => { const on = t.dataset.target === name; t.classList.toggle('active', on); t.setAttribute('aria-selected', on); });
    q.disabled = name === 'quiz';
    q.placeholder = name === 'quiz' ? 'Recherche indisponible pendant le quiz' : 'Rechercher : codeur, D-H, vérin…';
    if (name === 'quiz') q.value = '';
    applySearch();
    buildMnav();
    if (scroll) window.scrollTo({ top: 0 });
  }
  tabs.forEach(t => t.addEventListener('click', () => {
    history.replaceState(null, '', '#' + t.dataset.target);
    showView(t.dataset.target, true);
  }, { signal }));
  function viewOfHash() {
    const id = location.hash.slice(1);
    if (['cours', 'exercices', 'quiz'].includes(id)) return id;
    const el = id && document.getElementById(id);
    const v = el && el.closest('.view');
    return v ? v.dataset.view : null;
  }
  window.addEventListener('hashchange', () => {
    const view = viewOfHash();
    if (view && view !== current) {
      showView(view);
      document.getElementById(location.hash.slice(1))?.scrollIntoView();
    }
  }, { signal });

  // Search (within the open tab)
  const q = document.getElementById('q');
  const norm = s => s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  function applySearch() {
    const term = norm(q.value.trim());
    let any = false;
    const view = document.getElementById('view-' + current);
    if (current === 'quiz') { document.getElementById('empty').classList.add('hidden'); return; }
    view.querySelectorAll('section.chap').forEach(sec => {
      const head = norm(sec.querySelector('.chap-head').textContent);
      let visible = 0;
      sec.querySelectorAll('.card').forEach(card => {
        if (card.parentElement.closest('.card')) return;
        const hit = !term || head.includes(term) || norm(card.textContent).includes(term);
        card.classList.toggle('hidden', !hit);
        if (hit) visible++;
      });
      sec.classList.toggle('hidden', visible === 0);
      if (visible) any = true;
    });
    view.querySelector('.stats').classList.toggle('hidden', !!term);
    document.getElementById('empty').classList.toggle('hidden', any);
  }
  q.addEventListener('input', applySearch, { signal });

  // Mobile section strip
  function buildMnav() {
    const m = document.getElementById('mnav'); m.innerHTML = '';
    const g = document.querySelector('.navgroup[data-view="' + current + '"]');
    m.classList.toggle('hidden', current === 'quiz');
    g.querySelectorAll('a').forEach(a => m.appendChild(a.cloneNode(true)));
  }

  // Active nav link
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      document.querySelectorAll('nav.side a, #mnav a').forEach(a => {
        const on = a.getAttribute('href') === '#' + e.target.id;
        a.classList.toggle('active', on);
        if (on && a.parentElement.id === 'mnav') { const m = a.parentElement; m.scrollTo({ left: a.offsetLeft - m.clientWidth / 2 + a.offsetWidth / 2, behavior: 'smooth' }); }
      });
    });
  }, { rootMargin: '-90px 0px -65% 0px' });
  document.querySelectorAll('section.chap').forEach(s => obs.observe(s));

  // ================= QUIZ =================
  const CH = {
    1: { name: 'Introduction', color: 'var(--c1)' },
    2: { name: 'Architectures', color: 'var(--c2)' },
    3: { name: 'Performances', color: 'var(--c3)' },
    4: { name: 'Capteurs', color: 'var(--c4)' },
    5: { name: 'Actionneurs', color: 'var(--c5)' },
    6: { name: 'Modélisation', color: 'var(--c6)' }
  };
  const BANK = [
    // Ch1
    { c:1, q:"Combien de types de robots le cours distingue-t-il ?", o:["2","3","4","5"], a:2, e:"Industriel, humanoïde, collaboratif et mobile." },
    { c:1, q:"Le fonctionnement maître / esclave correspond au robot…", o:["programmable","télémanipulateur","collaboratif","mobile"], a:1, e:"Le télémanipulateur reproduit les gestes de l'opérateur (maître)." },
    { c:1, q:"Les capteurs proprioceptifs servent à…", o:["percevoir l'environnement","détecter l'état interne du robot","saisir un objet","programmer hors ligne"], a:1, e:"Proprioceptif = interne. Extéroceptif = externe (environnement)." },
    { c:1, q:"Le 4e mode (relation homme–machine) se distingue par la présence…", o:["d'un préhenseur","d'un réducteur","de capteurs externes","d'un codeur absolu"], a:2, e:"Les capteurs externes permettent la perception de l'environnement." },
    { c:1, q:"Que signifie PTP ?", o:["Programme de trajectoire primaire","Point par point","Position de tâche programmée","Pince à traction pneumatique"], a:1, e:"PTP = point par point, LIN = linéaire, CIRC = circulaire." },
    { c:1, q:"Que désigne l'UCC ?", o:["Unité de commande et de contrôle","Unité de capteurs combinés","Unité centrale de calcul","Unité de conversion de couple"], a:0, e:"L'UCC commande et contrôle le système mécanique articulé (SMA)." },
    { c:1, q:"Un robot programmable fonctionne en deux phases :", o:["maître puis esclave","apprentissage puis restitution","PTP puis LIN","calibration puis maintenance"], a:1, e:"Il enregistre la trajectoire pendant l'apprentissage, puis la rejoue." },
    // Ch2
    { c:2, q:"Une liaison rotule est une liaison…", o:["active","passive","prismatique simple","motorisée"], a:1, e:"Dans le cours, la rotule est passive (non motorisée)." },
    { c:2, q:"Le porteur d'un robot série est constitué…", o:["des 3 premières liaisons à partir de la base","de toutes les liaisons R","du préhenseur","des 3 dernières liaisons"], a:0, e:"Le porteur positionne l'effecteur ; le poignet l'oriente." },
    { c:2, q:"Le poignet d'un robot n'utilise que des liaisons…", o:["P (prismatiques)","R (rotoïdes)","rotules","glissières"], a:1, e:"Le poignet sert à orienter, donc uniquement des rotations." },
    { c:2, q:"Un robot dont le porteur est PPP est un robot…", o:["cylindrique","sphérique","cartésien","SCARA"], a:2, e:"Trois translations → coordonnées cartésiennes (x, y, z)." },
    { c:2, q:"Le porteur d'un robot SCARA est de type…", o:["PPP","RPP","RRP","RRR"], a:2, e:"Deux rotations d'axes verticaux + une translation verticale." },
    { c:2, q:"Une liaison de degré de liberté m = 1 est dite…", o:["simple","complexe","passive","parallèle"], a:0, e:"m = 1 : simple (P ou R). m > 1 : complexe (ex. rotule)." },
    { c:2, q:"Un robot avec un porteur RPP est…", o:["cartésien","cylindrique","angulaire","SCARA"], a:1, e:"Une rotation + deux translations → coordonnées cylindriques." },
    // Ch3
    { c:3, q:"La charge utile d'un robot est…", o:["la masse du bras","la charge maximale supportée","la vitesse maximale","le volume de travail"], a:1, e:"C'est la charge maximale que le robot peut porter." },
    { c:3, q:"La répétabilité mesure…", o:["la précision en position","la vitesse","la charge utile","le coût d'exploitation"], a:0, e:"Capacité à revenir au même point, ex. ± 0,01 mm." },
    { c:3, q:"Un préhenseur pneumatique utilise en général…", o:["une pince","une ventouse","un aimant","un codeur"], a:1, e:"Mécanique → pince ; pneumatique → ventouse ; magnétique → objets métalliques." },
    { c:3, q:"Quel élément du robot a toujours la vitesse la plus grande ?", o:["La base","Le premier axe","Le dernier élément","Le porteur"], a:2, e:"Les vitesses s'additionnent le long de la chaîne." },
    { c:3, q:"Volume de travail d'un robot cartésien 500 × 500 × 300 mm :", o:["1,3·10⁶ mm³","75·10⁶ mm³","750·10⁶ mm³","7,5·10⁶ mm³"], a:1, e:"500 × 500 × 300 = 75 000 000 mm³." },
    // Ch4
    { c:4, q:"Dans un codeur incrémental, le signal Z sert à…", o:["donner le sens de rotation","compter le nombre de tours","mesurer la vitesse","alimenter le codeur"], a:1, e:"Z = top de référence, un par tour." },
    { c:4, q:"Le sens de rotation d'un codeur incrémental est donné par…", o:["la piste Z","les pistes A et B","le nombre de pistes","le réducteur"], a:1, e:"Le déphasage entre A et B indique le sens." },
    { c:4, q:"Un codeur absolu à 8 pistes donne combien de positions ?", o:["16","64","256","512"], a:2, e:"Np = 2ⁿ = 2⁸ = 256." },
    { c:4, q:"Il faut au moins 500 positions. Combien de pistes pour un codeur absolu ?", o:["8","9","10","500"], a:1, e:"log 500 / log 2 ≈ 8,97 → on arrondit à 9 (2⁹ = 512)." },
    { c:4, q:"Un capteur de contact repose sur une technologie…", o:["TOR","analogique","optique","capacitive"], a:0, e:"TOR = tout ou rien (interrupteur)." },
    { c:4, q:"Translation : vis de pas P = 5 mm, R = 1, pas souhaité Ps = 0,01 mm. Np = ?", o:["50","200","500","5 000"], a:2, e:"Np = R·P / Ps = 1 × 5 / 0,01 = 500 points/tour." },
    { c:4, q:"Le calcul donne Np = 222. Catalogue : C2 = 200, C3 = 300, C4 = 400. On choisit…", o:["C2","C3","C4","aucun"], a:1, e:"On prend le premier codeur au-dessus de la valeur calculée." },
    // Ch5
    { c:5, q:"Un vérin double effet (VDE) possède…", o:["1 commande","2 commandes","3 commandes","aucune commande"], a:1, e:"VSE : 1 commande ; VDE : 2 commandes." },
    { c:5, q:"p = 6 bar, S = 10⁻³ m². Force du vérin ?", o:["6 N","60 N","600 N","6 000 N"], a:2, e:"F = p·S = 6·10⁵ × 10⁻³ = 600 N." },
    { c:5, q:"p = 1 bar et Q = 2·10⁻³ m³/s. Puissance hydraulique ?", o:["2 W","20 W","200 W","2 000 W"], a:2, e:"P = p·Q = 10⁵ × 2·10⁻³ = 200 W (p en pascals)." },
    { c:5, q:"Réducteur : Z menante = 20, Z menée = 60. R = ?", o:["3","1/3","1/2","1/6"], a:1, e:"R = Z menantes / Z menées = 20 / 60 = 1/3." },
    { c:5, q:"Moteur : Cm = 2 N·m, Ωm = 100 rad/s. Puissance utile ?", o:["50 W","102 W","200 W","2 000 W"], a:2, e:"Pu = Cm · Ωm = 2 × 100 = 200 W." },
    { c:5, q:"Le rendement d'un vérin hydraulique vaut…", o:["P hydraulique / P mécanique","P mécanique / P hydraulique","P × Q","F / S"], a:1, e:"η = puissance utile (mécanique) / puissance absorbée (hydraulique)." },
    // Ch6
    { c:6, q:"La matrice homogène est une matrice…", o:["2 × 2","3 × 3","4 × 4","6 × 6"], a:2, e:"Rotation 3×3 + translation 3×1 + ligne (0 0 0 1)." },
    { c:6, q:"La 4e colonne d'une matrice homogène représente…", o:["la rotation","la position (translation)","le rendement","les angles d'Euler"], a:1, e:"Les 3 premières lignes de la 4e colonne donnent la translation." },
    { c:6, q:"Pour une articulation prismatique, la matrice de rotation est…", o:["nulle","l'identité","une rotation autour de z","une rotation autour de x"], a:1, e:"Une translation ne change pas l'orientation." },
    { c:6, q:"La convention de Denavit–Hartenberg s'applique aux robots…", o:["parallèles","série uniquement","mobiles uniquement","mixtes"], a:1, e:"D–H est applicable aux robots série uniquement." },
    { c:6, q:"Combien de paramètres utilise la convention D–H par articulation ?", o:["2","3","4","6"], a:2, e:"αᵢ, dᵢ, θᵢ, rᵢ : 2 angles et 2 distances." },
    { c:6, q:"Dans la matrice de rotation autour de z, l'élément ligne 1, colonne 2 vaut…", o:["cos θ","sin θ","−sin θ","0"], a:2, e:"Rz = [[cθ, −sθ, 0], [sθ, cθ, 0], [0, 0, 1]]." },
    { c:6, q:"Robot SCARA du TD, θ₁ = θ₂ = 0. La coordonnée x de E vaut…", o:["e","e + f","e + f + g","f + g"], a:2, e:"x = e + f·C₁ + g·C₁₂ = e + f + g." },
    { c:6, q:"On écrit C₁₂ pour…", o:["cos θ₁ · cos θ₂","cos(θ₁ + θ₂)","cos(θ₁ − θ₂)","cos θ₁₂ (angle 12)"], a:1, e:"Notation abrégée de cos(θ₁ + θ₂)." }
  ];

  const $ = id => document.getElementById(id);
  const LETTERS = 'ABCD';
  const EXAM_N = 20, EXAM_SEC = 20 * 60;
  let practiceCh = 0; // 0 = tous
  let run = null, timerId = null;

  // chapter chips
  const chipsEl = $('chapChips');
  chipsEl.replaceChildren();
  [[0, 'Tous']].concat(Object.keys(CH).map(k => [+k, 'Ch. ' + k + ' · ' + CH[k].name])).forEach(([k, label]) => {
    const b = document.createElement('button');
    b.className = 'chip' + (k === 0 ? ' on' : ''); b.textContent = label; b.dataset.ch = k;
    b.onclick = () => { practiceCh = k; chipsEl.querySelectorAll('.chip').forEach(c => c.classList.toggle('on', +c.dataset.ch === k)); };
    chipsEl.appendChild(b);
  });

  function shuffle(a) { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }
  // Shuffle options too, keeping track of the right answer
  function prep(q) { const idx = shuffle([0,1,2,3].slice(0, q.o.length)); return { ...q, o: idx.map(i => q.o[i]), a: idx.indexOf(q.a) }; }

  function showPane(id) {
    ['quiz-start', 'quiz-run', 'quiz-result'].forEach(p => $(p).classList.toggle('hidden', p !== id));
    window.scrollTo({ top: 0 });
  }

  function start(mode) {
    let qs = mode === 'exam' ? shuffle(BANK).slice(0, EXAM_N) : shuffle(BANK.filter(q => !practiceCh || q.c === practiceCh));
    run = { mode, qs: qs.map(prep), ans: qs.map(() => null), i: 0, left: EXAM_SEC, deadline: Date.now() + EXAM_SEC * 1000 };
    clearInterval(timerId);
    $('runTimer').classList.toggle('hidden', mode !== 'exam');
    if (mode === 'exam') { tick(); timerId = setInterval(tick, 1000); }
    showPane('quiz-run'); render();
  }
  function tick() {
    run.left = Math.max(0, Math.ceil((run.deadline - Date.now()) / 1000));
    const m = Math.floor(run.left / 60), s = run.left % 60;
    $('runTimer').textContent = String(m).padStart(2, '0') + ':' + String(s).padStart(2, '0');
    $('runTimer').classList.toggle('low', run.left <= 60);
    if (run.left <= 0) { finish(); return; }
  }

  function render() {
    const q = run.qs[run.i], n = run.qs.length, chosen = run.ans[run.i];
    const locked = run.mode === 'practice' && chosen !== null;
    $('runChap').textContent = 'Ch. ' + q.c + ' · ' + CH[q.c].name;
    $('runChap').style.background = CH[q.c].color;
    $('runCount').innerHTML = '<span class="hide-sm">Question </span>' + (run.i + 1) + ' / ' + n;
    $('runBar').style.width = ((run.ans.filter(a => a !== null).length) / n * 100) + '%';
    $('runQ').textContent = q.q;
    const box = $('runOpts'); box.innerHTML = '';
    q.o.forEach((txt, k) => {
      const b = document.createElement('button');
      b.className = 'opt';
      b.innerHTML = '<span class="letter">' + LETTERS[k] + '</span><span></span>';
      b.lastChild.textContent = txt;
      if (locked) { b.disabled = true; if (k === q.a) b.classList.add('good'); else if (k === chosen) b.classList.add('bad'); }
      else if (k === chosen) b.classList.add('sel');
      b.onclick = () => { run.ans[run.i] = k; render(); };
      box.appendChild(b);
    });
    const fb = $('runFb');
    delete fb.dataset.warned;
    if (locked) {
      const ok = chosen === q.a;
      fb.className = 'feedback ' + (ok ? 'ok' : 'ko');
      fb.innerHTML = '<b>' + (ok ? 'Bonne réponse' : 'Réponse : ' + LETTERS[q.a] + ' — ' + escapeHtml(q.o[q.a])) + '</b>' + escapeHtml(q.e);
    } else fb.className = 'feedback hidden';
    $('prevQ').disabled = run.i === 0;
    const last = run.i === n - 1;
    $('nextQ').textContent = last ? (run.mode === 'exam' ? 'Terminer l\'examen' : 'Voir le résultat') : 'Suivant →';
    const dots = $('runDots'); dots.innerHTML = '';
    if (n <= 20) run.qs.forEach((_, k) => { const d = document.createElement('span'); if (run.ans[k] !== null) d.className = 'done'; if (k === run.i) d.classList.add('cur'); dots.appendChild(d); });
  }
  function escapeHtml(s) { return s.replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c])); }

  $('prevQ').onclick = () => { if (run.i > 0) { run.i--; render(); } };
  $('nextQ').onclick = () => {
    if (run.i < run.qs.length - 1) { run.i++; render(); return; }
    const missing = run.ans.filter(a => a === null).length;
    if (run.mode === 'exam' && missing && !confirmFinish(missing)) return;
    finish();
  };
  function confirmFinish(missing) {
    const fb = $('runFb');
    if (fb.dataset.warned === '1') { fb.dataset.warned = ''; return true; }
    fb.dataset.warned = '1';
    fb.className = 'feedback ko';
    fb.innerHTML = '<b>' + missing + ' question(s) sans réponse.</b>Clique encore sur « Terminer l\'examen » pour valider quand même.';
    return false;
  }
  $('quitQuiz').onclick = () => { clearInterval(timerId); showPane('quiz-start'); };
  $('startPractice').onclick = () => start('practice');
  $('startExam').onclick = () => start('exam');
  $('retryQuiz').onclick = () => start(run.mode);
  $('backQuiz').onclick = () => showPane('quiz-start');

  function finish() {
    clearInterval(timerId);
    const n = run.qs.length;
    const score = run.qs.reduce((s, q, k) => s + (run.ans[k] === q.a ? 1 : 0), 0);
    const pct = Math.round(score / n * 100);
    const note = Math.round(score / n * 200) / 10;
    const ring = $('scoreRing');
    ring.style.setProperty('--p', pct);
    ring.style.setProperty('--ring', pct >= 70 ? '#0e9f6e' : pct >= 50 ? 'var(--warn)' : '#dc2626');
    $('scoreTxt').textContent = score + '/' + n;
    $('scoreTitle').textContent = pct >= 80 ? 'Excellent !' : pct >= 60 ? 'Bien joué' : pct >= 40 ? 'À consolider' : 'À retravailler';
    let sub = pct + ' % de bonnes réponses · note ' + String(note).replace('.', ',') + ' / 20';
    if (run.mode === 'exam') {
      const used = EXAM_SEC - Math.max(run.left, 0);
      sub += ' · temps ' + Math.floor(used / 60) + ' min ' + String(used % 60).padStart(2, '0') + ' s';
      try {
        const best = +localStorage.getItem('robotique-best') || 0;
        if (note > best) localStorage.setItem('robotique-best', note);
      } catch (e) {}
      showBest();
    }
    $('scoreSub').textContent = sub;
    // per chapter
    const bars = $('chapBars'); bars.innerHTML = '';
    Object.keys(CH).forEach(k => {
      const qs = run.qs.map((q, i) => [q, i]).filter(([q]) => q.c === +k);
      if (!qs.length) return;
      const ok = qs.filter(([q, i]) => run.ans[i] === q.a).length;
      const row = document.createElement('div'); row.className = 'chap-bar';
      row.innerHTML = '<span>Ch. ' + k + ' · ' + CH[k].name + '</span><div class="track"><div class="fill" style="width:' + (ok / qs.length * 100) + '%;background:' + CH[k].color + '"></div></div><span class="v">' + ok + '/' + qs.length + '</span>';
      bars.appendChild(row);
    });
    // review (wrong answers first)
    const rv = $('review'); rv.innerHTML = '';
    const order = run.qs.map((q, i) => i).sort((x, y) => (run.ans[x] === run.qs[x].a) - (run.ans[y] === run.qs[y].a));
    order.forEach(i => {
      const q = run.qs[i], a = run.ans[i], ok = a === q.a;
      const d = document.createElement('div'); d.className = 'rv' + (ok ? '' : ' ko');
      d.innerHTML = '<div class="rq"></div><div class="ra"></div>';
      d.firstChild.textContent = (i + 1) + '. ' + q.q;
      d.lastChild.innerHTML = (ok ? '✓ ' : '✗ Ta réponse : ' + (a === null ? '<b>aucune</b>' : '<b>' + escapeHtml(q.o[a]) + '</b>') + ' · ') +
        'Bonne réponse : <b>' + escapeHtml(q.o[q.a]) + '</b><br>' + escapeHtml(q.e);
      rv.appendChild(d);
    });
    showPane('quiz-result');
  }
  function showBest() {
    let best = 0; try { best = +localStorage.getItem('robotique-best') || 0; } catch (e) {}
    $('bestScore').textContent = best ? 'Meilleure note : ' + String(best).replace('.', ',') + ' / 20' : '';
  }
  showBest();

  showView(viewOfHash() || 'cours');
  if (location.hash && !['#cours', '#exercices', '#quiz'].includes(location.hash)) {
    document.getElementById(location.hash.slice(1))?.scrollIntoView();
  }

  return () => {
    events.abort();
    obs.disconnect();
    clearInterval(timerId);
    for (const id of ['prevQ', 'nextQ', 'quitQuiz', 'startPractice', 'startExam', 'retryQuiz', 'backQuiz']) {
      $(id).onclick = null;
    }
    chipsEl.replaceChildren();
    $('runOpts').replaceChildren();
  };
}
