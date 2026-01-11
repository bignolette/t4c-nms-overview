export interface QuestStep { order: number; title: string; description: string; images: string[]; }
export interface Quest { title: string; slug: string; zone: string; prerequisites: string[]; rewards: string[]; npcs: string[]; gold: string; steps: QuestStep[]; credits: string[]; }
export const quests: Quest[] = [
  {
    "title": "Coffres de l'île Lune",
    "slug": "coffres-de-lile-lune",
    "zone": "Île Lune",
    "prerequisites": [],
    "rewards": [],
    "npcs": [],
    "gold": "",
    "steps": [
      {
        "title": "Coffres de l'île Lune",
        "description": "<p>Repop : 1 heure </p><p><b>Coffre étoilé (au Nord dans le village) </b> </p><ul><li>Parcelle d'étoile</li> <li>Potion</li> <li>Potion de guérison des blessures graves</li> <li>Parchemin de rappel</li> <li>Elixir de Mana</li></ul><p><b>Coffre Sud ( au bord de l'ile sur la plage )</b> </p><ul><li>Potions</li> <li>Feuille</li> <li>Feuille d'excellente qualité</li> <li>Cailloux excellemment bien formés</li> <li>Empennage des Temps anciens</li></ul><p> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> </p>",
        "images": [
          "/t4c-nms-overview/assets/quests/coffres-de-lile-lune/img_0_0.jpg"
        ],
        "order": 0
      }
    ],
    "credits": [
      "T4C NMS Révolution wiki"
    ]
  },
  {
    "title": "Coffres de DI",
    "slug": "coffres-de-di",
    "zone": "Drake Island",
    "prerequisites": [],
    "rewards": [],
    "npcs": [],
    "gold": "",
    "steps": [
      {
        "title": "Introduction",
        "description": "<p>Le repop de ces coffres est de 4 heures pour deux persos différents, mais de 8 heures (comme oracle)pour le même perso... </p><p><b><big>Le Coffre Sud</big></b> (coffre des gardiens du coffre) </p><p>Il drop aléatoirement plusieurs items parmi: </p><p><b><big>Les deux Coffres des trolls érudits</big></b> </p><p>Ils dropent aléatoirement plusieurs items parmi: </p><p><b><big>Le Coffre des Abysses</big></b> surtout soyez poli avec elle !!! ne jamais dire je m'en fous)</b></p><p class=\"MsoNormal\">Réponse selon la question posée :<br>1<span style=\"mso-spacerun:yes\"> c</span>auchemard envoyers athé pieds suffire<br>2<span style=\"mso-spacerun:yes\"> a</span>utant voir remboursez tord payons<br>3<span style=\"mso-spacerun:yes\"> </span>prêt demie-heure maline sensée marrons<br>4<span style=\"mso-spacerun:yes\"> </span>soient repère aie laissés tué<br>5<span style=\"mso-spacerun:yes\"> </span>quand ou tribue s'en tout</p>",
        "images": [],
        "order": 3
      },
      {
        "title": "3 ) Professeur Ensiklopèdy épreuve d'histoire (chronométrée)",
        "description": "<p>Réponse selon la question posée:<br>1<span style=\"mso-spacerun:yes\"> </span>Quel est le nom du lieu actuel ou vivent les dragons?: Firesky<br>2<span style=\"mso-spacerun:yes\"> </span>Qui a tué le roy d'Orkanis ?: Mhorgwloth<br>3<span style=\"mso-spacerun:yes\"> </span>Nom du vieil ermite : theorn lemnearan<br>4<span style=\"mso-spacerun:yes\"> </span>Qui a banni Balork : artherk<br>5<span style=\"mso-spacerun:yes\"> </span>Nom du précédent roi de goldmoon : Théopold 1er </p>",
        "images": [],
        "order": 4
      },
      {
        "title": "4) Madame FLichère épreuve des coffres (chronométrée). Repérez les coffres par avance !",
        "description": "<p class=\"MsoNormal\">Ou courir selon le lieu indiqué :<br>1 Coffre cité des nains, dans une maison (2681-370-0), après le labyrinthe d'Arakas<br>2 Coffre à Mato, aux druides Arakas (2890-287-0)<br>3 Coffre à Orkanis, dans la maison du troll, loin au NO d'Arakas<br>4 Coffre crypte du nomade (cave de la gitane), derrière un pilier en descendant l'escalier d'entrée de la crypte.<br>5 Coffre aux monts Righul (1936-156-0) (près de la mer au nord des montagnes Jarko)</p>",
        "images": [],
        "order": 5
      },
      {
        "title": "5) Madame FLichère épreuve du rat (chronométrée)",
        "description": "<p>Allez tuer le rat affamé sous-sol -2 temple LH (180-120-1) <br> </p>",
        "images": [
          "/t4c-nms-overview/assets/quests/le-chapeau-de-chance/img_6_0.jpg"
        ],
        "order": 6
      },
      {
        "title": "6) Professeur Fetero (tour des mages), épreuve de magie (chronométrée)",
        "description": "<p>Réponses selon la question posée :<br>1 Magie des orcs : <b>magie noire</b><br>2 Quel est le nom de la plus grande tour de magie d'Athéa ? : <b>Urtanar</b><br>3 Ressource pour la magie : <b>mana</b><br>4 Quel est le nom du traître emprisonné sur le plan de la magie ? : <b>makrsh p'tangh</b><br>5 Nom du maître de la tour des mages : <b>r'yleth cth</b><br> </p>",
        "images": [
          "/t4c-nms-overview/assets/quests/le-chapeau-de-chance/img_7_0.jpg"
        ],
        "order": 7
      },
      {
        "title": "LA RECOMPENSE FINALE",
        "description": "<p class=\"MsoNormal\">Il faut avoir entre 15 et 20 de moyenne pour obtenir le chapeau de diplômé (+25 chance)<span style=\"mso-spacerun:yes\"> </span>et une bourse de chance indroppable (+10 en chance permanent même après reroll mais pas après renaissance) ainsi qu’une bourse d’expérience indroppable (environ 7% du level en cours quand vous l'activez) <u>mais ne vous pouvez pas</u> en demander le transfert si vous êtes level max.</p><p class=\"MsoNormal\">Vous pouvez aussi conserver ces bourses d'XP et, après plusieurs renaissances, les utiliser toutes quand vous serez proches du level max. </p><p class=\"MsoNormal\">Entre 10 et 15 vous obtiendrez un masque de clown (+10 chance)<span style=\"mso-spacerun:yes\"> </span>et un bonus de chance (+10 permanents)<span style=\"mso-spacerun:yes\"> </span>ainsi qu’une bourse d’expérience.</p><p class=\"MsoNormal\">Moins de 10 vous obtenez un masque de cancre (+5 chance) et, nous sommes trop gentils, +10 de chance permanents.</p>",
        "images": [
          "/t4c-nms-overview/assets/quests/le-chapeau-de-chance/img_8_0.jpg"
        ],
        "order": 8
      },
      {
        "title": "Bibliothécaire d'Althéa (Toge chance)",
        "description": "<p>Aller voir la cheffe bibliothécaire à la grande bibliothèque de RD. </p><p>Cela va être une quête d'entraide pour les petits, à partir du lvl 50 demandez de l'aide aux GB pour 2 ou 3 items </p><p>Suivez bien le dialogue la cheffe va vous proposer 4 étapes. </p><p>Elle permettent de découvrir d'anciennes petites quêtes oubliées. </p><p>1ere étape. </p><ul><li>1 Parchemin magique vierge.</li> <li>1 Plume.</li> <li>1 Encrier.</li></ul><p>Pour l'encre allez voir Cloriande Bollour dans une maison à droite d'Araknor. Elle va vous demander 3 clefs du coffre surprise. </p><p>2eme étape </p><ul><li>1 Parchemin de rappel ( un peu partout )</li> <li>1 Parchemin d'enchantement ( qui ne sait pas quoi !! ) (quête du parchemin d'enchantement)</li> <li>1 Parchemin du village centaure ( drop sur les sentinelles centaures au village Centaure )</li> <li>1 Parchemin de purification de l'or ( drop à DI aux Drakes Akaïstes; pour ceux pas encore rendus à DI demander aux GB )</li> <li>1 Parchemin de l'académie. ( drop académie au -4 pour ceux pas accès demandez aux GB)</li> <li>1 Parchemin de l'amitié des chevaux ( Quête parchemins d'amitié des chevaux SH )</li> <li>1 Document secret ( Quête du Heaume perdu du dragon SH sur le Wiki )</li></ul><p>3eme étape </p><ul><li>1 Livre de Feylor ( coffre au village nains, apporter des clefs de fer ds votre sac )</li> <li>1 Livre de chance ( un peu partout à DI )</li> <li>1 Livre des sorts rouges ( qui sait pas ou :) )</li> <li>1 Livre du collectionneur ( avec quête des scalps ou drop sur les Assassins Obsidiens la grotte ds la montagne de Mordenthal )</li> <li>1 Livre de l'art de la guerre ( achat au château SS de RD à Tobias au 1er étage 15k )</li></ul><p>4eme étape </p><ul><li>1 Certificat de reconnaissance ( suite de la quête du heaume perdu du dragon SH, suivez bien les détails sur le wiki ) Temps de repop des coffres</li></ul><p>Félicitations ! vous êtes maintenant le scribe officiel et diplômé de l'Académie. </p><p>Voici vos cadeaux. </p><p>Toge du bibliothécaire. ( +12 chance ) </p><p>Diplôme de scribe. ( pour collection ) </p><p>Voila j'espère que vous avez apprécié. Cela vous a permis de découvrir de petits quêtes oubliées!!! </p><p> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> </p>",
        "images": [],
        "order": 9
      }
    ],
    "credits": [
      "T4C NMS Révolution wiki"
    ]
  },
  {
    "title": "Les quêtes de Noël",
    "slug": "les-quetes-de-noel",
    "zone": "Event",
    "prerequisites": [],
    "rewards": [
      "bottes de lutin rouges +5 chance.",
      "canne de Noël longue +5 chance.",
      "chapeau festif +10 chance :-(....",
      "1 grelot pour 3 chansons réussies. Attention Flocon vous en demandera 2 avant de vous donner votre cadeau !",
      "1 cadeau de Noël."
    ],
    "npcs": [],
    "gold": "",
    "steps": [
      {
        "title": "Quête 1 : bottes de lutin, canne et chapeau de Noël (non répétable)",
        "description": "<p>Prenez le portail menant à l'île du père Noël. Une fois sur l'île Bonhomme de neige allez vers le Sud. </p><p>En chemin vous croiserez une fille qui peut vous apprendre à faire des boules de neige (amusant mais pas obligatoire). </p><p>Parlez au père Noël, puis à Trulidius tout au Sud. Celui-ci vous demandera de récupérer les sacs à cadeau du père Noël sur des lutins. Faites ce qu'il vous demande et revenez le voir après chaque sac récupéré pour qu'il vous indique la tâche suivante. </p><p><b>Lutin Elwud</b>: Port de WH (faut le tuer le pôvre). apprendre\" à Flocon, il vous proposera un sort qui vous aidera bien pour la suite ! </p><p>Allez parler à Youpi, au Nord de la fontaine de LH. Il vous demandera de tuer des bonhommes de neige jusqu'à posséder une dizaine de carottes. Une fois les carottes réunies, reparlez à Youpi. </p><p>Il vous enverra chez Marissa, au village métiers, apprendre la recette permettant de fabriquer des écharpes. Faites le. La recette est de niveau zéro couturier. </p><p>Il vous reste à réunir les gerbes de chanvre permettant de fabriquer dix écharpes (2 bobines de fil de chanvre pour une écharpe). </p><p>Quand ce sera fait, Youpi vous demandera de vous procurer 10 \"chapeaux festifs pour bonhommes de Noël\" chez Maganys de Tylrad. Son échoppe est située au début du chemin menant à la tour des mages de LH. Il vous en coûtera 1 point d'interaction par chapeau. </p><p>Retournez chez Youpi. Avec le matériel obtenu, il vous demandera de transformer dix tas de neige en bonhommes de neige. </p><p>Enfin retournez le voir une dernière fois, il vous récompensera d'un <b>chapeau festif.</b> </p><p>Récompense : <b>chapeau festif +10 chance :-(....</b> </p>",
        "images": [],
        "order": 1
      },
      {
        "title": "Quête 3 : (journalière)",
        "description": "<p><b>Le renouvellement se fait vers 18 heures Québec et Minuit heure française. </b> </p><p><u>Note 1</u> : Attention, les monstres et pnj cités ici sont liés aux quêtes de Noël de <b>2018</b>. Les défis ne changent pas vraiment d'une année à l'autre, seules les positions montrent de petits changements. </p><p><u>Note 2</u> : Attention, les divers items de Noël qui sont demandés sont indroppables. Si vous êtes là dans l'espoir d'aider les autres, faites droper et laissez les items à terre. </p><p>Allez parler à Flocon, au Nord de la fontaine de LH. Il vous demandera de l'aide. Vous devrez lui ramener des objets qui seront différents chaque jour. Et ceci jusqu'à Noël. </p><p>A la fin de cette période, ceux d'entre vous qui auront participé seront récompensés. Allez alors reparler à Flocon qui vous donnera divers petits items en fonction du nombre de quêtes que vous aurez résolues. </p><p>Ps: la quête du jour sera en couleur (en principe ;) ) </p>",
        "images": [],
        "order": 2
      },
      {
        "title": "Quête du chant pour les 2 grelots",
        "description": "<p>Un jour, Flocon vous demandera de lui amener 2 grelots pour les reines du Père-Noël et pour ce faire, il vous demandera de suivre la musique. Le défi se passe sur LH, parlez à Rémi Façol qui se trouve au Nord-Est de la banque, ce dernier vous proposera de chanter en choeur. Suivez les mots clefs, il commencera les vocalises, il vous suffira de terminer la dernière phrase sans faute d'orthographe et sans déformer la chanson. Ces dernières arrivent aléatoirement, il vous faut répondre correctement à trois chansons, valable même si vous échouez après une ou deux gagnées. </p><ul><li>S'il chante ( '....Boule de neige et jour de l'an et' ) répondre : <ul><li>Bonne année grand-mère</li></ul></li></ul><ul><li>Bonne année grand-mère</li></ul><ul><li>S'il chante ( 'Petit papa Noël, avec des jouets par milliers n'oublie pas' ) répondre : <ul><li>Mon petit soulier</li></ul></li></ul><ul><li>Mon petit soulier</li></ul><ul><li>S'il chante ( 'Il est né le Divin enfant chantons tous' ) répondre : <ul><li>Son avènement</li></ul></li></ul><ul><li>Son avènement</li></ul><ul><li>S'il chante ( '....Mais avant de partir, il faudra bien te couvrir, dehors tu vas' ) répondre : <ul><li>Avoir si froid</li></ul></li></ul><ul><li>Avoir si froid</li></ul><ul><li>S'il chante ( 'Mon beau sapin roi des forêts tu' ) répondre : <ul><li>Gardes ta parure</li></ul></li></ul><ul><li>Gardes ta parure</li></ul><ul><li>S'il chante ( '...Quand par l'hiver...bois et guérets...sont dépouillés de leur attraits... Mon beau sapin' ) répondre : <ul><li>Roi des forêts</li></ul></li></ul><ul><li>Roi des forêts</li></ul><ul><li>S'il chante ( '...Dans les cieux ! L'astre luit ... Le mystère' ) répondre : <ul><li>Annoncé s'accomplit</li></ul></li></ul><ul><li>Annoncé s'accomplit</li></ul><ul><li>S'il chante ( '...Au son des cloches des églises ta' ) répondre : <ul><li>Distribution de surprises</li></ul></li></ul><ul><li>Distribution de surprises</li></ul><ul><li>S'il chante ( 'Vive le vent.....qui s'en va sifflant soufflant dans les' ) répondre : <ul><li>Grands sapins verts</li></ul></li></ul><ul><li>Grands sapins verts</li></ul><ul><li>S'il chante ( 'Et les yeux levés vers le ciel, à genoux, les petits enfants, avant de fermer les paupières font' ) répondre : <ul><li>Une dernière prière</li></ul></li></ul><ul><li>Une dernière prière</li></ul><p>Récompense : 1 grelot pour 3 chansons réussies. Attention Flocon vous en demandera 2 avant de vous donner votre cadeau ! </p>",
        "images": [],
        "order": 3
      },
      {
        "title": "Quête des habits de Lutin",
        "description": "<p>Un autre jour, Flocon vous demandera de faire confectionner un vêtement pour l'un des lutins du Père Noël, car ils sont actuellement en guenilles. Pour cela, achetez : </p><ul><li>5 pommes à Fali, la vendeuse de LH</li></ul><ul><li>1 paire de bottes de cuir, à son collègue dans le même magasin.</li></ul><ul><li>Ensuite, chantez avec Rémi Façol (au Nord de la banque de LH) afin de gagner 1 grelot.</li> <li>Enfin, ramassez 2 pièces de coton rouge en tuant les(2024 pillards). Ils sont nombreux du côté des orcs solitaires de WH.</li> <li>Puis, rendez-vous au marchand d'armes +2, vers le Nord d'Arakas , et après le pont des démonicons vers l'ouest (2160,515).</li> <li>Engagez le dialogue avec Moradinne, l'assistante de la couturière, grâce au mot clef '<b>trava</b><b>il</b>'. Elle vous dira qu'elle est costumière passionnée et qu'elle adore Noël. Poursuivez la discussion et au mot clef '<b>tout</b>', elle prendra vos produits et vous donnera un vêtement pour lutin.</li></ul><p>Avec ce dernier, repartez pour la place de LH et reparlez à Flocon. </p><p>Récompense : 1 cadeau de Noël. </p>",
        "images": [],
        "order": 4
      },
      {
        "title": "Quête du ruban soyeux rouge",
        "description": "<p>Flocon vous demandera de lui apporter non pas 'des' mais 1 ruban rouge pour nouer les cadeaux de Noël. Pour ce faire, descendez dans les profondeurs du sous-sol du temple de LH jusqu'au -2 et recherchez des araignées géantes. Petit conseil équipez-vous en chance, dans l'objectif de leur faire droper le plus rapidement possible 2 cocons de soie d'araignée. </p><p>Puis, munissez-vous d'une clef de coffre à surprise et allez parler à Cloriande de Bollour, située dans une maison au Nord-Est du temple (près de Rémi Façol). Pour aller au plus pressé, dites-lui '<b>clef</b>', elle vous échangera votre clef contre une fiole de colorant rouge. </p><p>Ensuite, direction le quartier des métiers de LH, dirigez-vous vers la maison des deux couturières (maison au Sud avec des quenouilles) et engagez le dialogue avec Bergénie. Pour abréger la conversation, dites '<b>ruban rouge</b>' et alors, contre les 2 cocons de soie d'araignée et le colorant rouge, elle vous remettra des rubans soyeux de couleur rouge. </p><p>Enfin, repassez voir Flocon le lutin pour les lui donner. </p><p>Récompense : 1 cadeau de Noël. </p>",
        "images": [],
        "order": 5
      },
      {
        "title": "Quête de la corde",
        "description": "<p>Flocon vous demande de faire une corde pour le Père Noël </p><ul><li>Aller voir Pomme près de l'écurie à WH qui demande 3 crins de juments (indropables)</li> <li>Aller au Krakra et trouver les juments sauvages un peu partout sur l'ile des Krakra.</li> <li>Pos: 2134,641,0 et aussi 2212,670,0</li> <li>Pos: 2213,671,0 et aussi 1891,945,0</li> <li>Pos: 1934,817,0 et aussi 1746,823,0</li> <li>Pos: 1821,663,0 et aussi 2011,586,0</li> <li>Pos: 1850,844,0 et aussi 1919,660,0</li> <li>Pos:2029,945,0 et aussi 1791,752,0</li> <li>Faire dropper 3 crins, rapporter le tout à Pomme pour lui faire faire la corde.</li> <li>Retourner voir Flocon.</li></ul><p>Récompense : 1 cadeau de Noël. </p>",
        "images": [],
        "order": 6
      },
      {
        "title": "Quête du sapin majestueux",
        "description": "<p>En parlant à Flocon, vous serez téléporté sur une île où vous devrez couper des sapins (hache du bûcheron d'Arakas, RD, SH, DI, peu importe) jusqu’à obtenir un \"sapin majestueux \" . Je vous conseille fortement d'aller couper les sapins au Nord de l’île qui semblent en droper beaucoup plus vite (merci à Melandria pour l'astuce). </p><p>Quelques positions : ces 5 là sont dans le même coin Nord gauche en contournant le rocher à gauche. </p><ul><li>Pos: 2290,2780,0</li> <li>Pos: 2427,2892,0</li> <li>Pos: 2364,2893,0</li> <li>Pos: 2413,2700,0</li> <li>Pos :2280,2720,0</li> <li>Regardez s'il tombe des feuilles c'est le bon.</li> <li>Et si vous trouvez d'autres positions dites-le moi.</li></ul><p>Récompense : 1 cadeau de Noël. </p>",
        "images": [],
        "order": 7
      },
      {
        "title": "Quête du bois d'érable",
        "description": "<p>Pour cette quête, vous devrez abattre, avec n'importe quelle hache de bûcheron, des érables, sur Arakas, jusqu'à obtenir 3 bûches d'érable. Les arbres droppent à chaque fois !!! </p><p>Voici quelques positions à vérifier : </p><ol><li>2390,915,0</li> <li>2306,1024,0</li> <li>2396,1055,0</li> <li>2432,1170,0</li> <li>2399,1263,0</li> <li class=\"mw-empty-elt\"></li> <li>Si vous trouvez de nouvelles positions me le dire</li> <li class=\"mw-empty-elt\"></li></ol><p>Récompense : 1 cadeau de Noël. </p>",
        "images": [],
        "order": 8
      },
      {
        "title": "Quête du sucre d'orge",
        "description": "<p>Flocon vous demandera de l'aide afin de récolter un sucre d'orge. Pour créer cet objet, il vous faudra 2 betteraves, ainsi que 2 sachets de grains d'orge. </p><p>Au Troll d'Arakas les bettraves </p><ul><li>Emplacements des plants de betterave. 20 min solo 10 min à 2 <ul><li>1484,246,0</li> <li>1565,140,0</li> <li>1604,270,0</li> <li>1628,203,0</li></ul></li></ul><ul><li>1484,246,0</li> <li>1565,140,0</li> <li>1604,270,0</li> <li>1628,203,0</li></ul><p>Au territoire Kraanian l'orge </p><ul><li>Emplacements des plants d'orge. 20 min solo 10 min à 2 <ul><li>1976,715,0</li> <li>2019,632,0</li> <li>2094,640,0</li> <li>2114,750,0</li></ul></li></ul><ul><li>1976,715,0</li> <li>2019,632,0</li> <li>2094,640,0</li> <li>2114,750,0</li></ul><p>Le taux de drop doit être 20 à 25%. </p><p>Une fois ces 4 objets obtenus, rendez-vous chez le vieil Ermite a la cave des brigands (voleurs). Parlez à Alfrid Bécher et dites lui \"orge\". Il transformera vos deux sachets de grains en une décoction d'orge perlée. </p><p>Ensuite, allez à WH pour parler à Pomme Deschamps près de l'écurie de WH et dites-lui \"sucre\" afin qu'elle vous donne un sachet de sucre cristallisé en échange de vos deux betteraves. </p><p>Localisez Florentin, le boulanger, dans une maison au Sud-Ouest de WH travail\".</li></ul><p>Récompense : 1 cadeau de Noël. </p>",
        "images": [],
        "order": 15
      },
      {
        "title": "Quête : faire voler le traineau du père Noël",
        "description": "<ul><li>1 rune du vent aux Kobolds au Nord avant la montagne de Jarko.</li> <li>3 plumes</li> <li>1 parchemin magique vierge (acheter un parchemin vierge tour des mages de WH et le transformer chez Araknor).</li> <li>Aller à la tour des mages de LH pour faire enchanter le tout par Eronys.</li></ul><p>Récompense : 1 cadeau de Noël. </p>",
        "images": [],
        "order": 16
      },
      {
        "title": "Quête : trouver les 6 Rennes",
        "description": "<p>Flocon vous envoie sur une île. Positions de l'an passé qui peuvent avoir changé cette année : </p><ul><li>Pos: 2890,1370</li> <li>Pos: 2790,1200</li> <li>Pos: 2935,1090</li> <li>Pos: 2965,1185</li> <li>Pos: 2985,1360</li> <li>Pos: 2989,1130</li></ul><p>Retournez voir Flocon. </p><p>Récompense : 1 cadeau de Noël. </p>",
        "images": [],
        "order": 17
      },
      {
        "title": "Quête du Chapeau du père Noël",
        "description": "<ul><li>Trouvez la couturière Moradinne au marchand d'arme+2 de AR, vers le Nord d'Arakas , et après le pont des Démonicons vers l'Ouest (2160,515)..</li> <li>Dites <span class=\"npc-keyword\">\"pompon\"</span> à Moradinne et courez trouver son fils Juju au Camp Orc (pos: 2770,575,0) à qui vous direz également \"pompon\". Attention c'est chronométré !</li> <li>Trouvez 2 pièces de coton rouge sur (ajout 2024: les pillards) ( par exemple sortie WH et vers les orcs solitaires au Nord de WH ou vers l'Est).</li> <li>Amenez le tout à Moradinne et dites lui \"chapeau\".</li> <li>Apportez le chapeau à Flocon, à la fontaine de LH.</li></ul><p>Récompense : 1 cadeau de Noël. </p>",
        "images": [],
        "order": 18
      },
      {
        "title": "Quête des lettres perdues au père Noël",
        "description": "<p>Quête assez longue :) </p><ul><li>Très important : n'oubliez pas de parler à Flocon en 1er sinon Noémie ne voudra pas vous donner le sac à moitié plein</li> <li>Allez voir Noémie chez Antonian RST de AR.</li> <li>Ensuite prenez 5 parchemins vierges (\"acheter\" à R'yleth Cth à la tour des mages de WH), entre 1 à 5 plumes et de l'encre. A faire entre 1 à 5 fois à droite d'Araknor chez Cloriande de Bellour avec des clefs à surprise (mot clef: encre).</li> <li>PS: Parfois l'encre se renverse et la plume se brise, donc dépendamment de votre chance irl pour l'encre et la plume.</li> <li>Ensuite récupérez 5 lettres. Mot clef \"lettre\" pour tous.</li> <li>Cannelle maison du culte (Nord LH une maison à droite d'Araknor) chez Luderik à l'étage.</li> <li>Pimprenelle à Wh. pos:1665,1260</li> <li>Arthur aux druides maison d'Audrey pour les robes. pos: 2930,150</li> <li>Mini Gorben gob vert aux Monts Rigul, pos: 2012,431</li> <li>Juju il est à droite au camp orc , pos: 2765,570,0</li> <li>Quand vous avez les 5 lettres aller voir Noémie elle vous dira qu'elle en a la moitié.</li> <li>Go vers Zélina au temple LH et lui dire Ness Croc. Elle vous donnera une dague à remettre à Ness Croc.</li> <li>Go à la ville des voleurs voir Ness Croc qui donnera un sac de lettres.</li> <li>Et go voir Flocon.</li></ul><p>Récompense : 1 cadeau de Noël. </p>",
        "images": [],
        "order": 19
      },
      {
        "title": "Quête du costume du Père Noël",
        "description": "<ul><li>Parlez à Flocon puis il vous faudra :</li> <li>3 pièces de coton rouge dropées par ( 2024 sur les pillards et le gros ceinturon aussi). Vous en trouverez beaucoup sortie de WH, vers les orcs solitaires ou vers l'Est.</li> <li>1 paire de bottes de cuir à acheter au marchand Rolph de LH (à côté de Fali).</li> <li>Cet année on peu avoir le gros ceinturon sur les pillard à WH (c'est bon).</li> <li><s><u>((pas besoin cet année IMPORTANT:</u> avant d'aller au Troll du -4 il faut avoir parlé à Flocon.</s></li> <li><s>1 gros ceinturon de cuir et 150,000 po. Allez sous sol -4 de LH et trouvez un troll La Fripouille ds une petite salle près de Balork, pos: 246,527. Il faut le défier pour qu'il attaque sinon il drope pas le ceinturon: mot clef \"ceinturon\" et \"défier\" et là il attaque. Tuez-le et vous recevrez direct le ceinturon dans le sac (repop 15-20 mn)))</s></li> <li>Ensuite emmenez le tout à Moradinne au marchand d'armes +2 Arakas (à l'Ouest après le pont des Démonicons).</li> <li>Et go voir Flocon.</li></ul><p>Récompense : 1 cadeau de Noël. </p>",
        "images": [],
        "order": 20
      },
      {
        "title": "Quête : faire un sac solide et renforcé  du Père Noël",
        "description": "<p>Items nécessaires : </p><ul><li>2 peaux d'antilope</li> <li>1 morceau de peau d'orc</li> <li>1 crin de jument (elles sont sous le lac situé au centre du territoire kraanians)</li> <li>1 bracelet gobelin (y en a 2 c'est celui qui est indropable, à trouver sur les shamans gobelin au Nord de la RST AR).</li></ul><p>Ce qu'il vous faudra faire </p><ul><li>Allez voir Bergénie au quartier métier LH et dites-lui \"sac\".</li> <li>NE TUEZ PAS L'ORC SVP !!!</li> <li>Muni de vos peaux et de votre bracelet gobelin, allez dire <span class=\"npc-keyword\">\"sac\"</span> à Grumphyrog au village nain (après le laby AR) pour faire le sac en toile (pos : 2720,380)</li> <li>Allez apporter le sac à Flocon. Il vous demandera un sac plus solide.</li> <li>Retournez voir Bergénie et dites-lui \"sac\". Elle vous enverra à WH.</li> <li>Dites <span class=\"npc-keyword\">\"fil\"</span> à Pomme (proche de l'écurie) qui, en utilisant un crin de jument, vous fera un fil à tisser.</li> <li>Retourner voir Bergénie et lui dire <span class=\"npc-keyword\">\"sac\"</span>, elle vous fera un sac finement tissé.</li> <li>Aller porter le sac à Flocon.</li></ul><p>Récompense : 1 cadeau de Noël. </p>",
        "images": [],
        "order": 21
      },
      {
        "title": "Quête : réenchanter le sac du Père Noël",
        "description": "<ul><li>Parler à Flocon <ul><li>Aller voir le mage Eronys à la tour des mage LH et lui dire <u>\"sac enchanté\"</u>. il va demander une rune de terre pour pouvoir enchanter le sac.</li></ul></li> <li>Aller tuer l'orc Grumphyrog (pos: 2720.375) au village nain (après le laby), lui dire <u>sac</u> avant de le tuer une fois, il drope 1 rune (ne sert à rien le tuer 2 fois, il en drope juste une) (repop 10 mn)</li> <li>Retourner voir le mage Eronys et lui dire <u>\"sac enchanté\"</u>. Hélas il va rater et il va vous demander une 2ème rune, retourner tuer l'orc.</li> <li>Retourner voir le mage avec la 2ème rune et il va réussir à enchanter votre sac.</li> <li>Aller porter à Flocon (<u>après avoir revu Eronys</u> sinon c'est cuit !!).</li></ul><ul><li>Aller voir le mage Eronys à la tour des mage LH et lui dire <u>\"sac enchanté\"</u>. il va demander une rune de terre pour pouvoir enchanter le sac.</li></ul><p>N.B. IMPORTANT : Si votre personnage n'a pas encore accès à Raven's Dust (et même Stoneheim), l'enchantement marchera du premier coup. </p><p>Récompense : 1 cadeau de Noël. </p>",
        "images": [],
        "order": 22
      },
      {
        "title": "Quête du sablier enchanté",
        "description": "<ul><li>1 sachet de sable blanc au Mont Righul sur la plage du haut 3 places (skin cactus) et 2 sur la plage du troll. <ul><li>Pos: 1680,240 = 1712,145 = 1985,120 plage monts Righul.</li> <li>Pos: 1590,102 plage du troll nord est 1440,259 plage du troll sud ouest.</li></ul></li> <li>1 bois d'érable sur les érables en bas de la rst d'Arakas.</li> <li>1 Pièce de verre à la cave Krakra aux minerais de verre pos 484,1297. 3 gisements.</li> <li>Dans la cave Krakra se trouve aussi le pnj pour le sablier Dworkin 140,1316. Lui dire sablier (il faut tous les items).</li> <li>Ensuite munissez-vous d'un parchemin magique vierge et go à la tour des mages LH voir Eronys pour l'enchanter. Mot clef: sablier</li> <li>Retour Flocon</li></ul><ul><li>Pos: 1680,240 = 1712,145 = 1985,120 plage monts Righul.</li> <li>Pos: 1590,102 plage du troll nord est 1440,259 plage du troll sud ouest.</li></ul><p>Récompense : 1 cadeau de Noël. </p>",
        "images": [],
        "order": 23
      },
      {
        "title": "Quête de la pelle à neige",
        "description": "<ul><li>Parlez à Flocon 2 fois la 2eme fois pelle a neige.</li> <li>Ensuite allez acheter la pelle à neige près de Lance Silversmith chez Tonar Mastard.</li> <li>Ensuite mettez vous en ctrl+c et allez pelleter 10 tas de <u><b>neige glissante</b></u> à LH sur les trottoirs et retournez voir Flocon.</li> <li>Vous pouvez aller voir Cloriande à la fin, à droite de Araknor ds une maison, celle qui faisait l'encre. Elle vous donne une tasse de vin chaud (pas obligatoire).</li></ul><p>Récompense : 1 cadeau de Noël. </p>",
        "images": [],
        "order": 24
      },
      {
        "title": "Quête : préparer le repas",
        "description": "<ul><li>Parlez à Flocon</li> <li>Aller voir Léonidor à LH (travail...), dans une maison à droite d'Araknor 3025,1090</li> <li>Pommes de terre chez Hector sous la taverne de LH, acheter 2 sacs de pommes de terre.</li> <li>1 Sac de marrons au Druides d'Arakas sur les Marronniers. les spots : <ul><li>2780,231</li> <li>2762,128</li> <li>2715,187</li> <li>2803,288</li> <li>2828.124</li> <li>2870,280</li> <li>2900,164</li> <li>2988,207</li></ul></li> <li>Enfin 1 dinde à WH dans le foin parler à Albertin pos: 1750,1340. Lui dire <span class=\"npc-keyword\">\"dinde\"</span> pour entrer dans le champ et tuer les dindes. Ca drop après quelques unes de tuées. Si la dinde est dehors, dire <span class=\"npc-keyword\">\"sortir\"</span>.</li> <li class=\"mw-empty-elt\"></li> <li>Retourner chez Léonidor et lui dire <span class=\"npc-keyword\">\"préparer\"</span> 2 fois pour recevoir le panier du repas des fêtes.</li> <li>Enfin retour chez Flocon</li></ul><ul><li>2780,231</li> <li>2762,128</li> <li>2715,187</li> <li>2803,288</li> <li>2828.124</li> <li>2870,280</li> <li>2900,164</li> <li>2988,207</li></ul><p>Récompense : 1 cadeau de Noël. </p><p>Ps: la quête dure 2 jours. </p><p>Joyeuses Fêtes !!! </p>",
        "images": [],
        "order": 25
      },
      {
        "title": "Quête du livre de recettes (Hospice)",
        "description": "<p>Premièrement parler à Flocons (2x aide et livre de recettes) </p><p>Aller à WH acheter du chocolat à Florentin . 1690, 1340 </p><p>Aller voir Alphonse à LH la maison en haut du marchand Sigfried. 2900, 980 </p><p>Il s'agit maintenant de débloquer progressivement chaque PNJ dans l'ordre </p><p>Note: dire tous les mots clefs (en blanc) sans exception au pnj (écoutez ses deux histoires). Si un PNJ vous laisse tomber reprenez par le mot suivant... </p><ul><li>1er Isidore : travail, dire <u><b>ou</b>i</u> (oubliez pas de dire <span class=\"npc-keyword\">\"oui\"</span> à histoires) et <u>tous</u> les mots en blanc, même dans le désordre et ensuite : <ul><li>Puis : Isidore, Arlette, Theolette, Gamin, Ulgere, Eugenie, friandise, chocolat, livre de recettes</li></ul></li></ul><ul><li>Puis : Isidore, Arlette, Theolette, Gamin, Ulgere, Eugenie, friandise, chocolat, livre de recettes</li></ul><ul><li>2 ème Donatien : travail et <u>tous</u> les mots en blanc <ul><li>Puis : Isidore, Arlette, Theolette, Gamin, souris, Ulgere, friandise, chocolat, Eugenie, livre de recettes.</li></ul></li></ul><ul><li>Puis : Isidore, Arlette, Theolette, Gamin, souris, Ulgere, friandise, chocolat, Eugenie, livre de recettes.</li></ul><ul><li>3 ème Theolette : travail et <u>tous</u> les mots en blanc <ul><li>Puis : Arlette, Donatien, Gamin, souris, hurlant, Ulgere, Eugenie, friandise, chocolat, livre de recettes.</li></ul></li></ul><ul><li>Puis : Arlette, Donatien, Gamin, souris, hurlant, Ulgere, Eugenie, friandise, chocolat, livre de recettes.</li></ul><ul><li>4 ème Arlette : travail et <u>tous</u> les mots en blanc <ul><li>Puis : Theolette, Donatien, Gamin, souris, Delilah, Ulgere, Eugenie, friandise, chocolat, livre de recettes.</li></ul></li></ul><ul><li>Puis : Theolette, Donatien, Gamin, souris, Delilah, Ulgere, Eugenie, friandise, chocolat, livre de recettes.</li></ul><ul><li>5 ème Ulgere : travail et <u>tous</u> les mots clefs <ul><li>Puis : Chef, Eugenie, chasseur,Leonidor, livre de recettes ( il doit vous parle d'Eugenie)</li></ul></li></ul><ul><li>Puis : Chef, Eugenie, chasseur,Leonidor, livre de recettes ( il doit vous parle d'Eugenie)</li></ul><ul><li>6 ème Eugenie: travail et <u>tous</u> les mots clefs, chocolat, Ulgere, livre de recettes et Leonidor. Assurez-vous qu'elle vous dit qu'il a été banni. <ul><li>Puis : tous les mots clefs pour ne pas aller pour rien à la cave des voleurs.</li></ul></li></ul><ul><li>Puis : tous les mots clefs pour ne pas aller pour rien à la cave des voleurs.</li></ul><ul><li>7 ème Leonidor : En passant par la cave des brigands, go à la cave des voleurs (au milieu de la ville des voleurs) prenez l'escalier, allez au sous-sol et trouvez-le et dites-lui \"livre de recettes\" (insister, faut lui parler au moins 3 fois) et il devrait enfin vous donner le livre de recettes et voilà. Allez le porter à Flocon qui sera tout content.</li></ul><p>Bonne chance!!! </p><p>Récompense: 1 cadeau de Noël. </p><p> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> </p>",
        "images": [],
        "order": 26
      }
    ],
    "credits": [
      "T4C NMS Révolution wiki",
      "Laby Ar",
      "Muni de vos peaux et de votre bracelet gobelin"
    ]
  },
  {
    "title": "La quête de Pâques",
    "slug": "la-quete-de-paques",
    "zone": "Event",
    "prerequisites": [],
    "rewards": [],
    "npcs": [],
    "gold": "",
    "steps": [
      {
        "title": "La quête des Olphens",
        "description": "<p>Afin de fêter Pâques, nous avons préparé une quête temporaire rien que pour vous ! </p><p>Visitez quelques ville d'Arakas et ouvrez l'oeil ! De nombreux Olphens se promènent çà et là. tuez-en au maximum. Ils dropent oeufs de Jezikos, parchemins olphéniques et enfin Oeufs surprises... ouiii. De plus chaque Olphen tué rapporte 1500 po ... (intéressant si vous avez dépensé tout votre or). </p><p>Courage, tout le monde peut participer, Melgur (près du nexus sud d'Arakas) propose aux plus petits d'apprendre un sort permettant de tuer facilement les Olphens. </p>",
        "images": [],
        "order": 0
      },
      {
        "title": "Oeuf de Jezikos",
        "description": "<p>En échange de 10<b> oeufs de Jezikos</b>, Melgur (près du nexus à la pointe sud d'Arakas) vous donnera une coiffe d'Olphen. </p><p>La coiffe donne <b>+30 en chance (maj du 4/4/18)</b> durant l'évènement et +5 après ... important la chance !! </p><p>Une bonne surprise : si vous désirez une coiffe colorée, réunissez 20 coiffes normales et allez voir Phildor, dans la partie ouest des quartiers résidentiels au Sud d'Arakas. Il vous les échangera contre une coiffe colorée. </p>",
        "images": [],
        "order": 1
      },
      {
        "title": "Parchemins olphéniques",
        "description": "<p>En échange de <b>parchemins olphéniques</b>, Elanthe (temple de LH) vous donnera un objet aléatoire selon le nombre de parchemins que vous lui rapporterez. Les parchemins olphéniques sont dropables ... vous pouvez les regrouper. </p><p>A petit level, allez voir Melgur (près de la pointe sud d'Arakas- ok c'est loin - désolé) qui vous apprendra un sort pour tuer facilement les Olphens. Ca vous coûtera un point de compétences et 583 pièces d'or. </p>",
        "images": [],
        "order": 2
      },
      {
        "title": "Oeuf surprise",
        "description": "<p>Les Olphens dropent aussi, mais très rarement, un <b>oeuf surprise</b> ! </p><p>Un oeuf surprise contient 3 objets au hasard parmi 3 catégories différentes: Commun, peu commun et rare, soit plus d'une centaine d'objets différents au total : </p><ul><li>Commun : essentiellement des objets banals comme des objets de quêtes d'accès, des consommables de bas niveau et des objets liés à l'événement de Pâques.</li> <li>Peu commun : des ingrédients de métiers et consommables de haut niveau ainsi que des oreilles d'Olphen colorées.</li> <li>Rare : des ingrédients rares, des parchemins d'expérience, des objets de chance et des bons d'échanges contre des reroll, compagnon et renaissance.</li></ul>",
        "images": [],
        "order": 3
      },
      {
        "title": "Les récompenses pour les parchemins",
        "description": "<p><b><u>20 parchemins</u></b> </p><p>Trèfle à quatre feuilles x2, Potion de guérison divine, Fleur de coton, Pierre de lune finement taillée, Clef métallique couverte de rosée, Épée de fureur (rare). </p><p><b><u>75 parchemins</u></b> </p><p><b></b> </p><p>Ornement prestigieux, Cocon de soie, Anneau de cerfeuil, Feuille de Consoude, Feuille de Boldo, Fleur de Colchique, Cerise d’Acérola, Amulette de chance. </p><p><b><u>150 parchemins</u></b> </p><p> Fragment de météorite, Glande séricigène x5, Liens éthérés, Morceau en ivoire d’Agamaoth, Plastron étincelant, Jambières étincelantes, Inscription secrète de Gorodek, Esprit naturel, Énergie infernale. </p><p><b><u>300 parchemins</u></b> </p><p> Anneau du couturier, apothicaire, ébéniste, bijoutier, armurier, forgeron </p><p>Bouclier porte-bonheur, Bracelet des gens heureux, Amulette de fortune, Gants de noblesse, Ceinture de noblesse, Bague en argent ornée de trèfles. </p><p>Fluide de démolécularisation supérieure, Livre des sorts de l’apprenti, Relique des temps anciens. </p><p><b><u>800 parchemins</u></b> </p><p>Fluide de démolécularisation supérieure. (Nouveau) </p><p><b><u>900 parchemins</u></b> </p><p>Livre des sorts de l'apprenti. (Nouveau) </p><p><b><u>1000 parchemins</u></b> </p><p>Bague en argent ornée de trèfles. (Nouveau) </p><p><b><u>1500 parchemins</u></b> </p><p>Aléatoirement une relique d'un des académiciens ou une relique d'un autre temps. </p><p>Ou un BON de RESKIN (d'un item en votre possession vers un item analogue) </p><p><b>Un conseil : équipez vous en items chance.</b> </p><p><br> </p>",
        "images": [],
        "order": 4
      },
      {
        "title": "La quête du billet de tombola (suspendue)",
        "description": "<p>Allez trouver Candice à la fontaine de LH et parlez-lui (<span class=\"npc-keyword\"><span class=\"npc-keyword\"><span class=\"npc-keyword\">travail</span></span></span>). Elle vous demandera de réunir des friandises destinées à une fête pour les enfants : des fèves de cacao, du lait, des fruits et un ruban. </p><p>Quand vous aurez réuni ces objets, reparlez à Candice qui vous donnera un billet de tombola. </p><p>Ou trouver les friandises ? </p><p>-Fèves de cacao : </p><p>-Lait : </p><p>-Fruits : </p><p>-Ruban : </p><p> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> </p>",
        "images": [],
        "order": 5
      }
    ],
    "credits": [
      "T4C NMS Révolution wiki"
    ]
  },
  {
    "title": "Donjon-1-30",
    "slug": "donjon-1-30",
    "zone": "Arakas",
    "prerequisites": [],
    "rewards": [],
    "npcs": [],
    "gold": "",
    "steps": [
      {
        "title": "Le Donjon du GOBELET (levels 1-30)",
        "description": "<p><b>Le donjon du Gobelet</b> est destiné aux joueurs de levels 1 à 30. La durée de réservation avant relance est de 1H30. </p><p>Ce donjon se fait de préférence en groupe, quoiqu'il soit facilement faisable seul avec un équipement décent, un niveau raisonnable (environ 18-20) et une bénédiction (pensez à celle de Zélina au temple si vous ne trouvez pas de GB. Elle fait 400PV, dure <b>40 minutes</b> et de plus elle est <b>cumulable avec une béné normale</b>). Pour pénétrer dans le donjon, il suffit qu'un des membres du groupe ait fait la quête d'accès. Le donjon vous sera alors réservé durant 1H30 IRL même si vous le quittez avant ou si vous vous déconnectez. Enfin si vous le quittez en cours, vous pouvez y retourner si vous êtes dans les temps. </p><p>Il vous permet d'xp - mais tout juste correctement -, d'obtenir parfois une épée de fureur (il y a plusieurs généraux gobelins), et surtout d'obtenir avec un peu de chance un drop à la sortie en tuant <b>Le Gobelet </b>et parfois aussi un beau drop en vidant le coffre). </p><p>Attention, quand vous voudrez refaire le donjon, après 1H30 minimum, il faudra refaire la quête d'accès! </p>",
        "images": [
          "/t4c-nms-overview/assets/quests/donjon-1-30/img_0_0.jpg"
        ],
        "order": 0
      },
      {
        "title": "La quête d'accès",
        "description": "<p>Vous devez obtenir une fiole d'essence de gobelin. Pour cela procurez-vous </p><ul><li><b>1 Oeil de gobelin </b>(assez rare) dropé par beaucoup de gobelins, même NMS (mais pas les gobelins simples, ni éclaireurs, ni corrompus...)</li> <li>(Un bon spot est le <b>deuxième camp gobelin</b> juste après le pont menant aux montagnes Jarko)</li> <li><b>2 Cornes de gobelin </b> (assez fréquentes) dropées par la plupart des gobelins (mais pas les bombermans, farfelus ....).</li> <li>Le <b>Camp gobelin</b> est intéressant pour farmer ces ressources, le deuxième camp (à l'entrée des montagnes de Jarko) et peut-être encore mieux.</li></ul><p>Rapportez ces items au PNJ <b>Nilhem </b>qui se trouve au Nord du pont gobelin dans une maison <b>(A</b> sur le plan plus bas<b>)</b> et dites lui \"<b>Service\".</b> il vous remettra la fiole vous permettant de pénétrer dans l'antre du Gobelet. Tous les membres du groupe à proximité du portail sont téléportés à l'intérieur. Se faire bénir au préalable est un plus à petit niveau. </p><p><b><u>ATTENTION</u></b> : Nilhem vous prend tous vos yeux et cornes donc posez au sol les items en surplus !! </p><p><b>Tip</b> : <b>Nilhem</b> peut aussi vous donner un buff de protection via la quête L'âme de Nilhem . </p>",
        "images": [],
        "order": 1
      },
      {
        "title": "Le plan d'accès",
        "description": "<p><b>A : Nilhem.</b> <b>B : Portail.</b> </p>",
        "images": [
          "/t4c-nms-overview/assets/quests/donjon-1-30/img_2_0.jpg"
        ],
        "order": 2
      },
      {
        "title": "Le donjon",
        "description": "<p>Le portail d'entrée se trouve au Nord Ouest de Nilhem près d'une montagne <b>(B)</b>. Groupez avec vos amis et approchez vous du portail avant que le possesseur de la fiole ne clique sur le portail pour entrer. </p><p>Il est possible de rester à l'intérieur du donjon durant 1 heure 30 minutes IRL après quoi vous serez renvoyés à votre sanctuaire. Vous pouvez quitter à tout moment par le portail de sortie et revenir tant que votre temps n'est pas écoulé (en durée IRL) et que vous n'avez pas terminé le donjon, mais ne reparlez plus au PNJ. </p><p>Quand vous aurez tué environ une cinquantaine de gobelins chacun (ou peu avant la fin de votre session d'1H30), </p><p>Allez - tous ensemble car le boss n'apparaîtra pas deux fois - prendre le portail du nord qui mène à <b>Gobelet</b>, le boss. </p><p>Tuez-le en groupe, il va peut-être droper épée de fureur, émail nacré de gobelin jaune etc... Videz ensuite le coffre. Avec un peu de chance vous aurez un drop intéressant (parfois une très jolie robe ou un anneau ou même une arme rare). </p><p>Objets du coffre : </p><p>- Robe du Zéphyr rapiécée (robe air) </p><p>- Robe scintillante rapiécée (robe lumière) </p><p>- Robe flamboyante rapiécée (robe feu) </p><p>- Robe tellurique rapiécée (robe terre) </p><p>- Robe de la rose rapiécée (robe eau) </p><p>- Robe des abîmes rapiécée (robe nécro) </p><p>- Armure en cuir rapiécée (guerrier/archer) </p><p>- Anneau de l'apprenti armurier, bijoutier .. (pour améliorer les chances de réussite de vos futurs crafts de +2%) </p><p>- <b>Hachette du rétamé</b> </p><p>- rien... :( </p><p>-encore rien ...... </p><p>N.B 1 : Pour optimiser votre xp, concentrez vous sur les gobelins shamans en vous efforçant de les faire respawn rapidement. </p><p>N.B 2 : Concentrez-vous sur les généraux et les shamans pour l'épée de fureur (rare). </p>",
        "images": [],
        "order": 3
      },
      {
        "title": "La vidéo de Meyli",
        "description": "<p> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> </p>",
        "images": [
          "/t4c-nms-overview/assets/quests/donjon-1-30/img_4_0.jpg"
        ],
        "order": 4
      }
    ],
    "credits": [
      "T4C NMS Révolution wiki",
      "La vid"
    ]
  },
  {
    "title": "Le donjon du Capitaine Coupe-jarret (levels 25 à 50)",
    "slug": "le-donjon-du-capitaine-coupe-jarret-levels-25-a-50",
    "zone": "Raven's Dust",
    "prerequisites": [],
    "rewards": [
      "10 000 po chacun",
      "un objet parmi :"
    ],
    "npcs": [],
    "gold": "",
    "steps": [
      {
        "title": "Introduction",
        "description": "<p>Vous devez être de level 25 à 50 (inclus) pour pouvoir entrer dans ce donjon. </p><p>Pour réaliser cette activité vous devez donner une petite carte au trésor et une bouteille de rhum <b>ou</b> une petite carte au trésor et 1 million de pièces d'or au pnj qui en contrôle l'accès. </p><p><b>Note</b> : Toutes les étapes nécessaires à l'obtention de l'accès, détaillées plus loin, peuvent être regroupées. Ainsi, vous pouvez préparer plusieurs cannes à pêche d'avance, les échanger contre autant de bouteilles contenant un parchemin que possible et bien sûr avoir plusieurs bouteilles de rhum dans votre sac. Il n'y a aucun problème lié au fait d'avoir plusieurs de ces items dans votre sac lorsque vous lancez l'activité auprès du PNJ. Ils sont d'ailleurs tous échangeables. Vous pouvez donc préparer plusieurs accès d'avance et les stocker dans votre coffre. </p>",
        "images": [],
        "order": 0
      },
      {
        "title": "1) Création de la canne à pêche",
        "description": "<p>- Rendez-vous auprès de <b>Gildric Moray pierre verte de l'esprit de la foret\") </p><p>-50 feuilles d'arbre démoniaque (dropées par les arbres démoniaques de RD) ou une décoction démoniaque. </p><p>-Un éclat d'âme d'arbre Sintelle (dropé par les arbres Sintelle de DO bien sûr). </p><p>Dans le donjon, vous pourrez obtenir des \"feuilles d'Ent\" qui vous procureront de l'xp à l'aide d'une petite quête : la quête du remède de Sigvurd. </p>",
        "images": [
          "/t4c-nms-overview/assets/quests/le-donjon-de-leternelle-agonie/img_0_0.jpg"
        ],
        "order": 0
      },
      {
        "title": "La décoction démoniaque",
        "description": "<p>Allez voir Solange, avec 50 feuilles d'arbre démoniaque dans votre inventaire, dans une maison aux druides RD. Vous pourrez échanger vos 50 feuilles versus une \"décoction démoniaque \" en disant ''décoction'' à Solange. La décoction démoniaque vous sera utile pour votre prochain accès au marécage. Vous libérerez ainsi de la place dans votre inventaire. </p>",
        "images": [],
        "order": 1
      },
      {
        "title": "Le remède de Sigvurd",
        "description": "<p>Quand vous récupérerez une feuille d'Ent (elles sont rares), apportez-la à Solange que vous trouverez aux druides de RD dans la même maison que Celestina. </p><p>Dites-lui ''travail'' ''passionnée'' ''médecine'', ''potion'', ''source'', et elle vous remettra une petite fiole de contrepoison que vous devrez donner à Sigvurd en cliquant simplement dessus pour le guérir. Il vous remerciera par un bonus d’xp (dépendant de votre niveau - environ 22M au level 157). </p>",
        "images": [],
        "order": 2
      },
      {
        "title": "La quête d'accès au donjon",
        "description": "<p>Allez voir Sigvurd, dans la maison du forgeron au Nord de la ville de Redwall et parlez-lui. Il vous enjoint de trouver un arbre situé au Nord et de lui parler... </p><p><b>Dialogue avec Sigvurd :</b> </p><p>-- {Sigvurd}\":\" {*ouvre difficilement les yeux*} ... Ah ... Euh ... Bonjour ... {*tremble de froid*} </p><p>-- Vous avez dit : travail </p><p>-- {Sigvurd}\":\" Regardez-moi ... Comment voulez-vous que je puisse \"encore\" travailler ? &lt;&gt;Je ne peux même plus sortir de ce lit ... {*marque une longue pause*} </p><p>-- Vous avez dit : encore </p><p>-- {Sigvurd}\":\" Oui ... {*parle difficilement*} ... On ne dirait pas ... en réalité ... je suis aventurier ... {*prend une grande bouffée d'air avant de continuer*} ... Je suis rentré depuis quelques semaines ... mon \"état\" ne cesse d'empirer ... Je ne peux presque plus bouger ... </p><p>-- Vous avez dit : état </p><p>-- {Sigvurd}\":\" Nous avons traversé un \"marécage\" ... Nous étions six ... Mes compagnons n'y ont pas survécu ... &lt;&gt;Je ... je ne sais pas ce que j'ai ... {*remonte sa manche pour vous montrer ses avant-bras*} ... ce sont des griffures ... &lt;&gt;Je ... je suis le \"dernier\" ... {*plisse le front*} </p><p>-- Vous avez dit : marécage </p><p>-- {Sigvurd}\":\" Un marécage ... oui ... {*a une quinte de toux*} ... une stupide idée ... &lt;&gt;Nous pensions y trouver un trésor ... &lt;&gt; Rhaaaa ... si seulement nous n'avions pas écouté cet \"arbre\" de malheur ... </p><p>-- Vous avez dit : arbre </p><p>-- {Sigvurd}\":\" C'est un arbre maudit ! ... {*perd son souffle en s'exclamant*} ... &lt;&gt;N'y \"allez\" pas ou vous mourrez ! ... Tous les arbres sont maudits !!! ... Et celui là en particulier ... &lt;&gt;En fait ... il parle ! Mais comment voulez-vous qu'un arbre puisse parler ? ... {*sent la folie le gagner*} </p><p>-- Vous avez dit : allez </p><p>-- {Sigvurd}\":\" Il est au nord ... Mais n'y allez pas !!! ... {*tousse en essayant de hausser le ton*} ... Il est maudit ... Je vous l'ai déjà dis ! {*insiste*} </p><p><b>Trouvez cet arbre....il est situé au Nord de RW dans les eaux marécageuses vers l'Ouest.</b> </p><p><b>Si vous tentez de lui parler de suite il vous répondra :</b> </p><p>-- Les feuilles de l'arbre bougent avec le vent. </p><p><b>Bien évidemment, comme pour Greyleaf, il vous faut une pierre verte de l'esprit de la forêt pour lui parler. Procurez-vous cette pierre comme vu plus haut et reparlez-lui :</b> </p><p>-- {Chêne millénaire}\":\" Bonjour jeune aventurier </p><p>-- Vous avez dit : travail </p><p>-- {Chêne millénaire}\":\" Je suis le gardien du marécage ...seuls les courageux aventuriers peuvent y \"entrer\". </p><p>-- Vous avez dit : entrer </p><p>-- {Chêne millénaire}\":\" Si vous voulez y entrer, vous devrez d'abord me \"montrer\" votre valeur et vos aptitudes à pouvoir y survivre ! </p><p>-- Vous avez dit : montrer </p><p>-- {Chêne millénaire}\":\" Bien ... Si vous pensez pouvoir y survivre ... Trouvez 50 \"feuilles\" d'arbre démoniaque ou une \"décoction\" démoniaque, peu importe ... l'un ou l'autre. &lt;&gt;Ensuite vous devrez trouver un \"éclat\" d'âme d'arbre Sintelle. &lt;&gt;Quand vous aurez \"tout\" rassemblé, revenez me voir, je vous y enverrai. </p><p>-- {Chêne millénaire}\":\" Rapportez-moi une cinquantaine de feuilles d'arbre démoniaque pour me prouver que vous pourrez survivre une fois dans le marécage ! </p><p><b>Trouvez les ingrédients, groupez avec si possible 3 ou 4 amis et reparlez-lui :</b> </p><p>-- Des aventuriers s'aventurent péniblement dans les marécages de l'éternelle agonie. </p><p>-- {Chêne millénaire}\":\" Vous étiez prévenus ... Allez en paix ! </p><p><b>Et</b> <b>vous êtes téléportés...</b> </p>",
        "images": [],
        "order": 3
      },
      {
        "title": "Le donjon",
        "description": "<p><b>Sur cette île sont de nombreux monstres très méchants. Evitez de trop bouger, avancez lentement !!</b> </p><p><b>Tuez les monstres, ils invoquent des Ent's poisseux. Tuez-les aussi. Ils droppent, rarement, des \"feuilles d'Ent\". Pensez surtout à les ramasser. Quand vous aurez tué un certain nombre d'Ent's poisseux, un boss sera invoqué au début de la jetée.</b> </p><p><b>Vous êtes prévenu par un message d'un des Ent poisseux : *dans un dernier souffle* ... L'Ent lethifère... il vous ôtera votre misérable vie ! ... Vous ne sortirez jamais d'ici ... *agonise sur le sol*.</b> </p><p><b>Retournez au début de la jetée et tuez le boss. A sa mort il droppe une souche. Cliquez dessus pour obtenir votre récompense et retourner à votre sanctuaire (n'oubliez pas d'apporter vos feuille d'Ent à Solange).</b> </p><p><b>Récompenses : environ 50M xp et au hasard :</b> </p><p><b>Iridium, parchemin de l'académie, nerf sciatique, globe oculaire, bulbe de l'éveillé, écume de larve toxique, chapeau des espérances multiples (+10 de chance), item secret de l'Académie.</b> </p><p> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> </p>",
        "images": [
          "/t4c-nms-overview/assets/quests/le-donjon-de-leternelle-agonie/img_4_0.jpg"
        ],
        "order": 4
      }
    ],
    "credits": [
      "T4C NMS Révolution wiki"
    ]
  },
  {
    "title": "Le donjon de la chapelle enfouie",
    "slug": "le-donjon-de-la-chapelle-enfouie",
    "zone": "Raven's Dust",
    "prerequisites": [],
    "rewards": [],
    "npcs": [],
    "gold": "",
    "steps": [
      {
        "title": "Le Donjon de la chapelle enfouie (175-200)",
        "description": "<p>Ce donjon très réussi est réservé aux levels 175 à 200. Il vous sera réservé 1 heure. </p><p>Un groupe de 3 minimum est conseillé dont un soigneur pour le boss. </p><p>Résistance eau sera bien utile contre les âmes impures et peste/maled vous aideront bien à tuer le boss </p><p>Items nécessaires : </p><ul><li>1 masse renforcée (drop des mobs académie-1)</li> <li>1 bobine de corde (drop des vers de DI)</li> <li>1 torche enchantée ( 10 torches classiques à acheter à une marchande, aller voir Gakalia et lui dire <span class=\"npc-keyword\">\"torche\"</span>)</li> <li>1 nécessaire de secours (180K po) acheté à Veronika (la marchande de Redwall)</li></ul>",
        "images": [],
        "order": 0
      },
      {
        "title": "L'histoire",
        "description": "<p>Une exploratrice est tombée au fond d'un puits en tentant de découvrir l'entrée de la chapelle, et s'est blessée. Le puits se trouve à l'ouest de Redwall ( en 640,1420 environ). Une fois les items réunis, rendez-vous au puits avec votre groupe. </p>",
        "images": [],
        "order": 1
      },
      {
        "title": "La quête d'accès",
        "description": "<p>Il vous faudra une masse renforcée (drop Scorpions, Flamboyants, Furonclus et Gargouilles) ,une bobine de corde (drop des vers de DI), un nécessaire de secours et une torche enchantée. </p><p>Achetez le nécessaire de secours 180k chez Veronika (marchande de Redwall). </p><p>Pour obtenir la torche enchantée il vous faudra acheter 10 torches classiques et les échanger chez Gakalia (à l'Ouest de la marchande de Redwall) en lui disant <span class=\"npc-keyword\">\"torche\"</span>. </p><p>Une fois en possession des 4 items dirigez vous avec votre groupe vers le puits et cliquez dessus. Vous entendrez la voix de l'exploratrice au fond du puits, elle vous dira qu'elle est blessée et qu'il y a un mur ... Il vous faudra avoir les items nécessaires pour entrer et la soigner, ensuite explorer la chapelle et enfin en ressortir. </p><p>Attention, pour le coffre final il faudra être 3 au minimum. </p>",
        "images": [],
        "order": 2
      },
      {
        "title": "Le donjon",
        "description": "<p>1. Une fois à l'intérieur (vous arrivez par la droite), n'oubliez pas, si vous avez lancé le donjon, de parler encore à l'exploratrice blessée Erehrt de Quaerere, mots-clés \"travail\",3x \"recherches\", \"chapelle\", \"entrée\", \"trésors\". </p><p>2. Suivez le chemin menant vers la salle du bas. Attention, sur le chemin le plafond s'effondre à certains endroits (300 de dégâts par effondrement). Au passage, vous pouvez dire <span class=\"npc-keyword\">\"travail\"</span> et \"oui\" à l'Esprit rédempteur pour initialiser la quête des Ames errantes (inutile, en fait il suffira de lui parler après avoir tué assez d'âmes). Une fois rendu dans la salle du bas, vous devrez tuer quantité d'Ames errantes jusqu'à obtenir chacun une \"fiole d'immunisation aux pouvoirs des sacrements\" (en mage feu full équipé vous ferez 5.5G/heure au level 195 - groupe de 6 quand meme). </p><p>3. En même temps vous pourrez aussi réaliser : </p><p>Admirez la Salles des Ames errantes (en mode farming) =====&gt; </p><p>4. En tuant des Ames errantes, vous devrez obtenir chacun une \"fiole d'immunisation aux pouvoirs des sacrements\" qui vous permettra de poursuivre l'exploration du donjon (notez qu'il est possible de sortir des potions du donjon mais elles seront supprimées lors de l'accès suivant, autant les laisser au sol si vous pensez revenir en moins de 2 heures..). Une fois obtenu une fiole par joueur (elles sont dropables), rendez vous dans la salle de gauche qui contient 3 coffres (sépultures) et des Ames Damnées (au passage, allez dire <span class=\"npc-keyword\">\"Ames\"</span> à l'esprit rédempteur pour encaisser votre xp si vous avez tué assez d'âmes). </p><p>5. Dans la salle de gauche vous verrez 3 coffres, chacun portant un nom différent. Simplement vous devrez activer les coffres dans le bon ordre de manière à ce qu'apparaisse un cercle mauve qui déverrouille la porte de la salle du haut (boss). </p><p>6. L'ordre des coffres est aléatoire lors de chaque session du donjon. A chaque fois que je suis entrée la combinaison de coffres était différente (ai fait plusieurs fois le donjon en solo, prêtresse lvl 190). Exemple : ouvrir coffre du haut, celui de gauche, celui de droite... etc... jusqu'à obtenir la bonne séquence (ne cliquez pas 2 fois sur le même coffre cela ne sert a rien :) ). </p><p>7. Si les coffres sont ouverts dans le bon ordre, une bulle mauve (genre skin de peau de pierre Redwall en mauve, au lieu de vert ) apparaitra. </p><p>8. Si par contre l'ordre est mauvais cela fera apparaitre 3 mobs (Buff du fantôme ? requis sinon galère à les tuer ^^). Mais vous pouvez continuer à chercher la bonne séquence pour les coffres même si les mobs ne sont pas morts. </p><p>9. Une fois les coffres ouverts dans le bon ordre, assurez vous de boire chacun la \"Fiole d'immunisation aux pouvoirs des sacrements\" dropée par les âmes errantes de la première salle (la potion dure 30 minutes et le donjon 1 heure). </p><p>10. Allez dans la salle du haut et attendez un peu avant de faire un push. Vous trouverez dans cette salle cinq Ames Impures, qui, si vous n'avez pas la potion aux sacrements, vous lanceront un sort des sacrements qui réduira vos PV à 400 en deux secondes, et vu que les Impures tapent à 600 c'est la mort assurée^^ (non non pas morte encore hihi). </p><p>11. En gros avancez pas à pas pour tuer la première tranquillement, avec un soin prêtre par l'arrière si vous êtes deux. Ne tentez jamais d'entrer directement car les impures ne se déplacent pas donc les perso avec des sorts à distance ou un arc peuvent très facilement les tuer. </p><p>12. Une fois les 5 impures tuées, un Boss apparaîtra, le Prédicateur Décrépit, skin humain avec un suaire du phoenix, qui se téléporte quasi tout les 5 secondes et lance comme un sort skin eau (assez chaud, environ 5 fois par seconde). Tuez-le. L'un de vous peut s'avancer au contact pour le bloquer. (gain : 400M xp) </p><p>13. En mourant, le boss permet à tous d'ouvrir lle tombeau au centre de la salle des 3 coffres. L'ouverture du tombeau vous fera quitter instantanément le donjon avec un petit cadeau en XP (500M quand même) et selon le cas : </p><ul><li>potion divine...</li> <li>iridium</li> <li>ivoire</li> <li>Anneau du cimmérien</li> <li>Parchemin de l'académie</li> <li>Bouteille d'eau de vie</li> <li>Potion du fortuné</li> <li>Glyphe du prédicateur</li> <li>et parfois un <b>bracelet des gens heureux </b> !!</li></ul><p><br> Voili voilou..... </p>",
        "images": [
          "/t4c-nms-overview/assets/quests/le-donjon-de-la-chapelle-enfouie/img_3_0.jpg",
          "/t4c-nms-overview/assets/quests/le-donjon-de-la-chapelle-enfouie/img_3_0.jpg"
        ],
        "order": 3
      },
      {
        "title": "Farming et XP",
        "description": "<p>Ha aussi j'oubliais, pour celles et ceux qui désirent farmer aux âmes errantes sachez que .... </p><p>Prêtres : équipez-vous lumière plutôt que terre, vous gagnerez 1G/heure en utilisant repousser les MV.. </p><p>Mages : un mage feu 195 fait 5.5G de l'heure, un prêtre seulent 3.8 dans les mêmes conditions groupe de 6. </p><p>A) Ames Errantes : Drop prisme de mana, hyperpotion de tranquillité et Fiole d'immunisation aux sacrements. Les âmes donnent un joli 25M xp chacune (soit environ 3 à 5G/heure). </p><p>Sort des âmes errantes : Glacier, et quelquefois vol de mana. </p><p>B) Ames perdues (salle de gauche en actionnant le mécanisme) drop prisme et pierre de mana, lance sanctuaire et éclat de pierre en continu. 35Mxp chacune. </p><p>C) Ames impures : Lance pouvoirs des sacrements (réduit les PV à 400 en 2 secondes si vous n'avez pas la popo), Lance explo de mana (fait très mal) donc n'entrez pas directement dans la salle. Elles sont très longues a tuer. Dropent parfois une améthyste. </p><p>D) Boss : Lance son sort ( 5 à la seconde, 1200 dégâts au total) téléportation aux 5 secondes, explosion mana, retrait mana, etc.. </p><p>Les items d'accès sont assez faciles à faire droper. J'ai eu 4 masses renforcées aux flamboyants en 30 minutes avec 0 en chance ^^. </p><p>(Merci à Leticia Loxley et Cryne Loxley) </p><p> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> </p>",
        "images": [],
        "order": 4
      }
    ],
    "credits": [
      "T4C NMS Révolution wiki"
    ]
  },
  {
    "title": "Donjon-Académiciens",
    "slug": "donjon-academiciens",
    "zone": "Raven's Dust",
    "prerequisites": [],
    "rewards": [],
    "npcs": [],
    "gold": "",
    "steps": [
      {
        "title": "Introduction",
        "description": "<p>Il vous faudra un insigne de l'Académie. Cet insigne est dropé par les monstres du niveau -2 de l'Académie - profitez-en pour pex car ça peut être long. </p>",
        "images": [
          "/t4c-nms-overview/assets/quests/donjon-academiciens/img_0_0.jpg"
        ],
        "order": 0
      },
      {
        "title": "Le donjon",
        "description": "<p>Rendez vous à la RST de Raven's Dust et descendez près de Iago Caballero (loin au au Sud Ouest de Grott). Vous verrez rapidement la maison de retraite des Académiciens gardée par un Intendant. Parlez lui, il vous réclamera un insigne. </p><p>Ensuite, groupez vous autour du portail avant d'y pénétrer et c'est parti pour <b>donner une bonne leçon aux Académiciens!</b> </p><p>Les 10 Académiciens sont dispersés sur 4 étages. Un au premier, Deux au deuxième....Chacun d'eux peut droper un item secret, une relique (rarement) mais pas d'iridium. </p><p>Arrivé au 4ème étage et une fois tous les Académiciens liquidés, un coffre apparaîtra avec votre récompense : </p><ul><li>Environ 1,5G d'xp</li> <li>40K or</li> <li>Des points d'interaction.</li> <li>Avec de la chance vous obtiendrez aussi un anneau de l'apprenti pour l'un des métiers.</li></ul><p>PS: Ce donjon se fait en 10 à 15 minutes mais la réservation est d'une heure. </p>",
        "images": [],
        "order": 1
      },
      {
        "title": "Les combinaisons",
        "description": "<p>Les combinaisons possibles sont : </p><p><i><b>1e étage</b></i> : Isilae (rouge) </p><p><i><b>2e étage</b></i> : Falyel (beige) - Gorodek </p><p><i><b>3e étage</b></i> : Xordiv (noir) - Amaelle (blanc) - Miryden </p><p><i><b>4e étage</b></i> : Jalaam (clown) - Valmar - Klauzar - Silvius </p><p>------------------------------------------------------------------ </p><p><i><b>1e étage</b></i> : Falyel (beige) </p><p><i><b>2e étage</b></i> : Valmar (vert) - Gorodek (paladin) </p><p><i><b>3e étage</b></i> : Isilae (rouge) - Klauzar - Silvius (archer vert) </p><p><i><b>4e étage</b></i> : Jalaam (clown) - Xordiv (noir) - Amaelle (blanc) - Miryden (bleu) </p><p>------------------------------------------------------------------ </p><p><i><b>1e étage</b></i> : Miryden (bleu) </p><p><i><b>2e étage</b></i> : Isilae (rouge) - Silvius </p><p><i><b>3e étage</b></i> : Valmar - Gorodek - Klauzar </p><p><i><b>4e étage</b></i> : Jalaam - Xordiv - Amaelle - Falyel </p><p>------------------------------------------------------------------ </p><p><i><b>1e étage</b></i> : Valmar (vert) </p><p><i><b>2e étage</b></i> : Miryden (bleu) - Klauzar </p><p><i><b>3e étage</b></i> : Xordiv - Amalle - Falyel </p><p><i><b>4e étage</b></i> : Jalaam - Isilae - Silvius - Gorodek </p><p>----------------------------------------------------------------- </p><p><br> </p><p> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> </p>",
        "images": [],
        "order": 2
      }
    ],
    "credits": [
      "T4C NMS Révolution wiki",
      "Raven"
    ]
  },
  {
    "title": "Capture de drapeau",
    "slug": "capture-de-drapeau",
    "zone": "Stoneheim",
    "prerequisites": [],
    "rewards": [
      "GAGNER !"
    ],
    "npcs": [],
    "gold": "",
    "steps": [
      {
        "title": "Les Arènes CAPTURE DE DRAPEAU",
        "description": "<p><b>Trouvez et ramenez le drapeau dans votre camp</b>. N'hésitez pas à voler le drapeau au joueur adverse qui le détient (kill kill kill !) et surtout éclatez vous ! </p><p><b>Ici pas de drops ni de perte d'xp.</b> Les gagnants marqueront aussi des points d'interaction. </p><p><b>Vous devez être 4 joueurs au minimum</b>. Le lanceur de l'interaction et 3 joueurs qui s'inscrivent à l'interaction lancée. La durée maximum est de 30 minutes. Le range de levels autorisé est de -25 à +25 par rapport au niveau du lanceur de l'interaction. Si le lanceur est d'un level élevé, le range sera 210-260. </p><p>Pour lancer une interaction ,faites ctrl S puis \"interaction PVP\". </p><p>Vous aurez le choix entre 3 arènes différentes : Forteresse de Delmar, Marais de Vaal'Nyr, Désert de Scorpiax. </p><p>En début d'interaction vous serez téléporté dans le refuge de votre camp. Vous pourrez y acheter des potions d'interaction à prix réduit (pensez à faire une macro rapidement). </p><p>A la fin de l'interaction vous serez téléporté à votre point de départ, même si vous étiez à l'Académie ou en Zone Oracle. </p>",
        "images": [],
        "order": 0
      },
      {
        "title": "Forteresse de Delmar",
        "description": "<p>La plus petite, idéale à partir de 4 joueurs. </p><p>Il s'agit de ramener dans son camp un drapeau apparu aléatoirement dans la forteresse. La première équipe qui marque 5 points ou qui celle mène au bout de 30 minutes a gagné. </p>",
        "images": [],
        "order": 1
      },
      {
        "title": "Marais de Vaal'Nyr",
        "description": "<p>Il s'agit de ramener dans son camp un drapeau apparu aléatoirement au milieu de l'arène. La première équipe qui marque 3 points ou celle qui mène au bout de 30 minutes a gagné. </p>",
        "images": [],
        "order": 2
      },
      {
        "title": "Désert de Scorpiax",
        "description": "<p>Il s'agit de ramener dans son camp le drapeau situé dans le camp adverse. La première équipe qui marque 3 points ou qui celle mène au bout de 30 minutes a gagné. </p>",
        "images": [],
        "order": 3
      },
      {
        "title": "Récompense : GAGNER !",
        "description": "<p>Marquez aussi des points d'interaction ! </p><p>Les points d'interaction dépendant entre autre du nombre de kills ... </p><p> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> </p>",
        "images": [],
        "order": 4
      }
    ],
    "credits": [
      "T4C NMS Révolution wiki"
    ]
  },
  {
    "title": "Camping Araknor",
    "slug": "camping-araknor",
    "zone": "Arakas",
    "prerequisites": [],
    "rewards": [],
    "npcs": [],
    "gold": "",
    "steps": [
      {
        "title": "Accès aux quatre super boss",
        "description": "<p>Rendez vous dans une maisonnette située à l'Académie -3, le long du mur Sud-Ouest (facile en partant de l'octogone central). </p><p>Vous y trouverez Girflet Kirhn qui, après un petit dialogue, ou si vous dites directement \"<b>envoyer</b>\", vous téléportera vers la salle d'entraînement. </p><p>Dans cette salle, Urigan vous proposera d'affronter Quaran (ex Tarnian), Octrael (ex Edgar), Arkélise (ex Moonrock) et surtout Korès (Araknor). </p><p>Cela vous coûtera <b>des sources d'énergie</b>, respectivement 3 (Quaran), 5 (Octrael), 7 (Arkélise) ou 10 (Korès), obtenues auprès des monstres du -2 durant vos longues séances d'xp. </p>",
        "images": [],
        "order": 0
      },
      {
        "title": "Plan général",
        "description": "",
        "images": [
          "/t4c-nms-overview/assets/quests/camping-araknor/img_1_0.jpg"
        ],
        "order": 1
      },
      {
        "title": "La vidéo de Meyli",
        "description": "<p><br> </p>",
        "images": [
          "/t4c-nms-overview/assets/quests/camping-araknor/img_2_0.jpg"
        ],
        "order": 2
      },
      {
        "title": "Présentation",
        "description": "<p><b>Kores (ex Araknor) est un SUPER-BOSS, vous devrez être nombreux.</b> </p><p>Prévoyez d'être au moins 8 joueurs divisés en 2 groupes, chacun ayant si possible deux prêtres pouvant ramener à la vie. </p><p>Si tout se passe bien vous gagnerez de l'xp et un item rare de craft (livre de sorts de l'apprenti, relique d'un autre temps ou fiole de démolécularisation). </p><p>Enfin l'utilisation de SKYPE ou DISCORD aidera bien à l'organisation et la synchronisation des opérations. </p>",
        "images": [],
        "order": 3
      },
      {
        "title": "Ce qu'il faut savoir",
        "description": "<ul><li>Kores attaque depuis le centre d'une pièce entourée de murs derrière lesquels vous devrez vous cacher.</li> <li>Sa puissance et ses dégâts augmentent progressivement, le tuer rapidement est donc primordial.</li> <li>Toutes les 5 secondes, il lance une aura verte jusqu'à 4. La 5ème sera violette et aura pour effet de tuer tous ceux qui ne se sont pas cachés derrière les murs. Il faut donc compter les auras vertes, et se cacher après la 4ème. Puis le cycle recommence avec 4 vertes etc...</li> <li>Après les 4 premières séries d'auras, il invoque 4 guerriers squelettes, aux 4 coins de la pièce. Tant qu'ils ne sont pas morts, Korès se régénère et est invincible. Il faut donc tuer rapidement tous les guerriers squelettes pour éviter qu'il se régénère trop.</li> <li>Enfin s'il n'est pas mort après la deuxième invocation de squelettes, ça risque de se gâter car il devient très puissant et les invocations plus fréquentes... De plus, comme il ne dépop pas c'est cuit pour la soirée si vous le ratez une fois !!</li></ul>",
        "images": [],
        "order": 4
      },
      {
        "title": "Méthode",
        "description": "<p>1) Créez 2 groupes équivalents avec si possible deux prêtres pouvant \"ressusciter\" dans chaque groupe. </p><p>2) Installez un groupe au Sud-Ouest (<b>1er groupe/Sud</b>) de la pièce, et un autre au Nord-Est (<b>2ème groupe/Nord)</b>, </p><p>3) Activez Korès en lui parlant (cela vous coûtera 10 sources d'énergie) et commencez à l'attaquer (au sort mental).<br>Après quatre auras vertes, cachez vous derrière un mur pendant la 5ème violette. Puis recommencez jusqu' à l'invocation des squelettes. </p><p>4) Après la 4ème série d'auras, les squelettes apparaissent. Sans attendre, </p><ul><li>le <b>1er groupe cours au Sud</b> pour tuer le squelette Sud. Pendant ce temps, un des membres du groupe court à l'Est et fait descendre le squelette Est vers le Sud, là ou est le 1er groupe.</li> <li>Le <b>2ème groupe tuera le squelette Nord en premier</b>, pendant qu'un membre du groupe ira chercher celui à l'Ouest et le fera remonter.</li></ul><p>Dépêchez vous car pendant ce temps Korès se régénère! </p><p>Cette méthode évite de passer dans la zone de danger pour aller chercher le 2ème squelette. </p><p>5) Enfin quand vous aurez tué les guerriers squelettes dont vous êtes chargés, retournez à votre poste de départ. Attaquez Korès s'il n'est pas en train de faire sa 5ème aura (violette) et si tous les guerriers squelettes sont morts. Continuez ainsi jusqu'à l'achever. </p>",
        "images": [],
        "order": 5
      },
      {
        "title": "Pour obtenir la récompense",
        "description": "<p>Une fois mort Korès laisse place à un PNJ inoffensif (Essence spirituelle de Korès...) qu'il faut tuer. C'est ce PNJ qui drop les items, donc c'est sur lui que chacun devra faire ses 5% de dégâts. </p><p>Si le groupe est discipliné, prenez le temps de vous équiper en chance avant de l'attaquer. </p>",
        "images": [],
        "order": 6
      },
      {
        "title": "Les drops des quatre super boss",
        "description": "<p>Quaran/Tarnian (le plus facile) : Plume du chapeau de Quaran, Joyau reluisant, potions. </p><p>Octrael/Edgar (il faudra le tuer deux fois) : Symbole du vaillant, Couteau du collecté, potions, crâne fêlé (nouveau), cendres sanctifiées (nouveau). </p><p>Arkélise/Moonrock (ciblez les invoc quand elles apparaissent) : Symbole de piété, Calice sacré, potions. </p><p>Korès/Araknor : Livre de sorts de l'apprenti, Relique d'un autre temps, Fiole de démolécularisation supérieure, potions. </p><p> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> </p>",
        "images": [],
        "order": 7
      }
    ],
    "credits": [
      "T4C NMS Révolution wiki",
      "La vid"
    ]
  },
  {
    "title": "Quêtes bonnes Arakas et accès bon RD",
    "slug": "quetes-bonnes-arakas-et-acces-bon-rd",
    "zone": "Arakas",
    "prerequisites": [],
    "rewards": [],
    "npcs": [],
    "gold": "",
    "steps": [
      {
        "title": "Quête de la lettre du marchand",
        "description": "<p>Il faut être au moins niveau 5 pour pouvoir débuter cette quête. Allez voir Kirlor Dhul à la banque de Lighthaven (au sud-est du temple). Dites lui \"<b>Travail</b>\", \"<b>inscrire</b>\". Il vous demandera si vous voulez vous inscrire. Répondez <span class=\"npc-keyword\">\"<b>Oui</b>\"</span> et il vous donnera une lettre que vous devrez donner à l'un des deux marchands de Lighthaven. Si vous décidez d'aller voir Sigfried vous gagnerez des points d'expérience et si vous allez voir Rolph vous obtiendrez de l'or. Dans les deux cas, allez voir l'un des marchands et dites lui \"<b>Lettre</b>\". Il vous donnera un rapport que vous devrez remettre au Bourgmestre Sunrock à Windhowl. </p><p>Attention: cette quête est chronométrée, allez directement à Windhowl. </p><p>Arrivé à Windhowl, allez voir le bourgmestre Sunrock (il est dans une maison au nord-ouest de l'entrée du temple). Dites lui \"<b>Rapport</b>\" et il vous remerciera en vous offrant des points d'expérience ou de l'or. </p><p><b>Note:</b> Vous pouvez effectuer cette quête une fois avec Rolph et une fois avec Sigfried. </p><p><b>PNJs concernés</b>: Kirlor Dul, Sigfried / Rolph, Bourgmestre Sunrock </p><p><b>Récompenses obtenues:</b> 750 pièces d'or (si vous choisissez Rolph) ou 6000 points d'expérience (si vous choisissez Sigfried) </p>",
        "images": [],
        "order": 0
      },
      {
        "title": "La quête de l'épée du chaos",
        "description": "<p>Si vous avez commencé la quête du marché noir mais que vous êtes pris de remords, vous pouvez toujours revenir sur le droit chemin. Après avoir été accusé de trahison par le Bourgmestre Sunrock, allez voir Asarr. Il s'excusera - car le Bourgmestre Sunrock a appris la trahison- et il vous demandera si vous voulez vous défiler. Répondez <span class=\"npc-keyword\">\"<b>Oui</b>\"</span> et il vous donnera un coffret remplie de diamant. Ramenez le au Bourgmestre Sunrock et dites lui \"<b>Marchandise</b>\". Il vous pardonnera et vous donnera l'épée du chaos. </p><p><b>PNJs concernés</b>: Assar, Bourgmestre Sunrock </p><p><b>Récompense obtenue:</b> L'épée du chaos (53 For) </p>",
        "images": [],
        "order": 1
      },
      {
        "title": "La quête du diamant",
        "description": "<p>Trouvez le coffre près du Bourgmestre Sunrock. Ouvrez le et prenez le diamant. Dites lui \"<b>Diamant</b>\", \"<b>Oui</b>\". Il vous remerciera et vous donnera 400 pièces d'or. </p><p><b>Note</b>: Vous pouvez effectuer cette quête à volonté </p><p><b>PNJ concerné:</b> le Bourgmestre Sunrock </p><p><b>Récompense obtenue:</b> 400 pièces d'or </p>",
        "images": [],
        "order": 2
      },
      {
        "title": "Tuer Balork",
        "description": "<p>Au niveau -4 du temple de Lighthaven, se trouve le démon Balork. Tuez le (+4 en karma) et il vous maudira en mourant (vous aurez la marque de Balork). </p>",
        "images": [],
        "order": 3
      },
      {
        "title": "Le vieil ermite",
        "description": "<p>Allez voir le vieil ermite (en passant par la cave des brigands proche du sud d'Arakas) et dites lui \"<b>confiance</b>\". Il vous dira que vous devez gagner sa confiance et vous enverra voir sa fille Mirak Nira (près de l'entrée du temple de Windhowl). </p>",
        "images": [],
        "order": 4
      },
      {
        "title": "La fille de l'ermite Mirak Nira",
        "description": "<p>Parlez lui et sans vous décourager dites-lui <i><u>trois fois</u></i> de suite \"<b>vieil ermite\"</b> puis \"<b>confiance</b>\". Pour gagner sa confiance, vous devrez tuer 100 gobelins (les gobelins tués auparavant ne sont pas pris en compte). </p>",
        "images": [],
        "order": 5
      },
      {
        "title": "Les 100 gob's",
        "description": "<p>Allez au camp des gobelins (meilleur endroit pour trouver des gobelins) et tuez en 100. Si vous êtes déjà assez fort, allez tuer des shamans gobelins ainsi vous pourrez xp rapidement en même temps. </p>",
        "images": [],
        "order": 6
      },
      {
        "title": "Retour chez Mirak Nira",
        "description": "<p>Retournez voir Mirak Nira et dites lui \"<b>confiance</b>\". Elle vous donnera un anneau de dynamisme (+8 en karma). </p><p><b>Attention:</b> N'équipez pas l'anneau. Je ne sais si c'est un (ancien) bug, mais si vous le mettez, le vieil ermite n'en voudra plus et vous ne pourrez plus faire les quêtes bonnes. </p>",
        "images": [],
        "order": 7
      },
      {
        "title": "Retour chez le vieil ermite",
        "description": "<p>Retournez voir le vieil ermite (en passant par la cave des brigands) et dites lui \"<b>confiance</b>\". Il prendra l'anneau et vous donnera une amulette de précision et 4000 points d'expérience. Dites-lui \"<b>Miracle</b>\", \"<b>sorcellerie</b>\" et il vous parlera d'un mage du nom de Liurn Clar qui vit à Windhowl. </p>",
        "images": [],
        "order": 8
      },
      {
        "title": "Liurn Clar (tour des mages de Windhowl)",
        "description": "<p>Repartez pour Windhowl et trouvez Liurn Clar (à la tour des mages). Dites <span class=\"npc-keyword\">\"<b>téléporter</b>\"</span> et suivez les instructions. Il vous demandera 100 pièces d'or multiplié par votre niveau et il vous demandera aussi de signer quelques papiers (Comme quoi il n'est pas responsable de ce qui pourrait vous arriver durant votre voyage... c'est rassurant). Dites <span class=\"npc-keyword\">\"<b>envoyer</b>\"</span>, \"<b>conditions</b>\", \"<b>formulaire</b>\", \"<b>payement</b>\" , \"<b>oui</b>\" (vous devez être au moins niveau 25) et il vous téléportera à la fontaine de Silversky (pensez à mettre votre sanctuaire à Silversky en arrrivant). </p><p>Et poursuivez votre aventure à l'aide du Guide Raven's Dust </p><p><b>PNJs concernés:</b> le vieil ermite, Mirak Nira, Liurn Clar </p><p><b>Mini-Boss concerné:</b> Balork </p><p><b>Récompenses obtenues:</b> </p><ul><li>Amulette de précision (27 Int, 26 Sag)</li> <li>4000 points d'expérience</li> <li>Accès à Raven's Dust</li></ul><p> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> </p>",
        "images": [],
        "order": 9
      }
    ],
    "credits": [
      "T4C NMS Révolution wiki"
    ]
  },
  {
    "title": "Quêtes maléfiques Arakas et accès maléfique RD",
    "slug": "quetes-malefiques-arakas-et-acces-malefique-rd",
    "zone": "Arakas",
    "prerequisites": [],
    "rewards": [],
    "npcs": [],
    "gold": "",
    "steps": [
      {
        "title": "Accès RD maléfique",
        "description": "<p>La présentation de la quête d’accès maléfique à RD est organisée de manière chronologique pour en faciliter l'exécution. </p>",
        "images": [],
        "order": 0
      },
      {
        "title": "-1 La quête du marché noir (Partie 1) (prévoyez 2 levels pour la terminer)",
        "description": "<p><b>Préalable :</b> Il faut être au moins niveau 5 pour pouvoir débuter cette quête nécessaire à l'accès maléfique. </p><p>- Allez voir Kirlor Dhul à la banque de Lighthaven, à côté de l'HDV. </p><p>- Dites-lui \"<b>Travail</b>\", \"<b>Inscrire</b>\", \"<b>Oui</b>\" et il vous donnera une lettre pour l'un des deux marchands de Lighthaven. </p><p><b>Note :</b> Si vous décidez d'aller voir Sigfried vous gagnerez des points d'expérience. Si vous allez voir Rolph vous obtiendrez de l'or. </p><p>- Dites <span class=\"npc-keyword\">\"<b>Lettre</b>\"</span> au marchand de votre choix, Il vous donnera un rapport à remettre au Bourgmestre Sunrock à Windhowl. </p><p><b>Attention :</b> Cette partie de la quête est chronométrée, donc ne traînez pas en route. </p><p>- Au lieu d'aller à Windhowl, allez à la ville des voleurs en passant par la cave des brigands et de l’ermite (2205,1464) et trouvez Asarr. </p><p>- Dites-lui \"<b>Rapport</b>\". Il vous remerciera et vous demandera d'aller transmettre le rapport au Bourgmestre Sunrock. </p><p>- Rendez-vous à Windhowl. Trouvez le Bourgmestre Sunrock dans une maison à l'Ouest de l'entrée du temple. </p><p>- Dites-lui \"<b>Rapport</b>\", il vous remerciera. </p><p>Fin du chronométrage. </p><p>Gagnez maintenant deux niveaux. </p><p><b>PNJs concernés :</b> Kirlor Dul, Sigfried ou Rolph, Sunrock, Asarr </p><p><b>Récompenses obtenues :</b> 750 pièces d'or ou 6000 points d'expérience </p>",
        "images": [],
        "order": 1
      },
      {
        "title": "-2 La quête du marché noir (Partie 2)",
        "description": "<p><b>Préalable :</b> Vous devez avoir gagné deux niveaux après avoir remis le rapport à Sunrock. </p><p>- Retournez voir Sunrock. </p><p>- Parlez-lui et il vous accusera de trahison. </p><p><b>Note :</b> Si vous faites la quête du diamant à ce moment-là, il vous pardonnera. Donc si vous voulez continuer sur les quêtes maléfiques ne faites pas cette quête ! </p><p>- Retournez voir Asarr dans la ville des voleurs. Il s'excusera car le Bourgmestre Sunrock a appris la trahison et il vous demandera si vous voulez vous défiler. </p><p>- Dites-lui \"<b>non</b>\" (karma -17) et il vous dira de contacter le fouineur. </p><p><b>Note :</b> Si vous changez d’avis et répondez <span class=\"npc-keyword\">\"oui\"</span>, Asarr vous donnera un coffret à remettre à Lord Sunrock, le Bourgmestre de Windhowl. Dites-lui \"marchandises\" et il vous pardonnera et vous donnera une épée du Chaos. Mais vous avez répondu non, alors tout va bien… </p><p>- Trouvez le fouineur à Windhowl <b>oui</b>\" (-19 en karma) et il vous dira de revenir le voir de temps en temps car il aura d'autres missions pour vous. </p><p>- Dites-lui \"<b>Mission</b>\", il vous demandera de l’aider à retrouver une vieille amie à lui : Shadeen. </p><p>- Répondez <span class=\"npc-keyword\">\"<b>oui</b>\"</span>, \"<b>Raven's Dust</b>\". Il vous dira de chercher un sorcier puissant. </p><p>- Allez à Windhowl, trouvez Liurn Clar dans la tour des mages à côté de la maison du Bourgmestre. </p><p>- Dites-lui \"<b>Téléporter</b>\". Il vous dira que le Bourgmestre Sunrock ne l'autorise pas à vous aider mais vous conseillera d'aller voir un Orc au Nord. </p><p><b>PNJs concernés</b> : Kalastor, Balork, Liurn Clar </p>",
        "images": [],
        "order": 3
      },
      {
        "title": "-4 La quête de l'épée de la nuit",
        "description": "<p>- Allez chercher une épée de fureur sur les généraux gobelins devant l'entrée de la cave Jarko ou au niveau -3 de cette cave (ou dans un coffre de guilde !). </p><p>- Trouvez Jagar Kar dans la salle d’armes en face de l’entrée du temple de Lighthaven. </p><p>- Dites-lui \"<b>épée de fureur</b>\", il vous dira qu’il échangerait une épée de la nuit contre une épée de fureur si vous en avez une. </p><p>- Répondez <span class=\"npc-keyword\">\"<b>oui</b>\"</span> pour effectuer l’échange. </p><p><b>Note :</b> Vous pouvez effectuer cette quête à volonté. </p><p><b>PNJ concerné:</b> Jagar Kar </p><p><b>Récompense obtenue:</b> Epée de la nuit (65 For, 30 Int, 25 Sag). </p>",
        "images": [],
        "order": 4
      },
      {
        "title": "-5 La quête du grimoire de Jarko (Anneau des ténèbres)",
        "description": "<p>- Allez à la grotte J comme Jarko (1853,265), descendez au niveau - 3 et trouvez Jarko le Nécromancien (1084,106). </p><p>- Tuez-le <u>vous-même</u> et récupérez son grimoire (karma +4). Repop 25 minutes. </p><p>- Trouvez Araknor à Lighthaven, au Nord-Est derrière le temple. </p><p>- Dites-lui \"<b>Jarko</b>\", \"<b>grimoire</b>\", \"<b>oui</b>\" et il vous donnera (il faudra parfois attendre car il n'est bien disposé que toutes les heures) un anneau des ténèbres ou un anneau de confiance et la possibilité d'apprendre votre premier sort de nécromancie. </p><p>Vous devenez son apprenti, ce qui est nécessaire pour pouvoir parler à l'aveugle, plus tard. </p><p><b>Notes :</b> </p><ul><li>Pour tuer plus facilement Jarko si vous êtes guerrier (ou si vous combattez au corps à corps), attendez qu'il soit dans un coin de la pièce et attaquez-le. La plupart de ses invocations apparaîtront de l'autre côté du mur. Si vous êtes un mage, attaquez avec des sorts de terre ou de feu pour le tuer et absorption de vie mineure pour vous soigner.</li></ul><ul><li>Il faudra attendre jusqu'à une heure qu'Araknor veuille bien vous parler si un joueur lui a donné un grimoire depuis moins d'une heure.</li></ul><ul><li>Vous devrez peut-être recommencer si vous n’avez pas obtenu un anneau des ténèbres. N’hésitez pas à demander de l’aide. Les anciens en ont certainement un perdu au fond de leur coffre.</li></ul><p><b>PNJ concerné :</b> Araknor. </p><p><b>Récompense obtenue :</b> Un anneau de confiance (souvent) ou un anneau des ténèbres (parfois). </p>",
        "images": [],
        "order": 5
      },
      {
        "title": "-6 La quête du parchemin d'enchantement",
        "description": "<p>Voir Quêtes neutres d'Arakas </p>",
        "images": [],
        "order": 6
      },
      {
        "title": "-7 La quête du Diable (Partie 2)",
        "description": "<p><b><u>Fabrication de la lame obscure</u></b> </p><p><b>Préalable :</b> vous devez être au moins lvl 16 pour que Lance Silversmith considère que vous êtes assez mature pour lui parler. </p><p>Munissez-vous de : </p><ul><li>Une épée de la nuit,</li></ul><ul><li>Un anneau des ténèbres,</li></ul><ul><li>Un parchemin d'enchantement,</li></ul><ul><li>10.000 pièces,</li></ul><p>- Allez voir Lance Silversmith, au Nord-Est du camp gobelins (2586,691) </p><p>- Dites-lui \"<b>lame obscure</b>\", \"<b>fabriquer une lame obscure</b>\". Vous recevez la lame et 300 000 points d’expérience. </p><p><b><u>Obtention du parchemin d’accès à Raven’s Dust</u></b> </p><p><b>Préalable :</b> vous devez avoir atteint le lvl 25 pour pouvoir obtenir le parchemin de Silversky </p><p>- Retournez à la grotte J (1853,265) au niveau - 3 et trouvez le chef orc renégat (1065,273). </p><p>- Dites-lui \"<b>téléportation</b>\", \"<b>papiers griffonnés</b>\" , \"<b>oui</b>\" et il vous donnera un parchemin de Silversky. </p><p>- Activez le parchemin et il vous téléportera à la fontaine de Silversky. </p><p><b>Note :</b> Pensez à mettre votre sanctuaire à Silversky en arrivant. </p><p><b>PNJs concernés</b> : Le chef orc renégat, Lance Silversmith </p><p><b>Récompenses obtenues</b> 300 000 points d’expérience, parchemin de Silversky </p><p><b>Bravo !!! vous êtes sur Raven's Dust.</b> </p>",
        "images": [],
        "order": 7
      },
      {
        "title": "La quête de la lame démoniaque",
        "description": "<p><b>Cette quête est facultative</b>. Elle est peu utile et de plus nécessite des items RD. (Facultatif) </p><p>Il faut être au moins niveau 16 avant de pouvoir commencer cette quête. Allez voir Lance Silversmith (dans une maison au Nord-Est du camp gobelins). Dites lui \"Lame démoniaque\" et il vous demandera : </p><ul><li>1 parchemin d'enchantement obtenue à la quête du parchemin d'enchantement. (voir Quêtes neutres d'Arakas)</li> <li>1 épée du chaos obtenue par la quête de l'épée du chaos, ou en tuant des pillard des dunes.</li> <li>1 crâne de démon obtenu en tuant Griroesh, situé non loin de Jarko.</li> <li>1 collier de coeur noir obtenu en tuant Bane Gwengad (RD, île de Bane).</li> <li>8.000 pièces d'or.</li></ul><p>Une fois que vous aurez obtenu ces ingrédients, retournez voir Lance Silversmith et dites lui \" fabriquer lame démoniaque\". </p><p>Note: Vous pouvez effectuer cette quête à volonté. </p><p><b>PNJ concerné</b>: Lance Silversmith </p><p><b>Récompense obtenue</b>: lame démoniaque (213 For) bof... </p><p> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> </p>",
        "images": [],
        "order": 8
      }
    ],
    "credits": [
      "T4C NMS Révolution wiki"
    ]
  },
  {
    "title": "Accès Raven's Dust Déchu",
    "slug": "acces-ravens-dust-dechu",
    "zone": "Raven's Dust",
    "prerequisites": [],
    "rewards": [],
    "npcs": [],
    "gold": "",
    "steps": [
      {
        "title": "Accès déchu à Raven's Dust",
        "description": "<p>Vous devez être déchu pour réaliser cette quête. </p><p>Pour commencer, sachez qu'il est inutile de débuter la quête avant le level 25. </p><p>Allez voir <b>Muffin</b> (un Kobold dans la cave de l'île des Démonicons) dites lui \"travail\" \"guider\" puis \"service\". </p><p>Allez parler à <b>Delvar Dorndir</b> (près de la montagne au Sud-Ouest du camp gobelin), dites lui \"potion\" et \"oui\".<br>Retournez voir <b>Muffin</b>, dites lui \"Service\", \"aider\" et \"avancer\". </p><p>Tuez les deux dragons d'Arakas Dasrinn et Dimith. L'un se trouve au nord de la cave située sur l'île des kraaniens et l'autre se trouve après le labyrinthe près du village des nains. </p><p>De retour chez notre ami <b>Muffin</b>, dites lui \"avancer\", \"continuer\", \"îles\" et \"matériel\". Il vous enverra chercher : </p><ul><li>un anneau d'or (quête de Jarko, chef de guerre gobelin, assassin...)</li> <li>une cotte de mailles bénie</li> <li>un scalpel de chirurgien</li></ul><p>Muni de ces objets redites lui \"matériel\", \"continuer\" et il vous donnera un parchemin d'accès à SilverSky. </p><p>Une fois arrivé à Silversky, parlez rapidement à <b>Porcine Citre</b> oui\". Cela fixera votre sanctuaire dans l'enclos des cochons!! </p><p> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> </p>",
        "images": [],
        "order": 0
      }
    ],
    "credits": [
      "T4C NMS Révolution wiki"
    ]
  },
  {
    "title": "La lettre de Crimsonscale",
    "slug": "la-lettre-de-crimsonscale",
    "zone": "Arakas",
    "prerequisites": [],
    "rewards": [],
    "npcs": [
      "l'ermite Antonian",
      "Aquinos",
      "le Barde sans Nom",
      "un gardien",
      "Crimsonscale",
      "Custodian",
      "les 4 savants (the 4 Scholars)",
      "les 3 bibliothécaires (the 3 Librarians)",
      "Olin Haad",
      "Grand Prêtre Gunthar",
      "Efnisien",
      "Ramirgo",
      "Lothar",
      "Le Gardien Draconis",
      "la Gitane"
    ],
    "gold": "",
    "steps": [
      {
        "title": "La lettre de Crimsonscale",
        "description": "<p>C’est une quête immense qui se déroule en 3 parties: Arakas, Raven’s Dust, puis le dénouement s’effectue sur Arakas. </p><p>Elle est très intéressante par l'XP qu'elle donne (principalement sur Arakas) et par certains des items offerts (comme l'amulette de renouveau si vous êtes lanceur de sorts). </p><p>Si vous pensez renaître vous pouvez vous arrêter au Barde (pour l'xp donnée et l'accès au Mausolée - ou vous pourrez faire beaucoup d'xp, surtout en prêtre lumière) ou à la Bibliothèque (pour l'xp seule car le bracelet de flammes donné par le Dragon Crimsonscale est supprimé sur NMS). </p><p><b>Tip</b> : Petits indices pour savoir ou vous en êtes dans la quête si vous l'avez commencée il y a un bout de temps :-)) </p><p>La tablette de pierre runique, la gemme sombre et la Caledbolg sont supprimées aux renaissances. Il est impossible de supprimer la Caledbolg donc si vous avez la gemme sombre et pas la Caledbolg, il y a des chances que vous en soyez aux adorateurs (désert RD) ou peu avant. Si vous avez la Caledbolg, allez parler au Grand Prêtre de LH puis à Efnisien. </p>",
        "images": [],
        "order": 0
      },
      {
        "title": "ARAKAS",
        "description": "",
        "images": [
          "/t4c-nms-overview/assets/quests/la-lettre-de-crimsonscale/img_1_0.jpg",
          "/t4c-nms-overview/assets/quests/la-lettre-de-crimsonscale/img_1_0.jpg"
        ],
        "order": 1
      },
      {
        "title": "Kilhiam au temple de Lighhaven",
        "description": "<p>Allez au temple de Lighthaven et parlez à Kilhiam. Elle vous donnera une lettre (double clic dans l’inventaire) qui dit ceci: </p><p>\"Chère ami(e), vous trouverez cette lettre un peu bizarre, veuillez m’en excuser mais le problème est de la plus grande importance et avant que commence votre journée, je voudrais que vous compreniez parfaitement la situation dans laquelle nous avons été forcés d’entrer. Depuis ce jour, votre vie ne sera plus jamais la même. Je ne peux pas tout expliquer dans cette lettre, mais je vous recommande fortement d’aller voir celui que l’on nomme Efnisien. Il habite à l'étage d'une petite maison située à l’est du temple de Lighthaven. Rencontrez-le et il vous expliquera ce que vous devez connaître.\" </p>",
        "images": [],
        "order": 2
      },
      {
        "title": "Efnisien et ses gardes",
        "description": "<p>Dirigez-vous vers la maison d’Efnisien située à l'Est de la banque de Lighthaven et montez à l'étage. Dès que vous cliquez sur lui, 3 assassins apparaissent. Tuez-les et cliquez à nouveau sur Efnisien. Dites <span class=\"npc-keyword\">\"Gardes\"</span>, \"Assassins\", \"Olin Haad\", \"Siège de la ville\", \"Quelque chose\", \"Services\", \"Refusé\", \"Visite\", \"Lettre\" et vous en apprendrez sur Olin Haad et le cœur de pierre. Efnisien mentionne également que vous devez aller parler à Olin Haad mais que, si vous voulez que ce dernier vous porte attention, vous devez donnez une raclée à ses gardes ! </p>",
        "images": [],
        "order": 3
      },
      {
        "title": "Le château d'Olin Haad",
        "description": "<p>Dites <span class=\"npc-keyword\">\"Adieu\"</span>, dirigez vous vers la grotte (cave) de Lighthaven (au sud-ouest de la fontaine), entrez-y et trouvez le château d’Olin Haad (attention aux gardes, une bénédiction - même si c'est seulement celle de Zélina du temple - sera la bienvenue). Cliquez sur la porte du château et vous serez téléporté à l’intérieur. Suivez le tapis rouge et vous trouverez Olin Haad. Essayez de discuter avec lui. Il va refuser, ressortez et tuez environ 20 de ses gardes. </p><p>Puis retournez lui parler. Dites <span class=\"npc-keyword\">\"Chercher\"</span>, \"Combat\" et vous serez téléporté dans une pièce avec 4 Gardes d’Elite d’Olin Haad. LAISSEZ-VOUS TUER ! Ils ne mourront qu’en essayant de vous tuer ! Vous serez re-téléporté (tout rouge, avec 5% de vos PV, mais vous ne serez PAS mort) aux côtés d’Olin Haad. A ce point de la quête, vous recevrez l’aura Colère des Anciens (Wrath of the Ancients), un sort de protection permanent qui blesse de temps à autre les ennemis qui vous attaquent. Continuez le dialogue avec Olin Haad, en disant : <span class=\"npc-keyword\">\"Ils\"</span>, \"Haruspice\", \"Prophétie\", \"Graines\", \"Moi\", \"Nouvelle race\", \"Réponse\" et vous apprendrez des choses au sujet de la prophétie. Olin Haad mentionnera également que vous devez trouver le Grand Prêtre Gunthar et le prévenir qu’il ne pourra quitter Lighthaven en paix, tant qu'il n'aura pas rendu ce qu’il a promis. </p>",
        "images": [
          "/t4c-nms-overview/assets/quests/la-lettre-de-crimsonscale/img_4_0.jpg"
        ],
        "order": 4
      },
      {
        "title": "Grand prêtre Gunthar (au temple, sous-sol derrière le trône)",
        "description": "<p>Retournez au temple de Lighthaven (utilisez votre gemme de téléportation, c'est plus rapide) et cliquez sur la porte derrière le trône. Vous serez téléporté dans la petite pièce. Descendez dans le donjon et trouvez le Grand Prêtre Gunthar. Dites-lui \"Demandes\", \"Pierre\", \"Marchand\", \"Attendez\", \"Nécromancien\", \"Corrupteurs de Gluriurl\", \"Bataille des émanations\", \"Faucheurs de vie\", \"Dragons\", \"Complètement\", \"Theodore XIII\", \"Pierre du coeur\" et vous apprendrez au sujet du culte de Gluriurl, du Cœur de pierre, et de la vente de celui-ci à un marchand. Maintenant dites <span class=\"npc-keyword\">\"Oui\"</span> afin d’accepter d’aider Gunthar à trouver le Cœur. Dites <span class=\"npc-keyword\">\"Regarder\"</span> et il vous dira de chercher à Windhowl. </p><p>Vous recevez également 1.000 pièces d’or et 10.000 xp. </p><p>Continuez le dialogue en disant <span class=\"npc-keyword\">\"Nomade\"</span> et vous parlera du signe du marchand. </p>",
        "images": [],
        "order": 5
      },
      {
        "title": "A Windhowl (Ethan, Urik, maison du Nomade)",
        "description": "<p>Rendez vous à Windhowl. </p><p>Cherchez la maison de la guilde des Marchands située à gauche du marchand d’armes. Trouvez Ethan chef de la guilde des Marchands et dites-lui \"Nomade\", \"Raté\", \"Agressif\", \"Affaire\", \"Pierre du Cœur\" et il vous parlera un peu plus du Nomade et des marchands. Dès que vous lui aurez parlé de la Pierre du Cœur, il vous dira qu’il a un problème et qu’il ne peut plus perdre son temps avec vous. Dites <span class=\"npc-keyword\">\"Problème\"</span>, \"Taxes\" et il vous parlera des dettes d’Urik le Maître tailleur. Dites <span class=\"npc-keyword\">\"Mercenaires\"</span>, \"Tâche\" et \"oui\", acceptez d’aider Ethan à récupérer l’argent qu’Urik lui doit. </p><p>Retournez vers la maison d’Urik, située sous la taverne de Windhowl. Montez à l'étage et parlez à Urik. Dites-lui \"Idiot\", \"Discuter\", \"Affaire\". Il refusera de vous donner l’argent qu’il doit et appellera en renfort 3 voleurs. Mettez les au tapis et reparlez à Urik. Il vous donnera alors 1.000 pièces d’or et l’argent de ses dettes. </p><p>Retournez à la Guilde des Marchands et parlez de nouveau à Ethan. Cliquez sur lui, dites-lui \"Argent\" et il prendra son dû. </p><p>Vous recevez quant à vous 40.000 xp. </p><p>Dites-lui maintenant \"Nomade\", \"Leçon\", \"Suspecte\", \"Confrerie Obsidienne\", \"Aider\" et il vous dira qu’il suspecte qu’Urik et le Nomade travaillent ensemble. Dites <span class=\"npc-keyword\">\"Clefs\"</span> et il vous donnera un lot de clés qu’il a dérobé chez Urik. Il mentionnera également qu’une de ces clés ouvrirait peut-être la maison du Nomade. Dites <span class=\"npc-keyword\">\"Demeure\"</span> et il vous indiquera où se situe celle-ci, quelque part au sud de la ville. </p><p>Dirigez-vous vers le sud-ouest et cherchez la maison du Nomade. Elle est située à côté des remparts. Cliquez sur la porte, la clé disparaîtra et vous serez téléporté à l’intérieur de la maison. Montez au premier étage et commencez à ouvrir les 4 coffres (faites Ctrl+n pour voir les coffres). Dans un des coffres, vous trouverez une petite clé. Cliquez à nouveau sur le coffre et vous trouverez, cachées dans un double fond, 1.000 pièces d’or. Montez au deuxième étage et ouvrez les deux coffres. Dans l’un des deux, vous trouverez la lettre d’Owain. </p><p>La lettre dit (double clic dans l’inventaire): </p><p>\"Cher Nomad, </p><p>Nous avons finalement trouvé la grotte maudite que vous avez recherchée tant d’années. La semaine dernière, j’ai envoyé une équipe afin de retrouver la relique que vous aviez demandée mais ils ne sont jamais revenus… J’en ai parlé avec Urik, et il me força à envoyer une deuxième équipe, dont seulement un seul hommes est revenu, les bras rongés ! J’arrête. Vous ferez ce que vous voulez mais je n’envoie plus personne dans cette place damnée. J’attendrai au camp des Druides au Nord-Est d’Arakas dix jours. Si pour n’importe quelle raison, j’y apprends que vous amenez Urik avec vous, ou si vous ne venez pas, je partirais. </p>",
        "images": [
          "/t4c-nms-overview/assets/quests/la-lettre-de-crimsonscale/img_6_0.jpg"
        ],
        "order": 6
      },
      {
        "title": "Le commandant Owain au camp des druides d'Arakas",
        "description": "<p>Traversez entièrement Arakas pour vous dirigez vers l’Ordre de la Nature (Camp des Druides au Nord-Est d'Arakas) et trouvez Yrian Holenarbed situé dans une maison à l’Est de Stonehenge. Parlez-lui et il vous demandera si vous êtes le voyageur envoyé par les vents afin de l’aider. Dites <span class=\"npc-keyword\">\"Oui\"</span>, \"Etat\", \"Voyageur\", \"Malheurs\", \"Odeur\", \"Resistance\", \"Nomade\" et vous apprendrez la disparition du Grand-père et la nausée causée par le Nomade. Continuez le dialogue en disant <span class=\"npc-keyword\">\"Bâton\"</span>, \"Commandant\" et vous apprendrez qu’il pourrait guérir cette nausée s’il avait le Sceptre de Solinae, mais le Nomade a ordonné à son Commandant de prendre ce sceptre. Il soulignera également que les troupes du Nomade sont stationnées au sud-est du camp des Druides à proximité de la rivière. </p><p>Dirigez-vous donc vers le Sud-Est, trouvez et tuez le commandant Owain (et, si vous le pouvez, ses serviteurs, les soldats d’Olin Haad). </p><p><b>Attention:</b> Le commandant Owain et ses soldats sont difficiles à bas niveau. Trouvez un ami qui peut vous aider ou soyez sûr de transporter beaucoup de potions de guérison ! </p><p>Une fois le commandant Owain mort, le sceptre de Solinae apparaît dans votre inventaire. Retrouvez Yrian Holenarbed et cliquez sur lui. Yrian prendra le Sceptre. </p><p>Vous recevrez 75.000 xp. </p><p>Dites-lui \"Nomade\" et il vous dira que le Nomade recherchait une crypte. Dites <span class=\"npc-keyword\">\"Crypte\"</span> et il vous parlera d’une route menant au temple située à proximité d’un campement quelque part à l’ouest. Vous recevrez également l’anneau gardien de vitalité et la gemme de vitalité (Guardian Ring of Vitality et Gem of Vitality). Equipez l'anneau et faites une macro avec la gemme (voyez ici comment faire). </p>",
        "images": [
          "/t4c-nms-overview/assets/quests/la-lettre-de-crimsonscale/img_7_0.jpg"
        ],
        "order": 7
      },
      {
        "title": "La gitane",
        "description": "<p>Dirigez-vous vers le campement de Gypsy la Gitane, situé au sud-est du pont allant en direction des grottes de la Vallée Maudite (en venant du Sud, une fois passé le pont à l'ouest de l’île aux démonicons, tournez immédiatement à gauche puis dès que vous le pouvez dirigez vous vers le nord). Trouvez la Gitane et parlez-lui. Dites <span class=\"npc-keyword\">\"Voyageur\"</span>, \"Voyante\", \"Nomade\" et elle vous dira qu’elle vous aidera à trouver le Nomade. Avant cela, elle vous posera quelques questions afin qu’elle s’harmonise avec votre aura. Répondez <span class=\"npc-keyword\">\"Oui\"</span>, \"Oui\", \"Donneur de vie\" et elle vous dira qu’il se trouve dans un ancien temple d’une divinité morte nommée Gluriurl. Ce temple se situe sur une île séparée de la terre ferme. Afin d’atteindre cette île, vous devez traverser une grotte se situant au nord. </p>",
        "images": [],
        "order": 8
      },
      {
        "title": "La crypte du nomade (le coeur et le sang de Gluriurl)",
        "description": "<p><b>La crypte du Nomade</b> </p><p> Entrez-y et continuez vers le Nord. Méfiez vous du Kraanien, il fait 200 pv de dégâts par coup qu'il vous porte. Poursuivez jusqu’à l’autel. La, vous verrez un portail et deux tourbillons. </p><p><b>La tombe du Déchu : Le coeur de Gluriurl</b> </p><p>Entrez dans le tourbillon de droite dans la cave des coeurs corrompus. Marchez vers le Nord et vous arriverez à la tombe du Déchu. Cherchez les guerriers Déchus, situés au nord de la crypte. Tuez-les jusqu’à ce qu’ils laissent tomber un cœur corrompu (à petit niveau faites vous aider). Ramassez-le et entrez dans le portail derrière eux. Vous serez à nouveau téléporté à côté de l’autel. </p><p><b>La cave de la corruption : le sang de Gluriurl</b> </p><p>Entrez maintenant dans le tourbillon de gauche et vous arriverez à la cave de la corruption. Allez vers l'ouest pour trouvez le puits portant l'inscription \"ici repose le sang de Gluriurl\", cliquez dessus et vous collecterez le sang de Gluriurl dans une bouteille (cette partie est difficile, être béni et rempli de potions est conseillé à bas level). Entrez enfin dans le portail et vous vous retrouverez de nouveau à proximité de l’autel. </p><p>Touchez l’autel et le cœur de Gluriurl commencera à battre, obligeant le portail à miroiter en retour. Plongez dedans et votre vision se brouillera pendant un court moment… </p><p><b>La crypte des pierres sombres</b> </p><p>En passant le portail vous arriverez à la Crypte des pierres sombres. Allez vers le nord-ouest et vous trouverez une cage thoracique. Touchez-la et vous recevrez la gemme sombre (Darkstone) et le message suivant vous apparaîtra : </p><p>\"Une gemme sombre flotte dans les airs là où le cœur devrait être. Avec grands soins, vous prenez la gemme sombre et la remplacez par le cœur de Gluriurl\". </p><p>La voix de la Gitane résonne alors dans votre tête: [Nom du joueur] ! Vous devriez venir me voir, j’ai quelque chose d’important à vous montrer !\". </p><p>Vous serez récompensé par 125.000 xp. </p>",
        "images": [
          "/t4c-nms-overview/assets/quests/la-lettre-de-crimsonscale/img_9_0.jpg",
          "/t4c-nms-overview/assets/quests/la-lettre-de-crimsonscale/img_9_0.jpg",
          "/t4c-nms-overview/assets/quests/la-lettre-de-crimsonscale/img_9_0.jpg",
          "/t4c-nms-overview/assets/quests/la-lettre-de-crimsonscale/img_9_0.jpg",
          "/t4c-nms-overview/assets/quests/la-lettre-de-crimsonscale/img_9_0.jpg"
        ],
        "order": 9
      },
      {
        "title": "Retour chez la gitane",
        "description": "<p>Retournez voir la Gitane et parlez-lui. Elle mentionnera qu’elle ressent la présence du coeur maléfique sur vous. Dites <span class=\"npc-keyword\">\"Coeur maléfique\"</span>, \"Rêves\", \"Cadavre délabré\", \"Plan\", \"Sacrifice\" et vous en apprendrez plus au sujet de la pierre noire maudite, les rêves étranges de la Gitane et votre nouvelle tâche. Vous devez rapporter la pierre noire au temple d’Arthek à Lighthaven. Dites <span class=\"npc-keyword\">\"Quelque chose\"</span> et elle vous offrira (selon votre choix) : </p><p>- Amulette de Renouveau et Gemme de Renouveau (indispensable aux lanceurs de sorts) (Amulet of Renewal and the Gem of Renewal) </p><p>- Amulette de Régénération et Gemme de Régénération (Amulet of Regeneration and the Gem of Regeneration) </p><p>- Carquois de stabilité gris (110 dext, 20 Force) (Trueshot's Quiver) </p><p>Votre choix fait, la Gitane vous conseille de vous rendre rapidement au temple de LightHaven (équipez l'amulette et faites une macro avec la gemme). </p>",
        "images": [],
        "order": 10
      },
      {
        "title": "Le chef des brigands Gorlok Bloodaxe",
        "description": "<p>Rendez-vous au temple de Lighthaven (utilisez la gemme de téléportation). Tentez de prendre la porte menant au grand Prêtre Gunthar : </p><p>La porte est fermée mais il y a un message dessus: </p><p>\"[Nom du joueur], je vous prie de bien vouloir m’excuser de ne pas être là pour vous accueillir, mais j’avais quelque affaire urgente à régler. Si vous désirez me rencontrer, parlez au prêtre du temple.\" </p><p>Allez parler avec Frère Kiran. Il vous demandera si vous veniez voir le Grand Prêtre Gunthar. Répondez <span class=\"npc-keyword\">\"Oui\"</span> et il vous dira qu’il a été invité à une réunion avec le chef de son ordre, il semblait qu’il avait quelque sérieuse affaire à régler. Dites <span class=\"npc-keyword\">\"Importantes choses\"</span>, \"Maison du Bourgmestre\" et il vous dira de le chercher dans un grand bâtiment situé à la fin de la rue partant vers le sud-est. Il vous mentionnera Kirlor Dhul, si vous avez des doutes. </p><p>Dirigez-vous vers la banque de Lighthaven et cliquez sur Kirlor Dhul le bourgmestre. Il vous informera au sujet d'une certaine agitation qui a eu lieu dans la rue quelques instants plus tôt. Il vous dira aussi que quelqu’un a peut-être vu ce qui s’est passé. </p><p>Sortez de la banque et cherchez ce quelqu'un qui est une femme nommée Amelia. Cliquez sur elle et elle vous suppliera de ne pas la tuer car elle n’a rien vu. Dites <span class=\"npc-keyword\">\"Tuez\"</span>, \"Eux\" et elle vous dira que six hommes ont attaqué Gunthar. Dites <span class=\"npc-keyword\">\"Brigands\"</span>, \"Ou\" et elle vous dira qu’ils partaient vers le sud-ouest à partir du pont gobelin ouest, à l’extérieur de la ville. </p><p>Dirigez-vous vers le pont de Lighthaven Ouest, et continuez vers l’Ouest jusqu’à ce que vous croisiez un chemin. Continuez sur le chemin vers le Sud et vous arriverez au camp des brigands. </p><p>Mettez au tapis les brigands et finalement Gorlok Bloodaxe (pas facile). Une fois que vous l’aurez tué, le Grand Prêtre Gunthar sera libéré (il apparaîtra à vos côtés). Cliquez sur lui et il vous remerciera. Il vous demandera également si vous avez retrouvé la pierre. Répondez <span class=\"npc-keyword\">\"Oui\"</span> et il vous demandera de vite ramener la pierre à Olin Haad. </p><p>Vous serez récompensé par 200.000 xp. </p><p>Retournez au château d’Olin Haad en passant par la grotte de LH. Cliquez sur ce dernier et dites <span class=\"npc-keyword\">\"Nomade\"</span>, \"Gemme sombre\", \"Pierre du coeur\", \"Ment\". Vous en apprendrez plus au sujet de la Pierre du Coeur et vous serez téléporté à la bibliothèque du château avec 3 gardes privés d’Olin Haad. Tuez-les (en tuer un seul suffit). Ressortez vite fait de la bibliothèque et reparlez à Olin Haad. Il vous enverra voir Gunthar le Grand Prêtre. </p>",
        "images": [
          "/t4c-nms-overview/assets/quests/la-lettre-de-crimsonscale/img_11_0.jpg"
        ],
        "order": 11
      },
      {
        "title": "Retour chez Gunthar au temple",
        "description": "<p>Retrouvez voir Gunthar au sous-sol du temple et dites-lui \"Regarder\", \"Cacher\", \"Dieux\", \"Service\", \"Corps physique\", \"Sacrifiant\", \"Transferer\", \"Sceau\", \"Veritables intentions\" et vous glanerez encore quelques informations au sujet de la Pierre du Coeur. Il vous demandera aussi de rencontrer un ancien ami connu comme étant le Barde sans Nom (Nameless Bard). Il vous dira également que vous devez d’abord parler avec Tarnian situé au sud-ouest du square de Lighthaven, près de la côte. </p>",
        "images": [],
        "order": 12
      },
      {
        "title": "Tarnian",
        "description": "<p>Trouvez Tarnian (vers 2780, 1200) et parlez-lui. Il vous demandera si vous venez de la part de Gunthar. Répondez <span class=\"npc-keyword\">\"Oui\"</span> puis dites <span class=\"npc-keyword\">\"Gemme sombre\"</span>, \"Digne\", \"Gluriurl\", \"Crane\", \"Celui\", \"Fils\", \"Meurtre\", \"Fanatique\", \"Croit\" et il vous donnera une tablette de pierre runique (Runed Stone Tablet ou RST). Dites <span class=\"npc-keyword\">\"Raven's Dust\"</span> et il vous donnera des indications afin de trouver Antonian l’ermite. Il vous apprendra à utiliser la tablette de pierre runique (faites une macro avec la gemme). </p>",
        "images": [],
        "order": 13
      },
      {
        "title": "Antonian l'ermite",
        "description": "<p>Afin de parler à Antonian l’ermite, activez votre macro tablette (RST). Il vous attend dans une maison à l'Est de la tablette de pierre runique d'Arakas, à peu de distance de la crypte d'Arakas. </p>",
        "images": [],
        "order": 14
      },
      {
        "title": "Les 5 nexus",
        "description": "<p>Cliquez sur Antonian et il vous demandera si vous avez la tablette de pierre runique de Tarnian. Répondez <span class=\"npc-keyword\">\"Oui\"</span>, puis \"Tablette de pierre runique\" et vous apprendrez que c’est une pierre de téléportation. Dites <span class=\"npc-keyword\">\"Clin d'oeil\"</span>, \"Prières\", \"Ancestrale\", \"Index d'un nexus\" et vous saurez que pour l’utiliser (pour gagner la tablette de Raven's Dust, mais vous devrez aussi avoir fait l'accès RD au préalable), vous avez besoin d’activer les pierres de connexion. Dites <span class=\"npc-keyword\">\"Lieu\"</span>, \"Emplacement\" et il vous dira que vous pouvez à tout moment utiliser la tablette pour lui rendre visite (cliquer sur la tablette vous téléporte juste à l’ouest d’Antonian l’ermite). A ce moment, il sera tellement absorbé par ses recherches qu’il en oubliera jusqu’à votre présence. Cliquez à nouveau sur lui et dites <span class=\"npc-keyword\">\"Oui\"</span>. Antonian vous donnera alors les indications suivantes : </p>",
        "images": [],
        "order": 15
      },
      {
        "title": "Nexus 1",
        "description": "<p>Voyagez vers le nord au dessus du camp gobelin et cherchez la rivière jusqu’à ce que vous trouviez un pont la traversant. Prenez ce pont et longez la rivière vers l'Est jusqu’à un îlot. Il y a une pierre de connexion tout à l'Est sur cet îlot (attention c'est très chaud...être béni est fortement conseillé). Cliquez sur la pierre et vous obtiendrez le message suivant: </p><p>\"Vous placez la tablette de pierre runique sur la pierre de connexion. La pierre de connexion émet un rayon lumineux qui vient frapper la tablette.\" </p><p>Puis activez rapidement votre tablette de pierre runique (RST) ou votre gemme HDV avant de mourir :))). </p>",
        "images": [],
        "order": 16
      },
      {
        "title": "Nexus 2",
        "description": "<p>Utilisez la tablette afin de retourner voir Antonian l’ermite. Cliquez sur lui, dites <span class=\"npc-keyword\">\"Oui\"</span> et il vous donnera la direction de la 2e pierre de connexion (située sur l'île aux Kraanians) : </p><p>Prenez la route vers le sud et continuez vers le sud-ouest à la première intersection. Peu après, la route tourne vers l’ouest, vous arriverez à un nouveau croisement. Continuez vers le nord, puis vers le nord-ouest et prenez le pont de l'île aux Kraaniens. Une fois traversé, continuez vers le nord et vous trouverez une autre pierre de connexion. </p><p>Suivez les directions et trouvez la 2e pierre de connexion (située au nord une fois le pont des kraanians franchi). Cliquez dessus et vous aurez à nouveau le message (vous pouvez directement allez vers l'ouest puis le Sud pour trouver le 4ème Nexus). </p>",
        "images": [],
        "order": 17
      },
      {
        "title": "Nexus 3",
        "description": "<p>Maintenant, utilisez la tablette afin de retourner voir Antonian l’ermite. Cliquez sur lui, dites <span class=\"npc-keyword\">\"Oui\"</span> et il vous donnera la direction de la 3e pierre de connexion: </p><p>Prenez la route du sud et continuez vers le sud-ouest à la première intersection. Peu après, la route se dirige vers l’ouest, vous arrivez à un nouveau croisement. Continuez vers le sud-ouest jusqu’à ce que vous passiez un pont, puis continuez vers le sud dans la vallée afin de trouver une autre pierre de connexion. </p><p>Suivez les directions et trouvez la 3e pierre de connexion (située au nord des montagnes de la ville des voleurs). Cliquez dessus pour le message. </p>",
        "images": [],
        "order": 18
      },
      {
        "title": "Nexus 4",
        "description": "<p>Maintenant, utilisez la tablette afin de retourner voir Antonian l’ermite. Cliquez sur lui, dites <span class=\"npc-keyword\">\"Oui\"</span> et il vous donnera la direction de la 4e pierre de connexion: </p><p>Suivez la route du sud et continuez vers le sud-ouest à la première intersection. Peu après, la route continue vers l’ouest, vous arrivez à un nouveau croisement. Continuez vers le nord puis vers le nord-ouest en traversant le pont de l'île aux Kraanians. Une fois traversé, suivez la rivière vers l’ouest jusqu’à rencontrer l’océan. Vous trouverez une pierre de connexion à côté du rivage. </p><p>Suivez les directions et trouvez la 4e pierre de connexion (allez vers l’ouest à partir du pont kraanian jusqu’à rencontrer l’océan, continuez au sud). Cliquez dessus pour obtenir à nouveau le message. </p>",
        "images": [],
        "order": 19
      },
      {
        "title": "Nexus 5",
        "description": "<p>Maintenant, utilisez la tablette afin de retourner voir Antonian l’ermite. Cliquez sur lui, dites <span class=\"npc-keyword\">\"Oui\"</span> et il vous donnera la direction de la 5e pierre de connexion : </p><p>\"Je n’ai pas de directions particulières pour cette pierre de connexion, mais je vous conseillerai d’aller vers le point situé au maximum vers le sud de cette île\". Avec ceci, vous devriez la trouver seul(e). </p><p>Suivez les directions et trouvez la 5e pierre de connexion (située au sud de la cave aux brigands, en face de l’océan, c'est la pointe Sud d'Arakas). Cliquez dessus et vous obtiendrez une dernière fois le message. </p><p>Enfin utilisez la tablette de pierre runique et retournez voir Antonian l’ermite. Il vous dira que vous avez trouvé toutes les pierres de connexion qu’il connaissait. </p><p><b>Remarque</b> : Vous pouvez enchaîner les cinq pierres de connexion sans retourner voir Antonian entre deux. </p><p><b>PNJ impliqués</b>: </p><p>Kilhiam, Efnisien, Olin Haad, Grand Prêtre Gunthar, chef de Guilde Ethan, Urik le tailleur, Yrian Holenarbed, La gitane Gypsy, Frère Kiran, Kirlor Dhul, Amelia, Tarnian, l'ermite Antonian. </p><p><b>Mini-boss impliqués</b>: </p><p>Assassins, gardes d'Olin Haad, Commandant Owen, Gorlok Bloodaxe </p><p><b>Récompenses acquises durant la partie \"Arakas\" de la quête</b>: </p><p>Colère des anciens (Wrath of the Ancients aura), </p><p>Anneau de Vitalité (0 stats) et Gemme de Vitalité. </p><p>Amulette de Renouveau et Gemme de Renouveau (0 stats) ou Amulette de Régénération et Gemme de Régénération (0 stats) ou Carquois de stabilité (Trueshot's Quiver, 110 Dex, 20 For). </p><p>Tablette de pierre runique (Runed Stone Tablet ou RST). </p><p>2.000 pièces d’or. </p><p>450.000 xp. </p>",
        "images": [],
        "order": 20
      },
      {
        "title": "Raven's Dust",
        "description": "<p>Quand vous aurez complété votre quête d’accès à Raven’s Dust bonne ou mauvaise et accédé à Raven's Dust (n'oubliez pas de mettre votre sanctuaire au temple de Silversky), retournez voir Antonian l’ermite et cliquez dessus. Il vous demandera si vous désirez connaître plus de directions pour les pierres de connexion. Répondez <span class=\"npc-keyword\">\"Oui\"</span> et il vous dira que vous avez trouvé toutes les pierres de connexion d’Arakas. Il vous dira également que vous devez retrouver son ami habitant la ville de Silversky. </p><p>Vous recevrez 250.000 xp. </p><p>Continuez le dialogue en disant <span class=\"npc-keyword\">\"Scribe\"</span>, \"Celui\" et il vous parlera du Barde sans Nom. </p>",
        "images": [
          "/t4c-nms-overview/assets/quests/la-lettre-de-crimsonscale/img_21_0.jpg"
        ],
        "order": 21
      },
      {
        "title": "Le Barde sans nom",
        "description": "<p>Rendez-vous à votre sanctuaire au temple de Silversky (Comme solution de secours, vous pouvez utiliser la tablette de pierre runique. La RST vous téléportera à l’est du lac tarentules. Ensuite dirigez-vous au Sud. Mais il vous faudra marcher longtemps pour arriver au temple de Silversky). </p><p>Parlez alors au scribe Aquinos (Scholar Aquinos). Dites <span class=\"npc-keyword\">\"Visite\"</span>, \"Lieu\", \"Ou\" et il vous dira où habite le Barde sans Nom. Les informations sont : Le Barde sans Nom vit au fond d’une caverne loin vers l’ouest. </p><p>Entrez dans la grotte et avancez, vous trouverez alors le Barde sans Nom (il a l'aspect d’une atrocité). Parlez-lui. Dites <span class=\"npc-keyword\">\"Punirrrr\"</span>, \"Abysses\" (attention : seulement 2 s), \"restes\" et il vous dira : dans un arbre, vous trouverez la sagesse, dans une fontaine, la connaissance. Où la sagesse et la connaissance fusionnent, la réponse que vous cherchez émergera. </p><p>Depuis le carrefour proche du Barde sans Nom, descendez vers le sud-est et trouvez l’Arbre de Sagesse (Tree of wishdom). Cliquez dessus et vous obtiendrez une Branche de sagesse. Maintenant, retournez sur vos pas et prenez le passage menant vers le nord-ouest à partir du Barde. Vous trouverez la Fontaine de Connaissance (Fountain of Knowledge). Cliquez sur la fontaine et vous utiliserez la Branche de sagesse afin de mettre en mouvement les Eaux de la Connaissance. Devant vos yeux ébahis, l’eau tourbillonne et forme un mot: ETHERE. </p><p><b>Vous obtenez 300.000 xp.</b> </p><p><b>Retournez voir le Barde</b> sans Nom et parlez-lui. Il vous dira que vous avez trouvé le mot de pouvoir ouvrant les grandes portes d'un terrible mal. Elles sont situées à proximité du point le plus au nord de cette terre. Afin de l’atteindre, vous devrez traverser des zones de ténèbres. Soyez certain que si les Eaux de la Connaissance ne vous ont pas donné toutes les informations que vous recherchiez, celui qui réside derrière ces portes pourra sûrement. Le Barde vous dira aussi que c’est votre malédiction. </p><p>Dites <span class=\"npc-keyword\">\"Malédiction\"</span> et il vous dira qu’il fût choisi un jour aussi et maudit également et qu’un jour, nous serions vengés. </p>",
        "images": [
          "/t4c-nms-overview/assets/quests/la-lettre-de-crimsonscale/img_22_0.jpg",
          "/t4c-nms-overview/assets/quests/la-lettre-de-crimsonscale/img_22_0.jpg"
        ],
        "order": 22
      },
      {
        "title": "Le Mausolée",
        "description": "<p>Dirigez vous vers la grotte (Broken Ones cave) connue sous le nom de cave de l'aveugle (au Nord de l'île). Entrez-y, dirigez vous vers l’ouest puis le nord et continuez jusqu’à ce que vous atteigniez la sortie vers le Mausolée (Mausoleum). </p><p>Sortez et continuez vers le nord-ouest dans le cimetière, jusqu’à ce que vous rencontriez un PNJ nommé \"un gardien\". Cliquez sur lui et il vous dira que le Mausolée situé derrière mène au sanctuaire de l’ancien Dieu de la Corruption, Gluriurl. Il vous dira également que seulement celui qui connaît le mot de pouvoir est autorisé à rentrer. Dites <span class=\"npc-keyword\">\"Mot de pouvoir\"</span>, \"Ethéré\" et il vous préviendra que le mausolée est un endroit dangereux. Dites <span class=\"npc-keyword\">\"Oui\"</span> et il vous fera passer la porte. </p>",
        "images": [],
        "order": 23
      },
      {
        "title": "Les 4 vicaires",
        "description": "<p>A l’intérieur du mausolée vous devez tuer les 4 Vicaires et récupérer leurs clés en cristal. Dirigez-vous vers le nord-est jusqu’à ce que vous atteigniez une grande pièce. Continuez alors vers le sud-est et tuez le Vicaire Kervian. Récupérez la clé de cristal violette et dirigez-vous vers le nord-ouest. A la première grande pièce, continuez nord-ouest jusqu’à atteindre une autre grande pièce Dirigez-vous vers le nord-est et allez vers le nord-est le plus possible. A la fin de la route, continuez sur le chemin en direction du nord-ouest. Trouvez et tuez le Vicaire Ramiel. Récupérez la clé de cristal verte. Dirigez-vous vers le nord-ouest et suivez le chemin qui continue vers le sud-ouest. Continuez vers le sud-ouest et comptez les routes que vous rencontrerez qui se dirigent vers le sud-est. Suivez la 4e route allant vers le sud-est que vous rencontrerez et vous trouverez le Vicaire Vharnes. Tuez-le et vous obtiendrez la clé de cristal bleue. Retournez en arrière vers le nord-ouest et tournez vers le nord-est. A la première intersection, continuez vers le nord-ouest puis vers le sud-est. Continuez vers le sud-est jusqu’à ce que vous rencontriez une route allant vers le nord-ouest. Continuez vers le nord-ouest et vous trouverez un portail. Partez vers le nord-ouest à partir du portail et vous trouverez le Vicaire Ashgoth. Tuez-le et vous obtiendrez la clé de cristal rouge. </p>",
        "images": [
          "/t4c-nms-overview/assets/quests/la-lettre-de-crimsonscale/img_24_0.jpg"
        ],
        "order": 24
      },
      {
        "title": "Le dragon Crimsonscale",
        "description": "<p>Après avoir tué les 4 vicaires, revenez vers le portail et entrez-y. Suivez le tapis rouge et vous rencontrerez Crimsonscale le dragon. Parlez-lui et dites <span class=\"npc-keyword\">\"Lettre\"</span>, \"Commencement\", \"Elu\", \"Justice\", \"Vents\", \"Bataille des émanations\", \"Olin Haad\", \"Fasciné\", \"Changé de camp\", \"Conseil des huit\" et vous apprendrez au sujet des plans machiavéliques d’Olin Haad au sujet du Conseil des Huit. Crimsonscale vous demandera votre aide. Répondez <span class=\"npc-keyword\">\"Aide\"</span> puis dites <span class=\"npc-keyword\">\"Empecher\"</span>, \"Grande Librairie\" et il vous donnera le nom du lieu où se situe la Grande Bibliothèque. Dites <span class=\"npc-keyword\">\"Quelque chose\"</span> et il vous donnera une fiole de sang de dragon (Vial of Dragon Blood). ps: (retiré aussi) </p><p>Attention : Le bracelet de flammes et la gemme de flammes (Armlet of Flames et Gem of Flames) sont <b><u>supprimés</u></b> sur NMS !! </p>",
        "images": [],
        "order": 25
      },
      {
        "title": "La grande bibliothèque",
        "description": "<p>Dirigez-vous vers la Grande Bibliothèque (située à l’est de l’entrée de la crypte de Raven’s Dust), allez au 3e étage et parlez avec le Conservateur (Custodian). Dites <span class=\"npc-keyword\">\"Barbares\"</span>, \"Incultes\", \"Rite de Passage\" et il vous donnera une énigme afin que vous lui prouviez que vous n’êtes pas ignorant. La voici: </p><p>\"Dos\" \"vaneslae\" \"navidal\", \"Kadrim\" \"lok\" \"ungrim\" \"dok\", \"Somalina\" \"oundi\" \"inesora\", \"Tharrgra\" \"nethdrovar\". Si vous pouvez me dire ce que cela signifie, non seulement je vous concéderai l’accès au dernier étage mais je serai en plus gentil avec vous. Voici un indice: vous serez incapable de résoudre cette énigme si vous n’allez pas visiter le sous-sol de la Bibliothèque. </p><p>Dirigez-vous vers les sous-sols où les 4 savants résident. Parlez-leur. </p><p>Au savant disant <span class=\"npc-keyword\">\"language of the Elves\"</span> (Pièce au nord-ouest), dites <span class=\"npc-keyword\">\"Dos vaneslae navidal\"</span>. Il répondra: \"Pour regarder quelqu'un\". </p><p>Au savant disant <span class=\"npc-keyword\">\"language of the Dwarves\"</span> (Pièce au sud-ouest), dites <span class=\"npc-keyword\">\"Kadrim lok ungrim dok\"</span>. Il répondra: \"Il suffit d'avoir des yeux\". </p><p>Au savant disant <span class=\"npc-keyword\">\"language of Faeries\"</span>, (Pièce au nord-est), dites <span class=\"npc-keyword\">\"Somalina Oundi Inesora\"</span>. Il répondra: \"Pour reconnaitre sa propre ignorance\". </p><p>Au savant disant <span class=\"npc-keyword\">\"language of Dragons\"</span> (Pièce au sud-est), dites <span class=\"npc-keyword\">\"Tharrgra nethdrovar\"</span>. Il répondra: \"Il faut ouvrir ses yeux\". </p><p>Retournez au 3e étage et reparlez avec Custodian. Dites <span class=\"npc-keyword\">\"Oui\"</span>, \"Pour regarder quelqu'un\", \"Il suffit d'avoir des yeux\", \"Pour reconnaitre sa propre ignorance\", \"Il faut ouvrir ses yeux\" et vous obtenez l’accès complet à la Bibliothèque. Dites <span class=\"npc-keyword\">\"Accès\"</span>, \"Oui\" et vous serez téléporté au 4e étage. </p><p>Parlez à un des bibliothécaires. Dites <span class=\"npc-keyword\">\"Oui\"</span>, \"Echange de l'essence\", \"Corps materiel\", \"Ogrimar\", \"Lothar le juste\", \"Abandonna\", \"Elvenweave\", \"Coeur\" et vous réaliserez que Olin Haad tente de ramener Gluriurl à la vie. </p><p><b>Vous recevez 500.000 xp.</b> </p><p>Parlez aux deux autres bibliothécaires et écoutez-les. L’un vous parlera de la pierre noire et l’autre du \"Harbringer\". Dirigez vous vers le château d’Olin Haad. </p>",
        "images": [],
        "order": 26
      },
      {
        "title": "Retour chez Olin Haad en son château",
        "description": "<p>Une fois au château, parlez à Olin Haad. Dites <span class=\"npc-keyword\">\"Defi\"</span> et vous serez téléporté dans une petite pièce avec Olin Haad. Il vous attaquera et comme vous ne pouvez pas le tuer, laissez le vous massacrer mais juste avant le coup final, vous serez téléporté de retour au château. Dites <span class=\"npc-keyword\">\"Invincible\"</span>, \"Heros\", \"Insidieuse voix\", \"Restes\" et vous saurez tout sur la résurrection de Gluriurl. </p>",
        "images": [],
        "order": 27
      },
      {
        "title": "Retour chez Gunthar au temple",
        "description": "<p>Retournez voir Gunthar et parlez-lui. Dites <span class=\"npc-keyword\">\"Benediction d' Artherk\"</span>, \"Âmes\", \"Stopper\", \"Débarrasser\", \"Faucheur\", \"Illusion\", \"Recemment\", \"Trompais\", \"Coeur d' Artherk\", \"Efnisien\" et vous apprendrez au sujet du Caledbolg, qui est gardé en sécurité en un lieu saint dans la partie sud-est du désert de Raven’s Dust. Il vous dira également que vous devez aller voir Efnisien. </p>",
        "images": [],
        "order": 28
      },
      {
        "title": "Retour chez Efnisien (1er étage de la maison au nord de la banque)",
        "description": "<p>Allez voir Efnisien et dites-lui \"Service\", \"Entrée\" et il vous dira que l’entrée est située dans la pièce située derrière la porte verrouillée (servez-vous des escaliers de cette pièce). Mais Olin Haad a trouvé un moyen alternatif pour y rentrer et il est à l’intérieur du temple maintenant. Il ne vous servira à rien d’entrer puisque vous ne pouvez pas le battre sans une arme spéciale (Caledbolg, l’arme enchantée). </p>",
        "images": [],
        "order": 29
      },
      {
        "title": "La Caledbolg (crypte du désert RD)",
        "description": "<p>Vous devez trouver la Caledbolg. Allez dans le désert de Raven’s Dust et dirigez vous vers le sud jusqu’à ce que vos atteignez une nouvelle rangée de montagnes. Cherchez l’entrée de la crypte vers l'Est. En face de celle-ci se situe le gardien de la porte nommé Ramirgo. Parlez-lui et dites <span class=\"npc-keyword\">\"Gardien\"</span>, \"Entre\" et il vous téléportera à l’intérieur. </p><p>Suivez le mur du donjon et tuez les 3 démons Terror Demon, Chaos Demon et Darkness Demon. </p><p>Maintenant dirigez-vous vers le milieu du donjon où vous trouverez 3 portails. Entrez dans l’un des trois et vous arriverez dans une petite pièce. Cliquez sur Lothar et vous recevrez la Caledbolg (une fois la Caledbolg obtenue, vous ne pourrez plus pénétrer dans la crypte). </p><p><br> </p><p><b>PNJ impliqués</b>: l'ermite Antonian, Aquinos, le Barde sans Nom, un gardien, Crimsonscale, Custodian, les 4 savants (the 4 Scholars), les 3 bibliothécaires (the 3 Librarians), Olin Haad, Grand Prêtre Gunthar, Efnisien, Ramirgo, Lothar </p><p><b>Mini-boss impliqués</b>: Vicaire Asgoth, Vicaire Kervian, Vicaire Vharmes, Vicaire Ramiel, Terror Demon, Chaos Demon, Darkness Demon </p><p><b>Récompenses acquises durant la partie \"Raven’s Dust\" de la quête</b>: Fiole de sang de dragon (vial of Dragon Blood), 1.050.000 xps </p>",
        "images": [
          "/t4c-nms-overview/assets/quests/la-lettre-de-crimsonscale/img_30_0.jpg"
        ],
        "order": 30
      },
      {
        "title": "Retour sur Arakas",
        "description": "<p>Cliquez sur lui et il déverrouillera la porte du rez-de chaussée. Descendez au sous-sol et entrez dans le Temple Sacré de Lothar. </p>",
        "images": [
          "/t4c-nms-overview/assets/quests/la-lettre-de-crimsonscale/img_31_0.jpg"
        ],
        "order": 31
      },
      {
        "title": "Le Temple de Lothar",
        "description": "<p>Dirigez-vous au nord, vers le centre du temple et vous verrez un Draconis nommé \"Le Gardien\" (Draconis Guardian). Il est encore vivant alors parlez-lui. Il vous demandera si vous venez de la part d’Efnisien. Répondez <span class=\"npc-keyword\">\"Oui\"</span>, \"Dragon\", \"Prophétie\", \"Stopper\", \"chambre mortuaire\" et vous en apprendrez plus au sujet de la prophétie. Il vous dira également que vous devez pénétrer à l’intérieur du portail derrière lui afin de stopper Olin Haad. </p>",
        "images": [],
        "order": 32
      },
      {
        "title": "Les 5 cristaux",
        "description": "<p>Le portail comporte 5 ouvertures correspondant à 5 cristaux. Afin de pouvoir activer le portail, vous devez trouver ces 5 cristaux: un rouge, un jaune, un bleu, un vert et un violet. </p><p>Regardez la carte pour voir où sont situés les 5 épreuves. </p><p><i><b>Pour le cristal bleu</b></i>, vous entrerez dans un labyrinthe dont les murs sont invisibles. </p><p>Suivez les flèches afin de sortir du labyrinthe, ouvrez le coffre (chest) et le cristal tombera dans votre sac. </p><p>Rentrez dans le portail et vous arriverez juste à l’entrée du labyrinthe. </p><p><i><b>Pour le cristal jaune</b></i>, vous devez tuer des Kraanians piétineurs jusqu’à ce qu’ils laissent tomber un cristal. </p><p>Une fois un cristal au sol, ramassez le (il est indroppable). </p><p>Puis poursuivez... </p><p><i><b>Pour le cristal vert</b></i>, vous devez traverser un grand labyrinthe. Vous arriverez à un coffre. </p><p>Ouvrez-le (2 fois) et le cristal vert tombera dans votre sac. </p><p>Rentrez dans le portail et vous arriverez à l’entrée de ce labyrinthe. </p><p><i><b>Pour le cristal rouge</b></i>, suivez le corridor et entrez dans le tourbillon au sol. </p><p>Vous arriverez dans un labyrinthe de tourbillons. Faites votre bonhomme de chemin jusqu’au coffre. Ouvrez-le et le cristal tombera dans votre sac. Entrez dans le portail et vous arriverez à côté du portail du 1er étage. </p><p>Légende de la carte ci-contre : S : Start (départ) ; Follow the numbers (suivez les numéros). </p><p><b>Pour le cristal violet</b>, vous devez fouiller 7 coffres différents. </p><p>Le cristal est placé aléatoirement dans un des coffres. </p><p>Trouvez-le et revenez au centre du temple. </p>",
        "images": [
          "/t4c-nms-overview/assets/quests/la-lettre-de-crimsonscale/img_33_0.jpg",
          "/t4c-nms-overview/assets/quests/la-lettre-de-crimsonscale/img_33_0.jpg",
          "/t4c-nms-overview/assets/quests/la-lettre-de-crimsonscale/img_33_0.jpg",
          "/t4c-nms-overview/assets/quests/la-lettre-de-crimsonscale/img_33_0.jpg",
          "/t4c-nms-overview/assets/quests/la-lettre-de-crimsonscale/img_33_0.jpg"
        ],
        "order": 33
      },
      {
        "title": "Mort de Gluriurl",
        "description": "<p><b>N'oubliez pas de parlez au gardien</b> si vous ne l'avez pas encore fait ! </p><p>Entrez maintenant dans le portail situé derrière Le Gardien et vous arriverez dans le tombeau. Allez alors vers le sud-est et vous trouverez Olin Haad. Equipez-vous de la Caledbolg et attaquez-le. Il mentionnera que le rituel est complet. Dès que vous l’aurez tué, Gluriurl, Dieu de la Corruption, apparaîtra. </p><p>Un message en lettres bleues apparaîtra à tous les joueurs : <b>\"Le ciel s'obscurcit soudainement…\"</b> </p><p>(parfois Gluriurl sera déjà activé par un joueur précédent qui aura échoué à le tuer) </p><p>Attaquez Gluriurl et tuez-le (n’oubliez pas de retirer rapidement la Caledbolg et de vous réarmer). Une fois tué, le message suivant apparaîtra : </p><p>Vous entendez soudainement la voix de la Gitane : \"Vous avez vaincu le Dieu de la Corruption ! Venez me voir dès quand vous le pourrez. Je dois vous remercier personnellement pour tout ce que vous avez fait\". </p><p>Et les lettres bleues, encore une fois pour tous les joueurs : <b>\"La terre se met à trembler violemment pendant quelques secondes…\".</b> </p><p><b>Attention</b> ! Gluriurl est très fort. Si vous êtes seul il vous faudra dépasser largement le level 100 (selon votre classe) pour l'affronter. </p>",
        "images": [],
        "order": 34
      },
      {
        "title": "Retour chez la Gitane",
        "description": "<p>Maintenant, retournez voir la Gitane pour votre récompense. Répondez <span class=\"npc-keyword\">\"Quatrième Prophétie\"</span>, \"gardiens respectifs\" et vous serez récompensé d’une amulette de rajeunissement, d’une pierre de rajeunissement, d’une amulette d'abondance, d’une pierre d'abondance et d’un carquois de stabilité rouge. </p><p><b>Conseil :</b> Après avoir tué Gluriurl, allez parler à Efnisien, il vous débarrassera de la gemme sombre. Par contre, seul un GM pourra vous débarasser de la Caledbolg. </p><p><b>PNJ impliqués</b>: Efnisien, Le Gardien Draconis, la Gitane </p><p><b>Mini-boss impliqués</b>: Olin Haad, Gluriurl </p><p><b>Récompenses acquises durant la dernière partie de la quête:</b> </p><ul><li>Amulette de Rajeunissement</li> <li>Pierre de Rajeunissement</li> <li>Amulette d'Abondance</li> <li>Pierre d'Abondance (0 stats)</li> <li>Carquois de Stabilité rouge (220 Dex, 30 Force).</li></ul><p><br> </p><p> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> </p>",
        "images": [],
        "order": 35
      }
    ],
    "credits": [
      "T4C NMS Révolution wiki"
    ]
  },
  {
    "title": "Quêtes neutres d'Arakas",
    "slug": "quetes-neutres-darakas",
    "zone": "Arakas",
    "prerequisites": [],
    "rewards": [],
    "npcs": [],
    "gold": "",
    "steps": [
      {
        "title": "La quête des rats (bonifiée) (non répétable)",
        "description": "<p>Près du temple de Lighthaven se trouve un PNJ (vêtu de bleu) appelé Samaritain de Lighthaven. Parlez lui et il vous demandera si vous avez des questions à poser. Dites <span class=\"npc-keyword\">\"<b>Oui</b>\"</span> puis \"<b>Tâche</b>\". Il vous donnera votre première quête qui sera de tuer 15 rats dans les sous-sols du temple. Allez les tuer, puis retournez le voir en disant <span class=\"npc-keyword\">\"<b>Oui</b>\"</span> puis \"<b>Tâche</b>\". Il vous récompensera avec 2.500 points d'expérience. </p><p><b>Note :</b> Au niveau 1, les rats peuvent vous donner du fil à retordre. Au premier sous-sol du temple (dans une pièce située au Nord puis à l'Ouest), se trouve un PNJ appelé Nevanis. Dites lui \"<b>Guérir</b>\" et il vous soignera. Restez près de lui et dès que vous serez en difficulté, dites lui \"<b>Guérir</b>\". </p><p><b>Note 2</b> : Zélina au temple vous bénira pour 1000 po (approchez-vous d'elle et dites-lui \"bénédiction\"). Vous aurez un bonus de 600PV pour <b>40 minutes cumulable à une bénédiction classique.</b> </p><p><b>PNJs concernés: </b>Le samaritain de Lighthaven, Nevanis (facultatif) </p><p><b>Récompense obtenue:</b> <b><u>2.500 Points d'expérience</u></b> </p>",
        "images": [],
        "order": 0
      },
      {
        "title": "La quête de l'or du dragon (bonifiée) (non répétable)",
        "description": "<p>A Lighthaven, entre la fontaine et le cimetière, se trouve un dragon nommé Darkfang (vous ne pouvez pas le louper). Dites lui \"<b>Or</b>\", \"<b>Oui</b>\" et il vous donnera 5.000 pièces d'or. De plus, tant que vous n'aurez pas atteint le niveau 6, vous pourrez lui dire <span class=\"npc-keyword\">\"<b>Soin</b>\"</span> et il guérira partiellement vos blessures. </p><p><b>PNJ concerné: </b>Darkfang </p><p style=\"text-align: left;\"><b>Récompense obtenue:</b> <b><u>5000 pièces d'or</u></b> (200 à l'origine)</p>",
        "images": [],
        "order": 1
      },
      {
        "title": "La quête du pilleur de tombe (bonifiée) (non répétable)",
        "description": "<p>Allez parler à Darkfang (le dragon de Lighthaven) et dites lui \"<b>Pilleur de tombe</b>\". Il vous demandera de tuer le pilleur de tombe. Vous le trouverez dans la crypte sous le cimetière. Tuez-le et retournez voir Darkfang. Dites lui \"<b>Pilleur de tombe</b>\" et il vous récompensera avec 40 k points d'expérience !! </p><p><b>Note #1:</b> Pour tuer facilement le pilleur de tombe, laissez les momies l'attaquer. Quand il devient \"rouge\", achevez le (attention, souvent il y a trop de momies et dans ce cas vous devrez vous depêcher) </p><p><b>Note #2:</b> S'il est tué, il faut attendre environ 30 minutes avant qu'il ne réapparaisse. </p><p><b>PNJ concerné: </b>Darkfang </p><p><b>Mini-Boss concerné: </b>Le pilleur de tombe </p><p><b>Récompense obtenue:</b> <b><u>40.000 points d'expérience</u></b> ! </p>",
        "images": [],
        "order": 2
      },
      {
        "title": "La quête des ailes de chauve-souris (bonifiée) (non répétable)",
        "description": "<p>Au sous-sol -2 du temple de Lighthaven vivent des chauves-souris <b>mort-vivantes</b> (ne vous trompez pas). Tuez-en jusqu'à l'obtention d'ailes de chauve-souris putrides. Apportez-en une paire à la tour des mages de Lighthaven (à l'Est puis Nord de Lighthaven). Vous y trouverez un PNJ du nom d'Uranos. Dites lui \"<b>Travail</b>\", \"<b>ingrédient</b>\" et il vous demandera de lui rapporter un ingrédient. </p><p>[Etape facultative : pour connaître cet ingrédient, il vous faut aller voir Marsac Cred et lui demander quel est le composant. Marsac Cred habite à Windhowl à la Tour des mages. Dites lui \"<b>Uranos</b>\". Il vous révélera que le composant recherché consiste en des ailes de chauve-souris]. </p><p>Retournez voir Uranos et dites lui \"<b>Ailes de chauve-souris</b>\". Il vous donnera en récompense une dague du crâne et 30k points d'expérience !! </p><p><b>Note #1:</b> Vous pouvez directement dire <span class=\"npc-keyword\">\"<b>Ailes de chauve-souris</b>\"</span> à Uranos (il n'est pas nécessaire d'aller voir Marsac Cred) </p><p><b>Note #2:</b> Il se peut qu'Uranos ne veuille pas de vos ailes de chauve-souris si quelqu'un a effectué la quête récemment. Dans ce cas, revenez plus tard (10 ou 20 minutes). </p><p><b>PNJs concernés: </b>Uranos, Marsac Cred (Facultatif) </p><p><b>Récompenses obtenues:</b> <b><u>30.000 points d'expérience</u></b> ! une dague du crâne (12 For, 43 Int, 15 Sag) </p><p style=\"text-align: center;\"></p>",
        "images": [],
        "order": 3
      },
      {
        "title": "La quête de Dorken le putride ((+ karma))",
        "description": "<p>Au Nord-Ouest de Lighthaven (au dessus des montagnes), apparaît de temps à autre Dorken le putride (un gobelin jaune).Tuez-le et l'un des PNJ suivant tombera malade.<br><br><b>1.</b> Si <b>Geena</b> est malade </p><p>Allez la voir à la taverne de Lighthaven. Parlez lui et elle vous dira qu'elle est malade. .Elle vous demandera de parler à Halam, (lui aussi dans la taverne). il vous enverra voir Mushn qui se trouve dans les champs de Windhowl (au Sud après l'entrée). Parlez lui et il vous donnera un antidote. Ramenez-le à Genna qui vous remerciera. Pour finir, allez voir Halam qui vous récompensera par un anneau de l'ours ou une ceinture de courage. </p><p><b>2.</b> Si <b>Kalastor</b> est malade </p><p>Kalastor se trouve à l'Est de la fontaine de Lighthaven. Il vous demandera de trouver le fouineur à Windhowl (à l'Est du temple, près du marchand d'armes 1715,1180,0). Parlez-lui et il vous donnera une potion de Pureté pour 800 pièces d'or. Dites <span class=\"npc-keyword\">\"<b>Oui</b>\"</span> et retournez voir Kalastor. Pour l'avoir guéri, il vous récompensera de (1500 + (200 * Niveau )) pièces d'or. </p><p><b>3.</b> Si <b>Murmuntag</b> est malade </p><p>Murmuntag (un orc) traîne toujours à côté de la fontaine de Lighthaven. Il vous demandera un sachet de poudre jaune. Ce sachet s'obtient en tuant Araf Kul ou Roshnak Tul (camp orc). <span style=\"color: #ff0000;\">Attention:</span> Araf Kul et Roshnak Tul sont dangereux pour des bas niveaux. N'essayez pas de faire cette quête avant d'avoir atteint le niveau 15 ou même 18. Et n'oubliez pas de prendre un stock de potions :-) Le sachet de poudre jaune ne s'obtient pas à chaque fois et vous devrez sans doute les tuer plusieurs fois avant d'en obtenir un. Une fois en possession de ce sachet, retournez voir Murmuntag. Donnez-lui le sachet de poudre jaune et il sera guéri. En récompense, il vous offrira (1000 + (100 * votre niveau)) en points d'expérience. </p><p><b>PS: </b>Les grands Shamans orcs dropent aussi de la poudre jaune. </p><p><b>Note #1:</b> </p><p>Un moyen de vaincre relativement facilement Araf Kul et Roshnak Tul si vous êtes un guerrier (ou si vous combattez au corps à corps) est de vous approchez de lui lentement, en tuant tous les orcs que vous rencontrerez sur votre chemin. N'hésitez pas à battre en retraite si vous êtes submergé. Nettoyez toute la zone puis attaquez-le quand il est seul. Par contre, si vous êtes un mage, utilisez des sorts de feu/terre et absorption de vie mineure pour regagner des points de vie. </p><p><b>Note #2:</b> Vous pouvez effectuer cette quête à volonté. </p><p><b>PNJs concernés: </b>Geena/Kalastor/Murmuntag, Mushn (facultatif), Halam (facultatif), Le fouineur (facultatif) </p><p><b>Mini-Boss concernés: </b>Dorken le putride, Araf Kul / Roshnak Tul (facultatif) </p><p><b>Récompenses obtenues:</b><br>Ceinture de courage (26 Int, 28 Sag) ou un anneau de l'ours (20 Int, 23 Sag) si Geena tombe malade /<br>(1500 + (200 * votre niveau)) pièces d'or si Kalastor tombe malade /<br>(1000 + (100 * votre niveau)) points d'expérience si Murmuntag tombe malade. </p><p style=\"text-align: center;\"></p>",
        "images": [],
        "order": 4
      },
      {
        "title": "La quête du livre de Feylor (bracelet de saphir)",
        "description": "<p>Allez voir Lantalir Glawtar chez les druides d'Arakas. Dites lui \"<b>travail</b>\" , \"<b>Tâche</b>\" et il vous apprendra qu'il est à la recherche du livre de Feylor qui se trouve dans la cité perdue. Munissez vous d'une \"clé de fer\" et allez dans le labyrinthe d'Arakas . Trouvez la sortie qui mène à la cité perdue et dirigez-vous vers le Nord-Ouest (attention au dragon !). Le livre de Feylor se trouve dans un coffre . Ouvrez-le et prenez le livre de Feylor. Retournez voir Lantalir Glawtar dites lui \"<b>livre de Feylor</b>\". Il vous récompensera avec un bracelet de saphir et 2500 points d'expérience. </p><p><b>Note:</b> Vous pouvez effectuer cette quête à volonté. </p><p><b>PNJ concerné: </b>Lantalir Glawtar </p><p><b>Récompenses obtenues:</b> 2500 points d'expérience, bracelet de saphir (33 Int, 33 Sag) </p>",
        "images": [],
        "order": 5
      },
      {
        "title": "La quête de la fiole de liquide bleuté (bonifiée)",
        "description": "<p>Allez voir Dunikus Cathbad chez les druides d'Arakas. Dites lui \"<b>Travail</b>\" et il vous dira qu'il peut fabriquer \"une potion de liquide bleuté\" si vous lui ramenez une \"feuille d'arbre rose\" et une \"pomme\". Vous obtiendrez la feuille d'arbre rose en tuant Araf Kul (il dropera plus souvent une potion hélas) et la pomme s'achète chez Fali (la marchande de potions de Lighthaven) pour 5 pièces d'or. Une fois ces deux ingrédients obtenus, retournez voir Dunikus Cathbad et dites lui \"<b>potion</b>\", \"<b>Oui</b>\". Il vous donnera une fiole de liquide bleuté et 125K xp !! </p><p><b>Note:</b> Vous pouvez effectuer cette quête à volonté. </p><p><b>PNJ concerné: </b>Dunikus Cathbad </p><p><b>Mini-Boss concerné: </b>Araf Kul (facultatif) </p><p><b>Récompense obtenue:</b> Fiole de liquide bleuté (potion de soin +100 PV, 5 utilisations), <b><u>125.000 XP</u></b> </p>",
        "images": [],
        "order": 6
      },
      {
        "title": "La quête de la pierre de vie (scalpel du chirurgien ou lame des ténèbres) (chronométrée)",
        "description": "<p>Vous avez 3 possibilités pour faire cette quête selon ce que vous voulez mais le début est commun. </p><p>Attention : La quête ne se remet pas à zéro si on la commence et qu'on ne donne pas la pierre obtenue au Druide Yrian Holenarbed (aux Druides Arakas). Il existe un délai de 2 heures avant qu'elle ne soit réinitialisée automatiquement. </p><p>Quand vous cliquez sur le druide, surveillez bien les dialogues, cela a une grosse importance. </p><p>Réponses d'Yrian Holenarbed (Druide d'Arakas) : </p><p>--{Yrian Holenarbed}\":\" Vous avez sauvé la région mon enfant. Je le savais que vous étiez le voyageur envoyé par les vents. Je le savais. </p><p>&lt;&lt; c’est le message Standard quand vous cliquez dessus, rien de spécial &gt;&gt; </p><p>--{Yrian Holenarbed}\":\" Souvenez-vous : nous devons protéger la nature, sans quoi nous mourrons tous. </p><p>&lt;&lt; c’est le message Standard quand vous cliquez sur \"au revoir\", rien de spécial &gt;&gt; </p><p>Si vous cliquez sur lui (il répond \"vous avez sauvé....\") et dites <span class=\"npc-keyword\">\"pierre de vie\"</span>, là vous avez 3 messages possibles. </p><p><b>-<u>1-</u></b> {Yrian Holenarbed}\":\" On nous a volé notre précieuse pierre de vie, mais elle ne présente aucun danger maintenant. Nous avons réglé le problème très rapidement. </p><p>&lt;&lt;La quête a été remise à zéro. Surveillez bien ce message vous l'aurez qu'une fois &gt;&gt; </p><p><b><u>-2-</u></b> {Yrian Holenarbed}\":\" La pierre de vie est un moyen de défense pour protéger la nature contre le mal. Cette pierre ne doit surtout pas tomber entre de mauvaises mains, sinon d'horribles évènements pourraient survenir. Si elle est volée, nous pourrons en créer une nouvelle après un certain temps. La pierre précédente sera alors vidée de toute énergie et de tout pouvoir. </p><p>&lt;&lt; La quête est prête à être activée &gt;&gt; </p><p>Comment ça marche pour que la quête s’active ? En fait quand vous avez ce message la quête ne se lance pas automatiquement. Il y a un .roll automatique (lancer de dé) sur le PNJ. </p><p>Un timer est initialisé entre zéro et 10 minutes. Et même si on clic avant le délai ça ne change rien d’où l’impression de rallonger le temps ce qui est faux. Donc flooder ou pas ne change rien. Cela peut être très long si pas chanceux. (vérification de source sûre pour le .roll ) </p><p>Redites-lui \"pierre de vie\" de temps en temps.... </p><p>Entre temps, comme vous êtes prévoyant, allez chercher un diamant dans le coffre situé à l'Est au bord de l'eau, juste au dessus du Commandant Owain. </p><p><b><u>-3-</u></b> {Yrian Holenarbed}\":\" C'est terrible, mon ami ! On a volé la pierre de vie ! Vous devez la récupérer pour nous, sans quoi nous serons sans défense face aux gobelins et aux immortels. Nous avons aperçu le voleur : il semble que ce soit le chef Orc renégat, le général des armées de Jarko. Si jamais la pierre tombe entre les mains de Jarko... </p><p>&lt;&lt; la quête est activée, et vous prêt à aller chercher la pierre (quête chronométrée) &gt;&gt; </p><p>Rendez-vous au -3 de Jarko. Une fois chez le chef Orc renégat,dite-lui \"pierre de vie\", il vous dira juste qui l'a : c’est soit Asarr (ville des voleurs) soit le troll d'Arakas. Si c'est le troll assurez-vous d'avoir le diamant. Si c'est Asarr, il vous demandera de l’or. Si vous avez plusieurs persos vous pouvez en mettre un à chacun des 2 emplacements. Il faut garder à l’esprit que c'est un vol donc n'importe qui peut voler la pierre, quelqu'un qui serait plus rapidement que vous sur place peut la voler. Solo vous pouvez prendre une chance en allant à l'un ou l'autre sans passer par le chef renégat. </p><p>Ce message reste tant que la quête n'est pas remise à zéro (au bout de 2 heures) donc assurez vous que personne n'est en train de la faire et qu'elle n'a pas été faite depuis peu. </p><p><b><u>1ère possibilité</u> (pour ceux qui veulent la pierre de vie pour ensuite crafter les braies du don de soi) :</b> </p><ul><li>Quand vous aurez obtenu la pierre de vie (grâce à Mhorgwloth ou Asarr) vous aurez ce que vous vouliez. Ne retournez pas voir Yrian avec la pierre dans votre sac, sinon il la reprendait.</li></ul><p><b><u>2ème possibilité</u> (pour le scalpel du chirurgien) :</b> </p><ul><li>Quand vous aurez obtenu la pierre de vie (grâce à Mhorgwloth ou Asarr), retournez voir Yrian Holenarbed. Dites lui \"<b>pierre de vie</b>\" et il vous récompensera avec un scalpel de chirurgien.</li></ul><p><b><u>3ème possibilité</u> (pour la lame des ténèbres) :</b> </p><ul><li>Quand vous aurez obtenu la pierre de vie (grâce à Mhorgwloth ou Asarr) allez la donner à Araknor (derrière le temple de Lighthaven) et non à Yrian Holenarbed. Dites lui \"<b>pierre de vie</b>\" et il vous donnera une lame des ténèbres.</li> <li>J'ai essayé avec une pierre provenant de mon coffre pour la donner à Araknor qui répond}\":\" Cette pierre ne valait rien ! Bah ! La poussière retourne à la poussière... elle retournera à sa place\".</li> <li>J'ai essayé de 3 autres façons et j'ai perdu 3 pierres de vie.</li> <li>Au 4ème essai j'ai essayé avec le même perso d'activer la quête et d'aller chercher la pierre chez l'un des PNJ puis retourner direct chez Araknor sans la déposer au coffre ou à terre et là je l'ai eue. J'ai répété 3 fois comme celà et j'ai réussi à chaque fois donc celà semble la bonne méthode de tout faire avec le même perso pour cette possibilité.</li></ul><p><b>Note:</b> Vous pouvez effectuer cette quête à volonté. </p><p><b>PNJs concernés: </b>Yrian Holenarbed, Asarr (facultatif), Mhorgwloth (facultatif), chef orc renégat (facultatif), Araknor (facultatif) </p><p><b>Récompenses obtenues:</b> Scalpel de chirurgien (30 Force, 50 Sag, 30 Int) pour la 2ème possibilité / Lame des ténèbres (68 Force, 19 Int, 21 Sag) pour la troisième possibilité. </p>",
        "images": [],
        "order": 7
      },
      {
        "title": "La quête du bouclier de Windhowl ((-karma))",
        "description": "<p>Allez à Windhowl et trouvez le PNJ nommé \"un gardien blessé\" (première maison à gauche quand on rentre dans la ville). Parlez lui et il vous racontera qu'il a été blessé par un troll. Il vous demandera de le venger en tuant le troll. Allez voir Mhorgwloth le troll (à l'Ouest de la montagne de Jarko) et tuez le. <span style=\"color: #ff0000;\">(-2 karma)</span> et retournez à Windhowl. Dites <span class=\"npc-keyword\">\"<b>Troll</b>\"</span> au gardien blessé et il vous donnera le bouclier de Windhowl. </p><p><b>PNJ concerné: </b>un gardien blessé </p><p><b>Mini-Boss concerné: </b>Mhorgwloth le Troll </p><p><b>Récompense obtenue:</b> bouclier de Windhowl (60 End, 26 Int, 23 Sag). </p><p style=\"text-align: center;\"></p>",
        "images": [],
        "order": 8
      },
      {
        "title": "La quête du sachet de poudre jaune",
        "description": "<p>Ce sachet s'obtient en tuant Araf Kul ou Roshnak Tul (camp orc). Le sachet de poudre jaune ne s'obtient pas à chaque fois et vous devrez sans doute les tuer plusieurs fois avant d'en trouver un (c'est chaud, soyez 15 ou 18 avant d'essayer). Quand vous en aurez un, retournez à la tour des mages de Lighthaven et allez voir Lothan. Dites lui \"<b>poudre jaune</b>\" et il vous donnera un anneau de l'initié ou des gants de duelliste. </p><p><b>Note #1:</b> Un moyen de vaincre relativement facilement Araf Kul et Roshnak Tul si vous êtes un guerrier (ou si vous combattez au corps à corps) est de vous approcher de lui lentement, en tuant tous les orcs que vous rencontrerez sur votre chemin. N'hésitez pas à battre en retraite si vous êtes submergé. Nettoyez toute la zone puis attaquez-le quand il est seul. par contre, si vous êtes un mage, utilisez des sorts de feu/terre et absorption de vie mineur pour regagner des points de vie. </p><p><b>Note #2:</b> Vous pouvez effectuer cette quête à volonté. </p><p><b>PNJ concerné: </b>Lothan </p><p><b>Mini-Bosses concernés: </b>Araf Kul / Roshnak Tul </p><p><b>Récompenses obtenues:</b> anneau de l'initié (23 Int, 24 Sag) ou gants du duelliste (45 End, 27 Int, 33 Sag). </p><p style=\"text-align: center;\"></p>",
        "images": [],
        "order": 9
      },
      {
        "title": "La quête du nécessaire à écriture runique (bonifiée)",
        "description": "<p>Allez à la tour des mages de Lighthaven et parlez à Iraltok. Dites lui \"<b>nécessaire à écriture runique</b>\" et il vous demandera de lui apporter un sachet de poudre jaune, une fiole de sang de gobelin, une plume, un diamant, une fiole de venin d'araignée et 1000 pièces d'or. </p><ul><li>Le sachet de poudre jaune est obtenue avec Araf Kul ou Roshnak Tul</li> <li>La fiole de sang de gobelin avec les chefs gobelins, chefs de guerre gobelins, généraux gobelins et le comte Hemogoblin</li> <li>La plume avec les chefs gobelins, les chefs de guerre gobelins et les shamans orcs</li> <li>La fiole de venin d'araignée avec les araignées noires du labyrinthe d'Arakas (assez rare).</li> <li>Le diamant dans le coffre du Bourgmestre Sunrock ou au village des Druides, dans un coffre situé au bord de l'eau, à l'Est du Commandant Owain.<br></li></ul><p style=\"text-align: center;\"></p>",
        "images": [],
        "order": 10
      },
      {
        "title": "La quête du parchemin d'enchantement (bonifiée)",
        "description": "<p>Pour fabriquer un parchemin d'enchantement, vous aurez besoin d'un nécessaire à écriture runique. </p><p>Allez voir R'yleth Cth à la tour des mages de Windhowl. Dites lui \"<b>acheter</b>\" et achetez un \"parchemin vierge\" pour \"11111/votre niveau\" pièces d'or. Allez ensuite voir Araknor (Derrière le temple) à Lighthaven. Muni de votre \"nécessaire à écriture runique\" et de 500 pièces d'or, dites lui \"<b>parchemin magique vierge</b>\" , \"<b>Oui</b>\". </p><p>Maintenant, il vous faut enchanter le parchemin magique vierge. Trouvez un \"os humain\" (obtenu en tuant Araf Kul). </p><p>Avec un \"nécessaire à écriture runique\", un ou plusieurs \"parchemin magique vierge\", autant d'os humain et autant de fois 4000 pièces d'or, retournez à la tour des mages de Windhowl voir Marsac Cred. Dites lui \"<b> parchemin d'enchantement</b>\" et \"<b>Oui</b>\" deux fois de suite. Il vous donnera le parchemin et <b>75K xp !!</b> </p><p>Répétez cette opération autant ce fois que vous avez d'os et de parchemin (et assez d'or). </p><p><b>Note:</b> Vous pouvez effectuer cette quête à volonté. </p><p><b>PNJs concernés: </b>R'yleth Cth, Araknor, Marsac Cred </p><p><b>Récompense obtenue:</b> parchemin d'enchantement et <u><b>75.000 xp</b></u> !! </p>",
        "images": [],
        "order": 11
      },
      {
        "title": "La quête de la cotte de mailles bénie (bonifiée)",
        "description": "<p>Il faut être au moins niveau 16 avant de pouvoir commencer cette quête. Allez voir Lance Silversmith (dans une maison au Nord du camp gobelins). Dites lui \"<b>cotte de mailles bénie</b>\" et il vous demandera: </p><ul><li>1 parchemin d'enchantement obtenu par la quête du parchemin d'enchantement.</li> <li>1 cotte de mailles achetée à Taliron sur RD 20.777 PO (1550,2525,0 seulement le jour).</li> <li>5.500 pièces d'or<br></li></ul><p>Une fois ces objets obtenus, retournez voir Lance Silversmith et dites lui \" <b>fabriquer une cotte de mailles bénie</b>\". </p><p>Il vous donnera une cotte bénie et <b>50K xp !!</b><br><br><b>Note:</b> Vous pouvez effectuer cette quête à volonté.<br><b>PNJ concerné: </b>Lance Silversmith<br><b>Récompense obtenue:</b> cotte de mailles bénie (80 End, 40 Int, 53 Sag) et <u><b>50.000 xp</b></u> !! </p>",
        "images": [],
        "order": 12
      },
      {
        "title": "La quête du grimoire de Jarko ((+ karma)) (bonifiée)",
        "description": "<p>Allez voir le Bourgmestre Sunrock à Windhowl et dites lui \"Jarko\". Il vous dira qu'il recherche son grimoire. Allez à la grotte J au niveau - 3 et trouvez Jarko le Necromancien (il a l'apparence d'un mage humain). Tuez le <b>vous-même</b> (10K xp) et récupérez son grimoire (repop 25 minutes si vous le tuez plusieurs fois pour la 1ère option) </p>",
        "images": [],
        "order": 13
      },
      {
        "title": "1ère option (pour XP)",
        "description": "<p>Ramenez le grimoire au Bourgmestre Sunrock et dites <span class=\"npc-keyword\">\"grimoire\"</span>. Il vous récompensera avec un anneau d'or, 800 pièces d'or et 90K xp. </p>",
        "images": [],
        "order": 14
      },
      {
        "title": "2ème option (pour l'anneau des ténèbres)",
        "description": "<p>Une fois que vous aurez tué Jarko et récupéré son grimoire, retournez à Lighthaven voir Araknor (derrière le temple). Dites lui \"Jarko\", \"grimoire\", \"oui\" et il vous donnera soit un <b>anneau des ténèbres</b> soit un <b>anneau de confiance</b> et la possibilité d'apprendre des sorts de nécromancie (vous devenez son apprenti, ce qui sera nécessaire pour pouvoir parler à l'aveugle sur RD). </p><p><b>Note #1:</b> Pour tuer plus facilement Jarko si vous êtes guerrier (ou si vous combattez au corps à corps), attendez qu'il soit dans un coin de la pièces et attaquez le. La plupart de ses invocations apparaîtront de l'autre côté du mur. Si vous êtes un mage, attaquez avec des sorts de terre ou de feu pour le tuer et absorption de vie mineure pour vous soigner. </p><p><b>Note #2 :</b> Il faut attendre une heure si un autre joueur a donné un grimoire à Araknor... (la poisse!!) </p><p><b>Note #3 :</b> Vous pouvez effectuer cette quête à volonté. </p><p><b>PNJs concernés :</b> Bourgmestre Sunrock ou Araknor. </p><p><b>Récompenses obtenues :</b> </p><p>1ère option : Un anneau d'or (22 Int, 26 Sag) et 800 pièces d'or et <b>90K xp</b> (+10K à la mort de Jarko). </p><p>2ème option : Soit un anneau de confiance (17 Int, 31 Sag) soit un anneau des ténèbres (0 de prérequis), Vous devenez apprenti d'Araknor, indispensable pour pouvoir apprendre plus tard des sorts de Nécromancie chez l'aveugle de RD. </p><p> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> </p>",
        "images": [],
        "order": 15
      }
    ],
    "credits": [
      "T4C NMS Révolution wiki"
    ]
  },
  {
    "title": "Les quêtes d'Arakas bonifiées",
    "slug": "les-quetes-darakas-bonifiees",
    "zone": "Arakas",
    "prerequisites": [],
    "rewards": [
      "Une dague du crâne",
      "30k xp",
      "40k xp",
      "le nécessaire",
      "120k xp",
      "un parchemin d'enchantement",
      "75k xp",
      "Une cotte de mailles bénie.",
      "800 po",
      "un anneau d'or.",
      "90k xp",
      "Une fiole de liquide bleuté.",
      "125k xp"
    ],
    "npcs": [],
    "gold": "",
    "steps": [
      {
        "title": "Introduction",
        "description": "<p><b>Les quêtes d'Arakas revalorisées :</b> </p>",
        "images": [],
        "order": 0
      },
      {
        "title": "Quête des rats bruns. Non répétable",
        "description": "<p><b></b><i><b></b></i> </p><ul><li>Parlez au Samaritain, situé à l'entrée du temple de Lighthaven en lui disant <span class=\"npc-keyword\">\"Travail\"</span>.</li> <li>Il vous demandera de tuer 15 rats bruns situés au sous-sol -1 du temple de LH. Vous pouvez retrouvez le nombre de rats tués dans le livre de quêtes, à droite de la barre d'xp. Si vous êtes gravement blessé, sortez de la cave et dites <span class=\"npc-keyword\">\"guérir\"</span> au frère Kirian. Au sous-sol, Névanis, dans la salle Nord après le couloir, vous soignera aussi.</li> <li>Retournez vois le Samaritain qui vous récompensera. Si vous n'avez pas atteint le quota il vous dira combien de rats vous avez tué.</li> <li><b><u>Gain 10K d'XP</u></b></li> <li>(Ramassez aussi les poils de rats à vendre 1667 po à Fulika - village métiers au sud de LH - îlot Est).</li></ul>",
        "images": [],
        "order": 1
      },
      {
        "title": "Quête des ailes de chauve-souris. Non répétable",
        "description": "<ul><li>Récupérez une paire d'ailes de chauve-souris putrides sur les chauve-souris mort-vivantes au sous sol -3 du temple de Lighthaven. Parlez-en sur le CC \"aide\". On vous aidera peut-être.</li> <li>Allez à la tour des mages de LH voir Uranos. Dites lui \" travail\" puis \"ingrédient\" puis \"ailes de chauve-souris\" (attention à l'orthographe). Vous devrez parfois attendre jusqu'à 20 minutes si un autre joueur vous a précédé.</li> <li>Récompense : Une dague du crâne</li> <li><b><u>Gain : 30k xp</u></b></li></ul>",
        "images": [],
        "order": 2
      },
      {
        "title": "Quête du pilleur de tombes. Non répétable",
        "description": "<ul><li>Engagez la discussion avec Darkfang, le dragon dans l'enclos près de la fontaine de Lighthaven.</li> <li>Suivez le dialogue (crypte...) jusqu'à ce qu'il vous demande de tuer le pilleur de tombes, situé dans la crypte du cimetière de LH.</li> <li>Tuez-le. Attention, les autres monstres se jettent sur lui, soyez très rapide. Pas facile à petit niveau.</li> <li>Retournez voir Darkfang qui vous récompensera.</li> <li><b><u>Gain : 40k xp</u></b></li></ul>",
        "images": [],
        "order": 3
      },
      {
        "title": "Quête du nécessaire à écriture runique. Répétable",
        "description": "<ul><li>Réunissez : <ul><li>un sachet de poudre jaune (Araf Kul ou Roshnak Tul)</li> <li>une fiole de sang de gobelin</li> <li>une plume</li> <li>un diamant (coffre de Lord Sunrock à WH ou coffre aux Druides à l'est du commandant Owain)</li> <li>une fiole de venin d'araignée (laby Arakas, assez rare)</li> <li>1000 pièces d'or.</li></ul></li> <li>Allez voir Iraltok à la tour des mages de LH et dites lui \"fabriquer un nécessaire runique\".</li> <li>Récompense : le nécessaire</li> <li><b><u>Gain : 120k xp</u></b></li></ul><ul><li>un sachet de poudre jaune (Araf Kul ou Roshnak Tul)</li> <li>une fiole de sang de gobelin</li> <li>une plume</li> <li>un diamant (coffre de Lord Sunrock à WH ou coffre aux Druides à l'est du commandant Owain)</li> <li>une fiole de venin d'araignée (laby Arakas, assez rare)</li> <li>1000 pièces d'or.</li></ul>",
        "images": [],
        "order": 4
      },
      {
        "title": "Quête du parchemin d'enchantement. Répétable",
        "description": "<ul><li>Achetez un parchemin vierge à R'yleth Cth, un mage de WindHowl (dire <span class=\"npc-keyword\">\"acheter\"</span>).</li> <li>Muni du parchemin vierge, du nécessaire à écriture runique et de 500 po dites <span class=\"npc-keyword\">\"parchemin magique vierge\"</span>, puis \"oui\" à Araknor à LH.</li> <li>Munissez vous d'un os humain, drop d'Araf Kul (ou Roshnak Tul ?) ou des skraugs de SH. Conseil : campez les os aux skraugs et utilisez-les lors de votre prochaine renaissance.</li> <li>Allez voir Marsac Cred, dans la tour des mages de WindHowl, avec 4.000 Pièces d'or, le nécessaire à écriture runique, le parchemin magique vierge, et l'os humain</li> <li>Dites-lui \"fabriquer un parchemin d'enchantement\" \"oui\" \"oui\".</li> <li>Récompense : un parchemin d'enchantement</li> <li><b><u>Gain : 75k xp</u></b></li></ul>",
        "images": [],
        "order": 5
      },
      {
        "title": "Quête de la cotte de mailles bénie (suite de la précédente). Répétable",
        "description": "<ul><li>Achetez (ou faites acheter) une cotte de mailles chez Taliron grimoire\".</li> <li>Récompense : 800 po, un anneau d'or.</li> <li><b><u>Gain : 90k xp</u></b></li></ul>",
        "images": [],
        "order": 7
      },
      {
        "title": "Quête de la fiole de liquide bleuté. Répétable",
        "description": "<ul><li>Trouvez une feuille d'arbre rose dropée par Araf Kul(camp orc) et une pomme (vendue à Lighthaven).</li> <li>Apportez-les à Dunikus Cathbad, au camp des Druides, et dites <span class=\"npc-keyword\">\"potions\"</span>.</li> <li>Récompense : Une fiole de liquide bleuté.</li> <li><b><u>Gain : 125k xp</u></b></li></ul>",
        "images": [],
        "order": 8
      },
      {
        "title": "Quête de l'Âme de Nilhem (quête complète ici). Répétable",
        "description": "<ul><li>Pour les levels au dessous de 30, apportez un lot de 25 pieds d'innocents à Nilhem, au Nord Ouest du pont gobelins, dans une maison près des gobelins bombermans.</li> <li>Nilhem vous donnera sa bénédiction, des bonus et un gain d'XP de 5000 x votre niveau (bof......).</li> <li><b>Répétable mais long et donc peu rentable sauf pour la première béné qui est gratuite !!</b></li></ul><p> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> </p>",
        "images": [],
        "order": 9
      }
    ],
    "credits": [
      "T4C NMS Révolution wiki",
      "unissez",
      "une fiole de venin"
    ]
  },
  {
    "title": "La bénédiction de Zélina",
    "slug": "la-benediction-de-zelina",
    "zone": "Drake Island",
    "prerequisites": [],
    "rewards": [],
    "npcs": [],
    "gold": "",
    "steps": [
      {
        "title": "La bénédiction de Zélina",
        "description": "<p>Rendez vous au temple de LH. Parlez à Zélina, dites <span class=\"npc-keyword\">\"travail\"</span> ou simplement \"bénédiction\" ou même \"béné\" et elle vous proposera une bénédiction. </p><p>Dites <span class=\"npc-keyword\">\"oui\"</span> en faisant <b>attention qu'il n'y ait aucun obstacle</b> entre elle et vous (sinon c'est l'obstacle qu'elle bénira). </p><p>Du level 1 au level 25, la bénédiction de 600PV qui dure 40 minutes vous coûtera 1000 po. Au-delà elle refusera de vous aider. </p><p><b>Remarque</b> : cette bénédiction booste aussi l'attaque et l'archerie. </p><p><br> </p><p> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> </p>",
        "images": [],
        "order": 0
      }
    ],
    "credits": [
      "T4C NMS Révolution wiki"
    ]
  },
  {
    "title": "Les autres quêtes 1.25",
    "slug": "les-autres-quetes-1-25",
    "zone": "Arakas",
    "prerequisites": [],
    "rewards": [],
    "npcs": [
      "Filandrius",
      "Sentinelle de Windhowl"
    ],
    "gold": "",
    "steps": [
      {
        "title": "Le Chef des Mercenaires (Arakas)",
        "description": "<p>A la fontaine de Lighthaven, cherchez un PNJ nommé Vincent Finelame. Parlez-lui et il vous dira qu’il a besoin d’un groupe d’héros pour faire un assaut sur trois camps différents. Dites <span class=\"npc-keyword\">\"<b>Olin Haad</b>\"</span>, \"<b>Tarnian\"</b>, \"<b>oui</b>\", \"<b>Details</b>\" et il vous donnera plus de détails sur votre quête. </p><p>Dirigez-vous vers le pont ouest de Lighthaven et une fois passé, allez vers le nord. Vous arriverez au 1<sup>er</sup> camp, facile à identifier avec les catapultes. Tuez 15 mercenaires jusqu’à ce que vienne le Lieutenant mercenaire. Tuez-le et dirigez-vous vers le 2<sup>e</sup> camp, situé juste au nord-est de celui où vous êtes. Tuez encore une fois 15 mercenaires et le Lieutenant mercenaire. Dirigez-vous vers l’est et suivez le chemin jusqu’à atteindre le 3<sup>e</sup> camp. Encore une fois tuez les 15 mercenaires et le Lieutenant mercenaire. Vous recevez le message suivant: </p><p><i>Dès que le lieutenant mercenaire s’écroule, vidé de toute vie, vous entendez le son d’un cor de guerre venant du camp nord.</i> </p><p>Suivez le chemin vers l'est (la route contourne la montagne et continue vers l'ouest) jusqu’à ce qu’il s’achève. Continuez vers l’ouest et vous arriverez à quelques maisons abandonnées. Trouvez le Chef mercenaire et tuez le. Retournez voir Vincent Finelame. </p><p>Dites-lui \"<b>Récompense</b>\" et vous recevrez 750 xps multipliés par votre niveau actuel et 500 pièces d’or. </p><p><b>Remarque:</b> Vous pouvez effectuer cette quête à volonté. </p><p><b>PNJ impliqué: </b>Vincent Finelame. </p><p><b>Mini-boss impliqués:</b> Mercenaires, Lieutenant mercenaire, Chef des mercenaires. </p><p><b>Récompenses acquises:</b> (750*lvl actuel) xps, 500 pièces d’or. </p>",
        "images": [],
        "order": 0
      },
      {
        "title": "Le Livre de la Connaissance Arcane (ceinture instable) (SH)",
        "description": "<p>Allez à la Grande Bibliothèque (à l’est de l’entrée de la crypte de Raven’s Dust) et parlez à Filandrius. Dites <span class=\"npc-keyword\">\"<b>La magie étrangère</b>\"</span>, \"<b>Besoin</b>\", \"<b>Filnar'thir</b>\", \"<b>Ténèbres</b>\", \"<b>Récupérer ce livre</b>\" et il vous enverra tuer Anthor le Fou et prendre le Livre de la Connaissance Arcane. </p><p>Allez à Stoneheim et trouvez Anthor (il est situé au nord-est de l’entrée de la grotte aux araignées, juste avant les skraugs verts). Maintenant tuez Anthor le Fou, vous recevrez le Livre de la Connaissance Arcane. </p><p><b>Tip</b> : Si vous l'attaquez en physique (war, archer, ou sort physique) et n'êtes pas très fort, après 20 ou 30 secondes il va se régénérer vite et vous aurez du mal à le tuer. Dans ce cas faites vous aider par un mage qui va l'affaiblir à l'aide d'un sort mental et attaquez le à ce moment. </p><p>Retournez-voir Filandrius, cliquez dessus et il prendra le Livre. Vous recevrez une ceinture de protection instable et une gemme de protection instable. Vous pouvez aussi lui demander de vous enseigner des nouveaux sorts (si vous avez les bonnes stats). </p><p><b>PNJ impliqués: </b>Filandrius </p><p><b>Mini-boss impliqués:</b> Anthor le Fou </p><p><b>Récompenses acquises:</b> Ceinture de Protection Instable, Gemme de Protection Instable (0 stats), Nouveaux sorts disponibles. </p><p>PS1: Si par accident vous deletez la ceinture retournez parler à filandrius il vous refera faire la quête. </p><p>PS2: Vous conservez la ceinture en cas de renaissance ! </p>",
        "images": [],
        "order": 1
      },
      {
        "title": "Le Faucheur de Vie (bracelet et gemme IMMO) (SH)",
        "description": "<p>La quête des Faucheurs de Vie consiste à tuer les 3 Faucheurs de Vie situés sur chaque île, à raison d’un par île. </p><p>Dirigez-vous vers Windhowl et <u>parlez à la sentinelle de Windhowl</u> (située aux portes de la ville). Dites <span class=\"npc-keyword\">\"<b>aide</b>\"</span> et il vous dira que derrière les portes se trouve Hel, le Faucheur de Vie d’Arakas. Cherchez-le (c’est un PNJ non-séraphe situé vers le nord-ouest de Windhowl <b>récompense\"</b>, vous recevrez 100 xps multipliés par votre niveau et 500 pièces d’or multipliées par votre niveau. </p><p>Maintenant, <u>allez parler à Filandrius</u> (situé dans la Grande Bibliothèque de RD). Il reconnaîtra la pierre spirituelle de Hel et vous dira que c’est intéressant. Dites <span class=\"npc-keyword\">\"<b>Intéressant</b>\"</span>, \"I<b>nnombrables richesses</b>\", \"P<b>ierre spirituelle</b>\" (et non le mot clef pierre spirituelle qui apparaît dans le dialogue), \"<b>Noms</b>\" et <u>il vous donnera le nom des 3 Faucheurs de Vie</u> : Jormungand, Hel et Fenrir. Il vous dira aussi qu’une fois les 3 pierres spirituelles réunies vous devrez trouvez un portail au village des Centaures. </p><p>Dirigez-vous ensuite vers la Tour de Zhakar. Allez vers l’ouest et passez au-dessus de Stonehenge. Suivez la ligne de montagnes et tournez vers l’est à la première ouverture. Continuez vers l’est et vous trouverez le Faucheur de Vie de Raven’s Dust, Jormungand qui ressemble lui aussi à un néphilim <b>délivrer</b>\". Filandrius prendra le Cristal de la Providence et vous recevrez le Bracelet et la Gemme des Immortels. </p><p><b>Remarque #1 :</b> Vous devez être au minimum niveau 50 pour commencer cette quête.... et beaucoup plus pour la finir !! </p><p><b>Remarque #2 : </b>La récompense donnée par la Sentinelle ne peut être obtenue qu’une seule fois par renaissance. </p><p><b>PNJ impliqués : </b>Filandrius, Sentinelle de Windhowl </p><p><b>Mini-boss impliqués :</b> Jormungand, Hel, Fenrir, le Faucheur de Vie (Harvester of Life) </p><p><b>Récompenses acquises :</b> Bracelet et Gemme des Immortels(0 stats), 100 xp * niveau actuel, 500 po * niveau actuel. </p>",
        "images": [],
        "order": 2
      },
      {
        "title": "Voyage entre les plans (réservé aux Séraphes level 50+)",
        "description": "<p>Vous remarquerez que dans chaque ville (et pas que dans les villes) se trouve un portail auxquel vous n'avez pas accès. </p><p>Vous ne pourrez y accéder que si vous êtes Séraphe/Néphi, au moins level 50 et avez terminé la quête d'accès. </p><p>Pour avoir accès à l'Interplan vous devez activer 8 portails (sur 10). Ces portails sont situés à : </p><ol><li>Lighthaven (AR)</li> <li>Windhowl (AR)</li> <li>Camp des Druides (AR)</li> <li>Silversky (RD)</li> <li>Oasis (RD)</li> <li>Bibliothèque (RD)</li> <li>Stonecrest (SH)</li> <li>Ville Centaure (SH)</li></ol><p>Pour activer l'accès approchez-vous d’un portail et sautez dedans. Dites <span class=\"npc-keyword\">\"<b>Creations</b>\"</span>, \"<b>Stop</b>\", \"<b>Yes</b>\". Vous entrez alors à l’intérieur et vous apparaîtrez autre part. Vous avez environ 60 secondes pour tuer Doppelganger. Entrez dans chacun des 8 portails et faites de même. Vous ne pourrez pas rentrez dans un portail déjà fait avant d’avoir fini les huit. Terminez les 8 et vous pourrez traverser les plans (Plane Walking) (cela signifie que vous pouvez utiliser les portails pour voyager de l'un à l'autre). Cette carte de l'interplan vous montre les destinations des portails quand vous traversez les plans. </p><p><b>Remarque 1 :</b> Le meilleur moyen pour tuer Doppelganger, même pour les mages, ce sont les armes physiques (ou à mains nues si vous bénéficiez d'une bonne force). Il est conseillé d'activer si vous en avez vos boucliers offensifs. Les sorts, à moins d’être à un niveau supérieur à 150 ne leur font rien. </p><p><b>Remarque 2</b> : Vous perdez l'accès à chaque renaissance et devrez attendre le niveau 50 pour le refaire. </p><p><b>Remarque 3</b> : Niève et Redwall seront automatiquement activés </p><p><b>Mini-boss impliqués :</b> Doppelganger </p><p><b>Récompense acquise :</b> Planewalking (ou interplan) (plus besoin d’acheter des parchemins de LH, WH, SS, etc.) </p>",
        "images": [],
        "order": 3
      },
      {
        "title": "L’Ancienne Plaque Céleste (Quête réservée aux Séraphes)(non répétable)",
        "description": "<p>Près de la fontaine de Stonecrest, vous trouverez un PNJ appelé Tristan. Parlez-lui et répondez à ses questions. Dites-lui \"<b>oui</b>\", \"<b>oui</b>\", \"<b>récemment</b>\", \"<b>déterraient</b>\" et vous entendrez une histoire au sujet de deux hommes qui creusaient le sol avec des pelles. Ils finirent par trouver un corps de Séraphin et sont partis vers l’est dans leur roulotte. </p><p>Allez vers l’est et suivez le chemin menant aux araignées. Juste avant d’y arriver, vous verrez un petit camp avec des guerriers Obsidian Conclave. Tuez-en environ dix jusqu’à ce qu’apparaisse le commandant Mordred. Tuez-le et vous obtiendrez une petite clé en fer. Avec celle-ci, ouvrez le coffre situé dans le camp, vous obtiendrez l'ancienne plaque céleste (indropable). </p><p><b>PNJ impliqué: </b>Tristan </p><p><b>Mini-boss impliqué:</b> Commandant Mordred </p><p><b>Récompense acquise:</b> le plastron Ancienne Plaque Céleste (Stats: 100 End, 30 For, 30 Dex, 30 Int, 30 Sag) (indropable) </p><ul><li><b>Bonus du plastron</b> : Quand vous êtes attaqué, un sort s'enclenche sur la gauche avec les autres sorts : il boost la CA, régénère mana vie et plus, très utile dans les zones ou il y a beaucoup de mobs surtout avec les sorts de zone comme les boucliers de feu air eau ou électrique.</li> <li><b>Attention</b> : ne pas deleter avant d'être 260, vous savez pas quand elle pourrait servir.</li></ul><p><br> </p><p> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> </p>",
        "images": [],
        "order": 4
      }
    ],
    "credits": [
      "T4C NMS Révolution wiki"
    ]
  },
  {
    "title": "L'âme de Nilhem",
    "slug": "lame-de-nilhem",
    "zone": "Raven's Dust",
    "prerequisites": [],
    "rewards": [
      "Buff : Âme de Nilhem",
      "d'une durée de 15 minutes. 10 000*lvl XP.",
      "d'une durée de 15 minutes. 20 000*lvl XP."
    ],
    "npcs": [],
    "gold": "",
    "steps": [
      {
        "title": "L'âme de Nilhem (une variante par île)",
        "description": "<p><br> La quête débute chez Nilhem, qui se trouve au nord du Pont Gobelin (en A), dans l'une maison du camp du chef des mercenaires. En quittant la route sur votre gauche, avancez jusqu'à trouver des maisons avec un feu de camp. Dans l'une de ces maisons se trouve le PNJ Nilhem. </p><p>Mot-clef : <span class=\"npc-keyword\">\"Aide\"</span>. <b>Important</b> : C'est le premier mot à lui adresser. </p><p>Vous recevrez L'âme de Nilhem (<b>tous les sorts durent 15 minutes</b>) </p><p>Ce buff donne </p><ul><li>une bénédiction de 1500 points de vie (qui se cumule à une bénédiction \"normale\"),</li> <li>+ 100 points à toutes vos caractéristiques</li> <li>+50 de CA</li> <li>+1500 d'attaque</li> <li>+490 d'esquive</li> <li>+1500 archerie et mana</li> <li>+50 à toutes vos puissances magiques.</li></ul><p><b>Attention</b> : les PV sont complétés mais pas les PM. </p><p>Le buff gratuit n'est donné qu'une seule fois. Ensuite selon votre level il vous faudra compléter l'une des quêtes suivantes. </p>",
        "images": [
          "/t4c-nms-overview/assets/quests/lame-de-nilhem/img_0_0.jpg"
        ],
        "order": 0
      },
      {
        "title": "Les pieds d'innocents (Level 1-29)",
        "description": "<p>Pour commencer la quête, dites le mot-clef <span class=\"npc-keyword\">\"tâche\"</span> à Nilhem. </p><p>Vous devez lui apporter 25 pieds d'innocents. </p><p>Les pieds d'innocents s'obtiennent sur les Ogres Ignobles. </p><p>Les Ogres Ignobles se trouvent DANS Lighthaven. Vous les trouverez facilement au sud des champs de blé (là où il y a les cochons). </p><p><b>Récompenses:</b> </p><ul><li>Le Buff de l'Âme de Nilhem, d'une durée de 15 minutes (+100 à toutes vos caractéristiques, +1500 PV PM et Attaque, +50 de CA, +50 à toutes les puissances, +490 d'esquive).</li> <li>5 000*lvl points d'XP</li></ul><p><b>Cette quête peut être effectuée a volonté.</b> </p>",
        "images": [],
        "order": 1
      },
      {
        "title": "Les yeux de tarentules (Level 30-59)",
        "description": "<p>Pour commencer la quête, dites <span class=\"npc-keyword\">\"tâche\"</span> à Nilhem. Vous devez lui apporter 35 yeux de tarentules. </p><p>Les yeux de tarentules s'obtiennent sur les araignées de Raven's Dust. Le taux de drop est faible (3%). </p><p><b>Récompense:</b> Buff : Âme de Nilhem, d'une durée de 15 minutes. 10 000*lvl XP. </p><p><b>Cette quête peut être effectuée a volonté.</b> </p><p><b>Le rapport Xp/items requis et trop déséquilibré pour rendre cette dernière quête intéressante.</b> </p>",
        "images": [],
        "order": 2
      },
      {
        "title": "Les lames d'héroisme et les livres de sort rouges (Level 60+)",
        "description": "<p>Pour commencer la quête, dites <span class=\"npc-keyword\">\"Tâche\"</span> à Nilhem. Vous devez lui apporter 25 lames d'héroïsme et 4 livres des sorts rouges. </p><p>Les lames d'héroïsme s'obtiennent sur les skraugs roses (nord est de SC), les skraugs verts, les vengeurs centaures. Le taux de drop est faible. Les livres de sort rouges s'obtiennent par les skraugs shamans (Un peu partout où il y a des skraugs...). Le taux de drops est très faible. </p><p><b>Récompense:</b> Buff : Âme de Nilhem, d'une durée de 15 minutes. 20 000*lvl XP. </p><p><b>Cette quête peut être effectuée a volonté.</b> </p><p><b>Le rapport Xp/items requis et trop déséquilibré pour rendre cette dernière quête intéressante</b> ... Je vous conseille plutôt de garder vos livres rouges pour vous, vos quêtes ou pour les vendre, et de vendre vos lames d'héroïsme au marchand. </p><p><b>PS : cette 3ème quête semble buggée</b> </p><p> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> </p>",
        "images": [],
        "order": 3
      }
    ],
    "credits": [
      "T4C NMS Révolution wiki"
    ]
  },
  {
    "title": "L'Asile",
    "slug": "lasile",
    "zone": "Raven's Dust",
    "prerequisites": [],
    "rewards": [],
    "npcs": [],
    "gold": "",
    "steps": [
      {
        "title": "Quête de L'Asile de Madrigan",
        "description": "<p>Vous devez être séraphin ou néphilim. </p><p>Dites « e<i>ntrer »</i> puis « <i>oui »</i> au <b>Gardien Vortimer</b> qui vous remettra alors la <b>Clef de l'Asile</b>. </p><p>Pour pouvoir progresser vous devrez aussi rechercher puis tuer le patient en fuite (drop de l'autorisation J4). Sa position est environ Distraire\" puis \"Adieu\" au gardien. Ensuite, vous avez moins de 5 secondes pour lui dire <span class=\"npc-keyword\">\"Yeux de tarentules\"</span> puis \"oui\". </p><p><b>Cette quête peut être effectuée à volonté!</b> </p><p> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> </p>",
        "images": [],
        "order": 1
      }
    ],
    "credits": [
      "T4C NMS Révolution wiki"
    ]
  },
  {
    "title": "La teinturière",
    "slug": "la-teinturiere",
    "zone": "Arakas",
    "prerequisites": [],
    "rewards": [],
    "npcs": [],
    "gold": "",
    "steps": [
      {
        "title": "Teinture classique",
        "description": "<p>Allez voir Elysse à LH dans la maison à l'est de la taverne. </p><p>Dites lui : \"travail\", puis \"teindre\" (pour vous teindre les cheveux) ou \"couper\" (pour avoir une petite coupe surprise qui durera une heure) </p><p>Si vous avez choisi \"teindre\" vous aurez le choix entre 5 couleurs différentes: Blond, Châtain, Brun, Roux ou Gris. Faites vous plaisir! </p><p>Enfin si vous lui dites <span class=\"npc-keyword\">\"retirer\"</span> vos cheveux colorés redeviendront noirs. </p><p>N'oubliez pas de prendre la coquette somme de 2 550 pièces d'or par travail demandé. </p>",
        "images": [],
        "order": 0
      },
      {
        "title": "Teinture temporaire d'une heure",
        "description": "<p>Elysse pourra aussi vous fournir une potion (droppable) de couleur pour une teinture temporaire d'une heure: </p><p>- Verte contre trois essences de B'Zu (DI) et une potion d'esprit clair. </p><p>- Bleue contre deux fioles de liquide bleuté et une potion d'esprit clair. </p><p>- Rose contre deux feuilles d'arbre roses et une potion d'esprit clair. </p><p>- Rouge contre deux rubis bruts, une fiole de sang de gobelin et une potion d'esprit clair. </p><p>Chaque teinture temporaire ainsi fabriquée vous rapporte 30K XP. </p><p><b>Enfin vous pourrez acheter ces potions contre des points d'interaction</b>. </p><p> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> </p>",
        "images": [],
        "order": 1
      }
    ],
    "credits": [
      "T4C NMS Révolution wiki"
    ]
  },
  {
    "title": "Quête du prisonnier",
    "slug": "quete-du-prisonnier",
    "zone": "Drake Island",
    "prerequisites": [],
    "rewards": [
      "La clef de la prison RP de LH."
    ],
    "npcs": [],
    "gold": "",
    "steps": [
      {
        "title": "Introduction",
        "description": "<p>Allez voir Dobbs dans la prison, accessible par le portail à la fontaine de LH. Ce dernier vous demandera des objets pour confectionner une clef permettant de s'échapper de la prison RP (partie Nord de la prison) : </p><p>• 5 morceaux de fer ( drop par les bzu sur DI) </p><p>•1 Émeraude reluisante (drop des golems sur SH) </p><p>•1 Marteau à forger (drop des drake Vigrator sur DI) </p><p>•1 Clef de fer (drop sur AR) </p><p>Vous devrez nommer chaque objet pour le donner à Dobbs. Il vous demandera d'essayer votre clé mais gardez la pour vous !! </p><p>Récompense: La clef de la prison RP de LH. </p><p>La quête n'est pas répétable. Utilisez votre clé à bon escient. </p><p> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> </p>",
        "images": [],
        "order": 0
      }
    ],
    "credits": [
      "T4C NMS Révolution wiki"
    ]
  },
  {
    "title": "Accès bénéfique SH",
    "slug": "acces-benefique-sh",
    "zone": "Stoneheim",
    "prerequisites": [],
    "rewards": [],
    "npcs": [
      "Roi Théodore",
      "tous les frères morts-vivants",
      "Celydia",
      "Laren",
      "Belagan",
      "Tobias",
      "Reynen Aspicdart",
      "Terwin",
      "Thomar",
      "Elysana Blackrose",
      "Zhakar",
      "Moonrock",
      "Bane Gwengad",
      "Jon Hamhoo",
      "Jamar",
      "Kalir",
      "Morindin le chasseur",
      "Celestyna Avel",
      "Mordrick Mansel",
      "Spectre de Théopold",
      "Princess Delilah"
    ],
    "gold": "",
    "steps": [
      {
        "title": "Introduction",
        "description": "<p>Pour compléter la quête d'accès à Stoneheim, vous devrez d'abord parler aux 12 frères puis obtenir les 6 clefs royales et enfin obtenir une plume argentée. </p><p>Il vous faudra aussi posséder une fiole de sang gobelin, un os de squelette, une fiole d'eau cristalline, des baies de belladone et 5000 pièces d'or. </p><p>Enfin vous pourrez vous rendre chez Zhakar pour le rituel de transfert. </p>",
        "images": [],
        "order": 0
      },
      {
        "title": "Les 12 frères",
        "description": "<p><br> </p><p>Etape facultative : </p><p>Dans le château de Silversky, parlez au <b>Roi Théodore (3ème étage à droite)</b>. Attention, vous devez avoir effectué la quête d’audience à Sa Majesté (200K xp) ! Si cela est fait, dites <i>\"travail\", \"royaume\", \"Tournoi\",</i> \"frères\" et vous apprendrez tout au sujet des 12 Frères Morts-Vivants, en fait qu'ils sont morts et enterrés. </p><p>Fin de l'étape facultative. </p><p><b><big>Note :</big></b> Il semble que l'on puisse commencer les clefs avec un karma \"Bon\". Toutefois, pour la clef 4 il faudra avoir au moins 170. En conséquence, commencer avec un karma \"Converti\" est très certainement une bonne décision pour éviter les désagréments liés à un faible karma. (voir <i>Le Karma)</i> </p><p>Allez à la crypte de Raven’s Dust (passez le pont au Nord de la tablette RST et marchez encore au Nord) puis descendez au niveau -3 ou sont les 12 Frères. </p><p><b>Faites attention</b> : vous devez parler aux 12 frères dans un ordre précis (consultez le plan ci-après) et ne dire que le mot clé. Si vous vous trompez dans l’ordre (ou dans votre saisie au clavier ou si vous parlez trop), vous devrez recommencer depuis le premier frère. </p><p><u>__<i>Ordre - Nom du Frère =&gt; Que lui dire</i></u> </p><ul><li>1 Une loque humaine =&gt; tourment</li> <li>2 un cadavre trébuchant =&gt; tourment</li> <li>3 Une ombre gémissante =&gt; tournoi des princes</li> <li>4 Une créature fragile =&gt; roi de goldmoon</li> <li>5 Une monstruosité putride =&gt; théodore</li> <li>6 Une créature pitoyable =&gt; mort</li> <li>7 Une entité hurlante =&gt; empoisonné</li> <li>8 Une âme tourmentée =&gt; malédictions</li> <li>9 Une infâme abomination =&gt; cuthana</li> <li>10 Un monstre putride =&gt; guérir</li> <li>11 Un démon rampant =&gt; portes royales</li> <li>12 Une horreur repoussante =&gt; donjon inférieur</li></ul><p>Le dernier zombie, <b>une horreur repoussante</b>, est celui auquel vous devrez donner les 6 clés royales afin qu’il puisse ouvrir les portes royales donnant accès au Donjon Inférieur pour obtenir <b>l’herbe de Cuthana</b>. </p>",
        "images": [
          "/t4c-nms-overview/assets/quests/acces-benefique-sh/img_1_0.jpg",
          "/t4c-nms-overview/assets/quests/acces-benefique-sh/img_1_0.jpg"
        ],
        "order": 1
      },
      {
        "title": "Clé Royale #1",
        "description": "<p>Trouvez <b>Celydia </b>(RDC à droite, 1438,2346) <b>le jour </b>au château de Silversky et dites-lui <i>\"clefs royales\"</i> et <i>\"Reynen\"</i> (elle ne vous parlera que le jour). </p><p>Allez à la taverne de la ville, trouvez <b>Laren</b> (1485,2524) et dites-lui aussi <i>\"Reynen\"</i>. Il vous dira qu’il a une relation avec Adriana et vous enverra voir <b>Belagan</b> (l’assistant d’Adriana). </p><p>Si vous disposez déjà de la clé de <b>Reynen</b> ou si un ami vous peut vous la prêter, vous pouvez sauter la partie qui suit et aller directement au coffre. </p><p>Allez à la salle d'entraînement, trouvez <b>Belagan</b> (1587,2524) et dites <i>\"Reynen\"</i>, <i>\"Oui\"</i> et il vous demandera un livre de guerre que vous pouvez acheter à <b>Tobias oui\" ou <i>\"Champion de la lumière\"</i> et il vous donnera la clé. </p><ul><li><i>Remarque 1: Pour récupérer cette clé, votre Karma doit être au moins de 100. Consultez Le Karma pour savoir comment l’augmenter.</i></li> <li><i>Remarque 2 : Pour récupérer cette clé vous devez avoir parlé aux 12 frères, sinon Terwin ne vous répondra pas utilement même si vous insistez.</i></li></ul>",
        "images": [],
        "order": 3
      },
      {
        "title": "Clé Royale #3 (attention au piège)",
        "description": "<p>Munissez-vous si possible d'une fiole de liquide bleuté (Les minotaures en dropent, ou bien effectuez quête de la fiole de liquide bleutée sur Arakas), cela vous évitera des déplacements. </p><p>(attention au piège) : A Silversky, trouvez <b>Elysana Blackrose</b> (dans une maison au sud du temple). Dites-lui <i>\"clefs royales\"</i> et elle vous demandera la fiole de liquide bleutée . Si vous ne l'avez pas sur vous ramenez-la et dites encore une fois \"clefs royales\". Elle vous demandera si vous ne voulez pas plutôt une potion de guérison importante, <b>ATTENTION : il faut dire <span class=\"npc-keyword\">\"Non\"</span>.</b> </p><p>Elle vous enverra voir <b>Zhakar</b>. Trouvez-le (Tour des Sorciers de Raven’s Dust) et dites-lui 3 fois <i>\"Elysana Blackrose\"</i>. Il vous posera une énigme. Dites <i>\"Réponse Clémentine Clébard Clématite\"</i> et il vous donnera la clé. </p><ul><li><i>Remarque: Pour récupérer cette clé, votre Karma doit être au moins de 100. Consultez Le Karma pour savoir comment l’augmenter.</i></li></ul>",
        "images": [],
        "order": 4
      },
      {
        "title": "Clé Royale #4",
        "description": "<p>Dirigez-vous vers la taverne de Silversky et parlez à <b>Thea</b> (uniquement la nuit). Dites <i>\"clefs royales\"</i> et elle vous enverra voir <b>Moonrock</b> au temple de Lighthaven. </p><p>Allez voir <b>Moonrock</b> et dites-lui <i>\"clefs royales\"</i> et elle vous demandera de trouver <b>Bane Gwengad</b> (en son château de l'île de Bane). </p><p>Passez par le connecteur du désert (entrée en 200,2555,0) et allez le voir. </p><p>Vous devrez effectuer la quête d’audience à Bane Gwengad auprès de son assistant avant de pouvoir lui parler. </p><p>Cela fait, dites à <b>Bane</b> <i>\"clefs royales\"</i> plusieurs fois avant qu’il ne vous donne la clé. Attention: Quand vous lui direz \"clefs royales\" il vous attaquera : ne le tuez pas ! Laissez-le dans son délire en quittant simplement le château quelques instants ou parlez-lui en étant protégé par un mur. Essayez à nouveau. Recommencez autant de fois que cela est nécessaire et qu’il vous confie la clé. </p><p>Remarque: Pour que Moonrock vous parle, votre karma doit être supérieur à 170. Consultez <i>Le Karma</i> pour savoir comment l’augmenter. </p>",
        "images": [],
        "order": 5
      },
      {
        "title": "Clé Royale #5",
        "description": "<p>Au RDC du château de Silversky, trouvez le cuisinier : <b>Jon Hamhoo</b> (à droite). Dites <span class=\"npc-keyword\">\"clefs royales\"</span> et il vous expliquera qu’elle doit être dans les mains de deux amis : Jalir et Kamar (dont les noms corrects sont <b>Kalir</b> et <b>Jamar</b>) </p><p>Allez voir tout d’abord <b>Kalir</b> (à l’Oasis du Désert) et dites-lui \"clefs royales\". Il vous dira qu’il ne sait rien mais il vous donnera une lettre pour son frère <b>Jamar</b> (n'oubliez pas d'accepter en disant <span class=\"npc-keyword\">\"oui\"</span>). </p><p>Allez voir <b>Jamar</b> (il vit à Silversky sous la fontaine), le frère de <b>Kalir</b> et dites <span class=\"npc-keyword\">\"<b>donner une lettre</b>\"</span>. Il vous donnera une lettre pour <b>Kalir</b>, donc retournez d’où vous venez et parlez à <b>Kalir</b>. Dites <span class=\"npc-keyword\">\"<b>donner une lettre</b>\"</span>, \"<b>clefs royales</b>\". Il vous avouera qu’il a menti et vous expliquera qu’il a donné la clé à <b>Morindin Tennglaw le chasseur</b> (qui se situe au nord du Lac Tarentules). </p><p>Allez voir le chasseur <b>le jour</b>, dites <span class=\"npc-keyword\">\"clefs royales\"</span> et il vous donnera la clé (soyez <b>level 30</b> minimum). </p><p><i>Remarque #1: Pour parler à Morindin le chasseur, votre karma doit être supérieur à 170. Consultez Le Karma pour savoir comment l’augmenter.</i> </p><p><i>Remarque #2: Morindin le chasseur ne vous parlera pas la nuit.</i> </p><p><i>Remarque #3: Morindin le chasseur ne vous parlera pas si vous n'êtes pas au moins level 30.</i> </p>",
        "images": [],
        "order": 6
      },
      {
        "title": "Clé Royale #6",
        "description": "<p>Au château de Silversky, trouvez <b>Tobias </b>(1er étage centre). Dites <span class=\"npc-keyword\">\"clefs royales\"</span> et il vous enverra voir <b>Celestina Avel</b> au camp des Druides de Raven’s Dust. Trouvez-la et dites-lui \"clefs royales\" et elle vous demandera de répondre sincèrement à la question « Avez-vous déjà tué un protecteur de la forêt ? ». Répondez <span class=\"npc-keyword\">\"non\"</span> et elle vous enverra voir <b>Mordrick Maensel</b> (château de Silversky, à l'entrée du RDC). Dites-lui \"clefs royales\" et il vous parlera d’une histoire au sujet de l’épée de puissance. Il vous demandera aussi de la lui ramener. </p><p>Allez à la cave des illusionnistes et trouvez le puits magique vers le Nord Ouest. Parlez au puits : Dites-lui \"<b>Donne moi ta puissance</b>\" et vous obtiendrez l’Epée de Puissance dans votre inventaire. Ramenez-la à <b>Mordrick Maensel</b> et dites-lui \"<b>épée de puissance</b>\", puis \"clefs royales\". Vous obtiendrez la clé. </p><p><i>Remarque #1: Pour obtenir l’Epée de puissance du puits, votre karma doit être supérieur à 170. Consultez Le Karma pour savoir comment l’augmenter.</i> </p><p><i>Remarque #2: Il est possible que vous ayez à dire de nouveau à Mordrick le mot-clé <span class=\"npc-keyword\">\"clefs royales\"</span> afin d’obtenir la clé.</i> </p>",
        "images": [],
        "order": 7
      },
      {
        "title": "L'herbe de Cuthana",
        "description": "<p>Une fois que vous avez récupéré les 6 clés, allez au Niveau -3 de la crypte de Raven’s Dust et reparlez à \"une horreur repoussante\" (le 12ème frère). Dites-lui \"<b>j'ai les six clés</b>\" (clés et non clefs) et elle/il vous téléportera dans une petite caverne ou vous rencontrerez le <b>Spectre de Théopold</b>. Dites-lui \"travail\", \"énigme\" et il vous posera les questions suivantes : </p><p>_Enigme posée - Réponse </p><ul><li>Enigme1 - la lettre u</li> <li>Enigme 2 - la lettre a</li> <li>Enigme 3 - énigme</li> <li>Enigme 4 - une rivière</li> <li>Enigme 5 - un cercueil</li> <li>Enigme 6 - rien</li></ul><p>Pour chaque bonne réponse, vous obtiendrez 10.000 xp. Une fois que vous avez répondu aux 5 questions, vous serez téléporté dans une petite pièce avec un coffre. En cliquant dessus, vous obtiendrez dans votre inventaire <b>l’herbe de Cuthana</b> et vous serez téléporté à l’est du Lac Tarentules. </p><p>Profitez-en pour cliquer sur le <b>nexus</b> tout proche puis allez tuer <b>Greyleaf</b> près de la RST, si ce n'est déjà fait, qui droppera des <b>baies de belladone</b> dans votre sac. </p>",
        "images": [],
        "order": 8
      },
      {
        "title": "Un acte de noblesse, la plume argentée",
        "description": "<p>Retournez au château de Silversky, et assurez-vous d'abord que l<b>'Evêque Crowbanner</b> est malade (3ème étage) : \"Oooh...Aïe! Je souffre! S'il vous p...plaît... aidez-moi... Dites à... la princesse Delilah... de venir\". </p><p>Puis parlez à <b>Delilah</b> (3ème étage, au-dessus de l'Evêque) et dites-lui \"<b>aide</b>\" (parfois vous aurez juste à cliquer sur elle). Elle vous enverra chez le chambellan <b>Thomar</b> (1er étage, centre gauche). A Thomar dites <span class=\"npc-keyword\">\"<b>Delilah</b>\"</span>, \"<b>aider</b>\", \"<b>Acte de noblesse</b>\" \"<b>oui</b>\" et il vous dira de donner l’herbe de Cuthana à la princesse Delilah. </p><p>Retournez voir <b>Delilah.</b> Dites-lui \"<b>remercier</b>\" et elle vous remerciera en vous proposant de choisir une récompense : </p><p>{Princesse Delilah}\":\" Qu'est-ce qui vous plairait? Dites-le moi, qu'il s'agisse d'une \"prière\", d'une \"guérison\", d'enlever une \"malédiction\" ou...d'\"or\", vous l'aurez. Choisissez soigneusement.\" </p><p><b><u>Attention !!!!!!!!</u> Choisissez \"Malédiction\"</b> : Elle retirera de votre âme la \"<b>marque que Balork</b>\" traça le jour où vous l’avez tué : </p><p>{Princesse Delilah} : Je vois que vous avez été maudit par Balork, ce démon diabolique. Peut-être pourrais-je vous rendre votre bonne action en vous aidant à ce sujet? Est-ce que cela vous convient? </p><p>Répondez-lui : <b>oui</b> puis <b>\"Stoneheim\"</b> et elle vous donnera <b>la plume argentée.</b> </p><p>Dites-lui éventuellement \"<b>Oracle</b>\". Elle vous renseignera. </p><p>Comme récompense vous pourrez apprendre de l'évêque Crowbanner les sorts Guérison et/ou Sanctuaire (car s'il est malade, il n’apprendra de sorts à personne). </p><p><b>Remarque</b> : Faites bien attention à vos réponses car si vous ne dites pas \"<b>Malédiction</b>\" il vous faudra refaire une partie de la quête pour obtenir à nouveau l'herbe de Cuthana ! </p>",
        "images": [],
        "order": 9
      },
      {
        "title": "Si vous souhaitez obtenir à nouveau l’herbe de Cuthana",
        "description": "<p>Il vous faudra refaire partiellement la quête pour chacune des clefs. Les six clefs étant nécessaires pour que le dernier des 12 frères, \"<b>horreur repoussante</b>\" vous téléporte auprès du {Spectre de Théopold} </p><p>Clef #1 – {Reynen Aspicdart} – il faut refaire droper sa clef à l'aide de la clé de Reynen (que vous avez déjà) </p><p>Clef #2 –{Chambellan Thomar} - vous redonne directement la clé à votre demande </p><p>Clef #3 –{Zhakar} - vous vend une autre clef 50K PO </p><p>Clef #4 –{Bane Gwengad} - vous la donne, en insistant comme d’habitude </p><p>Clef #5 –{Morindin Tennglaw} - vous redonne directement la clé à votre demande </p><p>Clef #6 –{Mordrick Maensel} - il faut aller chercher son épée de puissance et la lui apporter </p><p>Retournez voir le 12ème frère \"horreur repoussante \" qui vous expédie auprès du Spectre de Théopold qui ne vous posera pas les énigmes mais vous expédiera directement auprès du \"coffret mystérieux \" dans lequel se trouve la « <b>cuthana</b> ». </p><p><b>PNJ impliqués:</b> Roi Théodore, tous les frères morts-vivants, Celydia, Laren, Belagan, Tobias, Reynen Aspicdart, Terwin, Thomar, Elysana Blackrose, Zhakar, Moonrock, Bane Gwengad, Jon Hamhoo, Jamar, Kalir, Morindin le chasseur, Celestyna Avel, Mordrick Mansel, Spectre de Théopold, Princess Delilah </p><p><b>Récompenses acquises </b>: l'herbe de Cuthana, une plume argentée, 50.000 xp. </p><p>Vous pouvez apprendre Guérison et/ou Sanctuaire de l'évêque Crowbanner (s'il est en rémission). </p>",
        "images": [],
        "order": 10
      },
      {
        "title": "Le rituel de Zhakar",
        "description": "<p>Allez voir Zhakar dans sa tour et dites lui \"<b>Rituel</b>\". Il vous demandera les objets suivants afin de préparer le rituel pour le transfert vers Stoneheim : </p><ul><li>1 (Un) os de squelette des Sorciers squelettes</li> <li>1 Fiole de sang gobelin des gobelins</li> <li>1 Fiole d’eau cristalline des Pillards des dunes, Grott ou un de ses acolytes.</li> <li>1x Baies de belladone droppées par Greyleaf</li> <li>La plume argentée donnée par la princesse Delilah (bénéfique) ou par Shadeen (maléfique)</li> <li>5000 pièces d’or</li></ul><p>Une fois le rituel lancé, vous aurez à attendre 1 heure en temps réel avant que Zhakar ne vous envoie sur Stoneheim quand vous lui reparlerez. </p><p><b>Remarque 1 :</b> Zhakar se chargera de retirer les clefs qui restent dans votre inventaire au moment de la téléportation sur StoneHeim. </p><p><b>Remarque 2</b> <b>:</b> Si vous avez oublié de mettre votre sanctuaire au temple de Stonecrest (pour 25.000 po), retournez voir Zhakar et dites-lui \"rituel\". Il vous téléportera à nouveau sur SH pour la modique somme de 200 x votre level. </p><p><b>PNJ impliqué </b>: Zhakar </p><p><b>Récompense acquise</b>: Accès à Stoneheim </p><p> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> </p>",
        "images": [],
        "order": 11
      }
    ],
    "credits": [
      "T4C NMS Révolution wiki",
      "Compl"
    ]
  },
  {
    "title": "Accès maléfique SH",
    "slug": "acces-malefique-sh",
    "zone": "Stoneheim",
    "prerequisites": [],
    "rewards": [],
    "npcs": [
      "Shadeen",
      "Elysana Blackrose",
      "Roi Théodore",
      "Samuel",
      "Drardos",
      "Zhakar",
      "Bane Gwengad",
      "l'évêque Crowbanner",
      "Rondy",
      "Geram",
      "Talon Dirsell",
      "Sigfried",
      "Nafuhr Morzhol",
      "Menark"
    ],
    "gold": "",
    "steps": [
      {
        "title": "Shadeen",
        "description": "<p>Avant de quitter Arakas, Kalastor mentionna qu’une de ses amies, Shadeen, est sur Raven’s Dust. Allez au château de Bane Gwengad (sur l'île de Bane via le désert et le connecteur) et descendez dans le donjon du château. Cherchez Shadeen (voyez la carte : elle est dans une petite pièce à l’est, un peu après le fou qu'il faut tuer pour pouvoir parler à Bane). Une fois que vous l’avez trouvée, dites-lui \"Kalastor\" et elle vous demandera d'empoisonner l'évêque, éventuellement d'aller voir Elysana Blackrose (située à Silversky, sud-est du temple). PS : allez voir Elysana même si Shadeen ne vous parle que de l'évêque. </p><p>Shadeen ne vous parle pas ??? Comme vous voulez empoisonner l'évêque, il est évident qu'il doit être en bonne santé pour que Shadeen trouve utile de vous répondre !! (attendez qu'il soit guéri par un autre joueur. Si personne ne le guérit, il change d'état toutes les 3 heures... surveillez-le) </p>",
        "images": [],
        "order": 0
      },
      {
        "title": "Elysana",
        "description": "<p>Allez voir Elysana et dites <span class=\"npc-keyword\">\"Poison\"</span>, \"oui\" et elle vous demandera des yeux de kraanian, une pomme cirée et un saphir. Dites <span class=\"npc-keyword\">\"Pierre de saphir\"</span> et elle vous dira que le Roi Théodore doit sûrement en avoir une, puis dites <span class=\"npc-keyword\">\"pomme de cire\"</span> et elle vous enverra voir Samuel. Enfin dites <span class=\"npc-keyword\">\" yeux de kraanian\"</span> et elle vous dirigera vers Zhakar. </p>",
        "images": [],
        "order": 1
      },
      {
        "title": "Le saphir",
        "description": "<p>Allez voir le Roi Théodore (3ème étage) et dites <span class=\"npc-keyword\">\"Pierre de saphir\"</span>. Il vous demandera une peau d’antilope tannée. Dites <span class=\"npc-keyword\">\"tannée\"</span> et il vous enverra voir Samuel (au 2ème, près du trône). </p><p>Dites à Samuel \"tannée\" et il vous enverra voir Drardos (dans une maison vers (1590,2575) près de l’entraîneur de \"Transpercer Armure\"). Drardos vous demande une peau d’antilope que vous pouvez facilement vous procurer en tuant le-dit animal. Muni d'une peau d'antilope, dites <span class=\"npc-keyword\">\"tannée\"</span> à Drardos. Il vous demandera 1.400 pièces d’or, répondez <span class=\"npc-keyword\">\"oui\"</span> et il vous tannera la peau (parfois il peut rater et s'excusera platement). </p><p>Ensuite retournez voir le Roi Théodore. Dites <span class=\"npc-keyword\">\"pierre de saphir\"</span>, \"oui\" et il vous échangera la peau tannée contre un saphir. <b>Attention :</b> Le roi vous prendra toutes les peaux d'antilope tannées que vous avez sur vous !! </p>",
        "images": [],
        "order": 2
      },
      {
        "title": "La pomme de cire",
        "description": "<p>Allez voir Samuel et dites-lui \"pomme de cire\". Si vous n’avez pas effectué la quête du Bouffon Morbide, il vous demandera de la faire. Pour la pomme cirée, il vous demandera de lui ramener 10 cires de guêpes et 1.000 pièces d’or. Une fois que vous avez tout, retournez voir Samuel et dites <span class=\"npc-keyword\">\"pomme de cire\"</span>, \"oui\" et il vous donnera la pomme. </p>",
        "images": [],
        "order": 3
      },
      {
        "title": "Les yeux de Kraanian",
        "description": "<p>Maintenant allez voir Zhakar (Tour des Sorciers) et dites <span class=\"npc-keyword\">\"yeux de kraanian\"</span>. Il vous dira que des guerriers de la nuit les lui ont volés et il vous dirigera vers Bane Gwengad au château de Bane sur l'île de Bane (celui-ci ne vous parlera que si vous avez effectué la quête d’audience à Bane Gwengad). Allez voir Bane et dites-lui \"yeux de kraanian\" afin qu’il vous les vende pour 5.000 pièces d’or. </p>",
        "images": [],
        "order": 4
      },
      {
        "title": "La pomme empoisonnée",
        "description": "<p>Retournez voir Elysana Blackrose et dites <span class=\"npc-keyword\">\"Poison\"</span>. Elle vous demandera de revenir après avoir attendu une heure IRL. Après cette pause réparatrice et bien méritée, revenez et dites-lui à nouveau \"Poison\" et elle vous donnera la pomme empoisonnée. Allez voir l'évêque Crowbanner (près du trône du château) et dites <span class=\"npc-keyword\">\"donner pomme\"</span> (-23 karma). </p><p>Remarque #1: Vous pouvez effectuer cette quête à volonté </p><p>Remarque #2: Shadeen ne vous parlera que si l'évêque Crowbanner est en bonne santé. </p><p>PNJ impliqués: Shadeen, Elysana Blackrose, Roi Théodore, Samuel, Drardos, Zhakar, Bane Gwengad, l'évêque Crowbanner </p>",
        "images": [],
        "order": 5
      },
      {
        "title": "Les chroniques de l'apocalypse - la plume argentée",
        "description": "<p>Après avoir terminé la quête de la pomme empoisonnée (voir ci-dessus), parlez à Shadeen et dites <span class=\"npc-keyword\">\"Mission\"</span>, \"oui\" et elle vous donnera un parchemin de mauvaise action. </p><p>Pour obtenir la plume vous avez besoin de 4 items puis d'un ami qui vous aidera en volant le contenu du coffre au 1er étage du château de Silversky. Ceci va détourner l'attention des gardes de Ménark et celui-ci devra vous donner les \"chroniques\". </p><p>Les 4 items sont : </p><ul><li>un <u>parchemin de mauvaise action</u> déjà obtenu chez Shadeen.</li> <li><u>une chope de bière vide</u> obtenue chez Thorbin Kaloneg dans la taverne de Silverky, pour la modique somme de 10 po.</li> <li><u>une dent de tigre</u> obtenue à Lighthaven en parlant à Sigfried le marchand d'armes. Dites-lui \"dent\", \"défaire\", \"oui\" et il vous vendra une \"dent de dragon \" pour 200 pièces d’or. Allez voir Nafuhr Morzhol (marchand d'armure de Silversky, près du château) et dites-lui \"dent de dragon\". Il vous dira que la dent est fausse. Revenez à Lighthaven voir Sigfried et dites-lui \"dent de dragon\" et il admettra que la dent est fausse. Pour se faire pardonner, il vous donnera une \"dent de tigre \".</li> <li><u>10 000 pièces d'or</u> environ.</li></ul><p>Une fois réunis, remettez tous les items à votre ami et ensuite : </p><p>Votre ami pourra parler à Doremas (situé à l’ouest de la fontaine de Silversky) et ce dernier lui indiquera les noms des PNJs complices pour obtenir les combinaisons pour ouvrir le coffre. </p><p>Pour trouver la combinaison votre ami doit dire <span class=\"npc-keyword\">\"Combinaison\"</span> aux PNJ suivants : Rondy (près des champs de Silversky), Geram (Taverne de Silversky) et Talon Dirsell (le banquier, près du coffre du château de Silversky, au premier étage à gauche). </p><ol><li>Rondy (dans une maison vers 1590, 2500) désirera jouer à un jeu (celui du plus (GRAND) ou du moins (PETIT) allant de 1 à 50) jusqu’à trouver le nombre. Chaque essai coûte 1.000 pièces d’or. L'ami doit lui dire <span class=\"npc-keyword\">\"combinaison\"</span> et tenter en essayant DEVINER 10 (par exemple) Continuez jusqu’à trouver le premier nombre de la combinaison. (Mot-clé : <span class=\"npc-keyword\">\"combinaison\"</span>, \"deviner XX\" (XX=nombre allant de 1 à 50))</li> <li>Geram (à la taverne) vous demandera une pièce d’or. Dites <span class=\"npc-keyword\">\"oui\"</span> puis \"Combinaison\" et il vous demandera la \"chope de bière\" . Dites à nouveau \"oui\" à Geram et il vous donnera le second nombre de la combinaison</li> <li>Talon Dirsell (1er étage gauche - pour rappel) et dites-lui \"combinaison\". Il demandera la dent de tigre. Dite ''oui'' et Il vous donnera le 3e nombre de la combinaison.</li></ol><p><br> </p><p>Votre ami doit ensuite se positionner près du coffre à ouvrir (1er étage du château à gauche) et VOUS vous devez aller vous mettre à côté de Menark (1er étage du château, coursive nord). Exemple : Si la combinaison qui vous est révélée est 1 DROITE, 20 GAUCHE et 10 DROITE, votre ami devra cliquer une fois sur le coffre, et taper DROITE 1, recliquer sur le coffre, taper GAUCHE 20, etc... (n'oubliez pas les majuscules ni de saisir GAUCHE ou DROITE avant le nombre). </p><p>Dès que votre ami a ouvert le coffre (en récompense, il reçoit 10.000 xp et entre 3.000 et 5.500 pièces d’or), il doit vous prévenir. Vous devez alors cliquer rapidement sur Menark et lui dire <span class=\"npc-keyword\">\"chronique de l'apocalypse\"</span> ( note : pas de \"s\" à \"chronique\"). Il vous demandera si vous le menacez, répondez <span class=\"npc-keyword\">\"oui\"</span> et il tentera d’appeler les gardes, mais en vain. La raison est simple : les gardes tentent d’attraper votre ami voleur qui a ouvert le coffre !! Il est donc obligé de vous donner les Chroniques de l'Apocalypse. </p><p><b>IMPORTANT</b> : <b>Retournez voir Shadeen</b> et dites <span class=\"npc-keyword\">\"oui\"</span>, \"récompense\". Vous serez récompensé par 5.000 xp et par une plume argentée, qui vous sera utile pour la quête d’accès à Stoneheim. </p><p><b>Remarque #1</b>: Il est possible que Shadeen vous demande de tuer Iago Caballero tout d’abord (il est au sud-ouest de Silversky). Si c’est le cas allez le tuer et dépêchez-vous de revenir voir Shadeen car si Iago réapparaît, vous devrez retourner le tuer ! </p><p><b>Remarque #2:</b> Si vous perdez votre parchemin d’acte maléfique, retournez voir Shadeen pour en demander un autre. </p><ul><li>PS: Ne pas faire d avance et mettre au coffre il sera pas bon si vous le ratter faut le perso qui fait les chronique retourne lui meme a shadeen demander les parcho de mauvaise action.</li></ul><p><b>PNJ impliqués:</b> Shadeen, Rondy, Geram, Talon Dirsell, Sigfried, Nafuhr Morzhol, Menark </p><p><b>Mini Boss impliqué</b>: Iago Caballero (si nécessaire) </p><p><b>Récompense acquise:</b> Pour vous, la plume argentée, 5.000 xps. Pour l'ami qui vous a aidé, 10.000 xps et entre 3.000 et 5.500 pièces d’or. </p>",
        "images": [],
        "order": 6
      },
      {
        "title": "Damien",
        "description": "<p>La plume argentée est maintenant dans votre besace. Prenez aussi 50.000 pièces d'or. </p><p>Rendez-vous chez le PNJ nommé Monseigneur Damien (Ouest du pont menant au caves orques (1025,2100)). Dites-lui \"Shadeen\", \"Non\". Il fera apparaître des monstres nommés Assassins masqués. Tuez-les. </p><p>Reparlez à Damien. Dites <span class=\"npc-keyword\">\"aide\"</span>, \"oui\" et il vous demandera de réaliser quelques travaux pour lui. Dites <span class=\"npc-keyword\">\"cadeau\"</span>, \"preuve\", \"abandon\" et il vous demandera si vous êtes d'accord de payer la somme de 50 000 pièces d’or. Répondez <span class=\"npc-keyword\">\"non\"</span> et il vous demandera 25.000 pièces d’or. Dites <span class=\"npc-keyword\">\"oui\"</span>, \"comment\" et il vous donnera un parchemin bien enroulé, et vous dira que vous avez 3 tâches a accomplir avant de tuer Shadeen. (si vous êtes bloqué, au moment ou il vous demande 50K or dites <span class=\"npc-keyword\">\"oui\"</span> puis \"je veux m'allier avec Ogrimar\", \"preuve\" et \" comment\"). </p>",
        "images": [],
        "order": 7
      },
      {
        "title": "Tâche 1 : Parler aux PNJ",
        "description": "<p>Allez parler dans l'ordre à tous ces PNJ : </p><ol><li>Allez à Silversky et trouvez TALIRON (marchand d’armures à côté du magasin de potions). Dites lui \"visiteur\" et il vous enverra voir Belagan (l’assistant d’Adriana, salle d'entraînement).</li> <li>Dites deux fois \"visiteur\" à BELAGAN et il vous enverra voir Nafuhr Morzhol (marchand d’armures à côté du château).</li> <li>Dites encore \"Visiteur\" à NAFUHR MORZHOL (marchand d'armes en 1455,2470) et il vous enverra voir Boreas (marchand de potions). S'il reste muet allez directement voir Boreas (vérifiez aussi que vous avez assez d'or sur vous !).</li> <li>Dites encore \"visiteur\" à BOREAS et il vous enverra voir Kiadus (marchand d’armes au premier étage du château).</li> <li>Dites <span class=\"npc-keyword\">\"visiteur\"</span> puis \"soeur\" à KIADUS et il vous demandera 2.000 pièces d’or. Dites <span class=\"npc-keyword\">\"oui\"</span>, \"soeur\" et il vous dira que la sœur du visiteur est Amandra (maison d’Adriana, salle d'entraînement).</li> <li>Allez voir AMANDRA (1588,2530) et dites-lui \"visiteur\". Elle vous conseillera d’acheter la Lame de Destruction à Kiadus.</li> <li>Allez voir KIADUS et dites-lui \"épée\" deux fois. Il vous demandera 100 milliards de pièces d’or (mais bien sûr, je vais faire un crédit à vie et je reviens…). Dites à nouveau \"épée\", et il demandera 25.000 pièces d’or (il faut toujours marchander !). Achetez l’épée et retournez voir Amandra.</li> <li>Dites <span class=\"npc-keyword\">\"visiteur\"</span> à AMANDRA. Elle vous dira que l’épée est fausse. Vous devez chercher son frère pour en avoir une vraie… Allez vers la tour des sorciers (Zhakar) puis dirigez-vous vers l’ouest jusqu’à atteindre la mer. Allez maintenant au Sud jusqu’à arriver à la maison du frère d’Amandra : Haden.</li> <li>Dites <span class=\"npc-keyword\">\"lame de destruction\"</span> à HADEN Shadeen\" puis \"aide\", \"Stoneheim\" et il vous enverra voir Zhakar pour le rituel. </p><p><b>PNJ impliqués </b>: </p><ul><li>Monseigneur Damien, Taliron, Belagan, Nafuhr Morzhol, Boreas, Kiadus, Amandra, Xanth.</li></ul><p><b>Mini Boss impliqués : </b> </p><ul><li>Haden, Shadeen la dague</li></ul>",
        "images": [],
        "order": 10
      },
      {
        "title": "Le rituel de Zhakar",
        "description": "<p>Allez voir Zhakar dans sa tour et dites lui \"Rituel\". Il vous demandera les objets suivants afin de préparer le rituel pour le transfert vers Stoneheim : </p><ul><li>1 os de squelette des Sorciers squelettes</li> <li>1 Fiole de sang gobelin des gobelins</li> <li>1 Fiole d’eau cristalline des Pillards des dunes ou Grott...</li> <li>1x Baies de belladone droppées par Greyleaf</li> <li>La plume argentée donnée par la princesse Delilah (bénéfique) ou par Shadeen (maléfique)</li> <li>5000 pièces d’or</li></ul><p>Une fois le rituel lancé, vous aurez à attendre 1 heure en temps réel avant que Zhakar ne vous envoie sur Stoneheim quand vous lui reparlerez. </p><p><b>A noter </b>que Zhakar se chargera de vous retirer les clefs qui restent dans votre inventaire au moment de la téléportation sur StoneHeim. </p><p><b>PNJ impliqué </b>: Zhakar </p><p><b>Récompense acquise</b>: Accès à Stoneheim </p><p><br> </p><p> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> </p>",
        "images": [],
        "order": 11
      }
    ],
    "credits": [
      "T4C NMS Révolution wiki"
    ]
  },
  {
    "title": "Accès Stoneheim Déchu",
    "slug": "acces-stoneheim-dechu",
    "zone": "Stoneheim",
    "prerequisites": [],
    "rewards": [],
    "npcs": [],
    "gold": "",
    "steps": [
      {
        "title": "Introduction",
        "description": "<p>Allez au sous-sol de Nieve (2482,2202), trouvez <b>Pancake,</b> un kobold près des pommiers (2000,1790). Dites lui \"Mission\".<br>Partez à la chasse aux trois dragons de Raven's Dust. </p><p>Retournez voir <b>Pancake</b>, dites lui \"mission\", \"deuxième\", \"part\" et \"échange\". Il vous enverra chercher </p><ul><li>un anneau de platine,</li> <li>des bottes noires en peau de lézard,</li> <li>un pourfendeur de gobelin.</li></ul><p>Avec tous ces objets, dites <span class=\"npc-keyword\">\"échange\"</span> a <b>Pancake</b> pour obtenir un parchemin de StoneCrest. </p><p>Une fois arrivé à Stonecrest, parlez rapidement à <b>Forbes Nash</b> (200,760). Dites lui \"travail\" et il vous proposera un pacte. Cela fixera votre sanctuaire dans l'enclos des cochons!! </p><p> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> </p>",
        "images": [],
        "order": 0
      }
    ],
    "credits": [
      "T4C NMS Révolution wiki"
    ]
  },
  {
    "title": "La lettre de Crimsonscale",
    "slug": "la-lettre-de-crimsonscale",
    "zone": "Raven's Dust",
    "prerequisites": [],
    "rewards": [],
    "npcs": [
      "l'ermite Antonian",
      "Aquinos",
      "le Barde sans Nom",
      "un gardien",
      "Crimsonscale",
      "Custodian",
      "les 4 savants (the 4 Scholars)",
      "les 3 bibliothécaires (the 3 Librarians)",
      "Olin Haad",
      "Grand Prêtre Gunthar",
      "Efnisien",
      "Ramirgo",
      "Lothar",
      "Le Gardien Draconis",
      "la Gitane"
    ],
    "gold": "",
    "steps": [
      {
        "title": "La lettre de Crimsonscale",
        "description": "<p>C’est une quête immense qui se déroule en 3 parties: Arakas, Raven’s Dust, puis le dénouement s’effectue sur Arakas. </p><p>Elle est très intéressante par l'XP qu'elle donne (principalement sur Arakas) et par certains des items offerts (comme l'amulette de renouveau si vous êtes lanceur de sorts). </p><p>Si vous pensez renaître vous pouvez vous arrêter au Barde (pour l'xp donnée et l'accès au Mausolée - ou vous pourrez faire beaucoup d'xp, surtout en prêtre lumière) ou à la Bibliothèque (pour l'xp seule car le bracelet de flammes donné par le Dragon Crimsonscale est supprimé sur NMS). </p><p><b>Tip</b> : Petits indices pour savoir ou vous en êtes dans la quête si vous l'avez commencée il y a un bout de temps :-)) </p><p>La tablette de pierre runique, la gemme sombre et la Caledbolg sont supprimées aux renaissances. Il est impossible de supprimer la Caledbolg donc si vous avez la gemme sombre et pas la Caledbolg, il y a des chances que vous en soyez aux adorateurs (désert RD) ou peu avant. Si vous avez la Caledbolg, allez parler au Grand Prêtre de LH puis à Efnisien. </p>",
        "images": [],
        "order": 0
      },
      {
        "title": "ARAKAS",
        "description": "",
        "images": [
          "/t4c-nms-overview/assets/quests/la-lettre-de-crimsonscale/img_1_0.jpg",
          "/t4c-nms-overview/assets/quests/la-lettre-de-crimsonscale/img_1_0.jpg"
        ],
        "order": 1
      },
      {
        "title": "Kilhiam au temple de Lighhaven",
        "description": "<p>Allez au temple de Lighthaven et parlez à Kilhiam. Elle vous donnera une lettre (double clic dans l’inventaire) qui dit ceci: </p><p>\"Chère ami(e), vous trouverez cette lettre un peu bizarre, veuillez m’en excuser mais le problème est de la plus grande importance et avant que commence votre journée, je voudrais que vous compreniez parfaitement la situation dans laquelle nous avons été forcés d’entrer. Depuis ce jour, votre vie ne sera plus jamais la même. Je ne peux pas tout expliquer dans cette lettre, mais je vous recommande fortement d’aller voir celui que l’on nomme Efnisien. Il habite à l'étage d'une petite maison située à l’est du temple de Lighthaven. Rencontrez-le et il vous expliquera ce que vous devez connaître.\" </p>",
        "images": [],
        "order": 2
      },
      {
        "title": "Efnisien et ses gardes",
        "description": "<p>Dirigez-vous vers la maison d’Efnisien située à l'Est de la banque de Lighthaven et montez à l'étage. Dès que vous cliquez sur lui, 3 assassins apparaissent. Tuez-les et cliquez à nouveau sur Efnisien. Dites <span class=\"npc-keyword\">\"Gardes\"</span>, \"Assassins\", \"Olin Haad\", \"Siège de la ville\", \"Quelque chose\", \"Services\", \"Refusé\", \"Visite\", \"Lettre\" et vous en apprendrez sur Olin Haad et le cœur de pierre. Efnisien mentionne également que vous devez aller parler à Olin Haad mais que, si vous voulez que ce dernier vous porte attention, vous devez donnez une raclée à ses gardes ! </p>",
        "images": [],
        "order": 3
      },
      {
        "title": "Le château d'Olin Haad",
        "description": "<p>Dites <span class=\"npc-keyword\">\"Adieu\"</span>, dirigez vous vers la grotte (cave) de Lighthaven (au sud-ouest de la fontaine), entrez-y et trouvez le château d’Olin Haad (attention aux gardes, une bénédiction - même si c'est seulement celle de Zélina du temple - sera la bienvenue). Cliquez sur la porte du château et vous serez téléporté à l’intérieur. Suivez le tapis rouge et vous trouverez Olin Haad. Essayez de discuter avec lui. Il va refuser, ressortez et tuez environ 20 de ses gardes. </p><p>Puis retournez lui parler. Dites <span class=\"npc-keyword\">\"Chercher\"</span>, \"Combat\" et vous serez téléporté dans une pièce avec 4 Gardes d’Elite d’Olin Haad. LAISSEZ-VOUS TUER ! Ils ne mourront qu’en essayant de vous tuer ! Vous serez re-téléporté (tout rouge, avec 5% de vos PV, mais vous ne serez PAS mort) aux côtés d’Olin Haad. A ce point de la quête, vous recevrez l’aura Colère des Anciens (Wrath of the Ancients), un sort de protection permanent qui blesse de temps à autre les ennemis qui vous attaquent. Continuez le dialogue avec Olin Haad, en disant : <span class=\"npc-keyword\">\"Ils\"</span>, \"Haruspice\", \"Prophétie\", \"Graines\", \"Moi\", \"Nouvelle race\", \"Réponse\" et vous apprendrez des choses au sujet de la prophétie. Olin Haad mentionnera également que vous devez trouver le Grand Prêtre Gunthar et le prévenir qu’il ne pourra quitter Lighthaven en paix, tant qu'il n'aura pas rendu ce qu’il a promis. </p>",
        "images": [
          "/t4c-nms-overview/assets/quests/la-lettre-de-crimsonscale/img_4_0.jpg"
        ],
        "order": 4
      },
      {
        "title": "Grand prêtre Gunthar (au temple, sous-sol derrière le trône)",
        "description": "<p>Retournez au temple de Lighthaven (utilisez votre gemme de téléportation, c'est plus rapide) et cliquez sur la porte derrière le trône. Vous serez téléporté dans la petite pièce. Descendez dans le donjon et trouvez le Grand Prêtre Gunthar. Dites-lui \"Demandes\", \"Pierre\", \"Marchand\", \"Attendez\", \"Nécromancien\", \"Corrupteurs de Gluriurl\", \"Bataille des émanations\", \"Faucheurs de vie\", \"Dragons\", \"Complètement\", \"Theodore XIII\", \"Pierre du coeur\" et vous apprendrez au sujet du culte de Gluriurl, du Cœur de pierre, et de la vente de celui-ci à un marchand. Maintenant dites <span class=\"npc-keyword\">\"Oui\"</span> afin d’accepter d’aider Gunthar à trouver le Cœur. Dites <span class=\"npc-keyword\">\"Regarder\"</span> et il vous dira de chercher à Windhowl. </p><p>Vous recevez également 1.000 pièces d’or et 10.000 xp. </p><p>Continuez le dialogue en disant <span class=\"npc-keyword\">\"Nomade\"</span> et vous parlera du signe du marchand. </p>",
        "images": [],
        "order": 5
      },
      {
        "title": "A Windhowl (Ethan, Urik, maison du Nomade)",
        "description": "<p>Rendez vous à Windhowl. </p><p>Cherchez la maison de la guilde des Marchands située à gauche du marchand d’armes. Trouvez Ethan chef de la guilde des Marchands et dites-lui \"Nomade\", \"Raté\", \"Agressif\", \"Affaire\", \"Pierre du Cœur\" et il vous parlera un peu plus du Nomade et des marchands. Dès que vous lui aurez parlé de la Pierre du Cœur, il vous dira qu’il a un problème et qu’il ne peut plus perdre son temps avec vous. Dites <span class=\"npc-keyword\">\"Problème\"</span>, \"Taxes\" et il vous parlera des dettes d’Urik le Maître tailleur. Dites <span class=\"npc-keyword\">\"Mercenaires\"</span>, \"Tâche\" et \"oui\", acceptez d’aider Ethan à récupérer l’argent qu’Urik lui doit. </p><p>Retournez vers la maison d’Urik, située sous la taverne de Windhowl. Montez à l'étage et parlez à Urik. Dites-lui \"Idiot\", \"Discuter\", \"Affaire\". Il refusera de vous donner l’argent qu’il doit et appellera en renfort 3 voleurs. Mettez les au tapis et reparlez à Urik. Il vous donnera alors 1.000 pièces d’or et l’argent de ses dettes. </p><p>Retournez à la Guilde des Marchands et parlez de nouveau à Ethan. Cliquez sur lui, dites-lui \"Argent\" et il prendra son dû. </p><p>Vous recevez quant à vous 40.000 xp. </p><p>Dites-lui maintenant \"Nomade\", \"Leçon\", \"Suspecte\", \"Confrerie Obsidienne\", \"Aider\" et il vous dira qu’il suspecte qu’Urik et le Nomade travaillent ensemble. Dites <span class=\"npc-keyword\">\"Clefs\"</span> et il vous donnera un lot de clés qu’il a dérobé chez Urik. Il mentionnera également qu’une de ces clés ouvrirait peut-être la maison du Nomade. Dites <span class=\"npc-keyword\">\"Demeure\"</span> et il vous indiquera où se situe celle-ci, quelque part au sud de la ville. </p><p>Dirigez-vous vers le sud-ouest et cherchez la maison du Nomade. Elle est située à côté des remparts. Cliquez sur la porte, la clé disparaîtra et vous serez téléporté à l’intérieur de la maison. Montez au premier étage et commencez à ouvrir les 4 coffres (faites Ctrl+n pour voir les coffres). Dans un des coffres, vous trouverez une petite clé. Cliquez à nouveau sur le coffre et vous trouverez, cachées dans un double fond, 1.000 pièces d’or. Montez au deuxième étage et ouvrez les deux coffres. Dans l’un des deux, vous trouverez la lettre d’Owain. </p><p>La lettre dit (double clic dans l’inventaire): </p><p>\"Cher Nomad, </p><p>Nous avons finalement trouvé la grotte maudite que vous avez recherchée tant d’années. La semaine dernière, j’ai envoyé une équipe afin de retrouver la relique que vous aviez demandée mais ils ne sont jamais revenus… J’en ai parlé avec Urik, et il me força à envoyer une deuxième équipe, dont seulement un seul hommes est revenu, les bras rongés ! J’arrête. Vous ferez ce que vous voulez mais je n’envoie plus personne dans cette place damnée. J’attendrai au camp des Druides au Nord-Est d’Arakas dix jours. Si pour n’importe quelle raison, j’y apprends que vous amenez Urik avec vous, ou si vous ne venez pas, je partirais. </p>",
        "images": [
          "/t4c-nms-overview/assets/quests/la-lettre-de-crimsonscale/img_6_0.jpg"
        ],
        "order": 6
      },
      {
        "title": "Le commandant Owain au camp des druides d'Arakas",
        "description": "<p>Traversez entièrement Arakas pour vous dirigez vers l’Ordre de la Nature (Camp des Druides au Nord-Est d'Arakas) et trouvez Yrian Holenarbed situé dans une maison à l’Est de Stonehenge. Parlez-lui et il vous demandera si vous êtes le voyageur envoyé par les vents afin de l’aider. Dites <span class=\"npc-keyword\">\"Oui\"</span>, \"Etat\", \"Voyageur\", \"Malheurs\", \"Odeur\", \"Resistance\", \"Nomade\" et vous apprendrez la disparition du Grand-père et la nausée causée par le Nomade. Continuez le dialogue en disant <span class=\"npc-keyword\">\"Bâton\"</span>, \"Commandant\" et vous apprendrez qu’il pourrait guérir cette nausée s’il avait le Sceptre de Solinae, mais le Nomade a ordonné à son Commandant de prendre ce sceptre. Il soulignera également que les troupes du Nomade sont stationnées au sud-est du camp des Druides à proximité de la rivière. </p><p>Dirigez-vous donc vers le Sud-Est, trouvez et tuez le commandant Owain (et, si vous le pouvez, ses serviteurs, les soldats d’Olin Haad). </p><p><b>Attention:</b> Le commandant Owain et ses soldats sont difficiles à bas niveau. Trouvez un ami qui peut vous aider ou soyez sûr de transporter beaucoup de potions de guérison ! </p><p>Une fois le commandant Owain mort, le sceptre de Solinae apparaît dans votre inventaire. Retrouvez Yrian Holenarbed et cliquez sur lui. Yrian prendra le Sceptre. </p><p>Vous recevrez 75.000 xp. </p><p>Dites-lui \"Nomade\" et il vous dira que le Nomade recherchait une crypte. Dites <span class=\"npc-keyword\">\"Crypte\"</span> et il vous parlera d’une route menant au temple située à proximité d’un campement quelque part à l’ouest. Vous recevrez également l’anneau gardien de vitalité et la gemme de vitalité (Guardian Ring of Vitality et Gem of Vitality). Equipez l'anneau et faites une macro avec la gemme (voyez ici comment faire). </p>",
        "images": [
          "/t4c-nms-overview/assets/quests/la-lettre-de-crimsonscale/img_7_0.jpg"
        ],
        "order": 7
      },
      {
        "title": "La gitane",
        "description": "<p>Dirigez-vous vers le campement de Gypsy la Gitane, situé au sud-est du pont allant en direction des grottes de la Vallée Maudite (en venant du Sud, une fois passé le pont à l'ouest de l’île aux démonicons, tournez immédiatement à gauche puis dès que vous le pouvez dirigez vous vers le nord). Trouvez la Gitane et parlez-lui. Dites <span class=\"npc-keyword\">\"Voyageur\"</span>, \"Voyante\", \"Nomade\" et elle vous dira qu’elle vous aidera à trouver le Nomade. Avant cela, elle vous posera quelques questions afin qu’elle s’harmonise avec votre aura. Répondez <span class=\"npc-keyword\">\"Oui\"</span>, \"Oui\", \"Donneur de vie\" et elle vous dira qu’il se trouve dans un ancien temple d’une divinité morte nommée Gluriurl. Ce temple se situe sur une île séparée de la terre ferme. Afin d’atteindre cette île, vous devez traverser une grotte se situant au nord. </p>",
        "images": [],
        "order": 8
      },
      {
        "title": "La crypte du nomade (le coeur et le sang de Gluriurl)",
        "description": "<p><b>La crypte du Nomade</b> </p><p> Entrez-y et continuez vers le Nord. Méfiez vous du Kraanien, il fait 200 pv de dégâts par coup qu'il vous porte. Poursuivez jusqu’à l’autel. La, vous verrez un portail et deux tourbillons. </p><p><b>La tombe du Déchu : Le coeur de Gluriurl</b> </p><p>Entrez dans le tourbillon de droite dans la cave des coeurs corrompus. Marchez vers le Nord et vous arriverez à la tombe du Déchu. Cherchez les guerriers Déchus, situés au nord de la crypte. Tuez-les jusqu’à ce qu’ils laissent tomber un cœur corrompu (à petit niveau faites vous aider). Ramassez-le et entrez dans le portail derrière eux. Vous serez à nouveau téléporté à côté de l’autel. </p><p><b>La cave de la corruption : le sang de Gluriurl</b> </p><p>Entrez maintenant dans le tourbillon de gauche et vous arriverez à la cave de la corruption. Allez vers l'ouest pour trouvez le puits portant l'inscription \"ici repose le sang de Gluriurl\", cliquez dessus et vous collecterez le sang de Gluriurl dans une bouteille (cette partie est difficile, être béni et rempli de potions est conseillé à bas level). Entrez enfin dans le portail et vous vous retrouverez de nouveau à proximité de l’autel. </p><p>Touchez l’autel et le cœur de Gluriurl commencera à battre, obligeant le portail à miroiter en retour. Plongez dedans et votre vision se brouillera pendant un court moment… </p><p><b>La crypte des pierres sombres</b> </p><p>En passant le portail vous arriverez à la Crypte des pierres sombres. Allez vers le nord-ouest et vous trouverez une cage thoracique. Touchez-la et vous recevrez la gemme sombre (Darkstone) et le message suivant vous apparaîtra : </p><p>\"Une gemme sombre flotte dans les airs là où le cœur devrait être. Avec grands soins, vous prenez la gemme sombre et la remplacez par le cœur de Gluriurl\". </p><p>La voix de la Gitane résonne alors dans votre tête: [Nom du joueur] ! Vous devriez venir me voir, j’ai quelque chose d’important à vous montrer !\". </p><p>Vous serez récompensé par 125.000 xp. </p>",
        "images": [
          "/t4c-nms-overview/assets/quests/la-lettre-de-crimsonscale/img_9_0.jpg",
          "/t4c-nms-overview/assets/quests/la-lettre-de-crimsonscale/img_9_0.jpg",
          "/t4c-nms-overview/assets/quests/la-lettre-de-crimsonscale/img_9_0.jpg",
          "/t4c-nms-overview/assets/quests/la-lettre-de-crimsonscale/img_9_0.jpg",
          "/t4c-nms-overview/assets/quests/la-lettre-de-crimsonscale/img_9_0.jpg"
        ],
        "order": 9
      },
      {
        "title": "Retour chez la gitane",
        "description": "<p>Retournez voir la Gitane et parlez-lui. Elle mentionnera qu’elle ressent la présence du coeur maléfique sur vous. Dites <span class=\"npc-keyword\">\"Coeur maléfique\"</span>, \"Rêves\", \"Cadavre délabré\", \"Plan\", \"Sacrifice\" et vous en apprendrez plus au sujet de la pierre noire maudite, les rêves étranges de la Gitane et votre nouvelle tâche. Vous devez rapporter la pierre noire au temple d’Arthek à Lighthaven. Dites <span class=\"npc-keyword\">\"Quelque chose\"</span> et elle vous offrira (selon votre choix) : </p><p>- Amulette de Renouveau et Gemme de Renouveau (indispensable aux lanceurs de sorts) (Amulet of Renewal and the Gem of Renewal) </p><p>- Amulette de Régénération et Gemme de Régénération (Amulet of Regeneration and the Gem of Regeneration) </p><p>- Carquois de stabilité gris (110 dext, 20 Force) (Trueshot's Quiver) </p><p>Votre choix fait, la Gitane vous conseille de vous rendre rapidement au temple de LightHaven (équipez l'amulette et faites une macro avec la gemme). </p>",
        "images": [],
        "order": 10
      },
      {
        "title": "Le chef des brigands Gorlok Bloodaxe",
        "description": "<p>Rendez-vous au temple de Lighthaven (utilisez la gemme de téléportation). Tentez de prendre la porte menant au grand Prêtre Gunthar : </p><p>La porte est fermée mais il y a un message dessus: </p><p>\"[Nom du joueur], je vous prie de bien vouloir m’excuser de ne pas être là pour vous accueillir, mais j’avais quelque affaire urgente à régler. Si vous désirez me rencontrer, parlez au prêtre du temple.\" </p><p>Allez parler avec Frère Kiran. Il vous demandera si vous veniez voir le Grand Prêtre Gunthar. Répondez <span class=\"npc-keyword\">\"Oui\"</span> et il vous dira qu’il a été invité à une réunion avec le chef de son ordre, il semblait qu’il avait quelque sérieuse affaire à régler. Dites <span class=\"npc-keyword\">\"Importantes choses\"</span>, \"Maison du Bourgmestre\" et il vous dira de le chercher dans un grand bâtiment situé à la fin de la rue partant vers le sud-est. Il vous mentionnera Kirlor Dhul, si vous avez des doutes. </p><p>Dirigez-vous vers la banque de Lighthaven et cliquez sur Kirlor Dhul le bourgmestre. Il vous informera au sujet d'une certaine agitation qui a eu lieu dans la rue quelques instants plus tôt. Il vous dira aussi que quelqu’un a peut-être vu ce qui s’est passé. </p><p>Sortez de la banque et cherchez ce quelqu'un qui est une femme nommée Amelia. Cliquez sur elle et elle vous suppliera de ne pas la tuer car elle n’a rien vu. Dites <span class=\"npc-keyword\">\"Tuez\"</span>, \"Eux\" et elle vous dira que six hommes ont attaqué Gunthar. Dites <span class=\"npc-keyword\">\"Brigands\"</span>, \"Ou\" et elle vous dira qu’ils partaient vers le sud-ouest à partir du pont gobelin ouest, à l’extérieur de la ville. </p><p>Dirigez-vous vers le pont de Lighthaven Ouest, et continuez vers l’Ouest jusqu’à ce que vous croisiez un chemin. Continuez sur le chemin vers le Sud et vous arriverez au camp des brigands. </p><p>Mettez au tapis les brigands et finalement Gorlok Bloodaxe (pas facile). Une fois que vous l’aurez tué, le Grand Prêtre Gunthar sera libéré (il apparaîtra à vos côtés). Cliquez sur lui et il vous remerciera. Il vous demandera également si vous avez retrouvé la pierre. Répondez <span class=\"npc-keyword\">\"Oui\"</span> et il vous demandera de vite ramener la pierre à Olin Haad. </p><p>Vous serez récompensé par 200.000 xp. </p><p>Retournez au château d’Olin Haad en passant par la grotte de LH. Cliquez sur ce dernier et dites <span class=\"npc-keyword\">\"Nomade\"</span>, \"Gemme sombre\", \"Pierre du coeur\", \"Ment\". Vous en apprendrez plus au sujet de la Pierre du Coeur et vous serez téléporté à la bibliothèque du château avec 3 gardes privés d’Olin Haad. Tuez-les (en tuer un seul suffit). Ressortez vite fait de la bibliothèque et reparlez à Olin Haad. Il vous enverra voir Gunthar le Grand Prêtre. </p>",
        "images": [
          "/t4c-nms-overview/assets/quests/la-lettre-de-crimsonscale/img_11_0.jpg"
        ],
        "order": 11
      },
      {
        "title": "Retour chez Gunthar au temple",
        "description": "<p>Retrouvez voir Gunthar au sous-sol du temple et dites-lui \"Regarder\", \"Cacher\", \"Dieux\", \"Service\", \"Corps physique\", \"Sacrifiant\", \"Transferer\", \"Sceau\", \"Veritables intentions\" et vous glanerez encore quelques informations au sujet de la Pierre du Coeur. Il vous demandera aussi de rencontrer un ancien ami connu comme étant le Barde sans Nom (Nameless Bard). Il vous dira également que vous devez d’abord parler avec Tarnian situé au sud-ouest du square de Lighthaven, près de la côte. </p>",
        "images": [],
        "order": 12
      },
      {
        "title": "Tarnian",
        "description": "<p>Trouvez Tarnian (vers 2780, 1200) et parlez-lui. Il vous demandera si vous venez de la part de Gunthar. Répondez <span class=\"npc-keyword\">\"Oui\"</span> puis dites <span class=\"npc-keyword\">\"Gemme sombre\"</span>, \"Digne\", \"Gluriurl\", \"Crane\", \"Celui\", \"Fils\", \"Meurtre\", \"Fanatique\", \"Croit\" et il vous donnera une tablette de pierre runique (Runed Stone Tablet ou RST). Dites <span class=\"npc-keyword\">\"Raven's Dust\"</span> et il vous donnera des indications afin de trouver Antonian l’ermite. Il vous apprendra à utiliser la tablette de pierre runique (faites une macro avec la gemme). </p>",
        "images": [],
        "order": 13
      },
      {
        "title": "Antonian l'ermite",
        "description": "<p>Afin de parler à Antonian l’ermite, activez votre macro tablette (RST). Il vous attend dans une maison à l'Est de la tablette de pierre runique d'Arakas, à peu de distance de la crypte d'Arakas. </p>",
        "images": [],
        "order": 14
      },
      {
        "title": "Les 5 nexus",
        "description": "<p>Cliquez sur Antonian et il vous demandera si vous avez la tablette de pierre runique de Tarnian. Répondez <span class=\"npc-keyword\">\"Oui\"</span>, puis \"Tablette de pierre runique\" et vous apprendrez que c’est une pierre de téléportation. Dites <span class=\"npc-keyword\">\"Clin d'oeil\"</span>, \"Prières\", \"Ancestrale\", \"Index d'un nexus\" et vous saurez que pour l’utiliser (pour gagner la tablette de Raven's Dust, mais vous devrez aussi avoir fait l'accès RD au préalable), vous avez besoin d’activer les pierres de connexion. Dites <span class=\"npc-keyword\">\"Lieu\"</span>, \"Emplacement\" et il vous dira que vous pouvez à tout moment utiliser la tablette pour lui rendre visite (cliquer sur la tablette vous téléporte juste à l’ouest d’Antonian l’ermite). A ce moment, il sera tellement absorbé par ses recherches qu’il en oubliera jusqu’à votre présence. Cliquez à nouveau sur lui et dites <span class=\"npc-keyword\">\"Oui\"</span>. Antonian vous donnera alors les indications suivantes : </p>",
        "images": [],
        "order": 15
      },
      {
        "title": "Nexus 1",
        "description": "<p>Voyagez vers le nord au dessus du camp gobelin et cherchez la rivière jusqu’à ce que vous trouviez un pont la traversant. Prenez ce pont et longez la rivière vers l'Est jusqu’à un îlot. Il y a une pierre de connexion tout à l'Est sur cet îlot (attention c'est très chaud...être béni est fortement conseillé). Cliquez sur la pierre et vous obtiendrez le message suivant: </p><p>\"Vous placez la tablette de pierre runique sur la pierre de connexion. La pierre de connexion émet un rayon lumineux qui vient frapper la tablette.\" </p><p>Puis activez rapidement votre tablette de pierre runique (RST) ou votre gemme HDV avant de mourir :))). </p>",
        "images": [],
        "order": 16
      },
      {
        "title": "Nexus 2",
        "description": "<p>Utilisez la tablette afin de retourner voir Antonian l’ermite. Cliquez sur lui, dites <span class=\"npc-keyword\">\"Oui\"</span> et il vous donnera la direction de la 2e pierre de connexion (située sur l'île aux Kraanians) : </p><p>Prenez la route vers le sud et continuez vers le sud-ouest à la première intersection. Peu après, la route tourne vers l’ouest, vous arriverez à un nouveau croisement. Continuez vers le nord, puis vers le nord-ouest et prenez le pont de l'île aux Kraaniens. Une fois traversé, continuez vers le nord et vous trouverez une autre pierre de connexion. </p><p>Suivez les directions et trouvez la 2e pierre de connexion (située au nord une fois le pont des kraanians franchi). Cliquez dessus et vous aurez à nouveau le message (vous pouvez directement allez vers l'ouest puis le Sud pour trouver le 4ème Nexus). </p>",
        "images": [],
        "order": 17
      },
      {
        "title": "Nexus 3",
        "description": "<p>Maintenant, utilisez la tablette afin de retourner voir Antonian l’ermite. Cliquez sur lui, dites <span class=\"npc-keyword\">\"Oui\"</span> et il vous donnera la direction de la 3e pierre de connexion: </p><p>Prenez la route du sud et continuez vers le sud-ouest à la première intersection. Peu après, la route se dirige vers l’ouest, vous arrivez à un nouveau croisement. Continuez vers le sud-ouest jusqu’à ce que vous passiez un pont, puis continuez vers le sud dans la vallée afin de trouver une autre pierre de connexion. </p><p>Suivez les directions et trouvez la 3e pierre de connexion (située au nord des montagnes de la ville des voleurs). Cliquez dessus pour le message. </p>",
        "images": [],
        "order": 18
      },
      {
        "title": "Nexus 4",
        "description": "<p>Maintenant, utilisez la tablette afin de retourner voir Antonian l’ermite. Cliquez sur lui, dites <span class=\"npc-keyword\">\"Oui\"</span> et il vous donnera la direction de la 4e pierre de connexion: </p><p>Suivez la route du sud et continuez vers le sud-ouest à la première intersection. Peu après, la route continue vers l’ouest, vous arrivez à un nouveau croisement. Continuez vers le nord puis vers le nord-ouest en traversant le pont de l'île aux Kraanians. Une fois traversé, suivez la rivière vers l’ouest jusqu’à rencontrer l’océan. Vous trouverez une pierre de connexion à côté du rivage. </p><p>Suivez les directions et trouvez la 4e pierre de connexion (allez vers l’ouest à partir du pont kraanian jusqu’à rencontrer l’océan, continuez au sud). Cliquez dessus pour obtenir à nouveau le message. </p>",
        "images": [],
        "order": 19
      },
      {
        "title": "Nexus 5",
        "description": "<p>Maintenant, utilisez la tablette afin de retourner voir Antonian l’ermite. Cliquez sur lui, dites <span class=\"npc-keyword\">\"Oui\"</span> et il vous donnera la direction de la 5e pierre de connexion : </p><p>\"Je n’ai pas de directions particulières pour cette pierre de connexion, mais je vous conseillerai d’aller vers le point situé au maximum vers le sud de cette île\". Avec ceci, vous devriez la trouver seul(e). </p><p>Suivez les directions et trouvez la 5e pierre de connexion (située au sud de la cave aux brigands, en face de l’océan, c'est la pointe Sud d'Arakas). Cliquez dessus et vous obtiendrez une dernière fois le message. </p><p>Enfin utilisez la tablette de pierre runique et retournez voir Antonian l’ermite. Il vous dira que vous avez trouvé toutes les pierres de connexion qu’il connaissait. </p><p><b>Remarque</b> : Vous pouvez enchaîner les cinq pierres de connexion sans retourner voir Antonian entre deux. </p><p><b>PNJ impliqués</b>: </p><p>Kilhiam, Efnisien, Olin Haad, Grand Prêtre Gunthar, chef de Guilde Ethan, Urik le tailleur, Yrian Holenarbed, La gitane Gypsy, Frère Kiran, Kirlor Dhul, Amelia, Tarnian, l'ermite Antonian. </p><p><b>Mini-boss impliqués</b>: </p><p>Assassins, gardes d'Olin Haad, Commandant Owen, Gorlok Bloodaxe </p><p><b>Récompenses acquises durant la partie \"Arakas\" de la quête</b>: </p><p>Colère des anciens (Wrath of the Ancients aura), </p><p>Anneau de Vitalité (0 stats) et Gemme de Vitalité. </p><p>Amulette de Renouveau et Gemme de Renouveau (0 stats) ou Amulette de Régénération et Gemme de Régénération (0 stats) ou Carquois de stabilité (Trueshot's Quiver, 110 Dex, 20 For). </p><p>Tablette de pierre runique (Runed Stone Tablet ou RST). </p><p>2.000 pièces d’or. </p><p>450.000 xp. </p>",
        "images": [],
        "order": 20
      },
      {
        "title": "Raven's Dust",
        "description": "<p>Quand vous aurez complété votre quête d’accès à Raven’s Dust bonne ou mauvaise et accédé à Raven's Dust (n'oubliez pas de mettre votre sanctuaire au temple de Silversky), retournez voir Antonian l’ermite et cliquez dessus. Il vous demandera si vous désirez connaître plus de directions pour les pierres de connexion. Répondez <span class=\"npc-keyword\">\"Oui\"</span> et il vous dira que vous avez trouvé toutes les pierres de connexion d’Arakas. Il vous dira également que vous devez retrouver son ami habitant la ville de Silversky. </p><p>Vous recevrez 250.000 xp. </p><p>Continuez le dialogue en disant <span class=\"npc-keyword\">\"Scribe\"</span>, \"Celui\" et il vous parlera du Barde sans Nom. </p>",
        "images": [
          "/t4c-nms-overview/assets/quests/la-lettre-de-crimsonscale/img_21_0.jpg"
        ],
        "order": 21
      },
      {
        "title": "Le Barde sans nom",
        "description": "<p>Rendez-vous à votre sanctuaire au temple de Silversky (Comme solution de secours, vous pouvez utiliser la tablette de pierre runique. La RST vous téléportera à l’est du lac tarentules. Ensuite dirigez-vous au Sud. Mais il vous faudra marcher longtemps pour arriver au temple de Silversky). </p><p>Parlez alors au scribe Aquinos (Scholar Aquinos). Dites <span class=\"npc-keyword\">\"Visite\"</span>, \"Lieu\", \"Ou\" et il vous dira où habite le Barde sans Nom. Les informations sont : Le Barde sans Nom vit au fond d’une caverne loin vers l’ouest. </p><p>Entrez dans la grotte et avancez, vous trouverez alors le Barde sans Nom (il a l'aspect d’une atrocité). Parlez-lui. Dites <span class=\"npc-keyword\">\"Punirrrr\"</span>, \"Abysses\" (attention : seulement 2 s), \"restes\" et il vous dira : dans un arbre, vous trouverez la sagesse, dans une fontaine, la connaissance. Où la sagesse et la connaissance fusionnent, la réponse que vous cherchez émergera. </p><p>Depuis le carrefour proche du Barde sans Nom, descendez vers le sud-est et trouvez l’Arbre de Sagesse (Tree of wishdom). Cliquez dessus et vous obtiendrez une Branche de sagesse. Maintenant, retournez sur vos pas et prenez le passage menant vers le nord-ouest à partir du Barde. Vous trouverez la Fontaine de Connaissance (Fountain of Knowledge). Cliquez sur la fontaine et vous utiliserez la Branche de sagesse afin de mettre en mouvement les Eaux de la Connaissance. Devant vos yeux ébahis, l’eau tourbillonne et forme un mot: ETHERE. </p><p><b>Vous obtenez 300.000 xp.</b> </p><p><b>Retournez voir le Barde</b> sans Nom et parlez-lui. Il vous dira que vous avez trouvé le mot de pouvoir ouvrant les grandes portes d'un terrible mal. Elles sont situées à proximité du point le plus au nord de cette terre. Afin de l’atteindre, vous devrez traverser des zones de ténèbres. Soyez certain que si les Eaux de la Connaissance ne vous ont pas donné toutes les informations que vous recherchiez, celui qui réside derrière ces portes pourra sûrement. Le Barde vous dira aussi que c’est votre malédiction. </p><p>Dites <span class=\"npc-keyword\">\"Malédiction\"</span> et il vous dira qu’il fût choisi un jour aussi et maudit également et qu’un jour, nous serions vengés. </p>",
        "images": [
          "/t4c-nms-overview/assets/quests/la-lettre-de-crimsonscale/img_22_0.jpg",
          "/t4c-nms-overview/assets/quests/la-lettre-de-crimsonscale/img_22_0.jpg"
        ],
        "order": 22
      },
      {
        "title": "Le Mausolée",
        "description": "<p>Dirigez vous vers la grotte (Broken Ones cave) connue sous le nom de cave de l'aveugle (au Nord de l'île). Entrez-y, dirigez vous vers l’ouest puis le nord et continuez jusqu’à ce que vous atteigniez la sortie vers le Mausolée (Mausoleum). </p><p>Sortez et continuez vers le nord-ouest dans le cimetière, jusqu’à ce que vous rencontriez un PNJ nommé \"un gardien\". Cliquez sur lui et il vous dira que le Mausolée situé derrière mène au sanctuaire de l’ancien Dieu de la Corruption, Gluriurl. Il vous dira également que seulement celui qui connaît le mot de pouvoir est autorisé à rentrer. Dites <span class=\"npc-keyword\">\"Mot de pouvoir\"</span>, \"Ethéré\" et il vous préviendra que le mausolée est un endroit dangereux. Dites <span class=\"npc-keyword\">\"Oui\"</span> et il vous fera passer la porte. </p>",
        "images": [],
        "order": 23
      },
      {
        "title": "Les 4 vicaires",
        "description": "<p>A l’intérieur du mausolée vous devez tuer les 4 Vicaires et récupérer leurs clés en cristal. Dirigez-vous vers le nord-est jusqu’à ce que vous atteigniez une grande pièce. Continuez alors vers le sud-est et tuez le Vicaire Kervian. Récupérez la clé de cristal violette et dirigez-vous vers le nord-ouest. A la première grande pièce, continuez nord-ouest jusqu’à atteindre une autre grande pièce Dirigez-vous vers le nord-est et allez vers le nord-est le plus possible. A la fin de la route, continuez sur le chemin en direction du nord-ouest. Trouvez et tuez le Vicaire Ramiel. Récupérez la clé de cristal verte. Dirigez-vous vers le nord-ouest et suivez le chemin qui continue vers le sud-ouest. Continuez vers le sud-ouest et comptez les routes que vous rencontrerez qui se dirigent vers le sud-est. Suivez la 4e route allant vers le sud-est que vous rencontrerez et vous trouverez le Vicaire Vharnes. Tuez-le et vous obtiendrez la clé de cristal bleue. Retournez en arrière vers le nord-ouest et tournez vers le nord-est. A la première intersection, continuez vers le nord-ouest puis vers le sud-est. Continuez vers le sud-est jusqu’à ce que vous rencontriez une route allant vers le nord-ouest. Continuez vers le nord-ouest et vous trouverez un portail. Partez vers le nord-ouest à partir du portail et vous trouverez le Vicaire Ashgoth. Tuez-le et vous obtiendrez la clé de cristal rouge. </p>",
        "images": [
          "/t4c-nms-overview/assets/quests/la-lettre-de-crimsonscale/img_24_0.jpg"
        ],
        "order": 24
      },
      {
        "title": "Le dragon Crimsonscale",
        "description": "<p>Après avoir tué les 4 vicaires, revenez vers le portail et entrez-y. Suivez le tapis rouge et vous rencontrerez Crimsonscale le dragon. Parlez-lui et dites <span class=\"npc-keyword\">\"Lettre\"</span>, \"Commencement\", \"Elu\", \"Justice\", \"Vents\", \"Bataille des émanations\", \"Olin Haad\", \"Fasciné\", \"Changé de camp\", \"Conseil des huit\" et vous apprendrez au sujet des plans machiavéliques d’Olin Haad au sujet du Conseil des Huit. Crimsonscale vous demandera votre aide. Répondez <span class=\"npc-keyword\">\"Aide\"</span> puis dites <span class=\"npc-keyword\">\"Empecher\"</span>, \"Grande Librairie\" et il vous donnera le nom du lieu où se situe la Grande Bibliothèque. Dites <span class=\"npc-keyword\">\"Quelque chose\"</span> et il vous donnera une fiole de sang de dragon (Vial of Dragon Blood). ps: (retiré aussi) </p><p>Attention : Le bracelet de flammes et la gemme de flammes (Armlet of Flames et Gem of Flames) sont <b><u>supprimés</u></b> sur NMS !! </p>",
        "images": [],
        "order": 25
      },
      {
        "title": "La grande bibliothèque",
        "description": "<p>Dirigez-vous vers la Grande Bibliothèque (située à l’est de l’entrée de la crypte de Raven’s Dust), allez au 3e étage et parlez avec le Conservateur (Custodian). Dites <span class=\"npc-keyword\">\"Barbares\"</span>, \"Incultes\", \"Rite de Passage\" et il vous donnera une énigme afin que vous lui prouviez que vous n’êtes pas ignorant. La voici: </p><p>\"Dos\" \"vaneslae\" \"navidal\", \"Kadrim\" \"lok\" \"ungrim\" \"dok\", \"Somalina\" \"oundi\" \"inesora\", \"Tharrgra\" \"nethdrovar\". Si vous pouvez me dire ce que cela signifie, non seulement je vous concéderai l’accès au dernier étage mais je serai en plus gentil avec vous. Voici un indice: vous serez incapable de résoudre cette énigme si vous n’allez pas visiter le sous-sol de la Bibliothèque. </p><p>Dirigez-vous vers les sous-sols où les 4 savants résident. Parlez-leur. </p><p>Au savant disant <span class=\"npc-keyword\">\"language of the Elves\"</span> (Pièce au nord-ouest), dites <span class=\"npc-keyword\">\"Dos vaneslae navidal\"</span>. Il répondra: \"Pour regarder quelqu'un\". </p><p>Au savant disant <span class=\"npc-keyword\">\"language of the Dwarves\"</span> (Pièce au sud-ouest), dites <span class=\"npc-keyword\">\"Kadrim lok ungrim dok\"</span>. Il répondra: \"Il suffit d'avoir des yeux\". </p><p>Au savant disant <span class=\"npc-keyword\">\"language of Faeries\"</span>, (Pièce au nord-est), dites <span class=\"npc-keyword\">\"Somalina Oundi Inesora\"</span>. Il répondra: \"Pour reconnaitre sa propre ignorance\". </p><p>Au savant disant <span class=\"npc-keyword\">\"language of Dragons\"</span> (Pièce au sud-est), dites <span class=\"npc-keyword\">\"Tharrgra nethdrovar\"</span>. Il répondra: \"Il faut ouvrir ses yeux\". </p><p>Retournez au 3e étage et reparlez avec Custodian. Dites <span class=\"npc-keyword\">\"Oui\"</span>, \"Pour regarder quelqu'un\", \"Il suffit d'avoir des yeux\", \"Pour reconnaitre sa propre ignorance\", \"Il faut ouvrir ses yeux\" et vous obtenez l’accès complet à la Bibliothèque. Dites <span class=\"npc-keyword\">\"Accès\"</span>, \"Oui\" et vous serez téléporté au 4e étage. </p><p>Parlez à un des bibliothécaires. Dites <span class=\"npc-keyword\">\"Oui\"</span>, \"Echange de l'essence\", \"Corps materiel\", \"Ogrimar\", \"Lothar le juste\", \"Abandonna\", \"Elvenweave\", \"Coeur\" et vous réaliserez que Olin Haad tente de ramener Gluriurl à la vie. </p><p><b>Vous recevez 500.000 xp.</b> </p><p>Parlez aux deux autres bibliothécaires et écoutez-les. L’un vous parlera de la pierre noire et l’autre du \"Harbringer\". Dirigez vous vers le château d’Olin Haad. </p>",
        "images": [],
        "order": 26
      },
      {
        "title": "Retour chez Olin Haad en son château",
        "description": "<p>Une fois au château, parlez à Olin Haad. Dites <span class=\"npc-keyword\">\"Defi\"</span> et vous serez téléporté dans une petite pièce avec Olin Haad. Il vous attaquera et comme vous ne pouvez pas le tuer, laissez le vous massacrer mais juste avant le coup final, vous serez téléporté de retour au château. Dites <span class=\"npc-keyword\">\"Invincible\"</span>, \"Heros\", \"Insidieuse voix\", \"Restes\" et vous saurez tout sur la résurrection de Gluriurl. </p>",
        "images": [],
        "order": 27
      },
      {
        "title": "Retour chez Gunthar au temple",
        "description": "<p>Retournez voir Gunthar et parlez-lui. Dites <span class=\"npc-keyword\">\"Benediction d' Artherk\"</span>, \"Âmes\", \"Stopper\", \"Débarrasser\", \"Faucheur\", \"Illusion\", \"Recemment\", \"Trompais\", \"Coeur d' Artherk\", \"Efnisien\" et vous apprendrez au sujet du Caledbolg, qui est gardé en sécurité en un lieu saint dans la partie sud-est du désert de Raven’s Dust. Il vous dira également que vous devez aller voir Efnisien. </p>",
        "images": [],
        "order": 28
      },
      {
        "title": "Retour chez Efnisien (1er étage de la maison au nord de la banque)",
        "description": "<p>Allez voir Efnisien et dites-lui \"Service\", \"Entrée\" et il vous dira que l’entrée est située dans la pièce située derrière la porte verrouillée (servez-vous des escaliers de cette pièce). Mais Olin Haad a trouvé un moyen alternatif pour y rentrer et il est à l’intérieur du temple maintenant. Il ne vous servira à rien d’entrer puisque vous ne pouvez pas le battre sans une arme spéciale (Caledbolg, l’arme enchantée). </p>",
        "images": [],
        "order": 29
      },
      {
        "title": "La Caledbolg (crypte du désert RD)",
        "description": "<p>Vous devez trouver la Caledbolg. Allez dans le désert de Raven’s Dust et dirigez vous vers le sud jusqu’à ce que vos atteignez une nouvelle rangée de montagnes. Cherchez l’entrée de la crypte vers l'Est. En face de celle-ci se situe le gardien de la porte nommé Ramirgo. Parlez-lui et dites <span class=\"npc-keyword\">\"Gardien\"</span>, \"Entre\" et il vous téléportera à l’intérieur. </p><p>Suivez le mur du donjon et tuez les 3 démons Terror Demon, Chaos Demon et Darkness Demon. </p><p>Maintenant dirigez-vous vers le milieu du donjon où vous trouverez 3 portails. Entrez dans l’un des trois et vous arriverez dans une petite pièce. Cliquez sur Lothar et vous recevrez la Caledbolg (une fois la Caledbolg obtenue, vous ne pourrez plus pénétrer dans la crypte). </p><p><br> </p><p><b>PNJ impliqués</b>: l'ermite Antonian, Aquinos, le Barde sans Nom, un gardien, Crimsonscale, Custodian, les 4 savants (the 4 Scholars), les 3 bibliothécaires (the 3 Librarians), Olin Haad, Grand Prêtre Gunthar, Efnisien, Ramirgo, Lothar </p><p><b>Mini-boss impliqués</b>: Vicaire Asgoth, Vicaire Kervian, Vicaire Vharmes, Vicaire Ramiel, Terror Demon, Chaos Demon, Darkness Demon </p><p><b>Récompenses acquises durant la partie \"Raven’s Dust\" de la quête</b>: Fiole de sang de dragon (vial of Dragon Blood), 1.050.000 xps </p>",
        "images": [
          "/t4c-nms-overview/assets/quests/la-lettre-de-crimsonscale/img_30_0.jpg"
        ],
        "order": 30
      },
      {
        "title": "Retour sur Arakas",
        "description": "<p>Cliquez sur lui et il déverrouillera la porte du rez-de chaussée. Descendez au sous-sol et entrez dans le Temple Sacré de Lothar. </p>",
        "images": [
          "/t4c-nms-overview/assets/quests/la-lettre-de-crimsonscale/img_31_0.jpg"
        ],
        "order": 31
      },
      {
        "title": "Le Temple de Lothar",
        "description": "<p>Dirigez-vous au nord, vers le centre du temple et vous verrez un Draconis nommé \"Le Gardien\" (Draconis Guardian). Il est encore vivant alors parlez-lui. Il vous demandera si vous venez de la part d’Efnisien. Répondez <span class=\"npc-keyword\">\"Oui\"</span>, \"Dragon\", \"Prophétie\", \"Stopper\", \"chambre mortuaire\" et vous en apprendrez plus au sujet de la prophétie. Il vous dira également que vous devez pénétrer à l’intérieur du portail derrière lui afin de stopper Olin Haad. </p>",
        "images": [],
        "order": 32
      },
      {
        "title": "Les 5 cristaux",
        "description": "<p>Le portail comporte 5 ouvertures correspondant à 5 cristaux. Afin de pouvoir activer le portail, vous devez trouver ces 5 cristaux: un rouge, un jaune, un bleu, un vert et un violet. </p><p>Regardez la carte pour voir où sont situés les 5 épreuves. </p><p><i><b>Pour le cristal bleu</b></i>, vous entrerez dans un labyrinthe dont les murs sont invisibles. </p><p>Suivez les flèches afin de sortir du labyrinthe, ouvrez le coffre (chest) et le cristal tombera dans votre sac. </p><p>Rentrez dans le portail et vous arriverez juste à l’entrée du labyrinthe. </p><p><i><b>Pour le cristal jaune</b></i>, vous devez tuer des Kraanians piétineurs jusqu’à ce qu’ils laissent tomber un cristal. </p><p>Une fois un cristal au sol, ramassez le (il est indroppable). </p><p>Puis poursuivez... </p><p><i><b>Pour le cristal vert</b></i>, vous devez traverser un grand labyrinthe. Vous arriverez à un coffre. </p><p>Ouvrez-le (2 fois) et le cristal vert tombera dans votre sac. </p><p>Rentrez dans le portail et vous arriverez à l’entrée de ce labyrinthe. </p><p><i><b>Pour le cristal rouge</b></i>, suivez le corridor et entrez dans le tourbillon au sol. </p><p>Vous arriverez dans un labyrinthe de tourbillons. Faites votre bonhomme de chemin jusqu’au coffre. Ouvrez-le et le cristal tombera dans votre sac. Entrez dans le portail et vous arriverez à côté du portail du 1er étage. </p><p>Légende de la carte ci-contre : S : Start (départ) ; Follow the numbers (suivez les numéros). </p><p><b>Pour le cristal violet</b>, vous devez fouiller 7 coffres différents. </p><p>Le cristal est placé aléatoirement dans un des coffres. </p><p>Trouvez-le et revenez au centre du temple. </p>",
        "images": [
          "/t4c-nms-overview/assets/quests/la-lettre-de-crimsonscale/img_33_0.jpg",
          "/t4c-nms-overview/assets/quests/la-lettre-de-crimsonscale/img_33_0.jpg",
          "/t4c-nms-overview/assets/quests/la-lettre-de-crimsonscale/img_33_0.jpg",
          "/t4c-nms-overview/assets/quests/la-lettre-de-crimsonscale/img_33_0.jpg",
          "/t4c-nms-overview/assets/quests/la-lettre-de-crimsonscale/img_33_0.jpg"
        ],
        "order": 33
      },
      {
        "title": "Mort de Gluriurl",
        "description": "<p><b>N'oubliez pas de parlez au gardien</b> si vous ne l'avez pas encore fait ! </p><p>Entrez maintenant dans le portail situé derrière Le Gardien et vous arriverez dans le tombeau. Allez alors vers le sud-est et vous trouverez Olin Haad. Equipez-vous de la Caledbolg et attaquez-le. Il mentionnera que le rituel est complet. Dès que vous l’aurez tué, Gluriurl, Dieu de la Corruption, apparaîtra. </p><p>Un message en lettres bleues apparaîtra à tous les joueurs : <b>\"Le ciel s'obscurcit soudainement…\"</b> </p><p>(parfois Gluriurl sera déjà activé par un joueur précédent qui aura échoué à le tuer) </p><p>Attaquez Gluriurl et tuez-le (n’oubliez pas de retirer rapidement la Caledbolg et de vous réarmer). Une fois tué, le message suivant apparaîtra : </p><p>Vous entendez soudainement la voix de la Gitane : \"Vous avez vaincu le Dieu de la Corruption ! Venez me voir dès quand vous le pourrez. Je dois vous remercier personnellement pour tout ce que vous avez fait\". </p><p>Et les lettres bleues, encore une fois pour tous les joueurs : <b>\"La terre se met à trembler violemment pendant quelques secondes…\".</b> </p><p><b>Attention</b> ! Gluriurl est très fort. Si vous êtes seul il vous faudra dépasser largement le level 100 (selon votre classe) pour l'affronter. </p>",
        "images": [],
        "order": 34
      },
      {
        "title": "Retour chez la Gitane",
        "description": "<p>Maintenant, retournez voir la Gitane pour votre récompense. Répondez <span class=\"npc-keyword\">\"Quatrième Prophétie\"</span>, \"gardiens respectifs\" et vous serez récompensé d’une amulette de rajeunissement, d’une pierre de rajeunissement, d’une amulette d'abondance, d’une pierre d'abondance et d’un carquois de stabilité rouge. </p><p><b>Conseil :</b> Après avoir tué Gluriurl, allez parler à Efnisien, il vous débarrassera de la gemme sombre. Par contre, seul un GM pourra vous débarasser de la Caledbolg. </p><p><b>PNJ impliqués</b>: Efnisien, Le Gardien Draconis, la Gitane </p><p><b>Mini-boss impliqués</b>: Olin Haad, Gluriurl </p><p><b>Récompenses acquises durant la dernière partie de la quête:</b> </p><ul><li>Amulette de Rajeunissement</li> <li>Pierre de Rajeunissement</li> <li>Amulette d'Abondance</li> <li>Pierre d'Abondance (0 stats)</li> <li>Carquois de Stabilité rouge (220 Dex, 30 Force).</li></ul><p><br> </p><p> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> </p>",
        "images": [],
        "order": 35
      }
    ],
    "credits": [
      "T4C NMS Révolution wiki"
    ]
  },
  {
    "title": "Le Karma",
    "slug": "le-karma",
    "zone": "Arakas",
    "prerequisites": [],
    "rewards": [],
    "npcs": [],
    "gold": "",
    "steps": [
      {
        "title": "Introduction",
        "description": "<p> </p>",
        "images": [],
        "order": 0
      },
      {
        "title": "Précisions si vous choisissez d'être du côté \"bon\"",
        "description": "<p>Pour monter votre Karma avant de faire les 6 clés, rendez-vous à Windhowl et parlez à \"un homme joyeux\" à la taverne tant qu'il vous répond puis allez au temple et parlez à Malaar, là aussi tant qu'il vous répond. Votre Karma doit passer à \"converti\" pour pouvoir faire toutes les clés. Si c'est encore insuffisant allez tuer Jarko (plusieurs fois)! </p>",
        "images": [],
        "order": 1
      },
      {
        "title": "ARAKAS",
        "description": "<ul><li><b>Edgar Gimplestratten (Arakas, Lighthaven)</b><br>Malus Karma quand vous le tuez, si vous n'avez pas encore commencé la quête du diable<br> </li> <li><b>Asarr (Arakas, Ville des voleurs)</b><br>Malus Karma si vous trahissez le bourgmestre de Windhowl, dans la quête de la lettre (quand il vous demande si vous voulez vous rattrapez dites non!).<br> </li> <li><b>Balork (Arakas, Lighthaven, Lighthaven, crypte du temple lvl #4)</b><br>Bonus Karma quand vous le tuez, si votre karma n'est pas trop négatif.<br> </li> <li><b>Dorken Rotsmell (Arakas, Nord-ouest de Lighthaven)</b><br>Bonus Karma si vous tuez Dorken, mais seulement si vous avez un karma négatif.<br> </li> <li><b>Un homme joyeux (Arakas,Taverne de Windhowl)</b><br>Bonus Karma si vous lui offrez 100 pièces d'or. (marche 10 fois seulement). Mot clefs : Travail, rumeurs, argent, oui, puis répétez argent et oui.<br><br></li> <li><b>Jarko le Nécromant (Arakas, Cave J lvl #3)</b><br>Bonus Karma si vous le tuez.<br> </li> <li><b>Kalastor (Arakas, Lighthaven)</b><br>Malus Karma si vous mauvais pour tuer Edgar et donnez les 1000 pièces d'or a Kalastor.<br> </li> <li><b>Malaar (Arakas, Temple de Windhowl)</b><br>Bonus Karma en faisant des donations de 10.000 pièces d'or en l'honneur de l'église d'Artherk. Mot clef: \"donation\", \"oui\" . Vous pouvez négocier en disant d'abord \"non\" il vous proposera alors 1.000 pièces d'or. Négociez tant que votre karma augmente. A un moment donné il faudra accepter de donner 10.000 pièces pour chaque don et obtenir enfin le grade de \"converti\".<br> </li></ul><ul><li><b>Mhorgwloth le Troll (Arakas, Maison du troll)</b><br>Malus Karma si vous le tuez.<br> </li> <li><b>Mirak Nira (Arakas, Windhowl)</b><br>Bonus Karma quand elle vous donne l'anneau de confiance (quête d'accès bon RD).<br> </li> <li><b>Chef orc Rénégat (Arakas, Cave Jarko lvl -3)</b><br>Malus Karma quand vous le tuez. </li></ul>",
        "images": [],
        "order": 2
      },
      {
        "title": "RAVEN'S DUST",
        "description": "<ul><li><b>Evêque Crowbanner (Raven Dust, château de Silversky)</b><br>Malus Karma pour l'empoisonneur avec la pomme (quête d'accès Stoneheim mauvaise).<br> </li> <li><b>Mordrick (Raven Dust, Château de Silversky)</b><br>Malus Karma (-100) quand vous retirez l'épée de puissance du puits. Bonus Karma (+100) quand vous donnez l'épée de puissance à Mordrick (quête d'accès Stoneheim bonne). </li> <li>Remarque : On raconte que quand quand vous avez décaissé le malus Karma, vous pouvez retourner faire des donations à Malaar au temple de Windhowl. Votre karma final s'en trouvera amélioré quand vous donnerez l'épée de puissance à Mordrick.<br> </li> <li><b>Princesse Delilah (Raven Dust, Château de Silversky)</b><br>Bonus Karma quand vous lui donnez l'herbe de Cuthana.<br> </li> <li><b>Princesse Delilah (Raven Dust, Château de Silversky)</b><br>Malus Karma si vous lui demandez de l'or.<br> </li> <li><b>Princesse Delilah (Raven Dust, Château de Silversky)</b><br>Bonus Karma si vous lui demandez d'enlever la marque de Balork.<br> </li> <li><b>Shadeen (Raven Dust, Cave du Château de Bane)</b><br>Bonus Karma pour tuer Shadeen la dague.<br> </li> <li><b>Shadeen (Raven Dust, Cave du Château de Bane)</b><br>Malus Karma si vous finissez la quête des Chroniques de l'Apocalypse et refusez de donner le livre à Shadeen la Dague.</li></ul><p><br> </p><p> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> </p>",
        "images": [],
        "order": 3
      }
    ],
    "credits": [
      "T4C NMS Révolution wiki"
    ]
  },
  {
    "title": "Le cadeau de la princesse",
    "slug": "le-cadeau-de-la-princesse",
    "zone": "Raven's Dust",
    "prerequisites": [],
    "rewards": [],
    "npcs": [],
    "gold": "",
    "steps": [
      {
        "title": "Gagnez un anneau de l'apprenti forgeron",
        "description": "<p>Si vous menez à bien cette quête, vous obtiendrez \"l'anneau de l'apprenti forgeron\". Cet anneau permet aux porteurs d'augmenter leurs chances de réussite d'une formule du métier forgeron de 2%. Cette quête n'est pas répétable ! </p><p>Montez au 4ème étage et parlez à la servante de la Princesse Delilah. Suivez les mots en blanc ... le... cadeau ...retrouver. Elle va vous envoyer chez la cuisinière (au rez-de-chaussée). </p><p>Retournez au rez-de-chaussée et dites <span class=\"npc-keyword\">\"cadeau\"</span> à la cuisinière. Elle vous enverra parler au garde de la prison. </p><p>Allez à la prison et parlez-lui. Dites lui \"cadeau\" et suivez les mots en blanc. Il vous dira que le cadeau est sur un banc proche de l'Evêque. </p><p>Retournez au 4ème étage et parlez au prêtre proche de l'Evêque. Dites lui \"cadeau\", il vous enverra parler aux courtisans au rez-de-chaussée. </p><p>Au rez-de-chaussée, parlez à un courtisan (bottes blanches) puis à deux courtisanes (robe verte deux fois puis robe violette). </p><p>La seconde vous enverra à nouveau chez la servante de la Princesse. </p><p>Celle-ci vous remettra enfin l'anneau. Bravo pour toutes ces marches et contremarches ! </p><p><br> </p><p> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> </p>",
        "images": [],
        "order": 0
      }
    ],
    "credits": [
      "T4C NMS Révolution wiki"
    ]
  },
  {
    "title": "Du Forgeron",
    "slug": "du-forgeron",
    "zone": "Niève",
    "prerequisites": [],
    "rewards": [],
    "npcs": [],
    "gold": "",
    "steps": [
      {
        "title": "Quête du forgeron de Niève",
        "description": "<p>Allez à Niève et parlez à Rodrick Mulin, situé près de la taverne de Niève. Il vous demandera de l'aide pour le réchauffer. Pour ce faire, il faudra lui ramener : </p><ul><li>10 peaux d'antilopes</li> <li>25 piles de bois d'arbre démoniaque</li></ul><p>Vous aurez en récompense un objet parmi les suivants : </p><ul><li>bouclier du froid</li> <li>anneau du froid (le plus intéressant)</li> <li>épée incrustée de glace (main droite ou gauche)</li></ul><p>aucune xp pour ce quête </p><p>Cette quête ne peut être effectuée qu'une seule fois ! </p><p><br> </p><p> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> </p>",
        "images": [],
        "order": 0
      }
    ],
    "credits": [
      "T4C NMS Révolution wiki"
    ]
  },
  {
    "title": "Enfant malade",
    "slug": "enfant-malade",
    "zone": "Niève",
    "prerequisites": [],
    "rewards": [],
    "npcs": [],
    "gold": "",
    "steps": [
      {
        "title": "Introduction",
        "description": "<p><b>Rendez visite à Martha</b> taches\", il vous demandera de trouver les 6 nexus sur SH, qui se trouvent le long des plages ... dites <span class=\"npc-keyword\">\"Acceptez\"</span> </p><p><br>Le deuxième se situe avant le pont de la ville des centaures, derrière les montagnes (785-971-0). <br>Le troisième surplombe les montagnes derrière le village skraug vert, à l'est (1386-516-0). <br>Le quatrième est au bout de la foret des gremlins (1195-350-0) .<br>Le cinquième est situé derrière le village skraug rouge (884-145-0). <br>...Et le sixième est tout en haut des montagnes de Mordenthal, en venant des skraugs rouges (266-90-0). <br>Puis retournez voir Mercyn Kignar pour qu'il vous active la RST... Récompense : RST de DI et 18M d'xp.<br> <br>Merci a Anvar pour sa contribution du 05/08/2009. Modifié le 7/09/2011 par Syll. </p><p> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> </p>",
        "images": [
          "/t4c-nms-overview/assets/quests/r-s-t-runed-stone-tablet-drake-island/img_0_0.jpg"
        ],
        "order": 0
      }
    ],
    "credits": [
      "T4C NMS Révolution wiki"
    ]
  },
  {
    "title": "Accès Forteresse des Damnés (désert DI)",
    "slug": "acces-forteresse-des-damnes-desert-di",
    "zone": "Drake Island",
    "prerequisites": [],
    "rewards": [],
    "npcs": [],
    "gold": "",
    "steps": [
      {
        "title": "L'accès à la forteresse des Damnés",
        "description": "<p>Vous devez être de niveau 200 pour effectuer cette quête. </p><p>IL vous faudra auparavant préparer une Malédiction en bouteille pour survivre dans la forteresse. </p><p>Cette quête permet d'accéder à la forteresse de la damnation (désert DI) puis à progresser jusqu'à Saalyel et la vaincre pour lui faire droper le Mjölnir du Damné, le Silice du Maudit etc. </p><p>L'accès partiel au niveau -1 du château permettra aussi faire droper des écailles de dragons et armure de décrépit (armure mage de guerre bas niveau). </p>",
        "images": [
          "/t4c-nms-overview/assets/quests/acces-forteresse-des-damnes-desert-di/img_0_0.jpg"
        ],
        "order": 0
      },
      {
        "title": "Préparation",
        "description": "<p>Avant d'entrer, il faut préparer une malédiction en bouteille, dont l'effet durera 1.00 heure. </p><ul><li>1 Crin de Dragon (drop des Démonicons de LH ou Dragonnets à la forteresse)</li> <li>1 Aigue-marine brute (drops mobs SH : loups ...)</li> <li>2 Feuilles de cigüe ( Arakas, voir plants)</li></ul><p>Avec ces items allez voir Squirrel au quartier des métiers de DI et dites-lui \"préparer\" il vous en fabriquera 5. </p><p>Avec cette potion vos résistances contre les chevaliers de la damnation seront drôlement renforcées. </p><p>Prévoyez aussi un stock de potions de soin <b>conséquent</b>. Les chevaliers de la damnation font excessivement mal et peuvent vous retirer entre 2000 et 4000 points de vie en l'espace de 3 secondes, veillez donc à ne pas laisser trop descendre votre vie. </p><p>Juste avant d'entrer prenez une malédiction en bouteille. </p><p>Voilà vous êtes maintenant prêt à affronter les méchants Chevaliers. </p><p>Quand vous tuerez le premier chevalier vous obtiendrez une gemme de l'ordre de la damnation qui vous permettra de capter une énergie pour passer le portail suivant etc... </p><p>Et hop partez à l'aventure !!! </p>",
        "images": [],
        "order": 1
      },
      {
        "title": "La première étape dans la forteresse",
        "description": "<p>Afin de progresser dans la Forteresse de la Damnation pour la première fois et atteindre les autres niveaux (dragonnets enragés, Saalyel...), vous devrez passer les portails dans un certain ordre. </p><p>A chaque fois vous devrez tuer au moins un des chevaliers de la damnation présents (et variantes mais pas les dragonnets) ce qui activera le portail suivant. </p><p>Lorsque vous achèverez une cible pour la première fois, un message vous indiquera que vous avez réussi à récupérer une partie de son énergie afin de charger votre gemme de l'Ordre de la damnation (obtenue en tuant le 1er chevalier). </p><p>C'est en la chargeant ainsi que cette dernière vous permettra de franchir les différents portails de la zone. </p><p>Avec le plan détaillé du RDC, un petit topo de Melandria dans son style inimitable. </p><p>Le 1er chev à tuer c celui de l'entrée (1) pis portail à gauche (2) on tue les 2 chev de la zone et on clike sur le portail près du mur dans même salle (3) on tue chev et on clike celui à côté (4) pis on re à l'entrée (1) et on va salle opposée faire même chose bouclier\" à Eiden. Si l'opération réussit, le skin de votre bouclier sera accordé à votre armure (personnellement je ne l'aime pas trop). En cas d'échec, vous récupérez votre bouclier d'origine. </p><p><b>Eiden vous donnera 10M XP s'il réussit la fabrication d'une partie d'armure métrolite.</b> </p><p><b>Note :</b> Vous remarquerez, si ce n'est déjà fait, que les boosts sont les mêmes. Vous échangerez donc le B'Ronkhanique contre le Métrolite uniquement pour le look. Ci-contre les deux descriptions identiques avec leur skin respectif. A vous de choisir. </p><p><br> </p><p> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> </p>",
        "images": [
          "/t4c-nms-overview/assets/quests/armure-metrolite/img_1_0.jpg",
          "/t4c-nms-overview/assets/quests/armure-metrolite/img_1_0.jpg"
        ],
        "order": 1
      }
    ],
    "credits": [
      "T4C NMS Révolution wiki"
    ]
  },
  {
    "title": "Armure Triplicite",
    "slug": "armure-triplicite",
    "zone": "Arakas",
    "prerequisites": [],
    "rewards": [],
    "npcs": [],
    "gold": "",
    "steps": [
      {
        "title": "Présentation",
        "description": "<p>Il existe deux types d'armure triplicite (et de robe). Il est possible d'en fabriquer une partie aléatoire à l'aide d'une quête auprès d'un PNJ différent selon le type de tripli : </p><p><b>Tripli mage</b> : requiert 350 intelligence, 100 sagesse et 50 endurance =&gt; <b>Kadjituu (Arakas)</b> </p><p><b>Tripli prêtre</b> : requiert 350 sagesse, 100 intelligence et 50 endurance =&gt; <b>Aqua Laguna (Stoneheim)</b> </p>",
        "images": [],
        "order": 0
      },
      {
        "title": "Ingrédients nécessaires à la fabrication",
        "description": "<p><br>Les ingrédients de fabrication sont les mêmes que ce soit tripli mage ou prêtre (la partie confectionnée est aléatoire) : </p><p>- 4 peaux de vers, drop des apocalypses des sables (vers), désert de DI. </p><p>- 4 gemmes enchantées, drop des drakes akaïstes, autour du lac du désert de DI (j'aurais dit oasis mais bon...). </p>",
        "images": [],
        "order": 1
      },
      {
        "title": "Réalisation de la fabrication",
        "description": "<p><b>Tripli mage</b> : rendez vous dans le repère de Jarko, cherchez-y <b>Kadjituu</b>, un gobelin de couleur noire, niveau -3, travail\"), il vous parle du livre d'Humterre et d'un vieillard. </p><p>- aller voir le <b>Vieillard Sénile </b>dans le village Métiers de Redwall et lui parler (lui dire <span class=\"npc-keyword\">\"travail\"</span>), il vous parle de potion de jouvence et du squelette Morgool (cimetière de Redwall). </p><p>- aller voir le <b>Squelette de Redwall</b> et lui parler (lui dire <span class=\"npc-keyword\">\"travail\"</span>), il vous donnera une potion de jouvence contre 4 os de squelette (qui drop aux squelettes dans la cave minotaure sur RD) et un crane du bouffon morbide (drop du bouffon au château de SS). </p><p>- porter la potion de jouvence au <b>Vieillard Sénile</b> qui vous donnera le livre en échange. </p><p>- porter le livre à <b>Kwazor</b> qui vous proposera une épreuve : vous êtes téléporté dans une cave et vous devez tuer 50 mobs en 10 mn pour réussir. </p><p>- si l'épreuve est réussie vous apprenez l'aura humterre. </p><p>MAJ du 4/4/18 : la consommation de mana pour réactiver l'aura est divisée par deux ! </p><p> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> </p>",
        "images": [],
        "order": 0
      }
    ],
    "credits": [
      "T4C NMS Révolution wiki"
    ]
  },
  {
    "title": "Un Vendeur Etrange",
    "slug": "un-vendeur-etrange",
    "zone": "Drake Island",
    "prerequisites": [],
    "rewards": [],
    "npcs": [],
    "gold": "",
    "steps": [
      {
        "title": "QUETE DU VENDEUR ETRANGE",
        "description": "<p>On trouve à Redwall un Vendeur Étrange. Il s'agit de Kalius, un PNJ en robe verte situé dans une petit bâtiment proche de la banque. Celui-ci vous donnera aléatoirement un objet si vous avez ce qu'il faut sur vous : </p><p>Au mot clef \"échange\" (ou \"travail\") il vous proposera d'échanger : </p><ul><li>Soit 10 crânes de démons incultes</li> <li>Soit 250 Scalps</li> <li>Soit 40 Crânes du bouffon morbide</li></ul><p>Et donnera en récompense aléatoirement : </p><ul><li>1 sachet de poudre jaune (5 chances sur 15)</li> <li>1 Potion de grande résistance à la nécromancie (protection contre le mal) (7 chances sur 15)</li> <li>1 Tiare dorée incrustée d'émeraudes (1 chance sur 15)</li> <li>1 Amulette des Héros (1 chance sur 15)</li> <li>1 Manteau des éléments (1 chance sur 15)</li> <li>De l'xp 12M ( je l'ai fait avec un lvl 136 et 200, le gain d'xp est fixe )</li></ul><p> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> </p>",
        "images": [],
        "order": 0
      }
    ],
    "credits": [
      "T4C NMS Révolution wiki"
    ]
  },
  {
    "title": "Le Forgeron",
    "slug": "le-forgeron",
    "zone": "Drake Island",
    "prerequisites": [],
    "rewards": [],
    "npcs": [],
    "gold": "",
    "steps": [
      {
        "title": "Quête du Forgeron Durikh (armes +4)",
        "description": "<p>Pour débuter cette quête vous devez parler au forgeron Durikh (qui se trouve dans une maison au Nord de Redwall). </p><p><b>Durikh vous demandera de lui prouver votre bonne volonté en lui rapportant ces objets : </b> </p><ul><li>10 piles de bois (Arbres S'intelles)</li> <li>20 baies sauvages (Arbres S'intelles / B'Zerilis)</li> <li>10 pommes magiques (Apocalypses des Sables de DI)</li> <li>2 bouteilles d'alcool (Gardiens du Désert DI)</li></ul><p><b>Apportez-les lui et reparlez lui (Il vous donne 15M d'xp). </b> </p><p>Le forgeron vous proposera alors de forger une arme à partir d'une base que vous devrez fournir. Pour ce faire il vous réclamera des objets : </p><ul><li>5 morceaux en or (Démons Incultes)</li> <li>10 morceaux d'adamandite (Gardiens du Coffre ou quête)</li> <li>1 marteau à forger (Drake Vigrator)</li> <li>1 sablier d'or (Drake Vigrator)</li></ul><p>Les morceaux d'adamandite peuvent se fabriquer chez l'assistant du forgeron d'après cette quête: Parlez à l'assistant du forgeron et dites lui: Adamandite </p><p>Il vous réclamera 20 morceaux de fer (B'Zurkhan) pour un morceau d'adamandite. En échange de ces objets, le forgeron vous proposera de forger une nouvelle arme. Pour ce faire, vous devez choisir le nom de l'arme. </p><p><b>Attention:</b> </p><p>- Vous devez avoir l'arme à améliorer dans votre inventaire, sinon le forgeron ne se souciera pas de vous. </p><p>- Le forgeron peut rater l'arme! (50%)! ce qui entraînera qu'elle se brise, à ce moment la il vous dédommagera d'un peu d'or .. </p><p>==&gt; A Noter: Si le forgeron rate une fois votre arme , il la réussira à coup sûr ensuite. Mais c'est seulement valable pour le type d'arme raté. </p><p>Enfin quand il rate votre arme vous devrez seulement fournir la deuxième série d'item (et l'arme) lors de votre prochain essai (qui sera réussi). Possible que ce soit vrai aussi si vous réussissez l'arme... </p>",
        "images": [],
        "order": 0
      },
      {
        "title": "Armes améliorables:",
        "description": "<ul><li>Arc long des étoiles (445) --&gt; Arc long des maitres étoilés (raté puis réussi par Uqbar)</li> <li>Arc composite Foehn (706) --&gt; Arc Foehn étoilé</li> <li>Lame des chimère (706) --&gt; Lame des chimères étoilée</li> <li>Ecimeuse (735) --&gt; Ecimeuse incrustée d'étoiles</li> <li>Claymore d'extinction (909) --&gt; Claymore d'extinction étoilée</li></ul><p><b>\"Durikh\" donne 15M XP en récompense de la fabrication d'une de ses armes.</b> </p><p>Pour ne pas rater inutilement demandez à Elcentor IG, il a tout réussi !! </p><p> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> </p>",
        "images": [],
        "order": 1
      }
    ],
    "credits": [
      "T4C NMS Révolution wiki",
      "Arc long des",
      "Pour ne pas rater inutilement demandez"
    ]
  },
  {
    "title": "Oscoor Kayle : Coup Puiss. et Coup Ass. à 105",
    "slug": "oscoor-kayle-coup-puiss-et-coup-ass-a-105",
    "zone": "Drake Island",
    "prerequisites": [],
    "rewards": [],
    "npcs": [],
    "gold": "",
    "steps": [
      {
        "title": "Art du coup puissant et du coup assommant",
        "description": "<p>La quête permet d'entraîner les compétences <b>Coup puissant </b> et <b>Coup Assommant</b> jusqu'à 105. </p><p><br> </p>",
        "images": [],
        "order": 0
      },
      {
        "title": "La quête",
        "description": "<p>Rendez vous Au nord-ouest de DI dans une petite maison ou vous trouverez Oscoor Kayle \"travail\" puis \"entraîner\") et il vous proposera d'entraîner coup puissant et coup assommant jusquà 105. Le coût est de 20.000 pièces d'or par point supplémentaire. </p><p>La quête n'est pas répétable. </p><p> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> </p>",
        "images": [],
        "order": 1
      }
    ],
    "credits": [
      "T4C NMS Révolution wiki"
    ]
  },
  {
    "title": "Le débutant",
    "slug": "le-debutant",
    "zone": "Arakas",
    "prerequisites": [],
    "rewards": [],
    "npcs": [],
    "gold": "",
    "steps": [
      {
        "title": "Introduction à la quête du débutant (colis de Franc)",
        "description": "<p>Cette quête est super-intéressante et vous permet de gagner : </p><ul><li><b>Environ 20 points de caractéristiques</b> ! (en humain)</li> <li>Environ 90k xp</li> <li>Un anneau qui vous boostera, au choix parmi 6</li></ul><p>Attention :<span style=\"font-style: normal;\"> Le <b>level maximum pour accomplir cette quête est 10</b>. Si vous êtes d'un lvl supérieur, c'est grillé.</span> </p><p><b>Conseils :</b> </p><ul><li>Si vous êtes prêtre/mage, attendez au moins d'avoir obtenu votre premier sort de soins (lvl 3) pour commencer. Si vous êtes guerrier, attendez d'avoir 25 d'endurance et une armure de cuir. En archer débrouillez-vous !!!</li></ul><ul><li><b>Pensez à vous faire bénir</b> par un ancien ou/et achetez une bénédiction à Zélina au temple de LH pour 1000 pièces d'or. Avec un peu de chance, elle vous évitera de mourir trop souvent !!</li> <li><b>Vous pouvez partir et revenir</b>. Si vous dites <span class=\"npc-keyword\">\"<b>partir</b>\"</span> à Franc (remettez l'épée dans votre sac), vous vous retrouverez au temple de LH, faites-vous (re)bénir. Vous pourrez ensuite revenir en reparlant au père Stanfrid.</li></ul><ul><li>Enfin gardez courage, il y en a pour 45 minutes, vous mourrez peut-être mais ça vaut le coup !!</li></ul>",
        "images": [],
        "order": 0
      },
      {
        "title": "Débuter la quête",
        "description": "<p>Tâchez de vous faire bénir avant de commencer. </p><p>Vous pouvez de plus acheter une bénédiction de 600 PV à Zélina au temple de LH pour 1000 pièces d'or (le dragon à la fontaine vous donnera 5000 pièces d'or si vous lui dites <span class=\"npc-keyword\">\"or\"</span>). </p><p><b><u>Cette bénédiction qui dure 40 minutes s'ajoutera à toute autre !</u></b> </p><p>Parlez au père Stanfrid à <b>l'intérieur</b> du temple de LightHaven, dans la partie Nord-Ouest. Dites-lui \"Travail\", ensuite \"Oui\". </p><p><b><u>Il vous donnera une épée de fou</u></b> (Dommage : 51-100, +20.000 d'attaque) ainsi que 20 potions de guérison (faites une macro). </p><p><b><u>Équipez cette arme</u></b> pour tuer les monstres de la quête. </p><p>Vos sorts ne vous sont d'aucune utilité, sauf votre éventuel sort de soin.<br><br> </p>",
        "images": [
          "/t4c-nms-overview/assets/quests/le-debutant/img_1_0.jpg",
          "/t4c-nms-overview/assets/quests/le-debutant/img_1_0.jpg"
        ],
        "order": 1
      },
      {
        "title": "1ère épreuve : Araignées (environ 4000 points d'expérience)",
        "description": "<p>Reparlez à Frank, vous serez téléporté devant l'escalier de la première épreuve. Descendez l'escalier, une fois à l'intérieur, vous tomberez nez à nez avec des araignées. </p><p>Elles sont de couleur brune ou verte, et lâchent de l'or ainsi que des potions. Vous devez en tuer 50 avant de pouvoir passer le portail au fond de la cave au Nord-Ouest (vous pouvez compter le nombre d'araignées déjà tuées en regardant en jeu le Livre des Quêtes situé à droite de la barre de chat). Les araignées tuées vous rapportent environ 1000 points d'expérience au total. </p><p>Quand vous passez le portail, une araignée géante, mini-boss, vous attend de l'autre côté. Tuez-la. Elle drope à 100% le premier morceau de parchemin qu'il vous faut pour terminer la quête <u>(<b>faites Ctrl N pour le voir</b>).</u> Ramassez le. Si vous êtes plein, déposez vos potions ou buvez-les. Si l'araignée n'est pas là c'est qu'elle vient d'être tuée. Elle respawn toutes les 10 minutes. </p><p>Ensuite retournez voir Frank. Il vous donnera 3000 points d'expérience et vous téléportera devant l'escalier de la seconde épreuve... </p>",
        "images": [
          "/t4c-nms-overview/assets/quests/le-debutant/img_2_0.jpg"
        ],
        "order": 2
      },
      {
        "title": "2ème épreuve : Bébé-dragons (environ 13.000 points d'expérience)",
        "description": "<p>Passé l'escalier, allez au Nord-Ouest de l'entrée pour parler au PNJ Banon. Dites-lui \"dragon\", il vous demandera de </p><p>récolter des dents de dragon (15 dents). Pour vous aider il vous donnera aussi 20 potions de guérison. N'oubliez pas de préparer la macro. </p><p>Petit plus, si vous ne sortez pas, vous pouvez faire autant de fois que vous voulez les dents par 15, à chaque fois, vous aurez 5000 pièces d'or, pratique mais chaud... :D </p><p>Attention, les bébé-dragons font très mal à distance avec leur sort de feu. Prenez les au corps à corps (pas plus de 2 ou 3 à la fois) et cela ne devrait pas poser de problèmes. Le taux de drop des dents est de 20% à 30%. </p><p>Une fois les 15 dents récoltées, retournez voir Banon qui vous donnera 5000 pièces d'or. Les dragons tués vous rapportent environ 8000 points d'expérience. </p><p>Ensuite, retournez voir Frank. Il vous donnera un morceau de carte et 5000 points d'expérience. </p>",
        "images": [
          "/t4c-nms-overview/assets/quests/le-debutant/img_3_0.jpg"
        ],
        "order": 3
      },
      {
        "title": "3ème épreuve : Les miroirs (10.000 points d'expérience)",
        "description": "<p>À l'intérieur de la cave, vous trouverez un pentagramme de sang au sol, plusieurs portails ainsi que 3 coffres. </p><p>Cette quête est sympa mais déroutante. Ici, pas de monstres, mais un cheminement à trouver au travers de 5 portails. </p><p>Le but est de traverser les portails dans un ordre précis, afin de vous faire téléporter dans une pièce avec un coffre qui contient le morceau de carte. Il faut traverser 5 miroirs pour compléter un combinaison. </p><p>Il est possible que vous fassiez une bonne combinaison MAIS ne tombiez pas dans la bonne pièce. Il sera indiqué \"Le coffre est vide\". Essayez alors une autre combinaison. </p><p>Retournez voir Frank pour la suite. Il vous donnera 10.000 points d'expérience (et des potions de guérison?). </p>",
        "images": [
          "/t4c-nms-overview/assets/quests/le-debutant/img_4_0.jpg"
        ],
        "order": 4
      },
      {
        "title": "4ème épreuve : La folle (environ 30.000 points d'expérience)",
        "description": "<p>Frank vous a redonné tous les bouts de parchemin afin que vous puissiez assembler ceux-ci avec le dernier bout. Il vous met en garde : une fois accompli, ne regardez pas la carte. Mais comme ils sont tous un peu barjos dans cette quête, Frank se fout éperdument que vous regardiez ou non la carte, et il serait même préférable de la regarder, vous comprendrez mieux pourquoi plus tard. </p><p>En bas de l'escalier, dans une petite maison, vous trouverez une PNJ un peu folle nommée \"Prilina\". </p><p>Dites-lui \"travail\". Elle vous demandera de tuer les rats qui font cruik cruik. Ces rats géants se trouvent un peu plus bas dans la cave (vous pouvez obtenir le nombre de rats déjà tués en regardant le Livre de Quêtes à droite de la barre de chat). Après en avoir tué 20, retournez voir Prilina et redites-lui \"travail\". </p><p>Elle vous demandera 10 bandelettes de momies pour pouvoir recoller les rats, sinon ils ne feront plus cruik cruik!!. Admettez que ce serait dommage non? </p><p>Retournez au fond de la cave, vous y trouverez des momies rampantes. Elles dropent à environ 30% des bandelettes. Vous n'en avez pas pour très long mais elle sont méchantes. </p><p>D'autant plus qu'il vous faut 20 bandelettes. En effet, une fois vos 10 premières bandelettes présentées, la folle vous en demandera encore 10 autres au cas où elle doive se recoller elle-même... allez y comprendre quelque chose !! </p><p>Donc tant qu'à faire réunissez les 20 bandelettes en une fois avant de retourner la voir mais surtout posez-en 10 au sol avant de lui parler!!!!! </p><p>Une fois les 20 bandelettes données, la folle vous donne le dernier fragment et la carte s'assemble. </p><p>Retournez voir Frank pour la suite. Il vous donnera 22.000 points d'expérience. </p>",
        "images": [
          "/t4c-nms-overview/assets/quests/le-debutant/img_5_0.jpg",
          "/t4c-nms-overview/assets/quests/le-debutant/img_5_0.jpg"
        ],
        "order": 5
      },
      {
        "title": "5ème épreuve : Le labyrinthe (25.000 points d'expérience)",
        "description": "<p>Frank vous téléportera ensuite sur une nouvelle petite île, un labyrinthe géant. </p><p>Auparavant il vous prendra la carte et vous donnera un parchemin de LightHaven. </p><p><b>ATTENTION !! : surtout ne l'activez pas car, comme dit Franc, \"si vous l'utilisez cela sera considéré comme un abandon et vous ne pourrez pas revenir\". </b>Vous seriez téléporté définitivement à LightHaven. Vous n'auriez pas d'anneau, mais en fait ce n'est pas trop grave, un joueur pourra vous en donner un. Vous aurez l'essentiel, le complément à 100 de vos points de caractéristiques initiaux. </p><p>Frank vous dira aussi que auriez dû regarder cette carte, car c'est justement celle du labyrinthe. Si vous ne l'avez pas mémorisée, revoici la fameuse carte </p><p>Une fois rendu(e) à la sortie du labyrinthe, Gulvik vous attendra dans sa petite maison. </p><p>Il vous donnera 25.000 points d'expérience et 10.000 pièces d'or. </p><p><b>Si vous êtes humain(e), il vous donnera aussi le complément à 100 du nombre total de points de caractéristique que vous aviez à la création de votre personnage, soit entre 15 et 25 points. </b> </p><p>Vous pourrez ensuite choisir un anneau. Conseil : quelle que soit votre classe, prenez <b>l'anneau de résistances</b> car il y existe de meilleurs anneaux pour les autres choix. </p><ul><li>Anneau de force (+15 force, +1 CA, +5 % en attaque)</li> <li>Anneau d'endurance (+15 endurance, +1 CA, +5 % en guérison rapide)</li> <li>Anneau de dextérité (+15 dextérité, +1 CA, +5 % en archerie)</li> <li>Anneau de sagesse (+15 sagesse, +1 CA, +5 % en méditation)</li> <li>Anneau d'intelligence (+15 intelligence, +1 CA, +5 % en esquive)</li> <li><b><u>Anneau de résistances</u> (+5 CA, +2 à toutes les résistances) &lt;=<u> conseillé pour toutes les classes</u></b></li></ul><p><br> </p><p>Au total vous aurez gagné près de 90.000 points d'expérience et plus de 25.000 pièces d'or. </p><p>Et environ <b>20 points de caractéristiques à distribuer</b> si vous êtes humain. Gulvik vous téléportera au temple de LightHaven au mot \"partir\". </p><p>BRAVO ! Vous avez terminé ! </p><p> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> </p>",
        "images": [
          "/t4c-nms-overview/assets/quests/le-debutant/img_6_0.jpg"
        ],
        "order": 6
      }
    ],
    "credits": [
      "T4C NMS Révolution wiki"
    ]
  },
  {
    "title": "Quetes neutres RD",
    "slug": "quetes-neutres-rd",
    "zone": "Raven's Dust",
    "prerequisites": [],
    "rewards": [],
    "npcs": [
      "Le Chambellan Thomar",
      "le Roi Théodore",
      "Tobias",
      "Adriana",
      "Baldric Silverknife",
      "Doremas",
      "Grimish le Gobelin",
      "Celestina Avel",
      "Evelyn",
      "Frère Thorkas",
      "Morindin le chasseur",
      "Ghundard Garak",
      "Mordrick Mansel",
      "Greyleaf l’arbre démoniaque",
      "Elysana Blackrose (si nécessaire)",
      "Menark",
      "Zakhar",
      "Aloysius Starbolt",
      "Bane Gwengad",
      "Thorbin Kaloneg"
    ],
    "gold": "",
    "steps": [
      {
        "title": "Introduction",
        "description": "<p><b>De nombreuses quêtes standards sont revalorisées et donnent de 100K à 500K xp (et même 1M xp pour l'habit de feuille).</b> </p><p><b>De plus elles sont souvent répétables... En principe ces quêtes figurent aussi dans le guide du level-up, section Raven's Dust.</b> </p><p><b><big>ATTENTION : Les quêtes dites <span class=\"npc-keyword\">\"non répétable\"</span> sont répétables après renaissance.</big></b> </p>",
        "images": [],
        "order": 0
      },
      {
        "title": "L’audience au Roi (bonifiée 200K xp) non répétable",
        "description": "<ul><li>Dans le château de Silversky, allez trouver le Chambellan Thomar au 1er étage centre gauche.</li> <li>Dites-lui \"entretien\". Il vous dira que pour parler au Roi, vous devez réaliser au préalable une quête.</li> <li>Dites <span class=\"npc-keyword\">\"quête\"</span> et \"oui\" et il vous demandera de tuer 10 Mages Rôdeurs en 30 minutes IRL.</li> <li>Vous les trouverez juste à l’extérieur des remparts de Silversky.</li> <li>Une fois cette tâche accomplie, retournez voir le Chambellan Thomar et dites <span class=\"npc-keyword\">\"quête\"</span>.</li> <li>Vous pourrez alors parler à Théodore XIII et obtiendrez 200.00 xp.</li></ul><p><b>Remarque </b>: Vous ne pouvez effectuer cette quête qu’une seule fois par renaissance. </p><p><b>Remarque:</b> Si, à un moment, le Roi vous dit que pour lui parler, vous devez vous adresser à Thomar, allez voir ce dernier et dites <span class=\"npc-keyword\">\"entretien\"</span>. Il vous dira que, depuis que la quête a été réalisée, vous pouvez parler au Roi. </p><p><b>PNJ impliqués:</b> Le Chambellan Thomar, le Roi Théodore </p><p><b>Récompenses acquises</b>: <b>200K xp</b>. Vous pouvez parler au Roi (indispensable si vous êtes \"good\"). </p>",
        "images": [],
        "order": 1
      },
      {
        "title": "La lame d’acuité",
        "description": "<ul><li>Au château de Silversky, trouvez Tobias (c’est le mage près du donjon).</li> <li>Dites <span class=\"npc-keyword\">\"livre de l'art de la guerre\"</span> puis \"oui\" et il vous en vendra un pour 15.000 pièces d’or.</li> <li>Amenez-le à Adriana (la professeure vous enseignant la pénétration d’armure à l’est du magasin de potions).</li> <li>Dites-lui \"livre de l'art de la guerre\" et elle sera d’accord pour vous l’échanger pour une lame d’acuité.</li> <li>Dites <span class=\"npc-keyword\">\"oui\"</span> pour effectuer l’échange.</li></ul><p><b>Remarque:</b> Vous pouvez effectuer cette quête à volonté. </p><p><b>PNJ impliqués: Tobias, Adriana</b> </p><p><b>Récompense acquise:</b> Lame d’acuité (82 For, 20 Int, 23 Sag) </p>",
        "images": [],
        "order": 2
      },
      {
        "title": "Le Bouffon Morbide (bonifiée 400K xp) non répétable",
        "description": "<ul><li>Au château de Silversky, trouvez Samuel (deuxième étage à gauche) et dites <span class=\"npc-keyword\">\"Bouffon morbide\"</span>.</li> <li>Il vous demandera de tuer le Bouffon Morbide qui reste tapi dans le donjon du château (respawn 22mn environ). Notez que vous devez le tuer vous-même.</li> <li>Une fois que vous l’avez renvoyé au Royaume des Morts, ramassez son crâne (Attention, c’est un coriace et les joueurs ayant un niveau inférieur à 30 devront prendre quelques potions).</li> <li>Retournez voir Samuel et dites <span class=\"npc-keyword\">\"Bouffon morbide\"</span>.</li> <li>Il vous remerciera et vous récompensera avec 400.000 xp et un protecteur scarabée.</li></ul><p><b>Remarque </b>: Vous ne pouvez effectuer cette quête qu’une seule fois par renaissance. </p><p><b>PNJ impliqué</b>: Samuel </p><p><b>Mini Boss impliqué</b>: Bouffon Morbide </p><p><b>Récompense acquise</b>: <b>400K xp</b>, Protecteur Scarabée (100 End, 53 Int, 40 Sag) </p>",
        "images": [],
        "order": 3
      },
      {
        "title": "L’alliance (bonifiée 500K xp)",
        "description": "<ul><li>Attention il faut marcher beaucoup</li> <li>Vous devez être level 28.</li> <li>Dans la ville de Silversky, trouvez Baldric Silverknife (avec le look d’un voleur, il est à l’est de la boutique de potions (1570,2555)).</li> <li>Dites-lui \"cochons\" et il vous demandera de tuer 10 cochons… Groinnk ??</li> <li>Vous trouverez des cochons dans les champs de Silversky (1565,2450).</li> <li>Après avoir terminé cette impitoyable et extrêmement difficile tâche, retournez voir Baldric et dites <span class=\"npc-keyword\">\"cochons\"</span> puis \"tâches\".</li> <li>Il vous dira de trouver Doremas (il est à l’ouest de la fontaine de Silversky (1455,2495)).</li> <li>Trouvez-le et dites <span class=\"npc-keyword\">\"Grimish\"</span>. Il vous enverra voir Grimish le Gobelin.</li> <li>Trouvez Grimish situé au camp Orque de Raven’s Dust (1390,1830) - oui, oui, je sais que vous en avez assez de marcher -</li> <li>Dites-lui \"Doremas\".</li> <li>Devinez quoi : vous devez retourner voir Doremas et lui dire <span class=\"npc-keyword\">\"Grimish\"</span>.</li> <li>Il sera surpris que vous l’ayez trouvé et vous enverra retrouver Grimish (c’est vrai ?).</li> <li>Une fois que vous serez de retour au côtés de Grimish, dites <span class=\"npc-keyword\">\"Doremas\"</span> et il vous demandera de résoudre l’énigme suivante : «Maintenant, vous dire quoi être meilleur que rats crus mais plus laid que Doremas ?»</li> <li>La réponse est : \"rien\".</li> <li>Grimish vous donnera le mot de passe : \"L’alliance est renouvelée \".</li> <li>Retournez voir Doremas et dites <span class=\"npc-keyword\">\"Grimish\"</span> ; il vous enverra voir Baldric Silverknife.</li> <li>Trouvez-le et dites <span class=\"npc-keyword\">\"l'alliance est renouvelée\"</span>.</li> <li>Vous recevrez 500K xp.</li></ul><p><b>Remarque</b>: Vous devez être au minimum niveau 28 pour que Baldric Silverknife vous adresse la parole. </p><p><b>PNJ impliqués</b>: Baldric Silverknife, Doremas, Grimish le Gobelin </p><p><b>Récompense acquise: 500K xp.</b> </p>",
        "images": [],
        "order": 4
      },
      {
        "title": "Le pourfendeur de gobelins - chez Rhodar",
        "description": "<ul><li>Dans la ville de Silversky, trouvez le PNJ nommé Rhodar Pyras (C'est le marchand d’armes à l’Est de l’entrée du château).</li> <li>Dites <span class=\"npc-keyword\">\"pourfendeur de gobelin\"</span> et il vous en vendra un pour 25.000 pièces d’or, mais seulement si vous avez déjà tué au moins 500 gobelins (il vous indiquera alors combien de gobelins vous avez tué).</li></ul><p><b>Remarque</b>: Cette quête est indispensable aux déchus. </p><p><b>PNJ impliqué</b>: Rhodar Pyras </p><p><b>Récompense acquise</b>: Pourfendeur de gobelins (97 For, 20 Int, 23 Sag) </p>",
        "images": [],
        "order": 5
      },
      {
        "title": "Le marteau de Rhodar (bonifiée 500K xp)",
        "description": "<ul><li>Sortez de Silversky par la porte ouest et suivez le chemin vers le nord. A la seconde intersection, allez vers l’ouest. Suivez le chemin jusqu’à ce que celui-ci s’achève.</li> <li>Vous trouverez à cet endroit marteau\" puis\"oui\".</li> <li>Vous serez récompensé par <b>500K xp</b> et 3.500 pièces d’or.</li></ul><p>Remarque: Vous pouvez effectuer cette quête à volonté. </p><p>Attention : le marteau est indroppable ! </p><p><b>PNJ impliqué</b>: Rhodar Pyras </p><p><b>Mini Boss impliqué</b>: Quadros le Borgne </p><p><b>Récompense acquise: 500K xp</b>, 3.500 pièces d’or </p>",
        "images": [],
        "order": 6
      },
      {
        "title": "Les yeux de tarentules",
        "description": "<ul><li>Les tarentules dropent des yeux de tarentules.</li> <li>Récupérez-les et amenez-les à Aloysius Starbolt (situé au château de Silversky, 2ème étage,coursive à l'est ).</li> <li>Dites <span class=\"npc-keyword\">\"yeux de tarentule\"</span>, \"oui\" et il vous échangera une paire d’yeux contre 3.000 pièces d’or.</li></ul><p><b>Remarque 1</b>: Vous pouvez effectuer cette quête à volonté. </p><p><b>Remarque 2</b>: Quête non bonifiée. </p><p><b>Remarque 3</b>: Si vous faites la quête des peaux d'antilopes, gardez vos yeux (autant d'yeux que vous avez de peaux). </p><p><b>PNJ impliqué</b>: Aloysius Starbolt </p><p><b>Récompense acquise</b>: 3.000 pièces d’or </p>",
        "images": [],
        "order": 7
      },
      {
        "title": "Sauvez le Petit Arbre (fioles cristallines) (bonifiée 200K xp)",
        "description": "<ul><li>Au camp des Druides de Raven’s Dust, trouvez Celestina Avel et dites <span class=\"npc-keyword\">\"arbre\"</span>.</li> <li>Elle vous demandera 2 fioles d’eau cristalline afin de sauver le Petit Arbre.</li> <li>Les fioles sont dropées par de nombreuses créatures sur Stoneheim (surtout sortie Est de StoneCrest), par les 3 Grott et les pillards des Dunes ainsi que d'autres mobs sur Raven’s Dust.</li> <li>Ramenez deux fioles à Celestina Avel et dites <span class=\"npc-keyword\">\"arbre\"</span> puis \"oui\".</li> <li>Comme récompenses, vous recevrez un sachet d’écorce de saule et 200.000 xp.</li></ul><p><b>Remarque</b>: Vous pouvez effectuer cette quête à volonté </p><p><b>PNJ impliqués</b>: Celestina Avel </p><p><b>Récompense acquise:</b> <b>200K xp,</b> Sachet d’écorces de saule. </p>",
        "images": [],
        "order": 8
      },
      {
        "title": "Anneau Feu Follet (la nuit) - c'est la suite (bonifiée 400K xp)",
        "description": "<ul><li>Allez au Lac Tarentules et cherchez le personnage nommée Evelyn (elle apparaît an Nord de la RST RD, pos 830, 1825).</li> <li>Elle ne vous parlera que pendant la nuit!!</li> <li>Dites-lui \"anneau feu follet\" et elle vous demandera un sachet d’écorce de saule que vous obtenez en faisant la quête \"Sauvez le Petit Arbre\" et un anneau de fer (que vous pouvez aisément trouver ou acheter sur Arakas chez la marchande Fali ).</li> <li>Une fois les deux objets réunis, retournez la voir et dites-lui à nouveau \"anneau feu follet\" puis \"oui\" et elle vous donnera l'anneau feu follet et 400.000 xp.</li></ul><p><b>Remarque #1</b>: Vous pouvez effectuer cette quête à volonté. </p><p><b>Remarque #2</b>: Il y a peut-être un léger problème avec cette quête : si vous avez plus d’un sachet d’écorce ou plus d’un anneau de fer, Evelyn vous demandera d’aller les chercher car elle n’admettra pas que vous en ayez plusieurs. Pour régler la question, laissez tomber l’excédent à terre et ne gardez dans votre inventaire qu’un seul sachet et un seul anneau. Ainsi vous pourrez terminer la quête. </p><p><b>PNJ impliqués</b>: Evelyn </p><p><b>Récompense acquise</b>: <b>400K xp,</b> Anneau feu Follet (0 stats) sert a fabriquer l'anneau cerfeuil. </p>",
        "images": [],
        "order": 9
      },
      {
        "title": "L'habit de feuilles (les 4 pierres) non répétable (bonifiée 1M xp)",
        "description": "<ul><li>Au camp des druides de Raven’s Dust, trouvez Darius Moonglow. Dites-lui \"pierres\" et il vous demandera de trouver 4 pierres (verte, bleue, rouge et jaune).</li> <li>Pierre verte droppée par les Mages Rôdeurs</li> <li>Pierre jaune droppée par les Gardes de l’ombre</li> <li>Pierre bleue droppée par les Guerriers Minotaures</li> <li>Pierre rouge droppée par les arbres démoniaques</li> <li>Une fois collectées, ramenez-les lui, dites <span class=\"npc-keyword\">\"pierre\"</span> et vous serez récompensés par un habit de feuilles et 1.000.000 xp !!</li></ul><p><b>Remarque </b>: Vous ne pouvez faire cette quête qu’une seule fois par renaissance. </p><p><b>PNJ impliqué </b>: Darius Moonglow </p><p><b>Récompenses acquises </b>: <b>1 million d'xp,</b> Habit de feuilles (20 End, 15 Int, 115 Sag), </p><p><br> </p>",
        "images": [],
        "order": 10
      },
      {
        "title": "L’anneau de foi (bonifiée 250k xp)",
        "description": "<ul><li>Les Gardes de l’ombre dropent des calices d'or.</li> <li>Ramenez-en un à Frère Thorkas au temple de Silversky et dites <span class=\"npc-keyword\">\"calice d'or\"</span> et \"oui\".</li> <li>Vous serez récompensé par 250.000 xp et un anneau de foi.</li></ul><p><b>Remarque</b>: Vous pouvez effectuer cette quête à volonté </p><p><b>PNJ impliqués</b>: Frère Thorkas </p><p><b>Récompense acquise</b>: Anneau de foi (15 Int, 65 Sag), <b>250K xp</b> </p><p><br> </p>",
        "images": [],
        "order": 11
      },
      {
        "title": "Le bracelet orque (peaux d'antilope et yeux de tarentules) (bonifiée 250K xp)",
        "description": "<p><b>Attention : le chasseur Morindin ne vous parlera que le jour !</b> </p><ul><li><b>Trouvez 2 peaux d’antilopes</b> et amenez-les à Morindin le chasseur le jour (il est au nord du Lac Tarentules).</li> <li>Dites-lui \"peaux d'antilopes\" et \"oui\". Vous recevrez un sachet de graines de pissenlit et 150K xp.</li> <li><b>Maintenant trouvez 2 paires d’yeux de tarentules</b> et ramenez-les avec le sachet de graines à Ghundarg Garak vers une maison (1140,1800) au camp orque de RD.</li> <li>Dites <span class=\"npc-keyword\">\"Ingrédients\"</span> puis \"oui\" et vous recevrez un bracelet orque et 100K xp.</li></ul><p><b>Remarque #1</b>: Si vous avez commencé la quête des Clés Royales et que votre karma est inférieur à 170, Morindin le chasseur refusera de vous parler. </p><p><b>Remarque #2:</b> Morindin le chasseur ne vous parlera que le jour. </p><p><b>Remarque #3:</b> Vous pouvez effectuer cette quête à volonté. </p><p><b>PNJ impliqués:</b> Morindin le chasseur, Ghundard Garak </p><p><b>Récompense acquise:</b> <b>150K+100K xp</b>, Bracelet orque (35 End, 32 Int, 38 Sag) </p><p><br> </p>",
        "images": [],
        "order": 12
      },
      {
        "title": "Le pied humain (bonifiée 800K xp)",
        "description": "<ul><li>Une fois la quête du bracelet orque complétée, Ghundarg Garak vous demandera un pied humain.</li> <li>C’est un drop rare de Blaarg Pedista, à l’intérieur des caves orques.</li> <li>Une fois que vous en aurez un, ramenez-le à Ghundarg et dites <span class=\"npc-keyword\">\"pied humain\"</span> et \"oui\".</li> <li>Vous serez récompensés par 800k xp et un montant aléatoire d’or (de 1000 à 26.000 pièces d’or).</li></ul><p>Remarque: Vous pouvez effectuer cette quête à volonté. </p><p><b>PNJ impliqué</b>: Ghundarg Garak </p><p><b>Mini Boss impliqué</b>: Blaarg Pedista </p><p><b>Récompense acquise:</b> <b>800k xp</b>, Montant d’or aléatoire (1000 - 26.000 po) </p><p><br> </p>",
        "images": [],
        "order": 13
      },
      {
        "title": "Le recrutement par Mordrick Mansel, le bouclier tour (bonifiée 500K xp)",
        "description": "<ul><li>Au château de Silversky, trouvez Mordrick Mansel. Dites <span class=\"npc-keyword\">\"travail\"</span>, \"oui\", \"rapport\". Il vous demandera de tuer 15 arbres démoniaques. Une fois les quinze arbres tués, retournez voir Mordrick.</li> <li>Dites <span class=\"npc-keyword\">\"rapport\"</span> et vous serez récompensés de 10.000 + 250*niveau xp. <i><b>(19.500 niveau 38)</b></i></li> <li>Vous recevrez aussi une nouvelle mission : connaître les plans secrets des orques.</li> <li>Allez au camp orque de Raven’s Dust et tuez Ghundarg Garak : vous obtiendrez les plans. Retournez voir Mordrick et dites <span class=\"npc-keyword\">\"rapport\"</span>.</li> <li>Malheureusement il ne parle pas orque [vous non plus d’ailleurs :-)] et les plans doivent être traduits.</li> <li>Vous recevrez 300.000 + (5.000*niveau) xp.</li> <li>Trouvez Morindin le chasseur (au nord du Lac Tarentules) et demandez-lui de traduire les plans : dites <span class=\"npc-keyword\">\"traduire\"</span> et \"oui\".</li> <li>Il vous demandera 5.000 pièces d’or pour cette traduction. Dites <span class=\"npc-keyword\">\"oui\"</span> encore une fois et il effectuera la traduction.</li> <li>Revenez voir Mordrick et dites <span class=\"npc-keyword\">\"rapport\"</span>. Vous serez récompensés par un bouclier Tour.</li></ul><p><b>Remarque #1</b>: Ghundard Garak est un dur et les personnes de niveau inférieur à 40 devraient se faire accompagner. </p><p><b>Remarque #2</b>: Morindin le chasseur ne vous parlera pas la nuit. </p><p><b>PNJ impliqués</b>: Mordrick Mansel, Ghundard Garak, Morindin le chasseur </p><p><b>Récompense acquise</b>: 310.000 + (5.500 * niveau) xp, Bouclier Tour (125 End) </p><p><br> </p>",
        "images": [],
        "order": 14
      },
      {
        "title": "L'orque Archimage",
        "description": "<ul><li>Cette quête débute quand, à un moment totalement aléatoire, Aloysius Starbolt vous informe qu’il ressent un danger venant du nord.</li> <li>Allez au camp orque de Raven’s Dust et près de la maison de Grimish, vous trouverez un orque Archimage.</li> <li>Tuez-le, retournez voir Aloysius pour recevoir 25.000 xps et l’une des récompenses suivantes : un anneau de confiance, un anneau de platine ou les instructions pour trouver le donjon des minotaures.</li></ul><p><b>Remarque</b>: Vous pouvez effectuer cette quête à volonté. </p><p><b>PNJ impliqué:</b> Aloysius Starbolt </p><p><b>Mini Boss impliqué</b>: Orque Archimage </p><p>Récompense acquise: 25.000 xps, anneau de confiance (17 Int, 31 Sag) OU Anneau de platine (39 Int, 41 Sag) OU les instructions pour trouver <b>le donjon des minotaures.</b> </p><p><br> </p>",
        "images": [],
        "order": 15
      },
      {
        "title": "Les bottes en peau de lézard (bonifiée 300K xp)",
        "description": "<ul><li>A Silversky, trouvez Elysana Blackrose (elle est dans une maison au Sud du temple).</li> <li>Dites <span class=\"npc-keyword\">\"travail\"</span>, \"Ingredients\" et elle vous demandera les ingrédients suivants : 1x douce-amères, 1x graine de chapelet et 1x hamamelis. (dropées par orque mage et minotaures).</li> <li>Une fois que vous avez les ingrédients, retournez voir Elysana et dites-lui \"Ingrédients\".</li> <li>Elle vous récompensera de 300K xps et d’une paire de bottes en peau de lézard.</li></ul><p>Remarque: Vous pouvez effectuer cette quête à volonté. </p><p><b>PNJ impliqué</b>: Elysana Blackrose </p><p><b>Récompense acquise</b>: 300Kxps, Bottes en peau de lézard (75 End, 30 Int, 25 Sag) </p><p><br> </p>",
        "images": [],
        "order": 16
      },
      {
        "title": "L'anneau de pierre de sang (douces-amères et gingembre) (bonifiée 250K xp)",
        "description": "<ul><li>Vous trouverez Greyleaf l’arbre démoniaque à l’est du Lac Tarentules.</li> <li>Pour pouvoir lui parler, vous avez besoin d’une <b>pierre verte de l’esprit de la forêt</b> que vous pouvez acheter à Elysana Blackrose (maison proche du temple de SS) pour 20.000 pièces d’or, en lui disant <span class=\"npc-keyword\">\"pierre verte de l'esprit de la foret\"</span>.</li> <li>Muni de cette pierre dites <span class=\"npc-keyword\">\"utile\"</span> et Greyleaf vous demandera un sachet de douces-amères et un sachet de gingembre sauvage (drops des minotaures).</li> <li>Une fois les ingrédients récoltés, retournez le voir et dites-lui \"utile\" puis, selon votre préférence :</li></ul><p><b>Choix #1</b> : Dites <span class=\"npc-keyword\">\"oui\"</span> et vous serez récompensés par 250K xp et un anneau de pierre de sang. </p><p><b>Choix #2</b> : Dites <span class=\"npc-keyword\">\"non\"</span> puis \"oui\" et vous serez récompensés par 3.500 xp (?) et une amulette éthérée. </p><p><b>Remarque</b>: Vous pouvez effectuer cette quête à volonté </p><p><b>PNJ impliqués</b>: Greyleaf l’arbre démoniaque, Elysana Blackrose (si nécessaire) </p><p><b>Récompense acquise:</b> <b>250K xp</b>, Anneau de pierre de sang (30 Int, 18 Sag) OU 3.500 xp?, Amulette éthérée (75 Int, 55 Sag) </p><p><br> </p>",
        "images": [],
        "order": 17
      },
      {
        "title": "L’anneau de précision (bonifiée 180K xp)",
        "description": "<ul><li>Grimish au camp orque de Raven’s Dust demande 3 ailes de chauve-souris vampires (que vous pouvez trouver à la Broken One Cave - cave de l'aveugle).</li> <li>Dites-lui \"comte Hemogobelin\" puis \"oui\" et vous recevrez 180.000 xp et un anneau de précision en <b>échange des ailes.</b></li></ul><p><b>Remarque #1:</b> Grimish demande 3 ailes de chauve-souris vampire (et vous devez en avoir 3 dans votre inventaire), mais il n’en prend pour le moment que deux de votre inventaire. </p><p><b>Remarque #2:</b> Vous pouvez effectuer cette quête à volonté. </p><p><b>Remarque #3</b>: Quête peu rentable </p><p><b>PNJ impliqué</b>: Grimish </p><p><b>Récompense acquise:</b> <b>180K xp</b>, Anneau de précision (29 Int, 29 Sag) </p><p><br> </p>",
        "images": [],
        "order": 18
      },
      {
        "title": "La potion de guérison importante",
        "description": "<ul><li>Au château de Silversky, trouvez Menark (il est près de l’entrée du donjon). Dites <span class=\"npc-keyword\">\"étudier\"</span> et il vous demandera un os de squelette et une bandelette de momie.</li> <li>Vous trouverez l’os en tuant des Sorciers squelettes (à l’extérieur de la Broken One Cave) et la bandelette en tuant des Horreurs Enrubannées (Crypte de Raven’s Dust).</li> <li>Récupérez les ingrédients et ramenez-les à Menark. Dites <span class=\"npc-keyword\">\"étudier\"</span> et \"oui\".</li> <li>Vous recevrez une potion de guérison importante et <b>7.500 xps.</b></li></ul><p><b>Remarque:</b> Vous pouvez effectuer cette quête à volonté. </p><p><b>PNJ impliqués:</b> Menark </p><p><b>Récompense acquise:</b> 7.500 xp, Potion de guérison importante </p><p><br> </p>",
        "images": [],
        "order": 19
      },
      {
        "title": "l'amulette éthérée (bonifiée 1,2M xp)(non répétable)",
        "description": "<ul><li>Apporter un oeuf d'un Kraanian à Zakhar (dans sa tour aux horreurs railleuses, loin dans les montagnes Ouest de RD).</li> <li>Ensuite prendre 2 niveaux , retourner le voir, il vous dira qu'il s'est fait voler son bâton de mana, par le <b>Profundus Supremus</b> qui se trouve dans une grotte en prenant le chemin vers la gauche en bas de la tour de Zakhar, le tuer. Il dropera un parchemin dans votre inventaire.</li> <li>Ensuite aller voir Aloysius Starbolt (Château SS, 1er étage, en bas à droite), il vendra le bâton pour 32,000 pièces d'or, dites <i>Baton de mana (ou parchemin), oui</i> (le parchemin s'enflamme). Retourner voir Zakhar à sa tour, il prendra le bâton.</li> <li>Ensuite attendre à nouveau 2 niveaux, puis retourner encore voir Zakhar, l'oeuf de Kraanian aura éclos, il fera apparaitre un énorme Kraanian, (assez laid, mais même skin que ceux que les rats de l'ile éthérée font apparaître). Le tuer, reparler à Zakhar et lui dire <i>Zzartgax</i> .</li> <li>Quête faisable à partir du lvl 30 à 35 environ.</li></ul><p><b>Remarque:</b> Cette qu^éte s'étend sur 4 levels ! </p><p><b>PNJ impliqués:</b> Zakhar, Aloysius Starbolt </p><p><b>Récompenses acquises : 1,2 Million d'xp</b>, Amulette Ethérée (75 Int, 55 Sag) </p><p><br> </p>",
        "images": [],
        "order": 20
      },
      {
        "title": "Audience à Bane Gwengad",
        "description": "<ul><li>Allez au château de Bane Gwengad et trouvez Dwarthon Lithin (à l'ouest du trône). Dites-lui \"Bane\" et il vous demandera de tuer Delwooble l’Incantateur Fou qui se cache dans le donjon du château.</li> <li>Remarque : Si Dwarton (ou Bane ou Delwobble) n'est pas là c'est qu'un joueur l'a kill. Il repop en 20 minutes environ.</li> <li>Trouvez Delwobble (il est situé dans un petit couloir à l’extrême Est, juste avant Shadeen la Dague) et tuez-le.</li> <li>Retournez voir Dwarthon et dites-lui \"Bane\". Vous pouvez désormais parler à Bane Gwengad.</li></ul><p><b>PNJ impliqué:</b> Dwarthon Lithin </p><p><b>Mini Boss impliqué:</b> Delwobble l’Incantateur Fou </p><p><b>Récompense acquise:</b> Vous pouvez parler à Bane Gwengad </p><p><br> </p>",
        "images": [],
        "order": 21
      },
      {
        "title": "La dague de sang (bonifiée 200K xp) et cape de résistance au feu (aléatoire)",
        "description": "<p>Afin de faire cette quête, vous devez au préalable avoir terminé la quête d’audience à Bane Gwengad (voir ci-dessus). </p><ul><li>Trouvez Bane et dites-lui \"Ingrédients\".</li> <li>Il vous demandera une pierre de mana et un sachet de graines de chapelet.</li> <li>Retournez voir Bane avec ces objets et dites <span class=\"npc-keyword\">\"Ingrédients\"</span> puis \"oui\" et il vous donnera en échange une dague du sang et 200.000 xp.</li> <li>Ensuite allez voir Baldric Silverknife à Silversky (Est du magasin de potions).</li> <li>Dites-lui \"quelque chose\". Il vous demandera une dague du sang et un tesson brillant (drop des Horreurs Enrubannées à la crypte de RD) afin qu’il vous donne son tambour.</li> <li>Une fois que vous avez tout, retournez voir Baldric et dites à nouveau \"quelque chose\" puis \"oui\" et il vous donnera son tambour.</li> <li>Allez maintenant voir Thorbin Kaloneg à la taverne de Silversky.</li> <li>Dites-lui \"Baldric\" et il vous demandera de lui donner le tambour de Baldric afin qu’il puisse l’enterrer.</li> <li>Dites-lui \"oui\" et vous recevrez en récompenses 3.000 xp et <b>soit une cape de résistance au feu soit un verre de bière vide</b>!!</li></ul><p><b>Remarque #1:</b> Vous n'obtiendrez pas toujours la cape de résistance au feu. </p><p><b>Remarque #2:</b> Vous pouvez effectuer cette quête à volonté. </p><p><b>PNJ impliqués:</b> Bane Gwengad, Baldric Silverknife, Thorbin Kaloneg </p><p><b>Récompenses acquises :</b> <b>200K xp</b> puis <b>soit</b> une cape de résistance au feu (45 Int, 35 Sag) + 3.000 xp(?) <b>soit</b> un verre de bière vide. </p><p><br> </p><p> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> </p>",
        "images": [],
        "order": 22
      }
    ],
    "credits": [
      "T4C NMS Révolution wiki"
    ]
  },
  {
    "title": "Accès FNR",
    "slug": "acces-fnr",
    "zone": "Forêt de Non-Retour",
    "prerequisites": [],
    "rewards": [],
    "npcs": [],
    "gold": "",
    "steps": [
      {
        "title": "La Forêt de Non Retour",
        "description": "<p>Condition pour y avoir accès: Être Séraphin d Artherk ou d'Ogrimar. </p><p>L'entrée de la FNR se trouve devant la cave de l'aveugle (nord de Raven's Dust). Une fois devant la cave trouvez le PNJ nommé Archibald Spielengnaffron. </p><p>Vous lui dites <span class=\"npc-keyword\">\"<b>foret de non retour</b>\"</span> puis \"<b>oui</b>\". Vous serez alors téléporté dans un cercle de pierre. </p><p><br> Les parchemins d'évasion, dropés par les mystiques ou les coffres vous téléporteront hors de la forêt, près du pnj qui téléporte à la forêt. </p><p>Les parchemins d'orientation servent a ne pas se faire téléporter par les araignées et les arbres. </p><p><br> </p><p> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> </p>",
        "images": [
          "/t4c-nms-overview/assets/quests/acces-fnr/img_0_0.jpg"
        ],
        "order": 0
      }
    ],
    "credits": [
      "T4C NMS Révolution wiki"
    ]
  },
  {
    "title": "Accès à la Forêt de Non-Retour Déchu",
    "slug": "acces-a-la-foret-de-non-retour-dechu",
    "zone": "Forêt de Non-Retour",
    "prerequisites": [],
    "rewards": [],
    "npcs": [],
    "gold": "",
    "steps": [
      {
        "title": "Accès à la Forêt de Non-Retour et  fin de la quête de la fiole de puissance",
        "description": "<p>Vous devez être déchu pour réaliser cette quête. </p><p>Vous devez avoir réalisé auparavant la quête de l'accès a l'asile ! </p><p>Après avoir récupéré la Fiole de Sang de Forbin, allez sur RD voir le déchu qui se trouve dans la baraque juste avant l'entrée du Mausolée de RD et parlez lui. Dites lui \"fiole de sang de forbin\". Il vous demandera de lui ramener cette fiole et vous donnera la \"liste\" des items de Drachen qu'l convoite (Sceptre de pouvoir de Drachen, Epée vorpale de Drachen, Plastron de Drachen, Heaume de Drachen, Robe de Drachen) </p><p>Dites lui \"Forbin\". Il va demander une preuve de la confiance de son frère pour continuer la discussion. </p><p>Poursuivez le dialogue et dites lui \"preuve\" puis \"récupéré\". Quand il constatera que vous avez la fiole de sang, il sera prêt a vous envoyer vers la forêt de non retour. Dites lui enfin \"envoie\". Vous serez téléportés vers la Forêt de Non-Retour pour trouver les items demandés. </p><p>Une fois tout les items réunis, retournez le voir pour qu'il vous donne une fiole de : <s>puissance/résistance à la magie (+20%).</s> Cette fiole est désormais obsolète. </p><p> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> </p>",
        "images": [],
        "order": 0
      }
    ],
    "credits": [
      "T4C NMS Révolution wiki"
    ]
  },
  {
    "title": "Accès Nieve (L'île de glace)",
    "slug": "acces-nieve-lile-de-glace",
    "zone": "Niève",
    "prerequisites": [],
    "rewards": [],
    "npcs": [],
    "gold": "",
    "steps": [
      {
        "title": "Accès à la ville de NIEVE",
        "description": "<ul><li><b>Première solution</b> : Par la cave de glace. L'entrée se trouve au Nord du Mausolée de Raven's Dust. Dirigez-vous comme pour aller au mausolée de Raven's Dust (nord de RD). Mais au lieu de parler au PNJ contournez-le par la droite : vous trouverez des montagnes enneigées et l'entrée d'une grotte. Entrez-y.Vous êtes dans la cave de glace, vous devez trouver la sortie qui est située vers le bas, à droite. Quand vous aurez trouvé la sortie vous serez dans la ville de Niève.</li></ul><ul><li><b>Deuxième solution</b> (la plus pratique) : avoir le sort \"portail vers Niève\" ou trouver une bonne âme qui vous fasse un portail.</li></ul><ul><li><b>Troisième solution</b> (sauf pour le 1er pasage) : utiliser un parchemin de Niève. Achetez-en la première fois que vous passerez à Niève. Il vous mènera au temple.</li></ul><ul><li><b>Quatrième solution</b> : passer par les portails du planewalking (vous devez être séraph et level 50+ et avoir fait la quête du planewalking). Le portail est situé au centre de la ville.</li></ul><ul><li><b>Dernière solution</b> (sauf pour le 1er passage) : placez votre sanctuaire au temple du sous-sol lors d'un passage.</li></ul><p> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> </p>",
        "images": [
          "/t4c-nms-overview/assets/quests/acces-nieve-lile-de-glace/img_0_0.jpg"
        ],
        "order": 0
      }
    ],
    "credits": [
      "T4C NMS Révolution wiki"
    ]
  },
  {
    "title": "Accès Cave Humterre",
    "slug": "acces-cave-humterre",
    "zone": "Drake Island",
    "prerequisites": [],
    "rewards": [],
    "npcs": [],
    "gold": "",
    "steps": [
      {
        "title": "Introduction",
        "description": "<p>L'accès sera différent selon que vous êtes humain/déchu ou séraphin/néphilim. </p>",
        "images": [],
        "order": 0
      },
      {
        "title": "Humains ou Déchus",
        "description": "<p>Pour accéder à la Cave <b>Humterre</b>, il vous faut l'accès à Drake Island (évidemment !). </p><p>Allez voir Umnia Felony, la femme dans la maison en face du temple de RedWall. Parlez lui. Elle vous demandera </p><ul><li><b> 6 piles d'Arbre S'Intelle (et non pile de bois)</b></li> <li><b>3 Essences de B'Zurkhan</b></li></ul><p>Retournez la voir avec les objets. Vous aurez <b>500K or et 5M xp</b> et un des 4 items suivants : </p><ul><li>Lame enchantée</li> <li>Flèches de feu</li> <li>Fléau de Feu</li> <li>Anneau de feu</li></ul><p>Une fois la récompense obtenue, parlez-lui de son \"Frère\". Elle vous enverra alors parler à Keldor Felony, situé sur l'îlot à droite de la ville. Ce dernier vous demandera de <b>tuer 50 Drakes Akaïstes</b> (nord-ouest du désert de DI). </p><p>Ceci fait, il vous récompensera de 500 000 po et 5M xp. Il vous proposera aussi de vous téléporter dans la cave Humterre pour la modique somme de 100 000 pièces d'or. </p><p><b>Vous devrez débourser 100 000 pièces d'or à chaque fois que vous désirerez vous faire téléporter vers la Cave Humterre.</b> </p>",
        "images": [],
        "order": 1
      },
      {
        "title": "Séraphins ou néphilims",
        "description": "<p>Pour accéder à la Cave <b>Humterre</b>, il vous faut l'accès à Drake Island (évidemment!) </p><p style=\"border-style: initial; border-color: initial; font-style: normal;\">Allez voir Namess, au Nord du temple de RW. Il vous demandera</p><ul><li><p style=\"border-style: initial; border-color: initial; font-style: normal;\"><b>6 piles d'Arbre S'Intelle (et non pile de bois)</b></p></li> <li><p style=\"border-style: initial; border-color: initial; font-style: normal;\"><b>3 Essences de B'Zurkhan</b></p><p style=\"border-style: initial; border-color: initial; font-style: normal;\"> Ceci fait, il vous demandera de <b>tuer 50 Drakes Akaïstes</b>. Le reste de la quête est semblable à celle pour les humains sauf que votre interlocuteur sera Namess.</p></li></ul><p style=\"border-style: initial; border-color: initial; font-style: normal;\"><b>6 piles d'Arbre S'Intelle (et non pile de bois)</b></p><p style=\"border-style: initial; border-color: initial; font-style: normal;\"><b>3 Essences de B'Zurkhan</b></p><p style=\"border-style: initial; border-color: initial; font-style: normal;\"> Ceci fait, il vous demandera de <b>tuer 50 Drakes Akaïstes</b>. Le reste de la quête est semblable à celle pour les humains sauf que votre interlocuteur sera Namess.</p><p> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> </p>",
        "images": [],
        "order": 2
      }
    ],
    "credits": [
      "T4C NMS Révolution wiki"
    ]
  },
  {
    "title": "Accès oracle good",
    "slug": "acces-oracle-good",
    "zone": "Oracle",
    "prerequisites": [],
    "rewards": [],
    "npcs": [],
    "gold": "",
    "steps": [
      {
        "title": "L'accès Oracle Good",
        "description": "<p>L'accès Oracle Good comporte 4 parties </p><ul><li>Vous devez commencer par faire l'allégeance à Artherk.</li> <li>Obtenez ensuite le Coeur d'Artherk.</li> <li>Vous pouvez mener de front l'obtention de l'Ame d'Artherk.</li></ul><ul><li>Mais vous devez posséder le Coeur et l'Ame avant de débuter l'Esprit d'Artherk.</li></ul><p>Cela fait, il vous reste la traversée de l'Oracle pour renaître. </p><p><b><big>Liste des items nécessaires pour l'accès good :</big></b> </p><p> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> </p>",
        "images": [],
        "order": 0
      }
    ],
    "credits": [
      "T4C NMS Révolution wiki"
    ]
  },
  {
    "title": "Accès oracle evil",
    "slug": "acces-oracle-evil",
    "zone": "Oracle",
    "prerequisites": [],
    "rewards": [],
    "npcs": [],
    "gold": "",
    "steps": [
      {
        "title": "Accès Oracle Evil",
        "description": "<p>L'accès Oracle Evil comporte 4 parties : </p><ul><li>Vous devez commencer par faire allégeance à Ogrimar.</li> <li>Obtenez ensuite Le Crâne d'Ogrimar.</li> <li>Vous pouvez mener de front Le sang d'Ogrimar.</li></ul><ul><li>Mais vous devez posséder le Crâne et le Sang avant de débuter Les Os d'Ogrimar.</li></ul><p>Une fois en possession de votre Clé, il vous restera La traversée de l'Oracle pour arriver à l'Oracle et renaître. </p><p><b><big>Liste complète des items nécessaires pour l'accès evil :</big></b> </p><p> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> </p>",
        "images": [],
        "order": 0
      }
    ],
    "credits": [
      "T4C NMS Révolution wiki"
    ]
  },
  {
    "title": "La traversée de l'Oracle",
    "slug": "la-traversee-de-loracle",
    "zone": "Oracle",
    "prerequisites": [],
    "rewards": [],
    "npcs": [],
    "gold": "",
    "steps": [
      {
        "title": "Le Royaume de l’Oracle",
        "description": "<p>Une fois en possession de votre clé d'Artherk ou d'Ogrimar, allez à <b>la chambre de Providence</b>. Pour la trouver, dirigez-vous vers le Nord-Est de Stoneheim (après les gremlins) puis longez la côte Ouest jusqu'à 2 grands monolithes sur votre gauche. Passez entre eux sur un pont invisible au-dessus de l'eau. </p><p>Vous arriverez sur une petite île ou se situe l’entrée de la<b> chambre de Providence. </b>Prenez l'escalier, avancez et ensuite prenez le portai<b>l. </b>Vous arriverez dans le <b>Cœur du Destin</b>. Marchez jusqu'au vortex central. Vous arrivez à l'entrée (entrance) du <b>Royaume de l'Oracle. </b> </p><p>Vous voici au <b>Royaume de l'Oracle</b>. Au Nord de la forêt cherchez un coffre d'ivoire (ivory chest 2660,2612,2). Ramassez la clé d'ivoire que droppe ce coffre (repop 16 minutes si vous êtes plusieurs). Une fois que vous avez cette clé dirigez-vous vers <b>la maison de l'Oracle</b> et entrez par la porte principale (front door). Aidez vous de la carte ci-dessous. </p>",
        "images": [
          "/t4c-nms-overview/assets/quests/la-traversee-de-loracle/img_0_0.jpg"
        ],
        "order": 0
      },
      {
        "title": "Les salles de la maison de l’Oracle",
        "description": "<p>Mettez vos protections (résistance feu…). </p><p>Allez au coffre <b>C1</b> (voir carte) et prenez la clé qu'il droppe. Retournez à l'entrée et ouvrez la porte Nord (<b>C2</b>). Dans cette salle vous trouverez de nombreux petits couloirs. A la fin de chacun d'eux il y a un coffre. Un de ces coffres (marqués de 1 à 11 en lettre blanches) vous donnera une clé directement dans votre inventaire. Sortez de la pièce et allez au Nord-Est. </p><p>Ouvrez la porte située à la fin du couloir et vous arriverez dans un labyrinthe contenant 8 coffres \"recouverts de pierres précieuses\" Chaque coffre droppe au sol une clé qui ouvre un autre coffre jusqu'au 8<sup>ème</sup> dans lequel vous trouverez la clé cristalline d'émeraude. L'ordre que vous devez suivre est marqué sur la carte en chiffres jaunes de 1 à 8 (si vous êtes plusieurs, ces coffres ont un repop de 16 minutes). </p><p>La salle suivante a 2 portes (Nord-Ouest et Ouest). La porte au Nord-ouest ne s'ouvre pas donc prenez la porte ouest. Vous entrez dans des salles remplies de B'Thonians. Tuez-les jusqu'à ce que l'un d'eux droppe au sol une clé brillante en argent. Prenez-la, allez jusqu'à la porte au Sud-Ouest et ouvrez-la (voir la carte). </p><p>Ouvrez toutes les portes vers le sud-ouest et vous arriverez dans une salle pleine de B'Thurkans. Tuez-les jusqu'à faire dropper au sol une clé solide en or. Ramassez-la et ouvrez la porte Sud. </p><p>Vous serez alors dans une salle avec des téléporteurs. Direction le coffre jusqu'à marcher sur le premier téléporteur. Dès que vous avez été téléporté la première fois, revenez sur vos pas jusqu'à être téléporté une deuxième fois. Faites ceci (en arrière puis en avant) jusqu'à arriver au coffre (marqué <b>C2</b> sur la carte). Ouvrez-le et ramassez la clé brillante en platine (repop 16 minutes). Cette clé ouvre la porte permettant de sortir de la maison de l'Oracle par le Nord-Ouest. </p><p>Quittez la maison de l'oracle, sans oublier de vérifier le coffre \"bonus\" derrière la porte secrète dans un mur d'illusion (faites le tour). C'est le coffre marqué C au nord-ouest (repop 8 heures seul sinon 4 heures). </p><p>Marchez autour de la maison (comme indiqué sur la carte) et entrez dans le portail. Suivez toujours les flèches et descendez les escaliers en <b>D2</b>. </p><p><b>Note</b> : Attention aux protecteurs temporels. Un bon moyen de traverser la zone est d’utiliser le sort sanctuaire. Si vous ne l'avez pas appris, ayez des potions dans votre sac. </p><p>Vous arriverez au point<b> U2 </b>marque sur la carte ci-contre. En face de vous, il y a un coffre. Ouvrez-le, il droppe une petite clé en or que vous ramasserez (repop 16 minutes). </p><p>La porte Sud s'ouvre sur les 3 fameux coffres Oracle 'bonus\" (repop 8 heures seul sinon 4 heures). La petite clé en or ouvre la porte au Nord. Une autre manière d'atteindre ce point est de prendre les escaliers <b>D1</b> (sur la carte, à côté du respawn de protecteurs temporels) mais vous n'aurez pas accès aux 3 coffres bonus si vous n’avez pas déjà la \"petite clé en or \". </p><p>Si vous prenez en<b> D1</b> (mais il faut traverser une forêt de protecteurs temporels !) vous arriverez au point <b>U1</b>. En face de vous, un coffre contenant une petite clé en argent qui ouvre la porte au Sud (repop 16 minutes). </p><p>Ouvrez la porte vous concernant et prenez vers l'Ouest. Suivez le fameux <b>couloir</b> aux drakes et vous arriverez à 2 portails. Celui de droite est celui des séraphins d'Artherk et celui de gauche celui des séraphins d'Ogrimar (néphilims). Prenez votre portail et vous arrivez enfin aux épreuves à franchir pour arriver à l'Oracle. </p>",
        "images": [
          "/t4c-nms-overview/assets/quests/la-traversee-de-loracle/img_1_0.jpg",
          "/t4c-nms-overview/assets/quests/la-traversee-de-loracle/img_1_0.jpg",
          "/t4c-nms-overview/assets/quests/la-traversee-de-loracle/img_1_0.jpg"
        ],
        "order": 1
      },
      {
        "title": "Les épreuves de l'Oracle",
        "description": "",
        "images": [
          "/t4c-nms-overview/assets/quests/la-traversee-de-loracle/img_2_0.jpg"
        ],
        "order": 2
      },
      {
        "title": "La chambre de Persévérance",
        "description": "<p>Cette première chambre comporte 6 cellules avec un gardien des Eons dans chacune d’elles. Tuez-les dans l'ordre correct (marqué de 1 à 6 en lettres blanches sur le plan) et 6 morceaux de pierres finement découpées tomberont l'une après l'autre dans votre sac (vérifiez). Cliquez alors le coffre <b>C1</b>, vous obtenez directement dans votre sac une clé de pierre merveilleusement ciselée qui vous ouvre la porte de : </p>",
        "images": [],
        "order": 3
      },
      {
        "title": "La chambre de déception",
        "description": "<p>Un unique coffre contient la clé. Les autres sont piégés d'un sort de feu (mettez vos protections feu). Trouvez le bon coffre, la clé tombera dans votre poche et passez dans : </p>",
        "images": [],
        "order": 4
      },
      {
        "title": "La chambre d'illusions",
        "description": "<p>Elle est parcourue de murs invisibles. Ils sont marqués sur la carte par une ligne noire. Attention aux Gardiens éthérés qui vous téléportent. Trouvez votre chemin jusqu'au coffre <b>C2 </b>et prenez la clé qui tombe au sol. Ouvrez la porte de : </p>",
        "images": [],
        "order": 5
      },
      {
        "title": "La chambre de vélocité",
        "description": "<p>Ouvrez le coffre <b>C3,</b> la clé de verre enchantée tombe dans votre poche. Maintenant dépêchez-vous d'aller au coffre <b>C4</b> pour prendre la clé pulsative. Vous devez faire vite car si vous arrivez trop tard, la clé de verre se brise et vous devrez retourner au coffre<b> C3</b> en reprendre une (repop immédiat). Une fois la clé obtenue, entrez dans : </p>",
        "images": [],
        "order": 6
      },
      {
        "title": "La chambre du désespoir",
        "description": "<p>Prenez le portail situé dans la petite pièce. Vous arrivez dans une salle remplie de <b>gardiens du portail de l'Oracle. </b>Attention, un seul peut être tué. Son nom est \"<b>gardien de l'Oracle\"</b>. Il se trouve très légèrement à l'écart au moment où vous<b> </b>entrez dans la pièce. Si vous pouvez, pestez-le pour ne pas le perdre de vue puis tuez-le. Il droppe une clé dans votre inventaire qui vous permet de sortir de la salle (vous conservez cette clé tant que vous ne renaissez pas). </p><p><b>Ouf c'est gagné !</b> </p><p>Prenez les escaliers descendants et avancez dans le couloir. Au milieu du trajet prenez le coude vers le haut et vous trouverez un escalier montant. Prenez-le et vous verrez enfin : </p>",
        "images": [],
        "order": 7
      },
      {
        "title": "L'Oracle",
        "description": "<p><b>Attention!</b> si vous êtes séraphin ou néphilim, et si vous voulez affronter Makrsh P'Tangh sur son île ou faire de l'xp aux \"tempos\" dites <span class=\"npc-keyword\">\"<b>étape finale\"</span> à l'Oracle</b>, il vous enverra sur l'île de Makrsh P'Tangh. </p><p>Par contre, <b>si vous voulez renaître</b>, dites à l'Oracle le mot-clé <span class=\"npc-keyword\">\"<b>travail</b>\"</span> ... ou directement \"<b>test</b>\". </p><p>En poursuivant le dialogue il vous donnera une clé. </p><p>Dialogue avec l'Oracle : (vous pouvez lui dire directement <b>test</b>) </p><p>-- {L'Oracle}\":\" Ahhh, enfin nous nous rencontrons. Bienvenue, XXX. Comme vous l'avez sans doute deviné, je suis l'Oracle. </p><p>-- Vous avez dit :<b> travail</b> </p><p>-- {L'Oracle}\":\" Je suis le Gardien du Temps. Certains ont besoin d'être riche et d'avoir une \"solde\" extraordinaire pour se sentir puissant. En ce qui me concerne, j'ai beaucoup de tâches à accomplir, dont l'une, et non la moindre, est de veiller à l'équilibre entre le Bien et le Mal. Autant vous dire que pour moi la puissance n'est pas la richesse. </p><p>-- Vous avez dit : <b>solde</b> </p><p>-- {L'Oracle}\":\" Il en est \"un\" qui s'estime lui-même hors du flux du temps. Sa présence est une menace pour le délicat équilibre du Bien et du Mal. </p><p>-- Vous avez dit : <b>un</b> </p><p>-- {L'Oracle}\":\" Je parle de \"Makrsh\" \"P'tang\" bien sûr. Son désir de \"mort\" et de \"destruction\" dépasse l'entendement. </p><p>-- Vous avez dit : <b>makrsh p'tang</b> </p><p>-- {L'Oracle}\":\" Vous allez devoir vous en occuper, et bientôt, si ce monde veut continuer d'exister. Ils sont peu aujourd'hui à avoir le \"potentiel\" pour affronter quelqu'un d'aussi puissant. Je crois que vous possédez un tel \"potentiel\". </p><p>-- Vous avez dit :<b> potentiel</b> </p><p>-- {L'Oracle}\":\" Je dis potentiel car je ne pense pas que vous soyez vraiment prêt pour affronter Makrsh P'tang dans l'immédiat. Il y a de nombreuses \"préparations\" à faire avant de pouvoir l'affronter. </p><p>-- Vous avez dit :<b> preparations</b> </p><p>-- {L'Oracle}\":\" Si vous êtes sur le point d'atteindre votre véritable potentiel, à ce moment là, vous ne ferez plus qu'un avec l'essence séraphique enfouie au plus profond de votre âme. Je dois d'abord vous \"tester\" pour savoir si vous pouvez survivre à la procédure. </p><p>-- Vous avez dit : <b>tester</b> </p><p>--{L'Oracle}\":\" Pour votre test, vous allez faire face à Gabriel Archonis (côté good). Vous allez le combattre dans un duel à mort dans une arène spéciale. Il y quatre portes qui entourent le site, chacune d'entre elles vous projettera hors du combat dans un lieu en tranquille. Utiliser une de ces portes signifie que vous déclarez forfait et que vous devrez tout reprendre plus tard. Pour atteindre le lieu du combat, il vous faudra une \"Clef\". </p><p>-- Vous avez dit : <b>clef</b> </p><p><b>L'Oracle vous donne une clef.</b> </p><p>-- {L'Oracle}\":\" Vous voilà donc... Je crois que vous comprenez ce qui doit être fait maintenant. Soyez rapide et n'ayez pas peur, et vous vaincrez. Rappelez-vous cela quand vous serez dans l'arène. Maintenant allez-y et bonne chance. </p><p><b><br>Dirigez-vous vers l'Assistant au Nord, ouvrez la porte puis parlez à l'Assistant :</b> </p><p><br> -- Votre Clef de jugement déverrouille la porte. </p><p>-- {Assistant de l'Oracle}\":\" *Assistant de l'Oracle ...* * Assistant de l'Oracle ...* *Pas très agréable ce travail ...* OH! Bonjour, que puis-je pour vous ? </p><p>-- Vous avez dit : <b>travail</b> </p><p>-- {Assistant de l'Oracle}\":\" Encore Vous !! La dernière fois ne vous a pas suffi... encore \"franchir\" le mur je suppose ..? </p><p>-- vous avez dit : <b>franchir</b> </p><p>-- {Assistant de l'Oracle}\":\" Hum !!! Bonne chance... </p><p><b>L'Assistant vous téléporte au travers du mur.</b> </p><p>Prenez les escaliers. Vous verrez un portail. Entrez dans l’arène dans laquelle vous trouverez un homme (différent selon le chemin evil ou good). <u>Il y a 4 portails autour de la salle. Surtout ne les touchez PAS</u>, vous seriez téléporté en ville, et il vous faudrait refaire tout le chemin. </p><p>Conformément à ce que l'Oracle vous a dit vous devrez affronter la mort pour finir votre dernier test. Déshabillez-vous (0 CA) ne lancez aucun sort de protection et attaquez le PNJ (Gabriel Archonis côté good ou Gaenen Elthorn côté evil). Vous raterez jusqu'au moment où votre barre de vie sera proche de zéro). A ce moment vous toucherez à chaque fois et tuerez le PNJ. Une fois mort, attendez et vous serez téléporté près de l'Oracle. </p><p>Parlez-lui une dernière fois... </p><p>-- vous avez dit : <b>prêt a renaitre</b> </p><p>-- {L'Oracle}\":\" Etes vous absolument certain de vouloir renaître maintenant ? </p><p>-- vous avez dit : <b>oui</b> </p><p>et... </p><p><b>L'Oracle: Félicitations à xxxxxx</b> pour sa 1ère (ou autre)... renaissance!<b> </b><b></b> </p>",
        "images": [],
        "order": 8
      },
      {
        "title": "Les points séraph",
        "description": "<p>Vous vous retrouvez maintenant près d’Alphan. C’est le moment de choisir ou placer vos points d’énergie. 10 points sont disponibles en 1ère renaissance, 12 en 2ème renaissance ... jusqu'à 20 en x6. </p><p><b>Puissances</b> </p><p>La spécialisation coûte !! En clair : si vous voulez 10 dans une puissance donnée cela vous coûtera 1 point d’énergie. </p><p>Si vous voulez ajouter 10 de plus dans la même puissance cela vous coûtera 2 points soit 3 en tout … encore 10 de plus coûtera 3 points puis 4 points etc. </p><p>Ce qui est intéressant c’est que quand vous porterez un objet ajoutant X% dans une puissance donnée, le calcul se fera sur la puissance obtenue chez l’Oracle. Par exemple si vous avez obtenu 120 en puissance lumière et que vous équipiez un symbole d'espoir, cela donnera 120*125/100 = 150 (et non 120+25 = 145) ok ? </p><p>C<b>aractéristiques</b> </p><p>Même principe que les puissances. Un point dans une caractéristique donnée coûte 1 point d’énergie. Un point de plus dans la même caractéristique coûte maintenant 2 points d'énergie etc. </p><p><b>Résistances</b> </p><p>2 points d'énergie ajoutent toujours 10 dans la résistance choisie. </p><p><b>Vie ou mana</b> </p><p>1 point d'énergie ajoute toujours 10 points en vie ou mana. </p><p><b>L'aura séraph</b> </p><p>Vous disposez maintenant d'une <b>aura </b>séraph<b>. Si vous êtes attaqué, elle lance aléatoirement un sort </b>de contre-attaque. Elle lance aussi, toujours aléatoirement et si vous êtes attaqué, un sort de soin. Si vous êtes groupés, ce sort soigne les membres du groupe proches de vous. </p><p> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> </p>",
        "images": [],
        "order": 9
      }
    ],
    "credits": [
      "T4C NMS Révolution wiki"
    ]
  },
  {
    "title": "Renaissance Déchu",
    "slug": "renaissance-dechu",
    "zone": "Arakas",
    "prerequisites": [],
    "rewards": [],
    "npcs": [],
    "gold": "",
    "steps": [
      {
        "title": "Introduction",
        "description": "<p>Si vous faite déchu il y aura des choses différentes et des choses que vous pourrez pas faire. </p><p>Entre autre chose vous ne pourrez plus faire l'accès oracle ni aller à l'oracle en déchu. </p><p>Votre Sanctuaire sera dans les enclos à cochons et à DI au cimetière assez loin du temple donc pas trop pratique. </p><p>Ensuite votre aura sera différente et les ailes différentes. </p><p>Et faut être 5x level 100 pour renaitre déchu et pour ceux qui achètent en écus faut acheter un 5x et ensuite acheter 1x déchu qui revient 100 écus plus cher. </p><p>Donc je ne vous conseille pas de faire déchu comme premier perso mais si ça vous tente faites le comme deuxième perso (ou troisième ....). </p>",
        "images": [],
        "order": 0
      },
      {
        "title": "Renaître déchu",
        "description": "<p>Cette quête vous permettra de renaître en Déchu. Vous devez étre x5 et level 100. </p><p>Pour commencer vous pouvez préparer les accès nécessaires suivants pour pouvoir parler au différents PNJ impliqués dans cette quête. </p><ul><li>Iles Ethérées</li> <li>Zone Oracle Good ou Evil</li> <li>Dragon Island</li></ul><p>Pour commencer, rendez-vous au château de Silversky pour parler au PNJ Cuisteau. Il vous envoie à Niève (dans la première grotte, celle qui lies le mausolé au village Nieve) parler à Tafnoir Aigridor (dites lui travail). Celui ci vous demande de récupérer 30 peaux de loups (les loups blancs de la plaine de Niève). Une fois ces peaux obtenues, retournez le voir. Il vous envoie voir le tanneur Ladre Citre, se trouvant dans le village de Niève (vers le Sud en-dessous de la maison de l'ogresse) auquel vous donnerez ces peaux. Dites lui \"travail\" \"débordé\" \"oui\". </p><p>Celui-ci vous donne des pièces d'or ainsi qu'une clef permettant d'ouvrir une maison un peu plus haut (Maison de l'Ogresse). Vous y trouverez un coffre (forme de chaudron) dans lequel vous devez récupérer deux cuisseaux en cliquant dessus. </p><p><br> </p><p>Rendez-vous ensuite dans la maison de Malcolm Fello crane de malfrat\" puis \"oui\". Vous serez récompensé par une partie de cotte de mailles (aléatoire) et des xps. Vous n’avez qu'à lui dire <span class=\"npc-keyword\">\"crane de malfrat\"</span> une fois et il prendra tous les crânes que vous avez dans votre inventaire. Il garde aussi en mémoire combien de crânes vous lui avez rapporté, tout simplement parce que pour certains, vous recevrez plus d’xps. Pour chaque crâne donné à Delnar vous recevez une pièce aléatoire de cotte de maille et vous recevrez 50.000 xps ; excepté pour le 10e (vous recevrez 175.000 xps), pour le 25e (vous recevrez 500.000 xps) et pour le 100e (vous recevrez 2.500.000 xps). </p><p>Remarque: Vous pouvez effectuer cette quête à volonté. </p><p>PNJ impliqué: Delnar Lavndir </p><p>Récompenses acquises: Partie de cotte de mailles (aléatoire) (80 End), 50.000, 175.000, 500.000 ou 2.500.000 xps (selon le crâne que vous amenez). </p>",
        "images": [],
        "order": 0
      },
      {
        "title": "Les gemmes (Quête neutre)",
        "description": "<p>De nombreux monstres droppent des gemmes (Agathe, Diamant…). Dirigez-vous vers la ville des voleurs et trouvez Meltar Goanvach. Dites lui \"connard\" et courrez car il vous attaquera (vous aimeriez vous faire insulter, vous ?). Retournez le voir et dites <span class=\"npc-keyword\">\" Gemmes\"</span>, \"oui\". Vous serez récompensé par des points d’expérience et des potions de résistance. </p><p>(<b>\"Mention Spéciale Evil\"</b> N'insultez surtout pas Meltar Goanvach Si vous êtes, et/ou espérez devenir Ogrimarien! Sachant qu'il est incontournable afin d'accomplir beaucoup plus facilement, et 2 fois moins coûteux en gemmes pour accéder à réalisation de la Clef d'Ogrimar! Dites lui plutôt: \"Couronne de corruption\" N'ayant pas essayé avec un Séraphin, étant une quête neutre, ce mot clefs devrait pouvoir fonctionner en tous cas... ) </p><p>Récompenses : </p><p><br> Remarque: Vous pouvez effectuer cette quête à volonté. </p><p>PNJ impliqué: Meltar Goanvach </p><p>Récompenses acquises: Points d’expérience variés et potions de résistance variées. </p>",
        "images": [],
        "order": 1
      },
      {
        "title": "La quête du collectionneur de scalps (bénéfique et maléfique)",
        "description": "<p>Ramenez 5 Scalps (droppés par les Skraugs violets) à Wajpoothin au village Skraugs verts (à l’est) pour une masse Skraugbashor. Mots-clés : \"masse de Skraugbashor\", \"oui\". Vous recevrez aussi 1.000 xps multipliés par votre niveau actuel. </p><p>Ramenez 5 Masses Skraugbashor à Khan Wulgworth au village Skraugs roses (dans une grotte au centre) pour une ceinture de force Skraug. Mots-clés : \"masse de Skraugbashor\", \"oui\". Vous recevrez aussi 1.000 xps multipliés par votre niveau actuel. </p><p>Ramenez 3 ceintures de force Skraug au Prévot Grant Anfust à Stonecrest (situé dans la maison au sud du square de la ville), pour un livre du collectionneur (également droppé par les Assassins Obsidiens). Mots-clés : \"ceinture de force skraug\", \" oui\". Vous recevrez aussi 3.000 xps multipliés par votre niveau actuel. </p><p>Ramenez 5 livres du collectionneur au Roy Aedenas Valreus (situé à la ville des Centaures), pour un anneau du lion. Mots-clés : \"livres du collectionneur\", \"oui\". Vous recevrez aussi 3.750 xps multipliés par votre niveau actuel. </p>",
        "images": [],
        "order": 2
      },
      {
        "title": "Partie bénéfique",
        "description": "<p>Ramenez 2 anneaux du lion à Sir Beltigan (situé dans son château au sud-ouest de Stonecrest) pour obtenir soit un œil du tigre soit une épée de puissance en cristal. Mots-clés : \" anneaux du Lion\", \"oui\". Vous recevrez aussi 4.000 xps multipliés par votre niveau actuel. </p>",
        "images": [],
        "order": 3
      },
      {
        "title": "Partie maléfique",
        "description": "<p>Ramenez 3 anneaux du lion à Sir Mordenthal (situé dans son château au nord-est de Stonecrest) pour obtenir soit un manteau de l’Armageddon ou une grande hache de la victoire. Mots-clés : \"anneaux du Lion\", \"oui\". Vous recevrez aussi 6.000 xps multipliés par votre niveau actuel. </p><p><b>Remarque: Vous pouvez effectuer cette quête à volonté.</b> </p><p><b>PNJs impliqués:</b> Wajpoothin, Khan Wulgworth, Prévot Grant Anfust, Roy Aedenas Valreus, Sir Beltigan (pour la quête bénéfique), Sir Mordenthal (pour la quête maléfique). </p><p><b>Récompenses acquises:</b> Selon vos choix: </p><p>a. Masse Skraugbashor (280 For, 25 Dex, 20 Int, 25 Sag), 1.000 xps * niveau<br>b. Ceinture de force Skraug (100 End, 20 Int, 25 Sag), 1.000 xps * niveau<br>c. Anneau du lion (30 For, 22 End, 26 Dex, 25 Int, 25 Sag), 3.750 xps * niveau<br>d. Œil du tigre (115 Int, 113 Sag) ou épée de puissance en cristal (251 For, 21 Dex, 53 Int, 50 Sag), 4.000 xps * niveau pour la partie bénéfique uniquement.<br>e. Manteau de l’Armageddon (37 End, 175 Int,70 Sag) ou Grande hache de la victoire (242 For, 43 Dex, 25 Int, 25 Sag), 6.000 xps * niveau pour la partie maléfique uniquement. </p>",
        "images": [],
        "order": 4
      },
      {
        "title": "L’anneau de vraie foi (Quête bénéfique)",
        "description": "<p>Cherchez le PNJ nommé Theoran Feizdir (dans une petite maison située dans la plaine au sud-est de Stonecrest) et dites <span class=\"npc-keyword\">\"anneau de vraie foi\"</span>. Il vous demandera: </p><p>1 Anneau de foi (de la quête de l’anneau de foi)<br>1 Graal de pureté (droppé par les centaures vengeurs de Stoneheim)<br>2 Fioles d’ eau bénite (préparées par Theoran Feizdir [pour une fiole d’eau cristalline] ou Frère Thorkas [pour une fiole d’eau cristalline et 1.000 pièces d’or]), Mots-clés : \"eau bénite\", \"oui\". </p><p>Ramenez-lui les objets et dites <span class=\"npc-keyword\">\"anneau de vraie foi\"</span>, \"oui\" et il vous donnera l’anneau. </p><p>Remarque #1: Vous pouvez effectuer cette quête à volonté.<br>Remarque #2: Quand vous dites <span class=\"npc-keyword\">\"adieu\"</span> à Theoran Feizdir il invoque une Aura Protectrice pour vous. Elle vous donne +20 à toutes les résistances et dure 2 minutes 30 secondes. </p><p><b>PNJs impliqués:</b> Theoran Feizdir, Frère Thorkas (facultatif). </p><p><b>Récompense acquise:</b> Anneau de vraie foi (prérequis : 15 Int, 90 Sag) </p>",
        "images": [],
        "order": 5
      },
      {
        "title": "Le parchemin d’amitié des chevaux (Quête neutre)",
        "description": "<p>A la ville des Centaures, cherchez un PNJ nommé Dionysus Argantma (situé dans la maison au nord de la fontaine). </p><p>Dites-lui \"centaures squelettes\" et il vous demandera d’en tuer 12 puis de revenir le voir pour une récompense. Vous trouverez des centaures squelettes dans le donjon du château de Mordenthal (nord-est de Stonecrest). Tuez-en 12 (ou plus mais cela sera perdu) et retournez voir Dionysus Argantma. Dites <span class=\"npc-keyword\">\"centaures squelettes\"</span>, \"oui\" et il vous récompensera par un parchemin d’amitié des chevaux et 1.500 xps multipliés par votre niveau courant. </p><p>Vous pouvez l’utiliser à différentes fins: </p>",
        "images": [],
        "order": 6
      },
      {
        "title": "1ère manière : Quête de Malachaï",
        "description": "<p>Ramenez un parchemin d’amitié des chevaux (ou plusieurs à la fois) à Malachai Thanatos situé ville des Centaures dans la maison au sud de la fontaine (Mot-clé : <span class=\"npc-keyword\">\"parchemin d'amitié des chevaux\"</span>) pour obtenir l’un des articles suivants : </p><ul><li>Sinistre lame de guerre</li> <li>Lame assassine</li> <li>Arc pourfendeur de Centaures</li> <li>Robe des Enfers</li></ul><p>Vous recevrez aussi 2.000 xps multipliés par votre niveau courant. </p><p>Quand vous en aurez plusieurs, ces objets peuvent à nouveau être échangés au choix: </p><p>Ramenez <b>2</b> <b>Lames assassines</b> à Daran Pied-léger (situé à l’Auberge des Aventures de Stonecrest) pour une clé des îles éthérées brisée.<br>Mots-clés: \"lame assassine\", \"oui\". Vous recevrez aussi 1.500 xps multipliés par votre niveau actuel. <br><br>Ramenez <b>3 robes des Enfers</b> à Julian (situé à Stonecrest) pour un sceptre des Ténèbres. Mots-clés: \"Robe des enfers\", \"oui\". Vous obtiendrez aussi 2.500 xps multipliés par votre niveau actuel. </p><p>Ramenez <b>4 Sinistres lames de guerre</b> à Mordenthal (situé dans son château) pour une gemme sombre (et peut-être une lame-gemme sombre). Mots-clés : \"Sinistres lames de guerre\", \"oui\". Vous recevrez aussi 1.500 xps multipliés par votre niveau actuel. </p><p>Ramenez <b>5 Arcs pourfendeurs de Centaures</b> à Resha (située dans une maison proche de l’entrée est de Stonecrest) pour un Manteau de l’Archer. Mots-clés : \"arcs pourfendeurs de centaures\", \"oui\". Vous serez récompensés aussi par 2.500 xps multipliés par votre niveau actuel. </p>",
        "images": [],
        "order": 7
      },
      {
        "title": "2ème manière (buggée)",
        "description": "<p>Une fois que vous avez 10 parchemins d’amitié des chevaux, cherchez le PNJ errant nommé Cheval Sauvage Planétaire. Parlez-lui (<span class=\"npc-keyword\">mots-clés : \"travail\"...</span>) et il vous proposera de vous téléporter (pour le prix d’un parchemin) à l’un des endroits suivants: </p><p>Pont de Lighthaven <br>Stonehenge d’Arakas <br>Maison d’Annabelle <br>Brigands d’Arakas <br>Entrée de Windhowl <br>Château de Bane Gwengad<br>Château de Silversky <br>Stonehenge de Raven's Dust <br>Désert de Raven's Dust <br>Place de Stonecrest </p><p>Il se téléporte avec vous. </p><p>Remarque #1: Vous pouvez effectuer cette quête à volonté.<br>Remarque #2: Il y a un bug et le cheval n’apparaît pas dans le jeu (lol!!!!!). </p><p>PNJ impliqué: Dionysus Argantma, Malachai Thanatos/Cheval sauvage planétaire (Facultatif), Sir Mordenthal/Daran Pied-léger/Resha/Julian (Facultatif).<br> </p><p>Récompenses acquises: Selon vos choix: </p><p>a. Parchemin d’amitié des chevaux, 1.500 xps * niveau </p><p>b. Sinistre lame de guerre (266 For, 35 Dex, 35 Sag) ou Lame assassine (110 For, 65 Dex, 15 Int) ou Arc pourfendeur des Centaures (27 For, 140 Dex) ou Robe des Enfers (28 End, 123 Int, 85 Sag), 2.000 xps * niveau </p><p>c. Clé Ethérée Brisée, 1.500 xps * niveau </p><p>d. Sceptre des Ténèbres (20 For, 83 Int, 35 Sag), 2.500 xps * niveau </p><p>e. Gemme Sombre (et peut-être une lame-gemme sombre (242 For, 53 Int, 43 Sag)), 1.500 xps * niveau </p><p>f. Manteau de l’Archer (25 For, 70 Dex, 30 Int, 40 Sag), 2.500 xps * niveau </p>",
        "images": [],
        "order": 8
      },
      {
        "title": "La lame perdue du Dragon (Quête neutre)",
        "description": "<p>A Stonecrest, trouvez le Prévôt Grant Anfust (près de l'entrée Est). </p><p>Dites <span class=\"npc-keyword\">\"chapardeurs\"</span> puis \"arpenteurs de la nuit\" et il vous demandera de tuer 10 chapardeurs ou 10 arpenteurs de la nuit et de revenir le voir pour une récompense. Tuez-en 10 de chaque (vous en trouverez à profusion à la sortie est de Stonecrest) et retournez voir le Prévôt. </p><p>Dites à nouveau \"chapardeurs\" ou \"arpenteurs de la nuit\" et il vous remerciera avec une Note de Remerciement et 1.500 xps multipliés par votre niveau (Au maximum 50.000 xps). </p><p>Après cumul de 6 Notes de remerciement, parlez au Bourgmestre Belamzer (situé dans sa résidence, à Stonecrest). Dites <span class=\"npc-keyword\">\"note de remerciement\"</span> et vous recevrez en récompense une lame perdue du Dragon et 3.000 xps multipliés par votre niveau actuel. </p><p><b>Remarque :</b> Vous pouvez effectuer cette quête à volonté. </p><p><b>PNJs impliqués :</b> Prévôt Grant Anfust, Bourgmestre Belamzer </p><p><b>Récompenses acquises :</b> Lame perdue du Dragon (242 For), 6 * 1.500 xps * niveau actuel - au maximum 300.000 xps- et 3.000 xps * niveau actuel. </p>",
        "images": [],
        "order": 9
      },
      {
        "title": "Le heaume perdu du dragon (Quête neutre)    (Certificat de reconnaissance)",
        "description": "<p>A Stonecrest, trouvez le prévôt Grant Anfust. Dites <span class=\"npc-keyword\">\"document secret\"</span> et il vous demandera de lui en rapporter 5. Allez aux endroits suivants : </p><p> Ps:Attention qd vous clicquez un des coffres la clef se brise donc important de pas clicquer d'avance et s'assurer que qqun d'autre a pas ouvert avant. Sinon vous pouvez crocheter direct le coffre de Mithanna avec crochetage de serrures. </p><ul><li>1° Ouvrez le coffre dans la résidence du Bourgmestre Belamzer, vous trouverez une clé brillante en métal. <ul><li>Temps du coffre: 10 min a 2 et 20 min seul</li></ul></li> <li>2° Ouvrez le coffre brillant en métal dans la boutique d’armes de Gulfrid Morzholdir et vous devriez trouver une clé en métal sombre. <ul><li>Temps du coffre: 50 min toujours</li></ul></li> <li>3° Ouvrez le coffre en métal sombre dans la boutique d’armures de Herewald Herngwean et vous trouverez une clé en éclat d’os. <ul><li>Temps du coffre: 10 min a 2 et 20min seul</li></ul></li> <li>4° Ouvrez le coffre en éclats d’os dans la maison de Mithanna Snowraven et vous trouverez une clé de sureté en acier. <ul><li>Temps du coffre: 50 min toujours</li></ul></li> <li>5° Allez dans la planque des voleurs et ouvrez le coffre de sûreté en acier. Vous trouverez un document secret. <ul><li>Temps du coffre: 41 min toujours</li></ul></li></ul><ul><li>Temps du coffre: 10 min a 2 et 20 min seul</li></ul><ul><li>Temps du coffre: 50 min toujours</li></ul><ul><li>Temps du coffre: 10 min a 2 et 20min seul</li></ul><ul><li>Temps du coffre: 50 min toujours</li></ul><ul><li>Temps du coffre: 41 min toujours</li></ul><p>Collectez 5 Documents Secrets et rendez visite au prévôt Grant Anfust. Mots-clés: \"document secret\", \"oui\" et vous serez récompensés d’'un Certificat de reconnaissance, complétés par 2.500 xps et 3.500 pièces d’or, bien entendu multipliés par votre niveau actuel. </p><p>Collectez 6 Certificats de reconnaissances et allez voir le bourgmestre Belamzer. Mot-clé: <span class=\"npc-keyword\">\" Certificat de reconnaissance\"</span> et vous serez récompensés par un heaume perdu du dragon, ainsi que 2.500 xps et 1.000 pièces d’or, multipliés par votre niveau actuel. </p><p>Remarque #1: A chaque fois que vous ouvrez un coffre, la clé correspondante se brise et devient inutilisable (elle disparaît de votre inventaire). Les coffres ne droppent pas à chaque fois la clé suivante : ils droppent parfois autre chose ! Si cela se produit vous devez recommencer depuis le début puisque vous n’avez plus la clé qui s’est brisée. Si quelqu’un d’autre a ouvert le coffre récemment, vous devrez attendre environ une demi-heure pour avoir un nouveau drop. </p><p>Remarque #2: Vous pouvez effectuer cette quête à volonté. </p><p>PNJ impliqué: Prévôt Grant Anfust, Bourgmestre Belamzer </p><p>Récompenses acquises: Heaume perdu du dragon (150 End, 30 Int, 46 Sag), 17.000 xps * niveau actuel, 22.000 pièces d’or * niveau actuel. </p>",
        "images": [],
        "order": 10
      },
      {
        "title": "Sceptre d’espoir (Quête bénéfique)",
        "description": "<p>Dans la ville des Centaures, trouvez Dionysus Argantma. Dites <span class=\"npc-keyword\">\"Baton d'espérance\"</span> et il vous demandera les objets suivants: </p><ul><li>2 piles de bois d’arbres démoniaques (droppés par les arbres démoniaques sur RD)</li> <li>5 Symboles d’espoir (achetés à 10.000 pièces d’or chaque chez Chryseida Yolangda à Stonecrest)</li></ul><p>Ceci fait, retournez voir Dionysus Argantma et dites <span class=\"npc-keyword\">\"Baton d'espérance\"</span>, \"oui\" et il vous donnera un sceptre d’espoir. </p><p>Remarque #1: Vous pouvez effectuer cette quête à volonté. </p><p>Remarque #2: Vous devez être \"messager de la Lumière\" afin d’accomplir cette quête. (cf. Renaissance Séraphin d’Artherk, au commencement de cette quête). </p><p>PNJ impliqué: Dionysus Argantma, Chryseida Yolangda </p><p>Récompenses acquises: Sceptre d’espoir (110 For, 23 Int, 131 Sag). </p>",
        "images": [],
        "order": 11
      },
      {
        "title": "La clé éthérée (Quête neutre) (indroppable)",
        "description": "<ul><li>Échangez 2 lames assassines (obtenue lors de la quête du parchemin d’amitié des chevaux) chez Daran Pied-Léger (taverne de SC) contre une clé éthérée brisée (mot clé \"lame assassine\").</li></ul><p>Prenez une clé éthérée brisée et allez voir Bastien Milandra au château de Sir Beltigan. </p><p>Parlez-lui et dites dans l’ordre <i>nom</i>, <i>oui</i>, <i>travail</i>, <i>oui</i>, <i>aide</i>, <i>oui</i>, <i>séraphin</i>, <i>oui</i>, <i>clef éthérée</i>, et enfin <i>oui</i> à <b>Bastien Milandra</b> et il réparera finalement la clé. </p><p>Remarque: Vous pouvez effectuer cette quête à volonté (mais vous n’aurez pas besoin d’une 2e clé car elle ne se brise plus jamais). </p><p>PNJ impliqué: Bastien Milandra </p><p>Récompenses acquises: Clé éthérée qui vous donne accès au Royaume Ethéré et ses îles par le portail éthéré (il se déplace entre la cave araignées et les skraugs verts en 6 positions différentes - voir carte SH) </p>",
        "images": [],
        "order": 12
      },
      {
        "title": "Le luth de Paix (Quête neutre)",
        "description": "<p>Dans la ville des centaures, parlez à Dionysus Argantma. Dites <span class=\"npc-keyword\">\"quete\"</span>, \"Luth de paix\", \"recharger\". </p><p>Il vous demandera de recharger son luth, dites <span class=\"npc-keyword\">\"oui\"</span>. Prenez le et cherchez un portail éthéré (vous devez avoir terminé la quête de la clé éthérée). Une fois que vous l’avez trouvé, entrez dedans et cherchez Glaenshenmilandira (la seule pnj sur ces îles, impossible à louper, mais c'est loin !). </p><p>Dites-lui \"Luth de paix\" et elle vous demandera 6 luths magiques (droppés par le Bouffon Morbide, à Silversky). Trouvez-les et retournez la voir. Dites à nouveau \"Luth de paix\", \"oui\" et elle rechargera le luth. </p><p>Vous recevrez 2.000 xps multipliés par votre niveau actuel. </p><p>Retournez voir Dionysus Argantma et dites <span class=\"npc-keyword\">\"Luth de paix\"</span>. Vous recevrez 750 xps et 2.000 pièces d’or, le tout multipliés par votre niveau actuel; et si vous êtes chanceux, une robe des Cieux (inconnue sur NMS ???). </p><p>Remarque #1: Vous pouvez effectuer cette quête à volonté. </p><p>Remarque #2: Diyonyisus Argantma ne vous parlera de cette quête que la nuit. </p><p>Remarque #3: Sur les Îles Ethérées, vous croiserez un monstre nommé Purificateur. Si vous le tuez, vous devrez tuer autant de Néoflares que vous avez tué de purificateurs avant que Glaenshenmilandira ne vous parle. </p><p>PNJ impliqué: Dionysus Argantma, Bastien Milandra (Facultatif), Glaenshenmilandira </p><p>Mini Boss impliqué: Bouffon Morbide </p><p>Récompenses acquises: 2.750 xps * niveau actuel, 2.000 pièces d’or * niveau actuel, peut-être une robe des Cieux (28 End, 73 Int, 135 Sag) </p>",
        "images": [],
        "order": 13
      },
      {
        "title": "Quête de Mordenthal (maléfique)",
        "description": "<p>Description de la quête : Récoltez 3 anneaux du lion, via la quête de l'anneau du lion, et dites <span class=\"npc-keyword\">\"anneaux du lion\"</span>, puis \"oui\" à Mordenthal, situé dans son temple, dans les Montagnes au Nord de StoneCrest. </p><p>Attention, vous devez être d'un alignement maléfique pour effectuer cette quête ! </p><p>Vous pouvez accomplir cette quête à volonté. </p><p><b>Récompenses :</b> Manteau d'Armegeddon ou Grande Hache du Corbeau. </p><p><br> </p><p> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> </p>",
        "images": [],
        "order": 14
      }
    ],
    "credits": [
      "T4C NMS Révolution wiki"
    ]
  },
  {
    "title": "Accès Ile Lune",
    "slug": "acces-ile-lune",
    "zone": "Île Lune",
    "prerequisites": [],
    "rewards": [],
    "npcs": [],
    "gold": "",
    "steps": [
      {
        "title": "ACCES",
        "description": "<p>(\"travail\"...). </p><p>Il vous faudra réunir : </p>",
        "images": [
          "/t4c-nms-overview/assets/quests/acces-ile-lune/img_0_0.jpg"
        ],
        "order": 0
      },
      {
        "title": "Sur l'île Lune",
        "description": "",
        "images": [
          "/t4c-nms-overview/assets/quests/acces-ile-lune/img_1_0.jpg"
        ],
        "order": 1
      },
      {
        "title": "Pour XP",
        "description": "<p>Il faut une bonne CA (environ 200) pour XP sur l'île au sort de zone. En archer la CA n'est pas nécessaire car vous pouvez vous cacher dans une maison ou derrière un cours d'eau. L'xp est intéressante mais depuis l'existence de Drake Island, cette ile a perdu beaucoup de son intérêt sauf pour les drops.. </p>",
        "images": [],
        "order": 2
      },
      {
        "title": "Objets étoilés",
        "description": "<p>Vous y trouverez des mobs et coffres qui vont droper : </p><ul><li>parcelle d'étoile (drop assez fréquent du coffre étoilé dans le village au Nord)</li> <li>fragment de météorite (drop rare des skraugs Noctris Dézéthoill)</li></ul><p>Avec une parcelle d'étoile et 3 fragments de météorite, vous pourrez obtenir un item étoilé+4 </p><p>Attention : vous perdez l'accès après une renaissance ou si vous fabriqués un item étoilé ! </p><p><br> </p><p> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> </p>",
        "images": [],
        "order": 3
      }
    ],
    "credits": [
      "T4C NMS Révolution wiki"
    ]
  },
  {
    "title": "Accès Drake Island (La 4ème Ile)",
    "slug": "acces-drake-island-la-4eme-ile",
    "zone": "Drake Island",
    "prerequisites": [],
    "rewards": [],
    "npcs": [],
    "gold": "",
    "steps": [
      {
        "title": "Introduction",
        "description": "<p>Pour accéder à Drake Island vous devrez être au moins level 80 mais vous pouvez vous procurer les items auparavant. </p>",
        "images": [
          "/t4c-nms-overview/assets/quests/acces-drake-island-la-4eme-ile/img_0_0.jpg"
        ],
        "order": 0
      },
      {
        "title": "Rosalia Moonshadow",
        "description": "<p>Prenez la direction de la zone Oracle. Rendez vous sur la petite île après le pont invisible. Vous y trouverez une dame en robe orange, avec un bouclier des Haut-Elfes, Rosalia Moonshadow. </p><p>Dites lui \"<b>Redwall</b>\". Pour vous y envoyer, elle vous demandera une potion volcanique, une poignée de plumes et une poudre de diamants. </p>",
        "images": [],
        "order": 1
      },
      {
        "title": "Les ingrédients nécessaires",
        "description": "<ul><li>50 points de résistance au feu</li> <li>2 sachets de poudre jaune</li> <li>10 luths magiques</li> <li>1 collier de diamants</li> <li>4 diamants</li> <li>40 cristaux bruts</li> <li>800.000 pièces d'or</li> <li>l'accès aux Iles éthérées est nécessaire. Il est obtenu : <ul><li>si vous êtes Good, l'accès aux Iles éthérées est inclus dans l'accès Oracle.</li> <li>Sinon, en vous procurant une clé éthérée grâce à 2 lames assassines. Pour cela vous devez : <ul><li>Parlez à Dyonysos de la ville centaure (mot-clé <span class=\"npc-keyword\">\"<b>aide</b>\"</span> \"<b>centaures squelettes</b>\") puis tuez 12 centaures squelettes au sous-sol du château de Mordenthal. Puis retournez parlez à Dyonysos, dites <span class=\"npc-keyword\">\"<b>centaures squelettes</b>\"</span> et \"<b>oui</b>\", il vous donnera un parchemin d'amitié des chevaux. Refaites cela autant qu'il vous faudra de parchemins.</li> <li>Donnez des parchemins d'amitié des chevaux à Malachaï Thanatos de la ville centaure jusqu'à obtenir 2 lames assassines.</li> <li>Puis échangez ces 2 lames chez Daran Pied-Léger (taverne de SC) contre une clé éthérée brisée (mot clé \"<b>lame assassine</b>\").</li> <li>Et enfin allez voir Bastien Milandra (château de Sir Beltigan) qui vous l'échangera contre une clé éthérée (<b>T<i>ravail</i> et <i>Oui</i> 6 fois, puis <i>Travail</i>, <i>Aide</i>, <i>Aide</i>, <i>Séraphe</i>, <i>Séraphe</i>, <i>Oui</i>, <i>Clef éthérée</i>, et enfin <i>Oui</i></b><i>)</i></li> <li>ouf !!! Répétez bien \"<b>oui</b>\" à ses fadaises car il faut être gentil avec lui.</li></ul></li></ul></li></ul><ul><li>si vous êtes Good, l'accès aux Iles éthérées est inclus dans l'accès Oracle.</li> <li>Sinon, en vous procurant une clé éthérée grâce à 2 lames assassines. Pour cela vous devez : <ul><li>Parlez à Dyonysos de la ville centaure (mot-clé <span class=\"npc-keyword\">\"<b>aide</b>\"</span> \"<b>centaures squelettes</b>\") puis tuez 12 centaures squelettes au sous-sol du château de Mordenthal. Puis retournez parlez à Dyonysos, dites <span class=\"npc-keyword\">\"<b>centaures squelettes</b>\"</span> et \"<b>oui</b>\", il vous donnera un parchemin d'amitié des chevaux. Refaites cela autant qu'il vous faudra de parchemins.</li> <li>Donnez des parchemins d'amitié des chevaux à Malachaï Thanatos de la ville centaure jusqu'à obtenir 2 lames assassines.</li> <li>Puis échangez ces 2 lames chez Daran Pied-Léger (taverne de SC) contre une clé éthérée brisée (mot clé \"<b>lame assassine</b>\").</li> <li>Et enfin allez voir Bastien Milandra (château de Sir Beltigan) qui vous l'échangera contre une clé éthérée (<b>T<i>ravail</i> et <i>Oui</i> 6 fois, puis <i>Travail</i>, <i>Aide</i>, <i>Aide</i>, <i>Séraphe</i>, <i>Séraphe</i>, <i>Oui</i>, <i>Clef éthérée</i>, et enfin <i>Oui</i></b><i>)</i></li> <li>ouf !!! Répétez bien \"<b>oui</b>\" à ses fadaises car il faut être gentil avec lui.</li></ul></li></ul><ul><li>Parlez à Dyonysos de la ville centaure (mot-clé <span class=\"npc-keyword\">\"<b>aide</b>\"</span> \"<b>centaures squelettes</b>\") puis tuez 12 centaures squelettes au sous-sol du château de Mordenthal. Puis retournez parlez à Dyonysos, dites <span class=\"npc-keyword\">\"<b>centaures squelettes</b>\"</span> et \"<b>oui</b>\", il vous donnera un parchemin d'amitié des chevaux. Refaites cela autant qu'il vous faudra de parchemins.</li> <li>Donnez des parchemins d'amitié des chevaux à Malachaï Thanatos de la ville centaure jusqu'à obtenir 2 lames assassines.</li> <li>Puis échangez ces 2 lames chez Daran Pied-Léger (taverne de SC) contre une clé éthérée brisée (mot clé \"<b>lame assassine</b>\").</li> <li>Et enfin allez voir Bastien Milandra (château de Sir Beltigan) qui vous l'échangera contre une clé éthérée (<b>T<i>ravail</i> et <i>Oui</i> 6 fois, puis <i>Travail</i>, <i>Aide</i>, <i>Aide</i>, <i>Séraphe</i>, <i>Séraphe</i>, <i>Oui</i>, <i>Clef éthérée</i>, et enfin <i>Oui</i></b><i>)</i></li> <li>ouf !!! Répétez bien \"<b>oui</b>\" à ses fadaises car il faut être gentil avec lui.</li></ul>",
        "images": [],
        "order": 2
      },
      {
        "title": "Trouvez 50 points de résistance au feu et 2  sachets de poudre jaune",
        "description": "<ul><li>Une potion de faible résistance vaut 1 point.</li> <li>Une potion de résistance partielle vaut 2 points.</li> <li>Une potion de grande résistance vaut 5 points.</li></ul><p>Pour ce faire collectez les gemmes opale (pour les potions de faible résistance), rubis (pour les potions de résistance partielle) et grenat (pour les potions de grande résistance) ; la qualité de ces gemmes n'ayant aucune importance. Puis allez voir Meltar Goanvach dans la cave des voleurs de Stonecrest pour échanger vos gemmes (mot-clé <span class=\"npc-keyword\">\"<b>gemmes</b>\"</span>). Attention, obtenir une potion est très aléatoire, préparez-vous à en échanger beaucoup. </p><p>Vous trouverez ces gemmes un peu partout et particulièrement en faisant le donjon des Galinettes (pour levels 50-80). </p><p>Par ailleurs, les kobolds droppent parfois une potion de faible résistance au feu. Pensez-y quand vous êtes petit level. </p><p>Si vous êtes dans une guilde, les hauts levels pourront probablement vous aider soit en vous en donnant, soit en faisant la quête des fèves au salon de jeu. </p><p>Vous aurez aussi besoin de 2 sachets de poudre jaune (dropés par Araf Kul et Roshnak Tul, camp Orc d'Arakas). </p>",
        "images": [],
        "order": 3
      },
      {
        "title": "Allez voir Harung Batkist au rez-de-chaussée de la bibliothèque de Raven's Dust",
        "description": "<p>Dites-lui : \"<b>Potion Volcanique</b>\" puis indiquez-lui vos potions. </p><p>Par exemple, si vous avez 6 potions de grandes résistance, 5 partielles et 10 faibles, dites lui : </p><ul><li><b>6 fois \"grande\"</b></li> <li><b>5 fois \"partielle\"</b></li> <li><b>10 fois \"faible\"</b></li></ul><p>Dites enfin \"<b>volcanique</b>\" puis \"<b>oui</b>\". </p>",
        "images": [],
        "order": 4
      },
      {
        "title": "Trouvez 10 luths magiques et un collier de diamants",
        "description": "<p><b>Les luths magiques</b> sont dropés par le Bouffon Morbide (prison du château de Silversky - respawn environ 22 minutes). </p><p><b>Le collier de diamants</b> est droppé par les créatures bannies du labyrinthe d'Arakas ou le dragon Yeridaj de Niève (respawn environ 1 heure) </p>",
        "images": [],
        "order": 5
      },
      {
        "title": "Allez voir \"un brave chasseur\" aux Iles éthérées",
        "description": "<p>Il tient compagnie à la Séraphine Glaenshenmilandira dans le château des Iles Éthérées (l'accès en est donc indispensable, voyez plus haut comment l'obtenir (quêtes de la clef éthérée néphilim ou accès Oracle pour séraphin). </p><p>Dites-lui \"<b>distraire</b>\", il vous prendra alors pour la distraire, les 10 luths magiques et le collier de diamants. Pendant qu'il jouera de la musique, la belle relâchera son attention et il lui arrachera une pleine poignée de plumes. </p>",
        "images": [],
        "order": 6
      },
      {
        "title": "Retournez voir Rosalia Moonshadow",
        "description": "<p>(en pratique, vous pouvez préparer la poudre de diamant par avance) </p><p>Redites-lui \"<b>Redwall</b>\", elle vous dira qu'elle a oublié quelque chose pour vous envoyer sur Drake Island : la poudre de diamant. </p>",
        "images": [],
        "order": 7
      },
      {
        "title": "Trouvez 4 diamants et 40 \"cristal brut\"",
        "description": "<p><b>Les diamants</b> sont dropés par le coffre Sud de la maison du Bourgmestre de Windhowl (profitez-en pour cliquer l'autre coffre plus au Nord, il drope parfois un morceau de nacre). Les diamants sont aussi dropés par le coffre à l'est du camp du commandant Owain, aux druides d'Arakas. </p><p><b>Les \"cristal brut\"</b> sont dropés par les skraugs verts. </p>",
        "images": [],
        "order": 8
      },
      {
        "title": "Allez voir Arakis Haz à Windhowl",
        "description": "<p>Elle se trouve dans une maison au Sud-Est de Windhowl (1722,1349). Dites-lui \"<b>fabriquer</b>\". Elle fabriquera la poudre de diamant (elle vous demandera aussi 800.000 pièces d'or). </p>",
        "images": [],
        "order": 9
      },
      {
        "title": "Le labyrinthe",
        "description": "",
        "images": [
          "/t4c-nms-overview/assets/quests/acces-drake-island-la-4eme-ile/img_10_0.jpg"
        ],
        "order": 10
      },
      {
        "title": "Retournez voir Rosalia Moonshadow",
        "description": "<p>Redites lui \"<b>RedWall</b>\". Elle vous enverra franchir un labyrinthe invisible en moins de 10 minutes. Si vous dépassez les 10 minutes, il vous faudra refaire tout le labyrinthe. </p><p>Pour bien commencer, empruntez la porte de gauche. Continuez dans cette direction puis traversez la salle en zigzaguant. Une fois de l'autre côté, passez la porte et continuez tout droit dans le couloir. Vous passerez à travers un mur (passage secret) qui vous mènera à Magdala. Répondez <span class=\"npc-keyword\">\"<b>oui</b>\"</span> à sa question et elle vous enverra à RedWall, ville de Drake Island. </p><p style=\"text-align:center;\"></p><p class=\"mw-empty-elt\"></p><p> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> </p>",
        "images": [
          "/t4c-nms-overview/assets/quests/acces-drake-island-la-4eme-ile/img_11_0.jpg"
        ],
        "order": 11
      }
    ],
    "credits": [
      "T4C NMS Révolution wiki"
    ]
  },
  {
    "title": "Quête d'accès à l'académie",
    "slug": "quete-dacces-a-lacademie",
    "zone": "Académie",
    "prerequisites": [],
    "rewards": [],
    "npcs": [],
    "gold": "",
    "steps": [
      {
        "title": "Introduction",
        "description": "<p>La quête d'accès à l'Académie permet d'obtenir <b>3 récompenses différentes</b>. </p><p>Vous pouvez la faire partiellement- même en humain mais il faut être sur SH - <b>pour l'xp qu'elle rapporte (les 8 mobs faisables seul vous montent level 54).</b> </p><ul><li><b>de l'XP</b> : Après chaque monstre vous gagnerez beaucoup d'XP : elle est calculée comme suit pour les 16 premiers : <ul><li>500K + (100K * (numDuMob-1). Par ex: 500k + 100*(2-1) = 600k pour le rejet du monde.</li> <li>Soit environ 27M d'xp sur SH et encore environ 37M d'xp sur DI (sans compter le Cerberus). Pas de level minimum mais vous devez être sur SH bien sûr.</li></ul></li></ul><ul><li>500K + (100K * (numDuMob-1). Par ex: 500k + 100*(2-1) = 600k pour le rejet du monde.</li> <li>Soit environ 27M d'xp sur SH et encore environ 37M d'xp sur DI (sans compter le Cerberus). Pas de level minimum mais vous devez être sur SH bien sûr.</li></ul><ul><li><b>L'Aura des Sages</b> <ul><li>Une fois votre dernière renaissance projetée atteinte, essayez d'obtenir l'aura des sages avant le level 150 car elle est très intéressante.</li> <li>C'est une aura permanente qui remplace avantageusement tout les items 1.25 de la Crimsonscale. De plus, plus besoin de switcher vos bijoux ni d'activer des items.</li> <li>Vous devez avoir capturé les 19 premiers monstres et aussi <b>complété la Crimsonscale lors de votre renaissance actuelle</b> (amulette, bracelet immortel et ceinture instable) <b>sauf si vous avez acheté des renaissances même niveau!!</b> En parlant alors à Pelkor Zirus au salon de jeu, ces items disparaîtront et vous obtiendrez à leur place une aura permanente, l'aura des Sage, qui vous donnera de meilleurs bonus. De plus les emplacements libérés peuvent être utilisés pour porter d'autres items.</li> <li>Vous devez être sur Drake Island bien sûr sinon pas de level minimum mais être aux alentours de 120 semble raisonnable.</li></ul></li> <li><b>L'accès à l'Académie</b> <ul><li>Après avoir capturé les 19 premiers monstres, jusqu'à la liche ancestrale et finalisé l'accès, vous aurez accès à l'Académie si vous êtes level 150. Dites une dernière fois \"proie\" puis \"partir\" à Pelkor Zyrus.</li></ul></li> <li><b>TIPS à lire</b> <ul><li><b>Une bénédiction</b> est indispensable pour avoir suffisamment d'attaque pour toucher le mob avec le sceptre.</li> <li>Si vous faites le début jusqu'au Cellenium (8ème mob), faisable seul avec une bonne béné, cela vous rapportera déjà 7M XP et vous mènera au level 54. Et l'ensemble des mobs jusqu'à SH vous permettra d'atteindre le level 62 !</li> <li><b>Prêtres lumières :</b> Le 9ème mob ( soldat égaré) est encore faisable pour vous en utilisant \"<b>repouss</b>\". Si vous êtes d'une autre classe, la seule solution sera de refaire au moins un plein de potions pour arriver à le finir !!</li> <li><b>Prêtres</b> : Vous serez alors level 55 et pourrez apprendre \"<b>guérison</b>\" chez l'évêque s'il est en bonne santé (sinon sachez qu'il change spontanément d'état après 3 heures sans changement).</li></ul></li></ul><ul><li>Une fois votre dernière renaissance projetée atteinte, essayez d'obtenir l'aura des sages avant le level 150 car elle est très intéressante.</li> <li>C'est une aura permanente qui remplace avantageusement tout les items 1.25 de la Crimsonscale. De plus, plus besoin de switcher vos bijoux ni d'activer des items.</li> <li>Vous devez avoir capturé les 19 premiers monstres et aussi <b>complété la Crimsonscale lors de votre renaissance actuelle</b> (amulette, bracelet immortel et ceinture instable) <b>sauf si vous avez acheté des renaissances même niveau!!</b> En parlant alors à Pelkor Zirus au salon de jeu, ces items disparaîtront et vous obtiendrez à leur place une aura permanente, l'aura des Sage, qui vous donnera de meilleurs bonus. De plus les emplacements libérés peuvent être utilisés pour porter d'autres items.</li> <li>Vous devez être sur Drake Island bien sûr sinon pas de level minimum mais être aux alentours de 120 semble raisonnable.</li></ul><ul><li>Après avoir capturé les 19 premiers monstres, jusqu'à la liche ancestrale et finalisé l'accès, vous aurez accès à l'Académie si vous êtes level 150. Dites une dernière fois \"proie\" puis \"partir\" à Pelkor Zyrus.</li></ul><ul><li><b>Une bénédiction</b> est indispensable pour avoir suffisamment d'attaque pour toucher le mob avec le sceptre.</li> <li>Si vous faites le début jusqu'au Cellenium (8ème mob), faisable seul avec une bonne béné, cela vous rapportera déjà 7M XP et vous mènera au level 54. Et l'ensemble des mobs jusqu'à SH vous permettra d'atteindre le level 62 !</li> <li><b>Prêtres lumières :</b> Le 9ème mob ( soldat égaré) est encore faisable pour vous en utilisant \"<b>repouss</b>\". Si vous êtes d'une autre classe, la seule solution sera de refaire au moins un plein de potions pour arriver à le finir !!</li> <li><b>Prêtres</b> : Vous serez alors level 55 et pourrez apprendre \"<b>guérison</b>\" chez l'évêque s'il est en bonne santé (sinon sachez qu'il change spontanément d'état après 3 heures sans changement).</li></ul>",
        "images": [],
        "order": 0
      },
      {
        "title": "Démarrer la quête",
        "description": "<ul><li>Rendez vous au Salon de Jeux de Stoneheim (anciennement Colisée, au nord-est de Stonecrest).</li> <li>Traversez le bâtiment jusqu'à tomber sur Pelkor Zyrus, le PNJ placé derrière des grilles.</li> <li>Engagez la discussion en disant <span class=\"npc-keyword\">\"travail\"</span> (elle se veut être très longue...).</li> <li>Il vous remettra un sceptre afin de capturer des monstres.</li> <li>Après chaque capture, revenez le voir afin qu'il vous donne votre récompense en XP puis dites-lui \"proie\". En réponse, il vous indiquera votre prochaine proie et vous donnera une indication - pas toujours très claire - concernant le lieu où la trouver.</li></ul><p><br> </p><ul><li><b>Tip1 :</b> Il faut affaiblir les monstres avec vos sorts/armes standard jusqu'à ce qu'il leur reste très peu de points de vie puis équiper le sceptre (si vous êtes guerrier/archer) et les frapper avec (<b>pour le rat prenez le sceptre directement</b>). N'oubliez pas votre sort \"force\".</li> <li><b>Tip2 :</b> Les mobs sont de plus en plus forts et le temps de respawn est de plus en plus long (10 min pour le rat, 18 min pour le soldat égaré, 30 min pour le Drake Dixtor Supérieur).</li> <li><b>Tip3 : </b>A partir du 3ème ou 4ème monstre, <b>vous devrez être béni</b> pour augmenter votre attaque et pouvoir toucher le monstre avec le sceptre.</li> <li><b>Tip4 :</b> A partir du 9ème monstre, vous devrez vous faire aider par un GB. Autrement vous risquez fort d'y laisser votre peau (sauf en prêtre lulu qui peut encore vaincre le 9ème au repouss ).</li></ul><p><br> </p>",
        "images": [],
        "order": 1
      },
      {
        "title": "Les monstres",
        "description": "<p><b>(pour vous orienter en jeu, la carte \"ctrl W\" et petite flèche bleue en bas à droite pour choisir l'île ou bien utilisez la carte locale par Ctrl + Tab)</b> </p>",
        "images": [],
        "order": 2
      },
      {
        "title": "1. Rat affamé",
        "description": "<p>Arakas : Sous-sol niveau -2 du temple LH, vers l'Ouest - 180,118,1 =&gt; <b>500K xp </b> </p>",
        "images": [
          "/t4c-nms-overview/assets/quests/quete-dacces-a-lacademie/img_3_0.jpg"
        ],
        "order": 3
      },
      {
        "title": "2. Rejet du monde",
        "description": "<p>Arakas : Dans la cave du vieil ermite, au Sud-ouest - 140,1050, 2 =&gt; <b>600K xp</b> </p>",
        "images": [
          "/t4c-nms-overview/assets/quests/quete-dacces-a-lacademie/img_4_0.jpg"
        ],
        "order": 4
      },
      {
        "title": "3. Chef de guerre Kobold",
        "description": "<p>Arakas : Nord-est des montagnes Jarko - 2174,152,0 =&gt; <span style=\"font-style: normal;\"><b>700k xp</b></span> </p><p>Passez le<span style=\"font-style: normal;\"> pont menant aux monts de Righul/Jarko puis plein Nord. </span> </p>",
        "images": [
          "/t4c-nms-overview/assets/quests/quete-dacces-a-lacademie/img_5_0.jpg"
        ],
        "order": 5
      },
      {
        "title": "4. Rampilius",
        "description": "<p>Arakas : Labyrinthe d'Arakas - 765,186,1 =&gt; <b>800k xp</b> </p><p>L'entrée est à l'ouest du petit lac qui termine vers le sud la rivière voisine de la RST. </p>",
        "images": [
          "/t4c-nms-overview/assets/quests/quete-dacces-a-lacademie/img_6_0.jpg",
          "/t4c-nms-overview/assets/quests/quete-dacces-a-lacademie/img_6_0.jpg"
        ],
        "order": 6
      },
      {
        "title": "5. Agrenarok",
        "description": "<p>Arakas : Cité perdue (<i>Ville des Nains</i>) - 2640,340,0 =&gt;<b>900k xp</b> </p><p>Passez le labyrinthe d'Arakas, allez au delà de la sortie du labyrinthe, direction nord-ouest. </p>",
        "images": [
          "/t4c-nms-overview/assets/quests/quete-dacces-a-lacademie/img_7_0.jpg"
        ],
        "order": 7
      },
      {
        "title": "6. Rampilios",
        "description": "<p>Raven's Dust : Cave d'Anrak - 1169,263,2 =&gt; <b>1M xp</b> </p><p>L'entrée de la cave se trouve au sous-sol de la maison d'Anrak située au Nord-Nord-Est de la RST de Raven's Dust : 597,1763.0. </p><p><i>Sortilège lancé par le monstre Rampilios :</i> </p>",
        "images": [
          "/t4c-nms-overview/assets/quests/quete-dacces-a-lacademie/img_8_0.jpg",
          "/t4c-nms-overview/assets/quests/quete-dacces-a-lacademie/img_8_0.jpg",
          "/t4c-nms-overview/assets/quests/quete-dacces-a-lacademie/img_8_0.jpg"
        ],
        "order": 8
      },
      {
        "title": "7. Soldat disparu",
        "description": "<p>Arakas : Cave B dans les montagnes Jarko - 280,2350,2 =&gt; <b>1,1M xp</b> </p><p>Pas facile de trouver la cave B =&gt; sagesse\". Poursuivez donc le dialogue dans cette voie en suivant les mots-clefs. Au mot-clef <span class=\"npc-keyword\">\"récompense\"</span>, il vous transformera toutes vos perles de pluie en potions de premier secours, et ceci en une fois.<br>Une fois les potions en main, direction Raven's Dust, au Nord-Ouest des montagnes entourant la tour de Zhakar. Vous trouverez Hably Cover sur une petite plage. Dîtes-lui \"potion\" et elle vous proposera de résoudre une énigme plutôt loufoque. Vous devrez proposer un nombre au hasard et vous obtiendrez diverses récompenses. </p><p>Après 80, 81 ou 82 tentatives infructueuses, vous aurez le Présent des Alvors à coup sûr avec le meme perso !!! (j ais rarement vu plus de 82) Apres la quete se remet a 0 donc vous pouvez recommencer indéfiniment. </p>",
        "images": [
          "/t4c-nms-overview/assets/quests/quete-du-present-des-alvors/img_0_t0.jpg"
        ],
        "order": 0
      },
      {
        "title": "Récompenses",
        "description": "<ul><li><b>Le Présent des Alvors</b> (Amulette des Héros version archer)</li> <li>De l'or (en général 500po multiplié par votre lvl)</li> <li>Épée d'argent (épée pour noob à 71 force)</li> <li>Potion de régénération (valeur de 90kpo/unité à la revente chez un marchand)</li> <li>Paire de ciseaux !</li> <li>Rien *la fille part dans ses pensées*</li> <li>Un petit tour sur RD</li> <li>un petit retour a son sanctuaire</li> <li>Lingot d'iridium</li> <li>Pomme</li> <li>Livre de cuisine</li> <li>Cake aux fruits</li> <li>?...</li></ul>",
        "images": [],
        "order": 1
      },
      {
        "title": "Conseils",
        "description": "<p>Essayez d'échanger ces perles une fois haut niveau, elles vous rapporteront plus d'or. </p><p><br> </p><p> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> </p>",
        "images": [],
        "order": 2
      }
    ],
    "credits": [
      "T4C NMS Révolution wiki"
    ]
  },
  {
    "title": "Quête de Sarah (Robes brodées)",
    "slug": "quete-de-sarah-robes-brodees",
    "zone": "Arakas",
    "prerequisites": [],
    "rewards": [],
    "npcs": [],
    "gold": "",
    "steps": [
      {
        "title": "La quête de Sarah ou des robes brodées (reskinnées simples)",
        "description": "<p><b>Parlez à Sarah, située au premier sous-sol du temple de Stonecrest, elle vous proposera de broder une robe si vous lui fournissez la robe (non brodée) et les items nécessaires (un ornement et 3 bobines de fil d'or).</b> </p><p>Le skin de la robe va changer comme indiqué. Très intéressant pour transformer le plastron chance en une belle robe mauve ou pour maigrir rapidement !! </p>",
        "images": [],
        "order": 0
      },
      {
        "title": "Les robes",
        "description": "<p><b>Robe des Fournaises</b> </p><ul><li>Devient robe rouge ordinaire</li></ul><p><b>Robe des Flammes ardentes</b> </p><ul><li>Devient robe rouge ordinaire</li></ul><p><b>Manteau de sève mystique</b> </p><ul><li>Devient robe brune ordinaire</li></ul><p><b>Suaire du Phoenix</b> </p><ul><li>Devient robe blanche ordinaire</li></ul><p><b>Manteau Inlandsis</b> </p><ul><li>Devient robe bleu pale ordinaire</li></ul><p><b>Manteau du Khamsin</b> </p><ul><li>Devient robe jaune ordinaire</li></ul><p><b>Plastron étincelant =&gt; toge étincelante</b> </p><ul><li>Devient robe mauve ordinaire</li></ul>",
        "images": [
          "/t4c-nms-overview/assets/quests/quete-de-sarah-robes-brodees/img_1_0.jpg"
        ],
        "order": 1
      },
      {
        "title": "Items nécessaires",
        "description": "<p><b>3 bobines de fil d'or et :</b> </p><ul><li>Un ornement de rubis pour une robe rouge</li> <li>Un ornement de saphir pour une robe bleue</li> <li>Un ornement de diamant pour une robe blanche ou jaune</li> <li>Un ornement d'émeraude pour une robe marron</li></ul><p>Voyez la quête des ornements pour savoir comment obtenir les ornements (sauf cobalt). </p><p>3 bobines de fil d'or (obtenues à partir de minerai d'or) pour la toge étincelante et </p><ul><li>Deux ornements de cobalt (il vous faut 2 minerais de cobalt par ornement, minés sur les gisements d'argent de la grotte Orc RD). <ul><li>Pour faire les ornements de cobalt, aller dans la cave des Skraugs verts muni des minerais et parler à Brikdétruk (position 1952,1406). Puis lui dire <span class=\"npc-keyword\">\"Travail\"</span> plusieurs fois de suite.</li></ul></li></ul><ul><li>Pour faire les ornements de cobalt, aller dans la cave des Skraugs verts muni des minerais et parler à Brikdétruk (position 1952,1406). Puis lui dire <span class=\"npc-keyword\">\"Travail\"</span> plusieurs fois de suite.</li></ul><p>Les bobines se craftent à partir de pépites d'or . Autre solution : 3 coffres dropent (parfois) directement une bobine de fil d'or sur Arakas : </p><ul><li>Aux druides d'Arakas Audrey (celle qui fait les robes de couleurs. pos 2935,155)</li> <li>Au village nain 2ème maison (pos: 2652,391)</li> <li>Cave D des montagnes de Jarko, à côté de Trish Jalnec (celui qui drope la pioche de lh. pos 870,2629)</li></ul><p><br> </p><p> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> </p>",
        "images": [],
        "order": 2
      }
    ],
    "credits": [
      "T4C NMS Révolution wiki"
    ]
  },
  {
    "title": "Les autres quêtes 1.25",
    "slug": "les-autres-quetes-1-25",
    "zone": "Arakas",
    "prerequisites": [],
    "rewards": [],
    "npcs": [
      "Filandrius",
      "Sentinelle de Windhowl"
    ],
    "gold": "",
    "steps": [
      {
        "title": "Le Chef des Mercenaires (Arakas)",
        "description": "<p>A la fontaine de Lighthaven, cherchez un PNJ nommé Vincent Finelame. Parlez-lui et il vous dira qu’il a besoin d’un groupe d’héros pour faire un assaut sur trois camps différents. Dites <span class=\"npc-keyword\">\"<b>Olin Haad</b>\"</span>, \"<b>Tarnian\"</b>, \"<b>oui</b>\", \"<b>Details</b>\" et il vous donnera plus de détails sur votre quête. </p><p>Dirigez-vous vers le pont ouest de Lighthaven et une fois passé, allez vers le nord. Vous arriverez au 1<sup>er</sup> camp, facile à identifier avec les catapultes. Tuez 15 mercenaires jusqu’à ce que vienne le Lieutenant mercenaire. Tuez-le et dirigez-vous vers le 2<sup>e</sup> camp, situé juste au nord-est de celui où vous êtes. Tuez encore une fois 15 mercenaires et le Lieutenant mercenaire. Dirigez-vous vers l’est et suivez le chemin jusqu’à atteindre le 3<sup>e</sup> camp. Encore une fois tuez les 15 mercenaires et le Lieutenant mercenaire. Vous recevez le message suivant: </p><p><i>Dès que le lieutenant mercenaire s’écroule, vidé de toute vie, vous entendez le son d’un cor de guerre venant du camp nord.</i> </p><p>Suivez le chemin vers l'est (la route contourne la montagne et continue vers l'ouest) jusqu’à ce qu’il s’achève. Continuez vers l’ouest et vous arriverez à quelques maisons abandonnées. Trouvez le Chef mercenaire et tuez le. Retournez voir Vincent Finelame. </p><p>Dites-lui \"<b>Récompense</b>\" et vous recevrez 750 xps multipliés par votre niveau actuel et 500 pièces d’or. </p><p><b>Remarque:</b> Vous pouvez effectuer cette quête à volonté. </p><p><b>PNJ impliqué: </b>Vincent Finelame. </p><p><b>Mini-boss impliqués:</b> Mercenaires, Lieutenant mercenaire, Chef des mercenaires. </p><p><b>Récompenses acquises:</b> (750*lvl actuel) xps, 500 pièces d’or. </p>",
        "images": [],
        "order": 0
      },
      {
        "title": "Le Livre de la Connaissance Arcane (ceinture instable) (SH)",
        "description": "<p>Allez à la Grande Bibliothèque (à l’est de l’entrée de la crypte de Raven’s Dust) et parlez à Filandrius. Dites <span class=\"npc-keyword\">\"<b>La magie étrangère</b>\"</span>, \"<b>Besoin</b>\", \"<b>Filnar'thir</b>\", \"<b>Ténèbres</b>\", \"<b>Récupérer ce livre</b>\" et il vous enverra tuer Anthor le Fou et prendre le Livre de la Connaissance Arcane. </p><p>Allez à Stoneheim et trouvez Anthor (il est situé au nord-est de l’entrée de la grotte aux araignées, juste avant les skraugs verts). Maintenant tuez Anthor le Fou, vous recevrez le Livre de la Connaissance Arcane. </p><p><b>Tip</b> : Si vous l'attaquez en physique (war, archer, ou sort physique) et n'êtes pas très fort, après 20 ou 30 secondes il va se régénérer vite et vous aurez du mal à le tuer. Dans ce cas faites vous aider par un mage qui va l'affaiblir à l'aide d'un sort mental et attaquez le à ce moment. </p><p>Retournez-voir Filandrius, cliquez dessus et il prendra le Livre. Vous recevrez une ceinture de protection instable et une gemme de protection instable. Vous pouvez aussi lui demander de vous enseigner des nouveaux sorts (si vous avez les bonnes stats). </p><p><b>PNJ impliqués: </b>Filandrius </p><p><b>Mini-boss impliqués:</b> Anthor le Fou </p><p><b>Récompenses acquises:</b> Ceinture de Protection Instable, Gemme de Protection Instable (0 stats), Nouveaux sorts disponibles. </p><p>PS1: Si par accident vous deletez la ceinture retournez parler à filandrius il vous refera faire la quête. </p><p>PS2: Vous conservez la ceinture en cas de renaissance ! </p>",
        "images": [],
        "order": 1
      },
      {
        "title": "Le Faucheur de Vie (bracelet et gemme IMMO) (SH)",
        "description": "<p>La quête des Faucheurs de Vie consiste à tuer les 3 Faucheurs de Vie situés sur chaque île, à raison d’un par île. </p><p>Dirigez-vous vers Windhowl et <u>parlez à la sentinelle de Windhowl</u> (située aux portes de la ville). Dites <span class=\"npc-keyword\">\"<b>aide</b>\"</span> et il vous dira que derrière les portes se trouve Hel, le Faucheur de Vie d’Arakas. Cherchez-le (c’est un PNJ non-séraphe situé vers le nord-ouest de Windhowl <b>récompense\"</b>, vous recevrez 100 xps multipliés par votre niveau et 500 pièces d’or multipliées par votre niveau. </p><p>Maintenant, <u>allez parler à Filandrius</u> (situé dans la Grande Bibliothèque de RD). Il reconnaîtra la pierre spirituelle de Hel et vous dira que c’est intéressant. Dites <span class=\"npc-keyword\">\"<b>Intéressant</b>\"</span>, \"I<b>nnombrables richesses</b>\", \"P<b>ierre spirituelle</b>\" (et non le mot clef pierre spirituelle qui apparaît dans le dialogue), \"<b>Noms</b>\" et <u>il vous donnera le nom des 3 Faucheurs de Vie</u> : Jormungand, Hel et Fenrir. Il vous dira aussi qu’une fois les 3 pierres spirituelles réunies vous devrez trouvez un portail au village des Centaures. </p><p>Dirigez-vous ensuite vers la Tour de Zhakar. Allez vers l’ouest et passez au-dessus de Stonehenge. Suivez la ligne de montagnes et tournez vers l’est à la première ouverture. Continuez vers l’est et vous trouverez le Faucheur de Vie de Raven’s Dust, Jormungand qui ressemble lui aussi à un néphilim <b>délivrer</b>\". Filandrius prendra le Cristal de la Providence et vous recevrez le Bracelet et la Gemme des Immortels. </p><p><b>Remarque #1 :</b> Vous devez être au minimum niveau 50 pour commencer cette quête.... et beaucoup plus pour la finir !! </p><p><b>Remarque #2 : </b>La récompense donnée par la Sentinelle ne peut être obtenue qu’une seule fois par renaissance. </p><p><b>PNJ impliqués : </b>Filandrius, Sentinelle de Windhowl </p><p><b>Mini-boss impliqués :</b> Jormungand, Hel, Fenrir, le Faucheur de Vie (Harvester of Life) </p><p><b>Récompenses acquises :</b> Bracelet et Gemme des Immortels(0 stats), 100 xp * niveau actuel, 500 po * niveau actuel. </p>",
        "images": [],
        "order": 2
      },
      {
        "title": "Voyage entre les plans (réservé aux Séraphes level 50+)",
        "description": "<p>Vous remarquerez que dans chaque ville (et pas que dans les villes) se trouve un portail auxquel vous n'avez pas accès. </p><p>Vous ne pourrez y accéder que si vous êtes Séraphe/Néphi, au moins level 50 et avez terminé la quête d'accès. </p><p>Pour avoir accès à l'Interplan vous devez activer 8 portails (sur 10). Ces portails sont situés à : </p><ol><li>Lighthaven (AR)</li> <li>Windhowl (AR)</li> <li>Camp des Druides (AR)</li> <li>Silversky (RD)</li> <li>Oasis (RD)</li> <li>Bibliothèque (RD)</li> <li>Stonecrest (SH)</li> <li>Ville Centaure (SH)</li></ol><p>Pour activer l'accès approchez-vous d’un portail et sautez dedans. Dites <span class=\"npc-keyword\">\"<b>Creations</b>\"</span>, \"<b>Stop</b>\", \"<b>Yes</b>\". Vous entrez alors à l’intérieur et vous apparaîtrez autre part. Vous avez environ 60 secondes pour tuer Doppelganger. Entrez dans chacun des 8 portails et faites de même. Vous ne pourrez pas rentrez dans un portail déjà fait avant d’avoir fini les huit. Terminez les 8 et vous pourrez traverser les plans (Plane Walking) (cela signifie que vous pouvez utiliser les portails pour voyager de l'un à l'autre). Cette carte de l'interplan vous montre les destinations des portails quand vous traversez les plans. </p><p><b>Remarque 1 :</b> Le meilleur moyen pour tuer Doppelganger, même pour les mages, ce sont les armes physiques (ou à mains nues si vous bénéficiez d'une bonne force). Il est conseillé d'activer si vous en avez vos boucliers offensifs. Les sorts, à moins d’être à un niveau supérieur à 150 ne leur font rien. </p><p><b>Remarque 2</b> : Vous perdez l'accès à chaque renaissance et devrez attendre le niveau 50 pour le refaire. </p><p><b>Remarque 3</b> : Niève et Redwall seront automatiquement activés </p><p><b>Mini-boss impliqués :</b> Doppelganger </p><p><b>Récompense acquise :</b> Planewalking (ou interplan) (plus besoin d’acheter des parchemins de LH, WH, SS, etc.) </p>",
        "images": [],
        "order": 3
      },
      {
        "title": "L’Ancienne Plaque Céleste (Quête réservée aux Séraphes)(non répétable)",
        "description": "<p>Près de la fontaine de Stonecrest, vous trouverez un PNJ appelé Tristan. Parlez-lui et répondez à ses questions. Dites-lui \"<b>oui</b>\", \"<b>oui</b>\", \"<b>récemment</b>\", \"<b>déterraient</b>\" et vous entendrez une histoire au sujet de deux hommes qui creusaient le sol avec des pelles. Ils finirent par trouver un corps de Séraphin et sont partis vers l’est dans leur roulotte. </p><p>Allez vers l’est et suivez le chemin menant aux araignées. Juste avant d’y arriver, vous verrez un petit camp avec des guerriers Obsidian Conclave. Tuez-en environ dix jusqu’à ce qu’apparaisse le commandant Mordred. Tuez-le et vous obtiendrez une petite clé en fer. Avec celle-ci, ouvrez le coffre situé dans le camp, vous obtiendrez l'ancienne plaque céleste (indropable). </p><p><b>PNJ impliqué: </b>Tristan </p><p><b>Mini-boss impliqué:</b> Commandant Mordred </p><p><b>Récompense acquise:</b> le plastron Ancienne Plaque Céleste (Stats: 100 End, 30 For, 30 Dex, 30 Int, 30 Sag) (indropable) </p><ul><li><b>Bonus du plastron</b> : Quand vous êtes attaqué, un sort s'enclenche sur la gauche avec les autres sorts : il boost la CA, régénère mana vie et plus, très utile dans les zones ou il y a beaucoup de mobs surtout avec les sorts de zone comme les boucliers de feu air eau ou électrique.</li> <li><b>Attention</b> : ne pas deleter avant d'être 260, vous savez pas quand elle pourrait servir.</li></ul><p><br> </p><p> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> </p>",
        "images": [],
        "order": 4
      }
    ],
    "credits": [
      "T4C NMS Révolution wiki"
    ]
  },
  {
    "title": "Quête des livres de chance",
    "slug": "quete-des-livres-de-chance",
    "zone": "Drake Island",
    "prerequisites": [],
    "rewards": [],
    "npcs": [],
    "gold": "",
    "steps": [
      {
        "title": "La quête",
        "description": "",
        "images": [
          "/t4c-nms-overview/assets/quests/quete-des-livres-de-chance/img_0_0.jpg"
        ],
        "order": 0
      },
      {
        "title": "Les livres",
        "description": "<ol><li>TIP : Un bon spot pour faire droper les livres est le petit lac à l'ouest du désert de DI. Tournez autour et tuez les mobs. Il y a là beaucoup de drakes akaïstes qui dropent bien surtout si vous portez quelques items chance.</li> <li>TIP : Un conseil, allez-y par le Nord, en passant par la plaine centrale et le passage le long de la côte. Vous éviterez ainsi au maximum les vers et autres gardiens du désert.</li></ol>",
        "images": [],
        "order": 1
      },
      {
        "title": "Les récompenses",
        "description": "<p>La liste d'objets ci-dessous est <b>non exhaustive...</b> </p>",
        "images": [],
        "order": 2
      },
      {
        "title": "Objets utiles et/ou équipables",
        "description": "<ul><li>Anneau béni des Hauts Altéens</li> <li>Amulette de chance (+20 chance)</li> <li>Anneau de fer</li> <li>Anneau de pierre de sang</li> <li>Anneau de platine</li> <li>Anneau de sorcellerie en jade</li> <li>Bague araignée</li> <li>Baguette magique*</li> <li>Chapeau en feuilles</li> <li>Cape du bouffon</li> <li>Cape des voyelles</li> <li>Cape d'Armageddon</li> <li>Carquois de terre</li> <li>Chapeau de glace*</li> <li>Collier du coeur noir*</li> <li>Conte des dragons</li> <li>Epée de Fureur</li> <li>Flèches de terre</li> <li>Fragment de météorite</li> <li>Hyperpotion d'esprit clair</li> <li>Livre des sorts rouge</li> <li>Marteau des nains</li> <li>Oeil du tigre</li> <li>Potion de faible résistance contre le mal/feu...</li> <li>Potion de grande résistance contre le mal/feu...</li> <li>Pièces d'or ( de 10 à 500 000 maximum)</li> <li>Scalpel du chirurgien</li> <li>Sceptre de Zlüg</li> <li>Sceptre d'espoir</li> <li>Sombre chapeau</li> <li>Tambour finement ciselé</li> <li>Retrait de pièces d'or !!! (attention à votre or)</li> <li>Parchemin d'expérience d'une heure (droppable)</li> <li>Parchemin d'expérience de 10 minutes (droppable)</li> <li>Trèfle à 4 feuilles</li> <li>Venin d'araignée</li></ul>",
        "images": [],
        "order": 3
      },
      {
        "title": "Décoratifs et RP (équipables)",
        "description": "<ul><li>Lance</li> <li>Couvercle de poubelle (bouclier des ères sans bonus)</li> <li>Bâton orné d'une pierre verte</li> <li>Lambeaux de troll ensanglantés (cuir)</li> <li>Bottes de la tortue</li> <li>Robe grise (robe skin)</li> <li>Epée squelette</li></ul>",
        "images": [],
        "order": 4
      },
      {
        "title": "RP non équipables",
        "description": "<ul><li>Arbalète</li> <li>Pic à glace</li> <li>Fiole d'alchimiste (nécessaire pour la formule de la Fiole du Démon 106 Apothicaire)</li> <li>Ciseaux</li> <li>Tige de gobelin</li> <li>Pomme juteuse</li> <li>Rouleau à pâtisserie</li> <li>Cake aux fruits</li></ul><p> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> </p>",
        "images": [],
        "order": 5
      }
    ],
    "credits": [
      "T4C NMS Révolution wiki"
    ]
  },
  {
    "title": "Quête des essences de Bzu",
    "slug": "quete-des-essences-de-bzu",
    "zone": "Drake Island",
    "prerequisites": [],
    "rewards": [],
    "npcs": [],
    "gold": "",
    "steps": [
      {
        "title": "Introduction",
        "description": "<p>Rendez-vous au sous-sol des métiers de Redwall. </p><p>Parlez à un vieillard sénile et dites lui \"travail\". Puis poursuivez le dialogue jusqu'à dire <span class=\"npc-keyword\">\"essences\"</span>. </p><p>Il vous prendra alors vos 10 essences de B'Zurkhan contre 10M d'xp et 500k po. </p><p>Vous pouvez renouveler cette quête à volonté. </p><p> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> </p>",
        "images": [],
        "order": 0
      }
    ],
    "credits": [
      "T4C NMS Révolution wiki"
    ]
  },
  {
    "title": "Quete de Lahor",
    "slug": "quete-de-lahor",
    "zone": "Arakas",
    "prerequisites": [],
    "rewards": [],
    "npcs": [],
    "gold": "",
    "steps": [
      {
        "title": "Introduction",
        "description": "<p>Rendez visite à Lahor, situé dans la maison de Lance Silversmith, vous découvrirez que son \"Travail\" est de forger des armes. </p><ul><li>Deux morceaux de fer (drop des Bzus, ile DI).</li> <li>Une peau de ver (drop des apocalypses des sables, île DI).</li> <li>Une lame perdue du dragon (quête des notes de remerciement, ile SH).</li> <li>Une sinistre lame de guerre (quête de Malachaï, ile SH).</li> <li>Un bâton de marche tordu (coffre de l'asile, ile AR).</li> <li>Une dague du crâne (quête des ailes de chauve-souris) <u>OU</u> un scalpel du chirurgien (quête de la pierre de vie). <br>Vous obtiendrez, selon l'arme que vous avez fournie, une <b>dague ensanglantée du crâne</b> ou un <b>scalpel du chirurgien poli </b>(le nom a été modifié depuis le screen) et 70.000 xp.</li></ul><p><b>Notez bien que la quête échoue environ une fois sur deux</b>!!! Vous recevrez alors 20 000 pièces d'or et 70.000 xp, mais tous les objets seront perdus (grrrrr cela m'est arrivé...). </p><p><br> entrer\"), ceux qui dropent la clef de chair durcie #22, pour arriver dans son antre. </p><p>Puis, mettez vous tout nu, complètement débuff et sans arme et foncez dessus (<b>non....joke</b>)! </p><p>Pour terminer la quête Académie, n'oubliez pas de capturer le Cerberus cela vous rapportera 10G d'xp et 10 parchemins d'xp x2 d'1 heure (ensuite aller rendre la capture a Pelkor Zirus comme les autres captures au salon de jeux.(Oubliez pas d'enlever le sceptre pour qu'il le reprenne)). </p><p><b>Attention</b> : lorsque vous passez le portail pour la première fois, vous perdez <u>presque</u> toutes vos clefs de chair durcie!! </p><p>Ne restent que celles qui permettent d'accéder au Cerberus en ligne droite, c'est à dire les #3, #6, #21 et #22. Vous pourrez donc retourner au Cerberus, mais ne pourrez pas camper les coffres iridium ou ivoire, ni les vers enfouis, ni les gargouilles éthérées. Pour ce faire, il faut... refaire les clefs qui vous intéressent (dans l'ordre... ou pas...). Amusez-vous bien!! </p><p>Tip : Vous pouvez faire d'avance en double les clés qui tombent au sol mais pas celles qui tombent directement dans votre sac. </p><p><u><b>Cerberus, le boss à 3 têtes </b></u> </p><p>Attention ce boss a la capacité de vous retirer toutes vos magies actives et d'invoquer des rejetons (gare à leur nécro) s'il est de mauvaise humeur !! </p><p> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> </p>",
        "images": [
          "/t4c-nms-overview/assets/quests/donjon-du-cerberus/img_24_0.jpg"
        ],
        "order": 24
      }
    ],
    "credits": [
      "T4C NMS Révolution wiki",
      "By Mëyli",
      "Cl",
      "Sauv",
      "Salle aux",
      "Salles des gargouilles",
      "Coffres pour cl",
      "Salle des gargouilles",
      "Tourbillon",
      "by Meyli"
    ]
  },
  {
    "title": "Coffres iridium",
    "slug": "coffres-iridium",
    "zone": "Drake Island",
    "prerequisites": [],
    "rewards": [],
    "npcs": [],
    "gold": "",
    "steps": [
      {
        "title": "Présentation du camping des 5 coffres iridium",
        "description": "<p>Vous disposez de 5 coffres iridium à l'Académie-4. </p><p>Ils sont accessibles à partir du moment où vous disposez des 11 premières clés de chair durcie. Le temps de repop d'un coffre est de 1 heure in game. Chaque joueur dispose d'un timer qui lui est propre. Un coffre drope dans l'inventaire un lingot d'iridium, un item secret ou une potion (pas de relique hélas). </p><p>Vous devrez passez par la salle aux leviers \"clé 8\" puis par la salle \"clé 10\". Attention : n'oubliez pas la potion d'inertie pour passer la salle \"clé 10\". Enfin entrez dans la salle aux 4 tourbillons. </p><p>Comment ça se passe ? </p><p>Selon le coffre que vous désirez ouvrir, vous devrez marcher sur une série de dalles bleues ou vertes numérotées de 1 à 8 pour les bleues et de 1 à 5 pour les vertes. La dalle bleue numéro 1 est notée B1 etc. </p><p>A partir de la salle aux quatre tourbillons, au dessus de la clé 10, en prenant le tourbillon caché par le mur du bas. Les cheminements menant aux différentes dalles Bleues et Vertes sont les suivants : </p><p>V1 et V2 = dans la salles des dalles (DD GGGG D)<br>V3 = D G DD (salle des dalles petit côté, haut)<br>V4 = D G D sur une île obsidienne </p><p>Attention, pour chaque couleur, il faut bien suivre l'ordre des dalles. Si vous marchez sur une mauvaise dalle, vous devrez recommencer au début la couleur concernée (mais vous pouvez marcher plusieurs fois sur la dalle que vous êtes en train de faire). </p><p>Les temps moyens affichés correspondent aux temps qu'il faut pour réaliser la combinaison et ouvrir le coffre concerné en partant du coffre précédent. <u>Exemple</u> : temps moyen du coffre 1 : 3 minutes 40 en partant du coffre 5. Ces temps sont réalisés en se dirigeant directement vers les dalles 1B après l'ouverture du coffre précédent sans passer par les bâfreurs de chair fraîche quand cela est possible. </p><p>Enfin le dernier chapitre vous donne le contenu de chaque coffre... </p>",
        "images": [
          "/t4c-nms-overview/assets/quests/coffres-iridium/img_0_0.jpg",
          "/t4c-nms-overview/assets/quests/coffres-iridium/img_0_0.jpg"
        ],
        "order": 0
      },
      {
        "title": "Coffre 1 = 8B2V (8 bleu 2 vert)",
        "description": "<p>-- Temps moyen : 3 minutes 45 -- </p><p>Aller dans la salle aux quatre tourbillons (au dessus de la salle \"clé 10\") et prendre le tourbillon caché par le mur du bas. </p><p>Depuis première île, GGGG et activer dalle 1 bleu puis prendre tourbi vers bâfreurs.<br>Depuis première île, aller salle des dalles (DD GGGG D), activer 1 vert et 2 bleu puis prendre tourbi au nord.<br>Depuis première île, aller petit côté (DGDD) activer 3 bleu puis prendre tourbi vers bâfreurs.<br>Depuis première île, aller salles des dalles (DD GGGG D), activer 2 vert puis 4, 5, 6, 7 bleu avant de reprendre le tourbi à côté de la porte Nord.<br>Depuis première île, faire DD GGGG, activer 8 bleu puis D, arrivée salle des dalles, cliquer sur le coffre près de la porte au Nord. </p><p>Ensuite n'oubliez pas d'activer 1 vert avant de prendre le tourbillon vers bâfreurs. </p><p><br> </p>",
        "images": [],
        "order": 1
      },
      {
        "title": "Coffre 2 = 7B4V (7 bleu 4 vert)",
        "description": "<p>-- Temps moyen : 4 minutes 20 -- </p><p>Aller dans la salle aux quatre tourbillons (au dessus de la salle \"clé 10\") et prendre le tourbillon caché par le mur du bas. </p><p>Depuis première île, GGGG et activer dalle 1 bleu puis prendre tourbi vers bâfreurs.<br>Depuis première île, aller salle des dalles (DD GGGG D), activer 1 vert 2 vert 2 bleu puis prendre tourbi au Nord vers bâfreurs.<br>Depuis première île, aller petit côté (DGDD), activer 3 bleu 3 vert puis prendre tourbi vers bâfreurs.<br>Depuis première île, DGD puis activer dalle 4 vert puis D vers petit côté ...<br>Depuis première île, aller salle des dalles (DD GGGG D), activer 4 ,5 , 6 , 7 bleu puis ouvrir le coffre au Sud (caché par le mur). </p><p>Ensuite n'oubliez pas d'activer 1 vert avant de prendre le tourbillon Nord vers bâfreurs. </p><p><br> </p>",
        "images": [],
        "order": 2
      },
      {
        "title": "Coffre 3 = 2B1V (le petit coffre)(2 bleu 1 vert)",
        "description": "<p>-- Temps moyen : 2 minutes 15 -- </p><p>Aller dans la salle aux quatre tourbillons (au dessus de la \"clé 10\") et prendre celui caché par le mur du bas. </p><p>Depuis première île, GGGG et activer dalle 1 bleu puis prendre tourbi vers bâfreurs.<br>Depuis première île, aller salle des dalles (DD GGGG D), activer 1 vert et 2 bleu puis prendre tourbi au Nord.<br>Depuis première île, activer DG puis ouvrir le coffre. </p><p>Ensuite au choix : </p><ul><li>Sortez par DD (petit côté de la salle des dalles puis bâfreurs)</li> <li>ou rejoignez directement la dalle 1 bleu par GD GD GD DGG.</li></ul><p><br> </p>",
        "images": [],
        "order": 3
      },
      {
        "title": "Coffre 4 = 6B4V (6 bleu 4 vert)",
        "description": "<p>-- Temps moyen : 4 minutes 45 -- </p><p>Aller dans la salle aux quatre tourbillons (au dessus de la \"clé 10\") et prendre celui caché par le mur du bas. </p><p>Depuis première île, GGGG et activer 1 bleu puis prendre tourbi vers bâfreurs.<br>Depuis première île, aller salle des dalles (DD GGGG D), activer 1 vert 2 vert 2 bleu puis prendre tourbi au nord.<br>Depuis première île, aller petit côté (DGDD), activer 3 bleu 3 vert puis prendre tourbi.<br>Depuis première île, DGD puis activer dalle 4 vert puis D vers petit côté ...<br>Depuis première île, aller salle des dalles (DD GGGG D), activer 4, 5, 6 bleu puis puis tourbi au nord.<br>Depuis première île, activer DD GG puis ouvrir le coffre. </p><p>Ensuite au choix : </p><ul><li>Sortez par GG D (bâfreurs)</li> <li>ou rejoignez directement la dalle 1 bleu par DDG DDG G.</li></ul><p><br> </p>",
        "images": [],
        "order": 4
      },
      {
        "title": "Coffre 5 = 3B5V (3 bleu 5 vert)",
        "description": "<p>-- Temps moyen : 4 minutes 15 -- </p><p>Aller dans la salle aux quatre tourbillons (au dessus de la \"clé 10\") et prendre celui caché par le mur du bas. </p><p>Depuis première île, GGGG et activer dalle 1 bleu puis prendre tourbi vers bâfreurs.<br>Depuis première île, aller salles des dalles (DD GGGG D), activer 1 vert 2 vert 2 bleu puis prendre tourbi au nord.<br>Depuis première île, aller petit côté (DGDD), activer 3 bleu 3 vert puis prendre tourbi.<br>Depuis première île, DGD puis activer dalle 4 vert puis D vers petit côté ...<br>Depuis première île, aller salle des dalles (DD GGGG D), activer 5 vert puis tourbi au nord.<br>Depuis première île, activer G puis ouvrir le coffre. </p><p>Enfin GGG. Au passage marchez sur la dalle 1 bleu. Et G pour sortir (bâfreurs) </p><p><br> </p>",
        "images": [],
        "order": 5
      },
      {
        "title": "=== Coffre 1 === 8B 2V",
        "description": "<ul><li>Lingot d'iridium + potions</li> <li>Estampe secrète de Miryden</li> <li>Estampe secrète de Gorodek</li> <li>Orbe secret d'Isilaë</li> <li>Orbe secret de Valmar</li> <li>Poudre secrète de Falyel</li> <li>Poudre secrète de Jalaam</li> <li>Marque secrète de Klauzar</li> <li>Marque secrète de Gorodek</li> <li>Inscription secrète de Silvius</li> <li>Inscription secrète d'Amaëlle</li> <li>Blason secret de Xordiv</li> <li>Blason secret de Miryden</li></ul>",
        "images": [],
        "order": 6
      },
      {
        "title": "=== Coffre 2 === 7B 4V",
        "description": "<ul><li>Lingot d'iridium + potions</li> <li>Estampe secrète de Falyel</li> <li>Estampe secrète de Klauzar</li> <li>Orbe secret de Xordiv</li> <li>Orbe secret de Jalaam</li> <li>Poudre secrète d'Amaëlle</li> <li>Poudre secrète de Klauzar</li> <li>Marque secrète de Falyel</li> <li>Marque secrète de Miryden</li> <li>Inscription secrète d'Isilaë</li> <li>Inscription secrète de Gorodek</li> <li>Blason secret de Valmar</li> <li>Blason secret de Silvius</li></ul>",
        "images": [],
        "order": 7
      },
      {
        "title": "=== Coffre 3 === 2B 1V",
        "description": "<ul><li>Lingot d'iridium + potions</li> <li>Estampe secrète d'Amaëlle</li> <li>Estampe secrète de Valmar</li> <li>Orbe secret de Silvius</li> <li>Orbe secret de Gorodek</li> <li>Poudre secrète d'Isilaë</li> <li>Poudre secrète de Miryden</li> <li>Marque secrète d'Amaelle</li> <li>Marque secrète de Valmar</li> <li>Inscription secrète de Falyel</li> <li>Inscription secrète de Xordiv</li> <li>Blason secret de Klauzar</li> <li>Blason secret de Jalaam</li></ul>",
        "images": [],
        "order": 8
      },
      {
        "title": "=== Coffre 4 === 6B 4V",
        "description": "<ul><li><b></b>Lingot d'iridium + potions</li> <li>Estampe secrète de Xordiv</li> <li>Estampe secrète de Sylvius</li> <li>Orbe secret de Miryden</li> <li>Orbe secret de Falyel</li> <li>Poudre secrète de Gorodek</li> <li>Poudre secrète de Valmar</li> <li>Marque secrète de Sylvius</li> <li>Marque secrète de Xordiv</li> <li>Inscription secrète de Klauzar</li> <li>Inscription secrète de Jalaam</li> <li>Blason secret d'Amaëlle</li> <li>Blason secret d'Isilaë</li></ul>",
        "images": [],
        "order": 9
      },
      {
        "title": "=== Coffre 5 === 3B 5V",
        "description": "<ul><li><b></b>Lingot d'iridium + potions</li> <li>Estampe secrète d'Isilaë</li> <li>Estampe secrète de Jalaam</li> <li>Orbe secret de Klauzar</li> <li>Orbe secret d'Amaëlle</li> <li>Poudre secrète de Xordiv</li> <li>Poudre secrète de Silvius</li> <li>Marque secrète de Jalaam</li> <li>Marque secrète d'Isilaë</li> <li>Inscription secrète de Miryden</li> <li>Inscription secrète de Valmar</li> <li>Blason secret de Falyel</li> <li>Blason secret de Gorodek</li></ul><p>Uqbar, Elcentor et quelques autres ! merci à eux </p><p> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> </p>",
        "images": [],
        "order": 10
      }
    ],
    "credits": [
      "T4C NMS Révolution wiki",
      "Uqbar"
    ]
  },
  {
    "title": "Coffres ivoire",
    "slug": "coffres-ivoire",
    "zone": "Académie",
    "prerequisites": [],
    "rewards": [],
    "npcs": [],
    "gold": "",
    "steps": [
      {
        "title": "Les deux coffres ivoire",
        "description": "<p>Vous trouverez deux coffres ivoire au niveau -4 de l'Académie. </p><p>Il vous faut avoir les clés de chair jusqu'à la clé 14 pour pouvoir accéder à la salle aux 11 tourbillons (celle de la clé de chair 15). </p><p>Il vous faudra aussi des clés de rosée (celle du puits pour aller au Lord) pour pouvoir ouvrir les coffres. </p><p>1er coffre : prenez le tourbillon permettant d'accéder à la salle de la clé corail 3. Cliquez sur le coffre \"accès au coffre ivoire\". Vous êtes arrivé ! </p><p>En plus d'ivoires d'Agamaoth celui de droite (dit coffre archer) drope aussi : </p><ul><li>Critique</li> <li>Popo Prisme</li> <li>Fèves de toutes sortes</li> <li>Chevalière de stagnation</li> <li>Lame en orichalque</li> <li>Manche en orichalque</li> <li>Fût en ébonite</li> <li>Pointes de flèches en tungstène</li></ul><p>2ème coffre : prenez le tourbillon permettant d'accéder à l'escargot de la clé 17. Marcher sur la droite en longeant le bord (prévoyez des potions pour la lave) et <b>entrez par la gauche dans le premier tourbillon rencontré.</b> Vous êtes arrivé ! </p><p>En plus d'ivoires d'Agamaoth celui de gauche (dit coffre guerrier) drope aussi : </p><ul><li>Critique</li> <li>Popo Prisme</li> <li>Fèves de toutes sortes</li> <li>Chevalière de stagnation</li> <li>Lame de métrolite</li> <li>Lame en acier métrolite</li> <li>Manche en acier métrolite</li> <li>Pointes de flèche en orichalque</li></ul><p>Ouvrez les coffres à l'aide d'une clé de rosée (du Lord). Le timing des coffres est personnel et est d'une heure IG. </p><p>Bonne chance ! </p><p> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> </p>",
        "images": [],
        "order": 0
      }
    ],
    "credits": [
      "T4C NMS Révolution wiki"
    ]
  },
  {
    "title": "Camping Académie-3",
    "slug": "camping-academie-3",
    "zone": "Arakas",
    "prerequisites": [],
    "rewards": [],
    "npcs": [],
    "gold": "",
    "steps": [
      {
        "title": "Introduction",
        "description": "<p>Pour rappel, Les anciens BOSS de LH2 ou plutôt leurs réincarnations ne sont pas loin <b>!</b> </p><p>QUARAN (Tarnian), OCTRAEL (Edgar), ARKELISE (Moonrock), KORES (Araknor) peuvent être invoqués en vous rendant dans la maisonnette de Marty Rhyser au -3. </p><p>Tous les détails dans camping super Boss </p>",
        "images": [],
        "order": 0
      },
      {
        "title": "PLAN DE L'ACADEMIE-3",
        "description": "<p><br> </p><p><b>Les différents monstres (boss et mini-boss) sont invoqués via la console centrale (coffre central). </b> </p><p><b>Il faut activer une combinaison de deux orbes (coffres) avant d'activer la console centrale. Chaque orbe est affectée d'une valeur de 1 à 8.</b> </p><p><b>Une combinaison est déterminée par la somme de la valeur des deux orbes (coffres) qui la composent.</b> </p><p><b>Il y a au total 13 combinaisons possibles. Dans la suite, le premier nombre représente la somme de la valeur de deux orbes. Les paires de nombres qui suivent représentent les valeurs des deux orbes.</b> </p><p><b>En général, chaque combinaison a 3 effets possibles avec respectivement une probabilité de 50%, 25% et 25% parmi bonus, malus ou monstre.</b> </p><p><b>Plus d'effets sont parfois possibles...</b> </p><p>Remarque : L'homme lézard depop après 20 minutes s'il n'est pas tué. </p>",
        "images": [
          "/t4c-nms-overview/assets/quests/camping-academie-3/img_1_0.jpg"
        ],
        "order": 1
      },
      {
        "title": "INVOCATION DES MONSTRES en fonction des orbes activées",
        "description": "<p><b>3</b> : 12 : <b>Alanara'ak l'hérétique (dit <span class=\"npc-keyword\">\"le poulet\"</span>)</b> / Jumeaux humanoïdes grotesques / Malus </p><p><b>4</b> : 13 :<b> Créature infernale</b> <b>(dite \"le totem\")</b> / Assemblage minéral / Ver d'acier </p><p><b>5</b> : 14/23 : Humanoïde grotesque (50%) / Croc Blanc (25%) / <s>Amalgame de chair</s>/ Malus (25%) </p><p><b>6</b> : 15/24 : Homme lézard / Assemblage minéral / ver d'acier </p><p><b>7</b> : 16/25/34 : Croc Blanc (50%) / Humanoïde grotesque (25%) / Amalgame de chair (25%) </p><p><b>8</b> : 17/26/35 : Bonus (50%) / Ver d'acier (25%) / Assemblage minéral (25%) </p><p><b>9</b> : 18/27/36/45 : Malus (50%) / Humanoïde grotesque (25%) / Amalgame de chair (25%) </p><p><b>10</b> : 28/37/46 : Ver d'acier / Croc Blanc / Amalgame de chair ou Bonus ou Malus ?? </p><p><b>11</b> : 38/47/56 : Homme lézard (50%) / Assemblage minéral (25%) / Bonus (25%) </p><p><b>12</b> : 48/57 : Amalgame de chair (50%) / Homme lézard (25%) / Malus (25%) </p><p><b>13</b> : 58/67 : Amalgame de chair / Assemblage minéral / Ver d'acier / Humanoïde grotesque / Homme lézard </p><p><b>14</b> : 68 : <b>Chevalier des abysses</b> / Croc Blanc / Homme lézard </p><p><b>15</b> : 78 : <b>Ethana &amp; Ethoan</b> <b>(les amoureux)</b> / Amalgame de chair / bonus </p>",
        "images": [],
        "order": 2
      },
      {
        "title": "DROPS DES MONSTRES",
        "description": "",
        "images": [
          "/t4c-nms-overview/assets/quests/camping-academie-3/img_3_0.jpg"
        ],
        "order": 3
      },
      {
        "title": "Introduction",
        "description": "<p>Comme toujours dans mes participations au wiki, je prendrai le point de vue du newbe. </p><p>En effet, il faut vraiment être un débutant pour ne pas savoir ramasser un loot. Pourtant, lors des séances de camping auxquelles, j’ai participé, il est arrivé que des erreurs de ramassage gâchent l’ambiance du groupe. </p><p>Quoi de plus dommage et de plus triste que de voir un joueur, une joueuse, quitter le groupe par dépit, après avoir vu \"disparaitre \" un item qui lui était réservé. Se mettre à sa place, émotionnellement, est assez facile. </p><p>Evidemment, je ne sous-entends pas que certain(e)s volent délibérément les items au sol. Simplement, je pense que ce type d’erreur est vraiment dommageable pour notre petite communauté. Surtout, quand on sait que certains d’entre nous (des GB), font toujours de leur mieux pour que chacun, chacune, obtienne au moins, un item recherché. </p><p>Alors voici les outils et une méthode qui devrait vous aider à ne pas faire d’erreur. </p>",
        "images": [],
        "order": 4
      },
      {
        "title": "Les éléments de contrôle",
        "description": "<p>Il y a trois fonctions qui peuvent vous aider à ne pas vous tromper lorsque vous ramassez un loot. </p><ul><li>CTRL+N : Afficher les noms des items et des persos de la zone visible</li> <li>CTRL+K : Ramasser l’objet réservé proche. A noter que cette fonction n’est efficace que pendant le temps de réservation de l’item (2-mn)</li> <li>Clic bouton droit sur l’objet : Donne le nom de l’objet visé lorsque l’option \"affichage du détail des objets \" est décochée. Evidemment, la couleur jaune d’attribution est visible.</li></ul>",
        "images": [],
        "order": 5
      },
      {
        "title": "Utilisation des fonctions",
        "description": "<p>Lorsque le mob est mort, CTRL+N liste les items au sol. </p><p>Si un item est listé en jaune rapprochez-vous et faites CTRL+K </p><p>Si les 2mn sont passées, ce contrôle ne fonctionne plus. </p><p>Approchez-vous de l’item que vous voulez ramasser. Cliquez bouton droit de la souris, pour vérifier que vous ciblez le bon item. Si l'objet est en jaune, faites clic bouton gauche pour le ramasser. </p><p>Si vous avez ciblé le mauvais (il est en vert) vérifiez le voisin avec, de nouveau, Clic bouton droit de la souris. </p><p>ainsi de suite jusqu’à trouver votre item. </p><p>Lorsque vous l'avez trouvé, faites clic bouton gauche pour le ramasser. </p>",
        "images": [],
        "order": 6
      },
      {
        "title": "Exemple de situation",
        "description": "<p>Vous pourriez voir deux items identiques au sol, dont l’un vous est réservé, vous déplacer et en ramasser un, sans vérifier. Imaginez ce qui peut se passer dans la tête d’un autre joueur qui vérifiant les items au sol, se rend compte que son item jaune n’est plus là. Vous pouvez penser qu’il n’a qu’à ramasser l’item au sol, c’est vrai, mais voilà ce n’est pas le sien. Et lui, elle, ne veut pas prendre un item au sol qui ne lui est pas destiné, ne veut pas \"voler \" cet item. </p>",
        "images": [],
        "order": 7
      },
      {
        "title": "Conclusion",
        "description": "<p>Pardon pour cette conclusion, mais, s’il vous plait, ne foncez pas sur les loots. Ne passez pas bêtement pour un(e) voleur(se), juste parce que vous voulez absolument un item, et ne prenez pas le temps de vérifier que l’item que vous ramassez est bien le vôtre. </p><p>T4C est un jeu très prenant, c’est vrai, mais ce n’est qu’un jeu, ne l’oublions pas. Alors du calme, de la bienveillance et de la bonne humeur. Si l'objet convoité ne tombe pas pendant une séance, ce sera pour la prochaine... </p><p><br> </p><p><br> </p><p> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> </p>",
        "images": [],
        "order": 8
      }
    ],
    "credits": [
      "T4C NMS Révolution wiki"
    ]
  }
];