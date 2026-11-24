// Page markup, kept as HTML so the LaTeX ($...$) is rendered by KaTeX on the client.
export const content = String.raw`
<header class="topbar">
  <div class="brand">
    <div class="logo"><svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="5" cy="19" r="2"/><path d="M6.5 17.5 11 10"/><circle cx="12" cy="8.5" r="2"/><path d="M14 8.5h4.5"/><path d="M18.5 6v5"/></svg></div>
    <span>Robotique industrielle</span>
  </div>
  <label class="search">
    <svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>
    <input id="q" type="search" aria-label="Rechercher dans le cours" placeholder="Rechercher : codeur, D-H, vérin…" autocomplete="off">
  </label>
  <button class="icon-btn" id="theme" title="Changer de thème" aria-label="Changer de thème">
    <svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>
  </button>
</header>

<div class="layout">
  <nav class="side" id="nav">
    <div class="label">Sommaire</div>
    <a href="#ch1"><span class="dot" style="background:var(--c1)"></span>Introduction</a>
    <a href="#ch2"><span class="dot" style="background:var(--c2)"></span>Architectures</a>
    <a href="#ch3"><span class="dot" style="background:var(--c3)"></span>Performances</a>
    <a href="#ch4"><span class="dot" style="background:var(--c4)"></span>Capteurs</a>
    <a href="#ch5"><span class="dot" style="background:var(--c5)"></span>Actionneurs</a>
    <a href="#ch6"><span class="dot" style="background:var(--c6)"></span>Modélisation géométrique</a>
    <a href="#td"><span class="dot" style="background:var(--c7)"></span>TD corrigés</a>
    <a href="#check"><span class="dot" style="background:var(--warn)"></span>Points à vérifier</a>
  </nav>

  <main>
    <div class="hero">
      <h1>Robotique industrielle — Résumé de cours</h1>
      <p>Les notions clés, les formules et les TD corrigés, chapitre par chapitre.</p>
      <div class="stats">
        <div class="stat"><div class="n">6</div><div class="l">Chapitres</div></div>
        <div class="stat"><div class="n">4</div><div class="l">Types de robots</div></div>
        <div class="stat"><div class="n">18</div><div class="l">Formules clés</div></div>
        <div class="stat"><div class="n">7</div><div class="l">TD résumés</div></div>
      </div>
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
          <div class="grid td-grid td-grid-table-first">
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

    <!-- TD -->
    <section class="chap" id="td">
      <div class="chap-head"><span class="badge" style="background:var(--c7)">TD</span><h2>TD corrigés — l'essentiel</h2></div>
      <div class="grid">
        <div class="card">
          <h3>Volumes de travail</h3>
          <p><b>Cartésien</b> 500 × 500 × 300 mm :</p>
          <div class="formula">$$V = 75\cdot10^6\ \text{mm}^3$$</div>
          <p><b>Cylindrique</b> $R_{max}=1000$, $R_{min}=300$, $h=800$ mm :</p>
          <div class="formula">$$V = \pi(R_{max}^2 - R_{min}^2)\,h$$</div>
          <div class="formula">$$V \approx 2287\cdot10^6\ \text{mm}^3$$</div>
        </div>
        <div class="card">
          <h3>Robot sphérique</h3>
          <ul>
            <li>Série, m = 4 (3 + 1), répétabilité ± 0,01 mm.</li>
            <li>Axe 1 ± 140°, axe 2 ± 155°, course 400 mm, axe 4 ± 500°.</li>
            <li>Vitesse réduite près de la pièce : souplesse et précision.</li>
          </ul>
        </div>
        <div class="card">
          <h3>Codeur d'articulation</h3>
          <ol>
            <li>Ps = 0,0002 rad = 0,011°, R = 1/100 → Np ≈ 327 pts/tour.</li>
            <li>300 &lt; 327 &lt; 400 → codeur <b>C4 (400)</b>.</li>
            <li>Absolu : n = 8,64 → <b>9 pistes</b>.</li>
          </ol>
        </div>
        <div class="card">
          <h3>Codeur avec vis</h3>
          <ul>
            <li>R = 40/120 = 1/3, P = 20 mm, Ps = 0,03 mm → Np = 222,2.</li>
            <li>C2 &lt; 222,2 &lt; C3 → <b>C3 = 300</b>.</li>
            <li>Pas obtenu : 0,022 mm → précision améliorée.</li>
          </ul>
        </div>
        <div class="card">
          <h3>Convoyeur</h3>
          <ul>
            <li>D = 150 mm, R = 1, Ps = 0,25 mm.</li>
            <li>$N_p = \pi D R / P_s \approx 1885$ pts/tour → 11 bits.</li>
            <li>Sur 3 m : 6,37 tours, 12 000 points.</li>
          </ul>
          <p class="muted">Les notes donnent 600 (voir points à vérifier).</p>
        </div>
        <div class="card">
          <h3>ACMA-TH8 <span class="tag">RPP</span></h3>
          <div class="formula">$$\overrightarrow{O_0P}=\begin{pmatrix}L_2c\theta_1 - T_2 s\theta_1\\ L_2 s\theta_1 + T_2 c\theta_1\\ L_1+T_1\end{pmatrix}$$</div>
          <p class="muted">θ₁ = 0 → (L₂, T₂, L₁ + T₁).</p>
        </div>
        <div class="card span2">
          <h3>Robot SCARA</h3>
          <div class="grid td-grid">
            <div>
              <div class="formula">$$\overrightarrow{O_0E}=\begin{pmatrix}e + fC_1 + gC_{12}\\ fS_1 + gS_{12}\\ T-h\end{pmatrix}$$</div>
              <p class="muted">Orientation : rotation $z$ d'angle $\theta_1+\theta_2+\theta_3$.</p>
            </div>
            <div class="table-scroll" tabindex="0" role="region" aria-label="Tableau du cours">
              <table>
                <tr><th>Configuration</th><th>Position de E</th></tr>
                <tr><td>θ₁ = θ₂ = 0</td><td>(e + f + g, 0, T − h)</td></tr>
                <tr><td>θ₁ = π/2, θ₂ = 0</td><td>(e, f + g, T − h)</td></tr>
                <tr><td>θ₁ = π/2, θ₂ = −π/2</td><td>(e + g, f, T − h)</td></tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CHECK -->
    <section class="chap" id="check">
      <div class="chap-head"><span class="badge" style="background:var(--warn)">À vérifier</span><h2>Points à vérifier</h2></div>
      <div class="grid">
        <div class="card warn">
          <h3>Erreurs probables dans les notes</h3>
          <ul>
            <li>« SCARA de type sphérique » : le SCARA est un type à part (RRP).</li>
            <li>Convoyeur : π oublié — 1 885 pts/tour, pas 600.</li>
            <li>ACMA-TH8, θ = 0 : L₁ + T₁, pas L₁ + T₂.</li>
            <li>T₀⁴ : sθ₁·L₂, pas sθ₁·L₁.</li>
            <li>D–H, T₀³ : 1re ligne cθ₁, −sθ₁.</li>
            <li>SCARA, M₀³ : sθ₁cθ₂ + cθ₁sθ₂ (signe +).</li>
          </ul>
          <p class="muted" style="margin-top:8px">À confirmer avec le corrigé officiel. Les formules de cette page sont corrigées.</p>
        </div>
      </div>
    </section>

    <div class="empty hidden" id="empty">Aucun résultat.</div>
  </main>
</div>

<footer>Résumé de cours — Robotique industrielle</footer>
`;
