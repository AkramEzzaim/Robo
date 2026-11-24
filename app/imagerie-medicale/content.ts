// Course markup with LaTeX formulas rendered by KaTeX.
export const content = String.raw`
<header class="topbar">
  <div class="brand">
    <div class="logo"><svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="3"/><circle cx="12" cy="11" r="4"/><path d="M7 21v-1a5 5 0 0 1 10 0v1"/></svg></div>
    <span>Traitement d'images médicales</span>
  </div>
  <label class="search">
    <svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>
    <input id="q" type="search" aria-label="Rechercher" placeholder="Rechercher : histogramme, médian, Fourier…" autocomplete="off">
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
      <a href="#ch2"><span class="dot" style="background:var(--c2)"></span>Image numérique</a>
      <a href="#ch3"><span class="dot" style="background:var(--c3)"></span>Histogramme</a>
      <a href="#ch4"><span class="dot" style="background:var(--c4)"></span>Bruit et RSB</a>
      <a href="#ch5"><span class="dot" style="background:var(--c5)"></span>Filtrage spatial</a>
      <a href="#ch6"><span class="dot" style="background:var(--c6)"></span>Transformations d'intensité</a>
      <a href="#ch7"><span class="dot" style="background:var(--c7)"></span>Fourier</a>
    </div>
    <div class="navgroup hidden" data-view="exercices">
      <div class="label">Exercices</div>
      <a href="#ex1"><span class="dot" style="background:var(--c2)"></span>TD 1 · Image numérique</a>
      <a href="#ex2"><span class="dot" style="background:var(--c3)"></span>TD 2 · Histogramme, bruit</a>
      <a href="#ex3"><span class="dot" style="background:var(--c6)"></span>Exemples du cours</a>
      <a href="#ex4"><span class="dot" style="background:var(--c5)"></span>TP Python</a>
      <a href="#ex5"><span class="dot" style="background:var(--c4)"></span>Travail à rendre</a>
      <a href="#check"><span class="dot" style="background:var(--warn)"></span>Points à vérifier</a>
    </div>
    <div class="navgroup hidden" data-view="quiz">
      <div class="label">Quiz &amp; Examen</div>
      <a href="#quiz-start"><span class="dot" style="background:var(--accent)"></span>Choisir un mode</a>
    </div>
  </nav>

  <main>
    <div class="hero">
      <h1>Traitement d'images médicales</h1>
      <p>Génie biomédical · Le cours, les TD et TP corrigés, et des quiz pour réviser.</p>
      <div class="tabs" role="tablist">
        <button class="tab active" id="tab-cours" data-target="cours" role="tab" aria-controls="view-cours" aria-selected="true">Cours <span class="count">7</span></button>
        <button class="tab" id="tab-exercices" data-target="exercices" role="tab" aria-controls="view-exercices" aria-selected="false">Exercices <span class="count">5</span></button>
        <button class="tab" id="tab-quiz" data-target="quiz" role="tab" aria-controls="view-quiz" aria-selected="false">Quiz &amp; Examen <span class="count">51</span></button>
      </div>
    </div>

    <nav class="mnav hidden" id="mnav" aria-label="Sections"></nav>

    <div class="view" id="view-cours" role="tabpanel" aria-labelledby="tab-cours" data-view="cours">
      <div class="stats">
        <div class="stat"><div class="n">7</div><div class="l">Chapitres</div></div>
        <div class="stat"><div class="n">4</div><div class="l">Modalités d'imagerie</div></div>
        <div class="stat"><div class="n">20+</div><div class="l">Formules clés</div></div>
        <div class="stat"><div class="n">6</div><div class="l">Filtres et noyaux</div></div>
      </div>

      <!-- CH1 -->
      <section class="chap" id="ch1">
        <div class="chap-head"><span class="badge" style="background:var(--c1)">Ch. 1</span><h2>Introduction au traitement d'images médicales</h2></div>
        <div class="grid">
          <div class="card">
            <h3>Définitions</h3>
            <ul>
              <li><b>Traitement d'images médicales</b> : algorithmes pour améliorer, analyser et interpréter des images de diagnostic (radiographie, IRM, échographie…). But : un diagnostic plus précis.</li>
              <li><b>Traitement d'image</b> : transformer une image (luminosité, bruit, contraste).</li>
              <li><b>Analyse d'image</b> : reconnaître et interpréter les objets, formes, caractéristiques.</li>
            </ul>
          </div>
          <div class="card">
            <h3>Amélioration vs restauration</h3>
            <div class="table-scroll" tabindex="0" role="region" aria-label="Tableau du cours">
              <table>
                <tr><th>Opération</th><th>Dégradation</th></tr>
                <tr><td><b>Amélioration</b></td><td>inconnue</td></tr>
                <tr><td><b>Restauration</b></td><td>connue</td></tr>
              </table>
            </div>
            <p class="muted" style="margin-top:8px">Difficulté : il n'existe pas de traitement idéal universel. Chaque application demande sa propre étude.</p>
          </div>
          <div class="card">
            <h3>Applications en biomédical</h3>
            <ul>
              <li>Détection de maladies : tumeurs, kystes, malformations.</li>
              <li>Suivi des traitements (ex. cancer).</li>
              <li>Chirurgie assistée par ordinateur (3D temps réel).</li>
              <li>Analyse des organes et tissus.</li>
            </ul>
            <p class="muted">Exemples : contraste d'une radio thoracique, tumeurs en mammographie, lésions cérébrales.</p>
          </div>
          <div class="card span2">
            <h3>Types d'images médicales</h3>
            <div class="table-scroll" tabindex="0" role="region" aria-label="Tableau du cours">
              <table>
                <tr><th>Modalité</th><th>Principe</th><th>Propriété / usage</th></tr>
                <tr><td><b>Radiographie (RX)</b></td><td>Rayons X absorbés par les tissus</td><td>2D, très bonne visualisation des os et des poumons</td></tr>
                <tr><td><b>Scanner (TDM)</b></td><td>Radiographies sous plusieurs angles → 3D</td><td>Haute résolution spatiale, tissus mous et os</td></tr>
                <tr><td><b>IRM</b></td><td>Champ magnétique + ondes radio</td><td>Très bon contraste des tissus mous : cerveau, muscles, articulations</td></tr>
                <tr><td><b>Échographie</b></td><td>Ondes sonores (ultrasons)</td><td>Temps réel, non invasif, sûr : grossesse, organes mous</td></tr>
              </table>
            </div>
          </div>
          <div class="card">
            <h3>Formation d'une image</h3>
            <p>Représentation 2D d'une scène. Elle dépend de la géométrie, du système optique et de la lumière.</p>
            <ul>
              <li>Lumière <b>réfléchie</b> par les objets (cas courant).</li>
              <li>Ondes <b>émises</b> par les objets : infrarouge.</li>
              <li>Ondes <b>absorbées</b>, on mesure le reste : rayons X.</li>
            </ul>
            <p class="muted">Niveau de gris = énergie reçue par le capteur.</p>
          </div>
          <div class="card">
            <h3>Vision humaine</h3>
            <ul>
              <li>Lumière visible : <b>380 à 780 nm</b> (capteurs : 200 à 1 200 nm).</li>
              <li><b>Bâtonnets</b> : insensibles à la couleur, sensibles au mouvement.</li>
              <li><b>Cônes</b> S (bleu), M (vert), L (rouge) : la couleur.</li>
              <li>Cortex <b>V1/V2</b> : couleur, orientation, mouvement, contraste. <b>V3</b> : formes.</li>
            </ul>
            <p class="muted">Synthèse additive RGB : rouge ≈ 700 nm, vert, bleu.</p>
          </div>
        </div>
      </section>

      <!-- CH2 -->
      <section class="chap" id="ch2">
        <div class="chap-head"><span class="badge" style="background:var(--c2)">Ch. 2</span><h2>Image numérique, échantillonnage et quantification</h2></div>
        <div class="grid">
          <div class="card">
            <h3>Image numérique</h3>
            <p>Tableau 2D de valeurs discrètes : L lignes × C colonnes. Chaque case est un <b>pixel</b> (picture element) avec une position et une valeur.</p>
            <div class="formula">$$f(x,y) = i(x,y)\cdot r(x,y)$$</div>
            <p class="muted">$i$ = illumination, $0 &lt; i &lt; \infty$ ; $r$ = réflectance, $0 \le r \le 1$.</p>
          </div>
          <div class="card">
            <h3>Échantillonnage et quantification</h3>
            <ol>
              <li><b>Échantillonnage</b> : numériser les <b>coordonnées</b> (grille de pixels).</li>
              <li><b>Quantification</b> : numériser l'<b>amplitude</b> (niveaux d'intensité).</li>
            </ol>
            <p class="muted">La quantification se fait en sortie de capteur : la tension de chaque pixel devient un entier.</p>
          </div>
          <div class="card">
            <h3>Définition vs résolution</h3>
            <ul>
              <li><b>Définition</b> : nombre de pixels (ex. 640 × 480).</li>
              <li><b>Résolution</b> : pixels par unité de longueur, en ppp / dpi. Elle n'a de sens que sur un support physique.</li>
              <li><b>Résolution spatiale</b> : plus petit détail visible.</li>
              <li><b>Résolution d'intensité</b> : plus petit changement de niveau perceptible (en bits).</li>
            </ul>
          </div>
          <div class="card">
            <h3>Profondeur (codage)</h3>
            <div class="formula">$$n \text{ bits} \Rightarrow 2^n \text{ niveaux, de } 0 \text{ à } 2^n - 1$$</div>
            <div class="table-scroll" tabindex="0" role="region" aria-label="Tableau du cours">
              <table>
                <tr><td>8 bits</td><td>256 niveaux de gris</td></tr>
                <tr><td>16 bits</td><td>65 536 valeurs</td></tr>
                <tr><td>RGB 3 × 8 bits</td><td>$2^{24}$ ≈ 16,7 millions de couleurs</td></tr>
              </table>
            </div>
          </div>
          <div class="card">
            <h3>Types d'images</h3>
            <ul>
              <li><b>Binaire</b> : 1 bit par pixel (0 noir, 1 blanc).</li>
              <li><b>Niveaux de gris</b> : n bits par pixel (8 bits → 256 NG).</li>
              <li><b>Couleur</b> : 3 canaux (RGB, HSV…).</li>
              <li><b>Indexée</b> : la valeur du pixel est l'adresse de sa couleur dans une table (palette).</li>
              <li><b>Vectorielle</b> : instructions (cercle, segment), résolution infinie. Opposé : <b>bitmap</b>.</li>
            </ul>
          </div>
          <div class="card">
            <h3>Gamme dynamique et contraste</h3>
            <ul>
              <li><b>Gamme dynamique</b> : rapport intensité max mesurable / intensité min détectable. Limite haute = saturation, limite basse = bruit.</li>
              <li><b>Contraste</b> : différence entre l'intensité la plus haute et la plus basse.</li>
            </ul>
          </div>
          <div class="card">
            <h3>Opérations arithmétiques</h3>
            <div class="formula">$$s = f+g,\quad d = f-g$$</div><div class="formula">$$p = f\times g,\quad v = f \div g$$</div>
            <p>Les images doivent avoir la même taille. Sur 8 bits, $f-g \in [-255, 255]$ et $f+g \in [0, 510]$ :</p>
            <p><b>Saturation</b> : valeurs négatives → 0, valeurs &gt; max → 255 (ou $2^n-1$).</p>
            <p class="muted">Produit élément par élément ≠ produit matriciel.</p>
          </div>
          <div class="card">
            <h3>Opérations logiques (images binaires)</h3>
            <div class="table-scroll" tabindex="0" role="region" aria-label="Tableau du cours">
              <table>
                <tr><th>Opération</th><th>Résultat blanc si…</th></tr>
                <tr><td><code>NOT A</code></td><td>A est noir (inversion)</td></tr>
                <tr><td><code>A AND B</code></td><td>blanc dans A et dans B</td></tr>
                <tr><td><code>A OR B</code></td><td>blanc dans A ou B</td></tr>
                <tr><td><code>A AND NOT B</code></td><td>blanc dans A mais pas dans B</td></tr>
                <tr><td><code>A XOR B</code></td><td>A et B différents</td></tr>
              </table>
            </div>
          </div>
          <div class="card">
            <h3>Taille mémoire <span class="tag">exemple</span></h3>
            <div class="formula">$$\text{Taille} = L \times C \times n_{canaux} \times n_{bits}$$</div>
            <p>Ultra HD 3840 × 2160, 3 canaux × 8 bits : 3840 × 2160 × 3 ≈ <b>24,9 millions d'octets</b>.</p>
          </div>
        </div>
      </section>

      <!-- CH3 -->
      <section class="chap" id="ch3">
        <div class="chap-head"><span class="badge" style="background:var(--c3)">Ch. 3</span><h2>Histogramme, étirement et égalisation</h2></div>
        <div class="grid">
          <div class="card">
            <h3>Histogramme</h3>
            <p>Fonction qui donne, pour chaque niveau de gris k, le nombre de pixels $n_k$ de ce niveau.</p>
            <div class="formula">$$h(k) = n_k \qquad p(r_k) = \frac{n_k}{MN}$$</div>
            <p class="muted">Normalisé par le nombre total de pixels MN, c'est une <b>densité de probabilité</b>. Il ne dit rien de la position des pixels.</p>
          </div>
          <div class="card">
            <h3>Lire un histogramme</h3>
            <div class="table-scroll" tabindex="0" role="region" aria-label="Tableau du cours">
              <table>
                <tr><th>Histogramme</th><th>Image</th></tr>
                <tr><td>Concentré à gauche</td><td>Sombre</td></tr>
                <tr><td>Concentré à droite</td><td>Claire</td></tr>
                <tr><td>Étroit, au milieu</td><td>Faible contraste</td></tr>
                <tr><td>Étalé sur toute la plage</td><td>Contraste élevé</td></tr>
              </table>
            </div>
            <p class="muted">Image couleur : 3 histogrammes (représentation marginale).</p>
          </div>
          <div class="card">
            <h3>Histogramme cumulé</h3>
            <div class="formula">$$h_c(k) = \sum_{j=0}^{k} h(j)$$</div>
            <p class="muted">Équivalent de la fonction de répartition. Il est croissant et vaut 1 (normalisé) au dernier niveau.</p>
          </div>
          <div class="card">
            <h3>Étirement (transformation linéaire)</h3>
            <p>On envoie $[I_m, I_M]$ (min, max de l'image) sur $[a, b]$ (souvent $[0, 255]$) :</p>
            <div class="formula">$$T(x) = \alpha x + \beta$$</div><div class="formula">$$\alpha = \frac{b-a}{I_M - I_m},\quad \beta = a - \alpha I_m$$</div>
            <p class="muted">Ex. $[0,10] \to [0,20]$ : α = 2, β = 0, T(x) = 2x. Sans effet si l'image contient déjà a et b.</p>
          </div>
          <div class="card">
            <h3>Égalisation (non linéaire)</h3>
            <p>Répartit les niveaux le plus uniformément possible (histogramme « plat »).</p>
            <div class="formula">$$s_k = (L-1)\sum_{j=0}^{k} p_r(r_j)$$</div><div class="formula">$$s_k = \frac{L-1}{MN}\sum_{j=0}^{k} n_j$$</div>
            <p class="muted">On arrondit $s_k$ à l'entier le plus proche. Fonctionne même quand l'étirement est sans effet. Le rendu peut paraître peu naturel.</p>
          </div>
          <div class="card">
            <h3>Étirement vs égalisation</h3>
            <div class="table-scroll" tabindex="0" role="region" aria-label="Tableau du cours">
              <table>
                <tr><th></th><th>Étirement</th><th>Égalisation</th></tr>
                <tr><td>Type</td><td>Linéaire</td><td>Non linéaire</td></tr>
                <tr><td>Forme de l'histo</td><td>Conservée, juste élargie</td><td>Modifiée, aplatie</td></tr>
                <tr><td>Outil</td><td>min / max</td><td>Histogramme cumulé</td></tr>
              </table>
            </div>
          </div>
        </div>
      </section>

      <!-- CH4 -->
      <section class="chap" id="ch4">
        <div class="chap-head"><span class="badge" style="background:var(--c4)">Ch. 4</span><h2>Bruit, RSB et débruitage</h2></div>
        <div class="grid">
          <div class="card">
            <h3>Bruit</h3>
            <p>Tout ce qui perturbe l'observation ou l'analyse d'une image. Phénomène aléatoire : chaque pixel bruité est une <b>variable aléatoire</b>.</p>
            <p class="muted">Loi de probabilité : associe à chaque valeur sa probabilité d'apparition.</p>
          </div>
          <div class="card">
            <h3>Bruit gaussien (AWGN)</h3>
            <p>Additif, de moyenne nulle, il modifie <b>tous</b> les pixels.</p>
            <div class="formula">$$J = I + B,\quad B \sim \mathcal{N}(0, \sigma^2)$$</div>
            <div class="formula">$$f(x) = \tfrac{1}{\sigma\sqrt{2\pi}}\,e^{-\frac{(x-\mu)^2}{2\sigma^2}}$$</div>
            <p class="muted">Causes : peu de photons, capteur trop chaud, bruit électronique. Appelé aussi « bruit blanc ».</p>
          </div>
          <div class="card">
            <h3>Bruit poivre et sel (impulsionnel)</h3>
            <p>Seuls <b>quelques</b> pixels deviennent noirs (0) ou blancs (255) ; les autres sont intacts.</p>
            <ul>
              <li>Pixels <b>morts</b> → valeur min, avec probabilité $p_{min}$.</li>
              <li>Pixels <b>saturés</b> → valeur max, avec probabilité $p_{max}$.</li>
            </ul>
            <p class="muted">Modélise un capteur dont certains photosites sont défaillants.</p>
          </div>
          <div class="card">
            <h3>Rapport signal sur bruit (RSB / SNR)</h3>
            <div class="formula">$$\text{RSB} = 10\log_{10}\frac{P_I}{P_B}$$</div><div class="formula">$$= 10\log_{10}\frac{\sum_p I(p)^2}{\sum_p B(p)^2}$$</div>
            <ul>
              <li>En dB, valeurs dans $]-\infty, +\infty[$.</li>
              <li>&gt; 50 dB : bruit quasi invisible. &lt; 0 dB : bruit plus fort que l'image.</li>
              <li><b>RSB plus petit = image plus bruitée.</b></li>
              <li>Incalculable si on n'a que l'image bruitée J.</li>
            </ul>
          </div>
          <div class="card">
            <h3>Quel filtre pour quel bruit ?</h3>
            <div class="table-scroll" tabindex="0" role="region" aria-label="Tableau du cours">
              <table>
                <tr><th>Bruit</th><th>Filtre</th><th>Type</th></tr>
                <tr><td>Gaussien</td><td><b>Moyenneur</b> ou gaussien</td><td>Linéaire, passe-bas (convolution)</td></tr>
                <tr><td>Poivre et sel</td><td><b>Médian</b></td><td>Non linéaire (pas de convolution)</td></tr>
              </table>
            </div>
            <p class="muted" style="margin-top:8px">Taille du filtre : compromis entre réduction du bruit et netteté.</p>
          </div>
          <div class="card">
            <h3>Filtre médian <span class="tag">exemple</span></h3>
            <p>Valeur du pixel = <b>médiane</b> du voisinage trié.</p>
            <p>Voisinage 3×3 : 5, 4, 5, 5, <b>0</b>, 4, 6, 5, 5 → trié : 0 4 4 5 <b>5</b> 5 5 5 6 → médiane <b>5</b>.</p>
            <p class="muted">Le pixel aberrant (0) disparaît sans flouter les bords.</p>
          </div>
        </div>
      </section>

      <!-- CH5 -->
      <section class="chap" id="ch5">
        <div class="chap-head"><span class="badge" style="background:var(--c5)">Ch. 5</span><h2>Filtrage spatial et convolution</h2></div>
        <div class="grid">
          <div class="card">
            <h3>Basses et hautes fréquences</h3>
            <ul>
              <li><b>Basses fréquences</b> : variations lentes → version floue de l'image.</li>
              <li><b>Hautes fréquences</b> : variations rapides → contours, netteté.</li>
              <li><b>Passe-bas</b> : garde les BF → image floue.</li>
              <li><b>Passe-haut</b> : garde les HF → détecteur de contours.</li>
            </ul>
          </div>
          <div class="card">
            <h3>Domaine spatial</h3>
            <div class="formula">$$g(x,y) = T\big[f(x,y)\big]$$</div>
            <ul>
              <li>Voisinage 1×1 : <b>transformation d'intensité</b>, $s = T(r)$.</li>
              <li>Voisinage plus grand (3×3…) : <b>filtre spatial</b> (masque, noyau, fenêtre, PSF).</li>
            </ul>
          </div>
          <div class="card">
            <h3>Convolution</h3>
            <div class="formula">$$(f*h)(x) = \int f(t)\,h(x-t)\,dt$$</div>
            <div class="formula">$$J = \sum_{(i,j)\in\Omega} h(i,j)\, I(x{-}i, y{-}j)$$</div>
            <p class="muted">Opération linéaire. Il faut choisir les valeurs hors de l'image (bords), et la taille peut changer.</p>
          </div>
          <div class="card">
            <h3>Passe-bas : moyenneur et gaussien</h3>
            <div class="formula">$$h_{moy} = \frac{1}{9}\begin{bmatrix}1&1&1\\1&1&1\\1&1&1\end{bmatrix}$$</div><div class="formula">$$h_{G} = \frac{1}{16}\begin{bmatrix}1&2&1\\2&4&2\\1&2&1\end{bmatrix}$$</div>
            <p class="muted">Somme des coefficients = 1. Le gaussien donne plus de poids au centre.</p>
          </div>
          <div class="card">
            <h3>Gradient (dérivée 1re)</h3>
            <div class="formula">$$h_x = \begin{bmatrix}-1&0&1\\-1&0&1\\-1&0&1\end{bmatrix}$$</div><div class="formula">$$h_y = \begin{bmatrix}1&1&1\\0&0&0\\-1&-1&-1\end{bmatrix}$$</div>
            <div class="formula">$$G = \sqrt{(I*h_x)^2 + (I*h_y)^2}$$</div>
            <p class="muted">Noyaux de Prewitt. Variante Sobel : (1, 2, 1).</p>
          </div>
          <div class="card">
            <h3>Laplacien (dérivée 2nde)</h3>
            <div class="formula">$$h_{L1} = \begin{bmatrix}0&-1&0\\-1&4&-1\\0&-1&0\end{bmatrix}$$</div><div class="formula">$$h_{L2} = \begin{bmatrix}-1&-1&-1\\-1&8&-1\\-1&-1&-1\end{bmatrix}$$</div>
            <p class="muted">Passe-haut : somme des coefficients = 0. Très sensibles au bruit.</p>
          </div>
        </div>
      </section>

      <!-- CH6 -->
      <section class="chap" id="ch6">
        <div class="chap-head"><span class="badge" style="background:var(--c6)">Ch. 6</span><h2>Transformations d'intensité</h2></div>
        <div class="grid">
          <div class="card">
            <h3>Négatif et identité</h3>
            <div class="formula">$$s = L - 1 - r$$</div><p class="muted">8 bits : s = 255 − r.</p>
            <p>Fait ressortir les détails clairs dans les grandes zones sombres. Ex. lésion en mammographie.</p>
            <p class="muted">Identité : $s = r$ (aucun changement).</p>
          </div>
          <div class="card">
            <h3>Logarithmique</h3>
            <div class="formula">$$s = c\,\log(1 + r)$$</div><div class="formula">$$c = \frac{255}{\log(1 + r_{max})}$$</div>
            <p><b>Étend les sombres</b>, compresse les clairs. Pour les images à grande dynamique (étoiles, contre-jour, spectre de Fourier).</p>
            <p class="muted">+1 car log(0) n'existe pas ; log₁₀(1 + 255) ≈ 2,4.</p>
          </div>
          <div class="card">
            <h3>Puissance (correction gamma)</h3>
            <div class="formula">$$s = c\, r^{\gamma}$$</div>
            <div class="table-scroll" tabindex="0" role="region" aria-label="Tableau du cours">
              <table>
                <tr><td><b>γ &lt; 1</b></td><td>Étend les sombres → <b>éclaircit</b> (ex. IRM sombre : 0,6 · 0,4 · 0,3)</td></tr>
                <tr><td><b>γ &gt; 1</b></td><td>Compresse les sombres → <b>assombrit</b> (ex. image délavée : 3 · 4 · 5)</td></tr>
                <tr><td>γ = 1</td><td>Identité</td></tr>
              </table>
            </div>
            <p class="muted">Plus souple que le log. Utilisée pour les écrans et la TV.</p>
          </div>
          <div class="card">
            <h3>Exponentielle (log inverse)</h3>
            <div class="formula">$$s = c\,(b^{r} - 1),\quad b \gtrsim 1$$</div>
            <p>Étend les <b>clairs</b>, compresse les sombres. Accentue les zones lumineuses.</p>
          </div>
        </div>
      </section>

      <!-- CH7 -->
      <section class="chap" id="ch7">
        <div class="chap-head"><span class="badge" style="background:var(--c7)">Ch. 7</span><h2>Domaine fréquentiel et transformée de Fourier</h2></div>
        <div class="grid">
          <div class="card">
            <h3>Spatial vs fréquentiel</h3>
            <ul>
              <li><b>Spatial</b> : on agit directement sur les pixels.</li>
              <li><b>Fréquentiel</b> : TF → filtrage → TF inverse.</li>
            </ul>
            <div class="flow"><span class="step">Image</span><span class="arrow">→</span><span class="step">TF</span><span class="arrow">→</span><span class="step">Filtre H(u,v)</span><span class="arrow">→</span><span class="step">TF⁻¹</span></div>
            <p class="muted" style="margin-top:8px">La TF est un « prisme mathématique » qui sépare les fréquences.</p>
          </div>
          <div class="card span2">
            <h3>TF discrète 2D (DFT)</h3>
            <div class="formula">$$F(u,v) = \frac{1}{MN}\sum_{x=0}^{M-1}\sum_{y=0}^{N-1} f(x,y)\,e^{-j2\pi\left(\frac{ux}{M}+\frac{vy}{N}\right)}$$</div>
            <div class="formula">$$f(x,y) = \sum_{u=0}^{M-1}\sum_{v=0}^{N-1} F(u,v)\,e^{j2\pi\left(\frac{ux}{M}+\frac{vy}{N}\right)}$$</div>
          </div>
          <div class="card">
            <h3>Module et phase</h3>
            <div class="formula">$$|F| = \sqrt{R^2 + I^2} \qquad \varphi = \tan^{-1}\frac{I}{R}$$</div>
            <ul>
              <li><b>Module</b> : contribution de chaque fréquence.</li>
              <li><b>Phase</b> : position spatiale des structures.</li>
            </ul>
          </div>
          <div class="card">
            <h3>Lire un spectre</h3>
            <div class="table-scroll" tabindex="0" role="region" aria-label="Tableau du cours">
              <table>
                <tr><th>Image</th><th>Spectre</th></tr>
                <tr><td>Centre du spectre</td><td>Basses fréquences</td></tr>
                <tr><td>Bords du spectre</td><td>Hautes fréquences (détails)</td></tr>
                <tr><td>Sinusoïde verticale</td><td>Ligne horizontale</td></tr>
                <tr><td>Sinusoïde horizontale</td><td>Ligne verticale</td></tr>
                <tr><td>Carré</td><td>Croix</td></tr>
                <tr><td>Cercle</td><td>Anneaux concentriques</td></tr>
              </table>
            </div>
          </div>
          <div class="card">
            <h3>Filtrage fréquentiel</h3>
            <p>Un filtre <b>circulaire centré</b> (passe-bas) garde les basses fréquences et supprime le bruit et les détails fins. L'image revient plus lisse après TF⁻¹.</p>
            <p class="muted">Séries de Fourier : une fonction périodique est une somme de sinusoïdes. TF : même idée pour une fonction non périodique d'aire finie.</p>
          </div>
        </div>
      </section>
    </div>

    <div class="view hidden" id="view-exercices" role="tabpanel" aria-labelledby="tab-exercices" data-view="exercices">
      <div class="stats">
        <div class="stat"><div class="n">2</div><div class="l">TD corrigés</div></div>
        <div class="stat"><div class="n">3</div><div class="l">TP Python</div></div>
        <div class="stat"><div class="n">2</div><div class="l">Travaux à rendre</div></div>
        <div class="stat"><div class="n">8</div><div class="l">Points à vérifier</div></div>
      </div>

      <!-- TD1 -->
      <section class="chap" id="ex1">
        <div class="chap-head"><span class="badge" style="background:var(--c2)">TD 1</span><h2>Image numérique et opérations arithmétiques</h2></div>
        <div class="grid">
          <div class="card">
            <h3>Ex. 1.1 — Définitions</h3>
            <ul>
              <li><b>Binaire</b> : 1 bit par pixel (0 noir, 1 blanc).</li>
              <li><b>Niveaux de gris</b> : x bits par pixel (8 bits → 256 NG).</li>
              <li><b>Indexée</b> : la valeur du pixel indique l'adresse mémoire de sa couleur.</li>
              <li><b>Échantillonnage</b> : découper l'image en grille de points (sa densité donne le nombre de pixels).</li>
              <li><b>Quantification</b> : donner à chaque point une valeur numérique selon son intensité.</li>
            </ul>
          </div>
          <div class="card">
            <h3>Ex. 1.2 et 1.3 — Couleurs et taille</h3>
            <p>Synthèse additive : <b>noir</b> = aucune couleur ; <b>blanc</b> = R + V + B ; <b>jaune</b> = R + V.</p>
            <div class="formula">$$(2^8)^3 = 2^{24}$$</div><p>≈ <b>16,7 millions</b> de couleurs.</p>
            <div class="formula">$$1000 \times 1000 \times 8 \times 3$$</div><p>= <b>24·10⁶ bits</b> = 3 Mo.</p>
          </div>
          <div class="card">
            <h3>Ex. 1.4 et 1.5 — Capteurs CCD / CMOS</h3>
            <p><b>CCD</b> : les photons reçus sur l'électrode semi-transparente deviennent des électrons (effet photoélectrique), collectés dans la zone désertée. Nombre d'électrons ∝ lumière reçue.</p>
            <div class="table-scroll" tabindex="0" role="region" aria-label="Tableau du cours">
              <table>
                <tr><th></th><th>CCD</th><th>CMOS</th></tr>
                <tr><td>+</td><td>Qualité élevée, bruit très faible, haute sensibilité</td><td>Fenêtrage, compact, faible consommation, rapide</td></tr>
                <tr><td>−</td><td>Saturation aux fortes luminosités, horloges multiples</td><td>Bruit, résolution plus faible</td></tr>
              </table>
            </div>
          </div>
          <div class="card span2">
            <h3>Ex. 2 — Opérations sur deux images 3 bits <span class="tag">valeurs dans [0, 7]</span></h3>
            <div class="mats">
              <div><span>A</span><table class="mat"><tr><td>0</td><td>6</td><td>6</td></tr><tr><td>0</td><td>4</td><td>4</td></tr><tr><td>6</td><td>0</td><td>0</td></tr></table></div>
              <div><span>B</span><table class="mat"><tr><td>4</td><td>3</td><td>2</td></tr><tr><td>5</td><td>2</td><td>4</td></tr><tr><td>3</td><td>6</td><td>3</td></tr></table></div>
              <div><span>A + B</span><table class="mat res"><tr><td>4</td><td>7</td><td>7</td></tr><tr><td>5</td><td>6</td><td>7</td></tr><tr><td>7</td><td>6</td><td>3</td></tr></table></div>
              <div><span>A − B</span><table class="mat res"><tr><td>0</td><td>3</td><td>4</td></tr><tr><td>0</td><td>2</td><td>0</td></tr><tr><td>3</td><td>0</td><td>0</td></tr></table></div>
              <div><span>B − A</span><table class="mat res"><tr><td>4</td><td>0</td><td>0</td></tr><tr><td>5</td><td>0</td><td>0</td></tr><tr><td>0</td><td>6</td><td>3</td></tr></table></div>
              <div><span>A × B</span><table class="mat res"><tr><td>0</td><td>7</td><td>7</td></tr><tr><td>0</td><td>7</td><td>7</td></tr><tr><td>7</td><td>0</td><td>0</td></tr></table></div>
              <div><span>A / B</span><table class="mat res"><tr><td>0</td><td>2</td><td>3</td></tr><tr><td>0</td><td>2</td><td>1</td></tr><tr><td>2</td><td>0</td><td>0</td></tr></table></div>
            </div>
            <p class="muted" style="margin-top:10px">Règle : tout résultat &gt; 7 devient 7, tout résultat &lt; 0 devient 0, division entière. Ex. 6 + 3 = 9 → 7 ; 0 − 4 = −4 → 0 ; 6 × 3 = 18 → 7.</p>
          </div>
        </div>
      </section>

      <!-- TD2 -->
      <section class="chap" id="ex2">
        <div class="chap-head"><span class="badge" style="background:var(--c3)">TD 2</span><h2>Histogramme et bruit</h2></div>
        <div class="grid">
          <div class="card">
            <h3>Ex. 1 — Image 6 × 6</h3>
            <div class="table-scroll" tabindex="0" role="region" aria-label="Tableau du cours">
              <table class="mat small"><tr><td>255</td><td>255</td><td>250</td><td>255</td><td>245</td><td>10</td></tr><tr><td>255</td><td>255</td><td>245</td><td>245</td><td>5</td><td>10</td></tr><tr><td>240</td><td>240</td><td>255</td><td>12</td><td>5</td><td>5</td></tr><tr><td>240</td><td>255</td><td>10</td><td>9</td><td>0</td><td>0</td></tr><tr><td>250</td><td>12</td><td>12</td><td>10</td><td>0</td><td>5</td></tr><tr><td>0</td><td>0</td><td>5</td><td>12</td><td>5</td><td>0</td></tr></table>
            </div>
            <ol>
              <li>Max = 255 → <b>8 bits</b>.</li>
              <li><b>9 niveaux</b> : 0, 5, 9, 10, 12, 240, 245, 250, 255.</li>
              <li>Moyenne = 3 867 / 36 ≈ <b>107,4</b>.</li>
              <li>Dessin : coin haut-gauche blanc, coin bas-droit noir (frontière en diagonale).</li>
            </ol>
          </div>
          <div class="card">
            <h3>Ex. 1 — Histogramme</h3>
            <div class="table-scroll" tabindex="0" role="region" aria-label="Tableau du cours">
              <table>
                <tr><th>NG</th><td>0</td><td>5</td><td>9</td><td>10</td><td>12</td><td>240</td><td>245</td><td>250</td><td>255</td></tr>
                <tr><th>n</th><td>6</td><td>6</td><td>1</td><td>4</td><td>4</td><td>3</td><td>3</td><td>2</td><td>7</td></tr>
              </table>
            </div>
            <div class="bars" data-bars="6,6,1,4,4,3,3,2,7" data-labels="0,5,9,10,12,240,245,250,255"></div>
            <p class="muted">Histogramme bimodal : deux groupes bien séparés (sombres et clairs). Total = 36.</p>
          </div>
          <div class="card">
            <h3>Ex. 2 — Histogramme et dynamique</h3>
            <div class="bars" data-bars="0,110,15,10,90,15,30,75,15,0,10" data-labels="0,1,2,3,4,5,6,7,8,9,10"></div>
            <ul>
              <li>Total : 370 pixels. Niveaux possibles : 0 à 20.</li>
              <li><b>Dynamique</b> : de 1 à 10 (niveaux 11 à 20 vides).</li>
              <li>Moyenne ≈ 4,1 sur 20 → image <b>sombre</b> et peu contrastée.</li>
            </ul>
          </div>
          <div class="card">
            <h3>Ex. 2.3 — Recadrage (étirement) [1, 10] → [0, 20]</h3>
            <div class="formula">$$T(r) = \frac{20}{9}(r - 1)$$</div>
            <div class="table-scroll" tabindex="0" role="region" aria-label="Tableau du cours">
              <table>
                <tr><th>r</th><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td><td>8</td><td>10</td></tr>
                <tr><th>s</th><td>0</td><td>2</td><td>4</td><td>7</td><td>9</td><td>11</td><td>13</td><td>16</td><td>20</td></tr>
                <tr><th>n</th><td>110</td><td>15</td><td>10</td><td>90</td><td>15</td><td>30</td><td>75</td><td>15</td><td>10</td></tr>
              </table>
            </div>
            <p class="muted">Même forme, mais étalée sur 0–20 : plus de contraste.</p>
          </div>
          <div class="card">
            <h3>Ex. 2.4 — Égalisation</h3>
            <p class="muted">$s_k = \text{arrondi}\big(20 \cdot \text{cumul}_k / 370\big)$</p>
            <div class="table-scroll" tabindex="0" role="region" aria-label="Tableau du cours">
              <table>
                <tr><th>r</th><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td><td>8</td><td>10</td></tr>
                <tr><th>cumul</th><td>110</td><td>125</td><td>135</td><td>225</td><td>240</td><td>270</td><td>345</td><td>360</td><td>370</td></tr>
                <tr><th>s</th><td>6</td><td>7</td><td>7</td><td>12</td><td>13</td><td>15</td><td>19</td><td>19</td><td>20</td></tr>
              </table>
            </div>
            <p>Nouvel histogramme : 6 → 110 · 7 → 25 · 12 → 90 · 13 → 15 · 15 → 30 · 19 → 90 · 20 → 10.</p>
          </div>
          <div class="card">
            <h3>Ex. 2.5 — Différence</h3>
            <p><b>Étirement</b> : linéaire, garde la forme de l'histogramme et l'élargit.</p>
            <p><b>Égalisation</b> : non linéaire, utilise l'histogramme cumulé, rend la répartition la plus uniforme possible. Les niveaux très peuplés s'écartent davantage.</p>
          </div>
          <div class="card">
            <h3>Ex. 3 — Quel bruit ?</h3>
            <div class="table-scroll" tabindex="0" role="region" aria-label="Tableau du cours">
              <table class="mat small noise"><tr><td>4</td><td>5</td><td>4</td><td>5</td><td>3</td><td>5</td></tr><tr><td>4</td><td class="hl">0</td><td>4</td><td class="hl">10</td><td>5</td><td>5</td></tr><tr><td>4</td><td>5</td><td>5</td><td>6</td><td>5</td><td>5</td></tr><tr><td>3</td><td>5</td><td>5</td><td>5</td><td class="hl">10</td><td>5</td></tr><tr><td>4</td><td>5</td><td class="hl">0</td><td>5</td><td>5</td><td>6</td></tr><tr><td>5</td><td>4</td><td>6</td><td>5</td><td>6</td><td>5</td></tr></table>
            </div>
            <ol>
              <li>Bruit : les deux <b>0</b> et les deux <b>10</b> (valeurs extrêmes, voisins autour de 5).</li>
              <li><b>Poivre et sel</b> : seuls quelques pixels sont touchés, et ils prennent la valeur min (0) ou max (10) des 11 niveaux.</li>
            </ol>
            <p class="muted">Remède : filtre médian 3×3.</p>
          </div>
        </div>
      </section>

      <!-- Exemples du cours -->
      <section class="chap" id="ex3">
        <div class="chap-head"><span class="badge" style="background:var(--c6)">Cours</span><h2>Exemples et applications des séances</h2></div>
        <div class="grid">
          <div class="card span2">
            <h3>Égalisation d'une image 3 bits (64 × 64)</h3>
            <div class="table-scroll" tabindex="0" role="region" aria-label="Tableau du cours">
              <table>
                <tr><th>$r_k$</th><td>0</td><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td></tr>
                <tr><th>$n_k$</th><td>790</td><td>1023</td><td>850</td><td>656</td><td>329</td><td>245</td><td>122</td><td>81</td></tr>
                <tr><th>$s_k$</th><td>1,35</td><td>3,08</td><td>4,55</td><td>5,67</td><td>6,23</td><td>6,65</td><td>6,86</td><td>7,00</td></tr>
                <tr><th>arrondi</th><td>1</td><td>3</td><td>5</td><td>6</td><td>6</td><td>7</td><td>7</td><td>7</td></tr>
              </table>
            </div>
            <p class="muted">L = 8, MN = 4 096, $s_0 = 7 \times 790/4096 = 1{,}35$.</p>
          </div>
          <div class="card">
            <h3>Négatif d'une image 8 bits</h3>
            <div class="mats">
              <div><span>r</span><table class="mat"><tr><td>100</td><td>110</td><td>90</td><td>95</td></tr><tr><td>98</td><td>140</td><td>145</td><td>135</td></tr><tr><td>89</td><td>90</td><td>88</td><td>85</td></tr><tr><td>102</td><td>105</td><td>99</td><td>115</td></tr></table></div>
              <div><span>s = 255 − r</span><table class="mat res"><tr><td>155</td><td>145</td><td>165</td><td>160</td></tr><tr><td>157</td><td>115</td><td>110</td><td>120</td></tr><tr><td>166</td><td>165</td><td>167</td><td>170</td></tr><tr><td>153</td><td>150</td><td>156</td><td>140</td></tr></table></div>
            </div>
          </div>
          <div class="card">
            <h3>Négatif d'une image 5 bits</h3>
            <div class="mats">
              <div><span>r</span><table class="mat"><tr><td>21</td><td>26</td><td>29</td><td>30</td></tr><tr><td>19</td><td>21</td><td>20</td><td>30</td></tr><tr><td>16</td><td>16</td><td>26</td><td>31</td></tr><tr><td>19</td><td>18</td><td>27</td><td>23</td></tr></table></div>
              <div><span>s = 31 − r</span><table class="mat res"><tr><td>10</td><td>5</td><td>2</td><td>1</td></tr><tr><td>12</td><td>10</td><td>11</td><td>1</td></tr><tr><td>15</td><td>15</td><td>5</td><td>0</td></tr><tr><td>12</td><td>13</td><td>4</td><td>8</td></tr></table></div>
            </div>
            <p class="muted">$L - 1 = 2^5 - 1 = 31$.</p>
          </div>
          <div class="card">
            <h3>Application RSB (séance 4)</h3>
            <ol>
              <li>RSB 10 dB vs 20 dB : la <b>première (10 dB)</b> est la plus bruitée.</li>
              <li>Le RSB peut-il être négatif ? <b>Oui</b>, il est dans $]-\infty, +\infty[$.</li>
            </ol>
          </div>
          <div class="card">
            <h3>Quiz séance 4 — corrigé</h3>
            <ul>
              <li>Poivre et sel : <b>bruit impulsionnel</b>, pixels <b>morts et saturés</b>.</li>
              <li>Pixels figés quelle que soit l'acquisition → <b>filtre médian</b>.</li>
              <li>Bruit gaussien = « bruit <b>blanc</b> ».</li>
              <li>Histogramme = <b>loi de probabilité d'apparition des intensités</b>.</li>
            </ul>
          </div>
          <div class="card">
            <h3>Quiz séance 5 — corrigé</h3>
            <ul>
              <li>Filtre gaussien : <b>linéaire, passe-bas, rend flou</b>.</li>
              <li>Convolution : <b>peut changer la taille</b> et <b>impose de choisir les valeurs hors de l'image</b>.</li>
              <li>Détecteur de contours : <b>filtre linéaire</b>, construit par <b>dérivée</b>, <b>sensible au bruit</b> (pas forcément flou).</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- TP -->
      <section class="chap" id="ex4">
        <div class="chap-head"><span class="badge" style="background:var(--c5)">TP</span><h2>TP Python (scikit-image)</h2></div>
        <div class="grid wide">
          <div class="card">
            <h3>TP 0 et 1 — Charger, afficher, canaux</h3>
<pre class="code"><code>import skimage, matplotlib.pyplot as plt
I = skimage.data.camera()          # niveaux de gris
print(I.shape, I.dtype)            # (512, 512) uint8
plt.imshow(I, cmap='gray'); plt.show()

cat = skimage.data.chelsea()       # couleur (H, W, 3)
for c in range(3):                 # R, V, B
    plt.imshow(cat[:, :, c], cmap='gray'); plt.show()</code></pre>
          </div>
          <div class="card">
            <h3>TP 1 — Résolution et quantification</h3>
<pre class="code"><code># Sous-échantillonnage : 1 pixel sur s
for s in [1, 2, 5, 10, 20, 50]:
    r = I[::s, ::s]
    plt.imshow(r, 'gray'); plt.show()

# Quantification : 256 → 128 → … → 2 niveaux
for i in range(8):
    q = 2**i
    I2 = I // q * q
    plt.imshow(I2, 'gray', vmin=0, vmax=255); plt.show()</code></pre>
            <p class="muted">Même code sur une image couleur (astronaut) : la quantification s'applique à chaque canal.</p>
          </div>
          <div class="card">
            <h3>TP 1 — Format JPEG et erreur (MSE)</h3>
<pre class="code"><code>import numpy as np, skimage.io, skimage.metrics
qualite = np.arange(1, 101); mse = np.zeros(100)
for i, q in enumerate(qualite):
    skimage.io.imsave('test.jpg', I, quality=q)
    mse[i] = skimage.metrics.mean_squared_error(I, skimage.io.imread('test.jpg'))
plt.plot(qualite, mse); plt.title('MSE'); plt.show()</code></pre>
            <p class="muted">Plus la qualité JPEG baisse, plus l'erreur (compression avec perte) augmente.</p>
          </div>
          <div class="card">
            <h3>TP 2 — Histogramme « à la main »</h3>
<pre class="code"><code>def histogramme(image):          # image uint8
    h = np.zeros(256)
    X, Y = image.shape
    for i in range(X):
        for j in range(Y):
            h[image[i, j]] += 1
    return h

# Version scikit-image (normalisée)
h, centres = skimage.exposure.histogram(I, source_range='dtype', normalize=True)</code></pre>
          </div>
          <div class="card">
            <h3>TP 2 — Étirement</h3>
<pre class="code"><code>def etirement(image):
    image = image.astype(float)
    J = image - image.min()
    J = 255 * J / J.max()
    return J.astype(np.uint8)

Ietir = etirement(skimage.data.brick())</code></pre>
          </div>
          <div class="card">
            <h3>TP 2 — Égalisation</h3>
<pre class="code"><code>def histeq(I):
    h, _ = skimage.exposure.histogram(I, source_range='dtype', normalize=True)
    cdf = h.cumsum()                 # histogramme cumulé
    return (255 * cdf[I]).astype(np.uint8)

Ieq = histeq(skimage.data.brick())
# ou : skimage.exposure.equalize_hist(I)</code></pre>
          </div>
        </div>
      </section>

      <!-- Travail à rendre -->
      <section class="chap" id="ex5">
        <div class="chap-head"><span class="badge" style="background:var(--c4)">À rendre</span><h2>Travail à rendre</h2></div>
        <div class="grid wide">
          <div class="card">
            <h3>Ex. 1 — Cameraman : histogramme, seuillage, Otsu</h3>
<pre class="code"><code>from skimage import data, exposure, filters
I = data.camera()
h, c = exposure.histogram(I)                 # histogramme
Ieq = exposure.equalize_hist(I)              # égalisation (float 0–1)
Iet = exposure.rescale_intensity(I, out_range=(0, 255))  # étirement
seuil_manuel = I > 100                       # seuil lu sur l'histogramme
t = filters.threshold_otsu(I)                # seuil d'Otsu
Ibin = I > t</code></pre>
            <p class="muted">Otsu : le seuil optimal minimise la variance <b>intra-classe</b> (classes les plus compactes).</p>
          </div>
          <div class="card">
            <h3>Ex. 2 — Image synthétique 64 × 64</h3>
            <div class="table-scroll" tabindex="0" role="region" aria-label="Tableau du cours">
              <table>
                <tr><th>Objet</th><th>Intensité</th><th>Pixels</th></tr>
                <tr><td>Fond</td><td>30</td><td>4 096 − 1 150 = <b>2 946</b></td></tr>
                <tr><td>Carré 20 × 20</td><td>80</td><td><b>400</b></td></tr>
                <tr><td>Rectangle 35 × 20</td><td>120</td><td><b>700</b></td></tr>
                <tr><td>Rectangle 10 × 5</td><td>200</td><td><b>50</b></td></tr>
              </table>
            </div>
            <p>Histogramme : 4 raies (30, 80, 120, 200). Déplacer le carré de 10 colonnes : <b>histogramme inchangé</b>. Il ne dépend pas de la position des pixels (et le carré reste dans l'image, sans chevaucher les autres formes).</p>
          </div>
          <div class="card">
            <h3>Ex. 2 — Ajouter du bruit en Python</h3>
<pre class="code"><code>from skimage.util import random_noise
Ig  = random_noise(I, mode='gaussian', mean=0, var=0.01)   # a) gaussien
Isp = random_noise(I, mode='s&amp;p', amount=0.05)              # b) poivre et sel, p = 5 %

from scipy.ndimage import uniform_filter, median_filter
Jg  = uniform_filter(Ig, size=3)    # moyenneur → bruit gaussien
Jsp = median_filter(Isp, size=3)    # médian → poivre et sel</code></pre>
          </div>
        </div>
      </section>

      <!-- CHECK -->
      <section class="chap" id="check">
        <div class="chap-head"><span class="badge" style="background:var(--warn)">À vérifier</span><h2>Points à vérifier dans les supports</h2></div>
        <div class="grid">
          <div class="card warn span2">
            <h3>Erreurs probables relevées</h3>
            <ul class="two-col">
              <li><b>Séance 4, quiz Q5</b> : la réponse donnée (« n'a rien à voir avec une loi de probabilité ») contredit le cours. La bonne réponse est la 4 : loi de probabilité d'apparition des intensités.</li>
              <li><b>Solution TD2, Ex. 2</b> : la dynamique est annoncée « de 1 à 10 » puis « 0 et 9 ». Le vrai min est 1 et le vrai max 10.</li>
              <li><b>Solution TD2, étirement</b> : le graphique place 4 → 6 et 5 → 8. Avec T(r) = 20(r − 1)/9, on trouve 7 et 9.</li>
              <li><b>Solution TD2, égalisation</b> : annoncée mais jamais calculée. Le calcul complet est dans ces fiches.</li>
              <li><b>Solution TD2, Ex. 1</b> : le graphique montre 6 pixels à 255, mais il y en a 7 (comme dans le calcul de la moyenne).</li>
              <li><b>Cours séance 2</b> : « 2³ = 256 » doit se lire 2⁸ = 256.</li>
              <li><b>TP 2</b> : <code>np.float</code> n'existe plus dans NumPy récent (utiliser <code>float</code>). Dans <code>etirement()</code>, <code>I</code> est utilisé au lieu de <code>image</code>.</li>
              <li><b>SEANCE_1.py</b> : la 2e boucle <code>for s</code> est imbriquée dans la 1re et réutilise <code>s</code>. Elle devrait être sortie de la boucle.</li>
            </ul>
            <p class="muted" style="margin-top:8px">À confirmer avec l'enseignant. Les fiches de cette page utilisent les valeurs corrigées.</p>
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

<footer>Traitement d'images médicales — Cours, exercices et quiz</footer>
`;
