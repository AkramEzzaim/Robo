// Course markup with LaTeX formulas rendered by KaTeX.
export const content = String.raw`
<header class="topbar">
  <div class="brand">
    <div class="logo"><svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 5h8M6 10h10M10 15h8M14 20h7"/><path d="M3 3v18"/></svg></div>
    <span>SSH5011 · Project Management</span>
  </div>
  <label class="search">
    <svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>
    <input id="q" type="search" aria-label="Rechercher" placeholder="Rechercher : WBS, CPI, chemin critique…" autocomplete="off">
  </label>
  <button class="icon-btn" id="theme" title="Changer de thème" aria-label="Changer de thème">
    <svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>
  </button>
</header>

<div class="layout">
  <nav class="side" id="nav">
    <div class="navgroup" data-view="cours">
      <div class="label">Cours</div>
      <a href="#ch1"><span class="dot" style="background:var(--c1)"></span>Environnement du projet</a>
      <a href="#ch2"><span class="dot" style="background:var(--c2)"></span>Rôle du chef de projet</a>
      <a href="#ch3"><span class="dot" style="background:var(--c3)"></span>Intégration · PMBOK</a>
      <a href="#ch4"><span class="dot" style="background:var(--c4)"></span>Périmètre</a>
      <a href="#ch5"><span class="dot" style="background:var(--c5)"></span>Échéancier</a>
      <a href="#ch6"><span class="dot" style="background:var(--c6)"></span>Coûts</a>
      <a href="#ch7"><span class="dot" style="background:var(--c7)"></span>Qualité</a>
    </div>
    <div class="navgroup hidden" data-view="exercices">
      <div class="label">Exercices</div>
      <a href="#ex1"><span class="dot" style="background:var(--c1)"></span>Examen intra</a>
      <a href="#ex2"><span class="dot" style="background:var(--c2)"></span>Examen intra TA</a>
      <a href="#ex3"><span class="dot" style="background:var(--c5)"></span>Applications échéancier</a>
      <a href="#ex4"><span class="dot" style="background:var(--c6)"></span>Applications coûts</a>
      <a href="#ex5"><span class="dot" style="background:var(--c7)"></span>Workshop qualité</a>
      <a href="#ex6"><span class="dot" style="background:var(--c2)"></span>Études de cas</a>
      <a href="#check"><span class="dot" style="background:var(--warn)"></span>Points à vérifier</a>
    </div>
    <div class="navgroup hidden" data-view="quiz">
      <div class="label">Quiz &amp; Examen</div>
      <a href="#quiz-start"><span class="dot" style="background:var(--accent)"></span>Choisir un mode</a>
    </div>
  </nav>

  <main>
    <div class="hero">
      <h1>Management De Projet</h1>
      <p>SSH5011 · M. Aboulmajd · Polytechnique Universiapolis. Le cours (PMBOK), les examens et applications corrigés, et des quiz pour réviser.</p>
      <div class="tabs" role="tablist">
        <button class="tab active" id="tab-cours" data-target="cours" role="tab" aria-controls="view-cours" aria-selected="true">Cours <span class="count">7</span></button>
        <button class="tab" id="tab-exercices" data-target="exercices" role="tab" aria-controls="view-exercices" aria-selected="false">Exercices <span class="count">6</span></button>
        <button class="tab" id="tab-quiz" data-target="quiz" role="tab" aria-controls="view-quiz" aria-selected="false">Quiz &amp; Examen <span class="count">71</span></button>
      </div>
    </div>

    <nav class="mnav hidden" id="mnav" aria-label="Sections"></nav>

    <div class="view" id="view-cours" role="tabpanel" aria-labelledby="tab-cours" data-view="cours">
      <div class="stats">
        <div class="stat"><div class="n">7</div><div class="l">Chapitres</div></div>
        <div class="stat"><div class="n">5</div><div class="l">Domaines PMBOK étudiés</div></div>
        <div class="stat"><div class="n">26</div><div class="l">Processus</div></div>
        <div class="stat"><div class="n">12</div><div class="l">Indicateurs de valeur acquise</div></div>
      </div>

      <!-- CH1 -->
      <section class="chap" id="ch1">
        <div class="chap-head"><span class="badge" style="background:var(--c1)">Ch. 1</span><h2>L'environnement du projet</h2></div>
        <div class="grid">
          <div class="card">
            <h3>Deux catégories d'influences</h3>
            <div class="table-scroll" tabindex="0" role="region" aria-label="Tableau du cours">
              <table>
                <tr><th></th><th>Facteurs environnementaux (EEF)</th><th>Actifs organisationnels (OPA)</th></tr>
                <tr><td>Origine</td><td>Hors du contrôle immédiat de l'équipe ; <b>internes ou externes</b></td><td><b>Internes</b> à l'organisation</td></tr>
                <tr><td>Contenu</td><td>Conditions qui influencent, contraignent ou dirigent le projet</td><td>Plans, processus, politiques, procédures, bases de connaissances</td></tr>
                <tr><td>Rôle</td><td colspan="2">Données d'entrée de la plupart des processus (surtout de planification)</td></tr>
              </table>
            </div>
          </div>
          <div class="card">
            <h3>EEF internes</h3>
            <ul>
              <li>Culture, structure et gouvernance</li>
              <li>Répartition géographique des installations et ressources</li>
              <li>Infrastructure</li>
              <li>Logiciels informatiques</li>
              <li>Disponibilité des ressources</li>
              <li>Aptitudes du personnel</li>
            </ul>
          </div>
          <div class="card">
            <h3>EEF externes</h3>
            <ul>
              <li>Conditions du marché</li>
              <li>Questions sociales et culturelles</li>
              <li>Restrictions légales</li>
              <li>Bases de données commerciales</li>
              <li>Recherche académique</li>
              <li>Standards gouvernementaux ou industriels</li>
              <li>Considérations financières (change, intérêts, inflation)</li>
              <li>Éléments environnementaux matériels (météo, conditions de travail)</li>
            </ul>
          </div>
          <div class="card">
            <h3>Actifs organisationnels : 2 catégories</h3>
            <ol>
              <li><b>Processus, politiques et procédures</b> : établis en général par le PMO ; <b>pas mis à jour</b> dans le cadre du projet (initialisation et planification, exécution et maîtrise, clôture).</li>
              <li><b>Bases de connaissances</b> : <b>mises à jour en continu</b> (données financières, retours d'expérience, gestion de la configuration, problèmes et défauts, métriques, fichiers de projets antérieurs).</li>
            </ol>
          </div>
          <div class="card">
            <h3>Systèmes de l'organisation</h3>
            <p>Facteurs du système : <b>éléments de management</b>, <b>cadres de gouvernance</b>, <b>types de structures organisationnelles</b>.</p>
            <p class="muted">Principes : les systèmes sont dynamiques, optimisables, leurs composants aussi, mais système et composants ne peuvent pas être optimisés en même temps ; ils ne sont pas linéaires.</p>
          </div>
          <div class="card">
            <h3>Gouvernance</h3>
            <p>Cadre dans lequel l'autorité est exercée : règles, politiques internes, procédures, normes, relations, systèmes, processus.</p>
            <p>Elle influence : la définition et l'atteinte des objectifs, la maîtrise et l'évaluation des risques, l'optimisation des performances.</p>
            <p class="muted">4 domaines de gouvernance : alignement, risques, performance, communications.</p>
          </div>
          <div class="card span2">
            <h3>Structures organisationnelles et chef de projet <span class="tag">tableau 2-1 simplifié</span></h3>
            <div class="table-scroll" tabindex="0" role="region" aria-label="Tableau du cours">
              <table>
                <tr><th>Structure</th><th>Autorité du CP</th><th>Rôle du CP</th><th>Qui gère le budget ?</th></tr>
                <tr><td>Organique / simple</td><td>Peu ou aucune</td><td>Temps partiel, coordinateur</td><td>Responsable ou opérateur</td></tr>
                <tr><td>Fonctionnelle (centralisée)</td><td>Peu ou aucune</td><td>Temps partiel</td><td>Responsable fonctionnel</td></tr>
                <tr><td>Multidivisionnelle</td><td>Peu ou aucune</td><td>Temps partiel</td><td>Responsable fonctionnel</td></tr>
                <tr><td>Matrice faible</td><td>Faible</td><td>Temps partiel (coordinateur)</td><td>Responsable fonctionnel</td></tr>
                <tr><td>Matrice équilibrée</td><td>Faible à modérée</td><td>Temps partiel</td><td>Mélange</td></tr>
                <tr><td>Matrice forte</td><td>Modérée à élevée</td><td>Temps plein</td><td>Chef de projet</td></tr>
                <tr><td>Orientée projet</td><td>Élevée à quasi totale</td><td>Temps plein</td><td>Chef de projet</td></tr>
                <tr><td>Virtuelle</td><td>Faible à modérée</td><td>Temps plein ou partiel</td><td>Mélange</td></tr>
                <tr><td>PMO</td><td>Élevée à quasi totale</td><td>Temps plein</td><td>Chef de projet</td></tr>
              </table>
            </div>
          </div>
          <div class="card">
            <h3>Bureau des projets (PMO) : 3 types</h3>
            <div class="table-scroll" tabindex="0" role="region" aria-label="Tableau du cours">
              <table>
                <tr><th>Type</th><th>Rôle</th><th>Maîtrise</th></tr>
                <tr><td><b>Soutenant</b></td><td>Conseil : modèles, bonnes pratiques, formation, archive</td><td>Faible</td></tr>
                <tr><td><b>Conformité</b></td><td>Soutien + exige la conformité (méthodes, modèles, gouvernance)</td><td>Modérée</td></tr>
                <tr><td><b>Directif</b></td><td>Manage directement les projets ; les CP en relèvent</td><td>Élevée</td></tr>
              </table>
            </div>
          </div>
          <div class="card">
            <h3>Éléments de management (exemples)</h3>
            <ul>
              <li>Division du travail, autorité, responsabilité, discipline</li>
              <li><b>Unicité de commande</b> : une seule personne donne les instructions</li>
              <li><b>Unicité de direction</b> : un plan et un responsable par groupe d'activités</li>
              <li>Objectifs de l'organisation &gt; objectifs individuels</li>
              <li>Rémunération équitable, canaux de communication clairs, sécurité</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- CH2 -->
      <section class="chap" id="ch2">
        <div class="chap-head"><span class="badge" style="background:var(--c2)">Ch. 2</span><h2>Le rôle du chef de projet</h2></div>
        <div class="grid">
          <div class="card">
            <h3>Définition</h3>
            <p>Le chef de projet est la personne <b>désignée par l'organisation réalisatrice</b> pour diriger l'équipe chargée d'atteindre les objectifs du projet.</p>
            <div class="table-scroll" tabindex="0" role="region" aria-label="Tableau du cours">
              <table>
                <tr><td>Responsable fonctionnel</td><td>Suivi d'un centre fonctionnel ou de profit</td></tr>
                <tr><td>Responsable des opérations</td><td>Efficacité des opérations</td></tr>
                <tr><td><b>Chef de projet</b></td><td>Atteinte des objectifs du projet</td></tr>
              </table>
            </div>
          </div>
          <div class="card">
            <h3>Analogie du chef d'orchestre</h3>
            <ul>
              <li><b>Membres et rôles</b> : plus de 100 musiciens / membres, rôles différents.</li>
              <li><b>Responsabilité envers l'équipe</b> : vision globale, alignement sur la vision, la mission et les objectifs.</li>
              <li><b>Connaissances et compétences</b> : il n'a pas à jouer de tous les instruments, mais doit comprendre et communiquer (écrit et temps réel).</li>
            </ul>
          </div>
          <div class="card">
            <h3>Sphère d'influence</h3>
            <ol>
              <li>Le projet</li>
              <li>L'organisation</li>
              <li>Le secteur d'activité</li>
              <li>La discipline professionnelle</li>
              <li>Les relations avec d'autres disciplines</li>
            </ol>
          </div>
          <div class="card span2">
            <h3>Les 3 compétences (triangle des talents du PMI)</h3>
            <div class="table-scroll" tabindex="0" role="region" aria-label="Tableau du cours">
              <table>
                <tr><th>Compétence</th><th>Contenu</th></tr>
                <tr><td><b>Technique de management de projet</b></td><td>Facteurs critiques de succès, échéancier, rapports financiers, journal des points à traiter ; adapter outils traditionnels et agiles ; planifier rigoureusement ; gérer délais, coûts, ressources, risques.</td></tr>
                <tr><td><b>Leadership</b></td><td>Guider, motiver, diriger : vision, optimisme, collaboration, gestion des conflits, communication, intégrité, reconnaître le mérite, pensée critique, constituer des équipes efficaces.</td></tr>
                <tr><td><b>Management stratégique et organisationnel</b></td><td>S'aligner sur la mission, les objectifs, le marché, la concurrence ; maîtriser risques, incidences financières, analyse coût-bénéfice (NPV, ROI), valeur commerciale, bénéfices.</td></tr>
              </table>
            </div>
          </div>
          <div class="card">
            <h3>Les 14 formes de pouvoir</h3>
            <ol class="two-col">
              <li>Position (légitime)</li><li>Information</li><li>Référence</li><li>Situationnel</li><li>Personnel / charismatique</li><li>Relationnel</li><li>Expert</li><li>Récompense</li><li>Punitif / coercitif</li><li>Séduction</li><li>Pression</li><li>Culpabilité</li><li>Persuasion</li><li>Évitement</li>
            </ol>
            <p class="muted" style="margin-top:6px">Les meilleurs CP sont proactifs : ils cherchent le pouvoir dans les limites des règles de l'organisation, au lieu d'attendre qu'on le leur donne.</p>
          </div>
          <div class="card span2">
            <h3>Management vs leadership</h3>
            <div class="table-scroll" tabindex="0" role="region" aria-label="Tableau du cours">
              <table>
                <tr><th>Management</th><th>Leadership</th></tr>
                <tr><td>Dirige grâce au pouvoir positionnel</td><td>Guide, influence et collabore grâce au pouvoir relationnel</td></tr>
                <tr><td>Maintient · Administre</td><td>Développe · Innove</td></tr>
                <tr><td>Cible les systèmes et la structure</td><td>Cible les relations avec les personnes</td></tr>
                <tr><td>S'appuie sur le contrôle</td><td>Inspire la confiance</td></tr>
                <tr><td>Court terme · demande comment et quand</td><td>Vision long terme · demande quoi et pourquoi</td></tr>
                <tr><td>Accepte le statu quo</td><td>Conteste le statu quo</td></tr>
                <tr><td><b>Fait bien les choses</b></td><td><b>Fait les bonnes choses</b></td></tr>
              </table>
            </div>
          </div>
          <div class="card">
            <h3>6 styles de leadership</h3>
            <div class="table-scroll" tabindex="0" role="region" aria-label="Tableau du cours">
              <table>
                <tr><td><b>Laissez-faire</b></td><td>L'équipe décide seule (non interventionniste)</td></tr>
                <tr><td><b>Transactionnel</b></td><td>Objectifs, retour d'information, récompenses, gestion par exception</td></tr>
                <tr><td><b>Leader-serviteur</b></td><td>Servir d'abord : développement, autonomie, bien-être</td></tr>
                <tr><td><b>Transformationnel</b></td><td>Vision inspirante, innovation, considération individuelle</td></tr>
                <tr><td><b>Charismatique</b></td><td>Énergie, enthousiasme, convictions fortes</td></tr>
                <tr><td><b>Interactionnel</b></td><td>Transactionnel + transformationnel + charismatique</td></tr>
              </table>
            </div>
          </div>
          <div class="card">
            <h3>Personnalité (traits)</h3>
            <p>Authenticité, courtoisie, créativité, conscience culturelle, empathie, intellect, managérial, politique, orientation services, sociabilité, systémique.</p>
            <p class="muted">Facteurs du choix de style : caractéristiques du leader, de l'équipe, de l'organisation, de l'environnement.</p>
          </div>
          <div class="card">
            <h3>Intégration : 3 niveaux</h3>
            <ol>
              <li><b>Processus</b> : faire interagir les processus (ex. un changement d'exigence touche périmètre, délais, budget).</li>
              <li><b>Cognitif</b> : maîtriser tous les domaines de connaissance + expérience et leadership.</li>
              <li><b>Contexte</b> : nouvelles technologies, équipes virtuelles, multiculturel.</li>
            </ol>
          </div>
          <div class="card">
            <h3>Complexité : 3 dimensions</h3>
            <ul>
              <li><b>Comportement du système</b> : interdépendances des composants.</li>
              <li><b>Comportement humain</b> : interactions entre personnes et groupes.</li>
              <li><b>Ambiguïté</b> : incertitude, manque de compréhension.</li>
            </ul>
            <p class="muted">Un projet n'« est » pas complexe : il <b>comporte</b> de la complexité (perception personnelle).</p>
          </div>
        </div>
      </section>

      <!-- CH3 -->
      <section class="chap" id="ch3">
        <div class="chap-head"><span class="badge" style="background:var(--c3)">Ch. 3</span><h2>Gestion de l'intégration et vue d'ensemble PMBOK</h2></div>
        <div class="grid">
          <div class="card span2">
            <h3>Processus des 5 domaines étudiés, par groupe de processus</h3>
            <div class="table-scroll" tabindex="0" role="region" aria-label="Tableau du cours">
              <table class="pgrid">
                <tr><th>Groupe</th><th>Intégration</th><th>Périmètre</th><th>Échéancier</th><th>Coûts</th><th>Qualité</th></tr>
                <tr><td><b>Initialisation</b></td><td>Élaborer la charte du projet</td><td>—</td><td>—</td><td>—</td><td>—</td></tr>
                <tr><td><b>Planification</b></td><td>Élaborer le plan de management du projet</td><td>Planifier la gestion du périmètre · Recueillir les exigences · Définir le périmètre · Créer le WBS</td><td>Planifier la gestion de l'échéancier · Définir les activités · Organiser les activités en séquence · Estimer la durée des activités · Élaborer l'échéancier</td><td>Planifier la gestion des coûts · Estimer les coûts · Déterminer le budget</td><td>Planifier la gestion de la qualité</td></tr>
                <tr><td><b>Exécution</b></td><td>Diriger et gérer le travail · Gérer les connaissances</td><td>—</td><td>—</td><td>—</td><td>Gérer la qualité</td></tr>
                <tr><td><b>Maîtrise</b></td><td>Maîtriser le travail · Maîtriser les changements</td><td>Valider le périmètre · Maîtriser le périmètre</td><td>Maîtriser l'échéancier</td><td>Maîtriser les coûts</td><td>Maîtriser la qualité</td></tr>
                <tr><td><b>Clôture</b></td><td>Clore le projet ou la phase</td><td>—</td><td>—</td><td>—</td><td>—</td></tr>
              </table>
            </div>
            <p class="muted" style="margin-top:6px">Total : 7 + 6 + 6 + 4 + 3 = 26 processus. Piège classique : « Créer le WBS » est un processus du <b>périmètre</b>, pas de l'échéancier ; « Estimer la durée » est dans l'<b>échéancier</b>.</p>
          </div>
          <div class="card">
            <h3>Gestion de l'intégration</h3>
            <p>Identifier, définir, combiner, unifier et coordonner les processus. Elle est <b>propre au chef de projet</b> : elle <b>ne peut être ni déléguée ni transférée</b>.</p>
            <p class="muted">Choix à faire : allocation des ressources, équilibre entre contraintes, alternatives, adaptation des processus, interdépendances.</p>
          </div>
          <div class="card span2">
            <h3>Les 7 processus d'intégration</h3>
            <div class="table-scroll" tabindex="0" role="region" aria-label="Tableau du cours">
              <table>
                <tr><td><b>4.1</b> Élaborer la charte du projet</td><td>Document qui <b>autorise formellement</b> le projet et donne au CP le droit d'allouer des ressources.</td></tr>
                <tr><td><b>4.2</b> Élaborer le plan de management</td><td>Définir, préparer, coordonner tous les plans subsidiaires en un plan complet.</td></tr>
                <tr><td><b>4.3</b> Diriger et gérer le travail</td><td>Réaliser le travail du plan et appliquer les changements approuvés.</td></tr>
                <tr><td><b>4.4</b> Gérer les connaissances</td><td>Utiliser les connaissances existantes et en créer de nouvelles.</td></tr>
                <tr><td><b>4.5</b> Maîtriser le travail</td><td>Suivre et communiquer l'avancement global.</td></tr>
                <tr><td><b>4.6</b> Maîtriser les changements</td><td>Passer en revue, approuver, gérer et communiquer tous les changements.</td></tr>
                <tr><td><b>4.7</b> Clore le projet ou la phase</td><td>Finaliser toutes les activités d'un projet, d'une phase ou d'un contrat.</td></tr>
              </table>
            </div>
          </div>
          <div class="card">
            <h3>Charte du projet : entrées et sorties</h3>
            <p><b>Entrées</b> : documents business (<b>business case</b>, <b>plan de gestion des bénéfices</b>), accords, EEF, OPA.</p>
            <p><b>Sorties</b> : <b>charte du projet</b>, <b>journal des hypothèses</b>.</p>
            <p class="muted">Le business case est donc une <b>donnée d'entrée</b> (pas de sortie). La charte n'est pas un contrat. Le CP ne modifie pas les documents business.</p>
          </div>
          <div class="card">
            <h3>Contenu de la charte</h3>
            <ul>
              <li>Objet et objectifs mesurables, critères de réussite</li>
              <li>Exigences de haut niveau, description, limites, livrables</li>
              <li>Risque global, échéancier à jalons, ressources financières préapprouvées</li>
              <li>Principales parties prenantes, exigences d'acceptation, critères de sortie</li>
              <li>CP désigné et son autorité ; sponsor et son autorité</li>
            </ul>
          </div>
          <div class="card">
            <h3>Business case et bénéfices</h3>
            <p><b>Business case</b> : justifie l'investissement (besoins du business + analyse coût-bénéfice). Origines : demande du marché, besoin organisationnel, demande client, avancée technologique, exigence légale, impact écologique, besoin social.</p>
            <p><b>Plan de gestion des bénéfices</b> : décrit les <b>bénéfices cibles</b> et sert à vérifier qu'ils sont obtenus comme prévu.</p>
          </div>
          <div class="card">
            <h3>Demandes de changement : 4 types</h3>
            <div class="table-scroll" tabindex="0" role="region" aria-label="Tableau du cours">
              <table>
                <tr><td><b>Action corrective</b></td><td>Réaligner la performance sur le plan</td></tr>
                <tr><td><b>Action préventive</b></td><td>Garantir que la performance future restera alignée</td></tr>
                <tr><td><b>Correction des défauts</b></td><td>Modifier un produit non conforme</td></tr>
                <tr><td><b>Mises à jour</b></td><td>Modifier des documents maîtrisés</td></tr>
              </table>
            </div>
            <p class="muted" style="margin-top:6px">Toute partie prenante peut en déposer. Approbation : CP ou comité de maîtrise des changements (CCB).</p>
          </div>
          <div class="card">
            <h3>Connaissances</h3>
            <ul>
              <li><b>Explicites</b> : codifiables (mots, images, chiffres), faciles à partager mais sans contexte.</li>
              <li><b>Tacites</b> : croyances, intuition, savoir-faire ; difficiles à codifier, partagées par l'échange.</li>
            </ul>
            <p class="muted">Gérer les connaissances = surtout créer un climat de confiance.</p>
          </div>
        </div>
      </section>

      <!-- CH4 -->
      <section class="chap" id="ch4">
        <div class="chap-head"><span class="badge" style="background:var(--c4)">Ch. 4</span><h2>Gestion du périmètre</h2></div>
        <div class="grid">
          <div class="card">
            <h3>Définition</h3>
            <p>S'assurer que <b>tout le travail requis, et seulement le travail requis</b>, est effectué. Définir et maîtriser ce qui est inclus et exclu.</p>
            <div class="table-scroll" tabindex="0" role="region" aria-label="Tableau du cours">
              <table>
                <tr><td><b>Contenu du produit</b></td><td>Caractéristiques et fonctions du produit, service ou résultat</td></tr>
                <tr><td><b>Périmètre du projet</b></td><td>Travail à réaliser pour livrer ce produit</td></tr>
              </table>
            </div>
          </div>
          <div class="card span2">
            <h3>Les 6 processus</h3>
            <div class="table-scroll" tabindex="0" role="region" aria-label="Tableau du cours">
              <table>
                <tr><th>#</th><th>Processus</th><th>But</th><th>Groupe</th></tr>
                <tr><td>1</td><td>Planifier la gestion du périmètre</td><td>Plan qui dit comment le périmètre sera défini, validé, maîtrisé</td><td>Planification</td></tr>
                <tr><td>2</td><td>Recueillir les exigences</td><td>Déterminer, documenter, gérer les besoins des parties prenantes</td><td>Planification</td></tr>
                <tr><td>3</td><td>Définir le périmètre</td><td>Description détaillée du projet et du produit (limites, critères d'acceptation)</td><td>Planification</td></tr>
                <tr><td>4</td><td>Créer le WBS</td><td>Subdiviser livrables et travail en composants plus faciles à gérer</td><td>Planification</td></tr>
                <tr><td>5</td><td>Valider le périmètre</td><td>Formaliser l'<b>acceptation</b> des livrables terminés</td><td>Maîtrise</td></tr>
                <tr><td>6</td><td>Maîtriser le périmètre</td><td>Surveiller et gérer les changements de la référence de base</td><td>Maîtrise</td></tr>
              </table>
            </div>
          </div>
          <div class="card">
            <h3>WBS (organigramme des tâches)</h3>
            <p>Décomposition hiérarchique du travail. Le plus bas niveau = <b>lot de travail</b>. Le WBS fournit « un cadre de ce qui doit être livré ».</p>
            <p>Il se crée en phase de <b>planification</b>.</p>
            <p class="muted">Référence de base du périmètre = énoncé du périmètre + WBS + dictionnaire du WBS.</p>
          </div>
          <div class="card">
            <h3>Outils vus en cours (Smartphone Nova)</h3>
            <ul>
              <li><b>MoSCoW</b> : Must, Should, Could, Won't have.</li>
              <li><b>Matrice de traçabilité des exigences</b> : ID, description, source, type, priorité, critère d'acceptation, livrables, phase, tests, statut, responsable, commentaires.</li>
              <li><b>Registre des modifications</b> (change log) avec analyse d'impact (coûts, délais, qualité).</li>
              <li>Énoncé du périmètre : ce qui est <b>inclus</b> et <b>exclu</b>.</li>
            </ul>
          </div>
          <div class="card">
            <h3>Considérations d'adaptation</h3>
            <p>Gestion des connaissances et des exigences · validation et maîtrise · approche de développement (prédictive, agile, hybride) · stabilité des exigences · gouvernance.</p>
          </div>
        </div>
      </section>

      <!-- CH5 -->
      <section class="chap" id="ch5">
        <div class="chap-head"><span class="badge" style="background:var(--c5)">Ch. 5</span><h2>Gestion de l'échéancier</h2></div>
        <div class="grid">
          <div class="card span2">
            <h3>Les 6 processus</h3>
            <div class="table-scroll" tabindex="0" role="region" aria-label="Tableau du cours">
              <table>
                <tr><td>1</td><td>Planifier la gestion de l'échéancier</td><td>Politiques, procédures, documentation (unités, seuils de contrôle, règles EVM, formats de rapports)</td></tr>
                <tr><td>2</td><td>Définir les activités</td><td>Décomposer les lots de travail en activités : liste d'activités, attributs, <b>liste des jalons</b></td></tr>
                <tr><td>3</td><td>Organiser les activités en séquence</td><td>Relations entre activités (diagramme de réseau)</td></tr>
                <tr><td>4</td><td>Estimer la durée des activités</td><td>Nombre de périodes de travail par activité</td></tr>
                <tr><td>5</td><td>Élaborer l'échéancier</td><td>Modèle d'échéancier (chemin critique, optimisation, compression)</td></tr>
                <tr><td>6</td><td>Maîtriser l'échéancier</td><td>Mettre à jour et gérer les changements de la référence de base</td></tr>
              </table>
            </div>
          </div>
          <div class="card">
            <h3>Planification en vagues</h3>
            <p>Planification itérative : le travail proche est détaillé, le travail lointain reste général. Forme d'<b>élaboration progressive</b>.</p>
            <p class="muted">Un <b>jalon</b> est un point ou événement important : <b>durée nulle</b>. Obligatoire (contrat) ou facultatif.</p>
          </div>
          <div class="card">
            <h3>4 liens logiques (méthode PDM)</h3>
            <div class="table-scroll" tabindex="0" role="region" aria-label="Tableau du cours">
              <table>
                <tr><td><b>Fin-Début</b> (le plus courant)</td><td>B ne commence pas avant la fin de A</td></tr>
                <tr><td><b>Fin-Fin</b></td><td>B ne finit pas avant la fin de A</td></tr>
                <tr><td><b>Début-Début</b></td><td>B ne commence pas avant le début de A</td></tr>
                <tr><td><b>Début-Fin</b> (rare)</td><td>B ne finit pas avant le début de A</td></tr>
              </table>
            </div>
            <p class="muted" style="margin-top:6px">Activités sur nœuds (AON). Convergence = plusieurs prédécesseurs ; divergence = plusieurs successeurs : plus risquées.</p>
          </div>
          <div class="card">
            <h3>Dépendances</h3>
            <div class="table-scroll" tabindex="0" role="region" aria-label="Tableau du cours">
              <table>
                <tr><td><b>Obligatoire</b></td><td>Légale, contractuelle ou physique (« logique forte »)</td></tr>
                <tr><td><b>Facultative</b></td><td>Bonne pratique (« logique faible »)</td></tr>
                <tr><td><b>Externe</b></td><td>Avec une activité hors projet, hors contrôle</td></tr>
                <tr><td><b>Interne</b></td><td>Entre activités du projet</td></tr>
              </table>
            </div>
            <p class="muted" style="margin-top:6px">Combinaisons possibles : obligatoire externe, obligatoire interne, facultative externe, facultative interne.</p>
          </div>
          <div class="card">
            <h3>Avances et retards</h3>
            <ul>
              <li><b>Avance</b> : le successeur est avancé (ex. aménagement paysager 2 semaines avant la fin des réserves : FD − 2 sem.).</li>
              <li><b>Retard</b> : le successeur est retardé (ex. édition 15 jours après le début de la rédaction : DD + 15 j).</li>
            </ul>
          </div>
          <div class="card">
            <h3>Techniques d'estimation</h3>
            <div class="table-scroll" tabindex="0" role="region" aria-label="Tableau du cours">
              <table>
                <tr><td><b>Par analogie</b></td><td>Projet similaire passé ; rapide, peu coûteuse, moins précise</td></tr>
                <tr><td><b>Paramétrique</b></td><td>Relation statistique (ex. 1 000 m ÷ 25 m/h = 40 h)</td></tr>
                <tr><td><b>À trois points</b></td><td>Optimiste, plus probable, pessimiste</td></tr>
                <tr><td><b>Ascendante</b></td><td>Agréger les estimations des niveaux inférieurs du WBS</td></tr>
              </table>
            </div>
          </div>
          <div class="card">
            <h3>Estimation à trois points</h3>
            <div class="formula">$$\text{Triangulaire : } d_E = \frac{d_O + d_{PP} + d_P}{3}$$</div>
            <div class="formula">$$\text{Bêta (PERT) : } c_E = \frac{c_O + 4\,c_{PP} + c_P}{6}$$</div>
            <p class="muted">Le cours Échéancier donne la formule triangulaire ; la formule bêta est donnée dans le cours Coûts. La technique sert aux <b>durées</b> et aux <b>coûts</b>.</p>
          </div>
          <div class="card">
            <h3>Facteurs qui influencent la durée</h3>
            <ul>
              <li>Loi des rendements décroissants</li>
              <li>Nombre de ressources : doubler ne divise pas forcément par deux</li>
              <li>Évolutions technologiques</li>
              <li>Motivation : <b>syndrome de l'étudiant</b> (procrastination), <b>loi de Parkinson</b> (le travail occupe tout le temps donné)</li>
            </ul>
          </div>
          <div class="card">
            <h3>Méthode du chemin critique : définitions</h3>
            <ul>
              <li><b>Chemin critique</b> : séquence la plus longue ; elle donne la durée minimale du projet ; marge totale nulle.</li>
              <li><b>Marge</b> : retard tolérable sans changer la durée du projet.</li>
              <li><b>Début au plus tôt</b> : date la plus tôt possible.</li>
              <li><b>Début au plus tard</b> : date limite sans retarder le projet.</li>
            </ul>
            <div class="formula">$$\text{Marge totale} = \text{Début au plus tard} - \text{Début au plus tôt}$$</div>
          </div>
          <div class="card span2">
            <h3>Optimisation des ressources : lissage vs nivellement</h3>
            <div class="table-scroll" tabindex="0" role="region" aria-label="Tableau du cours">
              <table>
                <tr><th></th><th>Nivellement des ressources</th><th>Lissage des ressources</th></tr>
                <tr><td>But</td><td>Équilibrer demande et disponibilité (ressource limitée, suraffectée ou partagée)</td><td>Ne pas dépasser une limite de ressources prédéfinie</td></tr>
                <tr><td>Marges</td><td>Peut aller au-delà des marges</td><td>Seulement dans la limite des <b>marges libre et totale</b></td></tr>
                <tr><td>Chemin critique</td><td><b>Peut changer</b></td><td><b>Ne change pas</b></td></tr>
                <tr><td>Date de fin</td><td>Souvent <b>retardée</b></td><td><b>Pas retardée</b></td></tr>
                <tr><td>Optimisation</td><td>Garantit le respect de la contrainte</td><td>Peut ne pas optimiser toutes les ressources</td></tr>
              </table>
            </div>
          </div>
          <div class="card span2">
            <h3>Compression de l'échéancier : raccourcir sans réduire le périmètre</h3>
            <div class="table-scroll" tabindex="0" role="region" aria-label="Tableau du cours">
              <table>
                <tr><th></th><th>Compression des délais (crashing)</th><th>Mise en parallèle (fast tracking)</th></tr>
                <tr><td>Principe</td><td><b>Ajouter des ressources</b> : heures supplémentaires, ressources en plus, payer une livraison accélérée</td><td>Exécuter <b>en parallèle</b> des activités normalement séquentielles (ex. fondations avant la fin des plans)</td></tr>
                <tr><td>Condition</td><td>Activités du <b>chemin critique</b> dont la durée baisse avec plus de ressources</td><td>Activités du chemin critique qui <b>peuvent se chevaucher</b></td></tr>
                <tr><td>Risque principal</td><td><b>Hausse des coûts</b> (et des risques)</td><td><b>Hausse des risques</b> (reprises, qualité, coordination), parfois des coûts</td></tr>
              </table>
            </div>
            <p class="muted" style="margin-top:6px">Quand ? Quand le projet est en retard ou qu'une date imposée (client, contrat) ne peut pas être tenue avec l'échéancier actuel. Le nivellement n'est pas une réponse à un retard : il peut au contraire allonger le projet.</p>
          </div>
          <div class="card">
            <h3>Analyse des données (élaboration)</h3>
            <ul>
              <li><b>Analyse par scénario</b> : « que se passe-t-il si… ? »</li>
              <li><b>Simulation de Monte Carlo</b> : distribution de probabilité de la date de fin (ex. 10 % au 13 mai, 90 % au 28 mai).</li>
            </ul>
          </div>
          <div class="card">
            <h3>Représentations de l'échéancier</h3>
            <ul>
              <li><b>Gantt</b> (graphique à barres) : activités en ordonnée, dates en abscisse.</li>
              <li><b>Diagramme à jalons</b> : seulement les dates clés.</li>
              <li><b>Diagramme de réseau</b> : logique des liens et chemin critique.</li>
            </ul>
            <p class="muted"><b>Jalonnement au plus tôt</b> : tout démarre au plus tôt. <b>Au plus tard</b> : tout démarre le plus tard possible en respectant la date de livraison.</p>
          </div>
          <div class="card">
            <h3>Maîtriser l'échéancier</h3>
            <p>EVM (SV, SPI), revues de performance, analyse de la tendance, analyse des écarts, analyse par scénario, burndown (agile).</p>
            <p class="muted">Agile : vélocité, rétrospectives, re-priorisation du backlog. Release : 3 à 6 mois.</p>
          </div>
        </div>
      </section>

      <!-- CH6 -->
      <section class="chap" id="ch6">
        <div class="chap-head"><span class="badge" style="background:var(--c6)">Ch. 6</span><h2>Gestion des coûts</h2></div>
        <div class="grid">
          <div class="card">
            <h3>Les 4 processus</h3>
            <ol>
              <li><b>Planifier la gestion des coûts</b> : comment les coûts seront estimés, budgétés, gérés, maîtrisés.</li>
              <li><b>Estimer les coûts</b> : coût des ressources nécessaires.</li>
              <li><b>Déterminer le budget</b> : consolider les estimations → <b>référence de base des coûts</b>.</li>
              <li><b>Maîtriser les coûts</b> : suivre et gérer les changements de la référence de base.</li>
            </ol>
          </div>
          <div class="card">
            <h3>Exactitude des estimations</h3>
            <div class="table-scroll" tabindex="0" role="region" aria-label="Tableau du cours">
              <table>
                <tr><td>Initialisation (ordre de grandeur)</td><td><b>−25 % à +75 %</b></td></tr>
                <tr><td>Plus tard (définitive)</td><td><b>−5 % à +10 %</b></td></tr>
              </table>
            </div>
            <p class="muted" style="margin-top:6px">Mêmes techniques que pour les durées : analogie, paramétrique, ascendante, trois points (triangulaire, bêta), analyse des alternatives, analyse de la réserve.</p>
          </div>
          <div class="card">
            <h3>Structure du budget</h3>
            <div class="layers">
              <div style="--l:#1e3a8a"><b>Budget du projet</b><span>= référence de base des coûts + réserve pour imprévus (management)</span></div>
              <div style="--l:var(--c5)"><b>Réf. de base</b><span>= estimations des lots + réserves pour aléas (contingence)</span></div>
              <div style="--l:var(--c2)"><b>Lots de travaux</b><span>= estimations des activités + aléas</span></div>
            </div>
            <p class="muted" style="margin-top:8px">Exemple du cours : activités → lots 340 + 275 → projet 640 = référence de base ; + 60 de réserve de management = budget 700.</p>
          </div>
          <div class="card">
            <h3>Deux réserves à ne pas confondre</h3>
            <div class="table-scroll" tabindex="0" role="region" aria-label="Tableau du cours">
              <table>
                <tr><th></th><th>Réserve pour aléas</th><th>Réserve pour imprévus</th></tr>
                <tr><td>Risques</td><td><b>Identifiés</b> (« connus-inconnus »)</td><td><b>Non anticipables</b> (« inconnus-inconnus »)</td></tr>
                <tr><td>Dans la référence de base ?</td><td><b>Oui</b></td><td><b>Non</b> (mais dans le budget)</td></tr>
                <tr><td>Utilisation</td><td>Par le CP</td><td>Via un <b>changement approuvé</b></td></tr>
              </table>
            </div>
          </div>
          <div class="card span2">
            <h3>Les 3 valeurs de base de l'analyse de la valeur acquise (EVA)</h3>
            <div class="table-scroll" tabindex="0" role="region" aria-label="Tableau du cours">
              <table>
                <tr><th>Sigle</th><th>Nom</th><th>Question</th></tr>
                <tr><td><b>PV</b></td><td>Valeur planifiée (Planned Value)</td><td>À cette date, quelle valeur de travail devait être faite ?</td></tr>
                <tr><td><b>EV</b></td><td>Valeur acquise (Earned Value)</td><td>Quelle est la valeur <b>budgétée</b> du travail réellement fait ? (EV = Σ budget × % réalisé)</td></tr>
                <tr><td><b>AC</b></td><td>Coût réel (Actual Cost)</td><td>Combien a-t-on réellement dépensé ?</td></tr>
                <tr><td><b>BAC</b></td><td>Budget à terminaison</td><td>Budget total du projet (= PV totale)</td></tr>
              </table>
            </div>
            <p class="muted" style="margin-top:6px">Piège : EV n'est <b>pas</b> la valeur prévue (c'est PV). Les réserves pour imprévus sont exclues de PV.</p>
          </div>
          <div class="card span2">
            <h3>Formules à connaître</h3>
            <div class="table-scroll" tabindex="0" role="region" aria-label="Tableau du cours">
              <table>
                <tr><th>Indicateur</th><th>Formule</th><th>Lecture</th></tr>
                <tr><td>Écart de coût <b>CV</b></td><td>$CV = EV - AC$</td><td>&lt; 0 : dépassement de budget ; &gt; 0 : économie</td></tr>
                <tr><td>Écart de délais <b>SV</b></td><td>$SV = EV - PV$</td><td>&lt; 0 : retard ; &gt; 0 : avance (s'annule toujours à la fin)</td></tr>
                <tr><td>Indice de coût <b>CPI</b></td><td>$CPI = EV / AC$</td><td>&lt; 1 : on dépense plus que prévu (l'indicateur le plus important)</td></tr>
                <tr><td>Indice de délais <b>SPI</b></td><td>$SPI = EV / PV$</td><td>&lt; 1 : moins avancé que prévu ; &gt; 1 : en avance</td></tr>
                <tr><td>Coût final estimé <b>EAC</b></td><td>$EAC = BAC / CPI$</td><td>Si la performance actuelle continue (formule par défaut des examens)</td></tr>
                <tr><td>Reste à faire <b>ETC</b></td><td>$ETC = EAC - AC$</td><td>Combien il reste à dépenser</td></tr>
                <tr><td>Écart final <b>VAC</b></td><td>$VAC = BAC - EAC$</td><td>&lt; 0 : le projet finira au-dessus du budget</td></tr>
                <tr><td>Indice à terminaison <b>TCPI</b></td><td>$TCPI = \dfrac{BAC - EV}{BAC - AC}$</td><td>Efficience à atteindre sur le travail restant pour finir au BAC (&gt; 1 : difficile)</td></tr>
              </table>
            </div>
          </div>
          <div class="card">
            <h3>Les 3 autres formules d'EAC</h3>
            <div class="formula">$$EAC = AC + \text{ETC ascendant}$$</div>
            <div class="formula">$$EAC = AC + (BAC - EV)$$</div>
            <p class="muted">Taux prévu : le reste se fera au budget.</p>
            <div class="formula">$$EAC = AC + \frac{BAC - EV}{CPI \times SPI}$$</div>
            <p class="muted">Le reste dépend à la fois des coûts et des délais.</p>
          </div>
          <div class="card">
            <h3>TCPI basé sur l'EAC</h3>
            <div class="formula">$$TCPI_{EAC} = \frac{BAC - EV}{EAC - AC}$$</div>
            <p>Quand le BAC n'est plus atteignable, l'EAC approuvé remplace le BAC. Si AC &gt; BAC, le TCPI(BAC) devient <b>négatif</b> : le budget est déjà dépassé, finir au BAC est impossible.</p>
          </div>
          <div class="card">
            <h3>Maîtriser les coûts</h3>
            <p>Outils : <b>analyse de la valeur acquise</b>, <b>analyse des écarts</b>, <b>analyse de la tendance</b> (courbe en S, prévisions), <b>analyse de la réserve</b>, TCPI.</p>
            <p class="muted">L'élaboration de l'échéancier n'est pas une technique de maîtrise des coûts.</p>
          </div>
        </div>
      </section>

      <!-- CH7 -->
      <section class="chap" id="ch7">
        <div class="chap-head"><span class="badge" style="background:var(--c7)">Ch. 7</span><h2>Gestion de la qualité</h2></div>
        <div class="grid">
          <div class="card">
            <h3>Les 3 processus</h3>
            <div class="table-scroll" tabindex="0" role="region" aria-label="Tableau du cours">
              <table>
                <tr><td><b>Planifier la gestion de la qualité</b></td><td>Exigences et normes ; comment démontrer la conformité</td><td>Planification</td></tr>
                <tr><td><b>Gérer la qualité</b></td><td>Transformer le plan en activités ; intégrer la politique qualité (≈ assurance qualité)</td><td>Exécution</td></tr>
                <tr><td><b>Maîtriser la qualité</b></td><td>Contrôler et enregistrer les résultats ; vérifier que les livrables sont conformes</td><td>Maîtrise</td></tr>
              </table>
            </div>
          </div>
          <div class="card">
            <h3>Historique de la qualité</h3>
            <div class="table-scroll" tabindex="0" role="region" aria-label="Tableau du cours">
              <table>
                <tr><td>1920–1940</td><td>Inspection et contrôle statistique</td></tr>
                <tr><td>1950–1960</td><td>Qualité totale</td></tr>
                <tr><td>1970–1980</td><td>TQM</td></tr>
                <tr><td>1990–2010</td><td>Assurance qualité (ISO)</td></tr>
              </table>
            </div>
          </div>
          <div class="card">
            <h3>Concepts</h3>
            <ul>
              <li><b>Qualité</b> : degré auquel des caractéristiques intrinsèques satisfont des exigences.</li>
              <li><b>Assurance qualité</b> : examiner et corriger les processus, pas seulement les défauts.</li>
              <li><b>Satisfaction du client</b> : comprendre et gérer ses exigences.</li>
              <li><b>Amélioration continue</b> : PDCA (Deming), TQM, Kaizen, Six Sigma, Lean.</li>
              <li><b>Responsabilité du management</b> : fournir les ressources.</li>
            </ul>
          </div>
          <div class="card span2">
            <h3>Coût de la qualité</h3>
            <div class="table-scroll" tabindex="0" role="region" aria-label="Tableau du cours">
              <table>
                <tr><th>Coût de conformité (pendant le projet)</th><th>Coût de non-conformité (pendant et après)</th></tr>
                <tr><td><b>Prévention</b> : formation, processus documentés, équipement, délai approprié</td><td><b>Défaillances internes</b> (trouvées par le projet) : reprises, déchets</td></tr>
                <tr><td><b>Évaluation</b> : tests, pertes liées aux tests destructifs, inspections</td><td><b>Défaillances externes</b> (trouvées par le client) : responsabilités, garantie, affaire perdue</td></tr>
              </table>
            </div>
            <p class="muted" style="margin-top:6px">Coûts visibles : rebuts, reprises, poursuites, retours, pénalités. Coûts invisibles : clients perdus, démotivation, stocks, accidents, heures supplémentaires.</p>
          </div>
          <div class="card span2">
            <h3>Les outils de la qualité</h3>
            <div class="table-scroll" tabindex="0" role="region" aria-label="Tableau du cours">
              <table>
                <tr><th>Outil</th><th>Usage</th></tr>
                <tr><td><b>Analyse coût-bénéfice</b></td><td>Les activités qualité prévues sont-elles rentables ?</td></tr>
                <tr><td><b>Diagramme de flux</b> / <b>SIPOC</b></td><td>Étapes, décisions, boucles d'un processus (Fournisseurs, Entrées, Processus, Sorties, Clients)</td></tr>
                <tr><td><b>Ishikawa</b> (cause-effet, arête de poisson)</td><td>Problème en tête ; causes par branches, souvent les <b>6M</b> : Main-d'œuvre, Méthode, Matériel, Matière, Milieu, Mesure</td></tr>
                <tr><td><b>Fiche de contrôle</b></td><td>Relever et compter les défauts lors de la collecte</td></tr>
                <tr><td><b>Pareto</b></td><td>Classer les causes ; principe <b>80/20</b> : quelques causes (« vital few ») font l'essentiel des défauts</td></tr>
                <tr><td><b>Histogramme</b></td><td>Nombre de défauts par livrable, par cause, etc.</td></tr>
                <tr><td><b>Diagramme de corrélation</b></td><td>Relation entre deux variables (r de −1 à +1)</td></tr>
                <tr><td><b>Carte de contrôle</b></td><td>Le processus est-il <b>stable</b>, ses performances <b>prévisibles</b> ?</td></tr>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>

    <div class="view hidden" id="view-exercices" role="tabpanel" aria-labelledby="tab-exercices" data-view="exercices">
      <div class="stats">
        <div class="stat"><div class="n">2</div><div class="l">Examens intra corrigés</div></div>
        <div class="stat"><div class="n">10</div><div class="l">Applications du cours</div></div>
        <div class="stat"><div class="n">3</div><div class="l">Études de cas</div></div>
        <div class="stat"><div class="n">9</div><div class="l">Points à vérifier</div></div>
      </div>
      <p class="muted" style="margin:-12px 0 22px">Toutes les valeurs numériques ont été recalculées. Quand le corrigé officiel diffère (arrondi intermédiaire ou erreur), l'écart est signalé en orange.</p>

      <!-- EXAM 1 -->
      <section class="chap" id="ex1">
        <div class="chap-head"><span class="badge" style="background:var(--c1)">Intra</span><h2>Examen intra SSH5011 — Automne 2025 (corrigé)</h2></div>
        <div class="grid">
          <div class="card">
            <h3>Q1 — Les parties prenantes d'un projet <span class="tag">4 pts</span></h3>
            <p>Personnes, groupes ou organisations qui peuvent <b>affecter</b> le projet, <b>être affectés</b> par lui, ou <b>se sentir affectés</b> par ses décisions ou ses résultats.</p>
            <ul>
              <li><b>Internes</b> : sponsor, chef de projet, équipe projet, PMO, comité de pilotage, responsables fonctionnels et des opérations, direction.</li>
              <li><b>Externes</b> : client, utilisateurs finaux, fournisseurs et sous-traitants, partenaires, autorités et régulateurs, collectivités, concurrents, société civile.</li>
            </ul>
            <p class="muted">Le corrigé officiel ne contient que l'énoncé ; cette réponse suit le cours (exemples Nova et Auchan). On les identifie dès l'initialisation et on les classe selon leur pouvoir, leur intérêt, leur légitimité et l'urgence.</p>
          </div>
          <div class="card">
            <h3>Q2 — Compétences du chef de projet <span class="tag">4 pts</span></h3>
            <ol>
              <li><b>Technique de management de projet</b> : maîtriser l'échéancier, les coûts, les ressources, les risques, les outils et méthodes (traditionnels et agiles).</li>
              <li><b>Leadership</b> : guider, motiver et diriger l'équipe ; communiquer, gérer les conflits, inspirer confiance.</li>
              <li><b>Management stratégique et organisationnel</b> : connaître le secteur et l'organisation, aligner le projet sur la stratégie, raisonner en valeur (ROI, NPV, bénéfices).</li>
            </ol>
            <p class="muted">C'est le « triangle des talents » du PMI, complété par la personnalité (empathie, intégrité, sens politique…).</p>
          </div>
          <div class="card">
            <h3>Q3 — Lissage vs nivellement <span class="tag">6 pts</span></h3>
            <p>Deux techniques d'<b>optimisation des ressources</b> pour que la demande ne dépasse pas la disponibilité.</p>
            <ul>
              <li><b>Nivellement</b> : on décale les dates selon les contraintes de ressources (ressource rare, partagée, suraffectée). On peut dépasser les marges : <b>le chemin critique peut changer et la date de fin est souvent retardée</b>.</li>
              <li><b>Lissage</b> : on décale les activités <b>seulement dans leurs marges</b> pour rester sous une limite. <b>Le chemin critique et la date de fin ne changent pas</b>, mais toutes les ressources ne sont pas forcément optimisées.</li>
            </ul>
          </div>
          <div class="card">
            <h3>QCM et vrai / faux <span class="tag">10 pts</span></h3>
            <div class="table-scroll" tabindex="0" role="region" aria-label="Tableau du cours">
              <table>
                <tr><th>Question</th><th>Réponse</th></tr>
                <tr><td>Processus des coûts</td><td><b>1, 2, 4</b> (« Maîtriser le périmètre » est un processus du périmètre)</td></tr>
                <tr><td>Processus du périmètre</td><td><b>1, 2, 3</b> (« Estimer la durée » est dans l'échéancier)</td></tr>
                <tr><td>Processus de l'échéancier</td><td><b>1, 3, 4</b> (« Créer le WBS » est dans le périmètre)</td></tr>
                <tr><td>Business case = sortie de la charte ?</td><td><b>Faux</b> : c'est une donnée d'<b>entrée</b></td></tr>
                <tr><td>3 points = méthode d'estimation des coûts ?</td><td><b>Vrai</b></td></tr>
                <tr><td>3 points = méthode d'estimation des durées ?</td><td><b>Vrai</b></td></tr>
                <tr><td>EV = valeur prévue à la date t ?</td><td><b>Faux</b> : c'est PV ; EV = valeur du travail réalisé</td></tr>
              </table>
            </div>
          </div>
          <div class="card span2">
            <h3>Exercice 1 — Immeuble RDC + 6 : valeur acquise au 31 août <span class="tag">15 pts</span></h3>
            <div class="split">
              <div>
                <p class="muted">Budget par niveau (tableau 1) : RDC 2,5 · 1er 2 · 2e 3 · 3e 2 · 4e 1 · 5e 0,5 · 6e 3 (M Dhs). BAC = 14. Au 31 août, le 5e étage est à 50 % et le 6e n'est pas commencé.</p>
<div class="table-scroll" tabindex="0" role="region" aria-label="Tableau du cours">
  <table class="evm"><tr><th>Indicateur</th><th>Calcul</th><th>Résultat</th><th>Corrigé officiel</th></tr><tr><td><b>PV</b></td><td>Budget janv. → août : 1 + 1,5 + 1 + 1 + 1,5 + 1,5 + 1,5 + 0,5</td><td class="num">9,5 M Dhs</td><td class="num">9,5</td></tr><tr><td><b>EV</b></td><td>RDC 2,5 + 1er 2 + 2e 3 + 3e 2 + 4e 1 + 5e (0,5 × 50 %)</td><td class="num">10,75 M Dhs</td><td class="num">10,75</td></tr><tr><td><b>AC</b></td><td>2,5 + 2,5 + 3,5 + 2,5 + 0,5 + 0,5</td><td class="num">12 M Dhs</td><td class="num">12</td></tr><tr><td><b>BAC</b></td><td>Somme des 12 mois</td><td class="num">14 M Dhs</td><td class="num">14</td></tr><tr><td><b>CV</b></td><td>EV − AC = 10,75 − 12</td><td class="num">−1,25 M Dhs</td><td class="num">−1,25</td></tr><tr><td><b>CPI</b></td><td>EV / AC = 10,75 / 12</td><td class="num">0,896</td><td class="num diff">0,895</td></tr><tr><td><b>SV</b></td><td>EV − PV = 10,75 − 9,5</td><td class="num">1,25 M Dhs</td><td class="num">1,25</td></tr><tr><td><b>SPI</b></td><td>EV / PV = 10,75 / 9,5</td><td class="num">1,132</td><td class="num diff">1,131</td></tr><tr><td><b>EAC</b></td><td>BAC / CPI = 14 / 0,8958</td><td class="num">15,628 M Dhs</td><td class="num diff">15,642</td></tr><tr><td><b>ETC</b></td><td>EAC − AC</td><td class="num">3,628 M Dhs</td><td class="num diff">3,642</td></tr><tr><td><b>VAC</b></td><td>BAC − EAC</td><td class="num">−1,628 M Dhs</td><td class="num diff">−1,642</td></tr><tr><td><b>TCPI</b></td><td>(BAC − EV) / (BAC − AC) = 3,25 / 2</td><td class="num">1,625</td><td class="num">1,625</td></tr></table>
</div>
              </div>
              <div>
                <p><b>Interprétation</b></p>
                <ul>
                  <li><b>Délais</b> : SV = +1,25 et SPI ≈ 1,13 &gt; 1 → le projet est <b>en avance</b> (4e étage fini en juillet au lieu de septembre).</li>
                  <li><b>Coûts</b> : CV = −1,25 et CPI ≈ 0,90 &lt; 1 → <b>dépassement de budget</b> : chaque dirham dépensé ne produit que 0,90 Dh de travail.</li>
                  <li><b>Prévision</b> : à ce rythme le projet coûtera environ <b>15,63 M Dhs</b>, soit un dépassement d'environ <b>1,63 M Dhs</b> (VAC).</li>
                  <li><b>TCPI = 1,625</b> : pour finir à 14 M Dhs, il faudrait produire 1,625 Dh de travail par dirham dépensé sur le reste, ce qui est très peu réaliste. Il faut revoir le budget (EAC) ou agir sur les coûts.</li>
                </ul>
                <p class="muted">Écarts avec le corrigé : il arrondit le CPI à 0,895 (au lieu de 0,8958) avant de calculer l'EAC, d'où 15,642 au lieu de 15,628. Les deux résultats sont acceptables si l'arrondi est indiqué.</p>
              </div>
            </div>
          </div>
          <div class="card span2">
            <h3>Exercice 2 — Projet informatique : ordonnancement <span class="tag">15 pts</span></h3>
            <div class="split">
              <div>
                <p><b>1. Tableau complété</b></p>
                <div class="table-scroll" tabindex="0" role="region" aria-label="Tableau du cours">
                  <table>
                    <tr><th>Tâche</th><th>Durée (sem.)</th><th>Antécédents</th><th>Successeurs</th><th>Tech./sem.</th></tr>
                    <tr><td>A</td><td>4</td><td>—</td><td><b>F</b></td><td>4</td></tr>
                    <tr><td>B</td><td>2</td><td>—</td><td><b>C, D</b></td><td>2</td></tr>
                    <tr><td>C</td><td>8</td><td>B</td><td><b>F</b></td><td>4</td></tr>
                    <tr><td>D</td><td>4</td><td>B</td><td><b>F</b></td><td>3</td></tr>
                    <tr><td>E</td><td>4</td><td>—</td><td><b>F</b></td><td>3</td></tr>
                    <tr><td>F</td><td>2</td><td>A, C, D, E</td><td><b>G</b></td><td>2</td></tr>
                    <tr><td>G</td><td>2</td><td>F</td><td><b>—</b></td><td>2</td></tr>
                  </table>
                </div>
                <p style="margin-top:10px"><b>3. Chemin critique : B → C → F → G</b> = 2 + 8 + 2 + 2 = <b>14 semaines</b>.</p>
              </div>
              <div>
                <p><b>4. Dates et marges</b> (en semaines, numérotées à partir de 1)</p>
                <div class="table-scroll" tabindex="0" role="region" aria-label="Tableau du cours">
                  <table>
                    <tr><th>Tâche</th><th>Début + tôt</th><th>Fin + tôt</th><th>Début + tard</th><th>Fin + tard</th><th>Marge totale</th></tr>
                    <tr><td>A</td><td>1</td><td>4</td><td>7</td><td>10</td><td>6</td></tr>
                    <tr class="crit-row"><td>B</td><td>1</td><td>2</td><td>1</td><td>2</td><td>0</td></tr>
                    <tr class="crit-row"><td>C</td><td>3</td><td>10</td><td>3</td><td>10</td><td>0</td></tr>
                    <tr><td>D</td><td>3</td><td>6</td><td>7</td><td>10</td><td>4</td></tr>
                    <tr><td>E</td><td>1</td><td>4</td><td>7</td><td>10</td><td>6</td></tr>
                    <tr class="crit-row"><td>F</td><td>11</td><td>12</td><td>11</td><td>12</td><td>0</td></tr>
                    <tr class="crit-row"><td>G</td><td>13</td><td>14</td><td>13</td><td>14</td><td>0</td></tr>
                  </table>
                </div>
              </div>
            </div>
            <p style="margin-top:12px"><b>2. Gantt au plus tôt</b> (critique en rouge)</p>
<div class="gantt-wrap" tabindex="0" role="region" aria-label="Diagramme de planification"><table class="gantt "><tr><th>Sem.</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th><th>7</th><th>8</th><th>9</th><th>10</th><th>11</th><th>12</th><th>13</th><th>14</th></tr><tr><th class="lab">A</th><td class="b nc s">4 tech.</td><td class="b nc"></td><td class="b nc"></td><td class="b nc e"></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><th class="lab crit"><b>B</b></th><td class="b cr s">2 tech.</td><td class="b cr e"></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><th class="lab crit"><b>C</b></th><td></td><td></td><td class="b cr s">4 tech.</td><td class="b cr"></td><td class="b cr"></td><td class="b cr"></td><td class="b cr"></td><td class="b cr"></td><td class="b cr"></td><td class="b cr e"></td><td></td><td></td><td></td><td></td></tr><tr><th class="lab">D</th><td></td><td></td><td class="b nc s">3 tech.</td><td class="b nc"></td><td class="b nc"></td><td class="b nc e"></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><th class="lab">E</th><td class="b nc s">3 tech.</td><td class="b nc"></td><td class="b nc"></td><td class="b nc e"></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><th class="lab crit"><b>F</b></th><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td class="b cr s">2 tech.</td><td class="b cr e"></td><td></td><td></td></tr><tr><th class="lab crit"><b>G</b></th><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td class="b cr s">2 tech.</td><td class="b cr e"></td></tr></table></div>
            <p style="margin-top:12px"><b>5. Avec 10 techniciens seulement ?</b> Charge au plus tôt (semaines 3–4 : A 4 + C 4 + D 3 + E 3 = <b>14 &gt; 10</b>) :</p>
<div class="gantt-wrap" tabindex="0" role="region" aria-label="Diagramme de planification"><table class="histo"><tr><th></th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th><th>7</th><th>8</th><th>9</th><th>10</th><th>11</th><th>12</th><th>13</th><th>14</th></tr><tr><th>15</th><td class=""></td><td class=""></td><td class=""></td><td class=""></td><td class=""></td><td class=""></td><td class=""></td><td class=""></td><td class=""></td><td class=""></td><td class=""></td><td class=""></td><td class=""></td><td class=""></td></tr><tr><th>14</th><td class=""></td><td class=""></td><td class="on over"></td><td class="on over"></td><td class=""></td><td class=""></td><td class=""></td><td class=""></td><td class=""></td><td class=""></td><td class=""></td><td class=""></td><td class=""></td><td class=""></td></tr><tr><th>13</th><td class=""></td><td class=""></td><td class="on over"></td><td class="on over"></td><td class=""></td><td class=""></td><td class=""></td><td class=""></td><td class=""></td><td class=""></td><td class=""></td><td class=""></td><td class=""></td><td class=""></td></tr><tr><th>12</th><td class=""></td><td class=""></td><td class="on over"></td><td class="on over"></td><td class=""></td><td class=""></td><td class=""></td><td class=""></td><td class=""></td><td class=""></td><td class=""></td><td class=""></td><td class=""></td><td class=""></td></tr><tr><th>11</th><td class=""></td><td class=""></td><td class="on over"></td><td class="on over"></td><td class=""></td><td class=""></td><td class=""></td><td class=""></td><td class=""></td><td class=""></td><td class=""></td><td class=""></td><td class=""></td><td class=""></td></tr><tr class=lim><th>10</th><td class=""></td><td class=""></td><td class="on"></td><td class="on"></td><td class=""></td><td class=""></td><td class=""></td><td class=""></td><td class=""></td><td class=""></td><td class=""></td><td class=""></td><td class=""></td><td class=""></td></tr><tr><th>9</th><td class="on"></td><td class="on"></td><td class="on"></td><td class="on"></td><td class=""></td><td class=""></td><td class=""></td><td class=""></td><td class=""></td><td class=""></td><td class=""></td><td class=""></td><td class=""></td><td class=""></td></tr><tr><th>8</th><td class="on"></td><td class="on"></td><td class="on"></td><td class="on"></td><td class=""></td><td class=""></td><td class=""></td><td class=""></td><td class=""></td><td class=""></td><td class=""></td><td class=""></td><td class=""></td><td class=""></td></tr><tr><th>7</th><td class="on"></td><td class="on"></td><td class="on"></td><td class="on"></td><td class="on"></td><td class="on"></td><td class=""></td><td class=""></td><td class=""></td><td class=""></td><td class=""></td><td class=""></td><td class=""></td><td class=""></td></tr><tr><th>6</th><td class="on"></td><td class="on"></td><td class="on"></td><td class="on"></td><td class="on"></td><td class="on"></td><td class=""></td><td class=""></td><td class=""></td><td class=""></td><td class=""></td><td class=""></td><td class=""></td><td class=""></td></tr><tr><th>5</th><td class="on"></td><td class="on"></td><td class="on"></td><td class="on"></td><td class="on"></td><td class="on"></td><td class=""></td><td class=""></td><td class=""></td><td class=""></td><td class=""></td><td class=""></td><td class=""></td><td class=""></td></tr><tr><th>4</th><td class="on"></td><td class="on"></td><td class="on"></td><td class="on"></td><td class="on"></td><td class="on"></td><td class="on"></td><td class="on"></td><td class="on"></td><td class="on"></td><td class=""></td><td class=""></td><td class=""></td><td class=""></td></tr><tr><th>3</th><td class="on"></td><td class="on"></td><td class="on"></td><td class="on"></td><td class="on"></td><td class="on"></td><td class="on"></td><td class="on"></td><td class="on"></td><td class="on"></td><td class=""></td><td class=""></td><td class=""></td><td class=""></td></tr><tr><th>2</th><td class="on"></td><td class="on"></td><td class="on"></td><td class="on"></td><td class="on"></td><td class="on"></td><td class="on"></td><td class="on"></td><td class="on"></td><td class="on"></td><td class="on"></td><td class="on"></td><td class="on"></td><td class="on"></td></tr><tr><th>1</th><td class="on"></td><td class="on"></td><td class="on"></td><td class="on"></td><td class="on"></td><td class="on"></td><td class="on"></td><td class="on"></td><td class="on"></td><td class="on"></td><td class="on"></td><td class="on"></td><td class="on"></td><td class="on"></td></tr><tr class="tot"><th>Σ</th><td>9</td><td>9</td><td>14</td><td>14</td><td>7</td><td>7</td><td>4</td><td>4</td><td>4</td><td>4</td><td>2</td><td>2</td><td>2</td><td>2</td></tr></table></div>
            <p style="margin-top:12px">On décale <b>D</b> (marge 4) et <b>E</b> (marge 6) en semaines 7–10, sans toucher aux tâches critiques :</p>
<div class="gantt-wrap" tabindex="0" role="region" aria-label="Diagramme de planification"><table class="gantt "><tr><th>Sem.</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th><th>7</th><th>8</th><th>9</th><th>10</th><th>11</th><th>12</th><th>13</th><th>14</th></tr><tr><th class="lab">A</th><td class="b nc s">4 tech.</td><td class="b nc"></td><td class="b nc"></td><td class="b nc e"></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><th class="lab crit"><b>B</b></th><td class="b cr s">2 tech.</td><td class="b cr e"></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><th class="lab crit"><b>C</b></th><td></td><td></td><td class="b cr s">4 tech.</td><td class="b cr"></td><td class="b cr"></td><td class="b cr"></td><td class="b cr"></td><td class="b cr"></td><td class="b cr"></td><td class="b cr e"></td><td></td><td></td><td></td><td></td></tr><tr><th class="lab">D</th><td></td><td></td><td></td><td></td><td></td><td></td><td class="b nc s">3 tech.</td><td class="b nc"></td><td class="b nc"></td><td class="b nc e"></td><td></td><td></td><td></td><td></td></tr><tr><th class="lab">E</th><td></td><td></td><td></td><td></td><td></td><td></td><td class="b nc s">3 tech.</td><td class="b nc"></td><td class="b nc"></td><td class="b nc e"></td><td></td><td></td><td></td><td></td></tr><tr><th class="lab crit"><b>F</b></th><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td class="b cr s">2 tech.</td><td class="b cr e"></td><td></td><td></td></tr><tr><th class="lab crit"><b>G</b></th><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td class="b cr s">2 tech.</td><td class="b cr e"></td></tr></table></div>
<div class="gantt-wrap" tabindex="0" role="region" aria-label="Diagramme de planification"><table class="histo"><tr><th></th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th><th>7</th><th>8</th><th>9</th><th>10</th><th>11</th><th>12</th><th>13</th><th>14</th></tr><tr><th>11</th><td class=""></td><td class=""></td><td class=""></td><td class=""></td><td class=""></td><td class=""></td><td class=""></td><td class=""></td><td class=""></td><td class=""></td><td class=""></td><td class=""></td><td class=""></td><td class=""></td></tr><tr class=lim><th>10</th><td class=""></td><td class=""></td><td class=""></td><td class=""></td><td class=""></td><td class=""></td><td class="on"></td><td class="on"></td><td class="on"></td><td class="on"></td><td class=""></td><td class=""></td><td class=""></td><td class=""></td></tr><tr><th>9</th><td class=""></td><td class=""></td><td class=""></td><td class=""></td><td class=""></td><td class=""></td><td class="on"></td><td class="on"></td><td class="on"></td><td class="on"></td><td class=""></td><td class=""></td><td class=""></td><td class=""></td></tr><tr><th>8</th><td class=""></td><td class=""></td><td class="on"></td><td class="on"></td><td class=""></td><td class=""></td><td class="on"></td><td class="on"></td><td class="on"></td><td class="on"></td><td class=""></td><td class=""></td><td class=""></td><td class=""></td></tr><tr><th>7</th><td class=""></td><td class=""></td><td class="on"></td><td class="on"></td><td class=""></td><td class=""></td><td class="on"></td><td class="on"></td><td class="on"></td><td class="on"></td><td class=""></td><td class=""></td><td class=""></td><td class=""></td></tr><tr><th>6</th><td class="on"></td><td class="on"></td><td class="on"></td><td class="on"></td><td class=""></td><td class=""></td><td class="on"></td><td class="on"></td><td class="on"></td><td class="on"></td><td class=""></td><td class=""></td><td class=""></td><td class=""></td></tr><tr><th>5</th><td class="on"></td><td class="on"></td><td class="on"></td><td class="on"></td><td class=""></td><td class=""></td><td class="on"></td><td class="on"></td><td class="on"></td><td class="on"></td><td class=""></td><td class=""></td><td class=""></td><td class=""></td></tr><tr><th>4</th><td class="on"></td><td class="on"></td><td class="on"></td><td class="on"></td><td class="on"></td><td class="on"></td><td class="on"></td><td class="on"></td><td class="on"></td><td class="on"></td><td class=""></td><td class=""></td><td class=""></td><td class=""></td></tr><tr><th>3</th><td class="on"></td><td class="on"></td><td class="on"></td><td class="on"></td><td class="on"></td><td class="on"></td><td class="on"></td><td class="on"></td><td class="on"></td><td class="on"></td><td class=""></td><td class=""></td><td class=""></td><td class=""></td></tr><tr><th>2</th><td class="on"></td><td class="on"></td><td class="on"></td><td class="on"></td><td class="on"></td><td class="on"></td><td class="on"></td><td class="on"></td><td class="on"></td><td class="on"></td><td class="on"></td><td class="on"></td><td class="on"></td><td class="on"></td></tr><tr><th>1</th><td class="on"></td><td class="on"></td><td class="on"></td><td class="on"></td><td class="on"></td><td class="on"></td><td class="on"></td><td class="on"></td><td class="on"></td><td class="on"></td><td class="on"></td><td class="on"></td><td class="on"></td><td class="on"></td></tr><tr class="tot"><th>Σ</th><td>6</td><td>6</td><td>8</td><td>8</td><td>4</td><td>4</td><td>10</td><td>10</td><td>10</td><td>10</td><td>2</td><td>2</td><td>2</td><td>2</td></tr></table></div>
            <p style="margin-top:10px"><b>Conclusion : non, la durée reste de 14 semaines.</b> Le pic tombe à 10 techniciens grâce au <b>lissage</b> (décalage dans les marges, chemin critique inchangé).</p>
            <p class="muted">Corrigé officiel : sa 2e courbe de charge affiche 9, 9, 8, 8, 7, 7 pour les semaines 1 à 6, ce qui ne correspond pas à son propre Gantt (A + B = 6 en semaines 1–2, C seule = 4 en semaines 5–6). La conclusion reste la même.</p>
          </div>
        </div>
      </section>

      <!-- EXAM TA -->
      <section class="chap" id="ex2">
        <div class="chap-head"><span class="badge" style="background:var(--c2)">Intra TA</span><h2>Examen intra SSH5011 — version TA (corrigé)</h2></div>
        <div class="grid">
          <div class="card">
            <h3>Q1 — Le CP doit-il asseoir sa mission sur le leadership ? <span class="tag">3 pts</span></h3>
            <p><b>Oui.</b> Le chef de projet dirige souvent des personnes qui ne dépendent pas de lui hiérarchiquement (organisation matricielle). Son autorité formelle est limitée : il doit <b>influencer</b>, donner une vision, motiver, négocier et gérer les conflits.</p>
            <p>Le leadership est l'une des 3 compétences du triangle des talents. Il faut aussi la technique et le sens stratégique : leadership <b>et</b> management (« faire les bonnes choses » et « bien faire les choses »).</p>
            <p class="muted">Illustration : cas Auchan, où le responsable sans autorité ni vision n'arrive pas à faire avancer le projet.</p>
          </div>
          <div class="card">
            <h3>Q2 — À quoi sert le plan de gestion des bénéfices ? <span class="tag">3 pts</span></h3>
            <p>C'est un <b>document business</b> qui décrit les <b>bénéfices cibles</b> du projet : quels bénéfices, quand et comment ils seront obtenus et mesurés, et qui en est responsable.</p>
            <ul>
              <li>Donnée d'<b>entrée</b> de la charte du projet (avec le business case).</li>
              <li>Il aligne le projet sur la stratégie de l'organisation.</li>
              <li>À la clôture, il sert à <b>vérifier que les bénéfices ont été obtenus comme prévu</b>.</li>
            </ul>
          </div>
          <div class="card">
            <h3>Q3 — Quand compresser ou mettre en parallèle ? <span class="tag">4 pts</span></h3>
            <p>Quand il faut <b>raccourcir l'échéancier sans réduire le périmètre</b> : retard constaté, date imposée par le client ou le contrat, objectif de délai.</p>
            <ul>
              <li><b>Compression (crashing)</b> : si l'on peut <b>ajouter des ressources</b> (heures sup., personnel, livraison express) sur des activités <b>critiques</b> dont la durée baisse réellement. Il faut accepter un <b>surcoût</b>.</li>
              <li><b>Mise en parallèle (fast tracking)</b> : si des activités critiques <b>peuvent se chevaucher</b> (liens facultatifs). Il faut accepter plus de <b>risques</b> (reprises, qualité).</li>
            </ul>
          </div>
          <div class="card">
            <h3>QCM et vrai / faux <span class="tag">10 pts</span></h3>
            <div class="table-scroll" tabindex="0" role="region" aria-label="Tableau du cours">
              <table>
                <tr><td>Création du WBS</td><td><b>En phase de planification</b></td></tr>
                <tr><td>Techniques de « Maîtriser les coûts »</td><td><b>EVA, analyse des écarts, analyse de la tendance</b> (pas l'élaboration de l'échéancier)</td></tr>
                <tr><td>Le TCPI prend en compte</td><td><b>BAC et AC</b> (et EV)</td></tr>
                <tr><td>Estimation analogique dans le périmètre ?</td><td><b>Faux</b> : elle sert aux durées et aux coûts</td></tr>
                <tr><td>3 points pour les coûts ?</td><td><b>Vrai</b></td></tr>
                <tr><td>3 points pour les durées ?</td><td><b>Vrai</b></td></tr>
                <tr><td>Nivellement pour faire face à un retard ?</td><td><b>Faux</b> : il équilibre les ressources (et peut retarder le projet) ; on utilise la compression ou la mise en parallèle</td></tr>
              </table>
            </div>
          </div>
          <div class="card span2">
            <h3>Exercice 1 — Immeuble RDC + 6 : valeur acquise au 30 septembre <span class="tag">15 pts</span></h3>
            <div class="split">
              <div>
                <p class="muted">Au 30 septembre : 5e étage terminé (75 % + 25 %), 6e étage à 50 %. Dépenses totales 15 M Dhs.</p>
<div class="table-scroll" tabindex="0" role="region" aria-label="Tableau du cours">
  <table class="evm"><tr><th>Indicateur</th><th>Calcul</th><th>Résultat</th><th>Corrigé officiel</th></tr><tr><td><b>PV</b></td><td>Budget janv. → sept. : 9,5 + 1</td><td class="num">10,5 M Dhs</td><td class="num">10,5</td></tr><tr><td><b>EV</b></td><td>RDC 2,5 + 1er 2 + 2e 3 + 3e 2 + 4e 1 + 5e 0,5 × (75 % + 25 %) + 6e (3 × 50 %)</td><td class="num">12,5 M Dhs</td><td class="num">12,5</td></tr><tr><td><b>AC</b></td><td>2,5 + 2,5 + 3,5 + 2,5 + 0,5 + 0,5 + 0,5 + 2,5</td><td class="num">15 M Dhs</td><td class="num">15</td></tr><tr><td><b>BAC</b></td><td>Somme des 12 mois</td><td class="num">14 M Dhs</td><td class="num">14</td></tr><tr><td><b>CV</b></td><td>EV − AC = 12,5 − 15</td><td class="num">−2,5 M Dhs</td><td class="num">−2,5</td></tr><tr><td><b>CPI</b></td><td>EV / AC = 12,5 / 15</td><td class="num">0,833</td><td class="num">0,833</td></tr><tr><td><b>SV</b></td><td>EV − PV = 12,5 − 10,5</td><td class="num">2 M Dhs</td><td class="num">2</td></tr><tr><td><b>SPI</b></td><td>EV / PV = 12,5 / 10,5</td><td class="num">1,19</td><td class="num">1,190</td></tr><tr><td><b>EAC</b></td><td>BAC / CPI = 14 / 0,8333</td><td class="num">16,8 M Dhs</td><td class="num diff">16,806</td></tr><tr><td><b>ETC</b></td><td>EAC − AC</td><td class="num">1,8 M Dhs</td><td class="num diff">1,806</td></tr><tr><td><b>VAC</b></td><td>BAC − EAC</td><td class="num">−2,8 M Dhs</td><td class="num diff">−2,806</td></tr><tr><td><b>TCPI</b></td><td>(BAC − EV) / (BAC − AC) = 1,5 / (−1)</td><td class="num">−1,5</td><td class="num">−1,5</td></tr></table>
</div>
              </div>
              <div>
                <p><b>Interprétation</b></p>
                <ul>
                  <li><b>Délais</b> : SV = +2 et SPI ≈ 1,19 → <b>nette avance</b> (le 6e étage, prévu en novembre, est déjà à moitié fait).</li>
                  <li><b>Coûts</b> : CV = −2,5 et CPI ≈ 0,83 → <b>fort dépassement</b>. Le coût réel (15) dépasse déjà le budget total (BAC = 14).</li>
                  <li><b>Prévision</b> : EAC = <b>16,8 M Dhs</b>, soit environ 1,8 M Dhs encore à dépenser et un dépassement final de <b>2,8 M Dhs</b>.</li>
                  <li><b>TCPI = −1,5</b> : un TCPI négatif signifie que le budget est <b>déjà épuisé</b> (AC &gt; BAC). Finir à 14 M Dhs est impossible : il faut faire approuver un nouveau budget (EAC). Basé sur l'EAC : (14 − 12,5) / (16,8 − 15) = <b>0,833</b>.</li>
                </ul>
                <p class="muted">Écarts avec le corrigé : avec le CPI exact (0,8333 = 5/6), l'EAC vaut exactement 14 × 15 / 12,5 = 16,8. Le corrigé a arrondi le CPI à 0,833, d'où 16,806, 1,806 et −2,806.</p>
              </div>
            </div>
          </div>
          <div class="card span2">
            <h3>Exercice 2 — Smartphone Nova : recommandations pour le périmètre <span class="tag">15 pts</span></h3>
            <p class="muted">Contexte : Technova, 12 mois, 8 M€, prototypes à 6 mois, production en série au mois 9, objectif 150 000 unités, ISO 9001, experts R&amp;D peu disponibles.</p>
            <div class="table-scroll" tabindex="0" role="region" aria-label="Tableau du cours">
              <table>
                <tr><th>Processus PMBOK</th><th>Recommandations à Mme Benjelloun</th></tr>
                <tr><td><b>1. Planifier la gestion du périmètre</b></td><td>Rédiger le plan de gestion du périmètre et des exigences : qui définit, qui valide, comment on traite les changements. Réunion de lancement avec marketing, R&amp;D, production, finance.</td></tr>
                <tr><td><b>2. Recueillir les exigences</b></td><td>Entretiens, ateliers, analyse de la concurrence. Exigences fonctionnelles (OLED 6,5″, autonomie 24 h, charge rapide 30 min, caméra 48 MP, IP68, 8 Go / 256 Go), techniques, réglementaires (CE, RoHS, ISO 9001). Priorisation <b>MoSCoW</b>, cahier des charges, <b>matrice de traçabilité</b>.</td></tr>
                <tr><td><b>3. Définir le périmètre</b></td><td>Énoncé du périmètre : livrables, critères d'acceptation, <b>inclusions</b> (conception, tests, production, lancement) et <b>exclusions</b> (accessoires, mises à jour après lancement), hypothèses et contraintes.</td></tr>
                <tr><td><b>4. Créer le WBS</b></td><td>Découper en lots : conception produit, hardware, software, fabrication, packaging et documentation, lancement commercial. Dictionnaire du WBS, un responsable par lot, indicateurs (taux d'achèvement des lots).</td></tr>
                <tr><td><b>5. Valider le périmètre</b></td><td>Revues formelles des livrables (prototypes au mois 6, préséries) avec les parties prenantes. <b>Acceptation écrite</b> selon les critères définis.</td></tr>
                <tr><td><b>6. Maîtriser le périmètre</b></td><td>Formulaire de demande de changement, <b>registre des changements</b>, analyse d'impact (coût, délai, qualité), approbation avant intégration. Lutter contre la dérive (scope creep) : ex. refuser une batterie plus grosse hors budget.</td></tr>
              </table>
            </div>
          </div>
        </div>
      </section>

      <!-- ECHEANCIER -->
      <section class="chap" id="ex3">
        <div class="chap-head"><span class="badge" style="background:var(--c5)">Échéancier</span><h2>Applications du cours : échéancier</h2></div>
        <div class="grid">
          <div class="card span2">
            <h3>Exemple — Développement d'un logiciel de management de projet</h3>
            <div class="split">
              <div>
                <div class="table-scroll" tabindex="0" role="region" aria-label="Tableau du cours">
                  <table>
                    <tr><th>Tâche</th><th>Nom</th><th>Durée (j)</th><th>Antériorité</th></tr>
                    <tr><td>A</td><td>Analyse des besoins</td><td>3</td><td>—</td></tr>
                    <tr><td>B</td><td>Conception de l'interface</td><td>7</td><td>A</td></tr>
                    <tr><td>C</td><td>Développement du logiciel</td><td>4</td><td>A</td></tr>
                    <tr><td>D</td><td>Tests</td><td>2</td><td>B, C</td></tr>
                    <tr><td>E</td><td>Déploiement</td><td>1</td><td>D</td></tr>
                  </table>
                </div>
              </div>
              <div>
                <ul>
                  <li>Chemin critique : <b>A → B → D → E</b> = 13 jours.</li>
                  <li>C : début au plus tôt jour 4, fin au plus tôt jour 7 ; début au plus tard jour 7, fin au plus tard jour 10 → <b>marge 3 jours</b>.</li>
                </ul>
              </div>
            </div>
<div class="gantt-wrap" tabindex="0" role="region" aria-label="Diagramme de planification"><table class="gantt "><tr><th>Jour</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th><th>7</th><th>8</th><th>9</th><th>10</th><th>11</th><th>12</th><th>13</th></tr><tr><th class="lab crit"><b>A</b></th><td class="b cr s"></td><td class="b cr"></td><td class="b cr e"></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><th class="lab crit"><b>B</b></th><td></td><td></td><td></td><td class="b cr s"></td><td class="b cr"></td><td class="b cr"></td><td class="b cr"></td><td class="b cr"></td><td class="b cr"></td><td class="b cr e"></td><td></td><td></td><td></td></tr><tr><th class="lab">C</th><td></td><td></td><td></td><td class="b nc s"></td><td class="b nc"></td><td class="b nc"></td><td class="b nc e"></td><td class="b mg s"></td><td class="b mg"></td><td class="b mg e"></td><td></td><td></td><td></td></tr><tr><th class="lab crit"><b>D</b></th><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td class="b cr s"></td><td class="b cr e"></td><td></td></tr><tr><th class="lab crit"><b>E</b></th><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td class="b cr s e"></td></tr></table></div>
            <p class="muted">Hachures grises : marge de la tâche C.</p>
          </div>
          <div class="card span2">
            <h3>Application 1 — Construction d'un entrepôt (prévu vs réel)</h3>
            <div class="split">
              <div>
                <div class="table-scroll" tabindex="0" role="region" aria-label="Tableau du cours">
                  <table>
                    <tr><th>Tâche</th><th>Libellé</th><th>Jours</th><th>Antériorité</th></tr>
                    <tr><td>A</td><td>Acceptation des plans</td><td>2</td><td>—</td></tr>
                    <tr><td>B</td><td>Préparation du terrain</td><td>2</td><td>—</td></tr>
                    <tr><td>C</td><td>Commande des matériaux</td><td>1</td><td>A</td></tr>
                    <tr><td>D</td><td>Creusage de fondation</td><td>1</td><td>A, B</td></tr>
                    <tr><td>E</td><td>Commande portes et fenêtres</td><td>2</td><td>A</td></tr>
                    <tr><td>F</td><td>Livraison des matériaux</td><td>2</td><td>C</td></tr>
                    <tr><td>G</td><td>Coulage de fondation</td><td>2</td><td>D, F</td></tr>
                    <tr><td>H</td><td>Livraison portes et fenêtres</td><td>7</td><td>E</td></tr>
                    <tr><td>I</td><td>Pose des murs</td><td>4</td><td>G</td></tr>
                    <tr><td>J</td><td>Mise en place des fenêtres</td><td>1</td><td>H, I</td></tr>
                  </table>
                </div>
              </div>
              <div>
                <p><b>Durée prévisionnelle : 12 jours.</b> Deux chemins critiques : A → E → H → J et A → C → F → G → I → J (12 jours chacun).</p>
                <p><b>Imprévus</b> :</p>
                <ul>
                  <li>Le seul technicien compétent pour E est absent les jours 3 et 4 → E passe aux jours 5–6, donc H aux jours 7–13.</li>
                  <li>Les matériaux ne sont livrés qu'à partir du début du jour 7 → F jours 7–8, G jours 9–10, I jours 11–14.</li>
                </ul>
                <p><b>Durée réelle : 15 jours</b> (J au jour 15, après I).</p>
              </div>
            </div>
<div class="gantt-wrap" tabindex="0" role="region" aria-label="Diagramme de planification"><table class="gantt small"><tr><th>Jour</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th><th>7</th><th>8</th><th>9</th><th>10</th><th>11</th><th>12</th><th>13</th><th>14</th><th>15</th></tr><tr><th class="lab">A</th><td class="b pv s"></td><td class="b pv e"></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><th class="lab">B</th><td class="b pv s"></td><td class="b pv e"></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><th class="lab">C</th><td></td><td></td><td class="b pv s e"></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><th class="lab">D</th><td></td><td></td><td class="b pv s e"></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><th class="lab">E</th><td></td><td></td><td class="b pv s"></td><td class="b pv e"></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><th class="lab">E réel</th><td></td><td></td><td></td><td></td><td class="b rl s"></td><td class="b rl e"></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><th class="lab">F</th><td></td><td></td><td></td><td class="b pv s"></td><td class="b pv e"></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><th class="lab">F réel</th><td></td><td></td><td></td><td></td><td></td><td></td><td class="b rl s"></td><td class="b rl e"></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><th class="lab">G</th><td></td><td></td><td></td><td></td><td></td><td class="b pv s"></td><td class="b pv e"></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><th class="lab">G réel</th><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td class="b rl s"></td><td class="b rl e"></td><td></td><td></td><td></td><td></td><td></td></tr><tr><th class="lab">H</th><td></td><td></td><td></td><td></td><td class="b pv s"></td><td class="b pv"></td><td class="b pv"></td><td class="b pv"></td><td class="b pv"></td><td class="b pv"></td><td class="b pv e"></td><td></td><td></td><td></td><td></td></tr><tr><th class="lab">H réel</th><td></td><td></td><td></td><td></td><td></td><td></td><td class="b rl s"></td><td class="b rl"></td><td class="b rl"></td><td class="b rl"></td><td class="b rl"></td><td class="b rl"></td><td class="b rl e"></td><td></td><td></td></tr><tr><th class="lab">I</th><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td class="b pv s"></td><td class="b pv"></td><td class="b pv"></td><td class="b pv e"></td><td></td><td></td><td></td><td></td></tr><tr><th class="lab">I réel</th><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td class="b rl s"></td><td class="b rl"></td><td class="b rl"></td><td class="b rl e"></td><td></td></tr><tr><th class="lab">J</th><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td class="b pv s e"></td><td></td><td></td><td></td></tr><tr><th class="lab">J réel</th><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td class="b rl s e"></td></tr></table></div>
            <p class="muted">Bleu : prévu. Orange : réel.</p>
          </div>
          <div class="card">
            <h3>Application 2</h3>
            <p>C'est le même projet que l'exercice 2 de l'examen intra (tâches A à G, techniciens, limite de 10). Voir le corrigé complet plus haut.</p>
            <p><b>Jalonnement</b> de ce projet de 14 semaines :</p>
            <ul>
              <li><b>Au plus tôt</b>, début le lundi 9 décembre 2024 → fin la semaine du <b>10 au 15 mars 2025</b>.</li>
              <li><b>Au plus tard</b>, pour finir le samedi 15 février 2025 → démarrer le lundi <b>11 novembre 2024</b>.</li>
            </ul>
          </div>
          <div class="card span2">
            <h3>Application 3 — Application de gestion de stock (10 développeurs)</h3>
            <div class="split">
              <div>
                <div class="table-scroll" tabindex="0" role="region" aria-label="Tableau du cours">
                  <table>
                    <tr><th>Tâche</th><th>Description</th><th>Jours</th><th>Dépend.</th><th>Dév.</th></tr>
                    <tr><td>A</td><td>Analyse des besoins</td><td>3</td><td>—</td><td>2</td></tr>
                    <tr><td>B</td><td>Développement du logiciel</td><td>7</td><td>A</td><td>5</td></tr>
                    <tr><td>C</td><td>Conception de l'interface</td><td>5</td><td>—</td><td>3</td></tr>
                    <tr><td>D</td><td>Tests</td><td>4</td><td>B, C</td><td>3</td></tr>
                    <tr><td>E</td><td>Déploiement</td><td>1</td><td>D</td><td>1</td></tr>
                  </table>
                </div>
                <p style="margin-top:8px"><b>Durée prévisionnelle : 15 jours</b> (chemin critique A → B → D → E).</p>
              </div>
              <div>
                <p><b>Le client veut le déploiement en 10 jours au maximum.</b> On combine les deux techniques de compression :</p>
                <ul>
                  <li><b>Compression</b> : 7 développeurs sur B → B dure 5 jours (jours 4 à 8).</li>
                  <li><b>Mise en parallèle</b> : D démarre au 3e jour de B, soit le jour 6 (C est fini au jour 5) → D jours 6–9, E jour 10.</li>
                </ul>
                <p>Charge par jour : 5 · 5 · 5 · 10 · 10 · 10 · 10 · 10 · 3 · 1 développeurs → jamais plus de 10.</p>
                <p><b>Oui, le projet peut finir en 10 jours.</b></p>
              </div>
            </div>
            <p><b>Avant</b> :</p>
<div class="gantt-wrap" tabindex="0" role="region" aria-label="Diagramme de planification"><table class="gantt "><tr><th>Jour</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th><th>7</th><th>8</th><th>9</th><th>10</th><th>11</th><th>12</th><th>13</th><th>14</th><th>15</th></tr><tr><th class="lab crit"><b>A</b></th><td class="b cr s">2 dév.</td><td class="b cr"></td><td class="b cr e"></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><th class="lab crit"><b>B</b></th><td></td><td></td><td></td><td class="b cr s">5 dév.</td><td class="b cr"></td><td class="b cr"></td><td class="b cr"></td><td class="b cr"></td><td class="b cr"></td><td class="b cr e"></td><td></td><td></td><td></td><td></td><td></td></tr><tr><th class="lab">C</th><td class="b nc s">3 dév.</td><td class="b nc"></td><td class="b nc"></td><td class="b nc"></td><td class="b nc e"></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><th class="lab crit"><b>D</b></th><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td class="b cr s">3 dév.</td><td class="b cr"></td><td class="b cr"></td><td class="b cr e"></td><td></td></tr><tr><th class="lab crit"><b>E</b></th><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td class="b cr s e">1</td></tr></table></div>
            <p><b>Après compression et mise en parallèle</b> :</p>
<div class="gantt-wrap" tabindex="0" role="region" aria-label="Diagramme de planification"><table class="gantt "><tr><th>Jour</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th><th>7</th><th>8</th><th>9</th><th>10</th><th>11</th><th>12</th><th>13</th><th>14</th><th>15</th></tr><tr><th class="lab crit"><b>A</b></th><td class="b cr s">2 dév.</td><td class="b cr"></td><td class="b cr e"></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><th class="lab crit"><b>B</b></th><td></td><td></td><td></td><td class="b cr s">7 dév.</td><td class="b cr"></td><td class="b cr"></td><td class="b cr"></td><td class="b cr e"></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><th class="lab">C</th><td class="b nc s">3 dév.</td><td class="b nc"></td><td class="b nc"></td><td class="b nc"></td><td class="b nc e"></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><th class="lab crit"><b>D</b></th><td></td><td></td><td></td><td></td><td></td><td class="b cr s">3 dév.</td><td class="b cr"></td><td class="b cr"></td><td class="b cr e"></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><th class="lab crit"><b>E</b></th><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td class="b cr s e">1</td><td></td><td></td><td></td><td></td><td></td></tr></table></div>
            <p class="muted">Pas de corrigé officiel pour cette application : solution proposée et vérifiée (dépendances et limite de 10 développeurs respectées).</p>
          </div>
          <div class="card">
            <h3>Technique de chevauchement — 400 pièces P001</h3>
            <div class="table-scroll" tabindex="0" role="region" aria-label="Tableau du cours">
              <table>
                <tr><th>Poste</th><th>Capacité</th><th>Lot de 400</th><th>Lot de 100</th></tr>
                <tr><td>P1</td><td>400 p/h</td><td>1 h</td><td>15 min</td></tr>
                <tr><td>P2</td><td>200 p/h</td><td>2 h</td><td>30 min</td></tr>
                <tr><td>P3</td><td>100 p/h</td><td>4 h</td><td>1 h</td></tr>
                <tr><td>P4</td><td>200 p/h</td><td>2 h</td><td>30 min</td></tr>
              </table>
            </div>
            <ul style="margin-top:8px">
              <li><b>Sans chevauchement</b> : 1 + 2 + 4 + 2 = <b>9 h</b>.</li>
              <li><b>4 lots de 100</b> : P3 (goulot) démarre après 0,25 + 0,5 h et travaille 4 h sans arrêt, puis le dernier lot passe 0,5 h en P4 : 0,75 + 4 + 0,5 = <b>5 h 15</b>.</li>
              <li><b>8 lots de 50</b> : 0,125 + 0,25 + 4 + 0,25 = <b>4 h 37 min 30 s</b>.</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- COUTS -->
      <section class="chap" id="ex4">
        <div class="chap-head"><span class="badge" style="background:var(--c6)">Coûts</span><h2>Applications du cours : valeur acquise</h2></div>
        <div class="grid">
          <div class="card">
            <h3>Exemple du cours — Immeuble de 5 niveaux (BAC 5 M€)</h3>
            <p class="muted">RDC 1,5 · 1er 1 · 2e 1 · 3e 1 · 4e 0,5 M€. Plan : RDC + 1er en janv.–mars, 2e avr.–mai, 3e juin–juil., 4e août–sept.</p>
            <ul>
              <li>PV au 31 mars = 1,5 + 1 = <b>2,5 M€</b> ; au 31 août = 1,5 + 1 + 1 + 1 + 0,25 = <b>4,75 M€</b>.</li>
              <li>Au 31 mai : PV = <b>3,5</b> ; EV = 1,5 + 1 + 50 % × 1 = <b>3</b> ; AC = 2 + 0,5 = <b>2,5</b>.</li>
              <li>SV = −0,5 (retard), SPI = 3 / 3,5 = <b>0,857</b> ; CV = +0,5 (économie), CPI = 3 / 2,5 = <b>1,2</b>.</li>
              <li>EAC = 5 / 1,2 = <b>4,167 M€</b> ; ETC = 4,167 − 2,5 = <b>1,667 M€</b>.</li>
            </ul>
            <p class="muted">Le cours affiche SPI = 0,85, EAC = 4,16 et ETC = 1,66 (valeurs tronquées).</p>
          </div>
          <div class="card">
            <h3>Application 1 — Clôture de 4 façades (fin du jour 3)</h3>
            <p class="muted">1 000 $ et 1 jour par façade. F1 finie (1 000 $), F2 finie (1 200 $), F3 à 50 % (600 $), F4 pas commencée.</p>
            <div class="table-scroll" tabindex="0" role="region" aria-label="Tableau du cours">
              <table>
                <tr><td>PV = 3 × 1 000</td><td class="num">3 000 $</td></tr>
                <tr><td>EV = 1 000 + 1 000 + 500</td><td class="num">2 500 $</td></tr>
                <tr><td>AC = 1 000 + 1 200 + 600</td><td class="num">2 800 $</td></tr>
                <tr><td>BAC</td><td class="num">4 000 $</td></tr>
                <tr><td>CV · CPI</td><td class="num">−300 $ · 0,893</td></tr>
                <tr><td>SV · SPI</td><td class="num">−500 $ · 0,833</td></tr>
                <tr><td>EAC = 4 000 / (2 500 / 2 800)</td><td class="num">4 480 $</td></tr>
                <tr><td>ETC · VAC</td><td class="num">1 680 $ · −480 $</td></tr>
              </table>
            </div>
            <p class="muted">Retard et dépassement. Le corrigé donne 4 479, 1 679 et −479 (CPI arrondi à 0,893).</p>
          </div>
          <div class="card">
            <h3>Application 2 — Autre scénario (fin du jour 3)</h3>
            <p class="muted">F1 finie (1 000 $), F2 finie (900 $), F3 à 50 % (600 $), F4 à 75 % (600 $).</p>
            <div class="table-scroll" tabindex="0" role="region" aria-label="Tableau du cours">
              <table>
                <tr><td>PV</td><td class="num">3 000 $</td></tr>
                <tr><td>EV = 1 000 + 1 000 + 500 + 750</td><td class="num">3 250 $</td></tr>
                <tr><td>AC = 1 000 + 900 + 600 + 600</td><td class="num">3 100 $</td></tr>
                <tr><td>CV · CPI</td><td class="num">+150 $ · 1,048</td></tr>
                <tr><td>SV · SPI</td><td class="num">+250 $ · 1,083</td></tr>
                <tr><td>EAC = 4 000 / (3 250 / 3 100)</td><td class="num">3 815 $</td></tr>
                <tr><td>ETC · VAC</td><td class="num">715 $ · +185 $</td></tr>
              </table>
            </div>
            <p class="muted">Avance et économie. Le corrigé donne 3 817, 717 et 183 (CPI arrondi à 1,048).</p>
          </div>
        </div>
      </section>

      <!-- QUALITE -->
      <section class="chap" id="ex5">
        <div class="chap-head"><span class="badge" style="background:var(--c7)">Qualité</span><h2>Workshop qualité</h2></div>
        <div class="grid">
          <div class="card span2">
            <h3>Exercice 1 — Pareto des 400 non-conformités (Smartphone Nova)</h3>
            <div class="split">
              <div>
                <div class="table-scroll" tabindex="0" role="region" aria-label="Tableau du cours">
                  <table>
                    <tr><th>Défaut</th><th>Nombre</th><th>%</th><th>Cumul %</th></tr>
                    <tr class="crit-row"><td>Écran défectueux</td><td>120</td><td>30,00</td><td>30,00</td></tr>
                    <tr class="crit-row"><td>Batterie faible autonomie</td><td>85</td><td>21,25</td><td>51,25</td></tr>
                    <tr class="crit-row"><td>Problèmes OS</td><td>60</td><td>15,00</td><td>66,25</td></tr>
                    <tr class="crit-row"><td>Coque rayée</td><td>45</td><td>11,25</td><td>77,50</td></tr>
                    <tr class="crit-row"><td>Bouton cassé</td><td>30</td><td>7,50</td><td><b>85,00</b></td></tr>
                    <tr><td>Chargeur défaillant</td><td>25</td><td>6,25</td><td>91,25</td></tr>
                    <tr><td>Caméra floue</td><td>20</td><td>5,00</td><td>96,25</td></tr>
                    <tr><td>Autres</td><td>15</td><td>3,75</td><td>100,00</td></tr>
                  </table>
                </div>
              </div>
              <div>
                <div class="pareto" id="pareto"><div class="phead"><span>Défaut</span><span></span><span>Nb</span><span>Cumul</span></div><div class="prow vital"><span class="pl">Écran défectueux</span><span class="pbar"><i style="width:100.00%"></i></span><span class="pv">120</span><span class="pc">30,00 %</span></div><div class="prow vital"><span class="pl">Batterie</span><span class="pbar"><i style="width:70.83%"></i></span><span class="pv">85</span><span class="pc">51,25 %</span></div><div class="prow vital"><span class="pl">Problèmes OS</span><span class="pbar"><i style="width:50.00%"></i></span><span class="pv">60</span><span class="pc">66,25 %</span></div><div class="prow vital"><span class="pl">Coque rayée</span><span class="pbar"><i style="width:37.50%"></i></span><span class="pv">45</span><span class="pc">77,50 %</span></div><div class="prow vital"><span class="pl">Bouton cassé</span><span class="pbar"><i style="width:25.00%"></i></span><span class="pv">30</span><span class="pc">85,00 %</span></div><div class="prow"><span class="pl">Chargeur</span><span class="pbar"><i style="width:20.83%"></i></span><span class="pv">25</span><span class="pc">91,25 %</span></div><div class="prow"><span class="pl">Caméra floue</span><span class="pbar"><i style="width:16.67%"></i></span><span class="pv">20</span><span class="pc">96,25 %</span></div><div class="prow"><span class="pl">Autres</span><span class="pbar"><i style="width:12.50%"></i></span><span class="pv">15</span><span class="pc">100,00 %</span></div></div>
                <ul>
                  <li>Le seuil de 80 % (320 défauts) est franchi au <b>5e défaut</b> (Bouton cassé : 340 défauts, 85 %). Après 4 causes, on n'est qu'à 310 défauts (77,5 %).</li>
                  <li>Le corrigé retient comme « vital few » les 3 premières causes (265 défauts, 66,25 %) pour concentrer l'effort.</li>
                  <li><b>Actions</b> : audit fournisseurs et contrôle à réception des écrans et batteries ; tests automatisés de l'OS en boucle itérative ; tests d'endurance de la batterie.</li>
                </ul>
              </div>
            </div>
            <p class="muted">Le corrigé contient deux erreurs : il écrit « 4 premières causes (290 défauts, 72,5 %) » alors que 4 causes font 310 défauts (77,5 %), et ses cumuls sont arrondis (77,4 ; 84,9 ; 99,9 au lieu de 77,5 ; 85 ; 100).</p>
          </div>
          <div class="card span2">
            <h3>Exercice 2 — Ishikawa : « Écrans défectueux sur prototypes »</h3>
            <div class="table-scroll" tabindex="0" role="region" aria-label="Tableau du cours">
              <table>
                <tr><th>Branche (6M)</th><th>Causes potentielles</th></tr>
                <tr><td>Main-d'œuvre</td><td>Formation insuffisante des assembleurs · fatigue, inexpérience · rotation excessive</td></tr>
                <tr><td>Méthode</td><td>Procédure de montage non standardisée · contrôles omis · flux inadapté</td></tr>
                <tr><td>Matériel</td><td>Machines de calibration défaillantes · outils usés · ligne surchargée</td></tr>
                <tr><td>Matière</td><td>Fournisseur d'écrans irrégulier · stocks périmés · spécifications erronées</td></tr>
                <tr><td>Milieu</td><td>Température excessive · poussière · éclairage insuffisant</td></tr>
                <tr><td>Mesure</td><td>Tests visuels subjectifs · étalons obsolètes · rapports incomplets</td></tr>
              </table>
            </div>
            <p style="margin-top:8px"><b>3 causes racines et actions</b> : formation insuffisante → formation certifiante ; procédure non standardisée → manuel SOP + audit de processus ; fournisseur irrégulier → audit fournisseur + clause de pénalités qualité.</p>
          </div>
          <div class="card span2">
            <h3>Cas pratique IT — Ishikawa : « Accès lent à l'ERP » (75 % d'insatisfaction)</h3>
            <div class="table-scroll" tabindex="0" role="region" aria-label="Tableau du cours">
              <table>
                <tr><th>Cause prioritaire</th><th>Action</th><th>Responsable</th><th>Délai</th><th>Métrique de succès</th><th>Coût</th></tr>
                <tr><td>Serveurs sous-dimensionnés (50 %)</td><td>Auto-scaling AWS EC2 + alertes CloudWatch</td><td>IT Lead</td><td>1 semaine</td><td>Latence &lt; 2 s (95e centile)</td><td>5 k€/an</td></tr>
                <tr><td>Absence de CI/CD (30 %)</td><td>Pipeline GitLab CI</td><td>DevOps</td><td>2 semaines</td><td>95 % de déploiements sans erreur</td><td>3 k€</td></tr>
                <tr><td>Données non purgées (20 %)</td><td>Script ETL d'archivage (&gt; 2 ans)</td><td>DBA</td><td>3 jours</td><td>Base −60 %</td><td>1 k€</td></tr>
              </table>
            </div>
            <p class="muted" style="margin-top:6px">Puis validation (tests d'acceptation utilisateurs), mise à jour du plan qualité et du registre des leçons apprises, rapport aux parties prenantes.</p>
          </div>
        </div>
      </section>

      <!-- CAS -->
      <section class="chap" id="ex6">
        <div class="chap-head"><span class="badge" style="background:var(--c2)">Études de cas</span><h2>Auchan (Immochan) et Club de Montréal</h2></div>
        <div class="grid">
          <div class="card">
            <h3>Auchan — Le projet Gervais <span class="tag">résumé</span></h3>
            <p>Immochan, filiale immobilière d'Auchan, fonctionne presque entièrement en projets (5 à 7 ans chacun). Le responsable de projet coordonne 5 acteurs permanents qui <b>ne sont pas sous son autorité</b>.</p>
            <p>À Gervais, 3 zones se greffent (magasin Tridôme bloqué par des recours, extension de l'hypermarché et de la galerie, terrains arrière). Les parties prenantes ont des attentes divergentes (maire, autorités, directeurs Auchan et Immochan, marketing, promoteur local). Après 6 mois, aucun dossier n'est formalisé.</p>
          </div>
          <div class="card">
            <h3>Q1 — Rôle et difficultés du responsable</h3>
            <ul>
              <li>Mener le projet à bien en coordonnant une équipe qu'il <b>ne choisit pas</b> et sur laquelle il n'a <b>pas d'autorité formelle</b>.</li>
              <li>Attentes très diverses, parfois incompatibles. Il doit <b>prioriser les parties prenantes</b> (pouvoir, légitimité, urgence : modèle de Mitchell et al.) au lieu de vouloir satisfaire tout le monde.</li>
              <li>Peu d'ancienneté face à des acteurs installés depuis 10 et 15 ans, des dirigeants et des élus. Il n'est pas force de proposition.</li>
            </ul>
          </div>
          <div class="card">
            <h3>Q2 — Vision d'Immochan</h3>
            <p>« Développer 1 million de m² en 10 ans », lue par les responsables comme <b>100 000 m² par an</b> : une vision <b>purement quantitative</b>.</p>
            <ul>
              <li><b>Positif</b> : objectifs clairs et affichés.</li>
              <li><b>Négatif</b> : elle pousse à faire grand et vite, au détriment de la rentabilité, de la qualité et de l'innovation des programmes.</li>
            </ul>
          </div>
          <div class="card">
            <h3>Q3 — Pourquoi son leadership échoue</h3>
            <ul>
              <li><b>Transformationnel</b> : il ne propose <b>aucune vision</b> d'un futur désirable du site. Chacun garde donc sa propre vision.</li>
              <li><b>Transactionnel</b> : il ne fixe <b>aucune date butoir</b> et ne hiérarchise pas les attentes (Auchan à 2 ans, Tridôme à 3–4 ans, Immochan à 5–7 ans). Le projet reste à l'état de brainstorming (travaux de Gersick sur les dates butoirs).</li>
            </ul>
          </div>
          <div class="card">
            <h3>Q4 — Solutions</h3>
            <ol>
              <li>Remplacer ou renforcer le responsable par une personne plus <b>légitime</b>, porteuse d'une <b>vision</b>.</li>
              <li>Faire <b>arbitrer</b> les conflits par la hiérarchie (directeurs régionaux, direction générale), puis appliquer la décision.</li>
              <li>Construire des <b>alliances</b> entre parties prenantes pour débloquer le rapport de forces.</li>
              <li>Fixer des jalons et des dates butoirs, prioriser les zones.</li>
            </ol>
          </div>
          <div class="card">
            <h3>Club de Montréal <span class="tag">résumé</span></h3>
            <p>Communauté de pratique née en 1990 d'un séminaire organisé à Montréal pour former les premiers directeurs de projet de Renault (Twingo, Laguna). Elle réunit 18 praticiens et 6 chercheurs, avec 3 règles : confidentialité, pas de concurrents, cooptation.</p>
            <p>Le Club défend un management de projet <b>intrapreneurial</b> fondé sur l'auto-organisation et les <b>métarègles</b> (règles écrites par ceux qui les appliquent), contre l'approche <b>techniciste</b> du PMI (planification détaillée, contrôle).</p>
          </div>
          <div class="card span2">
            <h3>Club de Montréal — Éléments de réponse <span class="tag">proposés, pas de corrigé officiel</span></h3>
            <div class="table-scroll" tabindex="0" role="region" aria-label="Tableau du cours">
              <table>
                <tr><th>Question</th><th>Éléments de réponse (d'après le texte et ses annexes)</th></tr>
                <tr><td>1. Les périodes du management de projet depuis 1950</td><td>Années 1950–60 : outils de planification et de contrôle (PERT) pour les grands programmes américains (DOD, NASA). Fin des années 1960 : naissance du PMI et standardisation (PMBOK). Années 1980 : expériences japonaises et premières formations francophones (Lille, 1980). Années 1990 : ingénierie concourante, directeurs de projet puissants (Renault). Années 2000 : banalisation (IRNOP, PMI mondial), portefeuilles de projets, innovation concourante.</td></tr>
                <tr><td>2. PMI vs Club de Montréal</td><td><b>PMI (ancien paradigme)</b> : objectifs qualité-coût-délai, tâches réparties par service, règles et procédures, planning et budget initiaux, développement en V, chef de projet gestionnaire. <b>Club (nouveau paradigme)</b> : création de valeur, équipes multifonctionnelles, découpage par objets, auto-organisation par métarègles, fournisseurs associés à la conception, gestion proactive à terminaison, importance des valeurs « soft », chef de projet entrepreneur.</td></tr>
                <tr><td>3. Quel projet pour quelle approche ?</td><td><b>Techniciste</b> : projet répétitif, peu incertain, bien spécifié, à coûts contrôlés (client connu, contrat). <b>Métarègles</b> : projet innovant, complexe, très incertain et ambigu, à rentabilité contrôlée (nouveaux produits), où l'autonomie des acteurs est nécessaire.</td></tr>
                <tr><td>4. Partagez-vous leur vision ?</td><td>Question d'opinion : argumenter. Pour : l'humain, l'autonomie et l'adaptation sont décisifs en contexte incertain. Contre ou nuance : les outils du PMI restent utiles pour coordonner et contrôler, et la bonne approche dépend du niveau d'incertitude (approche hybride).</td></tr>
              </table>
            </div>
          </div>
        </div>
      </section>

      <!-- CHECK -->
      <section class="chap" id="check">
        <div class="chap-head"><span class="badge" style="background:var(--warn)">À vérifier</span><h2>Points à vérifier dans les supports</h2></div>
        <div class="grid">
          <div class="card warn span2">
            <h3>Écarts relevés dans les corrigés et les cours</h3>
            <ul class="two-col">
              <li><b>Intra, Ex. 1</b> : CPI arrondi à 0,895 avant le calcul. EAC exact 15,628 (et non 15,642), ETC 3,628, VAC −1,628. SPI exact 1,132.</li>
              <li><b>Intra TA, Ex. 1</b> : EAC exact = 16,8 (14 × 15 / 12,5), ETC 1,8, VAC −2,8 (le corrigé donne 16,806 ; 1,806 ; −2,806).</li>
              <li><b>Intra TA, TCPI = −1,5</b> : juste, mais un TCPI négatif veut dire que le budget est déjà dépassé. Il faut utiliser le TCPI basé sur l'EAC (0,833).</li>
              <li><b>Intra, Ex. 2, question 5</b> : la 2e courbe de charge (9, 9, 8, 8, 7, 7…) ne correspond pas au Gantt proposé (6, 6, 8, 8, 4, 4, 10…). Conclusion inchangée.</li>
              <li><b>Pareto</b> : 4 causes = 310 défauts (77,5 %), pas 290 (72,5 %). Le seuil de 80 % est franchi au 5e défaut. Cumuls arrondis (77,4 ; 84,9 ; 99,9).</li>
              <li><b>Applications coûts 1 et 2, cours de l'immeuble</b> : petits écarts d'arrondi (4 479 au lieu de 4 480, 3 817 au lieu de 3 815, SPI 0,85 au lieu de 0,857).</li>
              <li><b>Liaison fin-fin</b> : le cours (et la traduction française du PMBOK) dit que la rédaction doit être terminée pour que l'édition puisse « commencer ». Dans un lien fin-fin, c'est la <b>fin</b> de l'édition qui dépend de la fin de la rédaction.</li>
              <li><b>Cours Coûts, page de titre</b> : année écrite « 20256-202 ».</li>
              <li><b>Correction intra principale</b> : les diapositives des questions de cours (Q1 à Q3) n'ont pas de réponse. Les réponses de cette page suivent le cours.</li>
            </ul>
            <p class="muted" style="margin-top:8px">À confirmer avec l'enseignant. En examen, indiquez vos arrondis.</p>
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

<footer>SSH5011 Project Management — Cours, exercices et quiz · Fiche de révision</footer>
`;
