// Shared course markup for the Next.js page, with LaTeX rendered by KaTeX.
export const content = String.raw`
<header class="topbar">
  <div class="brand">
    <div class="logo"><svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="5" cy="19" r="2"/><path d="M6.5 17.5 11 10"/><circle cx="12" cy="8.5" r="2"/><path d="M14 8.5h4.5"/><path d="M18.5 6v5"/></svg></div>
    <span>Robotique industrielle</span>
  </div>
  <label class="search">
    <svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>
    <input id="q" type="search" aria-label="Rechercher" placeholder="Rechercher : codeur, D-H, vérin…" autocomplete="off">
  </label>
  <button class="icon-btn" id="theme" title="Changer de thème" aria-label="Changer de thème">
    <svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>
  </button>
</header>

<div class="layout">
  <nav class="side" id="nav">
    <div class="navgroup" data-view="cours">
      <div class="label">Cours</div>
      <a href="#ch1"><span class="dot" style="background:var(--c1)"></span>Introduction</a>
      <a href="#ch2"><span class="dot" style="background:var(--c2)"></span>Architectures</a>
      <a href="#ch3"><span class="dot" style="background:var(--c3)"></span>Performances</a>
      <a href="#ch4"><span class="dot" style="background:var(--c4)"></span>Capteurs</a>
      <a href="#ch5"><span class="dot" style="background:var(--c5)"></span>Actionneurs</a>
      <a href="#ch6"><span class="dot" style="background:var(--c6)"></span>Modélisation géométrique</a>
    </div>
    <div class="navgroup hidden" data-view="exercices">
      <div class="label">Exercices</div>
      <a href="#ex1"><span class="dot" style="background:var(--c1)"></span>TD 1 · Introduction</a>
      <a href="#ex2"><span class="dot" style="background:var(--c2)"></span>TD 2 · Architectures</a>
      <a href="#ex3"><span class="dot" style="background:var(--c3)"></span>TD 3 · Performances</a>
      <a href="#ex4"><span class="dot" style="background:var(--c4)"></span>Série 5 · Codeurs</a>
      <a href="#ex6"><span class="dot" style="background:var(--c6)"></span>Séries 6–7 · Modélisation</a>
      <a href="#check"><span class="dot" style="background:var(--warn)"></span>Points à vérifier</a>
    </div>
    <div class="navgroup hidden" data-view="quiz">
      <div class="label">Quiz &amp; Examen</div>
      <a href="#quiz-start"><span class="dot" style="background:var(--accent)"></span>Choisir un mode</a>
    </div>
  </nav>

  <main>
    <div class="hero">
      <h1>Robotique industrielle</h1>
      <p>Le cours, les TD corrigés et des quiz pour réviser, chapitre par chapitre.</p>
      <div class="tabs" role="tablist">
        <button class="tab active" id="tab-cours" data-target="cours" role="tab" aria-controls="view-cours" aria-selected="true">Cours <span class="count">6</span></button>
        <button class="tab" id="tab-exercices" data-target="exercices" role="tab" aria-controls="view-exercices" aria-selected="false">Exercices <span class="count">5</span></button>
        <button class="tab" id="tab-quiz" data-target="quiz" role="tab" aria-controls="view-quiz" aria-selected="false">Quiz &amp; Examen <span class="count">40</span></button>
      </div>
    </div>

    <nav class="mnav hidden" id="mnav" aria-label="Sections"></nav>

    <div class="view" id="view-cours" role="tabpanel" aria-labelledby="tab-cours" data-view="cours">
      <div class="stats">
        <div class="stat"><div class="n">6</div><div class="l">Chapitres</div></div>
        <div class="stat"><div class="n">4</div><div class="l">Types de robots</div></div>
        <div class="stat"><div class="n">18</div><div class="l">Formules clés</div></div>
        <div class="stat"><div class="n">4</div><div class="l">Matrices types</div></div>
      </div>

    <!-- CH1 -->
    <section class="chap" id="ch1">
      <div class="chap-head"><span class="badge" style="background:var(--c1)">Ch. 1</span><h2>Introduction à la robotique industrielle</h2></div>
      <div class="grid">
        <div class="card">
          <h3>Les 4 types de robots</h3>
          <div class="table-scroll" tabindex="0" role="region" aria-label="Tableau du cours">
            <table>
              <tr><th>Type</th><th>Secteurs</th></tr>
              <tr><td><b>Industriel</b></td><td>Industrie, conditionnement</td></tr>
              <tr><td><b>Humanoïde</b></td><td>Accueil, restauration</td></tr>
              <tr><td><b>Collaboratif</b></td><td>Industrie</td></tr>
              <tr><td><b>Mobile</b></td><td>Militaire, magasins, manutention</td></tr>
            </table>
          </div>
        </div>
        <div class="card">
          <h3>Modes de fonctionnement</h3>
          <ol>
            <li><b>Télémanipulateur</b> : maître / esclave.</li>
            <li><b>Programmable</b> : apprentissage, puis exécution (restitution) de la trajectoire enregistrée.</li>
            <li><b>Relation homme–machine</b> (4e mode) : capteurs externes pour percevoir l'environnement.</li>
          </ol>
          <p class="muted" style="margin-top:10px">Déplacements programmés :</p>
          <div class="pills"><span class="pill"><b>PTP</b> point par point</span><span class="pill"><b>LIN</b> linéaire</span><span class="pill"><b>CIRC</b> circulaire</span></div>
        </div>
        <div class="card">
          <h3>Éléments d'un robot</h3>
          <ul>
            <li><b>UCC</b> : unité de commande et de contrôle.</li>
            <li><b>SMA</b> : système mécanique articulé (bras reliés par des articulations).</li>
            <li><b>Capteurs internes</b> (proprioceptifs) : état interne du robot.</li>
            <li><b>Capteurs externes</b> (extéroceptifs) : perception de l'environnement.</li>
            <li><b>Actionneurs</b> : animent les articulations.</li>
          </ul>
        </div>
        <div class="card">
          <h3>Boucle du 4e mode</h3>
          <div class="flow"><span class="step">Homme</span><span class="arrow">→</span><span class="step">Commande</span><span class="arrow">→</span><span class="step">Actions / Outils</span><span class="arrow">→</span><span class="step">Tâche</span></div>
          <p class="muted" style="margin-top:10px">Retour par le capteur interne (vers la commande) et par le capteur externe (depuis la tâche).</p>
        </div>
        <div class="card">
          <h3>Composants technologiques</h3>
          <ul>
            <li><b>Le bras</b>.</li>
            <li><b>Le préhenseur</b> : saisit ou agrippe un objet (ventouse, aimant, pince…).</li>
          </ul>
        </div>
        <div class="card">
          <h3>Programmation et intérêt</h3>
          <ul>
            <li>Hors ligne (CAO, CFAO…) ou sur site.</li>
            <li>Améliorer la production, la qualité et les bénéfices.</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- CH2 -->
    <section class="chap" id="ch2">
      <div class="chap-head"><span class="badge" style="background:var(--c2)">Ch. 2</span><h2>Architectures des robots industriels</h2></div>
      <div class="grid">
        <div class="card">
          <h3>Liaisons mécaniques</h3>
          <p>Degré de liberté : $1 \le m \le 6$.</p>
          <ul>
            <li><b>m = 1</b> : simple — prismatique <code>P</code> ou rotoïde <code>R</code>.</li>
            <li><b>m &gt; 1</b> : complexe — ex. rotule.</li>
            <li><b>Active</b> : motorisée. <b>Passive</b> : non motorisée (la rotule est passive).</li>
          </ul>
        </div>
        <div class="card">
          <h3>Robot série</h3>
          <ol>
            <li><b>Base</b> : fixe ou mobile.</li>
            <li><b>Porteur</b> : les 3 premières liaisons ; positionne l'effecteur (pivot = rotation, glissière = translation).</li>
            <li><b>Poignet</b> : oriente l'effecteur, uniquement des liaisons <code>R</code>.</li>
          </ol>
          <p class="muted" style="margin-top:8px">Architectures : série, parallèle, mixte.</p>
        </div>
        <div class="card">
          <h3>Type de robot selon le porteur</h3>
          <div class="table-scroll" tabindex="0" role="region" aria-label="Tableau du cours">
            <table>
              <tr><th>Type</th><th>Porteur</th></tr>
              <tr><td>Cartésien</td><td><code>PPP</code></td></tr>
              <tr><td>Cylindrique</td><td><code>RPP</code></td></tr>
              <tr><td>SCARA</td><td><code>RRP</code></td></tr>
              <tr><td>Angulaire</td><td><code>RRR</code></td></tr>
            </table>
          </div>
        </div>
        <div class="card">
          <h3>Décrire un robot <span class="tag">méthode</span></h3>
          <p>Architecture · DDL total (porteur + poignet) · porteur · poignet · type.</p>
          <p class="muted">Ex. : série, m = 4 (3 + 1), porteur PPP, poignet 1 axe → cartésien.</p>
        </div>
      </div>
    </section>

    <!-- CH3 -->
    <section class="chap" id="ch3">
      <div class="chap-head"><span class="badge" style="background:var(--c3)">Ch. 3</span><h2>Performances et effecteurs</h2></div>
      <div class="grid">
        <div class="card">
          <h3>Performances techniques</h3>
          <p class="muted">Dépendent du SMA, des capteurs et de l'UCC.</p>
          <ol>
            <li>Volume de travail</li>
            <li>Débattements des articulations</li>
            <li>Charge utile (charge maximale)</li>
            <li>Précision en position (répétabilité)</li>
            <li>Résolution</li>
            <li>Vitesse / accélération — la vitesse du dernier élément est la plus grande</li>
          </ol>
        </div>
        <div class="card">
          <h3>Performances économiques</h3>
          <ul>
            <li>Coûts d'investissement et d'exploitation</li>
            <li>Nature des tâches</li>
          </ul>
        </div>
        <div class="card">
          <h3>Effecteurs</h3>
          <div class="table-scroll" tabindex="0" role="region" aria-label="Tableau du cours">
            <table>
              <tr><th>Préhenseur</th><th>Exemple</th></tr>
              <tr><td>Mécanique</td><td>Pince</td></tr>
              <tr><td>Pneumatique</td><td>Ventouse</td></tr>
              <tr><td>Magnétique</td><td>Objets métalliques</td></tr>
            </table>
          </div>
          <p class="muted" style="margin-top:8px">+ les outils classiques.</p>
        </div>
      </div>
    </section>

    <!-- CH4 -->
    <section class="chap" id="ch4">
      <div class="chap-head"><span class="badge" style="background:var(--c4)">Ch. 4</span><h2>Technologies des capteurs</h2></div>
      <div class="grid">
        <div class="card">
          <h3>Contact et proximité</h3>
          <ul>
            <li><b>Contact</b> : interrupteurs, technologie TOR.</li>
            <li><b>Proximité</b> : inductif, capacitif, photoélectrique.</li>
          </ul>
        </div>
        <div class="card">
          <h3>Codeur incrémental <span class="tag">3 pistes max</span></h3>
          <ul>
            <li><b>Z</b> : référence, compte les tours.</li>
            <li><b>A et B</b> : position angulaire + sens de rotation.</li>
          </ul>
        </div>
        <div class="card">
          <h3>Codeur absolu</h3>
          <p>Plus de pistes = meilleure résolution. Un 2e disque peut compter les tours.</p>
          <div class="formula">$$N_p = 2^n \;\Rightarrow\; n = \frac{\log N_p}{\log 2}$$</div>
          <p class="muted">On arrondit toujours n à l'entier supérieur.</p>
        </div>
        <div class="card">
          <h3>Nombre de points par tour</h3>
          <p class="muted">Mouvement circulaire (Ps en degrés) :</p>
          <div class="formula">$$N_p = \frac{360 \cdot R}{P_s}$$</div>
          <p class="muted">Translation (P = pas de vis ou $\pi D$) :</p>
          <div class="formula">$$N_p = \frac{R \cdot P}{P_s}$$</div>
          <p class="muted">Codeur incrémental : on prend le premier modèle du catalogue au-dessus de Np.</p>
        </div>
      </div>
    </section>

    <!-- CH5 -->
    <section class="chap" id="ch5">
      <div class="chap-head"><span class="badge" style="background:var(--c5)">Ch. 5</span><h2>Technologie des actionneurs</h2></div>
      <div class="grid">
        <div class="card">
          <h3>Vérins (pneumatiques / hydrauliques)</h3>
          <ul>
            <li><b>VSE</b> — simple effet : 1 commande.</li>
            <li><b>VDE</b> — double effet : 2 commandes.</li>
          </ul>
          <div class="formula">$$p = \frac{F}{S}\qquad S_A = \pi R^2\qquad S_B = S_A - S_{tige}$$</div>
          <p class="muted">1 bar = 10⁵ Pa.</p>
        </div>
        <div class="card">
          <h3>Débit, travail, puissance</h3>
          <div class="formula">$$Q_v = \frac{V}{t} = v \cdot S$$</div>
          <div class="formula">$$W = F \cdot d$$</div>
          <div class="formula">$$P = F\cdot v = p\cdot S\cdot v = p \cdot Q$$</div>
          <p class="muted">Dans $P = p\cdot Q$, p est en pascals.</p>
        </div>
        <div class="card">
          <h3>Rendement</h3>
          <div class="formula">$$\eta = \frac{P_{\text{mécanique}}}{P_{\text{hydraulique}}}$$</div>
          <p class="muted">Utile : énergie mécanique. Absorbée : hydraulique ou pneumatique.</p>
        </div>
        <div class="card">
          <h3>Actionneurs électriques</h3>
          <div class="flow"><span class="step">Source P<sub>E</sub></span><span class="arrow">→</span><span class="step">Moteur P<sub>u</sub></span><span class="arrow">→</span><span class="step">Réducteur R</span><span class="arrow">→</span><span class="step">Charge</span></div>
          <div class="formula">$$P_u = C_m \cdot \Omega_m \qquad \eta = \frac{P_u}{P_E}$$</div>
          <div class="formula">$$R = \frac{\prod Z_{\text{menantes}}}{\prod Z_{\text{menées}}} = \frac{\omega_R}{\omega_m}$$</div>
          <p class="muted">Ex. 1 étage : 40 / 120 = 1/3.</p>
        </div>
      </div>
    </section>

    <!-- CH6 -->
    <section class="chap" id="ch6">
      <div class="chap-head"><span class="badge" style="background:var(--c6)">Ch. 6</span><h2>Modélisation géométrique</h2></div>
      <div class="grid wide">
        <div class="card">
          <h3>Principe</h3>
          <p>Le modèle géométrique direct donne la <b>position</b> $(x, y, z)$ et l'<b>orientation</b> de l'effecteur à partir des variables articulaires $(q, \theta)$.</p>
          <ul>
            <li>Repères : $R_0$ (base) → $R_n$ (effecteur).</li>
            <li>Orientation : angles d'Euler ou matrices de rotation.</li>
            <li>Articulation prismatique → matrice identité.</li>
          </ul>
        </div>
        <div class="card">
          <h3>Rotations élémentaires</h3>
          <div class="formula">$$R_x=\begin{bmatrix}1&0&0\\0&c\theta&-s\theta\\0&s\theta&c\theta\end{bmatrix}$$</div>
          <div class="formula">$$R_y=\begin{bmatrix}c\theta&0&s\theta\\0&1&0\\-s\theta&0&c\theta\end{bmatrix}$$</div>
          <div class="formula">$$R_z=\begin{bmatrix}c\theta&-s\theta&0\\s\theta&c\theta&0\\0&0&1\end{bmatrix}$$</div>
          <p class="muted">Composition : $M_0^2 = M_0^1 \cdot M_1^2$. Notation $C_{12} = \cos(\theta_1+\theta_2)$.</p>
        </div>
        <div class="card">
          <h3>Vecteur position <span class="tag">matrices de passage</span></h3>
          <div class="formula">$$\overrightarrow{O_0E}_{/R_0} = \overrightarrow{O_0O_1}_{/R_0} + M_0^1\,\overrightarrow{O_1O_2}_{/R_1} + \dots + M_0^n\,\overrightarrow{O_nE}_{/R_n}$$</div>
        </div>
        <div class="card">
          <h3>Matrice homogène 4×4</h3>
          <div class="formula">$$T = \begin{bmatrix} R_{3\times3} & T_{3\times1} \\ 0\;0\;0 & 1\end{bmatrix} \qquad \overrightarrow{O_0P}_{/R_0} = T_0^n \begin{pmatrix}x\\y\\z\\1\end{pmatrix}$$</div>
          <p class="muted">Rotation + position en une seule matrice. $T_0^n = T_0^1 \cdots T_{n-1}^n$. Même résultat que la méthode 3×3.</p>
        </div>
        <div class="card span2">
          <h3>Paramètres de Denavit–Hartenberg <span class="tag">robots série uniquement</span></h3>
          <div class="split">
            <div class="table-scroll" tabindex="0" role="region" aria-label="Tableau du cours">
              <table>
                <tr><th>Param.</th><th>Type</th><th>Entre</th></tr>
                <tr><td>$\alpha_i$</td><td>Angle</td><td>$z_{i-1}$ et $z_i$</td></tr>
                <tr><td>$d_i$</td><td>Distance</td><td>$z_{i-1}$ et $z_i$</td></tr>
                <tr><td>$\theta_i$</td><td>Angle</td><td>$x_{i-1}$ et $x_i$</td></tr>
                <tr><td>$r_i$</td><td>Distance</td><td>$x_{i-1}$ et $x_i$</td></tr>
              </table>
            </div>
            <div class="formula">$$T_{i-1}^{i}=\begin{bmatrix}c\theta_i&-s\theta_i&0&d_i\\c\alpha_i s\theta_i&c\alpha_i c\theta_i&-s\alpha_i&-r_i s\alpha_i\\s\alpha_i s\theta_i&s\alpha_i c\theta_i&c\alpha_i&r_i c\alpha_i\\0&0&0&1\end{bmatrix}$$</div>
          </div>
          <p class="muted" style="margin-top:10px">Méthode : un tableau (une ligne par passage $R_{i-1}\to R_i$), une matrice par ligne, puis le produit.</p>
        </div>
      </div>
    </section>

    </div>

    <div class="view hidden" id="view-exercices" role="tabpanel" aria-labelledby="tab-exercices" data-view="exercices">
      <div class="stats">
        <div class="stat"><div class="n">5</div><div class="l">Séries de TD</div></div>
        <div class="stat"><div class="n">18</div><div class="l">QCM corrigés</div></div>
        <div class="stat"><div class="n">2</div><div class="l">Robots modélisés</div></div>
        <div class="stat"><div class="n">6</div><div class="l">Points à vérifier</div></div>
      </div>

      <!-- EX CH1 -->
      <section class="chap" id="ex1">
        <div class="chap-head"><span class="badge" style="background:var(--c1)">Ch. 1</span><h2>TD n°1 — Introduction</h2></div>
        <div class="grid">
          <div class="card">
            <h3>1. QCM <span class="tag">réponses</span></h3>
            <div class="qcm">
              <div><span>1</span>C</div><div><span>2</span>B</div><div><span>3</span>C</div><div><span>4</span>A, C</div>
              <div><span>5</span>C</div><div><span>6</span>C</div><div><span>7</span>B</div><div><span>8</span>B, C</div>
            </div>
          </div>
          <div class="card">
            <h3>2. Relation homme–machine</h3>
            <div class="flow"><span class="step">Homme</span><span class="arrow">→</span><span class="step">Commande</span><span class="arrow">→</span><span class="step">Actions / Outils</span><span class="arrow">→</span><span class="step">Tâche</span></div>
            <p style="margin-top:10px">Le schéma représente le <b>4e mode</b>. Il se distingue par la présence de <b>capteurs externes</b>, dont le rôle est la perception de l'environnement.</p>
          </div>
          <div class="card">
            <h3>3 et 4. Types de robots et secteurs</h3>
            <div class="table-scroll" tabindex="0" role="region" aria-label="Tableau du cours">
              <table>
                <tr><th>Robot</th><th>Secteur / application</th></tr>
                <tr><td>Mobile</td><td>Militaire, gestion des magasins, manutention</td></tr>
                <tr><td>Humanoïde</td><td>Accueil, restauration</td></tr>
                <tr><td>Collaboratif</td><td>Industriel</td></tr>
                <tr><td>Industriel</td><td>Industriel, conditionnement</td></tr>
              </table>
            </div>
          </div>
          <div class="card span2">
            <h3>5 et 6. Questions de cours <span class="tag">réponses courtes</span></h3>
            <ol class="two-col">
              <li>SMA, UCC, capteurs, actionneurs.</li>
              <li>Un ensemble de bras reliés par des articulations.</li>
              <li>Hors ligne et sur site.</li>
              <li>L'apprentissage et la restitution.</li>
              <li>Des logiciels (CAO, CFAO…).</li>
              <li>Maître et esclave.</li>
              <li>Le robot exécute la trajectoire enregistrée pendant l'apprentissage.</li>
              <li>Animer en mouvement les articulations.</li>
              <li>Internes : détecter l'état interne du robot.</li>
              <li>Externes : percevoir l'environnement.</li>
              <li>SMA, UCC, capteurs, actionneurs.</li>
              <li>Améliorer la production, la qualité et les bénéfices.</li>
              <li>Les capteurs externes.</li>
            </ol>
          </div>
        </div>
      </section>

      <!-- EX CH2 -->
      <section class="chap" id="ex2">
        <div class="chap-head"><span class="badge" style="background:var(--c2)">Ch. 2</span><h2>TD n°2 — Architectures</h2></div>
        <div class="grid">
          <div class="card">
            <h3>1. QCM <span class="tag">réponses</span></h3>
            <div class="qcm">
              <div><span>1</span>A, C, D</div><div><span>2</span>D</div><div><span>3</span>B, C</div><div><span>4</span>C, D</div><div><span>5</span>C, D</div>
              <div><span>6</span>B, C</div><div><span>7</span>B, D</div><div><span>8</span>B, C</div><div><span>9</span>A, C</div><div><span>10</span>C, D</div>
            </div>
          </div>
          <div class="card">
            <h3>5. Types d'architectures — F1</h3>
            <div class="table-scroll" tabindex="0" role="region" aria-label="Tableau du cours">
              <table>
                <tr><td>Architecture</td><td>Série</td></tr>
                <tr><td>DDL</td><td>m = 4 (3 + 1)</td></tr>
                <tr><td>Porteur</td><td><code>PPP</code></td></tr>
                <tr><td>Poignet</td><td>1 axe</td></tr>
                <tr><td>Type</td><td><b>Cartésien</b></td></tr>
              </table>
            </div>
          </div>
          <div class="card">
            <h3>5. Types d'architectures — F2</h3>
            <div class="table-scroll" tabindex="0" role="region" aria-label="Tableau du cours">
              <table>
                <tr><td>Architecture</td><td>Série</td></tr>
                <tr><td>DDL</td><td>m = 4 (3 + 1)</td></tr>
                <tr><td>Porteur</td><td><span class="muted">non noté</span></td></tr>
                <tr><td>Poignet</td><td>1 axe</td></tr>
                <tr><td>Type</td><td><b>Angulaire</b></td></tr>
              </table>
            </div>
          </div>
        </div>
      </section>

      <!-- EX CH3 -->
      <section class="chap" id="ex3">
        <div class="chap-head"><span class="badge" style="background:var(--c3)">Ch. 3</span><h2>TD n°3 — Performances</h2></div>
        <div class="grid">
          <div class="card">
            <h3>TD 2 — Étude d'un robot industriel</h3>
            <ol>
              <li>Série, m = 4 (3 porteur + 1 poignet), robot sphérique.</li>
              <li>Précision en position : répétabilité ± 0,01 mm.</li>
              <li>Débattements : axe 1 ± 140°, axe 2 ± 155°, course 400 mm, axe 4 ± 500°.</li>
              <li>Vitesses différentes : il faut plus de souplesse en s'approchant de la pièce.</li>
              <li>C'est une translation, et il faut de la précision en s'approchant de la pièce.</li>
            </ol>
          </div>
          <div class="card">
            <h3>TD 3 — Robot cartésien</h3>
            <p>Volume de travail : un pavé de 500 × 500 × 300 mm.</p>
            <div class="formula">$$V = 500 \times 500 \times 300 = 75\cdot10^6\ \text{mm}^3$$</div>
          </div>
          <div class="card">
            <h3>TD 4 — Robot cylindrique</h3>
            <ul>
              <li>DDL = 5 : porteur <code>RPP</code>, poignet <code>2R</code>.</li>
              <li>Volume : cylindre creux, $R_{max} = 1000$ mm, $R_{min} = 300$ mm, $h = 800$ mm.</li>
            </ul>
            <div class="formula">$$V = \pi R_{max}^2 h - \pi R_{min}^2 h$$</div>
            <div class="formula">$$V = \pi(1000^2 - 300^2)\times 800 \approx 2287\cdot10^6\ \text{mm}^3$$</div>
            <p class="muted">Cycle : prise → pose → retour.</p>
          </div>
        </div>
      </section>

      <!-- EX CH4 -->
      <section class="chap" id="ex4">
        <div class="chap-head"><span class="badge" style="background:var(--c4)">Ch. 4</span><h2>Série n°5 — Capteurs et codeurs</h2></div>
        <div class="grid">
          <div class="card">
            <h3>TD 2 — Articulation de bras robotisé</h3>
            <p><b>a)</b> Ps = 0,0002 rad = 0,0002 × 360 / 2π = 0,011° ; R = 1/100.</p>
            <div class="formula">$$N_p = \frac{360 \times 1/100}{0{,}011} \approx 327$$</div>
            <p class="muted">≈ 327 points par tour.</p>
            <p><b>b)</b> 300 &lt; 327 &lt; 400 → codeur <b>C4 (400)</b>.</p>
            <p><b>c)</b> Codeur absolu :</p>
            <div class="formula">$$n = \frac{\log 400}{\log 2} = 8{,}64$$</div>
            <p>→ <b>n = 9 pistes</b> (bits).</p>
          </div>
          <div class="card">
            <h3>TD 3 — Codeur avec vis</h3>
            <ol>
              <li>Sens de rotation : grâce aux pistes A et B.</li>
              <li>Piste Z : référence, connaître le nombre de tours.</li>
              <li>Réducteur 1 étage : $R = Z_A / Z_B = 40/120 = 1/3$.</li>
              <li>Ps = 0,03 mm, P = 20 mm : Np = R·P / Ps = (1/3 × 20) / 0,03 = <b>222,2</b> pts/tour.</li>
              <li>C2 &lt; 222,2 &lt; C3 → on choisit <b>C3 = 300</b>.</li>
              <li>Ps = (1/300) × (1/3) × 20 = <b>0,022 mm</b> → la précision est améliorée.</li>
            </ol>
          </div>
          <div class="card">
            <h3>TD 4 — Position d'un convoyeur</h3>
            <p class="muted">D = 150 mm, R = 1, Ps = 0,25 mm.</p>
            <p><b>a)</b> Points par tour :</p>
            <div class="formula">$$N_p = \frac{\pi D \cdot R}{P_s} = \frac{\pi \times 150}{0{,}25}$$</div>
            <p>→ <b>N<sub>p</sub> ≈ 1 885</b> points par tour.</p>
            <p><b>b)</b> $n = \log N_p / \log 2 \approx 10{,}9$ → <b>11 bits</b>.</p>
            <p><b>c)</b> Sur 3 m : N = 3000 / (π × 150) = <b>6,37 tours</b>, soit 3000 / 0,25 = <b>12 000 points</b>.</p>
            <p class="muted">Le codeur absolu a un 2e disque pour compter les tours. Les notes donnent 600 pts/tour et 10 bits (π oublié).</p>
          </div>
        </div>
      </section>

      <!-- EX CH6 -->
      <section class="chap" id="ex6">
        <div class="chap-head"><span class="badge" style="background:var(--c6)">Ch. 6</span><h2>Séries n°6 et 7 — Modélisation géométrique</h2></div>
        <div class="grid wide">
          <div class="card">
            <h3>Série 6 · TD 1 — Matrices de rotation</h3>
            <p>Objectif : définir la position et l'orientation de l'effecteur par rapport à la base.</p>
            <p class="muted">Rotation θ₁ autour de z₀, puis θ₂ autour de y₁ :</p>
            <div class="formula">$$M_0^2 = M_0^1 M_1^2 = \begin{bmatrix} c_1c_2 & -s_1 & c_1s_2 \\ s_1c_2 & c_1 & s_1s_2 \\ -s_2 & 0 & c_2 \end{bmatrix}$$</div>
          </div>
          <div class="card">
            <h3>Série 6 · TD 2 — Robot ACMA-TH8 <span class="tag">RPP</span></h3>
            <ul>
              <li>Robot cylindrique, architecture série, m = 6.</li>
              <li>$M_0^1$ = rotation θ₁ autour de z ; $M_1^2 = M_2^3 = I$ (articulations P).</li>
              <li>Donc $M_0^3 = M_0^1$ : c'est l'orientation de $R_3/R_0$.</li>
            </ul>
            <div class="formula">$$\overrightarrow{O_0P}_{/R_0} = \begin{pmatrix} L_2c\theta_1 - T_2s\theta_1 \\ L_2s\theta_1 + T_2c\theta_1 \\ L_1+T_1 \end{pmatrix}$$</div>
            <p class="muted">θ₁ = 0 → (L₂, T₂, L₁ + T₁). Les méthodes homogène et D–H donnent le même résultat.</p>
          </div>
          <div class="card">
            <h3>ACMA-TH8 — Matrices homogènes</h3>
            <ul>
              <li>$R_0 \to R_1$ : translation $L_1$ suivant $z_0$.</li>
              <li>1re articulation : rotation θ₁ autour de $z_0$.</li>
              <li>$R_1 \to R_2$ : translation $T_1$ suivant $z_0$.</li>
              <li>$R_2 \to R_3$ : translation $L_2$ suivant $x$.</li>
            </ul>
            <div class="formula">$$T_0^4 = \begin{bmatrix} c\theta_1 & -s\theta_1 & 0 & L_2c\theta_1 \\ s\theta_1 & c\theta_1 & 0 & L_2s\theta_1 \\ 0&0&1& L_1+T_1 \\ 0&0&0&1 \end{bmatrix}$$</div>
            <p class="muted">Puis $\overrightarrow{O_0P} = T_0^4 \cdot (0,\ T_2,\ 0,\ 1)^T$.</p>
          </div>
          <div class="card">
            <h3>ACMA-TH8 — Paramètres D–H</h3>
            <div class="table-scroll" tabindex="0" role="region" aria-label="Tableau du cours">
              <table>
                <tr style="text-transform:none"><th style="text-transform:none">Passage</th><th style="text-transform:none">$\alpha_i$</th><th style="text-transform:none">$d_i$</th><th style="text-transform:none">$\theta_i$</th><th style="text-transform:none">$r_i$</th></tr>
                <tr><td>$R_0\to R_1$</td><td>0</td><td>0</td><td>$\theta_1$</td><td>$L_1$</td></tr>
                <tr><td>$R_1\to R_2$</td><td>0</td><td>0</td><td>0</td><td>$T_1$</td></tr>
                <tr><td>$R_2\to R_3$</td><td>0</td><td>$L_2$</td><td>0</td><td>0</td></tr>
              </table>
            </div>
            <div class="formula">$$T_0^3 = \begin{bmatrix} c\theta_1 & -s\theta_1 & 0 & L_2c\theta_1 \\ s\theta_1 & c\theta_1 & 0 & L_2s\theta_1 \\ 0&0&1& L_1+T_1 \\ 0&0&0&1 \end{bmatrix}$$</div>
          </div>
          <div class="card span2">
            <h3>Série 7 · TD 3 — Robot SCARA</h3>
            <div class="split">
              <div>
                <p class="muted">Matrices de passage : rotations θ₁, θ₂, θ₃ autour de z.</p>
                <div class="formula">$$M_0^4 = \begin{bmatrix} C_{123} & -S_{123} & 0 \\ S_{123} & C_{123} & 0 \\ 0&0&1 \end{bmatrix}$$</div>
                <div class="formula">$$\overrightarrow{O_0E}_{/R_0} = \begin{pmatrix} e + fC_1 + gC_{12} \\ fS_1 + gS_{12} \\ T-h \end{pmatrix}$$</div>
              </div>
              <div>
                <div class="table-scroll" tabindex="0" role="region" aria-label="Tableau du cours">
                  <table>
                    <tr><th>Configuration</th><th>Position de E</th></tr>
                    <tr><td>θ₁ = θ₂ = 0</td><td>(e + f + g, 0, T − h)</td></tr>
                    <tr><td>θ₁ = π/2, θ₂ = 0</td><td>(e, f + g, T − h)</td></tr>
                    <tr><td>θ₁ = π/2, θ₂ = −π/2</td><td>(e + g, f, T − h)</td></tr>
                  </table>
                </div>
                <p class="muted" style="margin-top:10px">Méthode homogène : $T_0^4 = T_0^1 T_1^2 T_2^3 T_3^4$, puis $\overrightarrow{O_0E} = T_0^4 \cdot (0, 0, -h, 1)^T$ — même résultat.</p>
                <p class="muted">Rappel : $\cos(a+b) = \cos a\cos b - \sin a \sin b$ ; $\sin(a+b) = \sin a\cos b + \cos a\sin b$.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- CHECK -->
      <section class="chap" id="check">
        <div class="chap-head"><span class="badge" style="background:var(--warn)">À vérifier</span><h2>Points à vérifier</h2></div>
        <div class="grid">
          <div class="card warn span2">
            <h3>Erreurs probables dans les notes</h3>
            <ul class="two-col">
              <li>« SCARA de type sphérique » : le SCARA est un type à part (RRP).</li>
              <li>Convoyeur : π oublié — 1 885 pts/tour et 11 bits, pas 600 et 10.</li>
              <li>ACMA-TH8, θ = 0 : L₁ + T₁, pas L₁ + T₂.</li>
              <li>T₀⁴ : sθ₁·L₂, pas sθ₁·L₁.</li>
              <li>D–H, T₀³ : 1re ligne cθ₁, −sθ₁.</li>
              <li>SCARA, M₀³ : sθ₁cθ₂ + cθ₁sθ₂ (signe +).</li>
            </ul>
            <p class="muted" style="margin-top:8px">À confirmer avec le corrigé officiel. Les formules de cette page sont corrigées.</p>
          </div>
        </div>
      </section>
    </div>

    <div class="view hidden" id="view-quiz" role="tabpanel" aria-labelledby="tab-quiz" data-view="quiz">
      <section class="chap" id="quiz-start">
        <div class="chap-head"><span class="badge" style="background:var(--accent)">Quiz</span><h2>Teste tes connaissances</h2></div>
        <div class="grid mode-grid">
          <div class="card mode-card">
            <div class="mode-icon" style="background:var(--accent-soft);color:var(--accent)">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>
            </div>
            <h3>Entraînement</h3>
            <p class="muted">Choisis un chapitre. La correction s'affiche après chaque réponse, avec l'explication.</p>
            <div class="chips" id="chapChips"></div>
            <button class="btn primary" id="startPractice">Commencer l'entraînement</button>
          </div>
          <div class="card mode-card">
            <div class="mode-icon" style="background:var(--warn-soft);color:var(--warn)">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="13" r="8"/><path d="M12 9v4l2 2"/><path d="M9 2h6"/></svg>
            </div>
            <h3>Examen blanc</h3>
            <p class="muted"><b>20 questions</b> tirées au hasard dans tous les chapitres, <b>20 minutes</b>. La correction s'affiche à la fin.</p>
            <div class="best" id="bestScore"></div>
            <button class="btn warn-btn" id="startExam">Lancer l'examen</button>
          </div>
        </div>
      </section>

      <section class="chap hidden" id="quiz-run">
        <div class="card runner">
          <div class="run-top">
            <span class="badge" id="runChap">Ch. 1</span>
            <span class="muted" id="runCount">Question 1 / 10</span>
            <span class="timer hidden" id="runTimer">20:00</span>
            <button class="btn ghost small" id="quitQuiz">Quitter</button>
          </div>
          <div class="progress"><div id="runBar"></div></div>
          <h3 class="question" id="runQ"></h3>
          <div class="options" id="runOpts"></div>
          <div class="feedback hidden" id="runFb" role="status"></div>
          <div class="run-nav">
            <button class="btn ghost" id="prevQ">← Précédent</button>
            <div class="dots" id="runDots"></div>
            <button class="btn primary" id="nextQ">Suivant →</button>
          </div>
        </div>
      </section>

      <section class="chap hidden" id="quiz-result">
        <div class="card result">
          <div class="score-ring" id="scoreRing"><span id="scoreTxt">0/0</span></div>
          <h3 id="scoreTitle">Résultat</h3>
          <p class="muted" id="scoreSub"></p>
          <div class="chap-bars" id="chapBars"></div>
          <div class="result-actions">
            <button class="btn primary" id="retryQuiz">Recommencer</button>
            <button class="btn ghost" id="backQuiz">Changer de mode</button>
          </div>
        </div>
        <h3 class="review-title" id="reviewTitle">Correction détaillée</h3>
        <div class="review" id="review"></div>
      </section>
    </div>

    <div class="empty hidden" id="empty">Aucun résultat.</div>
  </main>
</div>

<footer>Robotique industrielle — Cours et exercices</footer>
`;
