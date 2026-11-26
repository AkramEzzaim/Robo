export const projectQuiz = {
  searchPlaceholder: "Rechercher : WBS, CPI, chemin critique…",
  bestScoreKey: "pm-best",
  chapters: {
    1: { name: 'Environnement', color: 'var(--c1)' },
    2: { name: 'Rôle du CP', color: 'var(--c2)' },
    3: { name: 'Intégration', color: 'var(--c3)' },
    4: { name: 'Périmètre', color: 'var(--c4)' },
    5: { name: 'Échéancier', color: 'var(--c5)' },
    6: { name: 'Coûts', color: 'var(--c6)' },
    7: { name: 'Qualité', color: 'var(--c7)' }
  },
  questions: [
    // Ch1
    { c:1, q:"Les facteurs environnementaux de l'entreprise (EEF) sont…", o:["Des plans et procédures internes de l'organisation","Des conditions hors du contrôle immédiat de l'équipe qui influencent, contraignent ou dirigent le projet","Les livrables du projet","Les risques identifiés du registre"], a:1, e:"Les EEF échappent au contrôle immédiat de l'équipe ; ils peuvent être internes ou externes." },
    { c:1, q:"Lequel est un actif organisationnel (OPA) ?", o:["La conjoncture économique","Les lois et règlements","Une base de connaissances des projets passés","Le climat social du pays"], a:2, e:"Les OPA sont internes : plans, processus, politiques, procédures, bases de connaissances." },
    { c:1, q:"Quel type de PMO exerce le plus haut niveau de maîtrise sur les projets ?", o:["Soutenant","Conformité","Directif","Consultatif"], a:2, e:"Le PMO directif manage directement les projets (maîtrise élevée)." },
    { c:1, q:"Un PMO qui fournit modèles, bonnes pratiques et formation, sans rien imposer, est…", o:["Directif","Soutenant","De conformité","Fonctionnel"], a:1, e:"Le PMO soutenant joue un rôle de conseil : maîtrise faible." },
    { c:1, q:"Dans quelle structure le chef de projet a-t-il le moins d'autorité ?", o:["Matrice forte","Orientée projet","Fonctionnelle","PMO"], a:2, e:"En structure fonctionnelle, le CP a peu ou pas d'autorité ; le responsable fonctionnel gère le budget." },
    { c:1, q:"En matrice forte, qui gère le budget du projet ?", o:["Le responsable fonctionnel","Le chef de projet","Un mélange des deux","Le client"], a:1, e:"Matrice forte : autorité du CP modérée à élevée, à temps plein, il gère le budget." },
    { c:1, q:"Les OPA sont surtout des données d'entrée de quels processus ?", o:["Clôture","Planification","Exécution uniquement","Aucun processus"], a:1, e:"Ils entrent dans la plupart des processus, surtout ceux de planification." },
    { c:1, q:"Les lois et règlements d'un pays sont…", o:["Un OPA interne","Un EEF externe","Un livrable","Une contrainte de qualité uniquement"], a:1, e:"Ce sont des facteurs environnementaux externes à l'organisation." },

    // Ch2
    { c:2, q:"Les 3 compétences du triangle des talents du PMI sont…", o:["Technique, leadership, management stratégique et organisationnel","Planification, contrôle, clôture","Coûts, délais, qualité","Communication, négociation, vente"], a:0, e:"Technique de management de projet, leadership, et management stratégique et organisationnel." },
    { c:2, q:"« Faire les bonnes choses » caractérise plutôt…", o:["Le management","Le leadership","Le contrôle qualité","La gouvernance"], a:1, e:"Le leadership fait les bonnes choses ; le management fait bien les choses." },
    { c:2, q:"Quel trait est typique du management (et non du leadership) ?", o:["Conteste le statu quo","Inspire la confiance","S'appuie sur le contrôle","Vision long terme"], a:2, e:"Le management s'appuie sur le contrôle, cible les systèmes et la structure." },
    { c:2, q:"Le pouvoir fondé sur la position officielle dans l'organisation est le pouvoir…", o:["Référent","Légitime (position)","Expert","Charismatique"], a:1, e:"Pouvoir de position = légitime." },
    { c:2, q:"Le style de leadership qui fixe des objectifs, donne un retour et récompense, avec gestion par exception, est…", o:["Laissez-faire","Transformationnel","Transactionnel","Leader-serviteur"], a:2, e:"Transactionnel : objectifs, feedback, récompenses." },
    { c:2, q:"Le leader qui inspire par une vision et encourage l'innovation est…", o:["Transactionnel","Transformationnel","Laissez-faire","Autoritaire"], a:1, e:"Le transformationnel s'appuie sur une vision inspirante et la considération individuelle." },
    { c:2, q:"Le style « interactionnel » combine…", o:["Laissez-faire et serviteur","Transactionnel, transformationnel et charismatique","Autoritaire et participatif","Charismatique et serviteur"], a:1, e:"Interactionnel = transactionnel + transformationnel + charismatique." },
    { c:2, q:"Le « leader-serviteur » privilégie…", o:["Le contrôle strict","Le développement, l'autonomie et le bien-être de l'équipe","Les sanctions","La délégation totale sans suivi"], a:1, e:"Il sert d'abord : il développe les personnes." },
    { c:2, q:"Selon le cours, les meilleurs chefs de projet…", o:["Attendent qu'on leur donne du pouvoir","Cherchent le pouvoir de façon proactive, dans les règles de l'organisation","Utilisent surtout le pouvoir coercitif","Évitent toute forme de pouvoir"], a:1, e:"Ils sont proactifs et cherchent le pouvoir dans les limites des règles." },
    { c:2, q:"Dans le cas Auchan, pourquoi le leadership du responsable échoue-t-il ?", o:["Il est trop autoritaire","Il n'a ni vision (transformationnel) ni dates butoirs et priorités (transactionnel)","Il a trop de budget","L'équipe est sous son autorité directe"], a:1, e:"Aucune vision partagée et aucune date butoir : le projet reste au stade du brainstorming." },

    // Ch3
    { c:3, q:"Quel processus autorise formellement le projet ?", o:["Élaborer le plan de management","Élaborer la charte du projet","Diriger et gérer le travail","Définir le périmètre"], a:1, e:"La charte autorise le projet et donne au CP le droit d'allouer des ressources." },
    { c:3, q:"Le business case est, pour la charte du projet, …", o:["Une sortie","Une donnée d'entrée","Un outil","Sans rapport"], a:1, e:"Entrées de la charte : documents business (business case, plan de gestion des bénéfices), accords, EEF, OPA." },
    { c:3, q:"Les sorties d'« Élaborer la charte du projet » sont…", o:["Charte et journal des hypothèses","Charte et WBS","Business case et charte","Plan de management et registre des risques"], a:0, e:"Charte du projet + journal des hypothèses." },
    { c:3, q:"Combien de processus compte la gestion de l'intégration ?", o:["5","6","7","10"], a:2, e:"Charte, plan, diriger, connaissances, maîtriser le travail, maîtriser les changements, clore." },
    { c:3, q:"« Maîtriser les changements » appartient au groupe de processus…", o:["Planification","Exécution","Maîtrise","Clôture"], a:2, e:"Passer en revue, approuver et gérer tous les changements : groupe Maîtrise." },
    { c:3, q:"« Gérer les connaissances » appartient au groupe…", o:["Initialisation","Exécution","Maîtrise","Clôture"], a:1, e:"Avec « Diriger et gérer le travail », c'est un processus d'exécution." },
    { c:3, q:"Une action qui garantit que la performance future restera alignée sur le plan est…", o:["Une action corrective","Une action préventive","Une correction des défauts","Une mise à jour"], a:1, e:"Préventive : future ; corrective : réaligner une performance déjà écartée." },
    { c:3, q:"Qui peut déposer une demande de changement ?", o:["Seulement le sponsor","Seulement le chef de projet","Toute partie prenante","Seulement le client"], a:2, e:"Toute partie prenante ; l'approbation revient au CP ou au CCB." },
    { c:3, q:"À quoi sert le plan de gestion des bénéfices ?", o:["Lister les activités","Décrire les bénéfices visés, quand et comment les obtenir et les mesurer","Calculer la valeur acquise","Planifier la qualité"], a:1, e:"Document business, entrée de la charte, utilisé aussi à la clôture." },

    // Ch4
    { c:4, q:"Combien de processus compte la gestion du périmètre ?", o:["4","5","6","7"], a:2, e:"Planifier, recueillir les exigences, définir, créer le WBS, valider, maîtriser." },
    { c:4, q:"Lequel n'est PAS un processus du périmètre ?", o:["Recueillir les exigences","Créer le WBS","Estimer la durée des activités","Valider le périmètre"], a:2, e:"L'estimation des durées relève de l'échéancier." },
    { c:4, q:"La création du WBS se fait en phase de…", o:["Initialisation","Planification","Exécution","Clôture"], a:1, e:"Créer le WBS est un processus de planification." },
    { c:4, q:"Le WBS décompose…", o:["Les ressources par service","Le travail total en livrables et lots de travaux","Le budget par mois","Les risques par probabilité"], a:1, e:"Organigramme des tâches : décomposition hiérarchique du travail jusqu'aux lots." },
    { c:4, q:"« Valider le périmètre » consiste à…", o:["Contrôler la conformité technique interne","Obtenir l'acceptation formelle des livrables par le client ou le sponsor","Créer le WBS","Écrire la charte"], a:1, e:"Acceptation formelle des livrables terminés." },
    { c:4, q:"Dans MoSCoW, « Must » désigne…", o:["Une exigence facultative","Une exigence indispensable","Une exigence reportée","Une exigence refusée"], a:1, e:"Must have, Should have, Could have, Won't have (this time)." },
    { c:4, q:"La matrice de traçabilité des exigences sert à…", o:["Relier chaque exigence à son origine et aux livrables qui la satisfont","Calculer le CPI","Classer les risques","Planifier les achats"], a:0, e:"Elle suit chaque exigence tout au long du cycle de vie." },
    { c:4, q:"La « dérive du périmètre » (scope creep) est…", o:["Un changement approuvé","L'ajout non maîtrisé de travail sans ajuster délais, coûts et ressources","La validation du périmètre","Une réserve pour aléas"], a:1, e:"« Maîtriser le périmètre » sert à l'éviter." },

    // Ch5
    { c:5, q:"Le lien logique le plus courant est…", o:["Début-Début","Fin-Fin","Fin-Début","Début-Fin"], a:2, e:"Fin-Début : B ne commence pas avant la fin de A." },
    { c:5, q:"Dans un lien Fin-Fin, …", o:["B ne commence pas avant la fin de A","B ne finit pas avant la fin de A","B ne commence pas avant le début de A","B ne finit pas avant le début de A"], a:1, e:"Fin-Fin : la fin du successeur dépend de la fin du prédécesseur." },
    { c:5, q:"Une dépendance imposée par la loi, un contrat ou la physique est…", o:["Facultative","Obligatoire","Externe uniquement","Une avance"], a:1, e:"Obligatoire = logique forte ; facultative = bonne pratique (logique faible)." },
    { c:5, q:"Un jalon a une durée…", o:["D'un jour","Nulle","Égale à la marge","Variable"], a:1, e:"Un jalon est un point ou événement important, de durée nulle." },
    { c:5, q:"Le chemin critique est…", o:["Le chemin le plus court","La séquence la plus longue, qui fixe la durée minimale du projet","Le chemin le plus coûteux","Le chemin avec le plus de ressources"], a:1, e:"Ses activités ont en général une marge totale nulle." },
    { c:5, q:"Avec O = 4, PP = 6, P = 14 jours, l'estimation triangulaire vaut…", o:["6 jours","7 jours","8 jours","9 jours"], a:2, e:"(4 + 6 + 14) / 3 = 8 jours." },
    { c:5, q:"Quelle technique ne modifie ni le chemin critique ni la date de fin ?", o:["Nivellement","Lissage","Compression","Mise en parallèle"], a:1, e:"Le lissage décale les activités uniquement dans leurs marges." },
    { c:5, q:"La compression (crashing) raccourcit l'échéancier…", o:["En chevauchant des activités, avec plus de risque","En ajoutant des ressources, avec un surcoût","En réduisant le périmètre","En retirant des jalons"], a:1, e:"Crashing : ressources en plus sur des activités critiques, coût en hausse." },
    { c:5, q:"La mise en parallèle (fast tracking) augmente surtout…", o:["Le coût direct","Le risque (reprises)","Le périmètre","La marge"], a:1, e:"Des activités prévues en séquence sont réalisées en partie en même temps." },
    { c:5, q:"Pour rattraper un retard, utilise-t-on le nivellement ?", o:["Oui, toujours","Non : il équilibre les ressources et peut retarder le projet","Oui, s'il n'y a pas de marge","Seulement en matrice forte"], a:1, e:"Pour un retard on compresse ou on met en parallèle." },
    { c:5, q:"Projet de l'intra : A(4), B(2), C(8, après B), D(4, après B), E(4), F(2, après A,C,D,E), G(2, après F). Durée ?", o:["12 semaines","14 semaines","16 semaines","10 semaines"], a:1, e:"Chemin critique B-C-F-G : 2 + 8 + 2 + 2 = 14." },
    { c:5, q:"Dans ce même projet, la marge totale de D vaut…", o:["0","2","4","6"], a:2, e:"D : début au plus tôt semaine 3, au plus tard semaine 7 → 4 semaines." },
    { c:5, q:"La planification en vagues (rolling wave) consiste à…", o:["Tout détailler dès le départ","Détailler le travail proche, garder le lointain général","Planifier sans WBS","Planifier seulement les jalons"], a:1, e:"Forme d'élaboration progressive." },

    // Ch6
    { c:6, q:"EV (valeur acquise) représente…", o:["Le coût réel engagé","La valeur budgétée du travail prévu à date","La valeur budgétée du travail réellement accompli","Le budget total"], a:2, e:"PV = prévu, AC = coût réel, EV = valeur du travail réalisé." },
    { c:6, q:"CPI = 0,9 signifie…", o:["Avance sur le planning","Pour 1 Dh dépensé, on obtient 0,9 Dh de travail : dépassement de coût","Économie de 10 %","Retard de 10 %"], a:1, e:"CPI < 1 : dépassement." },
    { c:6, q:"PV = 100, EV = 90, AC = 120. SV vaut…", o:["−10","−30","+10","−20"], a:0, e:"SV = EV − PV = 90 − 100 = −10." },
    { c:6, q:"Même données (EV = 90, AC = 120). CV vaut…", o:["−30","+30","−10","−20"], a:0, e:"CV = EV − AC = −30." },
    { c:6, q:"BAC = 200, CPI = 0,8. EAC typique = ?", o:["160","240","250","200"], a:2, e:"EAC = BAC / CPI = 200 / 0,8 = 250." },
    { c:6, q:"Le TCPI se calcule avec…", o:["(BAC − EV) / (BAC − AC)","EV / AC","BAC / CPI","EV − PV"], a:0, e:"Il utilise BAC, EV et AC." },
    { c:6, q:"La réserve pour aléas (contingence) couvre…", o:["Les inconnus-inconnus","Les risques identifiés (connus-inconnus) et fait partie de la référence de base","Les bénéfices","Uniquement les pénalités"], a:1, e:"La réserve pour imprévus (management) couvre les inconnus-inconnus, hors référence de base." },
    { c:6, q:"Budget du projet = …", o:["Référence de base des coûts + réserve pour imprévus","Estimations des activités seulement","EAC + VAC","Réserve pour aléas seulement"], a:0, e:"Ex. du cours : 640 + 60 = 700." },
    { c:6, q:"Fourchette d'une estimation en ordre de grandeur (initialisation) :", o:["−5 % à +10 %","−10 % à +10 %","−25 % à +75 %","−50 % à +50 %"], a:2, e:"Estimation définitive : −5 % à +10 %." },
    { c:6, q:"Estimation bêta (PERT) avec O = 10, PP = 13, P = 22 :", o:["14","15","13","16"], a:0, e:"(10 + 4 × 13 + 22) / 6 = 84 / 6 = 14." },
    { c:6, q:"Intra (31 août) : PV 9,5, EV 10,75, AC 12, BAC 14. Situation ?", o:["Retard et économie","Avance et dépassement de coût","Retard et dépassement","Avance et économie"], a:1, e:"SPI ≈ 1,13 > 1 (avance), CPI ≈ 0,90 < 1 (dépassement)." },
    { c:6, q:"Un TCPI négatif indique…", o:["Une forte économie","Que le budget (BAC) est déjà dépassé par AC","Une avance","Une erreur impossible"], a:1, e:"BAC − AC < 0 : on utilise alors le TCPI basé sur l'EAC." },
    { c:6, q:"Lequel est un outil de « Maîtriser les coûts » ?", o:["Élaboration de l'échéancier","Analyse de la valeur acquise","Créer le WBS","Diagramme SIPOC"], a:1, e:"Valeur acquise, analyse des écarts, analyse de tendance, TCPI." },

    // Ch7
    { c:7, q:"Combien de processus compte la gestion de la qualité ?", o:["2","3","4","5"], a:1, e:"Planifier la gestion de la qualité, gérer la qualité, maîtriser la qualité." },
    { c:7, q:"« Gérer la qualité » appartient au groupe…", o:["Planification","Exécution","Maîtrise","Clôture"], a:1, e:"Il correspond à peu près à l'assurance qualité." },
    { c:7, q:"Le coût de la formation et des processus documentés est un coût…", o:["De défaillance interne","De prévention (conformité)","De défaillance externe","D'évaluation"], a:1, e:"Prévention et évaluation = coûts de conformité." },
    { c:7, q:"Un retour en garantie d'un produit défectueux chez le client est un coût…", o:["De prévention","D'évaluation","De défaillance externe","De défaillance interne"], a:2, e:"Défaillance trouvée par le client = externe (non-conformité)." },
    { c:7, q:"L'outil qui classe les causes selon le principe 80/20 est…", o:["Ishikawa","Pareto","Carte de contrôle","SIPOC"], a:1, e:"Pareto : quelques causes produisent l'essentiel des défauts." },
    { c:7, q:"Les 6M d'Ishikawa sont…", o:["Main-d'œuvre, Méthode, Matériel, Matière, Milieu, Mesure","Marketing, Management, Moyens, Marché, Mission, Modèle","Main-d'œuvre, Machine, Moral, Mode, Méthode, Mission","Mesure, Milieu, Marge, Métier, Maintenance, Matière"], a:0, e:"Les 6 branches classiques du diagramme cause-effet." },
    { c:7, q:"Pour savoir si un processus est stable et prévisible, on utilise…", o:["Un histogramme","Une carte de contrôle","Une fiche de contrôle","Un diagramme de flux"], a:1, e:"La carte de contrôle suit les performances d'un processus dans le temps." },
    { c:7, q:"Workshop Nova : à combien de causes le cumul atteint-il 80 % des 400 défauts ?", o:["3","4","5","6"], a:2, e:"Cumuls : 66,25 % (3), 77,5 % (4), 85 % (5)." },
    { c:7, q:"Le cycle PDCA est associé à…", o:["Taylor","Deming","Gantt","Pareto"], a:1, e:"Plan-Do-Check-Act, roue de Deming : amélioration continue." },
    { c:7, q:"Selon le cours, quelle période correspond à l'assurance qualité (ISO) ?", o:["1920–1940","1950–1960","1970–1980","1990–2010"], a:3, e:"Inspection (1920–40), qualité totale (1950–60), TQM (1970–80), assurance qualité ISO (1990–2010)." }
  ],
};
