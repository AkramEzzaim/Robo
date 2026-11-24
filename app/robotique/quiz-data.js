export const roboticsQuiz = {
  searchPlaceholder: "Rechercher : codeur, D-H, vérin…",
  bestScoreKey: "robotique-best",
  chapters: {
    1: { name: 'Introduction', color: 'var(--c1)' },
    2: { name: 'Architectures', color: 'var(--c2)' },
    3: { name: 'Performances', color: 'var(--c3)' },
    4: { name: 'Capteurs', color: 'var(--c4)' },
    5: { name: 'Actionneurs', color: 'var(--c5)' },
    6: { name: 'Modélisation', color: 'var(--c6)' }
  },
  questions: [
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
  ],
};
