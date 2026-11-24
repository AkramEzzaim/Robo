export function setupCourseInteractions({ chapters, questions, searchPlaceholder, bestScoreKey }) {
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
    q.placeholder = name === 'quiz' ? 'Recherche indisponible pendant le quiz' : searchPlaceholder;
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

  const $ = id => document.getElementById(id);
  const LETTERS = 'ABCD';
  const EXAM_N = 20, EXAM_SEC = 20 * 60;
  let practiceCh = 0; // 0 = tous
  let run = null, timerId = null;

  // chapter chips
  const chipsEl = $('chapChips');
  chipsEl.replaceChildren();
  [[0, 'Tous']].concat(Object.keys(chapters).map(k => [+k, 'Ch. ' + k + ' · ' + chapters[k].name])).forEach(([k, label]) => {
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
    let qs = mode === 'exam' ? shuffle(questions).slice(0, EXAM_N) : shuffle(questions.filter(q => !practiceCh || q.c === practiceCh));
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
    $('runChap').textContent = 'Ch. ' + q.c + ' · ' + chapters[q.c].name;
    $('runChap').style.background = chapters[q.c].color;
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
        const best = +localStorage.getItem(bestScoreKey) || 0;
        if (note > best) localStorage.setItem(bestScoreKey, note);
      } catch (e) {}
      showBest();
    }
    $('scoreSub').textContent = sub;
    // per chapter
    const bars = $('chapBars'); bars.innerHTML = '';
    Object.keys(chapters).forEach(k => {
      const qs = run.qs.map((q, i) => [q, i]).filter(([q]) => q.c === +k);
      if (!qs.length) return;
      const ok = qs.filter(([q, i]) => run.ans[i] === q.a).length;
      const row = document.createElement('div'); row.className = 'chap-bar';
      row.innerHTML = '<span>Ch. ' + k + ' · ' + chapters[k].name + '</span><div class="track"><div class="fill" style="width:' + (ok / qs.length * 100) + '%;background:' + chapters[k].color + '"></div></div><span class="v">' + ok + '/' + qs.length + '</span>';
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
    let best = 0; try { best = +localStorage.getItem(bestScoreKey) || 0; } catch (e) {}
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
