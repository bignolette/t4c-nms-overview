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
        "description": "<p><b>Repop</b> : 1 heure</p>\n<br/>\n<p><b>Coffre étoilé (au Nord dans le village) </b></p>\n<br/>\n<ul>\n  <li>Parcelle d'étoile</li> <li>Potion</li> <li>Potion de guérison des blessures graves</li> <li>Parchemin de <b>rappel</b></li> <li>Elixir de Mana</li>\n</ul>\n<br/>\n<p><b>Coffre Sud (au bord de l'ile sur la plage)</b></p>\n<br/>\n<ul>\n  <li>Potions</li> <li>Feuille</li> <li>Feuille d'excellente qualité</li> <li>Cailloux excellemment bien formés</li> <li>Empennage des Temps anciens</li>\n</ul>\n<br/>\n<p></p>",
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
        "description": "<ul>\n  \n  <li>\n<p>Le <b>repop</b> de ces coffres est de 4 heures pour deux persos différents, mais de 8 heures (comme oracle)pour le même perso...</p>\n</li>\n  <li>\n<p><b><big>Le Coffre Sud</big></b> (coffre des gardiens du coffre)</p>\n</li>\n  <li>\n<p>Il drop aléatoirement plusieurs items parmi:</p>\n</li>\n  <li>\n<p><b><big>Les deux Coffres des trolls érudits</big></b></p>\n</li>\n  <li>\n<p>Ils dropent aléatoirement plusieurs items parmi:</p>\n</li>\n  <li>\n<p><b><big>Le Coffre des Abysses</big></b> surtout soyez poli avec elle !!! ne jamais dire je m'en fous)</b></p>\n<p class=\"MsoNormal\">Réponse selon la question posée :</li>\n  <li>1<span style=\"mso-spacerun:yes\"> c</span>auchemard envoyers athé pieds suffire</li>\n  <li>2<span style=\"mso-spacerun:yes\"> a</span>utant voir remboursez tord payons</li>\n  <li>3<span style=\"mso-spacerun:yes\"> </span>prêt demie-heure maline sensée marrons</li>\n  <li>4<span style=\"mso-spacerun:yes\"> </span>soient repère aie laissés tué</li>\n  <li>5<span style=\"mso-spacerun:yes\"> </span>quand ou tribue s'en tout</p>\n</li>\n\n</ul>",
        "images": [],
        "order": 3
      },
      {
        "title": "Professeur Ensiklopèdy épreuve d'histoire (chronométrée)",
        "description": "<ul>\n  \n  <li>\n<p>Réponse selon la question posée:</li>\n  <li>1<span style=\"mso-spacerun:yes\"> </span>Quel est le nom du <b>lieu</b> actuel ou vivent les dragons?: Firesky</li>\n  <li>2<span style=\"mso-spacerun:yes\"> </span>Qui a tué le roy d'Orkanis ?: Mhorgwloth</li>\n  <li>3<span style=\"mso-spacerun:yes\"> </span>Nom du vieil ermite : theorn lemnearan</li>\n  <li>4<span style=\"mso-spacerun:yes\"> </span>Qui a banni Balork : artherk</li>\n  <li>5<span style=\"mso-spacerun:yes\"> </span>Nom du précédent roi de goldmoon : Théopold 1er</p>\n</li>\n\n</ul>",
        "images": [],
        "order": 4
      },
      {
        "title": "Madame FLichère épreuve des coffres (chronométrée). Repérez les coffres par avance !",
        "description": "<ul>\n  \n  <li><p class=\"MsoNormal\">Ou courir selon le <b>lieu</b> indiqué :</li>\n  <li>1 Coffre cité des nains, dans une maison (<b>2681-370-0</b>), après le labyrinthe d'Arakas</li>\n  <li>2 Coffre à Mato, aux druides Arakas (<b>2890-287-0</b>)</li>\n  <li>3 Coffre à Orkanis, dans la maison du troll, loin au NO d'Arakas</li>\n  <li>4 Coffre crypte du nomade (cave de la gitane), derrière un pilier en descendant l'escalier d'entrée de la crypte.</li>\n  <li>5 Coffre aux monts Righul (<b>1936-156-0</b>) (près de la mer au nord des montagnes Jarko)</p>\n</li>\n\n</ul>",
        "images": [],
        "order": 5
      },
      {
        "title": "Madame FLichère épreuve du rat (chronométrée)",
        "description": "<p>Allez tuer le rat affamé sous-sol -2 temple LH (<b>180-120-1</b>) <br/></p>",
        "images": [
          "/t4c-nms-overview/assets/quests/le-chapeau-de-chance/img_6_0.jpg"
        ],
        "order": 6
      },
      {
        "title": "Professeur Fetero (tour des mages), épreuve de magie (chronométrée)",
        "description": "<ul>\n  \n  <li>\n<p>Réponses selon la question posée :</li>\n  <li>1 Magie des orcs : <b>magie noire</b></li>\n  <li>2 Quel est le nom de la plus grande tour de magie d'Athéa ? : <b>Urtanar</b></li>\n  <li>3 Ressource pour la magie : <b>mana</b></li>\n  <li>4 Quel est le nom du traître emprisonné sur le plan de la magie ? : <b>makrsh p'tangh</b></li>\n  <li>5 Nom du maître de la tour des mages : <b>r'yleth cth</b></li>\n  <li></p>\n</li>\n\n</ul>",
        "images": [
          "/t4c-nms-overview/assets/quests/le-chapeau-de-chance/img_7_0.jpg"
        ],
        "order": 7
      },
      {
        "title": "LA RECOMPENSE FINALE",
        "description": "<p class=\"MsoNormal\">Il faut avoir entre 15 et 20 de moyenne pour obtenir le chapeau de diplômé (+25 chance)<span style=\"mso-spacerun:yes\"> </span>et une bourse de chance indroppable (+10 en chance permanent même après reroll mais pas après renaissance) ainsi qu’une bourse d’expérience indroppable (environ 7% du level en cours quand vous l'activez) <u>mais ne vous pouvez pas</u> en demander le transfert si vous êtes level max.</p>\n<p class=\"MsoNormal\">Vous pouvez aussi conserver ces bourses d'XP et, après plusieurs renaissances, les utiliser toutes quand vous serez proches du level max.</p>\n<p class=\"MsoNormal\">Entre 10 et 15 vous obtiendrez un masque de clown (+10 chance)<span style=\"mso-spacerun:yes\"> </span>et un bonus de chance (+10 permanents)<span style=\"mso-spacerun:yes\"> </span>ainsi qu’une bourse d’expérience.</p>\n<p class=\"MsoNormal\">Moins de 10 vous obtenez un masque de cancre (+5 chance) et, nous sommes trop gentils, +10 de chance permanents.</p>",
        "images": [
          "/t4c-nms-overview/assets/quests/le-chapeau-de-chance/img_8_0.jpg"
        ],
        "order": 8
      },
      {
        "title": "Bibliothécaire d'Althéa (Toge chance)",
        "description": "<p>Aller voir la cheffe bibliothécaire à la grande bibliothèque de RD.</p>\n<br/>\n<p>Cela va être une quête d'entraide pour les petits, à partir du lvl 50 demandez de l'aide aux GB pour 2 ou 3 items</p>\n<br/>\n<p>Suivez bien le dialogue la cheffe va vous proposer 4 étapes.</p>\n<br/>\n<p>Elle permettent de découvrir d'anciennes petites quêtes oubliées.</p>\n<br/>\n<p>1ere étape.</p>\n<br/>\n<ul>\n  <li>1 Parchemin magique vierge.</li> <li>1 Plume.</li> <li>1 Encrier.</li>\n</ul>\n<br/>\n<p>Pour l'encre allez voir Cloriande Bollour dans une maison à droite d'Araknor. Elle va vous demander 3 clefs du coffre surprise.</p>\n<br/>\n<p>2eme étape</p>\n<br/>\n<ul>\n  <li>1 Parchemin de <b>rappel</b> (un peu partout)</li> <li>1 Parchemin d'enchantement (qui ne sait pas quoi !!) (quête du parchemin d'enchantement)</li> <li>1 Parchemin du village centaure (drop sur les sentinelles centaures au village Centaure)</li> <li>1 Parchemin de purification de l'or (drop à DI aux Drakes Akaïstes; pour ceux pas encore rendus à DI demander aux GB)</li> <li>1 Parchemin de l'académie. (drop académie au -4 pour ceux pas accès demandez aux GB)</li> <li>1 Parchemin de l'amitié des chevaux (Quête parchemins d'amitié des chevaux SH)</li> <li>1 Document <b>secret</b> (Quête du Heaume perdu du dragon SH sur le Wiki)</li>\n</ul>\n<br/>\n<p>3eme étape</p>\n<br/>\n<ul>\n  <li>1 Livre de Feylor (coffre au village nains, apporter des clefs de fer ds votre sac)</li> <li>1 Livre de chance (un peu partout à DI)</li> <li>1 Livre des sorts rouges (qui sait pas ou :))</li> <li>1 Livre du collectionneur (avec quête des scalps ou drop sur les Assassins Obsidiens la grotte ds la montagne de Mordenthal)</li> <li>1 Livre de l'art de la guerre (achat au château SS de RD à Tobias au 1er étage 15k)</li>\n</ul>\n<br/>\n<p>4eme étape</p>\n<br/>\n<ul>\n  <li>1 Certificat de reconnaissance (suite de la quête du heaume perdu du dragon SH, suivez bien les détails sur le wiki) Temps de <b>repop</b> des coffres</li>\n</ul>\n<br/>\n<p>Félicitations ! vous êtes maintenant le scribe officiel et diplômé de l'Académie.</p>\n<br/>\n<p>Voici vos cadeaux.</p>\n<br/>\n<p>Toge du bibliothécaire. (+12 chance)</p>\n<br/>\n<p>Diplôme de scribe. (pour collection)</p>\n<br/>\n<p>Voila j'espère que vous avez apprécié. Cela vous a permis de découvrir de petits quêtes oubliées!!!</p>\n<br/>\n<p></p>",
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
        "description": "<ul>\n  \n  <li>\n<p>Prenez le portail menant à l'île du père Noël. Une fois sur l'île Bonhomme de neige allez vers le Sud.</p>\n</li>\n  <li>\n<p>En chemin vous croiserez une fille qui peut vous apprendre à faire des boules de neige (amusant mais pas obligatoire).</p>\n</li>\n  <li>\n<p>Parlez au père Noël, puis à Trulidius tout au Sud. Celui-ci vous demandera de récupérer les sacs à cadeau du père Noël sur des lutins. Faites ce qu'il vous demande et revenez le voir après chaque sac récupéré pour qu'il vous indique la tâche suivante.</p>\n</li>\n  <li>\n<p><b>Lutin Elwud</b>: Port de WH (faut le tuer le pôvre). apprendre\" à Flocon, il vous proposera un sort qui vous aidera bien pour la suite !</p>\n</li>\n  <li>\n<p>Allez parler à Youpi, au Nord de la fontaine de LH. Il vous demandera de tuer des bonhommes de neige jusqu'à posséder une dizaine de carottes. Une fois les carottes réunies, reparlez à Youpi.</p>\n</li>\n  <li>\n<p>Il vous enverra chez Marissa, au village métiers, apprendre la recette permettant de fabriquer des écharpes. Faites le. La recette est de niveau zéro couturier.</p>\n</li>\n  <li>\n<p>Il vous reste à réunir les gerbes de chanvre permettant de fabriquer dix écharpes (2 bobines de fil de chanvre pour une écharpe).</p>\n</li>\n  <li>\n<p>Quand ce sera fait, Youpi vous demandera de vous procurer 10 \"chapeaux festifs pour bonhommes de Noël\" chez Maganys de Tylrad. Son échoppe est située au début du chemin menant à la tour des mages de LH. Il vous en coûtera 1 point d'interaction par chapeau.</p>\n</li>\n  <li>\n<p>Retournez chez Youpi. Avec le matériel obtenu, il vous demandera de transformer dix tas de neige en bonhommes de neige.</p>\n</li>\n  <li>\n<p>Enfin retournez le voir une dernière fois, il vous récompensera d'un <b>chapeau festif.</b></p>\n</li>\n  <li>\n<p><b>Récompense</b> : <b>chapeau festif +10 chance :-(....</b></p>\n</li>\n\n</ul>",
        "images": [],
        "order": 1
      },
      {
        "title": "Quête 3 : (journalière)",
        "description": "<ul>\n  \n  <li>\n<p><b>Le renouvellement se fait vers 18 heures Québec et Minuit heure française. </b></p>\n</li>\n  <li>\n<p><u><b>Note</b> 1</u> : Attention, les monstres et <b>pnj</b> cités ici sont liés aux quêtes de Noël de <b>2018</b>. Les défis ne changent pas vraiment d'une année à l'autre, seules les <b>positions</b> montrent de petits changements.</p>\n</li>\n  <li>\n<p><u><b>Note</b> 2</u> : Attention, les divers items de Noël qui sont demandés sont indroppables. Si vous êtes là dans l'espoir d'aider les autres, faites droper et laissez les items à terre.</p>\n</li>\n  <li>\n<p>Allez parler à Flocon, au Nord de la fontaine de LH. Il vous demandera de l'aide. Vous devrez lui ramener des objets qui seront différents chaque jour. Et ceci jusqu'à Noël.</p>\n</li>\n  <li>\n<p>A la fin de cette période, ceux d'entre vous qui auront participé seront récompensés. Allez alors reparler à Flocon qui vous donnera divers petits items en fonction du nombre de quêtes que vous aurez résolues.</p>\n</li>\n  <li>\n<p>Ps: la quête du jour sera en couleur (en principe ;))</p>\n</li>\n\n</ul>",
        "images": [],
        "order": 2
      },
      {
        "title": "Quête du chant pour les 2 grelots",
        "description": "<p>Un jour, Flocon vous demandera de lui amener 2 grelots pour les reines du Père-Noël et pour ce faire, il vous demandera de suivre la musique. Le défi se passe sur LH, parlez à Rémi Façol qui se trouve au Nord-Est de la banque, ce dernier vous proposera de chanter en choeur. Suivez les mots clefs, il commencera les vocalises, il vous suffira de terminer la dernière phrase sans faute d'orthographe et sans déformer la chanson. Ces dernières arrivent aléatoirement, il vous faut répondre correctement à trois chansons, valable même si vous échouez après une ou deux gagnées.</p>\n<br/>\n<ul>\n  <li>S'il chante ('....Boule de neige et jour de l'an et') répondre : Bonne année grand-mère</li> <li>S'il chante ('Petit papa Noël, avec des jouets par milliers n'oublie pas') répondre : Mon petit soulier</li> <li>S'il chante ('Il est né le Divin enfant chantons tous') répondre : Son avènement</li> <li>S'il chante ('....Mais avant de partir, il faudra bien te couvrir, dehors tu vas') répondre : Avoir si froid</li> <li>S'il chante ('Mon beau sapin roi des forêts tu') répondre : Gardes ta parure</li> <li>S'il chante ('...Quand par l'hiver...bois et guérets...sont dépouillés de leur attraits... Mon beau sapin') répondre : Roi des forêts</li> <li>S'il chante ('...Dans les cieux ! L'astre luit ... Le mystère') répondre : Annoncé s'accomplit</li> <li>S'il chante ('... Au son des cloches des églises ta') répondre : Distribution de surprises</li> <li>S'il chante ('Vive le vent.....qui s'en va sifflant soufflant dans les') répondre : Grands sapins verts</li> <li>S'il chante ('Et les yeux levés vers le ciel, à genoux, les petits enfants, avant de fermer les paupières font') répondre : Une dernière prière</li>\n</ul>\n<br/>\n<p><b>Récompense</b> : 1 grelot pour 3 chansons réussies. <b>Attention</b> Flocon vous en demandera 2 avant de vous donner votre cadeau !</p>",
        "images": [],
        "order": 3
      },
      {
        "title": "Quête des habits de Lutin",
        "description": "<p>Un autre jour, Flocon vous demandera de faire confectionner un vêtement pour l'un des lutins du Père Noël, car ils sont actuellement en guenilles. Pour cela, achetez :</p>\n<br/>\n<ul>\n  <li>5 pommes à Fali, la vendeuse de LH</li>\n</ul>\n\n<ul>\n  <li>1 paire de bottes de cuir, à son collègue dans le même magasin.</li>\n</ul>\n\n<ul>\n  <li>Ensuite, chantez avec Rémi Façol (au Nord de la banque de LH) afin de gagner 1 grelot.</li> <li>Enfin, ramassez 2 pièces de coton rouge en tuant les(2024 pillards). Ils sont nombreux du côté des orcs solitaires de WH.</li> <li>Puis, rendez-vous au marchand d'armes +2, vers le Nord d'Arakas , et après le pont des démonicons vers l'ouest (<b>2160,515</b>).</li> <li>Engagez le dialogue avec Moradinne, l'assistante de la couturière, grâce au mot clef '<b>trava</b><b>il</b>'. Elle vous dira qu'elle est costumière passionnée et qu'elle adore Noël. Poursuivez la discussion et au mot clef '<b>tout</b>', elle prendra vos produits et vous donnera un vêtement pour lutin.</li>\n</ul>\n<br/>\n<p>Avec ce dernier, repartez pour la place de LH et reparlez à Flocon.</p>\n<br/>\n<p><b>Récompense</b> : 1 cadeau de Noël.</p>",
        "images": [],
        "order": 4
      },
      {
        "title": "Quête du ruban soyeux rouge",
        "description": "<ul>\n  \n  <li>\n<p>Flocon vous demandera de lui apporter non pas 'des' mais 1 ruban rouge pour nouer les cadeaux de Noël. Pour ce faire, descendez dans les profondeurs du sous-sol du temple de LH jusqu'au -2 et recherchez des araignées géantes. Petit <b>conseil</b> équipez-vous en chance, dans l'objectif de leur faire droper le plus rapidement possible 2 cocons de soie d'araignée.</p>\n</li>\n  <li>\n<p>Puis, munissez-vous d'une clef de coffre à surprise et allez parler à Cloriande de Bollour, située dans une maison au Nord-Est du temple (près de Rémi Façol). Pour aller au plus pressé, dites-lui '<b>clef</b>', elle vous échangera votre clef contre une fiole de colorant rouge.</p>\n</li>\n  <li>\n<p>Ensuite, direction le quartier des métiers de LH, dirigez-vous vers la maison des deux couturières (maison au Sud avec des quenouilles) et engagez le dialogue avec Bergénie. Pour abréger la conversation, dites '<b>ruban rouge</b>' et alors, contre les 2 cocons de soie d'araignée et le colorant rouge, elle vous remettra des rubans soyeux de couleur rouge.</p>\n</li>\n  <li>\n<p>Enfin, repassez voir Flocon le lutin pour les lui donner.</p>\n</li>\n  <li>\n<p><b>Récompense</b> : 1 cadeau de Noël.</p>\n</li>\n\n</ul>",
        "images": [],
        "order": 5
      },
      {
        "title": "Quête de la corde",
        "description": "<p>Flocon vous demande de faire une corde pour le Père Noël</p>\n<br/>\n<ul>\n  <li>Aller voir Pomme près de l'écurie à WH qui demande 3 crins de juments (indropables)</li> <li>Aller au Krakra et trouver les juments sauvages un peu partout sur l'ile des Krakra.</li> <li>Pos: <b>2134,641,0</b> et aussi <b>2212,670,0</b></li> <li>Pos: <b>2213,671,0</b> et aussi <b>1891,945,0</b></li> <li>Pos: <b>1934,817,0</b> et aussi <b>1746,823,0</b></li> <li>Pos: <b>1821,663,0</b> et aussi <b>2011,586,0</b></li> <li>Pos: <b>1850,844,0</b> et aussi <b>1919,660,0</b></li> <li>Pos:<b>2029,945,0</b> et aussi <b>1791,752,0</b></li> <li>Faire dropper 3 crins, rapporter le tout à Pomme pour lui faire faire la corde.</li> <li>Retourner voir Flocon.</li>\n</ul>\n<br/>\n<p><b>Récompense</b> : 1 cadeau de Noël.</p>",
        "images": [],
        "order": 6
      },
      {
        "title": "Quête du sapin majestueux",
        "description": "<p>En parlant à Flocon, vous serez téléporté sur une île où vous devrez couper des sapins (hache du bûcheron d'Arakas, RD, SH, DI, peu importe) jusqu’à obtenir un \"sapin majestueux \" . Je vous conseille fortement d'aller couper les sapins au Nord de l’île qui semblent en droper beaucoup plus vite (merci à Melandria pour l'astuce).</p>\n<br/>\n<p>Quelques <b>positions</b> : ces 5 là sont dans le même coin Nord gauche en contournant le rocher à gauche.</p>\n<br/>\n<ul>\n  <li>Pos: <b>2290,2780,0</b></li> <li>Pos: <b>2427,2892,0</b></li> <li>Pos: <b>2364,2893,0</b></li> <li>Pos: <b>2413,2700,0</b></li> <li>Pos :<b>2280,2720,0</b></li> <li>Regardez s'il tombe des feuilles c'est le bon.</li> <li>Et si vous trouvez d'autres <b>positions</b> dites-le moi.</li>\n</ul>\n<br/>\n<p><b>Récompense</b> : 1 cadeau de Noël.</p>",
        "images": [],
        "order": 7
      },
      {
        "title": "Quête du bois d'érable",
        "description": "<ul>\n  \n  <li>\n<p>Pour cette quête, vous devrez abattre, avec n'importe quelle hache de bûcheron, des érables, sur Arakas, jusqu'à obtenir 3 bûches d'érable. Les arbres droppent à chaque fois !!!</p>\n</li>\n  <li>\n<p>Voici quelques <b>positions</b> à vérifier :</p>\n</li>\n  <li><ol><li><b>2390,915,0</b></li> <li><b>2306,1024,0</b></li> <li><b>2396,1055,0</b></li> <li><b>2432,1170,0</b></li> <li><b>2399,1263,0</b></li> <li class=\"mw-empty-elt\"></li> <li>Si vous trouvez de nouvelles <b>positions</b> me le dire</li> <li class=\"mw-empty-elt\"></li></ol></li>\n  <li>\n<p><b>Récompense</b> : 1 cadeau de Noël.</p>\n</li>\n\n</ul>",
        "images": [],
        "order": 8
      },
      {
        "title": "Quête du sucre d'orge",
        "description": "<p>Flocon vous demandera de l'aide afin de récolter un sucre d'orge. Pour créer cet objet, il vous faudra 2 betteraves, ainsi que 2 sachets de grains d'orge.</p>\n<br/>\n<p>Au Troll d'Arakas les bettraves</p>\n<br/>\n<ul>\n  <li>Emplacements des plants de betterave. 20 min solo 10 min à 2 \n<ul>\n  <li><b>1484,246,0</b></li> <li><b>1565,140,0</b></li> <li><b>1604,270,0</b></li> <li><b>1628,203,0</b></li>\n</ul>\n</li>\n</ul>\n\n<ul>\n  <li><b>1484,246,0</b></li> <li><b>1565,140,0</b></li> <li><b>1604,270,0</b></li> <li><b>1628,203,0</b></li>\n</ul>\n<br/>\n<p>Au territoire Kraanian l'orge</p>\n<br/>\n<ul>\n  <li>Emplacements des plants d'orge. 20 min solo 10 min à 2 \n<ul>\n  <li><b>1976,715,0</b></li> <li><b>2019,632,0</b></li> <li><b>2094,640,0</b></li> <li><b>2114,750,0</b></li>\n</ul>\n</li>\n</ul>\n\n<ul>\n  <li><b>1976,715,0</b></li> <li><b>2019,632,0</b></li> <li><b>2094,640,0</b></li> <li><b>2114,750,0</b></li>\n</ul>\n<br/>\n<p>Le taux de drop doit être 20 à 25%.</p>\n<br/>\n<p>Une fois ces 4 objets obtenus, rendez-vous chez le vieil Ermite a la cave des brigands (voleurs). Parlez à Alfrid Bécher et dites lui \"orge\". Il transformera vos deux sachets de grains en une décoction d'orge perlée.</p>\n<br/>\n<p>Ensuite, allez à WH pour parler à Pomme Deschamps près de l'écurie de WH et dites-lui \"sucre\" afin qu'elle vous donne un sachet de sucre cristallisé en échange de vos deux betteraves.</p>\n<br/>\n<p>Localisez Florentin, le boulanger, dans une maison au Sud-Ouest de WH travail\".</li>\n</ul>\n<br/>\n<p><b>Récompense</b> : 1 cadeau de Noël.</p>",
        "images": [],
        "order": 15
      },
      {
        "title": "Quête : faire voler le traineau du père Noël",
        "description": "<ul>\n  <li>1 rune du vent aux Kobolds au Nord avant la montagne de Jarko.</li> <li>3 plumes</li> <li>1 parchemin magique vierge (acheter un parchemin vierge tour des mages de WH et le transformer chez Araknor).</li> <li>Aller à la tour des mages de LH pour faire enchanter le tout par Eronys.</li>\n</ul>\n<br/>\n<p><b>Récompense</b> : 1 cadeau de Noël.</p>",
        "images": [],
        "order": 16
      },
      {
        "title": "Quête : trouver les 6 Rennes",
        "description": "<p>Flocon vous envoie sur une île. <b>Positions</b> de l'an passé qui peuvent avoir changé cette année :</p>\n<br/>\n<ul>\n  <li>Pos: <b>2890,1370</b></li> <li>Pos: <b>2790,1200</b></li> <li>Pos: <b>2935,1090</b></li> <li>Pos: <b>2965,1185</b></li> <li>Pos: <b>2985,1360</b></li> <li>Pos: <b>2989,1130</b></li>\n</ul>\n<br/>\n<p>Retournez voir Flocon.</p>\n<br/>\n<p><b>Récompense</b> : 1 cadeau de Noël.</p>",
        "images": [],
        "order": 17
      },
      {
        "title": "Quête du Chapeau du père Noël",
        "description": "<ul>\n  <li>Trouvez la couturière Moradinne au marchand d'arme+2 de AR, vers le Nord d'Arakas , et après le pont des Démonicons vers l'Ouest (<b>2160,515</b>)..</li> <li>Dites \"pompon\" à Moradinne et courez trouver son fils Juju au Camp Orc (pos: <b>2770,575,0</b>) à qui vous direz également \"pompon\". <b>Attention</b> c'est chronométré !</li> <li>Trouvez 2 pièces de coton rouge sur (ajout 2024: les pillards) (par exemple sortie WH et vers les orcs solitaires au Nord de WH ou vers l'Est).</li> <li>Amenez le tout à Moradinne et dites lui \"chapeau\".</li> <li>Apportez le chapeau à Flocon, à la fontaine de LH.</li>\n</ul>\n<br/>\n<p><b>Récompense</b> : 1 cadeau de Noël.</p>",
        "images": [],
        "order": 18
      },
      {
        "title": "Quête des lettres perdues au père Noël",
        "description": "<p>Quête assez longue :)</p>\n<br/>\n<ul>\n  <li>Très <b>important</b> : n'oubliez pas de parler à Flocon en 1er sinon Noémie ne voudra pas vous donner le sac à moitié plein</li> <li>Allez voir Noémie chez Antonian RST de AR.</li> <li>Ensuite prenez 5 parchemins vierges (\"acheter\" à R'yleth Cth à la tour des mages de WH), entre 1 à 5 plumes et de l'encre. A faire entre 1 à 5 fois à droite d'Araknor chez Cloriande de Bellour avec des clefs à surprise (mot clef: encre).</li> <li>PS: Parfois l'encre se renverse et la plume se brise, donc dépendamment de votre chance irl pour l'encre et la plume.</li> <li>Ensuite récupérez 5 lettres. Mot clef \"lettre\" pour tous.</li> <li>Cannelle maison du culte (Nord LH une maison à droite d'Araknor) chez Luderik à l'étage.</li> <li>Pimprenelle à Wh. pos:<b>1665,1260</b></li> <li>Arthur aux druides maison d'Audrey pour les robes. pos: <b>2930,150</b></li> <li>Mini Gorben gob vert aux Monts Rigul, pos: <b>2012,431</b></li> <li>Juju il est à droite au camp orc , pos: <b>2765,570,0</b></li> <li>Quand vous avez les 5 lettres aller voir Noémie elle vous dira qu'elle en a la moitié.</li> <li>Go vers Zélina au temple LH et lui dire Ness Croc. Elle vous donnera une dague à remettre à Ness Croc.</li> <li>Go à la ville des voleurs voir Ness Croc qui donnera un sac de lettres.</li> <li>Et go voir Flocon.</li>\n</ul>\n<br/>\n<p><b>Récompense</b> : 1 cadeau de Noël.</p>",
        "images": [],
        "order": 19
      },
      {
        "title": "Quête du costume du Père Noël",
        "description": "<ul>\n  <li>Parlez à Flocon puis il vous faudra :</li> <li>3 pièces de coton rouge dropées par (2024 sur les pillards et le gros ceinturon aussi). Vous en trouverez beaucoup sortie de WH, vers les orcs solitaires ou vers l'Est.</li> <li>1 paire de bottes de cuir à acheter au marchand Rolph de LH (à côté de Fali).</li> <li>Cet année on peu avoir le gros ceinturon sur les pillard à WH (c'est bon).</li> <li><s><u>((pas besoin cet année <b>IMPORTANT</b>:</u> avant d'aller au Troll du -4 il faut avoir parlé à Flocon.</s></li> <li><s>1 gros ceinturon de cuir et <b>150,000</b> po. Allez sous sol -4 de LH et trouvez un troll La Fripouille ds une petite salle près de Balork, pos: <b>246,527</b>. Il faut le défier pour qu'il attaque sinon il drope pas le ceinturon: mot clef \"ceinturon\" et \"défier\" et là il attaque. Tuez-le et vous recevrez direct le ceinturon dans le sac (<b>repop</b> <b>15-20</b> mn)))</s></li> <li>Ensuite emmenez le tout à Moradinne au marchand d'armes +2 Arakas (à l'Ouest après le pont des Démonicons).</li> <li>Et go voir Flocon.</li>\n</ul>\n<br/>\n<p><b>Récompense</b> : 1 cadeau de Noël.</p>",
        "images": [],
        "order": 20
      },
      {
        "title": "Quête : faire un sac solide et renforcé  du Père Noël",
        "description": "<p><b>Items nécessaires</b> :</p>\n<br/>\n<ul>\n  <li>2 peaux d'antilope</li> <li>1 morceau de peau d'orc</li> <li>1 crin de jument (elles sont sous le lac situé au centre du territoire kraanians)</li> <li>1 bracelet gobelin (y en a 2 c'est celui qui est indropable, à trouver sur les shamans gobelin au Nord de la RST AR).</li>\n</ul>\n<br/>\n<p>Ce qu'il vous faudra faire</p>\n<br/>\n<ul>\n  <li>Allez voir Bergénie au quartier métier LH et dites-lui \"sac\".</li> <li>NE TUEZ PAS L'ORC SVP !!!</li> <li>Muni de vos peaux et de votre bracelet gobelin, allez dire \"sac\" à Grumphyrog au village nain (après le laby AR) pour faire le sac en toile (pos : <b>2720,380</b>)</li> <li>Allez apporter le sac à Flocon. Il vous demandera un sac plus solide.</li> <li>Retournez voir Bergénie et dites-lui \"sac\". Elle vous enverra à WH.</li> <li>Dites \"fil\" à Pomme (proche de l'écurie) qui, en utilisant un crin de jument, vous fera un fil à tisser.</li> <li>Retourner voir Bergénie et lui dire \"sac\", elle vous fera un sac finement tissé.</li> <li>Aller porter le sac à Flocon.</li>\n</ul>\n<br/>\n<p><b>Récompense</b> : 1 cadeau de Noël.</p>",
        "images": [],
        "order": 21
      },
      {
        "title": "Quête : réenchanter le sac du Père Noël",
        "description": "<ul>\n  <li>Parler à Flocon \n<ul>\n  <li>Aller voir le mage Eronys à la tour des mage LH et lui dire <u>\"sac enchanté\"</u>. il va demander une rune de terre pour pouvoir enchanter le sac.</li>\n</ul>\n</li> <li>Aller tuer l'orc Grumphyrog (pos: 2720.375) au village nain (après le laby), lui dire <u>sac</u> avant de le tuer une fois, il drope 1 rune (ne sert à rien le tuer 2 fois, il en drope juste une) (<b>repop</b> 10 mn)</li> <li>Retourner voir le mage Eronys et lui dire <u>\"sac enchanté\"</u>. Hélas il va rater et il va vous demander une 2ème rune, retourner tuer l'orc.</li> <li>Retourner voir le mage avec la 2ème rune et il va réussir à enchanter votre sac.</li> <li>Aller porter à Flocon (<u>après avoir revu Eronys</u> sinon c'est cuit !!).</li>\n</ul>\n\n<ul>\n  <li>Aller voir le mage Eronys à la tour des mage LH et lui dire <u>\"sac enchanté\"</u>. il va demander une rune de terre pour pouvoir enchanter le sac.</li>\n</ul>\n<br/>\n<p>N.B. <b>IMPORTANT</b> : Si votre personnage n'a pas encore accès à Raven's Dust (et même Stoneheim), l'enchantement marchera du premier coup.</p>\n<br/>\n<p><b>Récompense</b> : 1 cadeau de Noël.</p>",
        "images": [],
        "order": 22
      },
      {
        "title": "Quête du sablier enchanté",
        "description": "<ul>\n  <li>1 sachet de sable blanc au Mont Righul sur la plage du haut 3 places (skin cactus) et 2 sur la plage du troll. \n<ul>\n  <li>Pos: <b>1680,240</b> = <b>1712,145</b> = <b>1985,120</b> plage monts Righul.</li> <li>Pos: <b>1590,102</b> plage du troll nord est <b>1440,259</b> plage du troll sud ouest.</li>\n</ul>\n</li> <li>1 bois d'érable sur les érables en bas de la rst d'Arakas.</li> <li>1 Pièce de verre à la cave Krakra aux minerais de verre pos <b>484,1297</b>. 3 gisements.</li> <li>Dans la cave Krakra se trouve aussi le <b>pnj</b> pour le sablier Dworkin <b>140,1316</b>. Lui dire sablier (il faut tous les items).</li> <li>Ensuite munissez-vous d'un parchemin magique vierge et go à la tour des mages LH voir Eronys pour l'enchanter. Mot clef: sablier</li> <li>Retour Flocon</li>\n</ul>\n\n<ul>\n  <li>Pos: <b>1680,240</b> = <b>1712,145</b> = <b>1985,120</b> plage monts Righul.</li> <li>Pos: <b>1590,102</b> plage du troll nord est <b>1440,259</b> plage du troll sud ouest.</li>\n</ul>\n<br/>\n<p><b>Récompense</b> : 1 cadeau de Noël.</p>",
        "images": [],
        "order": 23
      },
      {
        "title": "Quête de la pelle à neige",
        "description": "<ul>\n  <li>Parlez à Flocon 2 fois la 2eme fois pelle a neige.</li> <li>Ensuite allez acheter la pelle à neige près de Lance Silversmith chez Tonar Mastard.</li> <li>Ensuite mettez vous en ctrl+c et allez pelleter 10 tas de <u><b>neige glissante</b></u> à LH sur les trottoirs et retournez voir Flocon.</li> <li>Vous pouvez aller voir Cloriande à la fin, à droite de Araknor ds une maison, celle qui faisait l'encre. Elle vous donne une tasse de vin chaud (pas obligatoire).</li>\n</ul>\n<br/>\n<p><b>Récompense</b> : 1 cadeau de Noël.</p>",
        "images": [],
        "order": 24
      },
      {
        "title": "Quête : préparer le repas",
        "description": "<ul>\n  <li>Parlez à Flocon</li> <li>Aller voir Léonidor à LH (travail...), dans une maison à droite d'Araknor <b>3025,1090</b></li> <li>Pommes de terre chez Hector sous la taverne de LH, acheter 2 sacs de pommes de terre.</li> <li>1 Sac de marrons au Druides d'Arakas sur les Marronniers. les spots : \n<ul>\n  <li><b>2780,231</b></li> <li><b>2762,128</b></li> <li><b>2715,187</b></li> <li><b>2803,288</b></li> <li>2828.124</li> <li><b>2870,280</b></li> <li><b>2900,164</b></li> <li><b>2988,207</b></li>\n</ul>\n</li> <li>Enfin 1 dinde à WH dans le foin parler à Albertin pos: <b>1750,1340</b>. Lui dire \"dinde\" pour entrer dans le champ et tuer les dindes. Ca drop après quelques unes de tuées. Si la dinde est dehors, dire \"sortir\".</li> <li class=\"mw-empty-elt\"></li> <li>Retourner chez Léonidor et lui dire \"préparer\" 2 fois pour recevoir le panier du repas des fêtes.</li> <li>Enfin retour chez Flocon</li>\n</ul>\n\n<ul>\n  <li><b>2780,231</b></li> <li><b>2762,128</b></li> <li><b>2715,187</b></li> <li><b>2803,288</b></li> <li>2828.124</li> <li><b>2870,280</b></li> <li><b>2900,164</b></li> <li><b>2988,207</b></li>\n</ul>\n<br/>\n<p><b>Récompense</b> : 1 cadeau de Noël.</p>\n<br/>\n<p>Ps: la quête dure 2 jours.</p>\n<br/>\n<p>Joyeuses Fêtes !!!</p>",
        "images": [],
        "order": 25
      },
      {
        "title": "Quête du livre de recettes (Hospice)",
        "description": "<p>Premièrement parler à Flocons (2x aide et livre de recettes)</p>\n<br/>\n<p>Aller à WH acheter du chocolat à Florentin . <b>1690, 1340</b></p>\n<br/>\n<p>Aller voir Alphonse à LH la maison en haut du marchand Sigfried. <b>2900, 980</b></p>\n<br/>\n<p>Il s'agit maintenant de débloquer progressivement chaque <b>PNJ</b> dans l'ordre</p>\n<br/>\n<p><b>Note</b>: dire tous les mots clefs (en blanc) sans exception au <b>pnj</b> (écoutez ses deux histoires). Si un <b>PNJ</b> vous laisse tomber reprenez par le mot suivant...</p>\n<br/>\n<ul>\n  <li>1er Isidore : travail, dire <u><b>ou</b>i</u> (oubliez pas de dire \"oui\" à histoires) et <u>tous</u> les mots en blanc, même dans le désordre et ensuite : \n<ul>\n  <li>Puis : Isidore, Arlette, Theolette, Gamin, Ulgere, Eugenie, friandise, chocolat, livre de recettes</li>\n</ul>\n</li>\n</ul>\n\n<ul>\n  <li>Puis : Isidore, Arlette, Theolette, Gamin, Ulgere, Eugenie, friandise, chocolat, livre de recettes</li>\n</ul>\n\n<ul>\n  <li>2 ème Donatien : travail et <u>tous</u> les mots en blanc \n<ul>\n  <li>Puis : Isidore, Arlette, Theolette, Gamin, souris, Ulgere, friandise, chocolat, Eugenie, livre de recettes.</li>\n</ul>\n</li>\n</ul>\n\n<ul>\n  <li>Puis : Isidore, Arlette, Theolette, Gamin, souris, Ulgere, friandise, chocolat, Eugenie, livre de recettes.</li>\n</ul>\n\n<ul>\n  <li>3 ème Theolette : travail et <u>tous</u> les mots en blanc \n<ul>\n  <li>Puis : Arlette, Donatien, Gamin, souris, hurlant, Ulgere, Eugenie, friandise, chocolat, livre de recettes.</li>\n</ul>\n</li>\n</ul>\n\n<ul>\n  <li>Puis : Arlette, Donatien, Gamin, souris, hurlant, Ulgere, Eugenie, friandise, chocolat, livre de recettes.</li>\n</ul>\n\n<ul>\n  <li>4 ème Arlette : travail et <u>tous</u> les mots en blanc \n<ul>\n  <li>Puis : Theolette, Donatien, Gamin, souris, Delilah, Ulgere, Eugenie, friandise, chocolat, livre de recettes.</li>\n</ul>\n</li>\n</ul>\n\n<ul>\n  <li>Puis : Theolette, Donatien, Gamin, souris, Delilah, Ulgere, Eugenie, friandise, chocolat, livre de recettes.</li>\n</ul>\n\n<ul>\n  <li>5 ème Ulgere : travail et <u>tous</u> les mots clefs \n<ul>\n  <li>Puis : Chef, Eugenie, chasseur,Leonidor, livre de recettes (il doit vous parle d'Eugenie)</li>\n</ul>\n</li>\n</ul>\n\n<ul>\n  <li>Puis : Chef, Eugenie, chasseur,Leonidor, livre de recettes (il doit vous parle d'Eugenie)</li>\n</ul>\n\n<ul>\n  <li>6 ème Eugenie: travail et <u>tous</u> les mots clefs, chocolat, Ulgere, livre de recettes et Leonidor. Assurez-vous qu'elle vous dit qu'il a été banni. \n<ul>\n  <li>Puis : tous les mots clefs pour ne pas aller pour rien à la cave des voleurs.</li>\n</ul>\n</li>\n</ul>\n\n<ul>\n  <li>Puis : tous les mots clefs pour ne pas aller pour rien à la cave des voleurs.</li>\n</ul>\n\n<ul>\n  <li>7 ème Leonidor : En passant par la cave des brigands, go à la cave des voleurs (au milieu de la ville des voleurs) prenez l'escalier, allez au sous-sol et trouvez-le et dites-lui \"livre de recettes\" (insister, faut lui parler au moins 3 fois) et il devrait enfin vous donner le livre de recettes et voilà. Allez le porter à Flocon qui sera tout content.</li>\n</ul>\n<br/>\n<p>Bonne chance!!!</p>\n<br/>\n<p><b>Récompense</b>: 1 cadeau de Noël.</p>\n<br/>\n<p></p>",
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
        "description": "<ul>\n  \n  <li>\n<p>Afin de fêter Pâques, nous avons préparé une quête temporaire rien que pour vous !</p>\n</li>\n  <li>\n<p>Visitez quelques ville d'Arakas et ouvrez l'oeil ! De nombreux Olphens se promènent çà et là. tuez-en au maximum. Ils dropent oeufs de Jezikos, parchemins olphéniques et enfin Oeufs surprises... ouiii. De plus chaque Olphen tué rapporte 1500 po ... (intéressant si vous avez dépensé tout votre or).</p>\n</li>\n  <li>\n<p>Courage, tout le monde peut participer, Melgur (près du nexus sud d'Arakas) propose aux plus petits d'apprendre un sort permettant de tuer facilement les Olphens.</p>\n</li>\n\n</ul>",
        "images": [],
        "order": 0
      },
      {
        "title": "Oeuf de Jezikos",
        "description": "<ul>\n  \n  <li>\n<p>En échange de 10<b> oeufs de Jezikos</b>, Melgur (près du nexus à la pointe sud d'Arakas) vous donnera une coiffe d'Olphen.</p>\n</li>\n  <li>\n<p>La coiffe donne <b>+30 en chance (maj du 4/4/18)</b> durant l'évènement et +5 après ... <b>important</b> la chance !!</p>\n</li>\n  <li>\n<p>Une bonne surprise : si vous désirez une coiffe colorée, réunissez 20 coiffes normales et allez voir Phildor, dans la partie ouest des quartiers résidentiels au Sud d'Arakas. Il vous les échangera contre une coiffe colorée.</p>\n</li>\n\n</ul>",
        "images": [],
        "order": 1
      },
      {
        "title": "Parchemins olphéniques",
        "description": "<p>En échange de <b>parchemins olphéniques</b>, Elanthe (temple de LH) vous donnera un objet aléatoire selon le nombre de parchemins que vous lui rapporterez. Les parchemins olphéniques sont dropables ... vous pouvez les regrouper.</p>\n<br/>\n<p>A petit level, allez voir Melgur (près de la pointe sud d'Arakas- ok c'est loin - désolé) qui vous apprendra un sort pour tuer facilement les Olphens. Ca vous coûtera un point de compétences et 583 pièces d'or.</p>",
        "images": [],
        "order": 2
      },
      {
        "title": "Oeuf surprise",
        "description": "<p>Les Olphens dropent aussi, mais très rarement, un <b>oeuf surprise</b> !</p>\n<br/>\n<p>Un oeuf surprise contient 3 objets au hasard parmi 3 catégories différentes: Commun, peu commun et rare, soit plus d'une centaine d'objets différents au total :</p>\n<br/>\n<ul>\n  <li>Commun : essentiellement des objets banals comme des objets de quêtes d'accès, des consommables de bas niveau et des objets liés à l'événement de Pâques.</li> <li>Peu commun : des ingrédients de métiers et consommables de haut niveau ainsi que des oreilles d'Olphen colorées.</li> <li>Rare : des ingrédients rares, des parchemins d'expérience, des objets de chance et des bons d'échanges contre des reroll, compagnon et renaissance.</li>\n</ul>",
        "images": [],
        "order": 3
      },
      {
        "title": "Les récompenses pour les parchemins",
        "description": "<ul>\n  \n  <li>\n<p><b><u>20 parchemins</u></b></p>\n</li>\n  <li>\n<p>Trèfle à quatre feuilles x2, Potion de guérison divine, Fleur de coton, Pierre de lune finement taillée, Clef métallique couverte de rosée, Épée de fureur (rare).</p>\n</li>\n  <li>\n<p><b><u>75 parchemins</u></b></p>\n</li>\n  <li>\n<p><b></b></p>\n</li>\n  <li>\n<p>Ornement prestigieux, Cocon de soie, Anneau de cerfeuil, Feuille de Consoude, Feuille de Boldo, Fleur de Colchique, Cerise d’Acérola, Amulette de chance.</p>\n</li>\n  <li>\n<p><b><u>150 parchemins</u></b></p>\n</li>\n  <li>\n<p> Fragment de météorite, Glande séricigène x5, Liens éthérés, Morceau en ivoire d’Agamaoth, Plastron étincelant, Jambières étincelantes, Inscription secrète de Gorodek, Esprit naturel, Énergie infernale.</p>\n</li>\n  <li>\n<p><b><u>300 parchemins</u></b></p>\n</li>\n  <li>\n<p> Anneau du couturier, apothicaire, ébéniste, bijoutier, armurier, forgeron</p>\n</li>\n  <li>\n<p>Bouclier porte-bonheur, Bracelet des gens heureux, Amulette de fortune, Gants de noblesse, Ceinture de noblesse, Bague en argent ornée de trèfles.</p>\n</li>\n  <li>\n<p>Fluide de démolécularisation supérieure, Livre des sorts de l’apprenti, Relique des temps anciens.</p>\n</li>\n  <li>\n<p><b><u>800 parchemins</u></b></p>\n</li>\n  <li>\n<p>Fluide de démolécularisation supérieure. (Nouveau)</p>\n</li>\n  <li>\n<p><b><u>900 parchemins</u></b></p>\n</li>\n  <li>\n<p>Livre des sorts de l'apprenti. (Nouveau)</p>\n</li>\n  <li>\n<p><b><u>1000 parchemins</u></b></p>\n</li>\n  <li>\n<p>Bague en argent ornée de trèfles. (Nouveau)</p>\n</li>\n  <li>\n<p><b><u>1500 parchemins</u></b></p>\n</li>\n  <li>\n<p>Aléatoirement une relique d'un des académiciens ou une relique d'un autre temps.</p>\n</li>\n  <li>\n<p>Ou un BON de RESKIN (d'un item en votre possession vers un item analogue)</p>\n</li>\n  <li>\n<p><b>Un <b>conseil</b> : équipez vous en items chance.</b></p>\n</li>\n  <li>\n<p></li>\n  <li></p>\n</li>\n\n</ul>",
        "images": [],
        "order": 4
      },
      {
        "title": "La quête du billet de tombola (suspendue)",
        "description": "<ul>\n  \n  <li>\n<p>Allez trouver Candice à la fontaine de LH et parlez-lui (<span class=\"npc-keyword\"><span class=\"npc-keyword\">travail</span></span>). Elle vous demandera de réunir des friandises destinées à une fête pour les enfants : des fèves de cacao, du lait, des fruits et un ruban.</p>\n</li>\n  <li>\n<p>Quand vous aurez réuni ces objets, reparlez à Candice qui vous donnera un billet de tombola.</p>\n</li>\n  <li>\n<p>Ou trouver les friandises ?</p>\n</li>\n  <li>\n<p>-Fèves de cacao :</p>\n</li>\n  <li>\n<p>-Lait :</p>\n</li>\n  <li>\n<p>-Fruits :</p>\n</li>\n  <li>\n<p>-Ruban :</p>\n</li>\n  <li>\n<p></p>\n</li>\n\n</ul>",
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
        "description": "<ul>\n  \n  <li>\n<p><b>Le donjon du Gobelet</b> est destiné aux joueurs de levels 1 à 30. La durée de réservation avant relance est de 1H30.</p>\n</li>\n  <li>\n<p>Ce donjon se fait de préférence en groupe, quoiqu'il soit facilement faisable seul avec un équipement décent, un niveau raisonnable (environ <b>18-20</b>) et une bénédiction (pensez à celle de Zélina au temple si vous ne trouvez pas de GB. Elle fait 400PV, dure <b>40 minutes</b> et de plus elle est <b>cumulable avec une béné normale</b>). Pour pénétrer dans le donjon, il suffit qu'un des membres du groupe ait fait la quête d'accès. Le donjon vous sera alors réservé durant 1H30 IRL même si vous le quittez avant ou si vous vous déconnectez. Enfin si vous le quittez en cours, vous pouvez y retourner si vous êtes dans les temps.</p>\n</li>\n  <li>\n<p>Il vous permet d'xp - mais tout juste correctement -, d'obtenir parfois une épée de fureur (il y a plusieurs généraux gobelins), et surtout d'obtenir avec un peu de chance un drop à la sortie en tuant <b>Le Gobelet </b>et parfois aussi un beau drop en vidant le coffre).</p>\n</li>\n  <li>\n<p>Attention, quand vous voudrez refaire le donjon, après 1H30 minimum, il faudra refaire la quête d'accès!</p>\n</li>\n\n</ul>",
        "images": [
          "/t4c-nms-overview/assets/quests/donjon-1-30/img_0_0.jpg"
        ],
        "order": 0
      },
      {
        "title": "La quête d'accès",
        "description": "<p>Vous devez obtenir une fiole d'essence de gobelin. Pour cela procurez-vous</p>\n<br/>\n<ul>\n  <li><b>1 Oeil de gobelin </b>(assez rare) dropé par beaucoup de gobelins, même NMS (mais pas les gobelins simples, ni éclaireurs, ni corrompus...)</li> <li>(Un bon spot est le <b>deuxième camp gobelin</b> juste après le pont menant aux montagnes Jarko)</li> <li><b>2 Cornes de gobelin </b> (assez fréquentes) dropées par la plupart des gobelins (mais pas les bombermans, farfelus ....).</li> <li>Le <b>Camp gobelin</b> est intéressant pour farmer ces ressources, le deuxième camp (à l'entrée des montagnes de Jarko) et peut-être encore mieux.</li>\n</ul>\n<br/>\n<p>Rapportez ces items au <b>PNJ</b> <b>Nilhem </b>qui se trouve au Nord du pont gobelin dans une maison <b>(A</b> sur le plan plus bas<b>)</b> et dites lui \"<b>Service\".</b> il vous remettra la fiole vous permettant de pénétrer dans l'antre du Gobelet. Tous les membres du groupe à proximité du portail sont téléportés à l'intérieur. Se faire bénir au <b>préalable</b> est un plus à petit niveau.</p>\n<br/>\n<p><b><u><b>ATTENTION</b></u></b> : Nilhem vous prend tous vos yeux et cornes donc posez au sol les items en surplus !!</p>\n<br/>\n<p><b>Tip</b> : <b>Nilhem</b> peut aussi vous donner un buff de protection via la quête L'âme de Nilhem .</p>",
        "images": [],
        "order": 1
      },
      {
        "title": "Le plan d'accès",
        "description": "<p><b>A : Nilhem.</b> <b>B : Portail.</b></p>",
        "images": [
          "/t4c-nms-overview/assets/quests/donjon-1-30/img_2_0.jpg"
        ],
        "order": 2
      },
      {
        "title": "Le donjon",
        "description": "<ul>\n  \n  <li>\n<p>Le portail d'entrée se trouve au Nord Ouest de Nilhem près d'une montagne <b>(B)</b>. Groupez avec vos amis et approchez vous du portail avant que le possesseur de la fiole ne clique sur le portail pour entrer.</p>\n</li>\n  <li>\n<p>Il est possible de rester à l'intérieur du donjon durant 1 heure 30 minutes IRL après quoi vous serez renvoyés à votre sanctuaire. Vous pouvez quitter à tout moment par le portail de sortie et revenir tant que votre temps n'est pas écoulé (en durée IRL) et que vous n'avez pas terminé le donjon, mais ne reparlez plus au PNJ.</p>\n</li>\n  <li>\n<p>Quand vous aurez tué environ une cinquantaine de gobelins chacun (ou peu avant la fin de votre session d'1H30),</p>\n</li>\n  <li>\n<p>Allez - tous ensemble car le boss n'apparaîtra pas deux fois - prendre le portail du nord qui mène à <b>Gobelet</b>, le boss.</p>\n</li>\n  <li>\n<p>Tuez-le en groupe, il va peut-être droper épée de fureur, émail nacré de gobelin jaune etc... Videz ensuite le coffre. Avec un peu de chance vous aurez un drop intéressant (parfois une très jolie robe ou un anneau ou même une arme rare).</p>\n</li>\n  <li>\n<p>Objets du coffre :</p>\n</li>\n  <li>\n<p>- Robe du Zéphyr rapiécée (robe air)</p>\n</li>\n  <li>\n<p>- Robe scintillante rapiécée (robe lumière)</p>\n</li>\n  <li>\n<p>- Robe flamboyante rapiécée (robe feu)</p>\n</li>\n  <li>\n<p>- Robe tellurique rapiécée (robe terre)</p>\n</li>\n  <li>\n<p>- Robe de la rose rapiécée (robe eau)</p>\n</li>\n  <li>\n<p>- Robe des abîmes rapiécée (robe nécro)</p>\n</li>\n  <li>\n<p>- Armure en cuir rapiécée (guerrier/archer)</p>\n</li>\n  <li>\n<p>- Anneau de l'apprenti armurier, bijoutier .. (pour améliorer les chances de réussite de vos futurs crafts de +2%)</p>\n</li>\n  <li>\n<p>- <b>Hachette du rétamé</b></p>\n</li>\n  <li>\n<p>- rien... :(</p>\n</li>\n  <li>\n<p>-encore rien ......</p>\n</li>\n  <li>\n<p>N.B 1 : Pour optimiser votre xp, concentrez vous sur les gobelins shamans en vous efforçant de les faire respawn rapidement.</p>\n</li>\n  <li>\n<p>N.B 2 : Concentrez-vous sur les généraux et les shamans pour l'épée de fureur (rare).</p>\n</li>\n\n</ul>",
        "images": [],
        "order": 3
      }
    ],
    "credits": [
      "T4C NMS Révolution wiki"
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
        "description": "<ul>\n  \n  <li>\n<p>Vous devez être de level 25 à 50 (inclus) pour pouvoir entrer dans ce donjon.</p>\n</li>\n  <li>\n<p>Pour réaliser cette activité vous devez donner une petite carte au trésor et une bouteille de rhum <b>ou</b> une petite carte au trésor et 1 million de pièces d'or au <b>pnj</b> qui en contrôle l'accès.</p>\n</li>\n  <li>\n<p><b>Note</b> : Toutes les étapes nécessaires à l'obtention de l'accès, détaillées plus loin, peuvent être regroupées. Ainsi, vous pouvez préparer plusieurs cannes à pêche d'avance, les échanger contre autant de bouteilles contenant un parchemin que possible et bien sûr avoir plusieurs bouteilles de rhum dans votre sac. Il n'y a aucun problème lié au fait d'avoir plusieurs de ces items dans votre sac lorsque vous lancez l'activité auprès du PNJ. Ils sont d'ailleurs tous échangeables. Vous pouvez donc préparer plusieurs accès d'avance et les stocker dans votre coffre.</p>\n</li>\n\n</ul>",
        "images": [],
        "order": 0
      },
      {
        "title": "Création de la canne à pêche",
        "description": "<ul>\n  \n  <li>\n<p>- Rendez-vous auprès de <b>Gildric Moray pierre verte de l'esprit de la foret\")</p>\n</li>\n  <li>\n<p>-50 feuilles d'arbre démoniaque (dropées par les arbres démoniaques de RD) ou une décoction démoniaque.</p>\n</li>\n  <li>\n<p>-Un éclat d'âme d'arbre Sintelle (dropé par les arbres Sintelle de DO bien sûr).</p>\n</li>\n  <li>\n<p>Dans le donjon, vous pourrez obtenir des \"feuilles d'Ent\" qui vous procureront de l'xp à l'aide d'une petite quête : la quête du remède de Sigvurd.</p>\n</li>\n\n</ul>",
        "images": [
          "/t4c-nms-overview/assets/quests/le-donjon-de-leternelle-agonie/img_0_0.jpg"
        ],
        "order": 0
      },
      {
        "title": "La décoction démoniaque",
        "description": "<p>Allez voir Solange, avec 50 feuilles d'arbre démoniaque dans votre inventaire, dans une maison aux druides RD. Vous pourrez échanger vos 50 feuilles versus une \"décoction démoniaque \" en disant ''décoction'' à Solange. La décoction démoniaque vous sera utile pour votre prochain accès au marécage. Vous libérerez ainsi de la place dans votre inventaire.</p>",
        "images": [],
        "order": 1
      },
      {
        "title": "Le remède de Sigvurd",
        "description": "<p>Quand vous récupérerez une feuille d'Ent (elles sont rares), apportez-la à Solange que vous trouverez aux druides de RD dans la même maison que Celestina.</p>\n<br/>\n<p>Dites-lui ''travail'' ''passionnée'' ''médecine'', ''potion'', ''source'', et elle vous remettra une petite fiole de contrepoison que vous devrez donner à Sigvurd en cliquant simplement dessus pour le guérir. Il vous remerciera par un bonus d’xp (dépendant de votre niveau - environ 22M au level 157).</p>",
        "images": [],
        "order": 2
      },
      {
        "title": "La quête d'accès au donjon",
        "description": "<ul>\n  \n  <li>\n<p>Allez voir Sigvurd, dans la maison du forgeron au Nord de la ville de Redwall et parlez-lui. Il vous enjoint de trouver un arbre situé au Nord et de lui parler...</p>\n</li>\n  <li>\n<p><b>Dialogue avec Sigvurd :</b></p>\n</li>\n  <li>\n<p>-- {Sigvurd}\":\" {*ouvre difficilement les yeux*} ... Ah ... Euh ... Bonjour ... {*tremble de froid*}</p>\n</li>\n  <li>\n<p>-- Vous avez dit : travail</p>\n</li>\n  <li>\n<p>-- {Sigvurd}\":\" Regardez-moi ... Comment voulez-vous que je puisse \"encore\" travailler ? &lt;&gt;Je ne peux même plus sortir de ce lit ... {*marque une longue pause*}</p>\n</li>\n  <li>\n<p>-- Vous avez dit : encore</p>\n</li>\n  <li>\n<p>-- {Sigvurd}\":\" Oui ... {*parle difficilement*} ... On ne dirait pas ... en réalité ... je suis aventurier ... {*prend une grande bouffée d'air avant de continuer*} ... Je suis rentré depuis quelques semaines ... mon \"état\" ne cesse d'empirer ... Je ne peux presque plus bouger ...</p>\n</li>\n  <li>\n<p>-- Vous avez dit : état</p>\n</li>\n  <li>\n<p>-- {Sigvurd}\":\" Nous avons traversé un \"marécage\" ... Nous étions six ... Mes compagnons n'y ont pas survécu ... &lt;&gt;Je ... je ne sais pas ce que j'ai ... {*remonte sa manche pour vous montrer ses avant-bras*} ... ce sont des griffures ... &lt;&gt;Je ... je suis le \"dernier\" ... {*plisse le front*}</p>\n</li>\n  <li>\n<p>-- Vous avez dit : marécage</p>\n</li>\n  <li>\n<p>-- {Sigvurd}\":\" Un marécage ... oui ... {*a une quinte de toux*} ... une stupide idée ... &lt;&gt;Nous pensions y trouver un trésor ... &lt;&gt; Rhaaaa ... si seulement nous n'avions pas écouté cet \"arbre\" de malheur ...</p>\n</li>\n  <li>\n<p>-- Vous avez dit : arbre</p>\n</li>\n  <li>\n<p>-- {Sigvurd}\":\" C'est un arbre maudit ! ... {*perd son souffle en s'exclamant*} ... &lt;&gt;N'y \"allez\" pas ou vous mourrez ! ... Tous les arbres sont maudits !!! ... Et celui là en particulier ... &lt;&gt;En fait ... il parle ! Mais comment voulez-vous qu'un arbre puisse parler ? ... {*sent la folie le gagner*}</p>\n</li>\n  <li>\n<p>-- Vous avez dit : allez</p>\n</li>\n  <li>\n<p>-- {Sigvurd}\":\" Il est au nord ... Mais n'y allez pas !!! ... {*tousse en essayant de hausser le ton*} ... Il est maudit ... Je vous l'ai déjà dis ! {*insiste*}</p>\n</li>\n  <li>\n<p><b>Trouvez cet arbre....il est situé au Nord de RW dans les eaux marécageuses vers l'Ouest.</b></p>\n</li>\n  <li>\n<p><b>Si vous tentez de lui parler de suite il vous répondra :</b></p>\n</li>\n  <li>\n<p>-- Les feuilles de l'arbre bougent avec le vent.</p>\n</li>\n  <li>\n<p><b>Bien évidemment, comme pour Greyleaf, il vous faut une pierre verte de l'esprit de la forêt pour lui parler. Procurez-vous cette pierre comme vu plus haut et reparlez-lui :</b></p>\n</li>\n  <li>\n<p>-- {Chêne millénaire}\":\" Bonjour jeune aventurier</p>\n</li>\n  <li>\n<p>-- Vous avez dit : travail</p>\n</li>\n  <li>\n<p>-- {Chêne millénaire}\":\" Je suis le gardien du marécage ...seuls les courageux aventuriers peuvent y \"entrer\".</p>\n</li>\n  <li>\n<p>-- Vous avez dit : entrer</p>\n</li>\n  <li>\n<p>-- {Chêne millénaire}\":\" Si vous voulez y entrer, vous devrez d'abord me \"montrer\" votre valeur et vos aptitudes à pouvoir y survivre !</p>\n</li>\n  <li>\n<p>-- Vous avez dit : montrer</p>\n</li>\n  <li>\n<p>-- {Chêne millénaire}\":\" Bien ... Si vous pensez pouvoir y survivre ... Trouvez 50 \"feuilles\" d'arbre démoniaque ou une \"décoction\" démoniaque, peu importe ... l'un ou l'autre. &lt;&gt;Ensuite vous devrez trouver un \"éclat\" d'âme d'arbre Sintelle. &lt;&gt;Quand vous aurez \"tout\" rassemblé, revenez me voir, je vous y enverrai.</p>\n</li>\n  <li>\n<p>-- {Chêne millénaire}\":\" Rapportez-moi une cinquantaine de feuilles d'arbre démoniaque pour me prouver que vous pourrez survivre une fois dans le marécage !</p>\n</li>\n  <li>\n<p><b>Trouvez les ingrédients, groupez avec si possible 3 ou 4 amis et reparlez-lui :</b></p>\n</li>\n  <li>\n<p>-- Des aventuriers s'aventurent péniblement dans les marécages de l'éternelle agonie.</p>\n</li>\n  <li>\n<p>-- {Chêne millénaire}\":\" Vous étiez prévenus ... Allez en paix !</p>\n</li>\n  <li>\n<p><b>Et</b> <b>vous êtes téléportés...</b></p>\n</li>\n\n</ul>",
        "images": [],
        "order": 3
      },
      {
        "title": "Le donjon",
        "description": "<ul>\n  \n  <li>\n<p><b>Sur cette île sont de nombreux monstres très méchants. Evitez de trop bouger, avancez lentement !!</b></p>\n</li>\n  <li>\n<p><b>Tuez les monstres, ils invoquent des Ent's poisseux. Tuez-les aussi. Ils droppent, rarement, des \"feuilles d'Ent\". Pensez surtout à les ramasser. Quand vous aurez tué un certain nombre d'Ent's poisseux, un boss sera invoqué au début de la jetée.</b></p>\n</li>\n  <li>\n<p><b>Vous êtes prévenu par un message d'un des Ent poisseux : *dans un dernier souffle* ... L'Ent lethifère... il vous ôtera votre misérable vie ! ... Vous ne sortirez jamais d'ici ... *agonise sur le sol*.</b></p>\n</li>\n  <li>\n<p><b>Retournez au début de la jetée et tuez le boss. A sa mort il droppe une souche. Cliquez dessus pour obtenir votre <b>récompense</b> et retourner à votre sanctuaire (n'oubliez pas d'apporter vos feuille d'Ent à Solange).</b></p>\n</li>\n  <li>\n<p><b>Récompenses : environ 50M xp et au hasard :</b></p>\n</li>\n  <li>\n<p><b>Iridium, parchemin de l'académie, nerf sciatique, globe oculaire, bulbe de l'éveillé, écume de larve toxique, chapeau des espérances multiples (+10 de chance), item <b>secret</b> de l'Académie.</b></p>\n</li>\n  <li>\n<p></p>\n</li>\n\n</ul>",
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
        "description": "<p>Ce donjon très réussi est réservé aux levels 175 à 200. Il vous sera réservé 1 heure.</p>\n<br/>\n<p>Un groupe de 3 minimum est conseillé dont un soigneur pour le boss.</p>\n<br/>\n<p>Résistance eau sera bien utile contre les âmes impures et peste/maled vous aideront bien à tuer le boss</p>\n<br/>\n<p><b>Items nécessaires</b> :</p>\n<br/>\n<ul>\n  <li>1 masse renforcée (drop des mobs académie-1)</li> <li>1 bobine de corde (drop des vers de DI)</li> <li>1 torche enchantée (10 torches classiques à acheter à une marchande, aller voir Gakalia et lui dire \"torche\")</li> <li>1 nécessaire de secours (180K po) acheté à Veronika (la marchande de Redwall)</li>\n</ul>",
        "images": [],
        "order": 0
      },
      {
        "title": "L'histoire",
        "description": "<p>Une exploratrice est tombée au fond d'un puits en tentant de découvrir l'entrée de la chapelle, et s'est blessée. Le puits se trouve à l'ouest de Redwall (en <b>640,1420</b> environ). Une fois les items réunis, rendez-vous au puits avec votre groupe.</p>",
        "images": [],
        "order": 1
      },
      {
        "title": "La quête d'accès",
        "description": "<ul>\n  \n  <li>\n<p>Il vous faudra une masse renforcée (drop Scorpions, Flamboyants, Furonclus et Gargouilles) ,une bobine de corde (drop des vers de DI), un nécessaire de secours et une torche enchantée.</p>\n</li>\n  <li>\n<p>Achetez le nécessaire de secours 180k chez Veronika (marchande de Redwall).</p>\n</li>\n  <li>\n<p>Pour obtenir la torche enchantée il vous faudra acheter 10 torches classiques et les échanger chez Gakalia (à l'Ouest de la marchande de Redwall) en lui disant \"torche\".</p>\n</li>\n  <li>\n<p>Une fois en possession des 4 items dirigez vous avec votre groupe vers le puits et cliquez dessus. Vous entendrez la voix de l'exploratrice au fond du puits, elle vous dira qu'elle est blessée et qu'il y a un mur ... Il vous faudra avoir les <b>items nécessaires</b> pour entrer et la soigner, ensuite explorer la chapelle et enfin en ressortir.</p>\n</li>\n  <li>\n<p>Attention, pour le coffre final il faudra être 3 au minimum.</p>\n</li>\n\n</ul>",
        "images": [],
        "order": 2
      },
      {
        "title": "Le donjon",
        "description": "<p>1. Une fois à l'intérieur (vous arrivez par la droite), n'oubliez pas, si vous avez lancé le donjon, de parler encore à l'exploratrice blessée Erehrt de Quaerere, mots-clés \"travail\",3x \"recherches\", \"chapelle\", \"entrée\", \"trésors\".</p>\n<br/>\n<p>2. Suivez le chemin menant vers la salle du bas. Attention, sur le chemin le plafond s'effondre à certains endroits (300 de dégâts par effondrement). Au passage, vous pouvez dire \"travail\" et \"oui\" à l'Esprit rédempteur pour initialiser la quête des Ames errantes (inutile, en fait il suffira de lui parler après avoir tué assez d'âmes). Une fois rendu dans la salle du bas, vous devrez tuer quantité d'Ames errantes jusqu'à obtenir chacun une \"fiole d'immunisation aux pouvoirs des sacrements\" (en mage feu full équipé vous ferez 5.5G/heure au level 195 - groupe de 6 quand meme).</p>\n<br/>\n<p>3. En même temps vous pourrez aussi réaliser :</p>\n<br/>\n<p>Admirez la Salles des Ames errantes (en mode farming) =====&gt;</p>\n<br/>\n<p>4. En tuant des Ames errantes, vous devrez obtenir chacun une \"fiole d'immunisation aux pouvoirs des sacrements\" qui vous permettra de poursuivre l'exploration du donjon (notez qu'il est possible de sortir des potions du donjon mais elles seront supprimées lors de l'accès suivant, autant les laisser au sol si vous pensez revenir en moins de 2 heures..). Une fois obtenu une fiole par joueur (elles sont dropables), rendez vous dans la salle de gauche qui contient 3 coffres (sépultures) et des Ames Damnées (au passage, allez dire \"Ames\" à l'esprit rédempteur pour encaisser votre xp si vous avez tué assez d'âmes).</p>\n<br/>\n<p>5. Dans la salle de gauche vous verrez 3 coffres, chacun portant un nom différent. Simplement vous devrez activer les coffres dans le bon ordre de manière à ce qu'apparaisse un cercle mauve qui déverrouille la porte de la salle du haut (boss).</p>\n<br/>\n<p>6. L'ordre des coffres est aléatoire lors de chaque session du donjon. A chaque fois que je suis entrée la combinaison de coffres était différente (ai fait plusieurs fois le donjon en solo, prêtresse lvl 190). Exemple : ouvrir coffre du haut, celui de gauche, celui de droite... etc... jusqu'à obtenir la bonne séquence (ne cliquez pas 2 fois sur le même coffre cela ne sert a rien :)).</p>\n<br/>\n<p>7. Si les coffres sont ouverts dans le bon ordre, une bulle mauve (genre skin de peau de pierre Redwall en mauve, au <b>lieu</b> de vert) apparaitra.</p>\n<br/>\n<p>8. Si par contre l'ordre est mauvais cela fera apparaitre 3 mobs (Buff du fantôme ? requis sinon galère à les tuer ^^). Mais vous pouvez continuer à chercher la bonne séquence pour les coffres même si les mobs ne sont pas morts.</p>\n<br/>\n<p>9. Une fois les coffres ouverts dans le bon ordre, assurez vous de boire chacun la \"Fiole d'immunisation aux pouvoirs des sacrements\" dropée par les âmes errantes de la première salle (la potion dure 30 minutes et le donjon 1 heure).</p>\n<br/>\n<p>10. Allez dans la salle du haut et attendez un peu avant de faire un push. Vous trouverez dans cette salle cinq Ames Impures, qui, si vous n'avez pas la potion aux sacrements, vous lanceront un sort des sacrements qui réduira vos PV à 400 en deux secondes, et vu que les Impures tapent à 600 c'est la mort assurée^^ (non non pas morte encore hihi).</p>\n<br/>\n<p>11. En gros avancez pas à pas pour tuer la première tranquillement, avec un soin prêtre par l'arrière si vous êtes deux. Ne tentez jamais d'entrer directement car les impures ne se déplacent pas donc les perso avec des sorts à distance ou un arc peuvent très facilement les tuer.</p>\n<br/>\n<p>12. Une fois les 5 impures tuées, un Boss apparaîtra, le Prédicateur Décrépit, skin humain avec un suaire du phoenix, qui se téléporte quasi tout les 5 secondes et lance comme un sort skin eau (assez chaud, environ 5 fois par seconde). Tuez-le. L'un de vous peut s'avancer au contact pour le bloquer. (<b>gain</b> : 400M xp)</p>\n<br/>\n<p>13. En mourant, le boss permet à tous d'ouvrir lle tombeau au centre de la salle des 3 coffres. L'ouverture du tombeau vous fera quitter instantanément le donjon avec un petit cadeau en XP (500M quand même) et selon le cas :</p>\n<br/>\n<ul>\n  <li>potion divine...</li> <li>iridium</li> <li>ivoire</li> <li>Anneau du cimmérien</li> <li>Parchemin de l'académie</li> <li>Bouteille d'eau de vie</li> <li>Potion du fortuné</li> <li>Glyphe du prédicateur</li> <li>et parfois un <b>bracelet des gens heureux </b> !!</li>\n</ul>\n<br/>\n<p><br/>Voili voilou.....</p>",
        "images": [
          "/t4c-nms-overview/assets/quests/le-donjon-de-la-chapelle-enfouie/img_3_0.jpg",
          "/t4c-nms-overview/assets/quests/le-donjon-de-la-chapelle-enfouie/img_3_0.jpg"
        ],
        "order": 3
      },
      {
        "title": "Farming et XP",
        "description": "<ul>\n  \n  <li>\n<p>Ha aussi j'oubliais, pour celles et ceux qui désirent farmer aux âmes errantes sachez que ....</p>\n</li>\n  <li>\n<p>Prêtres : équipez-vous lumière plutôt que terre, vous gagnerez 1G/heure en utilisant repousser les MV..</p>\n</li>\n  <li>\n<p>Mages : un mage feu 195 fait 5.5G de l'heure, un prêtre seulent 3.8 dans les mêmes <b>conditions</b> groupe de 6.</p>\n</li>\n  <li>\n<p>A) Ames Errantes : Drop prisme de mana, hyperpotion de tranquillité et Fiole d'immunisation aux sacrements. Les âmes donnent un joli 25M xp chacune (soit environ 3 à 5G/heure).</p>\n</li>\n  <li>\n<p>Sort des âmes errantes : Glacier, et quelquefois vol de mana.</p>\n</li>\n  <li>\n<p>B) Ames perdues (salle de gauche en actionnant le mécanisme) drop prisme et pierre de mana, lance sanctuaire et éclat de pierre en continu. 35Mxp chacune.</p>\n</li>\n  <li>\n<p>C) Ames impures : Lance pouvoirs des sacrements (réduit les PV à 400 en 2 secondes si vous n'avez pas la popo), Lance explo de mana (fait très mal) donc n'entrez pas directement dans la salle. Elles sont très longues a tuer. Dropent parfois une améthyste.</p>\n</li>\n  <li>\n<p>D) Boss : Lance son sort (5 à la seconde, 1200 dégâts au total) téléportation aux 5 secondes, explosion mana, retrait mana, etc..</p>\n</li>\n  <li>\n<p>Les items d'accès sont assez faciles à faire droper. J'ai eu 4 masses renforcées aux flamboyants en 30 minutes avec 0 en chance ^^.</p>\n</li>\n  <li>\n<p>(Merci à Leticia Loxley et Cryne Loxley)</p>\n</li>\n  <li>\n<p></p>\n</li>\n\n</ul>",
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
        "description": "<p>Il vous faudra un insigne de l'Académie. Cet insigne est dropé par les monstres du niveau -2 de l'Académie - profitez-en pour pex car ça peut être long.</p>",
        "images": [
          "/t4c-nms-overview/assets/quests/donjon-academiciens/img_0_0.jpg"
        ],
        "order": 0
      },
      {
        "title": "Le donjon",
        "description": "<p>Rendez vous à la RST de Raven's Dust et descendez près de Iago Caballero (loin au au Sud Ouest de Grott). Vous verrez rapidement la maison de retraite des Académiciens gardée par un Intendant. Parlez lui, il vous réclamera un insigne.</p>\n<br/>\n<p>Ensuite, groupez vous autour du portail avant d'y pénétrer et c'est parti pour <b>donner une bonne leçon aux Académiciens!</b></p>\n<br/>\n<p>Les 10 Académiciens sont dispersés sur 4 étages. Un au premier, Deux au deuxième....Chacun d'eux peut droper un item secret, une relique (rarement) mais pas d'iridium.</p>\n<br/>\n<p>Arrivé au 4ème étage et une fois tous les Académiciens liquidés, un coffre apparaîtra avec votre <b>récompense</b> :</p>\n<br/>\n<ul>\n  <li>Environ <b>1,5</b>G d'xp</li> <li>40K or</li> <li>Des points d'interaction.</li> <li>Avec de la chance vous obtiendrez aussi un anneau de l'apprenti pour l'un des métiers.</li>\n</ul>\n<br/>\n<p>PS: Ce donjon se fait en 10 à 15 minutes mais la réservation est d'une heure.</p>",
        "images": [],
        "order": 1
      },
      {
        "title": "Les combinaisons",
        "description": "<ul>\n  \n  <li>\n<p>Les combinaisons possibles sont :</p>\n</li>\n  <li>\n<p><i><b>1e étage</b></i> : Isilae (rouge)</p>\n</li>\n  <li>\n<p><i><b>2e étage</b></i> : Falyel (beige) - Gorodek</p>\n</li>\n  <li>\n<p><i><b>3e étage</b></i> : Xordiv (noir) - Amaelle (blanc) - Miryden</p>\n</li>\n  <li>\n<p><i><b>4e étage</b></i> : Jalaam (clown) - Valmar - Klauzar - Silvius</p>\n</li>\n  <li>\n<p>------------------------------------------------------------------</p>\n</li>\n  <li>\n<p><i><b>1e étage</b></i> : Falyel (beige)</p>\n</li>\n  <li>\n<p><i><b>2e étage</b></i> : Valmar (vert) - Gorodek (paladin)</p>\n</li>\n  <li>\n<p><i><b>3e étage</b></i> : Isilae (rouge) - Klauzar - Silvius (archer vert)</p>\n</li>\n  <li>\n<p><i><b>4e étage</b></i> : Jalaam (clown) - Xordiv (noir) - Amaelle (blanc) - Miryden (bleu)</p>\n</li>\n  <li>\n<p>------------------------------------------------------------------</p>\n</li>\n  <li>\n<p><i><b>1e étage</b></i> : Miryden (bleu)</p>\n</li>\n  <li>\n<p><i><b>2e étage</b></i> : Isilae (rouge) - Silvius</p>\n</li>\n  <li>\n<p><i><b>3e étage</b></i> : Valmar - Gorodek - Klauzar</p>\n</li>\n  <li>\n<p><i><b>4e étage</b></i> : Jalaam - Xordiv - Amaelle - Falyel</p>\n</li>\n  <li>\n<p>------------------------------------------------------------------</p>\n</li>\n  <li>\n<p><i><b>1e étage</b></i> : Valmar (vert)</p>\n</li>\n  <li>\n<p><i><b>2e étage</b></i> : Miryden (bleu) - Klauzar</p>\n</li>\n  <li>\n<p><i><b>3e étage</b></i> : Xordiv - Amalle - Falyel</p>\n</li>\n  <li>\n<p><i><b>4e étage</b></i> : Jalaam - Isilae - Silvius - Gorodek</p>\n</li>\n  <li>\n<p>-----------------------------------------------------------------</p>\n</li>\n  <li>\n<p></li>\n  <li></p>\n</li>\n  <li>\n<p></p>\n</li>\n\n</ul>",
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
        "description": "<ul>\n  \n  <li>\n<p><b>Trouvez et ramenez le drapeau dans votre camp</b>. N'hésitez pas à voler le drapeau au joueur adverse qui le détient (kill kill kill !) et surtout éclatez vous !</p>\n</li>\n  <li>\n<p><b>Ici pas de drops ni de perte d'xp.</b> Les gagnants marqueront aussi des points d'interaction.</p>\n</li>\n  <li>\n<p><b>Vous devez être 4 joueurs au minimum</b>. Le lanceur de l'interaction et 3 joueurs qui s'inscrivent à l'interaction lancée. La durée maximum est de 30 minutes. Le range de levels autorisé est de -25 à +25 par rapport au niveau du lanceur de l'interaction. Si le lanceur est d'un level élevé, le range sera <b>210-260</b>.</p>\n</li>\n  <li>\n<p>Pour lancer une interaction ,faites ctrl S puis \"interaction PVP\".</p>\n</li>\n  <li>\n<p>Vous aurez le choix entre 3 arènes différentes : Forteresse de Delmar, Marais de Vaal'Nyr, Désert de Scorpiax.</p>\n</li>\n  <li>\n<p>En début d'interaction vous serez téléporté dans le refuge de votre camp. Vous pourrez y acheter des potions d'interaction à prix réduit (pensez à faire une macro rapidement).</p>\n</li>\n  <li>\n<p>A la fin de l'interaction vous serez téléporté à votre point de départ, même si vous étiez à l'Académie ou en Zone Oracle.</p>\n</li>\n\n</ul>",
        "images": [],
        "order": 0
      },
      {
        "title": "Forteresse de Delmar",
        "description": "<p>La plus petite, idéale à partir de 4 joueurs.</p>\n<br/>\n<p>Il s'agit de ramener dans son camp un drapeau apparu aléatoirement dans la forteresse. La première équipe qui marque 5 points ou qui celle mène au bout de 30 minutes a gagné.</p>",
        "images": [],
        "order": 1
      },
      {
        "title": "Marais de Vaal'Nyr",
        "description": "<p>Il s'agit de ramener dans son camp un drapeau apparu aléatoirement au milieu de l'arène. La première équipe qui marque 3 points ou celle qui mène au bout de 30 minutes a gagné.</p>",
        "images": [],
        "order": 2
      },
      {
        "title": "Désert de Scorpiax",
        "description": "<p>Il s'agit de ramener dans son camp le drapeau situé dans le camp adverse. La première équipe qui marque 3 points ou qui celle mène au bout de 30 minutes a gagné.</p>",
        "images": [],
        "order": 3
      },
      {
        "title": "Récompense : GAGNER !",
        "description": "<ul>\n  \n  <li>\n<p>Marquez aussi des points d'interaction !</p>\n</li>\n  <li>\n<p>Les points d'interaction dépendant entre autre du nombre de kills ...</p>\n</li>\n  <li>\n<p></p>\n</li>\n\n</ul>",
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
        "description": "<ul>\n  \n  <li>\n<p>Rendez vous dans une maisonnette située à l'Académie -3, le long du mur Sud-Ouest (facile en partant de l'octogone central).</p>\n</li>\n  <li>\n<p>Vous y trouverez Girflet Kirhn qui, après un petit dialogue, ou si vous dites directement \"<b>envoyer</b>\", vous téléportera vers la salle d'entraînement.</p>\n</li>\n  <li>\n<p>Dans cette salle, Urigan vous proposera d'affronter Quaran (ex Tarnian), Octrael (ex Edgar), Arkélise (ex Moonrock) et surtout Korès (Araknor).</p>\n</li>\n  <li>\n<p>Cela vous coûtera <b>des sources d'énergie</b>, respectivement 3 (Quaran), 5 (Octrael), 7 (Arkélise) ou 10 (Korès), obtenues auprès des monstres du -2 durant vos longues séances d'xp.</p>\n</li>\n\n</ul>",
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
        "title": "Présentation",
        "description": "<ul>\n  \n  <li>\n<p><b>Kores (ex Araknor) est un SUPER-BOSS, vous devrez être nombreux.</b></p>\n</li>\n  <li>\n<p>Prévoyez d'être au moins 8 joueurs divisés en 2 groupes, chacun ayant si possible deux prêtres pouvant ramener à la vie.</p>\n</li>\n  <li>\n<p>Si tout se passe bien vous gagnerez de l'xp et un item rare de craft (livre de sorts de l'apprenti, relique d'un autre temps ou fiole de démolécularisation).</p>\n</li>\n  <li>\n<p>Enfin l'utilisation de SKYPE ou DISCORD aidera bien à l'organisation et la synchronisation des opérations.</p>\n</li>\n\n</ul>",
        "images": [],
        "order": 3
      },
      {
        "title": "Ce qu'il faut savoir",
        "description": "<ul>\n  <li>Kores attaque depuis le centre d'une pièce entourée de murs derrière lesquels vous devrez vous cacher.</li> <li>Sa puissance et ses dégâts augmentent progressivement, le tuer rapidement est donc primordial.</li> <li>Toutes les 5 secondes, il lance une aura verte jusqu'à 4. La 5ème sera violette et aura pour effet de tuer tous ceux qui ne se sont pas cachés derrière les murs. Il faut donc compter les auras vertes, et se cacher après la 4ème. Puis le cycle recommence avec 4 vertes etc...</li> <li>Après les 4 premières séries d'auras, il invoque 4 guerriers squelettes, aux 4 coins de la pièce. Tant qu'ils ne sont pas morts, Korès se régénère et est invincible. Il faut donc tuer rapidement tous les guerriers squelettes pour éviter qu'il se régénère trop.</li> <li>Enfin s'il n'est pas mort après la deuxième invocation de squelettes, ça risque de se gâter car il devient très puissant et les invocations plus fréquentes... De plus, comme il ne dépop pas c'est cuit pour la soirée si vous le ratez une fois !!</li>\n</ul>",
        "images": [],
        "order": 4
      },
      {
        "title": "Méthode",
        "description": "<p>1) Créez 2 groupes équivalents avec si possible deux prêtres pouvant \"ressusciter\" dans chaque groupe.</p>\n<br/>\n<p>2) Installez un groupe au Sud-Ouest (<b>1er groupe/Sud</b>) de la pièce, et un autre au Nord-Est (<b>2ème groupe/Nord)</b>,</p>\n<br/>\n<p>3) Activez Korès en lui parlant (cela vous coûtera 10 sources d'énergie) et commencez à l'attaquer (au sort mental).<br/>Après quatre auras vertes, cachez vous derrière un mur pendant la 5ème violette. Puis recommencez jusqu' à l'invocation des squelettes.</p>\n<br/>\n<p>4) Après la 4ème série d'auras, les squelettes apparaissent. Sans attendre,</p>\n<br/>\n<ul>\n  <li>le <b>1er groupe cours au Sud</b> pour tuer le squelette Sud. Pendant ce temps, un des membres du groupe court à l'Est et fait descendre le squelette Est vers le Sud, là ou est le 1er groupe.</li> <li>Le <b>2ème groupe tuera le squelette Nord en premier</b>, pendant qu'un membre du groupe ira chercher celui à l'Ouest et le fera remonter.</li>\n</ul>\n<br/>\n<p>Dépêchez vous car pendant ce temps Korès se régénère!</p>\n<br/>\n<p>Cette méthode évite de passer dans la zone de danger pour aller chercher le 2ème squelette.</p>\n<br/>\n<p>5) Enfin quand vous aurez tué les guerriers squelettes dont vous êtes chargés, retournez à votre poste de départ. Attaquez Korès s'il n'est pas en train de faire sa 5ème aura (violette) et si tous les guerriers squelettes sont morts. Continuez ainsi jusqu'à l'achever.</p>",
        "images": [],
        "order": 5
      },
      {
        "title": "Pour obtenir la récompense",
        "description": "<p>Une fois mort Korès laisse place à un <b>PNJ</b> inoffensif (Essence spirituelle de Korès...) qu'il faut tuer. C'est ce <b>PNJ</b> qui drop les items, donc c'est sur lui que chacun devra faire ses 5% de dégâts.</p>\n<br/>\n<p>Si le groupe est discipliné, prenez le temps de vous équiper en chance avant de l'attaquer.</p>",
        "images": [],
        "order": 6
      },
      {
        "title": "Les drops des quatre super boss",
        "description": "<ul>\n  \n  <li>\n<p>Quaran/Tarnian (le plus facile) : Plume du chapeau de Quaran, Joyau reluisant, potions.</p>\n</li>\n  <li>\n<p>Octrael/Edgar (il faudra le tuer deux fois) : Symbole du vaillant, Couteau du collecté, potions, crâne fêlé (nouveau), cendres sanctifiées (nouveau).</p>\n</li>\n  <li>\n<p>Arkélise/Moonrock (ciblez les invoc quand elles apparaissent) : Symbole de piété, Calice sacré, potions.</p>\n</li>\n  <li>\n<p>Korès/Araknor : Livre de sorts de l'apprenti, Relique d'un autre temps, Fiole de démolécularisation supérieure, potions.</p>\n</li>\n  <li>\n<p></p>\n</li>\n\n</ul>",
        "images": [],
        "order": 7
      }
    ],
    "credits": [
      "T4C NMS Révolution wiki",
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
        "description": "<ul>\n  \n  <li>\n<p>Il faut être au moins niveau 5 pour pouvoir débuter cette quête. Allez voir Kirlor Dhul à la banque de Lighthaven (au sud-est du temple). Dites lui \"<b>Travail</b>\", \"<b>inscrire</b>\". Il vous demandera si vous voulez vous inscrire. Répondez \"<b>Oui</b>\" et il vous donnera une lettre que vous devrez donner à l'un des deux marchands de Lighthaven. Si vous décidez d'aller voir Sigfried vous gagnerez des points d'expérience et si vous allez voir Rolph vous obtiendrez de l'or. Dans les deux cas, allez voir l'un des marchands et dites lui \"<b>Lettre</b>\". Il vous donnera un rapport que vous devrez remettre au Bourgmestre Sunrock à Windhowl.</p>\n</li>\n  <li>\n<p><b>Attention</b>: cette quête est chronométrée, allez directement à Windhowl.</p>\n</li>\n  <li>\n<p>Arrivé à Windhowl, allez voir le bourgmestre Sunrock (il est dans une maison au nord-ouest de l'entrée du temple). Dites lui \"<b>Rapport</b>\" et il vous remerciera en vous offrant des points d'expérience ou de l'or.</p>\n</li>\n  <li>\n<p><b>Note</b>:</b> Vous pouvez effectuer cette quête une fois avec Rolph et une fois avec Sigfried.</p>\n</li>\n  <li>\n<p><b>PNJs</b> concernés</b>: Kirlor Dul, Sigfried / Rolph, Bourgmestre Sunrock</p>\n</li>\n  <li>\n<p><b>Récompenses obtenues:</b> 750 pièces d'or (si vous choisissez Rolph) ou 6000 points d'expérience (si vous choisissez Sigfried)</p>\n</li>\n\n</ul>",
        "images": [],
        "order": 0
      },
      {
        "title": "La quête de l'épée du chaos",
        "description": "<ul>\n  \n  <li>\n<p>Si vous avez commencé la quête du marché noir mais que vous êtes pris de remords, vous pouvez toujours revenir sur le droit chemin. Après avoir été accusé de trahison par le Bourgmestre Sunrock, allez voir Asarr. Il s'excusera - car le Bourgmestre Sunrock a appris la trahison- et il vous demandera si vous voulez vous défiler. Répondez \"<b>Oui</b>\" et il vous donnera un coffret remplie de diamant. Ramenez le au Bourgmestre Sunrock et dites lui \"<b>Marchandise</b>\". Il vous pardonnera et vous donnera l'épée du chaos.</p>\n</li>\n  <li>\n<p><b>PNJs</b> concernés</b>: Assar, Bourgmestre Sunrock</p>\n</li>\n  <li>\n<p><b>Récompense</b> obtenue:</b> L'épée du chaos (53 For)</p>\n</li>\n\n</ul>",
        "images": [],
        "order": 1
      },
      {
        "title": "La quête du diamant",
        "description": "<ul>\n  \n  <li>\n<p>Trouvez le coffre près du Bourgmestre Sunrock. Ouvrez le et prenez le diamant. Dites lui \"<b>Diamant</b>\", \"<b>Oui</b>\". Il vous remerciera et vous donnera 400 pièces d'or.</p>\n</li>\n  <li>\n<p><b>Note</b>: Vous pouvez effectuer cette quête à volonté</p>\n</li>\n  <li>\n<p><b>PNJ</b> concerné:</b> le Bourgmestre Sunrock</p>\n</li>\n  <li>\n<p><b>Récompense</b> obtenue:</b> 400 pièces d'or</p>\n</li>\n\n</ul>",
        "images": [],
        "order": 2
      },
      {
        "title": "Tuer Balork",
        "description": "<p>Au niveau -4 du temple de Lighthaven, se trouve le démon Balork. Tuez le (+4 en karma) et il vous maudira en mourant (vous aurez la marque de Balork).</p>",
        "images": [],
        "order": 3
      },
      {
        "title": "Le vieil ermite",
        "description": "<p>Allez voir le vieil ermite (en passant par la cave des brigands proche du sud d'Arakas) et dites lui \"<b>confiance</b>\". Il vous dira que vous devez gagner sa confiance et vous enverra voir sa fille Mirak Nira (près de l'entrée du temple de Windhowl).</p>",
        "images": [],
        "order": 4
      },
      {
        "title": "La fille de l'ermite Mirak Nira",
        "description": "<p>Parlez lui et sans vous décourager dites-lui <i><u>trois fois</u></i> de suite \"<b>vieil ermite\"</b> puis \"<b>confiance</b>\". Pour gagner sa confiance, vous devrez tuer 100 gobelins (les gobelins tués auparavant ne sont pas pris en compte).</p>",
        "images": [],
        "order": 5
      },
      {
        "title": "Les 100 gob's",
        "description": "<p>Allez au camp des gobelins (meilleur endroit pour trouver des gobelins) et tuez en 100. Si vous êtes déjà assez fort, allez tuer des shamans gobelins ainsi vous pourrez xp rapidement en même temps.</p>",
        "images": [],
        "order": 6
      },
      {
        "title": "Retour chez Mirak Nira",
        "description": "<p>Retournez voir Mirak Nira et dites lui \"<b>confiance</b>\". Elle vous donnera un anneau de dynamisme (+8 en karma).</p>\n<br/>\n<p><b>Attention</b>:</b> N'équipez pas l'anneau. Je ne sais si c'est un (ancien) bug, mais si vous le mettez, le vieil ermite n'en voudra plus et vous ne pourrez plus faire les quêtes bonnes.</p>",
        "images": [],
        "order": 7
      },
      {
        "title": "Retour chez le vieil ermite",
        "description": "<p>Retournez voir le vieil ermite (en passant par la cave des brigands) et dites lui \"<b>confiance</b>\". Il prendra l'anneau et vous donnera une amulette de précision et 4000 points d'expérience. Dites-lui \"<b>Miracle</b>\", \"<b>sorcellerie</b>\" et il vous parlera d'un mage du nom de Liurn Clar qui vit à Windhowl.</p>",
        "images": [],
        "order": 8
      },
      {
        "title": "Liurn Clar (tour des mages de Windhowl)",
        "description": "<p>Repartez pour Windhowl et trouvez Liurn Clar (à la tour des mages). Dites \"<b>téléporter</b>\" et suivez les instructions. Il vous demandera 100 pièces d'or multiplié par votre niveau et il vous demandera aussi de signer quelques papiers (Comme quoi il n'est pas responsable de ce qui pourrait vous arriver durant votre voyage... c'est rassurant). Dites \"<b>envoyer</b>\", \"<b>conditions</b>\", \"<b>formulaire</b>\", \"<b>payement</b>\" , \"<b>oui</b>\" (vous devez être au moins niveau 25) et il vous téléportera à la fontaine de Silversky (pensez à mettre votre sanctuaire à Silversky en arrrivant).</p>\n<br/>\n<p>Et poursuivez votre aventure à l'aide du Guide Raven's Dust</p>\n<br/>\n<p><b>PNJs</b> concernés:</b> le vieil ermite, Mirak Nira, Liurn Clar</p>\n<br/>\n<p><b>Mini-Boss concerné:</b> Balork</p>\n<br/>\n<p><b>Récompenses obtenues:</b></p>\n<br/>\n<ul>\n  <li>Amulette de précision (27 Int, 26 Sag)</li> <li>4000 points d'expérience</li> <li>Accès à Raven's Dust</li>\n</ul>\n<br/>\n<p></p>",
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
        "description": "<p>La présentation de la quête d’accès maléfique à RD est organisée de manière chronologique pour en faciliter l'exécution.</p>",
        "images": [],
        "order": 0
      },
      {
        "title": "La quête du marché noir (Partie 1) (prévoyez 2 levels pour la terminer)",
        "description": "<ul>\n  \n  <li>\n<p><b>Préalable</b> :</b> Il faut être au moins niveau 5 pour pouvoir débuter cette quête nécessaire à l'accès maléfique.</p>\n</li>\n  <li>\n<p>- Allez voir Kirlor Dhul à la banque de Lighthaven, à côté de l'HDV.</p>\n</li>\n  <li>\n<p>- Dites-lui \"<b>Travail</b>\", \"<b>Inscrire</b>\", \"<b>Oui</b>\" et il vous donnera une lettre pour l'un des deux marchands de Lighthaven.</p>\n</li>\n  <li>\n<p><b>Note</b> :</b> Si vous décidez d'aller voir Sigfried vous gagnerez des points d'expérience. Si vous allez voir Rolph vous obtiendrez de l'or.</p>\n</li>\n  <li>\n<p>- Dites \"<b>Lettre</b>\" au marchand de votre choix, Il vous donnera un rapport à remettre au Bourgmestre Sunrock à Windhowl.</p>\n</li>\n  <li>\n<p><b>Attention</b> :</b> Cette partie de la quête est chronométrée, donc ne traînez pas en route.</p>\n</li>\n  <li>\n<p>- Au <b>lieu</b> d'aller à Windhowl, allez à la ville des voleurs en passant par la cave des brigands et de l’ermite (<b>2205,1464</b>) et trouvez Asarr.</p>\n</li>\n  <li>\n<p>- Dites-lui \"<b>Rapport</b>\". Il vous remerciera et vous demandera d'aller transmettre le rapport au Bourgmestre Sunrock.</p>\n</li>\n  <li>\n<p>- Rendez-vous à Windhowl. Trouvez le Bourgmestre Sunrock dans une maison à l'Ouest de l'entrée du temple.</p>\n</li>\n  <li>\n<p>- Dites-lui \"<b>Rapport</b>\", il vous remerciera.</p>\n</li>\n  <li>\n<p>Fin du chronométrage.</p>\n</li>\n  <li>\n<p>Gagnez maintenant deux niveaux.</p>\n</li>\n  <li>\n<p><b>PNJs</b> concernés :</b> Kirlor Dul, Sigfried ou Rolph, Sunrock, Asarr</p>\n</li>\n  <li>\n<p><b>Récompenses obtenues :</b> 750 pièces d'or ou 6000 points d'expérience</p>\n</li>\n\n</ul>",
        "images": [],
        "order": 1
      },
      {
        "title": "La quête du marché noir (Partie 2)",
        "description": "<ul>\n  \n  <li>\n<p><b>Préalable</b> :</b> Vous devez avoir gagné deux niveaux après avoir remis le rapport à Sunrock.</p>\n</li>\n  <li>\n<p>- Retournez voir Sunrock.</p>\n</li>\n  <li>\n<p>- Parlez-lui et il vous accusera de trahison.</p>\n</li>\n  <li>\n<p><b>Note</b> :</b> Si vous faites la quête du diamant à ce moment-là, il vous pardonnera. Donc si vous voulez continuer sur les quêtes maléfiques ne faites pas cette quête !</p>\n</li>\n  <li>\n<p>- Retournez voir Asarr dans la ville des voleurs. Il s'excusera car le Bourgmestre Sunrock a appris la trahison et il vous demandera si vous voulez vous défiler.</p>\n</li>\n  <li>\n<p>- Dites-lui \"<b>non</b>\" (karma -17) et il vous dira de contacter le fouineur.</p>\n</li>\n  <li>\n<p><b>Note</b> :</b> Si vous changez d’avis et répondez \"oui\", Asarr vous donnera un coffret à remettre à Lord Sunrock, le Bourgmestre de Windhowl. Dites-lui \"marchandises\" et il vous pardonnera et vous donnera une épée du Chaos. Mais vous avez répondu non, alors tout va bien…</p>\n</li>\n  <li>\n<p>- Trouvez le fouineur à Windhowl <b>oui</b>\" (-19 en karma) et il vous dira de revenir le voir de temps en temps car il aura d'autres missions pour vous.</p>\n</li>\n  <li>\n<p>- Dites-lui \"<b>Mission</b>\", il vous demandera de l’aider à retrouver une vieille amie à lui : Shadeen.</p>\n</li>\n  <li>\n<p>- Répondez \"<b>oui</b>\", \"<b>Raven's Dust</b>\". Il vous dira de chercher un sorcier puissant.</p>\n</li>\n  <li>\n<p>- Allez à Windhowl, trouvez Liurn Clar dans la tour des mages à côté de la maison du Bourgmestre.</p>\n</li>\n  <li>\n<p>- Dites-lui \"<b>Téléporter</b>\". Il vous dira que le Bourgmestre Sunrock ne l'autorise pas à vous aider mais vous conseillera d'aller voir un Orc au Nord.</p>\n</li>\n  <li>\n<p><b>PNJs</b> concernés</b> : Kalastor, Balork, Liurn Clar</p>\n</li>\n\n</ul>",
        "images": [],
        "order": 3
      },
      {
        "title": "La quête de l'épée de la nuit",
        "description": "<ul>\n  \n  <li>\n<p>- Allez chercher une épée de fureur sur les généraux gobelins devant l'entrée de la cave Jarko ou au niveau -3 de cette cave (ou dans un coffre de guilde !).</p>\n</li>\n  <li>\n<p>- Trouvez Jagar Kar dans la salle d’armes en face de l’entrée du temple de Lighthaven.</p>\n</li>\n  <li>\n<p>- Dites-lui \"<b>épée de fureur</b>\", il vous dira qu’il échangerait une épée de la nuit contre une épée de fureur si vous en avez une.</p>\n</li>\n  <li>\n<p>- Répondez \"<b>oui</b>\" pour effectuer l’échange.</p>\n</li>\n  <li>\n<p><b>Note</b> :</b> Vous pouvez effectuer cette quête à volonté.</p>\n</li>\n  <li>\n<p><b>PNJ</b> concerné:</b> Jagar Kar</p>\n</li>\n  <li>\n<p><b>Récompense</b> obtenue:</b> Epée de la nuit (65 For, 30 Int, 25 Sag).</p>\n</li>\n\n</ul>",
        "images": [],
        "order": 4
      },
      {
        "title": "La quête du grimoire de Jarko (Anneau des ténèbres)",
        "description": "<p>- Allez à la grotte J comme Jarko (<b>1853,265</b>), descendez au niveau - 3 et trouvez Jarko le Nécromancien (<b>1084,106</b>).</p>\n<br/>\n<p>- Tuez-le <u>vous-même</u> et récupérez son grimoire (karma +4). <b>Repop</b> 25 minutes.</p>\n<br/>\n<p>- Trouvez Araknor à Lighthaven, au Nord-Est derrière le temple.</p>\n<br/>\n<p>- Dites-lui \"<b>Jarko</b>\", \"<b>grimoire</b>\", \"<b>oui</b>\" et il vous donnera (il faudra parfois attendre car il n'est bien disposé que toutes les heures) un anneau des ténèbres ou un anneau de confiance et la possibilité d'apprendre votre premier sort de nécromancie.</p>\n<br/>\n<p>Vous devenez son apprenti, ce qui est nécessaire pour pouvoir parler à l'aveugle, plus tard.</p>\n<br/>\n<p><b>Notes :</b></p>\n<br/>\n<ul>\n  <li>Pour tuer plus facilement Jarko si vous êtes guerrier (ou si vous combattez au corps à corps), attendez qu'il soit dans un coin de la pièce et attaquez-le. La plupart de ses invocations apparaîtront de l'autre côté du mur. Si vous êtes un mage, attaquez avec des sorts de terre ou de feu pour le tuer et absorption de vie mineure pour vous soigner.</li>\n</ul>\n\n<ul>\n  <li>Il faudra attendre jusqu'à une heure qu'Araknor veuille bien vous parler si un joueur lui a donné un grimoire depuis moins d'une heure.</li>\n</ul>\n\n<ul>\n  <li>Vous devrez peut-être recommencer si vous n’avez pas obtenu un anneau des ténèbres. N’hésitez pas à demander de l’aide. Les anciens en ont certainement un perdu au fond de leur coffre.</li>\n</ul>\n<br/>\n<p><b>PNJ</b> concerné :</b> Araknor.</p>\n<br/>\n<p><b>Récompense</b> obtenue :</b> Un anneau de confiance (souvent) ou un anneau des ténèbres (parfois).</p>",
        "images": [],
        "order": 5
      },
      {
        "title": "La quête du parchemin d'enchantement",
        "description": "<p>Voir Quêtes neutres d'Arakas</p>",
        "images": [],
        "order": 6
      },
      {
        "title": "La quête du Diable (Partie 2)",
        "description": "<p><b><u>Fabrication de la lame obscure</u></b></p>\n<br/>\n<p><b>Préalable</b> :</b> vous devez être au moins lvl 16 pour que Lance Silversmith considère que vous êtes assez mature pour lui parler.</p>\n<br/>\n<p>Munissez-vous de :</p>\n<br/>\n<ul>\n  <li>Une épée de la nuit,</li>\n</ul>\n\n<ul>\n  <li>Un anneau des ténèbres,</li>\n</ul>\n\n<ul>\n  <li>Un parchemin d'enchantement,</li>\n</ul>\n\n<ul>\n  <li>10.000 pièces,</li>\n</ul>\n<br/>\n<p>- Allez voir Lance Silversmith, au Nord-Est du camp gobelins (<b>2586,691</b>)</p>\n<br/>\n<p>- Dites-lui \"<b>lame obscure</b>\", \"<b>fabriquer une lame obscure</b>\". Vous recevez la lame et 300 000 points d’expérience.</p>\n<br/>\n<p><b><u>Obtention du parchemin d’accès à Raven’s Dust</u></b></p>\n<br/>\n<p><b>Préalable</b> :</b> vous devez avoir atteint le lvl 25 pour pouvoir obtenir le parchemin de Silversky</p>\n<br/>\n<p>- Retournez à la grotte J (<b>1853,265</b>) au niveau - 3 et trouvez le chef orc renégat (<b>1065,273</b>).</p>\n<br/>\n<p>- Dites-lui \"<b>téléportation</b>\", \"<b>papiers griffonnés</b>\" , \"<b>oui</b>\" et il vous donnera un parchemin de Silversky.</p>\n<br/>\n<p>- Activez le parchemin et il vous téléportera à la fontaine de Silversky.</p>\n<br/>\n<p><b>Note</b> :</b> Pensez à mettre votre sanctuaire à Silversky en arrivant.</p>\n<br/>\n<p><b>PNJs</b> concernés</b> : Le chef orc renégat, Lance Silversmith</p>\n<br/>\n<p><b>Récompenses obtenues</b> 300 000 points d’expérience, parchemin de Silversky</p>\n<br/>\n<p><b>Bravo !!! vous êtes sur Raven's Dust.</b></p>",
        "images": [],
        "order": 7
      },
      {
        "title": "La quête de la lame démoniaque",
        "description": "<p><b>Cette quête est facultative</b>. Elle est peu utile et de plus nécessite des items RD. (Facultatif)</p>\n<br/>\n<p>Il faut être au moins niveau 16 avant de pouvoir commencer cette quête. Allez voir Lance Silversmith (dans une maison au Nord-Est du camp gobelins). Dites lui \"Lame démoniaque\" et il vous demandera :</p>\n<br/>\n<ul>\n  <li>1 parchemin d'enchantement obtenue à la quête du parchemin d'enchantement. (voir Quêtes neutres d'Arakas)</li> <li>1 épée du chaos obtenue par la quête de l'épée du chaos, ou en tuant des pillard des dunes.</li> <li>1 crâne de démon obtenu en tuant Griroesh, situé non loin de Jarko.</li> <li>1 collier de coeur noir obtenu en tuant Bane Gwengad (RD, île de Bane).</li> <li>8.000 pièces d'or.</li>\n</ul>\n<br/>\n<p>Une fois que vous aurez obtenu ces ingrédients, retournez voir Lance Silversmith et dites lui \" fabriquer lame démoniaque\".</p>\n<br/>\n<p><b>Note</b>: Vous pouvez effectuer cette quête à volonté.</p>\n<br/>\n<p><b>PNJ</b> concerné</b>: Lance Silversmith</p>\n<br/>\n<p><b>Récompense</b> obtenue</b>: lame démoniaque (213 For) bof...</p>\n<br/>\n<p></p>",
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
        "description": "<p>Vous devez être déchu pour réaliser cette quête.</p>\n<br/>\n<p>Pour commencer, sachez qu'il est inutile de débuter la quête avant le level 25.</p>\n<br/>\n<p>Allez voir <b>Muffin</b> (un Kobold dans la cave de l'île des Démonicons) dites lui \"travail\" \"guider\" puis \"service\".</p>\n<br/>\n<p>Allez parler à <b>Delvar Dorndir</b> (près de la montagne au Sud-Ouest du camp gobelin), dites lui \"potion\" et \"oui\".<br/>Retournez voir <b>Muffin</b>, dites lui \"Service\", \"aider\" et \"avancer\".</p>\n<br/>\n<p>Tuez les deux dragons d'Arakas Dasrinn et Dimith. L'un se trouve au nord de la cave située sur l'île des kraaniens et l'autre se trouve après le labyrinthe près du village des nains.</p>\n<br/>\n<p>De retour chez notre ami <b>Muffin</b>, dites lui \"avancer\", \"continuer\", \"îles\" et \"matériel\". Il vous enverra chercher :</p>\n<br/>\n<ul>\n  <li>un anneau d'or (quête de Jarko, chef de guerre gobelin, assassin...)</li> <li>une cotte de mailles bénie</li> <li>un scalpel de chirurgien</li>\n</ul>\n<br/>\n<p>Muni de ces objets redites lui \"matériel\", \"continuer\" et il vous donnera un parchemin d'accès à SilverSky.</p>\n<br/>\n<p>Une fois arrivé à Silversky, parlez rapidement à <b>Porcine Citre</b> oui\". Cela fixera votre sanctuaire dans l'enclos des cochons!!</p>\n<br/>\n<p></p>",
        "images": [],
        "order": 0
      }
    ],
    "credits": [
      "T4C NMS Révolution wiki"
    ]
  },
  {
    "title": "La lettre de Crimsonscale (AR)",
    "slug": "la-lettre-de-crimsonscale-AR",
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
        "description": "<ul>\n  \n  <li>\n<p>C’est une quête immense qui se déroule en 3 parties: Arakas, Raven’s Dust, puis le dénouement s’effectue sur Arakas.</p>\n</li>\n  <li>\n<p>Elle est très intéressante par l'XP qu'elle donne (principalement sur Arakas) et par certains des items offerts (comme l'amulette de renouveau si vous êtes lanceur de sorts).</p>\n</li>\n  <li>\n<p>Si vous pensez renaître vous pouvez vous arrêter au Barde (pour l'xp donnée et l'accès au Mausolée - ou vous pourrez faire beaucoup d'xp, surtout en prêtre lumière) ou à la Bibliothèque (pour l'xp seule car le bracelet de flammes donné par le Dragon Crimsonscale est supprimé sur NMS).</p>\n</li>\n  <li>\n<p><b>Tip</b> : Petits <b>indices</b> pour savoir ou vous en êtes dans la quête si vous l'avez commencée il y a un bout de temps :-))</p>\n</li>\n  <li>\n<p>La tablette de pierre runique, la gemme sombre et la Caledbolg sont supprimées aux renaissances. Il est impossible de supprimer la Caledbolg donc si vous avez la gemme sombre et pas la Caledbolg, il y a des chances que vous en soyez aux adorateurs (désert RD) ou peu avant. Si vous avez la Caledbolg, allez parler au Grand Prêtre de LH puis à Efnisien.</p>\n</li>\n\n</ul>",
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
        "description": "<p>Allez au temple de Lighthaven et parlez à Kilhiam. Elle vous donnera une lettre (double clic dans l’inventaire) qui dit ceci:</p>\n<br/>\n<p>\"Chère ami(e), vous trouverez cette lettre un peu bizarre, veuillez m’en excuser mais le problème est de la plus grande importance et avant que commence votre journée, je voudrais que vous compreniez parfaitement la situation dans laquelle nous avons été forcés d’entrer. Depuis ce jour, votre vie ne sera plus jamais la même. Je ne peux pas tout expliquer dans cette lettre, mais je vous recommande fortement d’aller voir celui que l’on nomme Efnisien. Il habite à l'étage d'une petite maison située à l’est du temple de Lighthaven. Rencontrez-le et il vous expliquera ce que vous devez connaître.\"</p>",
        "images": [],
        "order": 2
      },
      {
        "title": "Efnisien et ses gardes",
        "description": "<p>Dirigez-vous vers la maison d’Efnisien située à l'Est de la banque de Lighthaven et montez à l'étage. Dès que vous cliquez sur lui, 3 assassins apparaissent. Tuez-les et cliquez à nouveau sur Efnisien. Dites \"Gardes\", \"Assassins\", \"Olin Haad\", \"Siège de la ville\", \"Quelque chose\", \"Services\", \"Refusé\", \"Visite\", \"Lettre\" et vous en apprendrez sur Olin Haad et le cœur de pierre. Efnisien mentionne également que vous devez aller parler à Olin Haad mais que, si vous voulez que ce dernier vous porte attention, vous devez donnez une raclée à ses gardes !</p>",
        "images": [],
        "order": 3
      },
      {
        "title": "Le château d'Olin Haad",
        "description": "<p>Dites \"Adieu\", dirigez vous vers la grotte (cave) de Lighthaven (au sud-ouest de la fontaine), entrez-y et trouvez le château d’Olin Haad (<b>attention</b> aux gardes, une bénédiction - même si c'est seulement celle de Zélina du temple - sera la bienvenue). Cliquez sur la porte du château et vous serez téléporté à l’intérieur. Suivez le tapis rouge et vous trouverez Olin Haad. Essayez de discuter avec lui. Il va refuser, ressortez et tuez environ 20 de ses gardes.</p>\n<br/>\n<p>Puis retournez lui parler. Dites \"Chercher\", \"Combat\" et vous serez téléporté dans une pièce avec 4 Gardes d’Elite d’Olin Haad. LAISSEZ-VOUS TUER ! Ils ne mourront qu’en essayant de vous tuer ! Vous serez re-téléporté (tout rouge, avec 5% de vos PV, mais vous ne serez PAS mort) aux côtés d’Olin Haad. A ce point de la quête, vous recevrez l’aura Colère des Anciens (Wrath of the Ancients), un sort de protection permanent qui blesse de temps à autre les ennemis qui vous attaquent. Continuez le dialogue avec Olin Haad, en disant : \"Ils\", \"Haruspice\", \"Prophétie\", \"Graines\", \"Moi\", \"Nouvelle race\", \"Réponse\" et vous apprendrez des choses au sujet de la prophétie. Olin Haad mentionnera également que vous devez trouver le Grand Prêtre Gunthar et le prévenir qu’il ne pourra quitter Lighthaven en paix, tant qu'il n'aura pas rendu ce qu’il a promis.</p>",
        "images": [
          "/t4c-nms-overview/assets/quests/la-lettre-de-crimsonscale/img_4_0.jpg"
        ],
        "order": 4
      },
      {
        "title": "Grand prêtre Gunthar (au temple, sous-sol derrière le trône)",
        "description": "<ul>\n  \n  <li>\n<p>Retournez au temple de Lighthaven (utilisez votre gemme de téléportation, c'est plus rapide) et cliquez sur la porte derrière le trône. Vous serez téléporté dans la petite pièce. Descendez dans le donjon et trouvez le Grand Prêtre Gunthar. Dites-lui \"Demandes\", \"Pierre\", \"Marchand\", \"Attendez\", \"Nécromancien\", \"Corrupteurs de Gluriurl\", \"Bataille des émanations\", \"Faucheurs de vie\", \"Dragons\", \"Complètement\", \"Theodore XIII\", \"Pierre du coeur\" et vous apprendrez au sujet du culte de Gluriurl, du Cœur de pierre, et de la vente de celui-ci à un marchand. Maintenant dites \"Oui\" afin d’accepter d’aider Gunthar à trouver le Cœur. Dites \"Regarder\" et il vous dira de chercher à Windhowl.</p>\n</li>\n  <li>\n<p>Vous recevez également 1.000 pièces d’or et 10.000 xp.</p>\n</li>\n  <li>\n<p>Continuez le dialogue en disant \"Nomade\" et vous parlera du signe du marchand.</p>\n</li>\n\n</ul>",
        "images": [],
        "order": 5
      },
      {
        "title": "A Windhowl (Ethan, Urik, maison du Nomade)",
        "description": "<ul>\n  \n  <li>\n<p>Rendez vous à Windhowl.</p>\n</li>\n  <li>\n<p>Cherchez la maison de la guilde des Marchands située à gauche du marchand d’armes. Trouvez Ethan chef de la guilde des Marchands et dites-lui \"Nomade\", \"Raté\", \"Agressif\", \"Affaire\", \"Pierre du Cœur\" et il vous parlera un peu plus du Nomade et des marchands. Dès que vous lui aurez parlé de la Pierre du Cœur, il vous dira qu’il a un problème et qu’il ne peut plus perdre son temps avec vous. Dites \"Problème\", \"Taxes\" et il vous parlera des dettes d’Urik le Maître tailleur. Dites \"Mercenaires\", \"Tâche\" et \"oui\", acceptez d’aider Ethan à récupérer l’argent qu’Urik lui doit.</p>\n</li>\n  <li>\n<p>Retournez vers la maison d’Urik, située sous la taverne de Windhowl. Montez à l'étage et parlez à Urik. Dites-lui \"Idiot\", \"Discuter\", \"Affaire\". Il refusera de vous donner l’argent qu’il doit et appellera en renfort 3 voleurs. Mettez les au tapis et reparlez à Urik. Il vous donnera alors 1.000 pièces d’or et l’argent de ses dettes.</p>\n</li>\n  <li>\n<p>Retournez à la Guilde des Marchands et parlez de nouveau à Ethan. Cliquez sur lui, dites-lui \"Argent\" et il prendra son dû.</p>\n</li>\n  <li>\n<p>Vous recevez quant à vous 40.000 xp.</p>\n</li>\n  <li>\n<p>Dites-lui maintenant \"Nomade\", \"Leçon\", \"Suspecte\", \"Confrerie Obsidienne\", \"Aider\" et il vous dira qu’il suspecte qu’Urik et le Nomade travaillent ensemble. Dites \"Clefs\" et il vous donnera un lot de clés qu’il a dérobé chez Urik. Il mentionnera également qu’une de ces clés ouvrirait peut-être la maison du Nomade. Dites \"Demeure\" et il vous indiquera où se situe celle-ci, quelque part au sud de la ville.</p>\n</li>\n  <li>\n<p>Dirigez-vous vers le sud-ouest et cherchez la maison du Nomade. Elle est située à côté des remparts. Cliquez sur la porte, la clé disparaîtra et vous serez téléporté à l’intérieur de la maison. Montez au premier étage et commencez à ouvrir les 4 coffres (faites Ctrl+n pour voir les coffres). Dans un des coffres, vous trouverez une petite clé. Cliquez à nouveau sur le coffre et vous trouverez, cachées dans un double fond, 1.000 pièces d’or. Montez au deuxième étage et ouvrez les deux coffres. Dans l’un des deux, vous trouverez la lettre d’Owain.</p>\n</li>\n  <li>\n<p>La lettre dit (double clic dans l’inventaire):</p>\n</li>\n  <li>\n<p>\"Cher Nomad,</p>\n</li>\n  <li>\n<p>Nous avons finalement trouvé la grotte maudite que vous avez recherchée tant d’années. La semaine dernière, j’ai envoyé une équipe afin de retrouver la relique que vous aviez demandée mais ils ne sont jamais revenus… J’en ai parlé avec Urik, et il me força à envoyer une deuxième équipe, dont seulement un seul hommes est revenu, les bras rongés ! J’arrête. Vous ferez ce que vous voulez mais je n’envoie plus personne dans cette place damnée. J’attendrai au camp des Druides au Nord-Est d’Arakas dix jours. Si pour n’importe quelle raison, j’y apprends que vous amenez Urik avec vous, ou si vous ne venez pas, je partirais.</p>\n</li>\n\n</ul>",
        "images": [
          "/t4c-nms-overview/assets/quests/la-lettre-de-crimsonscale/img_6_0.jpg"
        ],
        "order": 6
      },
      {
        "title": "Le commandant Owain au camp des druides d'Arakas",
        "description": "<ul>\n  \n  <li>\n<p>Traversez entièrement Arakas pour vous dirigez vers l’Ordre de la Nature (Camp des Druides au Nord-Est d'Arakas) et trouvez Yrian Holenarbed situé dans une maison à l’Est de Stonehenge. Parlez-lui et il vous demandera si vous êtes le voyageur envoyé par les vents afin de l’aider. Dites \"Oui\", \"Etat\", \"Voyageur\", \"Malheurs\", \"Odeur\", \"Resistance\", \"Nomade\" et vous apprendrez la disparition du Grand-père et la nausée causée par le Nomade. Continuez le dialogue en disant \"Bâton\", \"Commandant\" et vous apprendrez qu’il pourrait guérir cette nausée s’il avait le Sceptre de Solinae, mais le Nomade a ordonné à son Commandant de prendre ce sceptre. Il soulignera également que les troupes du Nomade sont stationnées au sud-est du camp des Druides à proximité de la rivière.</p>\n</li>\n  <li>\n<p>Dirigez-vous donc vers le Sud-Est, trouvez et tuez le commandant Owain (et, si vous le pouvez, ses serviteurs, les soldats d’Olin Haad).</p>\n</li>\n  <li>\n<p><b>Attention</b>:</b> Le commandant Owain et ses soldats sont difficiles à bas niveau. Trouvez un ami qui peut vous aider ou soyez sûr de transporter beaucoup de potions de guérison !</p>\n</li>\n  <li>\n<p>Une fois le commandant Owain mort, le sceptre de Solinae apparaît dans votre inventaire. Retrouvez Yrian Holenarbed et cliquez sur lui. Yrian prendra le Sceptre.</p>\n</li>\n  <li>\n<p>Vous recevrez 75.000 xp.</p>\n</li>\n  <li>\n<p>Dites-lui \"Nomade\" et il vous dira que le Nomade recherchait une crypte. Dites \"Crypte\" et il vous parlera d’une route menant au temple située à proximité d’un campement quelque part à l’ouest. Vous recevrez également l’anneau gardien de vitalité et la gemme de vitalité (Guardian Ring of Vitality et Gem of Vitality). Equipez l'anneau et faites une macro avec la gemme (voyez ici comment faire).</p>\n</li>\n\n</ul>",
        "images": [
          "/t4c-nms-overview/assets/quests/la-lettre-de-crimsonscale/img_7_0.jpg"
        ],
        "order": 7
      },
      {
        "title": "La gitane",
        "description": "<p>Dirigez-vous vers le campement de Gypsy la Gitane, situé au sud-est du pont allant en direction des grottes de la Vallée Maudite (en venant du Sud, une fois passé le pont à l'ouest de l’île aux démonicons, tournez immédiatement à gauche puis dès que vous le pouvez dirigez vous vers le nord). Trouvez la Gitane et parlez-lui. Dites \"Voyageur\", \"Voyante\", \"Nomade\" et elle vous dira qu’elle vous aidera à trouver le Nomade. Avant cela, elle vous posera quelques questions afin qu’elle s’harmonise avec votre aura. Répondez \"Oui\", \"Oui\", \"Donneur de vie\" et elle vous dira qu’il se trouve dans un ancien temple d’une divinité morte nommée Gluriurl. Ce temple se situe sur une île séparée de la terre ferme. Afin d’atteindre cette île, vous devez traverser une grotte se situant au nord.</p>",
        "images": [],
        "order": 8
      },
      {
        "title": "La crypte du nomade (le coeur et le sang de Gluriurl)",
        "description": "<ul>\n  \n  <li>\n<p><b>La crypte du Nomade</b></p>\n</li>\n  <li>\n<p> Entrez-y et continuez vers le Nord. Méfiez vous du Kraanien, il fait 200 pv de dégâts par coup qu'il vous porte. Poursuivez jusqu’à l’autel. La, vous verrez un portail et deux tourbillons.</p>\n</li>\n  <li>\n<p><b>La tombe du Déchu : Le coeur de Gluriurl</b></p>\n</li>\n  <li>\n<p>Entrez dans le tourbillon de droite dans la cave des coeurs corrompus. Marchez vers le Nord et vous arriverez à la tombe du Déchu. Cherchez les guerriers Déchus, situés au nord de la crypte. Tuez-les jusqu’à ce qu’ils laissent tomber un cœur corrompu (à petit niveau faites vous aider). Ramassez-le et entrez dans le portail derrière eux. Vous serez à nouveau téléporté à côté de l’autel.</p>\n</li>\n  <li>\n<p><b>La cave de la corruption : le sang de Gluriurl</b></p>\n</li>\n  <li>\n<p>Entrez maintenant dans le tourbillon de gauche et vous arriverez à la cave de la corruption. Allez vers l'ouest pour trouvez le puits portant l'inscription \"ici repose le sang de Gluriurl\", cliquez dessus et vous collecterez le sang de Gluriurl dans une bouteille (cette partie est difficile, être béni et rempli de potions est conseillé à bas level). Entrez enfin dans le portail et vous vous retrouverez de nouveau à proximité de l’autel.</p>\n</li>\n  <li>\n<p>Touchez l’autel et le cœur de Gluriurl commencera à battre, obligeant le portail à miroiter en retour. Plongez dedans et votre vision se brouillera pendant un court moment…</p>\n</li>\n  <li>\n<p><b>La crypte des pierres sombres</b></p>\n</li>\n  <li>\n<p>En passant le portail vous arriverez à la Crypte des pierres sombres. Allez vers le nord-ouest et vous trouverez une cage thoracique. Touchez-la et vous recevrez la gemme sombre (Darkstone) et le message suivant vous apparaîtra :</p>\n</li>\n  <li>\n<p>\"Une gemme sombre flotte dans les airs là où le cœur devrait être. Avec grands soins, vous prenez la gemme sombre et la remplacez par le cœur de Gluriurl\".</p>\n</li>\n  <li>\n<p>La voix de la Gitane résonne alors dans votre tête: [Nom du joueur] ! Vous devriez venir me voir, j’ai quelque chose d’important à vous montrer !\".</p>\n</li>\n  <li>\n<p>Vous serez récompensé par 125.000 xp.</p>\n</li>\n\n</ul>",
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
        "description": "<ul>\n  \n  <li>\n<p>Retournez voir la Gitane et parlez-lui. Elle mentionnera qu’elle ressent la présence du coeur maléfique sur vous. Dites \"Coeur maléfique\", \"Rêves\", \"Cadavre délabré\", \"Plan\", \"Sacrifice\" et vous en apprendrez plus au sujet de la pierre noire maudite, les rêves étranges de la Gitane et votre nouvelle tâche. Vous devez rapporter la pierre noire au temple d’Arthek à Lighthaven. Dites \"Quelque chose\" et elle vous offrira (selon votre choix) :</p>\n</li>\n  <li>\n<p>- Amulette de Renouveau et Gemme de Renouveau (indispensable aux lanceurs de sorts) (Amulet of Renewal and the Gem of Renewal)</p>\n</li>\n  <li>\n<p>- Amulette de Régénération et Gemme de Régénération (Amulet of Regeneration and the Gem of Regeneration)</p>\n</li>\n  <li>\n<p>- Carquois de stabilité gris (110 dext, 20 Force) (Trueshot's Quiver)</p>\n</li>\n  <li>\n<p>Votre choix fait, la Gitane vous conseille de vous rendre rapidement au temple de LightHaven (équipez l'amulette et faites une macro avec la gemme).</p>\n</li>\n\n</ul>",
        "images": [],
        "order": 10
      },
      {
        "title": "Le chef des brigands Gorlok Bloodaxe",
        "description": "<ul>\n  \n  <li>\n<p>Rendez-vous au temple de Lighthaven (utilisez la gemme de téléportation). Tentez de prendre la porte menant au grand Prêtre Gunthar :</p>\n</li>\n  <li>\n<p>La porte est fermée mais il y a un message dessus:</p>\n</li>\n  <li>\n<p>\"[Nom du joueur], je vous prie de bien vouloir m’excuser de ne pas être là pour vous accueillir, mais j’avais quelque affaire urgente à régler. Si vous désirez me rencontrer, parlez au prêtre du temple.\"</p>\n</li>\n  <li>\n<p>Allez parler avec Frère Kiran. Il vous demandera si vous veniez voir le Grand Prêtre Gunthar. Répondez \"Oui\" et il vous dira qu’il a été invité à une réunion avec le chef de son ordre, il semblait qu’il avait quelque sérieuse affaire à régler. Dites \"Importantes choses\", \"Maison du Bourgmestre\" et il vous dira de le chercher dans un grand bâtiment situé à la fin de la rue partant vers le sud-est. Il vous mentionnera Kirlor Dhul, si vous avez des doutes.</p>\n</li>\n  <li>\n<p>Dirigez-vous vers la banque de Lighthaven et cliquez sur Kirlor Dhul le bourgmestre. Il vous informera au sujet d'une certaine agitation qui a eu <b>lieu</b> dans la rue quelques instants plus tôt. Il vous dira aussi que quelqu’un a peut-être vu ce qui s’est passé.</p>\n</li>\n  <li>\n<p>Sortez de la banque et cherchez ce quelqu'un qui est une femme nommée Amelia. Cliquez sur elle et elle vous suppliera de ne pas la tuer car elle n’a rien vu. Dites \"Tuez\", \"Eux\" et elle vous dira que six hommes ont attaqué Gunthar. Dites \"Brigands\", \"Ou\" et elle vous dira qu’ils partaient vers le sud-ouest à partir du pont gobelin ouest, à l’extérieur de la ville.</p>\n</li>\n  <li>\n<p>Dirigez-vous vers le pont de Lighthaven Ouest, et continuez vers l’Ouest jusqu’à ce que vous croisiez un chemin. Continuez sur le chemin vers le Sud et vous arriverez au camp des brigands.</p>\n</li>\n  <li>\n<p>Mettez au tapis les brigands et finalement Gorlok Bloodaxe (pas facile). Une fois que vous l’aurez tué, le Grand Prêtre Gunthar sera libéré (il apparaîtra à vos côtés). Cliquez sur lui et il vous remerciera. Il vous demandera également si vous avez retrouvé la pierre. Répondez \"Oui\" et il vous demandera de vite ramener la pierre à Olin Haad.</p>\n</li>\n  <li>\n<p>Vous serez récompensé par 200.000 xp.</p>\n</li>\n  <li>\n<p>Retournez au château d’Olin Haad en passant par la grotte de LH. Cliquez sur ce dernier et dites \"Nomade\", \"Gemme sombre\", \"Pierre du coeur\", \"Ment\". Vous en apprendrez plus au sujet de la Pierre du Coeur et vous serez téléporté à la bibliothèque du château avec 3 gardes privés d’Olin Haad. Tuez-les (en tuer un seul suffit). Ressortez vite fait de la bibliothèque et reparlez à Olin Haad. Il vous enverra voir Gunthar le Grand Prêtre.</p>\n</li>\n\n</ul>",
        "images": [
          "/t4c-nms-overview/assets/quests/la-lettre-de-crimsonscale/img_11_0.jpg"
        ],
        "order": 11
      },
      {
        "title": "Retour chez Gunthar au temple",
        "description": "<p>Retrouvez voir Gunthar au sous-sol du temple et dites-lui \"Regarder\", \"Cacher\", \"Dieux\", \"Service\", \"Corps physique\", \"Sacrifiant\", \"Transferer\", \"Sceau\", \"Veritables intentions\" et vous glanerez encore quelques informations au sujet de la Pierre du Coeur. Il vous demandera aussi de rencontrer un ancien ami connu comme étant le Barde sans Nom (Nameless Bard). Il vous dira également que vous devez d’abord parler avec Tarnian situé au sud-ouest du square de Lighthaven, près de la côte.</p>",
        "images": [],
        "order": 12
      },
      {
        "title": "Tarnian",
        "description": "<p>Trouvez Tarnian (vers <b>2780, 1200</b>) et parlez-lui. Il vous demandera si vous venez de la part de Gunthar. Répondez \"Oui\" puis dites \"Gemme sombre\", \"Digne\", \"Gluriurl\", \"Crane\", \"Celui\", \"Fils\", \"Meurtre\", \"Fanatique\", \"Croit\" et il vous donnera une tablette de pierre runique (Runed Stone Tablet ou RST). Dites \"Raven's Dust\" et il vous donnera des indications afin de trouver Antonian l’ermite. Il vous apprendra à utiliser la tablette de pierre runique (faites une macro avec la gemme).</p>",
        "images": [],
        "order": 13
      },
      {
        "title": "Antonian l'ermite",
        "description": "<p>Afin de parler à Antonian l’ermite, activez votre macro tablette (RST). Il vous attend dans une maison à l'Est de la tablette de pierre runique d'Arakas, à peu de distance de la crypte d'Arakas.</p>",
        "images": [],
        "order": 14
      },
      {
        "title": "Les 5 nexus",
        "description": "<p>Cliquez sur Antonian et il vous demandera si vous avez la tablette de pierre runique de Tarnian. Répondez \"Oui\", puis \"Tablette de pierre runique\" et vous apprendrez que c’est une pierre de téléportation. Dites \"Clin d'oeil\", \"Prières\", \"Ancestrale\", \"Index d'un nexus\" et vous saurez que pour l’utiliser (pour gagner la tablette de Raven's Dust, mais vous devrez aussi avoir fait l'accès RD au <b>préalable</b>), vous avez besoin d’activer les pierres de connexion. Dites \"Lieu\", \"Emplacement\" et il vous dira que vous pouvez à tout moment utiliser la tablette pour lui rendre visite (cliquer sur la tablette vous téléporte juste à l’ouest d’Antonian l’ermite). A ce moment, il sera tellement absorbé par ses recherches qu’il en oubliera jusqu’à votre présence. Cliquez à nouveau sur lui et dites \"Oui\". Antonian vous donnera alors les indications suivantes :</p>",
        "images": [],
        "order": 15
      },
      {
        "title": "Nexus 1",
        "description": "<ul>\n  \n  <li>\n<p>Voyagez vers le nord au dessus du camp gobelin et cherchez la rivière jusqu’à ce que vous trouviez un pont la traversant. Prenez ce pont et longez la rivière vers l'Est jusqu’à un îlot. Il y a une pierre de connexion tout à l'Est sur cet îlot (<b>attention</b> c'est très chaud...être béni est fortement conseillé). Cliquez sur la pierre et vous obtiendrez le message suivant:</p>\n</li>\n  <li>\n<p>\"Vous placez la tablette de pierre runique sur la pierre de connexion. La pierre de connexion émet un rayon lumineux qui vient frapper la tablette.\"</p>\n</li>\n  <li>\n<p>Puis activez rapidement votre tablette de pierre runique (RST) ou votre gemme HDV avant de mourir :))).</p>\n</li>\n\n</ul>",
        "images": [],
        "order": 16
      },
      {
        "title": "Nexus 2",
        "description": "<ul>\n  \n  <li>\n<p>Utilisez la tablette afin de retourner voir Antonian l’ermite. Cliquez sur lui, dites \"Oui\" et il vous donnera la direction de la 2e pierre de connexion (située sur l'île aux Kraanians) :</p>\n</li>\n  <li>\n<p>Prenez la route vers le sud et continuez vers le sud-ouest à la première intersection. Peu après, la route tourne vers l’ouest, vous arriverez à un nouveau croisement. Continuez vers le nord, puis vers le nord-ouest et prenez le pont de l'île aux Kraaniens. Une fois traversé, continuez vers le nord et vous trouverez une autre pierre de connexion.</p>\n</li>\n  <li>\n<p>Suivez les directions et trouvez la 2e pierre de connexion (située au nord une fois le pont des kraanians franchi). Cliquez dessus et vous aurez à nouveau le message (vous pouvez directement allez vers l'ouest puis le Sud pour trouver le 4ème Nexus).</p>\n</li>\n\n</ul>",
        "images": [],
        "order": 17
      },
      {
        "title": "Nexus 3",
        "description": "<ul>\n  \n  <li>\n<p>Maintenant, utilisez la tablette afin de retourner voir Antonian l’ermite. Cliquez sur lui, dites \"Oui\" et il vous donnera la direction de la 3e pierre de connexion:</p>\n</li>\n  <li>\n<p>Prenez la route du sud et continuez vers le sud-ouest à la première intersection. Peu après, la route se dirige vers l’ouest, vous arrivez à un nouveau croisement. Continuez vers le sud-ouest jusqu’à ce que vous passiez un pont, puis continuez vers le sud dans la vallée afin de trouver une autre pierre de connexion.</p>\n</li>\n  <li>\n<p>Suivez les directions et trouvez la 3e pierre de connexion (située au nord des montagnes de la ville des voleurs). Cliquez dessus pour le message.</p>\n</li>\n\n</ul>",
        "images": [],
        "order": 18
      },
      {
        "title": "Nexus 4",
        "description": "<ul>\n  \n  <li>\n<p>Maintenant, utilisez la tablette afin de retourner voir Antonian l’ermite. Cliquez sur lui, dites \"Oui\" et il vous donnera la direction de la 4e pierre de connexion:</p>\n</li>\n  <li>\n<p>Suivez la route du sud et continuez vers le sud-ouest à la première intersection. Peu après, la route continue vers l’ouest, vous arrivez à un nouveau croisement. Continuez vers le nord puis vers le nord-ouest en traversant le pont de l'île aux Kraanians. Une fois traversé, suivez la rivière vers l’ouest jusqu’à rencontrer l’océan. Vous trouverez une pierre de connexion à côté du rivage.</p>\n</li>\n  <li>\n<p>Suivez les directions et trouvez la 4e pierre de connexion (allez vers l’ouest à partir du pont kraanian jusqu’à rencontrer l’océan, continuez au sud). Cliquez dessus pour obtenir à nouveau le message.</p>\n</li>\n\n</ul>",
        "images": [],
        "order": 19
      },
      {
        "title": "Nexus 5",
        "description": "<ul>\n  \n  <li>\n<p>Maintenant, utilisez la tablette afin de retourner voir Antonian l’ermite. Cliquez sur lui, dites \"Oui\" et il vous donnera la direction de la 5e pierre de connexion :</p>\n</li>\n  <li>\n<p>\"Je n’ai pas de directions particulières pour cette pierre de connexion, mais je vous conseillerai d’aller vers le point situé au maximum vers le sud de cette île\". Avec ceci, vous devriez la trouver seul(e).</p>\n</li>\n  <li>\n<p>Suivez les directions et trouvez la 5e pierre de connexion (située au sud de la cave aux brigands, en face de l’océan, c'est la pointe Sud d'Arakas). Cliquez dessus et vous obtiendrez une dernière fois le message.</p>\n</li>\n  <li>\n<p>Enfin utilisez la tablette de pierre runique et retournez voir Antonian l’ermite. Il vous dira que vous avez trouvé toutes les pierres de connexion qu’il connaissait.</p>\n</li>\n  <li>\n<p><b>Remarque</b> : Vous pouvez enchaîner les cinq pierres de connexion sans retourner voir Antonian entre deux.</p>\n</li>\n  <li>\n<p><b>PNJ</b> impliqués</b>:</p>\n</li>\n  <li>\n<p>Kilhiam, Efnisien, Olin Haad, Grand Prêtre Gunthar, chef de Guilde Ethan, Urik le tailleur, Yrian Holenarbed, La gitane Gypsy, Frère Kiran, Kirlor Dhul, Amelia, Tarnian, l'ermite Antonian.</p>\n</li>\n  <li>\n<p><b>Mini-boss impliqués</b>:</p>\n</li>\n  <li>\n<p>Assassins, gardes d'Olin Haad, Commandant Owen, Gorlok Bloodaxe</p>\n</li>\n  <li>\n<p><b>Récompenses acquises durant la partie \"Arakas\" de la quête</b>:</p>\n</li>\n  <li>\n<p>Colère des anciens (Wrath of the Ancients aura),</p>\n</li>\n  <li>\n<p>Anneau de Vitalité (0 stats) et Gemme de Vitalité.</p>\n</li>\n  <li>\n<p>Amulette de Renouveau et Gemme de Renouveau (0 stats) ou Amulette de Régénération et Gemme de Régénération (0 stats) ou Carquois de stabilité (Trueshot's Quiver, 110 Dex, 20 For).</p>\n</li>\n  <li>\n<p>Tablette de pierre runique (Runed Stone Tablet ou RST).</p>\n</li>\n  <li>\n<p>2.000 pièces d’or.</p>\n</li>\n  <li>\n<p>450.000 xp.</p>\n</li>\n\n</ul>",
        "images": [],
        "order": 20
      },
      {
        "title": "Raven's Dust",
        "description": "<ul>\n  \n  <li>\n<p>Quand vous aurez complété votre quête d’accès à Raven’s Dust bonne ou mauvaise et accédé à Raven's Dust (n'oubliez pas de mettre votre sanctuaire au temple de Silversky), retournez voir Antonian l’ermite et cliquez dessus. Il vous demandera si vous désirez connaître plus de directions pour les pierres de connexion. Répondez \"Oui\" et il vous dira que vous avez trouvé toutes les pierres de connexion d’Arakas. Il vous dira également que vous devez retrouver son ami habitant la ville de Silversky.</p>\n</li>\n  <li>\n<p>Vous recevrez 250.000 xp.</p>\n</li>\n  <li>\n<p>Continuez le dialogue en disant \"Scribe\", \"Celui\" et il vous parlera du Barde sans Nom.</p>\n</li>\n\n</ul>",
        "images": [
          "/t4c-nms-overview/assets/quests/la-lettre-de-crimsonscale/img_21_0.jpg"
        ],
        "order": 21
      },
      {
        "title": "Le Barde sans nom",
        "description": "<ul>\n  \n  <li>\n<p>Rendez-vous à votre sanctuaire au temple de Silversky (Comme solution de secours, vous pouvez utiliser la tablette de pierre runique. La RST vous téléportera à l’est du lac tarentules. Ensuite dirigez-vous au Sud. Mais il vous faudra marcher longtemps pour arriver au temple de Silversky).</p>\n</li>\n  <li>\n<p>Parlez alors au scribe Aquinos (Scholar Aquinos). Dites \"Visite\", \"Lieu\", \"Ou\" et il vous dira où habite le Barde sans Nom. Les informations sont : Le Barde sans Nom vit au fond d’une caverne loin vers l’ouest.</p>\n</li>\n  <li>\n<p>Entrez dans la grotte et avancez, vous trouverez alors le Barde sans Nom (il a l'aspect d’une atrocité). Parlez-lui. Dites \"Punirrrr\", \"Abysses\" (<b>attention</b> : seulement 2 s), \"restes\" et il vous dira : dans un arbre, vous trouverez la sagesse, dans une fontaine, la connaissance. Où la sagesse et la connaissance fusionnent, la réponse que vous cherchez émergera.</p>\n</li>\n  <li>\n<p>Depuis le carrefour proche du Barde sans Nom, descendez vers le sud-est et trouvez l’Arbre de Sagesse (Tree of wishdom). Cliquez dessus et vous obtiendrez une Branche de sagesse. Maintenant, retournez sur vos pas et prenez le passage menant vers le nord-ouest à partir du Barde. Vous trouverez la Fontaine de Connaissance (Fountain of Knowledge). Cliquez sur la fontaine et vous utiliserez la Branche de sagesse afin de mettre en mouvement les Eaux de la Connaissance. Devant vos yeux ébahis, l’eau tourbillonne et forme un mot: ETHERE.</p>\n</li>\n  <li>\n<p><b>Vous obtenez 300.000 xp.</b></p>\n</li>\n  <li>\n<p><b>Retournez voir le Barde</b> sans Nom et parlez-lui. Il vous dira que vous avez trouvé le mot de pouvoir ouvrant les grandes portes d'un terrible mal. Elles sont situées à proximité du point le plus au nord de cette terre. Afin de l’atteindre, vous devrez traverser des zones de ténèbres. Soyez certain que si les Eaux de la Connaissance ne vous ont pas donné toutes les informations que vous recherchiez, celui qui réside derrière ces portes pourra sûrement. Le Barde vous dira aussi que c’est votre malédiction.</p>\n</li>\n  <li>\n<p>Dites \"Malédiction\" et il vous dira qu’il fût choisi un jour aussi et maudit également et qu’un jour, nous serions vengés.</p>\n</li>\n\n</ul>",
        "images": [
          "/t4c-nms-overview/assets/quests/la-lettre-de-crimsonscale/img_22_0.jpg",
          "/t4c-nms-overview/assets/quests/la-lettre-de-crimsonscale/img_22_0.jpg"
        ],
        "order": 22
      },
      {
        "title": "Le Mausolée",
        "description": "<p>Dirigez vous vers la grotte (Broken Ones cave) connue sous le nom de cave de l'aveugle (au Nord de l'île). Entrez-y, dirigez vous vers l’ouest puis le nord et continuez jusqu’à ce que vous atteigniez la sortie vers le Mausolée (Mausoleum).</p>\n<br/>\n<p>Sortez et continuez vers le nord-ouest dans le cimetière, jusqu’à ce que vous rencontriez un <b>PNJ</b> nommé \"un gardien\". Cliquez sur lui et il vous dira que le Mausolée situé derrière mène au sanctuaire de l’ancien Dieu de la Corruption, Gluriurl. Il vous dira également que seulement celui qui connaît le mot de pouvoir est autorisé à rentrer. Dites \"Mot de pouvoir\", \"Ethéré\" et il vous préviendra que le mausolée est un endroit dangereux. Dites \"Oui\" et il vous fera passer la porte.</p>",
        "images": [],
        "order": 23
      },
      {
        "title": "Les 4 vicaires",
        "description": "<p>A l’intérieur du mausolée vous devez tuer les 4 Vicaires et récupérer leurs clés en cristal. Dirigez-vous vers le nord-est jusqu’à ce que vous atteigniez une grande pièce. Continuez alors vers le sud-est et tuez le Vicaire Kervian. Récupérez la clé de cristal violette et dirigez-vous vers le nord-ouest. A la première grande pièce, continuez nord-ouest jusqu’à atteindre une autre grande pièce Dirigez-vous vers le nord-est et allez vers le nord-est le plus possible. A la fin de la route, continuez sur le chemin en direction du nord-ouest. Trouvez et tuez le Vicaire Ramiel. Récupérez la clé de cristal verte. Dirigez-vous vers le nord-ouest et suivez le chemin qui continue vers le sud-ouest. Continuez vers le sud-ouest et comptez les routes que vous rencontrerez qui se dirigent vers le sud-est. Suivez la 4e route allant vers le sud-est que vous rencontrerez et vous trouverez le Vicaire Vharnes. Tuez-le et vous obtiendrez la clé de cristal bleue. Retournez en arrière vers le nord-ouest et tournez vers le nord-est. A la première intersection, continuez vers le nord-ouest puis vers le sud-est. Continuez vers le sud-est jusqu’à ce que vous rencontriez une route allant vers le nord-ouest. Continuez vers le nord-ouest et vous trouverez un portail. Partez vers le nord-ouest à partir du portail et vous trouverez le Vicaire Ashgoth. Tuez-le et vous obtiendrez la clé de cristal rouge.</p>",
        "images": [
          "/t4c-nms-overview/assets/quests/la-lettre-de-crimsonscale/img_24_0.jpg"
        ],
        "order": 24
      },
      {
        "title": "Le dragon Crimsonscale",
        "description": "<p>Après avoir tué les 4 vicaires, revenez vers le portail et entrez-y. Suivez le tapis rouge et vous rencontrerez Crimsonscale le dragon. Parlez-lui et dites \"Lettre\", \"Commencement\", \"Elu\", \"Justice\", \"Vents\", \"Bataille des émanations\", \"Olin Haad\", \"Fasciné\", \"Changé de camp\", \"Conseil des huit\" et vous apprendrez au sujet des plans machiavéliques d’Olin Haad au sujet du <b>Conseil</b> des Huit. Crimsonscale vous demandera votre aide. Répondez \"Aide\" puis dites \"Empecher\", \"Grande Librairie\" et il vous donnera le nom du <b>lieu</b> où se situe la Grande Bibliothèque. Dites \"Quelque chose\" et il vous donnera une fiole de sang de dragon (Vial of Dragon Blood). ps: (retiré aussi)</p>\n<br/>\n<p><b>Attention</b> : Le bracelet de flammes et la gemme de flammes (Armlet of Flames et Gem of Flames) sont <b><u>supprimés</u></b> sur NMS !!</p>",
        "images": [],
        "order": 25
      },
      {
        "title": "La grande bibliothèque",
        "description": "<ul>\n  \n  <li>\n<p>Dirigez-vous vers la Grande Bibliothèque (située à l’est de l’entrée de la crypte de Raven’s Dust), allez au 3e étage et parlez avec le Conservateur (Custodian). Dites \"Barbares\", \"Incultes\", \"Rite de Passage\" et il vous donnera une énigme afin que vous lui prouviez que vous n’êtes pas ignorant. La voici:</p>\n</li>\n  <li>\n<p>\"Dos\" \"vaneslae\" \"navidal\", \"Kadrim\" \"lok\" \"ungrim\" \"dok\", \"Somalina\" \"oundi\" \"inesora\", \"Tharrgra\" \"nethdrovar\". Si vous pouvez me dire ce que cela signifie, non seulement je vous concéderai l’accès au dernier étage mais je serai en plus gentil avec vous. Voici un <b>indice</b>: vous serez incapable de résoudre cette énigme si vous n’allez pas visiter le sous-sol de la Bibliothèque.</p>\n</li>\n  <li>\n<p>Dirigez-vous vers les sous-sols où les 4 savants résident. Parlez-leur.</p>\n</li>\n  <li>\n<p>Au savant disant \"language of the Elves\" (Pièce au nord-ouest), dites \"Dos vaneslae navidal\". Il répondra: \"Pour regarder quelqu'un\".</p>\n</li>\n  <li>\n<p>Au savant disant \"language of the Dwarves\" (Pièce au sud-ouest), dites \"Kadrim lok ungrim dok\". Il répondra: \"Il suffit d'avoir des yeux\".</p>\n</li>\n  <li>\n<p>Au savant disant \"language of Faeries\", (Pièce au nord-est), dites \"Somalina Oundi Inesora\". Il répondra: \"Pour reconnaitre sa propre ignorance\".</p>\n</li>\n  <li>\n<p>Au savant disant \"language of Dragons\" (Pièce au sud-est), dites \"Tharrgra nethdrovar\". Il répondra: \"Il faut ouvrir ses yeux\".</p>\n</li>\n  <li>\n<p>Retournez au 3e étage et reparlez avec Custodian. Dites \"Oui\", \"Pour regarder quelqu'un\", \"Il suffit d'avoir des yeux\", \"Pour reconnaitre sa propre ignorance\", \"Il faut ouvrir ses yeux\" et vous obtenez l’accès complet à la Bibliothèque. Dites \"Accès\", \"Oui\" et vous serez téléporté au 4e étage.</p>\n</li>\n  <li>\n<p>Parlez à un des bibliothécaires. Dites \"Oui\", \"Echange de l'essence\", \"Corps materiel\", \"Ogrimar\", \"Lothar le juste\", \"Abandonna\", \"Elvenweave\", \"Coeur\" et vous réaliserez que Olin Haad tente de ramener Gluriurl à la vie.</p>\n</li>\n  <li>\n<p><b>Vous recevez 500.000 xp.</b></p>\n</li>\n  <li>\n<p>Parlez aux deux autres bibliothécaires et écoutez-les. L’un vous parlera de la pierre noire et l’autre du \"Harbringer\". Dirigez vous vers le château d’Olin Haad.</p>\n</li>\n\n</ul>",
        "images": [],
        "order": 26
      },
      {
        "title": "Retour chez Olin Haad en son château",
        "description": "<p>Une fois au château, parlez à Olin Haad. Dites \"Defi\" et vous serez téléporté dans une petite pièce avec Olin Haad. Il vous attaquera et comme vous ne pouvez pas le tuer, laissez le vous massacrer mais juste avant le coup final, vous serez téléporté de retour au château. Dites \"Invincible\", \"Heros\", \"Insidieuse voix\", \"Restes\" et vous saurez tout sur la résurrection de Gluriurl.</p>",
        "images": [],
        "order": 27
      },
      {
        "title": "Retour chez Gunthar au temple",
        "description": "<p>Retournez voir Gunthar et parlez-lui. Dites \"Benediction d' Artherk\", \"Âmes\", \"Stopper\", \"Débarrasser\", \"Faucheur\", \"Illusion\", \"Recemment\", \"Trompais\", \"Coeur d' Artherk\", \"Efnisien\" et vous apprendrez au sujet du Caledbolg, qui est gardé en sécurité en un <b>lieu</b> saint dans la partie sud-est du désert de Raven’s Dust. Il vous dira également que vous devez aller voir Efnisien.</p>",
        "images": [],
        "order": 28
      },
      {
        "title": "Retour chez Efnisien (1er étage de la maison au nord de la banque)",
        "description": "<p>Allez voir Efnisien et dites-lui \"Service\", \"Entrée\" et il vous dira que l’entrée est située dans la pièce située derrière la porte verrouillée (servez-vous des escaliers de cette pièce). Mais Olin Haad a trouvé un moyen alternatif pour y rentrer et il est à l’intérieur du temple maintenant. Il ne vous servira à rien d’entrer puisque vous ne pouvez pas le battre sans une arme spéciale (Caledbolg, l’arme enchantée).</p>",
        "images": [],
        "order": 29
      },
      {
        "title": "La Caledbolg (crypte du désert RD)",
        "description": "<ul>\n  \n  <li>\n<p>Vous devez trouver la Caledbolg. Allez dans le désert de Raven’s Dust et dirigez vous vers le sud jusqu’à ce que vos atteignez une nouvelle rangée de montagnes. Cherchez l’entrée de la crypte vers l'Est. En face de celle-ci se situe le gardien de la porte nommé Ramirgo. Parlez-lui et dites \"Gardien\", \"Entre\" et il vous téléportera à l’intérieur.</p>\n</li>\n  <li>\n<p>Suivez le mur du donjon et tuez les 3 démons Terror Demon, Chaos Demon et Darkness Demon.</p>\n</li>\n  <li>\n<p>Maintenant dirigez-vous vers le milieu du donjon où vous trouverez 3 portails. Entrez dans l’un des trois et vous arriverez dans une petite pièce. Cliquez sur Lothar et vous recevrez la Caledbolg (une fois la Caledbolg obtenue, vous ne pourrez plus pénétrer dans la crypte).</p>\n</li>\n  <li>\n<p></li>\n  <li></p>\n</li>\n  <li>\n<p><b>PNJ</b> impliqués</b>: l'ermite Antonian, Aquinos, le Barde sans Nom, un gardien, Crimsonscale, Custodian, les 4 savants (the 4 Scholars), les 3 bibliothécaires (the 3 Librarians), Olin Haad, Grand Prêtre Gunthar, Efnisien, Ramirgo, Lothar</p>\n</li>\n  <li>\n<p><b>Mini-boss impliqués</b>: Vicaire Asgoth, Vicaire Kervian, Vicaire Vharmes, Vicaire Ramiel, Terror Demon, Chaos Demon, Darkness Demon</p>\n</li>\n  <li>\n<p><b>Récompenses acquises durant la partie \"Raven’s Dust\" de la quête</b>: Fiole de sang de dragon (vial of Dragon Blood), 1.050.000 xps</p>\n</li>\n\n</ul>",
        "images": [
          "/t4c-nms-overview/assets/quests/la-lettre-de-crimsonscale/img_30_0.jpg"
        ],
        "order": 30
      },
      {
        "title": "Retour sur Arakas",
        "description": "<p>Cliquez sur lui et il déverrouillera la porte du rez-de chaussée. Descendez au sous-sol et entrez dans le Temple Sacré de Lothar.</p>",
        "images": [
          "/t4c-nms-overview/assets/quests/la-lettre-de-crimsonscale/img_31_0.jpg"
        ],
        "order": 31
      },
      {
        "title": "Le Temple de Lothar",
        "description": "<p>Dirigez-vous au nord, vers le centre du temple et vous verrez un Draconis nommé \"Le Gardien\" (Draconis Guardian). Il est encore vivant alors parlez-lui. Il vous demandera si vous venez de la part d’Efnisien. Répondez \"Oui\", \"Dragon\", \"Prophétie\", \"Stopper\", \"chambre mortuaire\" et vous en apprendrez plus au sujet de la prophétie. Il vous dira également que vous devez pénétrer à l’intérieur du portail derrière lui afin de stopper Olin Haad.</p>",
        "images": [],
        "order": 32
      },
      {
        "title": "Les 5 cristaux",
        "description": "<ul>\n  \n  <li>\n<p>Le portail comporte 5 ouvertures correspondant à 5 cristaux. Afin de pouvoir activer le portail, vous devez trouver ces 5 cristaux: un rouge, un jaune, un bleu, un vert et un violet.</p>\n</li>\n  <li>\n<p>Regardez la carte pour voir où sont situés les 5 épreuves.</p>\n</li>\n  <li>\n<p><i><b>Pour le cristal bleu</b></i>, vous entrerez dans un labyrinthe dont les murs sont invisibles.</p>\n</li>\n  <li>\n<p>Suivez les flèches afin de sortir du labyrinthe, ouvrez le coffre (chest) et le cristal tombera dans votre sac.</p>\n</li>\n  <li>\n<p>Rentrez dans le portail et vous arriverez juste à l’entrée du labyrinthe.</p>\n</li>\n  <li>\n<p><i><b>Pour le cristal jaune</b></i>, vous devez tuer des Kraanians piétineurs jusqu’à ce qu’ils laissent tomber un cristal.</p>\n</li>\n  <li>\n<p>Une fois un cristal au sol, ramassez le (il est indroppable).</p>\n</li>\n  <li>\n<p>Puis poursuivez...</p>\n</li>\n  <li>\n<p><i><b>Pour le cristal vert</b></i>, vous devez traverser un grand labyrinthe. Vous arriverez à un coffre.</p>\n</li>\n  <li>\n<p>Ouvrez-le (2 fois) et le cristal vert tombera dans votre sac.</p>\n</li>\n  <li>\n<p>Rentrez dans le portail et vous arriverez à l’entrée de ce labyrinthe.</p>\n</li>\n  <li>\n<p><i><b>Pour le cristal rouge</b></i>, suivez le corridor et entrez dans le tourbillon au sol.</p>\n</li>\n  <li>\n<p>Vous arriverez dans un labyrinthe de tourbillons. Faites votre bonhomme de chemin jusqu’au coffre. Ouvrez-le et le cristal tombera dans votre sac. Entrez dans le portail et vous arriverez à côté du portail du 1er étage.</p>\n</li>\n  <li>\n<p>Légende de la carte ci-contre : S : Start (départ) ; Follow the numbers (suivez les numéros).</p>\n</li>\n  <li>\n<p><b>Pour le cristal violet</b>, vous devez fouiller 7 coffres différents.</p>\n</li>\n  <li>\n<p>Le cristal est placé aléatoirement dans un des coffres.</p>\n</li>\n  <li>\n<p>Trouvez-le et revenez au centre du temple.</p>\n</li>\n\n</ul>",
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
        "description": "<ul>\n  \n  <li>\n<p><b>N'oubliez pas de parlez au gardien</b> si vous ne l'avez pas encore fait !</p>\n</li>\n  <li>\n<p>Entrez maintenant dans le portail situé derrière Le Gardien et vous arriverez dans le tombeau. Allez alors vers le sud-est et vous trouverez Olin Haad. Equipez-vous de la Caledbolg et attaquez-le. Il mentionnera que le rituel est complet. Dès que vous l’aurez tué, Gluriurl, Dieu de la Corruption, apparaîtra.</p>\n</li>\n  <li>\n<p>Un message en lettres bleues apparaîtra à tous les joueurs : <b>\"Le ciel s'obscurcit soudainement…\"</b></p>\n</li>\n  <li>\n<p>(parfois Gluriurl sera déjà activé par un joueur précédent qui aura échoué à le tuer)</p>\n</li>\n  <li>\n<p>Attaquez Gluriurl et tuez-le (n’oubliez pas de retirer rapidement la Caledbolg et de vous réarmer). Une fois tué, le message suivant apparaîtra :</p>\n</li>\n  <li>\n<p>Vous entendez soudainement la voix de la Gitane : \"Vous avez vaincu le Dieu de la Corruption ! Venez me voir dès quand vous le pourrez. Je dois vous remercier personnellement pour tout ce que vous avez fait\".</p>\n</li>\n  <li>\n<p>Et les lettres bleues, encore une fois pour tous les joueurs : <b>\"La terre se met à trembler violemment pendant quelques secondes…\".</b></p>\n</li>\n  <li>\n<p><b>Attention</b> ! Gluriurl est très fort. Si vous êtes seul il vous faudra dépasser largement le level 100 (selon votre classe) pour l'affronter.</p>\n</li>\n\n</ul>",
        "images": [],
        "order": 34
      },
      {
        "title": "Retour chez la Gitane",
        "description": "<p>Maintenant, retournez voir la Gitane pour votre récompense. Répondez \"Quatrième Prophétie\", \"gardiens respectifs\" et vous serez récompensé d’une amulette de rajeunissement, d’une pierre de rajeunissement, d’une amulette d'abondance, d’une pierre d'abondance et d’un carquois de stabilité rouge.</p>\n<br/>\n<p><b>Conseil</b> :</b> Après avoir tué Gluriurl, allez parler à Efnisien, il vous débarrassera de la gemme sombre. Par contre, seul un GM pourra vous débarasser de la Caledbolg.</p>\n<br/>\n<p><b>PNJ</b> impliqués</b>: Efnisien, Le Gardien Draconis, la Gitane</p>\n<br/>\n<p><b>Mini-boss impliqués</b>: Olin Haad, Gluriurl</p>\n<br/>\n<p><b>Récompenses acquises durant la dernière partie de la quête:</b></p>\n<br/>\n<ul>\n  <li>Amulette de Rajeunissement</li> <li>Pierre de Rajeunissement</li> <li>Amulette d'Abondance</li> <li>Pierre d'Abondance (0 stats)</li> <li>Carquois de Stabilité rouge (220 Dex, 30 Force).</li>\n</ul>\n<br/>\n<p><br/></p>\n<br/>\n<p></p>",
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
        "description": "<ul>\n  \n  <li>\n<p>Près du temple de Lighthaven se trouve un <b>PNJ</b> (vêtu de bleu) appelé Samaritain de Lighthaven. Parlez lui et il vous demandera si vous avez des questions à poser. Dites \"<b>Oui</b>\" puis \"<b>Tâche</b>\". Il vous donnera votre première quête qui sera de tuer 15 rats dans les sous-sols du temple. Allez les tuer, puis retournez le voir en disant \"<b>Oui</b>\" puis \"<b>Tâche</b>\". Il vous récompensera avec 2.500 points d'expérience.</p>\n</li>\n  <li>\n<p><b>Note</b> :</b> Au niveau 1, les rats peuvent vous donner du fil à retordre. Au premier sous-sol du temple (dans une pièce située au Nord puis à l'Ouest), se trouve un <b>PNJ</b> appelé Nevanis. Dites lui \"<b>Guérir</b>\" et il vous soignera. Restez près de lui et dès que vous serez en difficulté, dites lui \"<b>Guérir</b>\".</p>\n</li>\n  <li>\n<p><b>Note</b> 2</b> : Zélina au temple vous bénira pour 1000 po (approchez-vous d'elle et dites-lui \"bénédiction\"). Vous aurez un bonus de 600PV pour <b>40 minutes cumulable à une bénédiction classique.</b></p>\n</li>\n  <li>\n<p><b>PNJs</b> concernés: </b>Le samaritain de Lighthaven, Nevanis (facultatif)</p>\n</li>\n  <li>\n<p><b>Récompense</b> obtenue:</b> <b><u>2.500 Points d'expérience</u></b></p>\n</li>\n\n</ul>",
        "images": [],
        "order": 0
      },
      {
        "title": "La quête de l'or du dragon (bonifiée) (non répétable)",
        "description": "<p>A Lighthaven, entre la fontaine et le cimetière, se trouve un dragon nommé Darkfang (vous ne pouvez pas le louper). Dites lui \"<b>Or</b>\", \"<b>Oui</b>\" et il vous donnera 5.000 pièces d'or. De plus, tant que vous n'aurez pas atteint le niveau 6, vous pourrez lui dire \"<b>Soin</b>\" et il guérira partiellement vos blessures.</p>\n<br/>\n<p><b>PNJ</b> concerné: </b>Darkfang</p>\n<p style=\"text-align: left;\"><b>Récompense</b> obtenue:</b> <b><u>5000 pièces d'or</u></b> (200 à l'origine)</p>",
        "images": [],
        "order": 1
      },
      {
        "title": "La quête du pilleur de tombe (bonifiée) (non répétable)",
        "description": "<ul>\n  \n  <li>\n<p>Allez parler à Darkfang (le dragon de Lighthaven) et dites lui \"<b>Pilleur de tombe</b>\". Il vous demandera de tuer le pilleur de tombe. Vous le trouverez dans la crypte sous le cimetière. Tuez-le et retournez voir Darkfang. Dites lui \"<b>Pilleur de tombe</b>\" et il vous récompensera avec 40 k points d'expérience !!</p>\n</li>\n  <li>\n<p><b>Note</b> #1:</b> Pour tuer facilement le pilleur de tombe, laissez les momies l'attaquer. Quand il devient \"rouge\", achevez le (attention, souvent il y a trop de momies et dans ce cas vous devrez vous depêcher)</p>\n</li>\n  <li>\n<p><b>Note</b> #2:</b> S'il est tué, il faut attendre environ 30 minutes avant qu'il ne réapparaisse.</p>\n</li>\n  <li>\n<p><b>PNJ</b> concerné: </b>Darkfang</p>\n</li>\n  <li>\n<p><b>Mini-Boss concerné: </b>Le pilleur de tombe</p>\n</li>\n  <li>\n<p><b>Récompense</b> obtenue:</b> <b><u>40.000 points d'expérience</u></b> !</p>\n</li>\n\n</ul>",
        "images": [],
        "order": 2
      },
      {
        "title": "La quête des ailes de chauve-souris (bonifiée) (non répétable)",
        "description": "<ul>\n  \n  <li>\n<p>Au sous-sol -2 du temple de Lighthaven vivent des chauves-souris <b>mort-vivantes</b> (ne vous trompez pas). Tuez-en jusqu'à l'obtention d'ailes de chauve-souris putrides. Apportez-en une paire à la tour des mages de Lighthaven (à l'Est puis Nord de Lighthaven). Vous y trouverez un <b>PNJ</b> du nom d'Uranos. Dites lui \"<b>Travail</b>\", \"<b>ingrédient</b>\" et il vous demandera de lui rapporter un ingrédient.</p>\n</li>\n  <li>\n<p>[Etape facultative : pour connaître cet ingrédient, il vous faut aller voir Marsac Cred et lui demander quel est le composant. Marsac Cred habite à Windhowl à la Tour des mages. Dites lui \"<b>Uranos</b>\". Il vous révélera que le composant recherché consiste en des ailes de chauve-souris].</p>\n</li>\n  <li>\n<p>Retournez voir Uranos et dites lui \"<b>Ailes de chauve-souris</b>\". Il vous donnera en <b>récompense</b> une dague du crâne et 30k points d'expérience !!</p>\n</li>\n  <li>\n<p><b>Note</b> #1:</b> Vous pouvez directement dire \"<b>Ailes de chauve-souris</b>\" à Uranos (il n'est pas nécessaire d'aller voir Marsac Cred)</p>\n</li>\n  <li>\n<p><b>Note</b> #2:</b> Il se peut qu'Uranos ne veuille pas de vos ailes de chauve-souris si quelqu'un a effectué la quête récemment. Dans ce cas, revenez plus tard (10 ou 20 minutes).</p>\n</li>\n  <li>\n<p><b>PNJs</b> concernés: </b>Uranos, Marsac Cred (Facultatif)</p>\n</li>\n  <li>\n<p><b>Récompenses obtenues:</b> <b><u>30.000 points d'expérience</u></b> ! une dague du crâne (12 For, 43 Int, 15 Sag)</p>\n<p style=\"text-align: center;\"></p>\n</li>\n\n</ul>",
        "images": [],
        "order": 3
      },
      {
        "title": "La quête de Dorken le putride ((+ karma))",
        "description": "<ul>\n  \n  <li>\n<p>Au Nord-Ouest de Lighthaven (au dessus des montagnes), apparaît de temps à autre Dorken le putride (un gobelin jaune).Tuez-le et l'un des <b>PNJ</b> suivant tombera malade.</li>\n  <li><b>1.</b> Si <b>Geena</b> est malade</p>\n</li>\n  <li>\n<p>Allez la voir à la taverne de Lighthaven. Parlez lui et elle vous dira qu'elle est malade. .Elle vous demandera de parler à Halam, (lui aussi dans la taverne). il vous enverra voir Mushn qui se trouve dans les champs de Windhowl (au Sud après l'entrée). Parlez lui et il vous donnera un antidote. Ramenez-le à Genna qui vous remerciera. Pour finir, allez voir Halam qui vous récompensera par un anneau de l'ours ou une ceinture de courage.</p>\n</li>\n  <li>\n<p><b>2.</b> Si <b>Kalastor</b> est malade</p>\n</li>\n  <li>\n<p>Kalastor se trouve à l'Est de la fontaine de Lighthaven. Il vous demandera de trouver le fouineur à Windhowl (à l'Est du temple, près du marchand d'armes <b>1715,1180,0</b>). Parlez-lui et il vous donnera une potion de Pureté pour 800 pièces d'or. Dites \"<b>Oui</b>\" et retournez voir Kalastor. Pour l'avoir guéri, il vous récompensera de (1500 + (200 * Niveau)) pièces d'or.</p>\n</li>\n  <li>\n<p><b>3.</b> Si <b>Murmuntag</b> est malade</p>\n</li>\n  <li>\n<p>Murmuntag (un orc) traîne toujours à côté de la fontaine de Lighthaven. Il vous demandera un sachet de poudre jaune. Ce sachet s'obtient en tuant Araf Kul ou Roshnak Tul (camp orc). <span style=\"color: #ff0000;\"><b>Attention</b>:</span> Araf Kul et Roshnak Tul sont dangereux pour des bas niveaux. N'essayez pas de faire cette quête avant d'avoir atteint le niveau 15 ou même 18. Et n'oubliez pas de prendre un stock de potions :-) Le sachet de poudre jaune ne s'obtient pas à chaque fois et vous devrez sans doute les tuer plusieurs fois avant d'en obtenir un. Une fois en possession de ce sachet, retournez voir Murmuntag. Donnez-lui le sachet de poudre jaune et il sera guéri. En récompense, il vous offrira (1000 + (100 * votre niveau)) en points d'expérience.</p>\n</li>\n  <li>\n<p><b>PS: </b>Les grands Shamans orcs dropent aussi de la poudre jaune.</p>\n</li>\n  <li>\n<p><b>Note</b> #1:</b></p>\n</li>\n  <li>\n<p>Un moyen de vaincre relativement facilement Araf Kul et Roshnak Tul si vous êtes un guerrier (ou si vous combattez au corps à corps) est de vous approchez de lui lentement, en tuant tous les orcs que vous rencontrerez sur votre chemin. N'hésitez pas à battre en retraite si vous êtes submergé. Nettoyez toute la zone puis attaquez-le quand il est seul. Par contre, si vous êtes un mage, utilisez des sorts de feu/terre et absorption de vie mineure pour regagner des points de vie.</p>\n</li>\n  <li>\n<p><b>Note</b> #2:</b> Vous pouvez effectuer cette quête à volonté.</p>\n</li>\n  <li>\n<p><b>PNJs</b> concernés: </b>Geena/Kalastor/Murmuntag, Mushn (facultatif), Halam (facultatif), Le fouineur (facultatif)</p>\n</li>\n  <li>\n<p><b>Mini-Boss concernés: </b>Dorken le putride, Araf Kul / Roshnak Tul (facultatif)</p>\n</li>\n  <li>\n<p><b>Récompenses obtenues:</b></li>\n  <li>Ceinture de courage (26 Int, 28 Sag) ou un anneau de l'ours (20 Int, 23 Sag) si Geena tombe malade /</li>\n  <li>(1500 + (200 * votre niveau)) pièces d'or si Kalastor tombe malade /</li>\n  <li>(1000 + (100 * votre niveau)) points d'expérience si Murmuntag tombe malade.</p>\n<p style=\"text-align: center;\"></p>\n</li>\n\n</ul>",
        "images": [],
        "order": 4
      },
      {
        "title": "La quête du livre de Feylor (bracelet de saphir)",
        "description": "<ul>\n  \n  <li>\n<p>Allez voir Lantalir Glawtar chez les druides d'Arakas. Dites lui \"<b>travail</b>\" , \"<b>Tâche</b>\" et il vous apprendra qu'il est à la recherche du livre de Feylor qui se trouve dans la cité perdue. Munissez vous d'une \"clé de fer\" et allez dans le labyrinthe d'Arakas . Trouvez la sortie qui mène à la cité perdue et dirigez-vous vers le Nord-Ouest (<b>attention</b> au dragon !). Le livre de Feylor se trouve dans un coffre . Ouvrez-le et prenez le livre de Feylor. Retournez voir Lantalir Glawtar dites lui \"<b>livre de Feylor</b>\". Il vous récompensera avec un bracelet de saphir et 2500 points d'expérience.</p>\n</li>\n  <li>\n<p><b>Note</b>:</b> Vous pouvez effectuer cette quête à volonté.</p>\n</li>\n  <li>\n<p><b>PNJ</b> concerné: </b>Lantalir Glawtar</p>\n</li>\n  <li>\n<p><b>Récompenses obtenues:</b> 2500 points d'expérience, bracelet de saphir (33 Int, 33 Sag)</p>\n</li>\n\n</ul>",
        "images": [],
        "order": 5
      },
      {
        "title": "La quête de la fiole de liquide bleuté (bonifiée)",
        "description": "<ul>\n  \n  <li>\n<p>Allez voir Dunikus Cathbad chez les druides d'Arakas. Dites lui \"<b>Travail</b>\" et il vous dira qu'il peut fabriquer \"une potion de liquide bleuté\" si vous lui ramenez une \"feuille d'arbre rose\" et une \"pomme\". Vous obtiendrez la feuille d'arbre rose en tuant Araf Kul (il dropera plus souvent une potion hélas) et la pomme s'achète chez Fali (la marchande de potions de Lighthaven) pour 5 pièces d'or. Une fois ces deux ingrédients obtenus, retournez voir Dunikus Cathbad et dites lui \"<b>potion</b>\", \"<b>Oui</b>\". Il vous donnera une fiole de liquide bleuté et 125K xp !!</p>\n</li>\n  <li>\n<p><b>Note</b>:</b> Vous pouvez effectuer cette quête à volonté.</p>\n</li>\n  <li>\n<p><b>PNJ</b> concerné: </b>Dunikus Cathbad</p>\n</li>\n  <li>\n<p><b>Mini-Boss concerné: </b>Araf Kul (facultatif)</p>\n</li>\n  <li>\n<p><b>Récompense</b> obtenue:</b> Fiole de liquide bleuté (potion de soin +100 PV, 5 utilisations), <b><u>125.000 XP</u></b></p>\n</li>\n\n</ul>",
        "images": [],
        "order": 6
      },
      {
        "title": "La quête de la pierre de vie (scalpel du chirurgien ou lame des ténèbres) (chronométrée)",
        "description": "<p>Vous avez 3 possibilités pour faire cette quête selon ce que vous voulez mais le début est commun.</p>\n<br/>\n<p><b>Attention</b> : La quête ne se remet pas à zéro si on la commence et qu'on ne donne pas la pierre obtenue au Druide Yrian Holenarbed (aux Druides Arakas). Il existe un délai de 2 heures avant qu'elle ne soit réinitialisée automatiquement.</p>\n<br/>\n<p>Quand vous cliquez sur le druide, surveillez bien les dialogues, cela a une grosse importance.</p>\n<br/>\n<p>Réponses d'Yrian Holenarbed (Druide d'Arakas) :</p>\n<br/>\n<p>--{Yrian Holenarbed}\":\" Vous avez sauvé la région mon enfant. Je le savais que vous étiez le voyageur envoyé par les vents. Je le savais.</p>\n<br/>\n<p>&lt;&lt; c’est le message Standard quand vous cliquez dessus, rien de spécial &gt;&gt;</p>\n<br/>\n<p>--{Yrian Holenarbed}\":\" Souvenez-vous : nous devons protéger la nature, sans quoi nous mourrons tous.</p>\n<br/>\n<p>&lt;&lt; c’est le message Standard quand vous cliquez sur \"au revoir\", rien de spécial &gt;&gt;</p>\n<br/>\n<p>Si vous cliquez sur lui (il répond \"vous avez sauvé....\") et dites \"pierre de vie\", là vous avez 3 messages possibles.</p>\n<br/>\n<p><b>-<u>1-</u></b> {Yrian Holenarbed}\":\" On nous a volé notre précieuse pierre de vie, mais elle ne présente aucun danger maintenant. Nous avons réglé le problème très rapidement.</p>\n<br/>\n<p>&lt;&lt;La quête a été remise à zéro. Surveillez bien ce message vous l'aurez qu'une fois &gt;&gt;</p>\n<br/>\n<p><b><u>-2-</u></b> {Yrian Holenarbed}\":\" La pierre de vie est un moyen de défense pour protéger la nature contre le mal. Cette pierre ne doit surtout pas tomber entre de mauvaises mains, sinon d'horribles évènements pourraient survenir. Si elle est volée, nous pourrons en créer une nouvelle après un certain temps. La pierre précédente sera alors vidée de toute énergie et de tout pouvoir.</p>\n<br/>\n<p>&lt;&lt; La quête est prête à être activée &gt;&gt;</p>\n<br/>\n<p>Comment ça marche pour que la quête s’active ? En fait quand vous avez ce message la quête ne se lance pas automatiquement. Il y a un .roll automatique (lancer de dé) sur le PNJ.</p>\n<br/>\n<p>Un timer est initialisé entre zéro et 10 minutes. Et même si on clic avant le délai ça ne change rien d’où l’impression de rallonger le temps ce qui est faux. Donc flooder ou pas ne change rien. Cela peut être très long si pas chanceux. (vérification de source sûre pour le .roll)</p>\n<br/>\n<p>Redites-lui \"pierre de vie\" de temps en temps....</p>\n<br/>\n<p>Entre temps, comme vous êtes prévoyant, allez chercher un diamant dans le coffre situé à l'Est au bord de l'eau, juste au dessus du Commandant Owain.</p>\n<br/>\n<p><b><u>-3-</u></b> {Yrian Holenarbed}\":\" C'est terrible, mon ami ! On a volé la pierre de vie ! Vous devez la récupérer pour nous, sans quoi nous serons sans défense face aux gobelins et aux immortels. Nous avons aperçu le voleur : il semble que ce soit le chef Orc renégat, le général des armées de Jarko. Si jamais la pierre tombe entre les mains de Jarko...</p>\n<br/>\n<p>&lt;&lt; la quête est activée, et vous prêt à aller chercher la pierre (quête chronométrée) &gt;&gt;</p>\n<br/>\n<p>Rendez-vous au -3 de Jarko. Une fois chez le chef Orc renégat,dite-lui \"pierre de vie\", il vous dira juste qui l'a : c’est soit Asarr (ville des voleurs) soit le troll d'Arakas. Si c'est le troll assurez-vous d'avoir le diamant. Si c'est Asarr, il vous demandera de l’or. Si vous avez plusieurs persos vous pouvez en mettre un à chacun des 2 emplacements. Il faut garder à l’esprit que c'est un vol donc n'importe qui peut voler la pierre, quelqu'un qui serait plus rapidement que vous sur place peut la voler. Solo vous pouvez prendre une chance en allant à l'un ou l'autre sans passer par le chef renégat.</p>\n<br/>\n<p>Ce message reste tant que la quête n'est pas remise à zéro (au bout de 2 heures) donc assurez vous que personne n'est en train de la faire et qu'elle n'a pas été faite depuis peu.</p>\n<br/>\n<p><b><u>1ère possibilité</u> (pour ceux qui veulent la pierre de vie pour ensuite crafter les braies du don de soi) :</b></p>\n<br/>\n<ul>\n  <li>Quand vous aurez obtenu la pierre de vie (grâce à Mhorgwloth ou Asarr) vous aurez ce que vous vouliez. Ne retournez pas voir Yrian avec la pierre dans votre sac, sinon il la reprendait.</li>\n</ul>\n<br/>\n<p><b><u>2ème possibilité</u> (pour le scalpel du chirurgien) :</b></p>\n<br/>\n<ul>\n  <li>Quand vous aurez obtenu la pierre de vie (grâce à Mhorgwloth ou Asarr), retournez voir Yrian Holenarbed. Dites lui \"<b>pierre de vie</b>\" et il vous récompensera avec un scalpel de chirurgien.</li>\n</ul>\n<br/>\n<p><b><u>3ème possibilité</u> (pour la lame des ténèbres) :</b></p>\n<br/>\n<ul>\n  <li>Quand vous aurez obtenu la pierre de vie (grâce à Mhorgwloth ou Asarr) allez la donner à Araknor (derrière le temple de Lighthaven) et non à Yrian Holenarbed. Dites lui \"<b>pierre de vie</b>\" et il vous donnera une lame des ténèbres.</li> <li>J'ai essayé avec une pierre provenant de mon coffre pour la donner à Araknor qui répond}\":\" Cette pierre ne valait rien ! Bah ! La poussière retourne à la poussière... elle retournera à sa place\".</li> <li>J'ai essayé de 3 autres façons et j'ai perdu 3 pierres de vie.</li> <li>Au 4ème essai j'ai essayé avec le même perso d'activer la quête et d'aller chercher la pierre chez l'un des <b>PNJ</b> puis retourner direct chez Araknor sans la déposer au coffre ou à terre et là je l'ai eue. J'ai répété 3 fois comme celà et j'ai réussi à chaque fois donc celà semble la bonne méthode de tout faire avec le même perso pour cette possibilité.</li>\n</ul>\n<br/>\n<p><b>Note</b>:</b> Vous pouvez effectuer cette quête à volonté.</p>\n<br/>\n<p><b>PNJs</b> concernés: </b>Yrian Holenarbed, Asarr (facultatif), Mhorgwloth (facultatif), chef orc renégat (facultatif), Araknor (facultatif)</p>\n<br/>\n<p><b>Récompenses obtenues:</b> Scalpel de chirurgien (30 Force, 50 Sag, 30 Int) pour la 2ème possibilité / Lame des ténèbres (68 Force, 19 Int, 21 Sag) pour la troisième possibilité.</p>",
        "images": [],
        "order": 7
      },
      {
        "title": "La quête du bouclier de Windhowl ((-karma))",
        "description": "<ul>\n  \n  <li>\n<p>Allez à Windhowl et trouvez le <b>PNJ</b> nommé \"un gardien blessé\" (première maison à gauche quand on rentre dans la ville). Parlez lui et il vous racontera qu'il a été blessé par un troll. Il vous demandera de le venger en tuant le troll. Allez voir Mhorgwloth le troll (à l'Ouest de la montagne de Jarko) et tuez le. <span style=\"color: #ff0000;\">(-2 karma)</span> et retournez à Windhowl. Dites \"<b>Troll</b>\" au gardien blessé et il vous donnera le bouclier de Windhowl.</p>\n</li>\n  <li>\n<p><b>PNJ</b> concerné: </b>un gardien blessé</p>\n</li>\n  <li>\n<p><b>Mini-Boss concerné: </b>Mhorgwloth le Troll</p>\n</li>\n  <li>\n<p><b>Récompense</b> obtenue:</b> bouclier de Windhowl (60 End, 26 Int, 23 Sag).</p>\n<p style=\"text-align: center;\"></p>\n</li>\n\n</ul>",
        "images": [],
        "order": 8
      },
      {
        "title": "La quête du sachet de poudre jaune",
        "description": "<ul>\n  \n  <li>\n<p>Ce sachet s'obtient en tuant Araf Kul ou Roshnak Tul (camp orc). Le sachet de poudre jaune ne s'obtient pas à chaque fois et vous devrez sans doute les tuer plusieurs fois avant d'en trouver un (c'est chaud, soyez 15 ou 18 avant d'essayer). Quand vous en aurez un, retournez à la tour des mages de Lighthaven et allez voir Lothan. Dites lui \"<b>poudre jaune</b>\" et il vous donnera un anneau de l'initié ou des gants de duelliste.</p>\n</li>\n  <li>\n<p><b>Note</b> #1:</b> Un moyen de vaincre relativement facilement Araf Kul et Roshnak Tul si vous êtes un guerrier (ou si vous combattez au corps à corps) est de vous approcher de lui lentement, en tuant tous les orcs que vous rencontrerez sur votre chemin. N'hésitez pas à battre en retraite si vous êtes submergé. Nettoyez toute la zone puis attaquez-le quand il est seul. par contre, si vous êtes un mage, utilisez des sorts de feu/terre et absorption de vie mineur pour regagner des points de vie.</p>\n</li>\n  <li>\n<p><b>Note</b> #2:</b> Vous pouvez effectuer cette quête à volonté.</p>\n</li>\n  <li>\n<p><b>PNJ</b> concerné: </b>Lothan</p>\n</li>\n  <li>\n<p><b>Mini-Bosses concernés: </b>Araf Kul / Roshnak Tul</p>\n</li>\n  <li>\n<p><b>Récompenses obtenues:</b> anneau de l'initié (23 Int, 24 Sag) ou gants du duelliste (45 End, 27 Int, 33 Sag).</p>\n<p style=\"text-align: center;\"></p>\n</li>\n\n</ul>",
        "images": [],
        "order": 9
      },
      {
        "title": "La quête du nécessaire à écriture runique (bonifiée)",
        "description": "<p>Allez à la tour des mages de Lighthaven et parlez à Iraltok. Dites lui \"<b>nécessaire à écriture runique</b>\" et il vous demandera de lui apporter un sachet de poudre jaune, une fiole de sang de gobelin, une plume, un diamant, une fiole de venin d'araignée et 1000 pièces d'or.</p>\n<br/>\n<ul>\n  <li>Le sachet de poudre jaune est obtenue avec Araf Kul ou Roshnak Tul</li> <li>La fiole de sang de gobelin avec les chefs gobelins, chefs de guerre gobelins, généraux gobelins et le comte Hemogoblin</li> <li>La plume avec les chefs gobelins, les chefs de guerre gobelins et les shamans orcs</li> <li>La fiole de venin d'araignée avec les araignées noires du labyrinthe d'Arakas (assez rare).</li> <li>Le diamant dans le coffre du Bourgmestre Sunrock ou au village des Druides, dans un coffre situé au bord de l'eau, à l'Est du Commandant Owain.<br/></li>\n</ul>\n<p style=\"text-align: center;\"></p>",
        "images": [],
        "order": 10
      },
      {
        "title": "La quête du parchemin d'enchantement (bonifiée)",
        "description": "<ul>\n  \n  <li>\n<p>Pour fabriquer un parchemin d'enchantement, vous aurez besoin d'un nécessaire à écriture runique.</p>\n</li>\n  <li>\n<p>Allez voir R'yleth Cth à la tour des mages de Windhowl. Dites lui \"<b>acheter</b>\" et achetez un \"parchemin vierge\" pour \"11111/votre niveau\" pièces d'or. Allez ensuite voir Araknor (Derrière le temple) à Lighthaven. Muni de votre \"nécessaire à écriture runique\" et de 500 pièces d'or, dites lui \"<b>parchemin magique vierge</b>\" , \"<b>Oui</b>\".</p>\n</li>\n  <li>\n<p>Maintenant, il vous faut enchanter le parchemin magique vierge. Trouvez un \"os humain\" (obtenu en tuant Araf Kul).</p>\n</li>\n  <li>\n<p>Avec un \"nécessaire à écriture runique\", un ou plusieurs \"parchemin magique vierge\", autant d'os humain et autant de fois 4000 pièces d'or, retournez à la tour des mages de Windhowl voir Marsac Cred. Dites lui \"<b> parchemin d'enchantement</b>\" et \"<b>Oui</b>\" deux fois de suite. Il vous donnera le parchemin et <b>75K xp !!</b></p>\n</li>\n  <li>\n<p>Répétez cette opération autant ce fois que vous avez d'os et de parchemin (et assez d'or).</p>\n</li>\n  <li>\n<p><b>Note</b>:</b> Vous pouvez effectuer cette quête à volonté.</p>\n</li>\n  <li>\n<p><b>PNJs</b> concernés: </b>R'yleth Cth, Araknor, Marsac Cred</p>\n</li>\n  <li>\n<p><b>Récompense</b> obtenue:</b> parchemin d'enchantement et <u><b>75.000 xp</b></u> !!</p>\n</li>\n\n</ul>",
        "images": [],
        "order": 11
      },
      {
        "title": "La quête de la cotte de mailles bénie (bonifiée)",
        "description": "<p>Il faut être au moins niveau 16 avant de pouvoir commencer cette quête. Allez voir Lance Silversmith (dans une maison au Nord du camp gobelins). Dites lui \"<b>cotte de mailles bénie</b>\" et il vous demandera:</p>\n<br/>\n<ul>\n  <li>1 parchemin d'enchantement obtenu par la quête du parchemin d'enchantement.</li> <li>1 cotte de mailles achetée à Taliron sur RD 20.777 PO (<b>1550,2525,0</b> seulement le jour).</li> <li>5.500 pièces d'or<br/></li>\n</ul>\n<br/>\n<p>Une fois ces objets obtenus, retournez voir Lance Silversmith et dites lui \" <b>fabriquer une cotte de mailles bénie</b>\".</p>\n<br/>\n<p>Il vous donnera une cotte bénie et <b>50K xp !!</b><br/><b>Note</b>:</b> Vous pouvez effectuer cette quête à volonté.<br/><b>PNJ</b> concerné: </b>Lance Silversmith<br/><b>Récompense</b> obtenue:</b> cotte de mailles bénie (80 End, 40 Int, 53 Sag) et <u><b>50.000 xp</b></u> !!</p>",
        "images": [],
        "order": 12
      },
      {
        "title": "La quête du grimoire de Jarko ((+ karma)) (bonifiée)",
        "description": "<p>Allez voir le Bourgmestre Sunrock à Windhowl et dites lui \"Jarko\". Il vous dira qu'il recherche son grimoire. Allez à la grotte J au niveau - 3 et trouvez Jarko le Necromancien (il a l'apparence d'un mage humain). Tuez le <b>vous-même</b> (10K xp) et récupérez son grimoire (<b>repop</b> 25 minutes si vous le tuez plusieurs fois pour la 1ère option)</p>",
        "images": [],
        "order": 13
      },
      {
        "title": "1ère option (pour XP)",
        "description": "<p>Ramenez le grimoire au Bourgmestre Sunrock et dites \"grimoire\". Il vous récompensera avec un anneau d'or, 800 pièces d'or et 90K xp.</p>",
        "images": [],
        "order": 14
      },
      {
        "title": "2ème option (pour l'anneau des ténèbres)",
        "description": "<ul>\n  \n  <li>\n<p>Une fois que vous aurez tué Jarko et récupéré son grimoire, retournez à Lighthaven voir Araknor (derrière le temple). Dites lui \"Jarko\", \"grimoire\", \"oui\" et il vous donnera soit un <b>anneau des ténèbres</b> soit un <b>anneau de confiance</b> et la possibilité d'apprendre des sorts de nécromancie (vous devenez son apprenti, ce qui sera nécessaire pour pouvoir parler à l'aveugle sur RD).</p>\n</li>\n  <li>\n<p><b>Note</b> #1:</b> Pour tuer plus facilement Jarko si vous êtes guerrier (ou si vous combattez au corps à corps), attendez qu'il soit dans un coin de la pièces et attaquez le. La plupart de ses invocations apparaîtront de l'autre côté du mur. Si vous êtes un mage, attaquez avec des sorts de terre ou de feu pour le tuer et absorption de vie mineure pour vous soigner.</p>\n</li>\n  <li>\n<p><b>Note</b> #2 :</b> Il faut attendre une heure si un autre joueur a donné un grimoire à Araknor... (la poisse!!)</p>\n</li>\n  <li>\n<p><b>Note</b> #3 :</b> Vous pouvez effectuer cette quête à volonté.</p>\n</li>\n  <li>\n<p><b>PNJs</b> concernés :</b> Bourgmestre Sunrock ou Araknor.</p>\n</li>\n  <li>\n<p><b>Récompenses obtenues :</b></p>\n</li>\n  <li>\n<p>1ère option : Un anneau d'or (22 Int, 26 Sag) et 800 pièces d'or et <b>90K xp</b> (+10K à la mort de Jarko).</p>\n</li>\n  <li>\n<p>2ème option : Soit un anneau de confiance (17 Int, 31 Sag) soit un anneau des ténèbres (0 de prérequis), Vous devenez apprenti d'Araknor, indispensable pour pouvoir apprendre plus tard des sorts de Nécromancie chez l'aveugle de RD.</p>\n</li>\n  <li>\n<p></p>\n</li>\n\n</ul>",
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
        "description": "<p><b>Les quêtes d'Arakas revalorisées :</b></p>",
        "images": [],
        "order": 0
      },
      {
        "title": "Quête des rats bruns. Non répétable",
        "description": "<p><b></b><i><b></b></i></p>\n<br/>\n<ul>\n  <li>Parlez au Samaritain, situé à l'entrée du temple de Lighthaven en lui disant \"Travail\".</li> <li>Il vous demandera de tuer 15 rats bruns situés au sous-sol -1 du temple de LH. Vous pouvez retrouvez le nombre de rats tués dans le livre de quêtes, à droite de la barre d'xp. Si vous êtes gravement blessé, sortez de la cave et dites \"guérir\" au frère Kirian. Au sous-sol, Névanis, dans la salle Nord après le couloir, vous soignera aussi.</li> <li>Retournez vois le Samaritain qui vous récompensera. Si vous n'avez pas atteint le quota il vous dira combien de rats vous avez tué.</li> <li><b><u><b>Gain</b> 10K d'XP</u></b></li> <li>(Ramassez aussi les poils de rats à vendre 1667 po à Fulika - village métiers au sud de LH - îlot Est).</li>\n</ul>",
        "images": [],
        "order": 1
      },
      {
        "title": "Quête des ailes de chauve-souris. Non répétable",
        "description": "<ul>\n  <li>Récupérez une paire d'ailes de chauve-souris putrides sur les chauve-souris mort-vivantes au sous sol -3 du temple de Lighthaven. Parlez-en sur le CC \"aide\". On vous aidera peut-être.</li> <li>Allez à la tour des mages de LH voir Uranos. Dites lui \" travail\" puis \"ingrédient\" puis \"ailes de chauve-souris\" (<b>attention</b> à l'orthographe). Vous devrez parfois attendre jusqu'à 20 minutes si un autre joueur vous a précédé.</li> <li><b>Récompense</b> : Une dague du crâne</li> <li><b><u><b>Gain</b> : 30k xp</u></b></li>\n</ul>",
        "images": [],
        "order": 2
      },
      {
        "title": "Quête du pilleur de tombes. Non répétable",
        "description": "<ul>\n  <li>Engagez la discussion avec Darkfang, le dragon dans l'enclos près de la fontaine de Lighthaven.</li> <li>Suivez le dialogue (crypte...) jusqu'à ce qu'il vous demande de tuer le pilleur de tombes, situé dans la crypte du cimetière de LH.</li> <li>Tuez-le. Attention, les autres monstres se jettent sur lui, soyez très rapide. Pas facile à petit niveau.</li> <li>Retournez voir Darkfang qui vous récompensera.</li> <li><b><u><b>Gain</b> : 40k xp</u></b></li>\n</ul>",
        "images": [],
        "order": 3
      },
      {
        "title": "Quête du nécessaire à écriture runique. Répétable",
        "description": "<ul>\n  <li>Réunissez : \n<ul>\n  <li>un sachet de poudre jaune (Araf Kul ou Roshnak Tul)</li> <li>une fiole de sang de gobelin</li> <li>une plume</li> <li>un diamant (coffre de Lord Sunrock à WH ou coffre aux Druides à l'est du commandant Owain)</li> <li>une fiole de venin d'araignée (laby Arakas, assez rare)</li> <li>1000 pièces d'or.</li>\n</ul>\n</li> <li>Allez voir Iraltok à la tour des mages de LH et dites lui \"fabriquer un nécessaire runique\".</li> <li><b>Récompense</b> : le nécessaire</li> <li><b><u><b>Gain</b> : 120k xp</u></b></li>\n</ul>\n\n<ul>\n  <li>un sachet de poudre jaune (Araf Kul ou Roshnak Tul)</li> <li>une fiole de sang de gobelin</li> <li>une plume</li> <li>un diamant (coffre de Lord Sunrock à WH ou coffre aux Druides à l'est du commandant Owain)</li> <li>une fiole de venin d'araignée (laby Arakas, assez rare)</li> <li>1000 pièces d'or.</li>\n</ul>",
        "images": [],
        "order": 4
      },
      {
        "title": "Quête du parchemin d'enchantement. Répétable",
        "description": "<ul>\n  <li>Achetez un parchemin vierge à R'yleth Cth, un mage de WindHowl (dire \"acheter\").</li> <li>Muni du parchemin vierge, du nécessaire à écriture runique et de 500 po dites \"parchemin magique vierge\", puis \"oui\" à Araknor à LH.</li> <li>Munissez vous d'un os humain, drop d'Araf Kul (ou Roshnak Tul ?) ou des skraugs de SH. <b>Conseil</b> : campez les os aux skraugs et utilisez-les lors de votre prochaine renaissance.</li> <li>Allez voir Marsac Cred, dans la tour des mages de WindHowl, avec 4.000 Pièces d'or, le nécessaire à écriture runique, le parchemin magique vierge, et l'os humain</li> <li>Dites-lui \"fabriquer un parchemin d'enchantement\" \"oui\" \"oui\".</li> <li><b>Récompense</b> : un parchemin d'enchantement</li> <li><b><u><b>Gain</b> : 75k xp</u></b></li>\n</ul>",
        "images": [],
        "order": 5
      },
      {
        "title": "Quête de la cotte de mailles bénie (suite de la précédente). Répétable",
        "description": "<ul>\n  <li>Achetez (ou faites acheter) une cotte de mailles chez Taliron grimoire\".</li> <li><b>Récompense</b> : 800 po, un anneau d'or.</li> <li><b><u><b>Gain</b> : 90k xp</u></b></li>\n</ul>",
        "images": [],
        "order": 7
      },
      {
        "title": "Quête de la fiole de liquide bleuté. Répétable",
        "description": "<ul>\n  <li>Trouvez une feuille d'arbre rose dropée par Araf Kul(camp orc) et une pomme (vendue à Lighthaven).</li> <li>Apportez-les à Dunikus Cathbad, au camp des Druides, et dites \"potions\".</li> <li><b>Récompense</b> : Une fiole de liquide bleuté.</li> <li><b><u><b>Gain</b> : 125k xp</u></b></li>\n</ul>",
        "images": [],
        "order": 8
      },
      {
        "title": "Quête de l'Âme de Nilhem (quête complète ici). Répétable",
        "description": "<ul>\n  <li>Pour les levels au dessous de 30, apportez un lot de 25 pieds d'innocents à Nilhem, au Nord Ouest du pont gobelins, dans une maison près des gobelins bombermans.</li> <li>Nilhem vous donnera sa bénédiction, des bonus et un <b>gain</b> d'XP de 5000 x votre niveau (bof......).</li> <li><b>Répétable mais long et donc peu rentable sauf pour la première béné qui est gratuite !!</b></li>\n</ul>\n<br/>\n<p></p>",
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
        "description": "<ul>\n  \n  <li>\n<p>Rendez vous au temple de LH. Parlez à Zélina, dites \"travail\" ou simplement \"bénédiction\" ou même \"béné\" et elle vous proposera une bénédiction.</p>\n</li>\n  <li>\n<p>Dites \"oui\" en faisant <b>attention</b> qu'il n'y ait aucun obstacle</b> entre elle et vous (sinon c'est l'obstacle qu'elle bénira).</p>\n</li>\n  <li>\n<p>Du level 1 au level 25, la bénédiction de 600PV qui dure 40 minutes vous coûtera 1000 po. Au-delà elle refusera de vous aider.</p>\n</li>\n  <li>\n<p><b>Remarque</b> : cette bénédiction booste aussi l'attaque et l'archerie.</p>\n</li>\n  <li>\n<p></li>\n  <li></p>\n</li>\n  <li>\n<p></p>\n</li>\n\n</ul>",
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
        "description": "<ul>\n  \n  <li>\n<p>A la fontaine de Lighthaven, cherchez un <b>PNJ</b> nommé Vincent Finelame. Parlez-lui et il vous dira qu’il a besoin d’un groupe d’héros pour faire un assaut sur trois camps différents. Dites \"<b>Olin Haad</b>\", \"<b>Tarnian\"</b>, \"<b>oui</b>\", \"<b>Details</b>\" et il vous donnera plus de détails sur votre quête.</p>\n</li>\n  <li>\n<p>Dirigez-vous vers le pont ouest de Lighthaven et une fois passé, allez vers le nord. Vous arriverez au 1<sup>er</sup> camp, facile à identifier avec les catapultes. Tuez 15 mercenaires jusqu’à ce que vienne le Lieutenant mercenaire. Tuez-le et dirigez-vous vers le 2<sup>e</sup> camp, situé juste au nord-est de celui où vous êtes. Tuez encore une fois 15 mercenaires et le Lieutenant mercenaire. Dirigez-vous vers l’est et suivez le chemin jusqu’à atteindre le 3<sup>e</sup> camp. Encore une fois tuez les 15 mercenaires et le Lieutenant mercenaire. Vous recevez le message suivant:</p>\n</li>\n  <li>\n<p><i>Dès que le lieutenant mercenaire s’écroule, vidé de toute vie, vous entendez le son d’un cor de guerre venant du camp nord.</i></p>\n</li>\n  <li>\n<p>Suivez le chemin vers l'est (la route contourne la montagne et continue vers l'ouest) jusqu’à ce qu’il s’achève. Continuez vers l’ouest et vous arriverez à quelques maisons abandonnées. Trouvez le Chef mercenaire et tuez le. Retournez voir Vincent Finelame.</p>\n</li>\n  <li>\n<p>Dites-lui \"<b>Récompense</b>\" et vous recevrez 750 xps multipliés par votre niveau actuel et 500 pièces d’or.</p>\n</li>\n  <li>\n<p><b>Remarque:</b> Vous pouvez effectuer cette quête à volonté.</p>\n</li>\n  <li>\n<p><b>PNJ</b> impliqué: </b>Vincent Finelame.</p>\n</li>\n  <li>\n<p><b>Mini-boss impliqués:</b> Mercenaires, Lieutenant mercenaire, Chef des mercenaires.</p>\n</li>\n  <li>\n<p><b>Récompenses acquises:</b> (750*lvl actuel) xps, 500 pièces d’or.</p>\n</li>\n\n</ul>",
        "images": [],
        "order": 0
      },
      {
        "title": "Le Livre de la Connaissance Arcane (ceinture instable) (SH)",
        "description": "<ul>\n  \n  <li>\n<p>Allez à la Grande Bibliothèque (à l’est de l’entrée de la crypte de Raven’s Dust) et parlez à Filandrius. Dites \"<b>La magie étrangère</b>\", \"<b>Besoin</b>\", \"<b>Filnar'thir</b>\", \"<b>Ténèbres</b>\", \"<b>Récupérer ce livre</b>\" et il vous enverra tuer Anthor le Fou et prendre le Livre de la Connaissance Arcane.</p>\n</li>\n  <li>\n<p>Allez à Stoneheim et trouvez Anthor (il est situé au nord-est de l’entrée de la grotte aux araignées, juste avant les skraugs verts). Maintenant tuez Anthor le Fou, vous recevrez le Livre de la Connaissance Arcane.</p>\n</li>\n  <li>\n<p><b>Tip</b> : Si vous l'attaquez en physique (war, archer, ou sort physique) et n'êtes pas très fort, après 20 ou 30 secondes il va se régénérer vite et vous aurez du mal à le tuer. Dans ce cas faites vous aider par un mage qui va l'affaiblir à l'aide d'un sort mental et attaquez le à ce moment.</p>\n</li>\n  <li>\n<p>Retournez-voir Filandrius, cliquez dessus et il prendra le Livre. Vous recevrez une ceinture de protection instable et une gemme de protection instable. Vous pouvez aussi lui demander de vous enseigner des nouveaux sorts (si vous avez les bonnes stats).</p>\n</li>\n  <li>\n<p><b>PNJ</b> impliqués: </b>Filandrius</p>\n</li>\n  <li>\n<p><b>Mini-boss impliqués:</b> Anthor le Fou</p>\n</li>\n  <li>\n<p><b>Récompenses acquises:</b> Ceinture de Protection Instable, Gemme de Protection Instable (0 stats), Nouveaux sorts disponibles.</p>\n</li>\n  <li>\n<p>PS1: Si par accident vous deletez la ceinture retournez parler à filandrius il vous refera faire la quête.</p>\n</li>\n  <li>\n<p>PS2: Vous conservez la ceinture en cas de renaissance !</p>\n</li>\n\n</ul>",
        "images": [],
        "order": 1
      },
      {
        "title": "Le Faucheur de Vie (bracelet et gemme IMMO) (SH)",
        "description": "<ul>\n  \n  <li>\n<p>La quête des Faucheurs de Vie consiste à tuer les 3 Faucheurs de Vie situés sur chaque île, à raison d’un par île.</p>\n</li>\n  <li>\n<p>Dirigez-vous vers Windhowl et <u>parlez à la sentinelle de Windhowl</u> (située aux portes de la ville). Dites \"<b>aide</b>\" et il vous dira que derrière les portes se trouve Hel, le Faucheur de Vie d’Arakas. Cherchez-le (c’est un <b>PNJ</b> non-séraphe situé vers le nord-ouest de Windhowl <b>récompense\"</b>, vous recevrez 100 xps multipliés par votre niveau et 500 pièces d’or multipliées par votre niveau.</p>\n</li>\n  <li>\n<p>Maintenant, <u>allez parler à Filandrius</u> (situé dans la Grande Bibliothèque de RD). Il reconnaîtra la pierre spirituelle de Hel et vous dira que c’est intéressant. Dites \"<b>Intéressant</b>\", \"I<b>nnombrables richesses</b>\", \"P<b>ierre spirituelle</b>\" (et non le mot clef pierre spirituelle qui apparaît dans le dialogue), \"<b>Noms</b>\" et <u>il vous donnera le nom des 3 Faucheurs de Vie</u> : Jormungand, Hel et Fenrir. Il vous dira aussi qu’une fois les 3 pierres spirituelles réunies vous devrez trouvez un portail au village des Centaures.</p>\n</li>\n  <li>\n<p>Dirigez-vous ensuite vers la Tour de Zhakar. Allez vers l’ouest et passez au-dessus de Stonehenge. Suivez la ligne de montagnes et tournez vers l’est à la première ouverture. Continuez vers l’est et vous trouverez le Faucheur de Vie de Raven’s Dust, Jormungand qui ressemble lui aussi à un néphilim <b>délivrer</b>\". Filandrius prendra le Cristal de la Providence et vous recevrez le Bracelet et la Gemme des Immortels.</p>\n</li>\n  <li>\n<p><b>Remarque #1 :</b> Vous devez être au minimum niveau 50 pour commencer cette quête.... et beaucoup plus pour la finir !!</p>\n</li>\n  <li>\n<p><b>Remarque #2 : </b>La <b>récompense</b> donnée par la Sentinelle ne peut être obtenue qu’une seule fois par renaissance.</p>\n</li>\n  <li>\n<p><b>PNJ</b> impliqués : </b>Filandrius, Sentinelle de Windhowl</p>\n</li>\n  <li>\n<p><b>Mini-boss impliqués :</b> Jormungand, Hel, Fenrir, le Faucheur de Vie (Harvester of Life)</p>\n</li>\n  <li>\n<p><b>Récompenses acquises :</b> Bracelet et Gemme des Immortels(0 stats), 100 xp * niveau actuel, 500 po * niveau actuel.</p>\n</li>\n\n</ul>",
        "images": [],
        "order": 2
      },
      {
        "title": "Voyage entre les plans (réservé aux Séraphes level 50+)",
        "description": "<ul>\n  \n  <li>\n<p>Vous remarquerez que dans chaque ville (et pas que dans les villes) se trouve un portail auxquel vous n'avez pas accès.</p>\n</li>\n  <li>\n<p>Vous ne pourrez y accéder que si vous êtes Séraphe/Néphi, au moins level 50 et avez terminé la quête d'accès.</p>\n</li>\n  <li>\n<p>Pour avoir accès à l'Interplan vous devez activer 8 portails (sur 10). Ces portails sont situés à :</p>\n</li>\n  <li><ol><li>Lighthaven (AR)</li> <li>Windhowl (AR)</li> <li>Camp des Druides (AR)</li> <li>Silversky (RD)</li> <li>Oasis (RD)</li> <li>Bibliothèque (RD)</li> <li>Stonecrest (SH)</li> <li>Ville Centaure (SH)</li></ol></li>\n  <li>\n<p>Pour activer l'accès approchez-vous d’un portail et sautez dedans. Dites \"<b>Creations</b>\", \"<b>Stop</b>\", \"<b>Yes</b>\". Vous entrez alors à l’intérieur et vous apparaîtrez autre part. Vous avez environ 60 secondes pour tuer Doppelganger. Entrez dans chacun des 8 portails et faites de même. Vous ne pourrez pas rentrez dans un portail déjà fait avant d’avoir fini les huit. Terminez les 8 et vous pourrez traverser les plans (Plane Walking) (cela signifie que vous pouvez utiliser les portails pour voyager de l'un à l'autre). Cette carte de l'interplan vous montre les destinations des portails quand vous traversez les plans.</p>\n</li>\n  <li>\n<p><b>Remarque 1 :</b> Le meilleur moyen pour tuer Doppelganger, même pour les mages, ce sont les armes physiques (ou à mains nues si vous bénéficiez d'une bonne force). Il est conseillé d'activer si vous en avez vos boucliers offensifs. Les sorts, à moins d’être à un niveau supérieur à 150 ne leur font rien.</p>\n</li>\n  <li>\n<p><b>Remarque 2</b> : Vous perdez l'accès à chaque renaissance et devrez attendre le niveau 50 pour le refaire.</p>\n</li>\n  <li>\n<p><b>Remarque 3</b> : Niève et Redwall seront automatiquement activés</p>\n</li>\n  <li>\n<p><b>Mini-boss impliqués :</b> Doppelganger</p>\n</li>\n  <li>\n<p><b>Récompense</b> acquise :</b> Planewalking (ou interplan) (plus besoin d’acheter des parchemins de LH, WH, SS, etc.)</p>\n</li>\n\n</ul>",
        "images": [],
        "order": 3
      },
      {
        "title": "L’Ancienne Plaque Céleste (Quête réservée aux Séraphes)(non répétable)",
        "description": "<p>Près de la fontaine de Stonecrest, vous trouverez un <b>PNJ</b> appelé Tristan. Parlez-lui et répondez à ses questions. Dites-lui \"<b>oui</b>\", \"<b>oui</b>\", \"<b>récemment</b>\", \"<b>déterraient</b>\" et vous entendrez une histoire au sujet de deux hommes qui creusaient le sol avec des pelles. Ils finirent par trouver un corps de Séraphin et sont partis vers l’est dans leur roulotte.</p>\n<br/>\n<p>Allez vers l’est et suivez le chemin menant aux araignées. Juste avant d’y arriver, vous verrez un petit camp avec des guerriers Obsidian Conclave. Tuez-en environ dix jusqu’à ce qu’apparaisse le commandant Mordred. Tuez-le et vous obtiendrez une petite clé en fer. Avec celle-ci, ouvrez le coffre situé dans le camp, vous obtiendrez l'ancienne plaque céleste (indropable).</p>\n<br/>\n<p><b>PNJ</b> impliqué: </b>Tristan</p>\n<br/>\n<p><b>Mini-boss impliqué:</b> Commandant Mordred</p>\n<br/>\n<p><b>Récompense</b> acquise:</b> le plastron Ancienne Plaque Céleste (Stats: 100 End, 30 For, 30 Dex, 30 Int, 30 Sag) (indropable)</p>\n<br/>\n<ul>\n  <li><b>Bonus du plastron</b> : Quand vous êtes attaqué, un sort s'enclenche sur la gauche avec les autres sorts : il boost la CA, régénère mana vie et plus, très utile dans les zones ou il y a beaucoup de mobs surtout avec les sorts de zone comme les boucliers de feu air eau ou électrique.</li> <li><b>Attention</b> : ne pas deleter avant d'être 260, vous savez pas quand elle pourrait servir.</li>\n</ul>\n<br/>\n<p><br/></p>\n<br/>\n<p></p>",
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
        "description": "<p><br/>La quête débute chez Nilhem, qui se trouve au nord du Pont Gobelin (en A), dans l'une maison du camp du chef des mercenaires. En quittant la route sur votre gauche, avancez jusqu'à trouver des maisons avec un feu de camp. Dans l'une de ces maisons se trouve le <b>PNJ</b> Nilhem.</p>\n<br/>\n<p>Mot-clef : \"Aide\". <b>Important</b> : C'est le premier mot à lui adresser.</p>\n<br/>\n<p>Vous recevrez L'âme de Nilhem (<b>tous les sorts durent 15 minutes</b>)</p>\n<br/>\n<p>Ce buff donne</p>\n<br/>\n<ul>\n  <li>une bénédiction de 1500 points de vie (qui se cumule à une bénédiction \"normale\"),</li> <li>+ 100 points à toutes vos caractéristiques</li> <li>+50 de CA</li> <li>+1500 d'attaque</li> <li>+490 d'esquive</li> <li>+1500 archerie et mana</li> <li>+50 à toutes vos puissances magiques.</li>\n</ul>\n<br/>\n<p><b>Attention</b> : les PV sont complétés mais pas les PM.</p>\n<br/>\n<p>Le buff gratuit n'est donné qu'une seule fois. Ensuite selon votre level il vous faudra compléter l'une des quêtes suivantes.</p>",
        "images": [
          "/t4c-nms-overview/assets/quests/lame-de-nilhem/img_0_0.jpg"
        ],
        "order": 0
      },
      {
        "title": "Les pieds d'innocents (Level 1-29)",
        "description": "<p>Pour commencer la quête, dites le mot-clef \"tâche\" à Nilhem.</p>\n<br/>\n<p>Vous devez lui apporter 25 pieds d'innocents.</p>\n<br/>\n<p>Les pieds d'innocents s'obtiennent sur les Ogres Ignobles.</p>\n<br/>\n<p>Les Ogres Ignobles se trouvent DANS Lighthaven. Vous les trouverez facilement au sud des champs de blé (là où il y a les cochons).</p>\n<br/>\n<p><b>Récompenses:</b></p>\n<br/>\n<ul>\n  <li>Le Buff de l'Âme de Nilhem, d'une durée de 15 minutes (+100 à toutes vos caractéristiques, +1500 PV PM et Attaque, +50 de CA, +50 à toutes les puissances, +490 d'esquive).</li> <li>5 000*lvl points d'XP</li>\n</ul>\n<br/>\n<p><b>Cette quête peut être effectuée a volonté.</b></p>",
        "images": [],
        "order": 1
      },
      {
        "title": "Les yeux de tarentules (Level 30-59)",
        "description": "<ul>\n  \n  <li>\n<p>Pour commencer la quête, dites \"tâche\" à Nilhem. Vous devez lui apporter 35 yeux de tarentules.</p>\n</li>\n  <li>\n<p>Les yeux de tarentules s'obtiennent sur les araignées de Raven's Dust. Le taux de drop est faible (3%).</p>\n</li>\n  <li>\n<p><b>Récompense</b>:</b> Buff : Âme de Nilhem, d'une durée de 15 minutes. 10 000*lvl XP.</p>\n</li>\n  <li>\n<p><b>Cette quête peut être effectuée a volonté.</b></p>\n</li>\n  <li>\n<p><b>Le rapport Xp/items requis et trop déséquilibré pour rendre cette dernière quête intéressante.</b></p>\n</li>\n\n</ul>",
        "images": [],
        "order": 2
      },
      {
        "title": "Les lames d'héroisme et les livres de sort rouges (Level 60+)",
        "description": "<ul>\n  \n  <li>\n<p>Pour commencer la quête, dites \"Tâche\" à Nilhem. Vous devez lui apporter 25 lames d'héroïsme et 4 livres des sorts rouges.</p>\n</li>\n  <li>\n<p>Les lames d'héroïsme s'obtiennent sur les skraugs roses (nord est de SC), les skraugs verts, les vengeurs centaures. Le taux de drop est faible. Les livres de sort rouges s'obtiennent par les skraugs shamans (Un peu partout où il y a des skraugs...). Le taux de drops est très faible.</p>\n</li>\n  <li>\n<p><b>Récompense</b>:</b> Buff : Âme de Nilhem, d'une durée de 15 minutes. 20 000*lvl XP.</p>\n</li>\n  <li>\n<p><b>Cette quête peut être effectuée a volonté.</b></p>\n</li>\n  <li>\n<p><b>Le rapport Xp/items requis et trop déséquilibré pour rendre cette dernière quête intéressante</b> ... Je vous conseille plutôt de garder vos livres rouges pour vous, vos quêtes ou pour les vendre, et de vendre vos lames d'héroïsme au marchand.</p>\n</li>\n  <li>\n<p><b>PS : cette 3ème quête semble buggée</b></p>\n</li>\n  <li>\n<p></p>\n</li>\n\n</ul>",
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
        "description": "<ul>\n  \n  <li>\n<p>Vous devez être séraphin ou néphilim.</p>\n</li>\n  <li>\n<p>Dites « e<i>ntrer »</i> puis « <i>oui »</i> au <b>Gardien Vortimer</b> qui vous remettra alors la <b>Clef de l'Asile</b>.</p>\n</li>\n  <li>\n<p>Pour pouvoir progresser vous devrez aussi rechercher puis tuer le patient en fuite (drop de l'autorisation J4). Sa <b>position</b> est environ Distraire\" puis \"Adieu\" au gardien. Ensuite, vous avez moins de 5 secondes pour lui dire \"Yeux de tarentules\" puis \"oui\".</p>\n</li>\n  <li>\n<p><b>Cette quête peut être effectuée à volonté!</b></p>\n</li>\n  <li>\n<p></p>\n</li>\n\n</ul>",
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
        "description": "<ul>\n  \n  <li>\n<p>Allez voir Elysse à LH dans la maison à l'est de la taverne.</p>\n</li>\n  <li>\n<p>Dites lui : \"travail\", puis \"teindre\" (pour vous teindre les cheveux) ou \"couper\" (pour avoir une petite coupe surprise qui durera une heure)</p>\n</li>\n  <li>\n<p>Si vous avez choisi \"teindre\" vous aurez le choix entre 5 couleurs différentes: Blond, Châtain, Brun, Roux ou Gris. Faites vous plaisir!</p>\n</li>\n  <li>\n<p>Enfin si vous lui dites \"retirer\" vos cheveux colorés redeviendront noirs.</p>\n</li>\n  <li>\n<p>N'oubliez pas de prendre la coquette somme de 2 550 pièces d'or par travail demandé.</p>\n</li>\n\n</ul>",
        "images": [],
        "order": 0
      },
      {
        "title": "Teinture temporaire d'une heure",
        "description": "<ul>\n  \n  <li>\n<p>Elysse pourra aussi vous fournir une potion (droppable) de couleur pour une teinture temporaire d'une heure:</p>\n</li>\n  <li>\n<p>- Verte contre trois essences de B'Zu (DI) et une potion d'esprit clair.</p>\n</li>\n  <li>\n<p>- Bleue contre deux fioles de liquide bleuté et une potion d'esprit clair.</p>\n</li>\n  <li>\n<p>- Rose contre deux feuilles d'arbre roses et une potion d'esprit clair.</p>\n</li>\n  <li>\n<p>- Rouge contre deux rubis bruts, une fiole de sang de gobelin et une potion d'esprit clair.</p>\n</li>\n  <li>\n<p>Chaque teinture temporaire ainsi fabriquée vous rapporte 30K XP.</p>\n</li>\n  <li>\n<p><b>Enfin vous pourrez acheter ces potions contre des points d'interaction</b>.</p>\n</li>\n  <li>\n<p></p>\n</li>\n\n</ul>",
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
        "description": "<ul>\n  \n  <li>\n<p>Allez voir Dobbs dans la prison, accessible par le portail à la fontaine de LH. Ce dernier vous demandera des objets pour confectionner une clef permettant de s'échapper de la prison RP (partie Nord de la prison) :</p>\n</li>\n  <li>\n<p>• 5 morceaux de fer (drop par les bzu sur DI)</p>\n</li>\n  <li>\n<p>•1 Émeraude reluisante (drop des golems sur SH)</p>\n</li>\n  <li>\n<p>•1 Marteau à forger (drop des drake Vigrator sur DI)</p>\n</li>\n  <li>\n<p>•1 Clef de fer (drop sur AR)</p>\n</li>\n  <li>\n<p>Vous devrez nommer chaque objet pour le donner à Dobbs. Il vous demandera d'essayer votre clé mais gardez la pour vous !!</p>\n</li>\n  <li>\n<p><b>Récompense</b>: La clef de la prison RP de LH.</p>\n</li>\n  <li>\n<p>La quête n'est pas répétable. Utilisez votre clé à bon escient.</p>\n</li>\n  <li>\n<p></p>\n</li>\n\n</ul>",
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
        "description": "<ul>\n  \n  <li>\n<p>Pour compléter la quête d'accès à Stoneheim, vous devrez d'abord parler aux 12 frères puis obtenir les 6 clefs royales et enfin obtenir une plume argentée.</p>\n</li>\n  <li>\n<p>Il vous faudra aussi posséder une fiole de sang gobelin, un os de squelette, une fiole d'eau cristalline, des baies de belladone et 5000 pièces d'or.</p>\n</li>\n  <li>\n<p>Enfin vous pourrez vous rendre chez Zhakar pour le rituel de transfert.</p>\n</li>\n\n</ul>",
        "images": [],
        "order": 0
      },
      {
        "title": "Les 12 frères",
        "description": "<p><br/></p>\n<br/>\n<p>Etape facultative :</p>\n<br/>\n<p>Dans le château de Silversky, parlez au <b>Roi Théodore (3ème étage à droite)</b>. Attention, vous devez avoir effectué la quête d’audience à Sa Majesté (200K xp) ! Si cela est fait, dites <i>\"travail\", \"royaume\", \"Tournoi\",</i> \"frères\" et vous apprendrez tout au sujet des 12 Frères Morts-Vivants, en fait qu'ils sont morts et enterrés.</p>\n<br/>\n<p>Fin de l'étape facultative.</p>\n<br/>\n<p><b><big><b>Note</b> :</big></b> Il semble que l'on puisse commencer les clefs avec un karma \"Bon\". Toutefois, pour la clef 4 il faudra avoir au moins 170. En conséquence, commencer avec un karma \"Converti\" est très certainement une bonne décision pour éviter les désagréments liés à un faible karma. (voir <i>Le Karma)</i></p>\n<br/>\n<p>Allez à la crypte de Raven’s Dust (passez le pont au Nord de la tablette RST et marchez encore au Nord) puis descendez au niveau -3 ou sont les 12 Frères.</p>\n<br/>\n<p><b>Faites <b>attention</b> : vous devez parler aux 12 frères dans un ordre précis (consultez le plan ci-après) et ne dire que le mot clé. Si vous vous trompez dans l’ordre (ou dans votre saisie au clavier ou si vous parlez trop), vous devrez recommencer depuis le premier frère.</p>\n<br/>\n<p><u>__<i>Ordre - Nom du Frère =&gt; Que lui dire</i></u></p>\n<br/>\n<ul>\n  <li>1 Une loque humaine =&gt; tourment</li> <li>2 un cadavre trébuchant =&gt; tourment</li> <li>3 Une ombre gémissante =&gt; tournoi des princes</li> <li>4 Une créature fragile =&gt; roi de goldmoon</li> <li>5 Une monstruosité putride =&gt; théodore</li> <li>6 Une créature pitoyable =&gt; mort</li> <li>7 Une entité hurlante =&gt; empoisonné</li> <li>8 Une âme tourmentée =&gt; malédictions</li> <li>9 Une infâme abomination =&gt; cuthana</li> <li>10 Un monstre putride =&gt; guérir</li> <li>11 Un démon rampant =&gt; portes royales</li> <li>12 Une horreur repoussante =&gt; donjon inférieur</li>\n</ul>\n<br/>\n<p>Le dernier zombie, <b>une horreur repoussante</b>, est celui auquel vous devrez donner les 6 clés royales afin qu’il puisse ouvrir les portes royales donnant accès au Donjon Inférieur pour obtenir <b>l’herbe de Cuthana</b>.</p>",
        "images": [
          "/t4c-nms-overview/assets/quests/acces-benefique-sh/img_1_0.jpg",
          "/t4c-nms-overview/assets/quests/acces-benefique-sh/img_1_0.jpg"
        ],
        "order": 1
      },
      {
        "title": "Clé Royale #1",
        "description": "<p>Trouvez <b>Celydia </b>(RDC à droite, <b>1438,2346</b>) <b>le jour </b>au château de Silversky et dites-lui <i>\"clefs royales\"</i> et <i>\"Reynen\"</i> (elle ne vous parlera que le jour).</p>\n<br/>\n<p>Allez à la taverne de la ville, trouvez <b>Laren</b> (<b>1485,2524</b>) et dites-lui aussi <i>\"Reynen\"</i>. Il vous dira qu’il a une relation avec Adriana et vous enverra voir <b>Belagan</b> (l’assistant d’Adriana).</p>\n<br/>\n<p>Si vous disposez déjà de la clé de <b>Reynen</b> ou si un ami vous peut vous la prêter, vous pouvez sauter la partie qui suit et aller directement au coffre.</p>\n<br/>\n<p>Allez à la salle d'entraînement, trouvez <b>Belagan</b> (<b>1587,2524</b>) et dites <i>\"Reynen\"</i>, <i>\"Oui\"</i> et il vous demandera un livre de guerre que vous pouvez acheter à <b>Tobias oui\" ou <i>\"Champion de la lumière\"</i> et il vous donnera la clé.</p>\n<br/>\n<ul>\n  <li><i>Remarque 1: Pour récupérer cette clé, votre Karma doit être au moins de 100. Consultez Le Karma pour savoir comment l’augmenter.</i></li> <li><i>Remarque 2 : Pour récupérer cette clé vous devez avoir parlé aux 12 frères, sinon Terwin ne vous répondra pas utilement même si vous insistez.</i></li>\n</ul>",
        "images": [],
        "order": 3
      },
      {
        "title": "Clé Royale #3 (attention au piège)",
        "description": "<p>Munissez-vous si possible d'une fiole de liquide bleuté (Les minotaures en dropent, ou bien effectuez quête de la fiole de liquide bleutée sur Arakas), cela vous évitera des déplacements.</p>\n<br/>\n<p>(<b>attention</b> au piège) : A Silversky, trouvez <b>Elysana Blackrose</b> (dans une maison au sud du temple). Dites-lui <i>\"clefs royales\"</i> et elle vous demandera la fiole de liquide bleutée . Si vous ne l'avez pas sur vous ramenez-la et dites encore une fois \"clefs royales\". Elle vous demandera si vous ne voulez pas plutôt une potion de guérison importante, <b>ATTENTION</b> : il faut dire \"Non\".</b></p>\n<br/>\n<p>Elle vous enverra voir <b>Zhakar</b>. Trouvez-le (Tour des Sorciers de Raven’s Dust) et dites-lui 3 fois <i>\"Elysana Blackrose\"</i>. Il vous posera une énigme. Dites <i>\"Réponse Clémentine Clébard Clématite\"</i> et il vous donnera la clé.</p>\n<br/>\n<ul>\n  <li><i>Remarque: Pour récupérer cette clé, votre Karma doit être au moins de 100. Consultez Le Karma pour savoir comment l’augmenter.</i></li>\n</ul>",
        "images": [],
        "order": 4
      },
      {
        "title": "Clé Royale #4",
        "description": "<ul>\n  \n  <li>\n<p>Dirigez-vous vers la taverne de Silversky et parlez à <b>Thea</b> (uniquement la nuit). Dites <i>\"clefs royales\"</i> et elle vous enverra voir <b>Moonrock</b> au temple de Lighthaven.</p>\n</li>\n  <li>\n<p>Allez voir <b>Moonrock</b> et dites-lui <i>\"clefs royales\"</i> et elle vous demandera de trouver <b>Bane Gwengad</b> (en son château de l'île de Bane).</p>\n</li>\n  <li>\n<p>Passez par le connecteur du désert (entrée en <b>200,2555,0</b>) et allez le voir.</p>\n</li>\n  <li>\n<p>Vous devrez effectuer la quête d’audience à Bane Gwengad auprès de son assistant avant de pouvoir lui parler.</p>\n</li>\n  <li>\n<p>Cela fait, dites à <b>Bane</b> <i>\"clefs royales\"</i> plusieurs fois avant qu’il ne vous donne la clé. <b>Attention</b>: Quand vous lui direz \"clefs royales\" il vous attaquera : ne le tuez pas ! Laissez-le dans son délire en quittant simplement le château quelques instants ou parlez-lui en étant protégé par un mur. Essayez à nouveau. Recommencez autant de fois que cela est nécessaire et qu’il vous confie la clé.</p>\n</li>\n  <li>\n<p>Remarque: Pour que Moonrock vous parle, votre karma doit être supérieur à 170. Consultez <i>Le Karma</i> pour savoir comment l’augmenter.</p>\n</li>\n\n</ul>",
        "images": [],
        "order": 5
      },
      {
        "title": "Clé Royale #5",
        "description": "<ul>\n  \n  <li>\n<p>Au RDC du château de Silversky, trouvez le cuisinier : <b>Jon Hamhoo</b> (à droite). Dites \"clefs royales\" et il vous expliquera qu’elle doit être dans les mains de deux amis : Jalir et Kamar (dont les noms corrects sont <b>Kalir</b> et <b>Jamar</b>)</p>\n</li>\n  <li>\n<p>Allez voir tout d’abord <b>Kalir</b> (à l’Oasis du Désert) et dites-lui \"clefs royales\". Il vous dira qu’il ne sait rien mais il vous donnera une lettre pour son frère <b>Jamar</b> (n'oubliez pas d'accepter en disant \"oui\").</p>\n</li>\n  <li>\n<p>Allez voir <b>Jamar</b> (il vit à Silversky sous la fontaine), le frère de <b>Kalir</b> et dites \"<b>donner une lettre</b>\". Il vous donnera une lettre pour <b>Kalir</b>, donc retournez d’où vous venez et parlez à <b>Kalir</b>. Dites \"<b>donner une lettre</b>\", \"<b>clefs royales</b>\". Il vous avouera qu’il a menti et vous expliquera qu’il a donné la clé à <b>Morindin Tennglaw le chasseur</b> (qui se situe au nord du Lac Tarentules).</p>\n</li>\n  <li>\n<p>Allez voir le chasseur <b>le jour</b>, dites \"clefs royales\" et il vous donnera la clé (soyez <b>level 30</b> minimum).</p>\n</li>\n  <li>\n<p><i>Remarque #1: Pour parler à Morindin le chasseur, votre karma doit être supérieur à 170. Consultez Le Karma pour savoir comment l’augmenter.</i></p>\n</li>\n  <li>\n<p><i>Remarque #2: Morindin le chasseur ne vous parlera pas la nuit.</i></p>\n</li>\n  <li>\n<p><i>Remarque #3: Morindin le chasseur ne vous parlera pas si vous n'êtes pas au moins level 30.</i></p>\n</li>\n\n</ul>",
        "images": [],
        "order": 6
      },
      {
        "title": "Clé Royale #6",
        "description": "<ul>\n  \n  <li>\n<p>Au château de Silversky, trouvez <b>Tobias </b>(1er étage centre). Dites \"clefs royales\" et il vous enverra voir <b>Celestina Avel</b> au camp des Druides de Raven’s Dust. Trouvez-la et dites-lui \"clefs royales\" et elle vous demandera de répondre sincèrement à la question « Avez-vous déjà tué un protecteur de la forêt ? ». Répondez \"non\" et elle vous enverra voir <b>Mordrick Maensel</b> (château de Silversky, à l'entrée du RDC). Dites-lui \"clefs royales\" et il vous parlera d’une histoire au sujet de l’épée de puissance. Il vous demandera aussi de la lui ramener.</p>\n</li>\n  <li>\n<p>Allez à la cave des illusionnistes et trouvez le puits magique vers le Nord Ouest. Parlez au puits : Dites-lui \"<b>Donne moi ta puissance</b>\" et vous obtiendrez l’Epée de Puissance dans votre inventaire. Ramenez-la à <b>Mordrick Maensel</b> et dites-lui \"<b>épée de puissance</b>\", puis \"clefs royales\". Vous obtiendrez la clé.</p>\n</li>\n  <li>\n<p><i>Remarque #1: Pour obtenir l’Epée de puissance du puits, votre karma doit être supérieur à 170. Consultez Le Karma pour savoir comment l’augmenter.</i></p>\n</li>\n  <li>\n<p><i>Remarque #2: Il est possible que vous ayez à dire de nouveau à Mordrick le mot-clé \"clefs royales\" afin d’obtenir la clé.</i></p>\n</li>\n\n</ul>",
        "images": [],
        "order": 7
      },
      {
        "title": "L'herbe de Cuthana",
        "description": "<p>Une fois que vous avez récupéré les 6 clés, allez au Niveau -3 de la crypte de Raven’s Dust et reparlez à \"une horreur repoussante\" (le 12ème frère). Dites-lui \"<b>j'ai les six clés</b>\" (clés et non clefs) et elle/il vous téléportera dans une petite caverne ou vous rencontrerez le <b>Spectre de Théopold</b>. Dites-lui \"travail\", \"énigme\" et il vous posera les questions suivantes :</p>\n<br/>\n<p>_Enigme posée - Réponse</p>\n<br/>\n<ul>\n  <li>Enigme1 - la lettre u</li> <li>Enigme 2 - la lettre a</li> <li>Enigme 3 - énigme</li> <li>Enigme 4 - une rivière</li> <li>Enigme 5 - un cercueil</li> <li>Enigme 6 - rien</li>\n</ul>\n<br/>\n<p>Pour chaque bonne réponse, vous obtiendrez 10.000 xp. Une fois que vous avez répondu aux 5 questions, vous serez téléporté dans une petite pièce avec un coffre. En cliquant dessus, vous obtiendrez dans votre inventaire <b>l’herbe de Cuthana</b> et vous serez téléporté à l’est du Lac Tarentules.</p>\n<br/>\n<p>Profitez-en pour cliquer sur le <b>nexus</b> tout proche puis allez tuer <b>Greyleaf</b> près de la RST, si ce n'est déjà fait, qui droppera des <b>baies de belladone</b> dans votre sac.</p>",
        "images": [],
        "order": 8
      },
      {
        "title": "Un acte de noblesse, la plume argentée",
        "description": "<ul>\n  \n  <li>\n<p>Retournez au château de Silversky, et assurez-vous d'abord que l<b>'Evêque Crowbanner</b> est malade (3ème étage) : \"Oooh...Aïe! Je souffre! S'il vous p...plaît... aidez-moi... Dites à... la princesse Delilah... de venir\".</p>\n</li>\n  <li>\n<p>Puis parlez à <b>Delilah</b> (3ème étage, au-dessus de l'Evêque) et dites-lui \"<b>aide</b>\" (parfois vous aurez juste à cliquer sur elle). Elle vous enverra chez le chambellan <b>Thomar</b> (1er étage, centre gauche). A Thomar dites \"<b>Delilah</b>\", \"<b>aider</b>\", \"<b>Acte de noblesse</b>\" \"<b>oui</b>\" et il vous dira de donner l’herbe de Cuthana à la princesse Delilah.</p>\n</li>\n  <li>\n<p>Retournez voir <b>Delilah.</b> Dites-lui \"<b>remercier</b>\" et elle vous remerciera en vous proposant de choisir une <b>récompense</b> :</p>\n</li>\n  <li>\n<p>{Princesse Delilah}\":\" Qu'est-ce qui vous plairait? Dites-le moi, qu'il s'agisse d'une \"prière\", d'une \"guérison\", d'enlever une \"malédiction\" ou...d'\"or\", vous l'aurez. Choisissez soigneusement.\"</p>\n</li>\n  <li>\n<p><b><u><b>Attention</b> !!!!!!!!</u> Choisissez \"Malédiction\"</b> : Elle retirera de votre âme la \"<b>marque que Balork</b>\" traça le jour où vous l’avez tué :</p>\n</li>\n  <li>\n<p>{Princesse Delilah} : Je vois que vous avez été maudit par Balork, ce démon diabolique. Peut-être pourrais-je vous rendre votre bonne action en vous aidant à ce sujet? Est-ce que cela vous convient?</p>\n</li>\n  <li>\n<p>Répondez-lui : <b>oui</b> puis <b>\"Stoneheim\"</b> et elle vous donnera <b>la plume argentée.</b></p>\n</li>\n  <li>\n<p>Dites-lui éventuellement \"<b>Oracle</b>\". Elle vous renseignera.</p>\n</li>\n  <li>\n<p>Comme <b>récompense</b> vous pourrez apprendre de l'évêque Crowbanner les sorts Guérison et/ou Sanctuaire (car s'il est malade, il n’apprendra de sorts à personne).</p>\n</li>\n  <li>\n<p><b>Remarque</b> : Faites bien <b>attention</b> à vos réponses car si vous ne dites pas \"<b>Malédiction</b>\" il vous faudra refaire une partie de la quête pour obtenir à nouveau l'herbe de Cuthana !</p>\n</li>\n\n</ul>",
        "images": [],
        "order": 9
      },
      {
        "title": "Si vous souhaitez obtenir à nouveau l’herbe de Cuthana",
        "description": "<ul>\n  \n  <li>\n<p>Il vous faudra refaire partiellement la quête pour chacune des clefs. Les six clefs étant nécessaires pour que le dernier des 12 frères, \"<b>horreur repoussante</b>\" vous téléporte auprès du {Spectre de Théopold}</p>\n</li>\n  <li>\n<p>Clef #1 – {Reynen Aspicdart} – il faut refaire droper sa clef à l'aide de la clé de Reynen (que vous avez déjà)</p>\n</li>\n  <li>\n<p>Clef #2 –{Chambellan Thomar} - vous redonne directement la clé à votre demande</p>\n</li>\n  <li>\n<p>Clef #3 –{Zhakar} - vous vend une autre clef 50K PO</p>\n</li>\n  <li>\n<p>Clef #4 –{Bane Gwengad} - vous la donne, en insistant comme d’habitude</p>\n</li>\n  <li>\n<p>Clef #5 –{Morindin Tennglaw} - vous redonne directement la clé à votre demande</p>\n</li>\n  <li>\n<p>Clef #6 –{Mordrick Maensel} - il faut aller chercher son épée de puissance et la lui apporter</p>\n</li>\n  <li>\n<p>Retournez voir le 12ème frère \"horreur repoussante \" qui vous expédie auprès du Spectre de Théopold qui ne vous posera pas les énigmes mais vous expédiera directement auprès du \"coffret mystérieux \" dans lequel se trouve la « <b>cuthana</b> ».</p>\n</li>\n  <li>\n<p><b>PNJ</b> impliqués:</b> Roi Théodore, tous les frères morts-vivants, Celydia, Laren, Belagan, Tobias, Reynen Aspicdart, Terwin, Thomar, Elysana Blackrose, Zhakar, Moonrock, Bane Gwengad, Jon Hamhoo, Jamar, Kalir, Morindin le chasseur, Celestyna Avel, Mordrick Mansel, Spectre de Théopold, Princess Delilah</p>\n</li>\n  <li>\n<p><b>Récompenses acquises </b>: l'herbe de Cuthana, une plume argentée, 50.000 xp.</p>\n</li>\n  <li>\n<p>Vous pouvez apprendre Guérison et/ou Sanctuaire de l'évêque Crowbanner (s'il est en rémission).</p>\n</li>\n\n</ul>",
        "images": [],
        "order": 10
      },
      {
        "title": "Le rituel de Zhakar",
        "description": "<p>Allez voir Zhakar dans sa tour et dites lui \"<b>Rituel</b>\". Il vous demandera les objets suivants afin de préparer le rituel pour le transfert vers Stoneheim :</p>\n<br/>\n<ul>\n  <li>1 (Un) os de squelette des Sorciers squelettes</li> <li>1 Fiole de sang gobelin des gobelins</li> <li>1 Fiole d’eau cristalline des Pillards des dunes, Grott ou un de ses acolytes.</li> <li>1x Baies de belladone droppées par Greyleaf</li> <li>La plume argentée donnée par la princesse Delilah (bénéfique) ou par Shadeen (maléfique)</li> <li>5000 pièces d’or</li>\n</ul>\n<br/>\n<p>Une fois le rituel lancé, vous aurez à attendre 1 heure en temps réel avant que Zhakar ne vous envoie sur Stoneheim quand vous lui reparlerez.</p>\n<br/>\n<p><b>Remarque 1 :</b> Zhakar se chargera de retirer les clefs qui restent dans votre inventaire au moment de la téléportation sur StoneHeim.</p>\n<br/>\n<p><b>Remarque 2</b> <b>:</b> Si vous avez oublié de mettre votre sanctuaire au temple de Stonecrest (pour 25.000 po), retournez voir Zhakar et dites-lui \"rituel\". Il vous téléportera à nouveau sur SH pour la modique somme de 200 x votre level.</p>\n<br/>\n<p><b>PNJ</b> impliqué </b>: Zhakar</p>\n<br/>\n<p><b>Récompense</b> acquise</b>: Accès à Stoneheim</p>\n<br/>\n<p></p>",
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
        "description": "<p>Avant de quitter Arakas, Kalastor mentionna qu’une de ses amies, Shadeen, est sur Raven’s Dust. Allez au château de Bane Gwengad (sur l'île de Bane via le désert et le connecteur) et descendez dans le donjon du château. Cherchez Shadeen (voyez la carte : elle est dans une petite pièce à l’est, un peu après le fou qu'il faut tuer pour pouvoir parler à Bane). Une fois que vous l’avez trouvée, dites-lui \"Kalastor\" et elle vous demandera d'empoisonner l'évêque, éventuellement d'aller voir Elysana Blackrose (située à Silversky, sud-est du temple). PS : allez voir Elysana même si Shadeen ne vous parle que de l'évêque.</p>\n<br/>\n<p>Shadeen ne vous parle pas ??? Comme vous voulez empoisonner l'évêque, il est évident qu'il doit être en bonne santé pour que Shadeen trouve utile de vous répondre !! (attendez qu'il soit guéri par un autre joueur. Si personne ne le guérit, il change d'état toutes les 3 heures... surveillez-le)</p>",
        "images": [],
        "order": 0
      },
      {
        "title": "Elysana",
        "description": "<p>Allez voir Elysana et dites \"Poison\", \"oui\" et elle vous demandera des yeux de kraanian, une pomme cirée et un saphir. Dites \"Pierre de saphir\" et elle vous dira que le Roi Théodore doit sûrement en avoir une, puis dites \"pomme de cire\" et elle vous enverra voir Samuel. Enfin dites \" yeux de kraanian\" et elle vous dirigera vers Zhakar.</p>",
        "images": [],
        "order": 1
      },
      {
        "title": "Le saphir",
        "description": "<ul>\n  \n  <li>\n<p>Allez voir le Roi Théodore (3ème étage) et dites \"Pierre de saphir\". Il vous demandera une peau d’antilope tannée. Dites \"tannée\" et il vous enverra voir Samuel (au 2ème, près du trône).</p>\n</li>\n  <li>\n<p>Dites à Samuel \"tannée\" et il vous enverra voir Drardos (dans une maison vers (<b>1590,2575</b>) près de l’entraîneur de \"Transpercer Armure\"). Drardos vous demande une peau d’antilope que vous pouvez facilement vous procurer en tuant le-dit animal. Muni d'une peau d'antilope, dites \"tannée\" à Drardos. Il vous demandera 1.400 pièces d’or, répondez \"oui\" et il vous tannera la peau (parfois il peut rater et s'excusera platement).</p>\n</li>\n  <li>\n<p>Ensuite retournez voir le Roi Théodore. Dites \"pierre de saphir\", \"oui\" et il vous échangera la peau tannée contre un saphir. <b>Attention</b> :</b> Le roi vous prendra toutes les peaux d'antilope tannées que vous avez sur vous !!</p>\n</li>\n\n</ul>",
        "images": [],
        "order": 2
      },
      {
        "title": "La pomme de cire",
        "description": "<p>Allez voir Samuel et dites-lui \"pomme de cire\". Si vous n’avez pas effectué la quête du Bouffon Morbide, il vous demandera de la faire. Pour la pomme cirée, il vous demandera de lui ramener 10 cires de guêpes et 1.000 pièces d’or. Une fois que vous avez tout, retournez voir Samuel et dites \"pomme de cire\", \"oui\" et il vous donnera la pomme.</p>",
        "images": [],
        "order": 3
      },
      {
        "title": "Les yeux de Kraanian",
        "description": "<p>Maintenant allez voir Zhakar (Tour des Sorciers) et dites \"yeux de kraanian\". Il vous dira que des guerriers de la nuit les lui ont volés et il vous dirigera vers Bane Gwengad au château de Bane sur l'île de Bane (celui-ci ne vous parlera que si vous avez effectué la quête d’audience à Bane Gwengad). Allez voir Bane et dites-lui \"yeux de kraanian\" afin qu’il vous les vende pour 5.000 pièces d’or.</p>",
        "images": [],
        "order": 4
      },
      {
        "title": "La pomme empoisonnée",
        "description": "<ul>\n  \n  <li>\n<p>Retournez voir Elysana Blackrose et dites \"Poison\". Elle vous demandera de revenir après avoir attendu une heure IRL. Après cette pause réparatrice et bien méritée, revenez et dites-lui à nouveau \"Poison\" et elle vous donnera la pomme empoisonnée. Allez voir l'évêque Crowbanner (près du trône du château) et dites \"donner pomme\" (-23 karma).</p>\n</li>\n  <li>\n<p>Remarque #1: Vous pouvez effectuer cette quête à volonté</p>\n</li>\n  <li>\n<p>Remarque #2: Shadeen ne vous parlera que si l'évêque Crowbanner est en bonne santé.</p>\n</li>\n  <li>\n<p><b>PNJ</b> impliqués: Shadeen, Elysana Blackrose, Roi Théodore, Samuel, Drardos, Zhakar, Bane Gwengad, l'évêque Crowbanner</p>\n</li>\n\n</ul>",
        "images": [],
        "order": 5
      },
      {
        "title": "Les chroniques de l'apocalypse - la plume argentée",
        "description": "<p>Après avoir terminé la quête de la pomme empoisonnée (voir ci-dessus), parlez à Shadeen et dites \"Mission\", \"oui\" et elle vous donnera un parchemin de mauvaise action.</p>\n<br/>\n<p>Pour obtenir la plume vous avez besoin de 4 items puis d'un ami qui vous aidera en volant le contenu du coffre au 1er étage du château de Silversky. Ceci va détourner l'attention des gardes de Ménark et celui-ci devra vous donner les \"chroniques\".</p>\n<br/>\n<p>Les 4 items sont :</p>\n<br/>\n<ul>\n  <li>un <u>parchemin de mauvaise action</u> déjà obtenu chez Shadeen.</li> <li><u>une chope de bière vide</u> obtenue chez Thorbin Kaloneg dans la taverne de Silverky, pour la modique somme de 10 po.</li> <li><u>une dent de tigre</u> obtenue à Lighthaven en parlant à Sigfried le marchand d'armes. Dites-lui \"dent\", \"défaire\", \"oui\" et il vous vendra une \"dent de dragon \" pour 200 pièces d’or. Allez voir Nafuhr Morzhol (marchand d'armure de Silversky, près du château) et dites-lui \"dent de dragon\". Il vous dira que la dent est fausse. Revenez à Lighthaven voir Sigfried et dites-lui \"dent de dragon\" et il admettra que la dent est fausse. Pour se faire pardonner, il vous donnera une \"dent de tigre \".</li> <li><u>10 000 pièces d'or</u> environ.</li>\n</ul>\n<br/>\n<p>Une fois réunis, remettez tous les items à votre ami et ensuite :</p>\n<br/>\n<p>Votre ami pourra parler à Doremas (situé à l’ouest de la fontaine de Silversky) et ce dernier lui indiquera les noms des <b>PNJs</b> complices pour obtenir les combinaisons pour ouvrir le coffre.</p>\n<br/>\n<p>Pour trouver la combinaison votre ami doit dire \"Combinaison\" aux <b>PNJ</b> suivants : Rondy (près des champs de Silversky), Geram (Taverne de Silversky) et Talon Dirsell (le banquier, près du coffre du château de Silversky, au premier étage à gauche).</p>\n<br/><ol><li>Rondy (dans une maison vers <b>1590, 2500</b>) désirera jouer à un jeu (celui du plus (GRAND) ou du moins (PETIT) allant de 1 à 50) jusqu’à trouver le nombre. Chaque essai coûte 1.000 pièces d’or. L'ami doit lui dire \"combinaison\" et tenter en essayant DEVINER 10 (par exemple) Continuez jusqu’à trouver le premier nombre de la combinaison. (Mot-clé : \"combinaison\", \"deviner XX\" (XX=nombre allant de 1 à 50))</li> <li>Geram (à la taverne) vous demandera une pièce d’or. Dites \"oui\" puis \"Combinaison\" et il vous demandera la \"chope de bière\" . Dites à nouveau \"oui\" à Geram et il vous donnera le second nombre de la combinaison</li> <li>Talon Dirsell (1er étage gauche - pour <b>rappel</b>) et dites-lui \"combinaison\". Il demandera la dent de tigre. Dite ''oui'' et Il vous donnera le 3e nombre de la combinaison.</li></ol><br/>\n<p><br/></p>\n<br/>\n<p>Votre ami doit ensuite se positionner près du coffre à ouvrir (1er étage du château à gauche) et VOUS vous devez aller vous mettre à côté de Menark (1er étage du château, coursive nord). Exemple : Si la combinaison qui vous est révélée est 1 DROITE, 20 GAUCHE et 10 DROITE, votre ami devra cliquer une fois sur le coffre, et taper DROITE 1, recliquer sur le coffre, taper GAUCHE 20, etc... (n'oubliez pas les majuscules ni de saisir GAUCHE ou DROITE avant le nombre).</p>\n<br/>\n<p>Dès que votre ami a ouvert le coffre (en récompense, il reçoit 10.000 xp et entre 3.000 et 5.500 pièces d’or), il doit vous prévenir. Vous devez alors cliquer rapidement sur Menark et lui dire \"chronique de l'apocalypse\" (<b>note</b> : pas de \"s\" à \"chronique\"). Il vous demandera si vous le menacez, répondez \"oui\" et il tentera d’appeler les gardes, mais en vain. La raison est simple : les gardes tentent d’attraper votre ami voleur qui a ouvert le coffre !! Il est donc obligé de vous donner les Chroniques de l'Apocalypse.</p>\n<br/>\n<p><b>IMPORTANT</b> : <b>Retournez voir Shadeen</b> et dites \"oui\", \"récompense\". Vous serez récompensé par 5.000 xp et par une plume argentée, qui vous sera utile pour la quête d’accès à Stoneheim.</p>\n<br/>\n<p><b>Remarque #1</b>: Il est possible que Shadeen vous demande de tuer Iago Caballero tout d’abord (il est au sud-ouest de Silversky). Si c’est le cas allez le tuer et dépêchez-vous de revenir voir Shadeen car si Iago réapparaît, vous devrez retourner le tuer !</p>\n<br/>\n<p><b>Remarque #2:</b> Si vous perdez votre parchemin d’acte maléfique, retournez voir Shadeen pour en demander un autre.</p>\n<br/>\n<ul>\n  <li>PS: Ne pas faire d avance et mettre au coffre il sera pas bon si vous le ratter faut le perso qui fait les chronique retourne lui meme a shadeen demander les parcho de mauvaise action.</li>\n</ul>\n<br/>\n<p><b>PNJ</b> impliqués:</b> Shadeen, Rondy, Geram, Talon Dirsell, Sigfried, Nafuhr Morzhol, Menark</p>\n<br/>\n<p><b>Mini Boss impliqué</b>: Iago Caballero (si nécessaire)</p>\n<br/>\n<p><b>Récompense</b> acquise:</b> Pour vous, la plume argentée, 5.000 xps. Pour l'ami qui vous a aidé, 10.000 xps et entre 3.000 et 5.500 pièces d’or.</p>",
        "images": [],
        "order": 6
      },
      {
        "title": "Damien",
        "description": "<ul>\n  \n  <li>\n<p>La plume argentée est maintenant dans votre besace. Prenez aussi 50.000 pièces d'or.</p>\n</li>\n  <li>\n<p>Rendez-vous chez le <b>PNJ</b> nommé Monseigneur Damien (Ouest du pont menant au caves orques (<b>1025,2100</b>)). Dites-lui \"Shadeen\", \"Non\". Il fera apparaître des monstres nommés Assassins masqués. Tuez-les.</p>\n</li>\n  <li>\n<p>Reparlez à Damien. Dites \"aide\", \"oui\" et il vous demandera de réaliser quelques travaux pour lui. Dites \"cadeau\", \"preuve\", \"abandon\" et il vous demandera si vous êtes d'accord de payer la somme de 50 000 pièces d’or. Répondez \"non\" et il vous demandera 25.000 pièces d’or. Dites \"oui\", \"comment\" et il vous donnera un parchemin bien enroulé, et vous dira que vous avez 3 tâches a accomplir avant de tuer Shadeen. (si vous êtes bloqué, au moment ou il vous demande 50K or dites \"oui\" puis \"je veux m'allier avec Ogrimar\", \"preuve\" et \" comment\").</p>\n</li>\n\n</ul>",
        "images": [],
        "order": 7
      },
      {
        "title": "Tâche 1 : Parler aux PNJ",
        "description": "<p>Allez parler dans l'ordre à tous ces <b>PNJ</b> :</p>\n<br/><ol><li>Allez à Silversky et trouvez TALIRON (marchand d’armures à côté du magasin de potions). Dites lui \"visiteur\" et il vous enverra voir Belagan (l’assistant d’Adriana, salle d'entraînement).</li> <li>Dites deux fois \"visiteur\" à BELAGAN et il vous enverra voir Nafuhr Morzhol (marchand d’armures à côté du château).</li> <li>Dites encore \"Visiteur\" à NAFUHR MORZHOL (marchand d'armes en <b>1455,2470</b>) et il vous enverra voir Boreas (marchand de potions). S'il reste muet allez directement voir Boreas (vérifiez aussi que vous avez assez d'or sur vous !).</li> <li>Dites encore \"visiteur\" à BOREAS et il vous enverra voir Kiadus (marchand d’armes au premier étage du château).</li> <li>Dites \"visiteur\" puis \"soeur\" à KIADUS et il vous demandera 2.000 pièces d’or. Dites \"oui\", \"soeur\" et il vous dira que la sœur du visiteur est Amandra (maison d’Adriana, salle d'entraînement).</li> <li>Allez voir AMANDRA (<b>1588,2530</b>) et dites-lui \"visiteur\". Elle vous conseillera d’acheter la Lame de Destruction à Kiadus.</li> <li>Allez voir KIADUS et dites-lui \"épée\" deux fois. Il vous demandera 100 milliards de pièces d’or (mais bien sûr, je vais faire un crédit à vie et je reviens…). Dites à nouveau \"épée\", et il demandera 25.000 pièces d’or (il faut toujours marchander !). Achetez l’épée et retournez voir Amandra.</li> <li>Dites \"visiteur\" à AMANDRA. Elle vous dira que l’épée est fausse. Vous devez chercher son frère pour en avoir une vraie… Allez vers la tour des sorciers (Zhakar) puis dirigez-vous vers l’ouest jusqu’à atteindre la mer. Allez maintenant au Sud jusqu’à arriver à la maison du frère d’Amandra : Haden.</li> <li>Dites \"lame de destruction\" à HADEN Shadeen\" puis \"aide\", \"Stoneheim\" et il vous enverra voir Zhakar pour le rituel.</p>\n<br/>\n<p><b>PNJ</b> impliqués </b>:</p>\n<br/>\n<ul>\n  <li>Monseigneur Damien, Taliron, Belagan, Nafuhr Morzhol, Boreas, Kiadus, Amandra, Xanth.</li>\n</ul>\n<br/>\n<p><b>Mini Boss impliqués : </b></p>\n<br/>\n<ul>\n  <li>Haden, Shadeen la dague</li>\n</ul>",
        "images": [],
        "order": 10
      },
      {
        "title": "Le rituel de Zhakar",
        "description": "<p>Allez voir Zhakar dans sa tour et dites lui \"Rituel\". Il vous demandera les objets suivants afin de préparer le rituel pour le transfert vers Stoneheim :</p>\n<br/>\n<ul>\n  <li>1 os de squelette des Sorciers squelettes</li> <li>1 Fiole de sang gobelin des gobelins</li> <li>1 Fiole d’eau cristalline des Pillards des dunes ou Grott...</li> <li>1x Baies de belladone droppées par Greyleaf</li> <li>La plume argentée donnée par la princesse Delilah (bénéfique) ou par Shadeen (maléfique)</li> <li>5000 pièces d’or</li>\n</ul>\n<br/>\n<p>Une fois le rituel lancé, vous aurez à attendre 1 heure en temps réel avant que Zhakar ne vous envoie sur Stoneheim quand vous lui reparlerez.</p>\n<br/>\n<p><b>A noter </b>que Zhakar se chargera de vous retirer les clefs qui restent dans votre inventaire au moment de la téléportation sur StoneHeim.</p>\n<br/>\n<p><b>PNJ</b> impliqué </b>: Zhakar</p>\n<br/>\n<p><b>Récompense</b> acquise</b>: Accès à Stoneheim</p>\n<br/>\n<p><br/></p>\n<br/>\n<p></p>",
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
        "description": "<p>Allez au sous-sol de Nieve (<b>2482,2202</b>), trouvez <b>Pancake,</b> un kobold près des pommiers (<b>2000,1790</b>). Dites lui \"Mission\".<br/>Partez à la chasse aux trois dragons de Raven's Dust.</p>\n<br/>\n<p>Retournez voir <b>Pancake</b>, dites lui \"mission\", \"deuxième\", \"part\" et \"échange\". Il vous enverra chercher</p>\n<br/>\n<ul>\n  <li>un anneau de platine,</li> <li>des bottes noires en peau de lézard,</li> <li>un pourfendeur de gobelin.</li>\n</ul>\n<br/>\n<p>Avec tous ces objets, dites \"échange\" a <b>Pancake</b> pour obtenir un parchemin de StoneCrest.</p>\n<br/>\n<p>Une fois arrivé à Stonecrest, parlez rapidement à <b>Forbes Nash</b> (<b>200,760</b>). Dites lui \"travail\" et il vous proposera un pacte. Cela fixera votre sanctuaire dans l'enclos des cochons!!</p>\n<br/>\n<p></p>",
        "images": [],
        "order": 0
      }
    ],
    "credits": [
      "T4C NMS Révolution wiki"
    ]
  },
  {
    "title": "La lettre de Crimsonscale (RD)",
    "slug": "la-lettre-de-crimsonscale-rd",
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
        "description": "<ul>\n  \n  <li>\n<p>C’est une quête immense qui se déroule en 3 parties: Arakas, Raven’s Dust, puis le dénouement s’effectue sur Arakas.</p>\n</li>\n  <li>\n<p>Elle est très intéressante par l'XP qu'elle donne (principalement sur Arakas) et par certains des items offerts (comme l'amulette de renouveau si vous êtes lanceur de sorts).</p>\n</li>\n  <li>\n<p>Si vous pensez renaître vous pouvez vous arrêter au Barde (pour l'xp donnée et l'accès au Mausolée - ou vous pourrez faire beaucoup d'xp, surtout en prêtre lumière) ou à la Bibliothèque (pour l'xp seule car le bracelet de flammes donné par le Dragon Crimsonscale est supprimé sur NMS).</p>\n</li>\n  <li>\n<p><b>Tip</b> : Petits <b>indices</b> pour savoir ou vous en êtes dans la quête si vous l'avez commencée il y a un bout de temps :-))</p>\n</li>\n  <li>\n<p>La tablette de pierre runique, la gemme sombre et la Caledbolg sont supprimées aux renaissances. Il est impossible de supprimer la Caledbolg donc si vous avez la gemme sombre et pas la Caledbolg, il y a des chances que vous en soyez aux adorateurs (désert RD) ou peu avant. Si vous avez la Caledbolg, allez parler au Grand Prêtre de LH puis à Efnisien.</p>\n</li>\n\n</ul>",
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
        "description": "<p>Allez au temple de Lighthaven et parlez à Kilhiam. Elle vous donnera une lettre (double clic dans l’inventaire) qui dit ceci:</p>\n<br/>\n<p>\"Chère ami(e), vous trouverez cette lettre un peu bizarre, veuillez m’en excuser mais le problème est de la plus grande importance et avant que commence votre journée, je voudrais que vous compreniez parfaitement la situation dans laquelle nous avons été forcés d’entrer. Depuis ce jour, votre vie ne sera plus jamais la même. Je ne peux pas tout expliquer dans cette lettre, mais je vous recommande fortement d’aller voir celui que l’on nomme Efnisien. Il habite à l'étage d'une petite maison située à l’est du temple de Lighthaven. Rencontrez-le et il vous expliquera ce que vous devez connaître.\"</p>",
        "images": [],
        "order": 2
      },
      {
        "title": "Efnisien et ses gardes",
        "description": "<p>Dirigez-vous vers la maison d’Efnisien située à l'Est de la banque de Lighthaven et montez à l'étage. Dès que vous cliquez sur lui, 3 assassins apparaissent. Tuez-les et cliquez à nouveau sur Efnisien. Dites \"Gardes\", \"Assassins\", \"Olin Haad\", \"Siège de la ville\", \"Quelque chose\", \"Services\", \"Refusé\", \"Visite\", \"Lettre\" et vous en apprendrez sur Olin Haad et le cœur de pierre. Efnisien mentionne également que vous devez aller parler à Olin Haad mais que, si vous voulez que ce dernier vous porte attention, vous devez donnez une raclée à ses gardes !</p>",
        "images": [],
        "order": 3
      },
      {
        "title": "Le château d'Olin Haad",
        "description": "<p>Dites \"Adieu\", dirigez vous vers la grotte (cave) de Lighthaven (au sud-ouest de la fontaine), entrez-y et trouvez le château d’Olin Haad (<b>attention</b> aux gardes, une bénédiction - même si c'est seulement celle de Zélina du temple - sera la bienvenue). Cliquez sur la porte du château et vous serez téléporté à l’intérieur. Suivez le tapis rouge et vous trouverez Olin Haad. Essayez de discuter avec lui. Il va refuser, ressortez et tuez environ 20 de ses gardes.</p>\n<br/>\n<p>Puis retournez lui parler. Dites \"Chercher\", \"Combat\" et vous serez téléporté dans une pièce avec 4 Gardes d’Elite d’Olin Haad. LAISSEZ-VOUS TUER ! Ils ne mourront qu’en essayant de vous tuer ! Vous serez re-téléporté (tout rouge, avec 5% de vos PV, mais vous ne serez PAS mort) aux côtés d’Olin Haad. A ce point de la quête, vous recevrez l’aura Colère des Anciens (Wrath of the Ancients), un sort de protection permanent qui blesse de temps à autre les ennemis qui vous attaquent. Continuez le dialogue avec Olin Haad, en disant : \"Ils\", \"Haruspice\", \"Prophétie\", \"Graines\", \"Moi\", \"Nouvelle race\", \"Réponse\" et vous apprendrez des choses au sujet de la prophétie. Olin Haad mentionnera également que vous devez trouver le Grand Prêtre Gunthar et le prévenir qu’il ne pourra quitter Lighthaven en paix, tant qu'il n'aura pas rendu ce qu’il a promis.</p>",
        "images": [
          "/t4c-nms-overview/assets/quests/la-lettre-de-crimsonscale/img_4_0.jpg"
        ],
        "order": 4
      },
      {
        "title": "Grand prêtre Gunthar (au temple, sous-sol derrière le trône)",
        "description": "<ul>\n  \n  <li>\n<p>Retournez au temple de Lighthaven (utilisez votre gemme de téléportation, c'est plus rapide) et cliquez sur la porte derrière le trône. Vous serez téléporté dans la petite pièce. Descendez dans le donjon et trouvez le Grand Prêtre Gunthar. Dites-lui \"Demandes\", \"Pierre\", \"Marchand\", \"Attendez\", \"Nécromancien\", \"Corrupteurs de Gluriurl\", \"Bataille des émanations\", \"Faucheurs de vie\", \"Dragons\", \"Complètement\", \"Theodore XIII\", \"Pierre du coeur\" et vous apprendrez au sujet du culte de Gluriurl, du Cœur de pierre, et de la vente de celui-ci à un marchand. Maintenant dites \"Oui\" afin d’accepter d’aider Gunthar à trouver le Cœur. Dites \"Regarder\" et il vous dira de chercher à Windhowl.</p>\n</li>\n  <li>\n<p>Vous recevez également 1.000 pièces d’or et 10.000 xp.</p>\n</li>\n  <li>\n<p>Continuez le dialogue en disant \"Nomade\" et vous parlera du signe du marchand.</p>\n</li>\n\n</ul>",
        "images": [],
        "order": 5
      },
      {
        "title": "A Windhowl (Ethan, Urik, maison du Nomade)",
        "description": "<ul>\n  \n  <li>\n<p>Rendez vous à Windhowl.</p>\n</li>\n  <li>\n<p>Cherchez la maison de la guilde des Marchands située à gauche du marchand d’armes. Trouvez Ethan chef de la guilde des Marchands et dites-lui \"Nomade\", \"Raté\", \"Agressif\", \"Affaire\", \"Pierre du Cœur\" et il vous parlera un peu plus du Nomade et des marchands. Dès que vous lui aurez parlé de la Pierre du Cœur, il vous dira qu’il a un problème et qu’il ne peut plus perdre son temps avec vous. Dites \"Problème\", \"Taxes\" et il vous parlera des dettes d’Urik le Maître tailleur. Dites \"Mercenaires\", \"Tâche\" et \"oui\", acceptez d’aider Ethan à récupérer l’argent qu’Urik lui doit.</p>\n</li>\n  <li>\n<p>Retournez vers la maison d’Urik, située sous la taverne de Windhowl. Montez à l'étage et parlez à Urik. Dites-lui \"Idiot\", \"Discuter\", \"Affaire\". Il refusera de vous donner l’argent qu’il doit et appellera en renfort 3 voleurs. Mettez les au tapis et reparlez à Urik. Il vous donnera alors 1.000 pièces d’or et l’argent de ses dettes.</p>\n</li>\n  <li>\n<p>Retournez à la Guilde des Marchands et parlez de nouveau à Ethan. Cliquez sur lui, dites-lui \"Argent\" et il prendra son dû.</p>\n</li>\n  <li>\n<p>Vous recevez quant à vous 40.000 xp.</p>\n</li>\n  <li>\n<p>Dites-lui maintenant \"Nomade\", \"Leçon\", \"Suspecte\", \"Confrerie Obsidienne\", \"Aider\" et il vous dira qu’il suspecte qu’Urik et le Nomade travaillent ensemble. Dites \"Clefs\" et il vous donnera un lot de clés qu’il a dérobé chez Urik. Il mentionnera également qu’une de ces clés ouvrirait peut-être la maison du Nomade. Dites \"Demeure\" et il vous indiquera où se situe celle-ci, quelque part au sud de la ville.</p>\n</li>\n  <li>\n<p>Dirigez-vous vers le sud-ouest et cherchez la maison du Nomade. Elle est située à côté des remparts. Cliquez sur la porte, la clé disparaîtra et vous serez téléporté à l’intérieur de la maison. Montez au premier étage et commencez à ouvrir les 4 coffres (faites Ctrl+n pour voir les coffres). Dans un des coffres, vous trouverez une petite clé. Cliquez à nouveau sur le coffre et vous trouverez, cachées dans un double fond, 1.000 pièces d’or. Montez au deuxième étage et ouvrez les deux coffres. Dans l’un des deux, vous trouverez la lettre d’Owain.</p>\n</li>\n  <li>\n<p>La lettre dit (double clic dans l’inventaire):</p>\n</li>\n  <li>\n<p>\"Cher Nomad,</p>\n</li>\n  <li>\n<p>Nous avons finalement trouvé la grotte maudite que vous avez recherchée tant d’années. La semaine dernière, j’ai envoyé une équipe afin de retrouver la relique que vous aviez demandée mais ils ne sont jamais revenus… J’en ai parlé avec Urik, et il me força à envoyer une deuxième équipe, dont seulement un seul hommes est revenu, les bras rongés ! J’arrête. Vous ferez ce que vous voulez mais je n’envoie plus personne dans cette place damnée. J’attendrai au camp des Druides au Nord-Est d’Arakas dix jours. Si pour n’importe quelle raison, j’y apprends que vous amenez Urik avec vous, ou si vous ne venez pas, je partirais.</p>\n</li>\n\n</ul>",
        "images": [
          "/t4c-nms-overview/assets/quests/la-lettre-de-crimsonscale/img_6_0.jpg"
        ],
        "order": 6
      },
      {
        "title": "Le commandant Owain au camp des druides d'Arakas",
        "description": "<ul>\n  \n  <li>\n<p>Traversez entièrement Arakas pour vous dirigez vers l’Ordre de la Nature (Camp des Druides au Nord-Est d'Arakas) et trouvez Yrian Holenarbed situé dans une maison à l’Est de Stonehenge. Parlez-lui et il vous demandera si vous êtes le voyageur envoyé par les vents afin de l’aider. Dites \"Oui\", \"Etat\", \"Voyageur\", \"Malheurs\", \"Odeur\", \"Resistance\", \"Nomade\" et vous apprendrez la disparition du Grand-père et la nausée causée par le Nomade. Continuez le dialogue en disant \"Bâton\", \"Commandant\" et vous apprendrez qu’il pourrait guérir cette nausée s’il avait le Sceptre de Solinae, mais le Nomade a ordonné à son Commandant de prendre ce sceptre. Il soulignera également que les troupes du Nomade sont stationnées au sud-est du camp des Druides à proximité de la rivière.</p>\n</li>\n  <li>\n<p>Dirigez-vous donc vers le Sud-Est, trouvez et tuez le commandant Owain (et, si vous le pouvez, ses serviteurs, les soldats d’Olin Haad).</p>\n</li>\n  <li>\n<p><b>Attention</b>:</b> Le commandant Owain et ses soldats sont difficiles à bas niveau. Trouvez un ami qui peut vous aider ou soyez sûr de transporter beaucoup de potions de guérison !</p>\n</li>\n  <li>\n<p>Une fois le commandant Owain mort, le sceptre de Solinae apparaît dans votre inventaire. Retrouvez Yrian Holenarbed et cliquez sur lui. Yrian prendra le Sceptre.</p>\n</li>\n  <li>\n<p>Vous recevrez 75.000 xp.</p>\n</li>\n  <li>\n<p>Dites-lui \"Nomade\" et il vous dira que le Nomade recherchait une crypte. Dites \"Crypte\" et il vous parlera d’une route menant au temple située à proximité d’un campement quelque part à l’ouest. Vous recevrez également l’anneau gardien de vitalité et la gemme de vitalité (Guardian Ring of Vitality et Gem of Vitality). Equipez l'anneau et faites une macro avec la gemme (voyez ici comment faire).</p>\n</li>\n\n</ul>",
        "images": [
          "/t4c-nms-overview/assets/quests/la-lettre-de-crimsonscale/img_7_0.jpg"
        ],
        "order": 7
      },
      {
        "title": "La gitane",
        "description": "<p>Dirigez-vous vers le campement de Gypsy la Gitane, situé au sud-est du pont allant en direction des grottes de la Vallée Maudite (en venant du Sud, une fois passé le pont à l'ouest de l’île aux démonicons, tournez immédiatement à gauche puis dès que vous le pouvez dirigez vous vers le nord). Trouvez la Gitane et parlez-lui. Dites \"Voyageur\", \"Voyante\", \"Nomade\" et elle vous dira qu’elle vous aidera à trouver le Nomade. Avant cela, elle vous posera quelques questions afin qu’elle s’harmonise avec votre aura. Répondez \"Oui\", \"Oui\", \"Donneur de vie\" et elle vous dira qu’il se trouve dans un ancien temple d’une divinité morte nommée Gluriurl. Ce temple se situe sur une île séparée de la terre ferme. Afin d’atteindre cette île, vous devez traverser une grotte se situant au nord.</p>",
        "images": [],
        "order": 8
      },
      {
        "title": "La crypte du nomade (le coeur et le sang de Gluriurl)",
        "description": "<ul>\n  \n  <li>\n<p><b>La crypte du Nomade</b></p>\n</li>\n  <li>\n<p> Entrez-y et continuez vers le Nord. Méfiez vous du Kraanien, il fait 200 pv de dégâts par coup qu'il vous porte. Poursuivez jusqu’à l’autel. La, vous verrez un portail et deux tourbillons.</p>\n</li>\n  <li>\n<p><b>La tombe du Déchu : Le coeur de Gluriurl</b></p>\n</li>\n  <li>\n<p>Entrez dans le tourbillon de droite dans la cave des coeurs corrompus. Marchez vers le Nord et vous arriverez à la tombe du Déchu. Cherchez les guerriers Déchus, situés au nord de la crypte. Tuez-les jusqu’à ce qu’ils laissent tomber un cœur corrompu (à petit niveau faites vous aider). Ramassez-le et entrez dans le portail derrière eux. Vous serez à nouveau téléporté à côté de l’autel.</p>\n</li>\n  <li>\n<p><b>La cave de la corruption : le sang de Gluriurl</b></p>\n</li>\n  <li>\n<p>Entrez maintenant dans le tourbillon de gauche et vous arriverez à la cave de la corruption. Allez vers l'ouest pour trouvez le puits portant l'inscription \"ici repose le sang de Gluriurl\", cliquez dessus et vous collecterez le sang de Gluriurl dans une bouteille (cette partie est difficile, être béni et rempli de potions est conseillé à bas level). Entrez enfin dans le portail et vous vous retrouverez de nouveau à proximité de l’autel.</p>\n</li>\n  <li>\n<p>Touchez l’autel et le cœur de Gluriurl commencera à battre, obligeant le portail à miroiter en retour. Plongez dedans et votre vision se brouillera pendant un court moment…</p>\n</li>\n  <li>\n<p><b>La crypte des pierres sombres</b></p>\n</li>\n  <li>\n<p>En passant le portail vous arriverez à la Crypte des pierres sombres. Allez vers le nord-ouest et vous trouverez une cage thoracique. Touchez-la et vous recevrez la gemme sombre (Darkstone) et le message suivant vous apparaîtra :</p>\n</li>\n  <li>\n<p>\"Une gemme sombre flotte dans les airs là où le cœur devrait être. Avec grands soins, vous prenez la gemme sombre et la remplacez par le cœur de Gluriurl\".</p>\n</li>\n  <li>\n<p>La voix de la Gitane résonne alors dans votre tête: [Nom du joueur] ! Vous devriez venir me voir, j’ai quelque chose d’important à vous montrer !\".</p>\n</li>\n  <li>\n<p>Vous serez récompensé par 125.000 xp.</p>\n</li>\n\n</ul>",
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
        "description": "<ul>\n  \n  <li>\n<p>Retournez voir la Gitane et parlez-lui. Elle mentionnera qu’elle ressent la présence du coeur maléfique sur vous. Dites \"Coeur maléfique\", \"Rêves\", \"Cadavre délabré\", \"Plan\", \"Sacrifice\" et vous en apprendrez plus au sujet de la pierre noire maudite, les rêves étranges de la Gitane et votre nouvelle tâche. Vous devez rapporter la pierre noire au temple d’Arthek à Lighthaven. Dites \"Quelque chose\" et elle vous offrira (selon votre choix) :</p>\n</li>\n  <li>\n<p>- Amulette de Renouveau et Gemme de Renouveau (indispensable aux lanceurs de sorts) (Amulet of Renewal and the Gem of Renewal)</p>\n</li>\n  <li>\n<p>- Amulette de Régénération et Gemme de Régénération (Amulet of Regeneration and the Gem of Regeneration)</p>\n</li>\n  <li>\n<p>- Carquois de stabilité gris (110 dext, 20 Force) (Trueshot's Quiver)</p>\n</li>\n  <li>\n<p>Votre choix fait, la Gitane vous conseille de vous rendre rapidement au temple de LightHaven (équipez l'amulette et faites une macro avec la gemme).</p>\n</li>\n\n</ul>",
        "images": [],
        "order": 10
      },
      {
        "title": "Le chef des brigands Gorlok Bloodaxe",
        "description": "<ul>\n  \n  <li>\n<p>Rendez-vous au temple de Lighthaven (utilisez la gemme de téléportation). Tentez de prendre la porte menant au grand Prêtre Gunthar :</p>\n</li>\n  <li>\n<p>La porte est fermée mais il y a un message dessus:</p>\n</li>\n  <li>\n<p>\"[Nom du joueur], je vous prie de bien vouloir m’excuser de ne pas être là pour vous accueillir, mais j’avais quelque affaire urgente à régler. Si vous désirez me rencontrer, parlez au prêtre du temple.\"</p>\n</li>\n  <li>\n<p>Allez parler avec Frère Kiran. Il vous demandera si vous veniez voir le Grand Prêtre Gunthar. Répondez \"Oui\" et il vous dira qu’il a été invité à une réunion avec le chef de son ordre, il semblait qu’il avait quelque sérieuse affaire à régler. Dites \"Importantes choses\", \"Maison du Bourgmestre\" et il vous dira de le chercher dans un grand bâtiment situé à la fin de la rue partant vers le sud-est. Il vous mentionnera Kirlor Dhul, si vous avez des doutes.</p>\n</li>\n  <li>\n<p>Dirigez-vous vers la banque de Lighthaven et cliquez sur Kirlor Dhul le bourgmestre. Il vous informera au sujet d'une certaine agitation qui a eu <b>lieu</b> dans la rue quelques instants plus tôt. Il vous dira aussi que quelqu’un a peut-être vu ce qui s’est passé.</p>\n</li>\n  <li>\n<p>Sortez de la banque et cherchez ce quelqu'un qui est une femme nommée Amelia. Cliquez sur elle et elle vous suppliera de ne pas la tuer car elle n’a rien vu. Dites \"Tuez\", \"Eux\" et elle vous dira que six hommes ont attaqué Gunthar. Dites \"Brigands\", \"Ou\" et elle vous dira qu’ils partaient vers le sud-ouest à partir du pont gobelin ouest, à l’extérieur de la ville.</p>\n</li>\n  <li>\n<p>Dirigez-vous vers le pont de Lighthaven Ouest, et continuez vers l’Ouest jusqu’à ce que vous croisiez un chemin. Continuez sur le chemin vers le Sud et vous arriverez au camp des brigands.</p>\n</li>\n  <li>\n<p>Mettez au tapis les brigands et finalement Gorlok Bloodaxe (pas facile). Une fois que vous l’aurez tué, le Grand Prêtre Gunthar sera libéré (il apparaîtra à vos côtés). Cliquez sur lui et il vous remerciera. Il vous demandera également si vous avez retrouvé la pierre. Répondez \"Oui\" et il vous demandera de vite ramener la pierre à Olin Haad.</p>\n</li>\n  <li>\n<p>Vous serez récompensé par 200.000 xp.</p>\n</li>\n  <li>\n<p>Retournez au château d’Olin Haad en passant par la grotte de LH. Cliquez sur ce dernier et dites \"Nomade\", \"Gemme sombre\", \"Pierre du coeur\", \"Ment\". Vous en apprendrez plus au sujet de la Pierre du Coeur et vous serez téléporté à la bibliothèque du château avec 3 gardes privés d’Olin Haad. Tuez-les (en tuer un seul suffit). Ressortez vite fait de la bibliothèque et reparlez à Olin Haad. Il vous enverra voir Gunthar le Grand Prêtre.</p>\n</li>\n\n</ul>",
        "images": [
          "/t4c-nms-overview/assets/quests/la-lettre-de-crimsonscale/img_11_0.jpg"
        ],
        "order": 11
      },
      {
        "title": "Retour chez Gunthar au temple",
        "description": "<p>Retrouvez voir Gunthar au sous-sol du temple et dites-lui \"Regarder\", \"Cacher\", \"Dieux\", \"Service\", \"Corps physique\", \"Sacrifiant\", \"Transferer\", \"Sceau\", \"Veritables intentions\" et vous glanerez encore quelques informations au sujet de la Pierre du Coeur. Il vous demandera aussi de rencontrer un ancien ami connu comme étant le Barde sans Nom (Nameless Bard). Il vous dira également que vous devez d’abord parler avec Tarnian situé au sud-ouest du square de Lighthaven, près de la côte.</p>",
        "images": [],
        "order": 12
      },
      {
        "title": "Tarnian",
        "description": "<p>Trouvez Tarnian (vers <b>2780, 1200</b>) et parlez-lui. Il vous demandera si vous venez de la part de Gunthar. Répondez \"Oui\" puis dites \"Gemme sombre\", \"Digne\", \"Gluriurl\", \"Crane\", \"Celui\", \"Fils\", \"Meurtre\", \"Fanatique\", \"Croit\" et il vous donnera une tablette de pierre runique (Runed Stone Tablet ou RST). Dites \"Raven's Dust\" et il vous donnera des indications afin de trouver Antonian l’ermite. Il vous apprendra à utiliser la tablette de pierre runique (faites une macro avec la gemme).</p>",
        "images": [],
        "order": 13
      },
      {
        "title": "Antonian l'ermite",
        "description": "<p>Afin de parler à Antonian l’ermite, activez votre macro tablette (RST). Il vous attend dans une maison à l'Est de la tablette de pierre runique d'Arakas, à peu de distance de la crypte d'Arakas.</p>",
        "images": [],
        "order": 14
      },
      {
        "title": "Les 5 nexus",
        "description": "<p>Cliquez sur Antonian et il vous demandera si vous avez la tablette de pierre runique de Tarnian. Répondez \"Oui\", puis \"Tablette de pierre runique\" et vous apprendrez que c’est une pierre de téléportation. Dites \"Clin d'oeil\", \"Prières\", \"Ancestrale\", \"Index d'un nexus\" et vous saurez que pour l’utiliser (pour gagner la tablette de Raven's Dust, mais vous devrez aussi avoir fait l'accès RD au <b>préalable</b>), vous avez besoin d’activer les pierres de connexion. Dites \"Lieu\", \"Emplacement\" et il vous dira que vous pouvez à tout moment utiliser la tablette pour lui rendre visite (cliquer sur la tablette vous téléporte juste à l’ouest d’Antonian l’ermite). A ce moment, il sera tellement absorbé par ses recherches qu’il en oubliera jusqu’à votre présence. Cliquez à nouveau sur lui et dites \"Oui\". Antonian vous donnera alors les indications suivantes :</p>",
        "images": [],
        "order": 15
      },
      {
        "title": "Nexus 1",
        "description": "<ul>\n  \n  <li>\n<p>Voyagez vers le nord au dessus du camp gobelin et cherchez la rivière jusqu’à ce que vous trouviez un pont la traversant. Prenez ce pont et longez la rivière vers l'Est jusqu’à un îlot. Il y a une pierre de connexion tout à l'Est sur cet îlot (<b>attention</b> c'est très chaud...être béni est fortement conseillé). Cliquez sur la pierre et vous obtiendrez le message suivant:</p>\n</li>\n  <li>\n<p>\"Vous placez la tablette de pierre runique sur la pierre de connexion. La pierre de connexion émet un rayon lumineux qui vient frapper la tablette.\"</p>\n</li>\n  <li>\n<p>Puis activez rapidement votre tablette de pierre runique (RST) ou votre gemme HDV avant de mourir :))).</p>\n</li>\n\n</ul>",
        "images": [],
        "order": 16
      },
      {
        "title": "Nexus 2",
        "description": "<ul>\n  \n  <li>\n<p>Utilisez la tablette afin de retourner voir Antonian l’ermite. Cliquez sur lui, dites \"Oui\" et il vous donnera la direction de la 2e pierre de connexion (située sur l'île aux Kraanians) :</p>\n</li>\n  <li>\n<p>Prenez la route vers le sud et continuez vers le sud-ouest à la première intersection. Peu après, la route tourne vers l’ouest, vous arriverez à un nouveau croisement. Continuez vers le nord, puis vers le nord-ouest et prenez le pont de l'île aux Kraaniens. Une fois traversé, continuez vers le nord et vous trouverez une autre pierre de connexion.</p>\n</li>\n  <li>\n<p>Suivez les directions et trouvez la 2e pierre de connexion (située au nord une fois le pont des kraanians franchi). Cliquez dessus et vous aurez à nouveau le message (vous pouvez directement allez vers l'ouest puis le Sud pour trouver le 4ème Nexus).</p>\n</li>\n\n</ul>",
        "images": [],
        "order": 17
      },
      {
        "title": "Nexus 3",
        "description": "<ul>\n  \n  <li>\n<p>Maintenant, utilisez la tablette afin de retourner voir Antonian l’ermite. Cliquez sur lui, dites \"Oui\" et il vous donnera la direction de la 3e pierre de connexion:</p>\n</li>\n  <li>\n<p>Prenez la route du sud et continuez vers le sud-ouest à la première intersection. Peu après, la route se dirige vers l’ouest, vous arrivez à un nouveau croisement. Continuez vers le sud-ouest jusqu’à ce que vous passiez un pont, puis continuez vers le sud dans la vallée afin de trouver une autre pierre de connexion.</p>\n</li>\n  <li>\n<p>Suivez les directions et trouvez la 3e pierre de connexion (située au nord des montagnes de la ville des voleurs). Cliquez dessus pour le message.</p>\n</li>\n\n</ul>",
        "images": [],
        "order": 18
      },
      {
        "title": "Nexus 4",
        "description": "<ul>\n  \n  <li>\n<p>Maintenant, utilisez la tablette afin de retourner voir Antonian l’ermite. Cliquez sur lui, dites \"Oui\" et il vous donnera la direction de la 4e pierre de connexion:</p>\n</li>\n  <li>\n<p>Suivez la route du sud et continuez vers le sud-ouest à la première intersection. Peu après, la route continue vers l’ouest, vous arrivez à un nouveau croisement. Continuez vers le nord puis vers le nord-ouest en traversant le pont de l'île aux Kraanians. Une fois traversé, suivez la rivière vers l’ouest jusqu’à rencontrer l’océan. Vous trouverez une pierre de connexion à côté du rivage.</p>\n</li>\n  <li>\n<p>Suivez les directions et trouvez la 4e pierre de connexion (allez vers l’ouest à partir du pont kraanian jusqu’à rencontrer l’océan, continuez au sud). Cliquez dessus pour obtenir à nouveau le message.</p>\n</li>\n\n</ul>",
        "images": [],
        "order": 19
      },
      {
        "title": "Nexus 5",
        "description": "<ul>\n  \n  <li>\n<p>Maintenant, utilisez la tablette afin de retourner voir Antonian l’ermite. Cliquez sur lui, dites \"Oui\" et il vous donnera la direction de la 5e pierre de connexion :</p>\n</li>\n  <li>\n<p>\"Je n’ai pas de directions particulières pour cette pierre de connexion, mais je vous conseillerai d’aller vers le point situé au maximum vers le sud de cette île\". Avec ceci, vous devriez la trouver seul(e).</p>\n</li>\n  <li>\n<p>Suivez les directions et trouvez la 5e pierre de connexion (située au sud de la cave aux brigands, en face de l’océan, c'est la pointe Sud d'Arakas). Cliquez dessus et vous obtiendrez une dernière fois le message.</p>\n</li>\n  <li>\n<p>Enfin utilisez la tablette de pierre runique et retournez voir Antonian l’ermite. Il vous dira que vous avez trouvé toutes les pierres de connexion qu’il connaissait.</p>\n</li>\n  <li>\n<p><b>Remarque</b> : Vous pouvez enchaîner les cinq pierres de connexion sans retourner voir Antonian entre deux.</p>\n</li>\n  <li>\n<p><b>PNJ</b> impliqués</b>:</p>\n</li>\n  <li>\n<p>Kilhiam, Efnisien, Olin Haad, Grand Prêtre Gunthar, chef de Guilde Ethan, Urik le tailleur, Yrian Holenarbed, La gitane Gypsy, Frère Kiran, Kirlor Dhul, Amelia, Tarnian, l'ermite Antonian.</p>\n</li>\n  <li>\n<p><b>Mini-boss impliqués</b>:</p>\n</li>\n  <li>\n<p>Assassins, gardes d'Olin Haad, Commandant Owen, Gorlok Bloodaxe</p>\n</li>\n  <li>\n<p><b>Récompenses acquises durant la partie \"Arakas\" de la quête</b>:</p>\n</li>\n  <li>\n<p>Colère des anciens (Wrath of the Ancients aura),</p>\n</li>\n  <li>\n<p>Anneau de Vitalité (0 stats) et Gemme de Vitalité.</p>\n</li>\n  <li>\n<p>Amulette de Renouveau et Gemme de Renouveau (0 stats) ou Amulette de Régénération et Gemme de Régénération (0 stats) ou Carquois de stabilité (Trueshot's Quiver, 110 Dex, 20 For).</p>\n</li>\n  <li>\n<p>Tablette de pierre runique (Runed Stone Tablet ou RST).</p>\n</li>\n  <li>\n<p>2.000 pièces d’or.</p>\n</li>\n  <li>\n<p>450.000 xp.</p>\n</li>\n\n</ul>",
        "images": [],
        "order": 20
      },
      {
        "title": "Raven's Dust",
        "description": "<ul>\n  \n  <li>\n<p>Quand vous aurez complété votre quête d’accès à Raven’s Dust bonne ou mauvaise et accédé à Raven's Dust (n'oubliez pas de mettre votre sanctuaire au temple de Silversky), retournez voir Antonian l’ermite et cliquez dessus. Il vous demandera si vous désirez connaître plus de directions pour les pierres de connexion. Répondez \"Oui\" et il vous dira que vous avez trouvé toutes les pierres de connexion d’Arakas. Il vous dira également que vous devez retrouver son ami habitant la ville de Silversky.</p>\n</li>\n  <li>\n<p>Vous recevrez 250.000 xp.</p>\n</li>\n  <li>\n<p>Continuez le dialogue en disant \"Scribe\", \"Celui\" et il vous parlera du Barde sans Nom.</p>\n</li>\n\n</ul>",
        "images": [
          "/t4c-nms-overview/assets/quests/la-lettre-de-crimsonscale/img_21_0.jpg"
        ],
        "order": 21
      },
      {
        "title": "Le Barde sans nom",
        "description": "<ul>\n  \n  <li>\n<p>Rendez-vous à votre sanctuaire au temple de Silversky (Comme solution de secours, vous pouvez utiliser la tablette de pierre runique. La RST vous téléportera à l’est du lac tarentules. Ensuite dirigez-vous au Sud. Mais il vous faudra marcher longtemps pour arriver au temple de Silversky).</p>\n</li>\n  <li>\n<p>Parlez alors au scribe Aquinos (Scholar Aquinos). Dites \"Visite\", \"Lieu\", \"Ou\" et il vous dira où habite le Barde sans Nom. Les informations sont : Le Barde sans Nom vit au fond d’une caverne loin vers l’ouest.</p>\n</li>\n  <li>\n<p>Entrez dans la grotte et avancez, vous trouverez alors le Barde sans Nom (il a l'aspect d’une atrocité). Parlez-lui. Dites \"Punirrrr\", \"Abysses\" (<b>attention</b> : seulement 2 s), \"restes\" et il vous dira : dans un arbre, vous trouverez la sagesse, dans une fontaine, la connaissance. Où la sagesse et la connaissance fusionnent, la réponse que vous cherchez émergera.</p>\n</li>\n  <li>\n<p>Depuis le carrefour proche du Barde sans Nom, descendez vers le sud-est et trouvez l’Arbre de Sagesse (Tree of wishdom). Cliquez dessus et vous obtiendrez une Branche de sagesse. Maintenant, retournez sur vos pas et prenez le passage menant vers le nord-ouest à partir du Barde. Vous trouverez la Fontaine de Connaissance (Fountain of Knowledge). Cliquez sur la fontaine et vous utiliserez la Branche de sagesse afin de mettre en mouvement les Eaux de la Connaissance. Devant vos yeux ébahis, l’eau tourbillonne et forme un mot: ETHERE.</p>\n</li>\n  <li>\n<p><b>Vous obtenez 300.000 xp.</b></p>\n</li>\n  <li>\n<p><b>Retournez voir le Barde</b> sans Nom et parlez-lui. Il vous dira que vous avez trouvé le mot de pouvoir ouvrant les grandes portes d'un terrible mal. Elles sont situées à proximité du point le plus au nord de cette terre. Afin de l’atteindre, vous devrez traverser des zones de ténèbres. Soyez certain que si les Eaux de la Connaissance ne vous ont pas donné toutes les informations que vous recherchiez, celui qui réside derrière ces portes pourra sûrement. Le Barde vous dira aussi que c’est votre malédiction.</p>\n</li>\n  <li>\n<p>Dites \"Malédiction\" et il vous dira qu’il fût choisi un jour aussi et maudit également et qu’un jour, nous serions vengés.</p>\n</li>\n\n</ul>",
        "images": [
          "/t4c-nms-overview/assets/quests/la-lettre-de-crimsonscale/img_22_0.jpg",
          "/t4c-nms-overview/assets/quests/la-lettre-de-crimsonscale/img_22_0.jpg"
        ],
        "order": 22
      },
      {
        "title": "Le Mausolée",
        "description": "<p>Dirigez vous vers la grotte (Broken Ones cave) connue sous le nom de cave de l'aveugle (au Nord de l'île). Entrez-y, dirigez vous vers l’ouest puis le nord et continuez jusqu’à ce que vous atteigniez la sortie vers le Mausolée (Mausoleum).</p>\n<br/>\n<p>Sortez et continuez vers le nord-ouest dans le cimetière, jusqu’à ce que vous rencontriez un <b>PNJ</b> nommé \"un gardien\". Cliquez sur lui et il vous dira que le Mausolée situé derrière mène au sanctuaire de l’ancien Dieu de la Corruption, Gluriurl. Il vous dira également que seulement celui qui connaît le mot de pouvoir est autorisé à rentrer. Dites \"Mot de pouvoir\", \"Ethéré\" et il vous préviendra que le mausolée est un endroit dangereux. Dites \"Oui\" et il vous fera passer la porte.</p>",
        "images": [],
        "order": 23
      },
      {
        "title": "Les 4 vicaires",
        "description": "<p>A l’intérieur du mausolée vous devez tuer les 4 Vicaires et récupérer leurs clés en cristal. Dirigez-vous vers le nord-est jusqu’à ce que vous atteigniez une grande pièce. Continuez alors vers le sud-est et tuez le Vicaire Kervian. Récupérez la clé de cristal violette et dirigez-vous vers le nord-ouest. A la première grande pièce, continuez nord-ouest jusqu’à atteindre une autre grande pièce Dirigez-vous vers le nord-est et allez vers le nord-est le plus possible. A la fin de la route, continuez sur le chemin en direction du nord-ouest. Trouvez et tuez le Vicaire Ramiel. Récupérez la clé de cristal verte. Dirigez-vous vers le nord-ouest et suivez le chemin qui continue vers le sud-ouest. Continuez vers le sud-ouest et comptez les routes que vous rencontrerez qui se dirigent vers le sud-est. Suivez la 4e route allant vers le sud-est que vous rencontrerez et vous trouverez le Vicaire Vharnes. Tuez-le et vous obtiendrez la clé de cristal bleue. Retournez en arrière vers le nord-ouest et tournez vers le nord-est. A la première intersection, continuez vers le nord-ouest puis vers le sud-est. Continuez vers le sud-est jusqu’à ce que vous rencontriez une route allant vers le nord-ouest. Continuez vers le nord-ouest et vous trouverez un portail. Partez vers le nord-ouest à partir du portail et vous trouverez le Vicaire Ashgoth. Tuez-le et vous obtiendrez la clé de cristal rouge.</p>",
        "images": [
          "/t4c-nms-overview/assets/quests/la-lettre-de-crimsonscale/img_24_0.jpg"
        ],
        "order": 24
      },
      {
        "title": "Le dragon Crimsonscale",
        "description": "<p>Après avoir tué les 4 vicaires, revenez vers le portail et entrez-y. Suivez le tapis rouge et vous rencontrerez Crimsonscale le dragon. Parlez-lui et dites \"Lettre\", \"Commencement\", \"Elu\", \"Justice\", \"Vents\", \"Bataille des émanations\", \"Olin Haad\", \"Fasciné\", \"Changé de camp\", \"Conseil des huit\" et vous apprendrez au sujet des plans machiavéliques d’Olin Haad au sujet du <b>Conseil</b> des Huit. Crimsonscale vous demandera votre aide. Répondez \"Aide\" puis dites \"Empecher\", \"Grande Librairie\" et il vous donnera le nom du <b>lieu</b> où se situe la Grande Bibliothèque. Dites \"Quelque chose\" et il vous donnera une fiole de sang de dragon (Vial of Dragon Blood). ps: (retiré aussi)</p>\n<br/>\n<p><b>Attention</b> : Le bracelet de flammes et la gemme de flammes (Armlet of Flames et Gem of Flames) sont <b><u>supprimés</u></b> sur NMS !!</p>",
        "images": [],
        "order": 25
      },
      {
        "title": "La grande bibliothèque",
        "description": "<ul>\n  \n  <li>\n<p>Dirigez-vous vers la Grande Bibliothèque (située à l’est de l’entrée de la crypte de Raven’s Dust), allez au 3e étage et parlez avec le Conservateur (Custodian). Dites \"Barbares\", \"Incultes\", \"Rite de Passage\" et il vous donnera une énigme afin que vous lui prouviez que vous n’êtes pas ignorant. La voici:</p>\n</li>\n  <li>\n<p>\"Dos\" \"vaneslae\" \"navidal\", \"Kadrim\" \"lok\" \"ungrim\" \"dok\", \"Somalina\" \"oundi\" \"inesora\", \"Tharrgra\" \"nethdrovar\". Si vous pouvez me dire ce que cela signifie, non seulement je vous concéderai l’accès au dernier étage mais je serai en plus gentil avec vous. Voici un <b>indice</b>: vous serez incapable de résoudre cette énigme si vous n’allez pas visiter le sous-sol de la Bibliothèque.</p>\n</li>\n  <li>\n<p>Dirigez-vous vers les sous-sols où les 4 savants résident. Parlez-leur.</p>\n</li>\n  <li>\n<p>Au savant disant \"language of the Elves\" (Pièce au nord-ouest), dites \"Dos vaneslae navidal\". Il répondra: \"Pour regarder quelqu'un\".</p>\n</li>\n  <li>\n<p>Au savant disant \"language of the Dwarves\" (Pièce au sud-ouest), dites \"Kadrim lok ungrim dok\". Il répondra: \"Il suffit d'avoir des yeux\".</p>\n</li>\n  <li>\n<p>Au savant disant \"language of Faeries\", (Pièce au nord-est), dites \"Somalina Oundi Inesora\". Il répondra: \"Pour reconnaitre sa propre ignorance\".</p>\n</li>\n  <li>\n<p>Au savant disant \"language of Dragons\" (Pièce au sud-est), dites \"Tharrgra nethdrovar\". Il répondra: \"Il faut ouvrir ses yeux\".</p>\n</li>\n  <li>\n<p>Retournez au 3e étage et reparlez avec Custodian. Dites \"Oui\", \"Pour regarder quelqu'un\", \"Il suffit d'avoir des yeux\", \"Pour reconnaitre sa propre ignorance\", \"Il faut ouvrir ses yeux\" et vous obtenez l’accès complet à la Bibliothèque. Dites \"Accès\", \"Oui\" et vous serez téléporté au 4e étage.</p>\n</li>\n  <li>\n<p>Parlez à un des bibliothécaires. Dites \"Oui\", \"Echange de l'essence\", \"Corps materiel\", \"Ogrimar\", \"Lothar le juste\", \"Abandonna\", \"Elvenweave\", \"Coeur\" et vous réaliserez que Olin Haad tente de ramener Gluriurl à la vie.</p>\n</li>\n  <li>\n<p><b>Vous recevez 500.000 xp.</b></p>\n</li>\n  <li>\n<p>Parlez aux deux autres bibliothécaires et écoutez-les. L’un vous parlera de la pierre noire et l’autre du \"Harbringer\". Dirigez vous vers le château d’Olin Haad.</p>\n</li>\n\n</ul>",
        "images": [],
        "order": 26
      },
      {
        "title": "Retour chez Olin Haad en son château",
        "description": "<p>Une fois au château, parlez à Olin Haad. Dites \"Defi\" et vous serez téléporté dans une petite pièce avec Olin Haad. Il vous attaquera et comme vous ne pouvez pas le tuer, laissez le vous massacrer mais juste avant le coup final, vous serez téléporté de retour au château. Dites \"Invincible\", \"Heros\", \"Insidieuse voix\", \"Restes\" et vous saurez tout sur la résurrection de Gluriurl.</p>",
        "images": [],
        "order": 27
      },
      {
        "title": "Retour chez Gunthar au temple",
        "description": "<p>Retournez voir Gunthar et parlez-lui. Dites \"Benediction d' Artherk\", \"Âmes\", \"Stopper\", \"Débarrasser\", \"Faucheur\", \"Illusion\", \"Recemment\", \"Trompais\", \"Coeur d' Artherk\", \"Efnisien\" et vous apprendrez au sujet du Caledbolg, qui est gardé en sécurité en un <b>lieu</b> saint dans la partie sud-est du désert de Raven’s Dust. Il vous dira également que vous devez aller voir Efnisien.</p>",
        "images": [],
        "order": 28
      },
      {
        "title": "Retour chez Efnisien (1er étage de la maison au nord de la banque)",
        "description": "<p>Allez voir Efnisien et dites-lui \"Service\", \"Entrée\" et il vous dira que l’entrée est située dans la pièce située derrière la porte verrouillée (servez-vous des escaliers de cette pièce). Mais Olin Haad a trouvé un moyen alternatif pour y rentrer et il est à l’intérieur du temple maintenant. Il ne vous servira à rien d’entrer puisque vous ne pouvez pas le battre sans une arme spéciale (Caledbolg, l’arme enchantée).</p>",
        "images": [],
        "order": 29
      },
      {
        "title": "La Caledbolg (crypte du désert RD)",
        "description": "<ul>\n  \n  <li>\n<p>Vous devez trouver la Caledbolg. Allez dans le désert de Raven’s Dust et dirigez vous vers le sud jusqu’à ce que vos atteignez une nouvelle rangée de montagnes. Cherchez l’entrée de la crypte vers l'Est. En face de celle-ci se situe le gardien de la porte nommé Ramirgo. Parlez-lui et dites \"Gardien\", \"Entre\" et il vous téléportera à l’intérieur.</p>\n</li>\n  <li>\n<p>Suivez le mur du donjon et tuez les 3 démons Terror Demon, Chaos Demon et Darkness Demon.</p>\n</li>\n  <li>\n<p>Maintenant dirigez-vous vers le milieu du donjon où vous trouverez 3 portails. Entrez dans l’un des trois et vous arriverez dans une petite pièce. Cliquez sur Lothar et vous recevrez la Caledbolg (une fois la Caledbolg obtenue, vous ne pourrez plus pénétrer dans la crypte).</p>\n</li>\n  <li>\n<p></li>\n  <li></p>\n</li>\n  <li>\n<p><b>PNJ</b> impliqués</b>: l'ermite Antonian, Aquinos, le Barde sans Nom, un gardien, Crimsonscale, Custodian, les 4 savants (the 4 Scholars), les 3 bibliothécaires (the 3 Librarians), Olin Haad, Grand Prêtre Gunthar, Efnisien, Ramirgo, Lothar</p>\n</li>\n  <li>\n<p><b>Mini-boss impliqués</b>: Vicaire Asgoth, Vicaire Kervian, Vicaire Vharmes, Vicaire Ramiel, Terror Demon, Chaos Demon, Darkness Demon</p>\n</li>\n  <li>\n<p><b>Récompenses acquises durant la partie \"Raven’s Dust\" de la quête</b>: Fiole de sang de dragon (vial of Dragon Blood), 1.050.000 xps</p>\n</li>\n\n</ul>",
        "images": [
          "/t4c-nms-overview/assets/quests/la-lettre-de-crimsonscale/img_30_0.jpg"
        ],
        "order": 30
      },
      {
        "title": "Retour sur Arakas",
        "description": "<p>Cliquez sur lui et il déverrouillera la porte du rez-de chaussée. Descendez au sous-sol et entrez dans le Temple Sacré de Lothar.</p>",
        "images": [
          "/t4c-nms-overview/assets/quests/la-lettre-de-crimsonscale/img_31_0.jpg"
        ],
        "order": 31
      },
      {
        "title": "Le Temple de Lothar",
        "description": "<p>Dirigez-vous au nord, vers le centre du temple et vous verrez un Draconis nommé \"Le Gardien\" (Draconis Guardian). Il est encore vivant alors parlez-lui. Il vous demandera si vous venez de la part d’Efnisien. Répondez \"Oui\", \"Dragon\", \"Prophétie\", \"Stopper\", \"chambre mortuaire\" et vous en apprendrez plus au sujet de la prophétie. Il vous dira également que vous devez pénétrer à l’intérieur du portail derrière lui afin de stopper Olin Haad.</p>",
        "images": [],
        "order": 32
      },
      {
        "title": "Les 5 cristaux",
        "description": "<ul>\n  \n  <li>\n<p>Le portail comporte 5 ouvertures correspondant à 5 cristaux. Afin de pouvoir activer le portail, vous devez trouver ces 5 cristaux: un rouge, un jaune, un bleu, un vert et un violet.</p>\n</li>\n  <li>\n<p>Regardez la carte pour voir où sont situés les 5 épreuves.</p>\n</li>\n  <li>\n<p><i><b>Pour le cristal bleu</b></i>, vous entrerez dans un labyrinthe dont les murs sont invisibles.</p>\n</li>\n  <li>\n<p>Suivez les flèches afin de sortir du labyrinthe, ouvrez le coffre (chest) et le cristal tombera dans votre sac.</p>\n</li>\n  <li>\n<p>Rentrez dans le portail et vous arriverez juste à l’entrée du labyrinthe.</p>\n</li>\n  <li>\n<p><i><b>Pour le cristal jaune</b></i>, vous devez tuer des Kraanians piétineurs jusqu’à ce qu’ils laissent tomber un cristal.</p>\n</li>\n  <li>\n<p>Une fois un cristal au sol, ramassez le (il est indroppable).</p>\n</li>\n  <li>\n<p>Puis poursuivez...</p>\n</li>\n  <li>\n<p><i><b>Pour le cristal vert</b></i>, vous devez traverser un grand labyrinthe. Vous arriverez à un coffre.</p>\n</li>\n  <li>\n<p>Ouvrez-le (2 fois) et le cristal vert tombera dans votre sac.</p>\n</li>\n  <li>\n<p>Rentrez dans le portail et vous arriverez à l’entrée de ce labyrinthe.</p>\n</li>\n  <li>\n<p><i><b>Pour le cristal rouge</b></i>, suivez le corridor et entrez dans le tourbillon au sol.</p>\n</li>\n  <li>\n<p>Vous arriverez dans un labyrinthe de tourbillons. Faites votre bonhomme de chemin jusqu’au coffre. Ouvrez-le et le cristal tombera dans votre sac. Entrez dans le portail et vous arriverez à côté du portail du 1er étage.</p>\n</li>\n  <li>\n<p>Légende de la carte ci-contre : S : Start (départ) ; Follow the numbers (suivez les numéros).</p>\n</li>\n  <li>\n<p><b>Pour le cristal violet</b>, vous devez fouiller 7 coffres différents.</p>\n</li>\n  <li>\n<p>Le cristal est placé aléatoirement dans un des coffres.</p>\n</li>\n  <li>\n<p>Trouvez-le et revenez au centre du temple.</p>\n</li>\n\n</ul>",
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
        "description": "<ul>\n  \n  <li>\n<p><b>N'oubliez pas de parlez au gardien</b> si vous ne l'avez pas encore fait !</p>\n</li>\n  <li>\n<p>Entrez maintenant dans le portail situé derrière Le Gardien et vous arriverez dans le tombeau. Allez alors vers le sud-est et vous trouverez Olin Haad. Equipez-vous de la Caledbolg et attaquez-le. Il mentionnera que le rituel est complet. Dès que vous l’aurez tué, Gluriurl, Dieu de la Corruption, apparaîtra.</p>\n</li>\n  <li>\n<p>Un message en lettres bleues apparaîtra à tous les joueurs : <b>\"Le ciel s'obscurcit soudainement…\"</b></p>\n</li>\n  <li>\n<p>(parfois Gluriurl sera déjà activé par un joueur précédent qui aura échoué à le tuer)</p>\n</li>\n  <li>\n<p>Attaquez Gluriurl et tuez-le (n’oubliez pas de retirer rapidement la Caledbolg et de vous réarmer). Une fois tué, le message suivant apparaîtra :</p>\n</li>\n  <li>\n<p>Vous entendez soudainement la voix de la Gitane : \"Vous avez vaincu le Dieu de la Corruption ! Venez me voir dès quand vous le pourrez. Je dois vous remercier personnellement pour tout ce que vous avez fait\".</p>\n</li>\n  <li>\n<p>Et les lettres bleues, encore une fois pour tous les joueurs : <b>\"La terre se met à trembler violemment pendant quelques secondes…\".</b></p>\n</li>\n  <li>\n<p><b>Attention</b> ! Gluriurl est très fort. Si vous êtes seul il vous faudra dépasser largement le level 100 (selon votre classe) pour l'affronter.</p>\n</li>\n\n</ul>",
        "images": [],
        "order": 34
      },
      {
        "title": "Retour chez la Gitane",
        "description": "<p>Maintenant, retournez voir la Gitane pour votre récompense. Répondez \"Quatrième Prophétie\", \"gardiens respectifs\" et vous serez récompensé d’une amulette de rajeunissement, d’une pierre de rajeunissement, d’une amulette d'abondance, d’une pierre d'abondance et d’un carquois de stabilité rouge.</p>\n<br/>\n<p><b>Conseil</b> :</b> Après avoir tué Gluriurl, allez parler à Efnisien, il vous débarrassera de la gemme sombre. Par contre, seul un GM pourra vous débarasser de la Caledbolg.</p>\n<br/>\n<p><b>PNJ</b> impliqués</b>: Efnisien, Le Gardien Draconis, la Gitane</p>\n<br/>\n<p><b>Mini-boss impliqués</b>: Olin Haad, Gluriurl</p>\n<br/>\n<p><b>Récompenses acquises durant la dernière partie de la quête:</b></p>\n<br/>\n<ul>\n  <li>Amulette de Rajeunissement</li> <li>Pierre de Rajeunissement</li> <li>Amulette d'Abondance</li> <li>Pierre d'Abondance (0 stats)</li> <li>Carquois de Stabilité rouge (220 Dex, 30 Force).</li>\n</ul>\n<br/>\n<p><br/></p>\n<br/>\n<p></p>",
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
        "description": "<p></p>",
        "images": [],
        "order": 0
      },
      {
        "title": "Précisions si vous choisissez d'être du côté \"bon\"",
        "description": "<p>Pour monter votre Karma avant de faire les 6 clés, rendez-vous à Windhowl et parlez à \"un homme joyeux\" à la taverne tant qu'il vous répond puis allez au temple et parlez à Malaar, là aussi tant qu'il vous répond. Votre Karma doit passer à \"converti\" pour pouvoir faire toutes les clés. Si c'est encore insuffisant allez tuer Jarko (plusieurs fois)!</p>",
        "images": [],
        "order": 1
      },
      {
        "title": "ARAKAS",
        "description": "<ul>\n  <li><b>Edgar Gimplestratten (Arakas, Lighthaven)</b><br/>Malus Karma quand vous le tuez, si vous n'avez pas encore commencé la quête du diable<br/></li> <li><b>Asarr (Arakas, Ville des voleurs)</b><br/>Malus Karma si vous trahissez le bourgmestre de Windhowl, dans la quête de la lettre (quand il vous demande si vous voulez vous rattrapez dites non!).<br/></li> <li><b>Balork (Arakas, Lighthaven, Lighthaven, crypte du temple lvl #4)</b><br/>Bonus Karma quand vous le tuez, si votre karma n'est pas trop négatif.<br/></li> <li><b>Dorken Rotsmell (Arakas, Nord-ouest de Lighthaven)</b><br/>Bonus Karma si vous tuez Dorken, mais seulement si vous avez un karma négatif.<br/></li> <li><b>Un homme joyeux (Arakas,Taverne de Windhowl)</b><br/>Bonus Karma si vous lui offrez 100 pièces d'or. (marche 10 fois seulement). Mot clefs : Travail, rumeurs, argent, oui, puis répétez argent et oui.<br/></li> <li><b>Jarko le Nécromant (Arakas, Cave J lvl #3)</b><br/>Bonus Karma si vous le tuez.<br/></li> <li><b>Kalastor (Arakas, Lighthaven)</b><br/>Malus Karma si vous mauvais pour tuer Edgar et donnez les 1000 pièces d'or a Kalastor.<br/></li> <li><b>Malaar (Arakas, Temple de Windhowl)</b><br/>Bonus Karma en faisant des donations de 10.000 pièces d'or en l'honneur de l'église d'Artherk. Mot clef: \"donation\", \"oui\" . Vous pouvez négocier en disant d'abord \"non\" il vous proposera alors 1.000 pièces d'or. Négociez tant que votre karma augmente. A un moment donné il faudra accepter de donner 10.000 pièces pour chaque don et obtenir enfin le grade de \"converti\".<br/></li>\n</ul>\n\n<ul>\n  <li><b>Mhorgwloth le Troll (Arakas, Maison du troll)</b><br/>Malus Karma si vous le tuez.<br/></li> <li><b>Mirak Nira (Arakas, Windhowl)</b><br/>Bonus Karma quand elle vous donne l'anneau de confiance (quête d'accès bon RD).<br/></li> <li><b>Chef orc Rénégat (Arakas, Cave Jarko lvl -3)</b><br/>Malus Karma quand vous le tuez. </li>\n</ul>",
        "images": [],
        "order": 2
      },
      {
        "title": "RAVEN'S DUST",
        "description": "<ul>\n  <li><b>Evêque Crowbanner (Raven Dust, château de Silversky)</b><br/>Malus Karma pour l'empoisonneur avec la pomme (quête d'accès Stoneheim mauvaise).<br/></li> <li><b>Mordrick (Raven Dust, Château de Silversky)</b><br/>Malus Karma (-100) quand vous retirez l'épée de puissance du puits. Bonus Karma (+100) quand vous donnez l'épée de puissance à Mordrick (quête d'accès Stoneheim bonne). </li> <li>Remarque : On raconte que quand quand vous avez décaissé le malus Karma, vous pouvez retourner faire des donations à Malaar au temple de Windhowl. Votre karma final s'en trouvera amélioré quand vous donnerez l'épée de puissance à Mordrick.<br/></li> <li><b>Princesse Delilah (Raven Dust, Château de Silversky)</b><br/>Bonus Karma quand vous lui donnez l'herbe de Cuthana.<br/></li> <li><b>Princesse Delilah (Raven Dust, Château de Silversky)</b><br/>Malus Karma si vous lui demandez de l'or.<br/></li> <li><b>Princesse Delilah (Raven Dust, Château de Silversky)</b><br/>Bonus Karma si vous lui demandez d'enlever la marque de Balork.<br/></li> <li><b>Shadeen (Raven Dust, Cave du Château de Bane)</b><br/>Bonus Karma pour tuer Shadeen la dague.<br/></li> <li><b>Shadeen (Raven Dust, Cave du Château de Bane)</b><br/>Malus Karma si vous finissez la quête des Chroniques de l'Apocalypse et refusez de donner le livre à Shadeen la Dague.</li>\n</ul>\n<br/>\n<p><br/></p>\n<br/>\n<p></p>",
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
        "description": "<ul>\n  \n  <li>\n<p>Si vous menez à bien cette quête, vous obtiendrez \"l'anneau de l'apprenti forgeron\". Cet anneau permet aux porteurs d'augmenter leurs chances de réussite d'une formule du métier forgeron de 2%. Cette quête n'est pas répétable !</p>\n</li>\n  <li>\n<p>Montez au 4ème étage et parlez à la servante de la Princesse Delilah. Suivez les mots en blanc ... le... cadeau ...retrouver. Elle va vous envoyer chez la cuisinière (au rez-de-chaussée).</p>\n</li>\n  <li>\n<p>Retournez au rez-de-chaussée et dites \"cadeau\" à la cuisinière. Elle vous enverra parler au garde de la prison.</p>\n</li>\n  <li>\n<p>Allez à la prison et parlez-lui. Dites lui \"cadeau\" et suivez les mots en blanc. Il vous dira que le cadeau est sur un banc proche de l'Evêque.</p>\n</li>\n  <li>\n<p>Retournez au 4ème étage et parlez au prêtre proche de l'Evêque. Dites lui \"cadeau\", il vous enverra parler aux courtisans au rez-de-chaussée.</p>\n</li>\n  <li>\n<p>Au rez-de-chaussée, parlez à un courtisan (bottes blanches) puis à deux courtisanes (robe verte deux fois puis robe violette).</p>\n</li>\n  <li>\n<p>La seconde vous enverra à nouveau chez la servante de la Princesse.</p>\n</li>\n  <li>\n<p>Celle-ci vous remettra enfin l'anneau. Bravo pour toutes ces marches et contremarches !</p>\n</li>\n  <li>\n<p></li>\n  <li></p>\n</li>\n  <li>\n<p></p>\n</li>\n\n</ul>",
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
        "description": "<p>Allez à Niève et parlez à Rodrick Mulin, situé près de la taverne de Niève. Il vous demandera de l'aide pour le réchauffer. Pour ce faire, il faudra lui ramener :</p>\n<br/>\n<ul>\n  <li>10 peaux d'antilopes</li> <li>25 piles de bois d'arbre démoniaque</li>\n</ul>\n<br/>\n<p>Vous aurez en <b>récompense</b> un objet parmi les suivants :</p>\n<br/>\n<ul>\n  <li>bouclier du froid</li> <li>anneau du froid (le plus intéressant)</li> <li>épée incrustée de glace (main droite ou gauche)</li>\n</ul>\n<br/>\n<p>aucune xp pour ce quête</p>\n<br/>\n<p>Cette quête ne peut être effectuée qu'une seule fois !</p>\n<br/>\n<p><br/></p>\n<br/>\n<p></p>",
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
        "description": "<ul>\n  \n  <li>\n<p><b>Rendez visite à Martha</b> taches\", il vous demandera de trouver les 6 nexus sur SH, qui se trouvent le long des plages ... dites \"Acceptez\"</p>\n</li>\n  <li>\n<p></li>\n  <li>Le deuxième se situe avant le pont de la ville des centaures, derrière les montagnes (<b>785-971-0</b>).</li>\n  <li>Le troisième surplombe les montagnes derrière le village skraug vert, à l'est (<b>1386-516-0</b>).</li>\n  <li>Le quatrième est au bout de la foret des gremlins (<b>1195-350-0</b>) .</li>\n  <li>Le cinquième est situé derrière le village skraug rouge (<b>884-145-0</b>).</li>\n  <li>...Et le sixième est tout en haut des montagnes de Mordenthal, en venant des skraugs rouges (<b>266-90-0</b>).</li>\n  <li>Puis retournez voir Mercyn Kignar pour qu'il vous active la RST...</li>\n  <li><b>Récompense</b> : RST de DI et 18M d'xp.</li>\n  <li></p>\n</li>\n  <li>\n<p></p>\n</li>\n\n</ul>",
        "images": [
          "/t4c-nms-overview/assets/quests/r-s-t-runed-stone-tablet-drake-island/img_0_0.jpg"
        ],
        "order": 0
      }
    ],
    "credits": [
      "T4C NMS Révolution wiki",
      "Anvar",
      "Syll"
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
        "description": "<ul>\n  \n  <li>\n<p>Vous devez être de niveau 200 pour effectuer cette quête.</p>\n</li>\n  <li>\n<p>IL vous faudra auparavant préparer une Malédiction en bouteille pour survivre dans la forteresse.</p>\n</li>\n  <li>\n<p>Cette quête permet d'accéder à la forteresse de la damnation (désert DI) puis à progresser jusqu'à Saalyel et la vaincre pour lui faire droper le Mjölnir du Damné, le Silice du Maudit etc.</p>\n</li>\n  <li>\n<p>L'accès partiel au niveau -1 du château permettra aussi faire droper des écailles de dragons et armure de décrépit (armure mage de guerre bas niveau).</p>\n</li>\n\n</ul>",
        "images": [
          "/t4c-nms-overview/assets/quests/acces-forteresse-des-damnes-desert-di/img_0_0.jpg"
        ],
        "order": 0
      },
      {
        "title": "Préparation",
        "description": "<p>Avant d'entrer, il faut préparer une malédiction en bouteille, dont l'effet durera 1.00 heure.</p>\n<br/>\n<ul>\n  <li>1 Crin de Dragon (drop des Démonicons de LH ou Dragonnets à la forteresse)</li> <li>1 Aigue-marine brute (drops mobs SH : loups ...)</li> <li>2 Feuilles de cigüe (Arakas, voir plants)</li>\n</ul>\n<br/>\n<p>Avec ces items allez voir Squirrel au quartier des métiers de DI et dites-lui \"préparer\" il vous en fabriquera 5.</p>\n<br/>\n<p>Avec cette potion vos résistances contre les chevaliers de la damnation seront drôlement renforcées.</p>\n<br/>\n<p>Prévoyez aussi un stock de potions de soin <b>conséquent</b>. Les chevaliers de la damnation font excessivement mal et peuvent vous retirer entre 2000 et 4000 points de vie en l'espace de 3 secondes, veillez donc à ne pas laisser trop descendre votre vie.</p>\n<br/>\n<p>Juste avant d'entrer prenez une malédiction en bouteille.</p>\n<br/>\n<p>Voilà vous êtes maintenant prêt à affronter les méchants Chevaliers.</p>\n<br/>\n<p>Quand vous tuerez le premier chevalier vous obtiendrez une gemme de l'ordre de la damnation qui vous permettra de capter une énergie pour passer le portail suivant etc...</p>\n<br/>\n<p>Et hop partez à l'aventure !!!</p>",
        "images": [],
        "order": 1
      },
      {
        "title": "La première étape dans la forteresse",
        "description": "<ul>\n  \n  <li>\n<p>Afin de progresser dans la Forteresse de la Damnation pour la première fois et atteindre les autres niveaux (dragonnets enragés, Saalyel...), vous devrez passer les portails dans un certain ordre.</p>\n</li>\n  <li>\n<p>A chaque fois vous devrez tuer au moins un des chevaliers de la damnation présents (et variantes mais pas les dragonnets) ce qui activera le portail suivant.</p>\n</li>\n  <li>\n<p>Lorsque vous achèverez une cible pour la première fois, un message vous indiquera que vous avez réussi à récupérer une partie de son énergie afin de charger votre gemme de l'Ordre de la damnation (obtenue en tuant le 1er chevalier).</p>\n</li>\n  <li>\n<p>C'est en la chargeant ainsi que cette dernière vous permettra de franchir les différents portails de la zone.</p>\n</li>\n  <li>\n<p>Avec le plan détaillé du RDC, un petit topo de Melandria dans son style inimitable.</p>\n</li>\n  <li>\n<p>Le 1er chev à tuer c celui de l'entrée (1) pis portail à gauche (2) on tue les 2 chev de la zone et on clike sur le portail près du mur dans même salle (3) on tue chev et on clike celui à côté (4) pis on re à l'entrée (1) et on va salle opposée faire même chose bouclier\" à Eiden. Si l'opération réussit, le skin de votre bouclier sera accordé à votre armure (personnellement je ne l'aime pas trop). En cas d'échec, vous récupérez votre bouclier d'origine.</p>\n</li>\n  <li>\n<p><b>Eiden vous donnera 10M XP s'il réussit la fabrication d'une partie d'armure métrolite.</b></p>\n</li>\n  <li>\n<p><b>Note</b> :</b> Vous remarquerez, si ce n'est déjà fait, que les boosts sont les mêmes. Vous échangerez donc le B'Ronkhanique contre le Métrolite uniquement pour le look. Ci-contre les deux descriptions identiques avec leur skin respectif. A vous de choisir.</p>\n</li>\n  <li>\n<p></li>\n  <li></p>\n</li>\n  <li>\n<p></p>\n</li>\n\n</ul>",
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
        "description": "<ul>\n  \n  <li>\n<p>Il existe deux types d'armure triplicite (et de robe). Il est possible d'en fabriquer une partie aléatoire à l'aide d'une quête auprès d'un <b>PNJ</b> différent selon le type de tripli :</p>\n</li>\n  <li>\n<p><b>Tripli mage</b> : requiert 350 intelligence, 100 sagesse et 50 endurance =&gt; <b>Kadjituu (Arakas)</b></p>\n</li>\n  <li>\n<p><b>Tripli prêtre</b> : requiert 350 sagesse, 100 intelligence et 50 endurance =&gt; <b>Aqua Laguna (Stoneheim)</b></p>\n</li>\n\n</ul>",
        "images": [],
        "order": 0
      },
      {
        "title": "Ingrédients nécessaires à la fabrication",
        "description": "<ul>\n  \n  <li>\n<p></li>\n  <li>Les ingrédients de fabrication sont les mêmes que ce soit tripli mage ou prêtre (la partie confectionnée est aléatoire) :</p>\n</li>\n  <li>\n<p>- 4 peaux de vers, drop des apocalypses des sables (vers), désert de DI.</p>\n</li>\n  <li>\n<p>- 4 gemmes enchantées, drop des drakes akaïstes, autour du lac du désert de DI (j'aurais dit oasis mais bon...).</p>\n</li>\n\n</ul>",
        "images": [],
        "order": 1
      },
      {
        "title": "Réalisation de la fabrication",
        "description": "<ul>\n  \n  <li>\n<p><b>Tripli mage</b> : rendez vous dans le repère de Jarko, cherchez-y <b>Kadjituu</b>, un gobelin de couleur noire, niveau -3, travail\"), il vous parle du livre d'Humterre et d'un vieillard.</p>\n</li>\n  <li>\n<p>- aller voir le <b>Vieillard Sénile </b>dans le village Métiers de Redwall et lui parler (lui dire \"travail\"), il vous parle de potion de jouvence et du squelette Morgool (cimetière de Redwall).</p>\n</li>\n  <li>\n<p>- aller voir le <b>Squelette de Redwall</b> et lui parler (lui dire \"travail\"), il vous donnera une potion de jouvence contre 4 os de squelette (qui drop aux squelettes dans la cave minotaure sur RD) et un crane du bouffon morbide (drop du bouffon au château de SS).</p>\n</li>\n  <li>\n<p>- porter la potion de jouvence au <b>Vieillard Sénile</b> qui vous donnera le livre en échange.</p>\n</li>\n  <li>\n<p>- porter le livre à <b>Kwazor</b> qui vous proposera une épreuve : vous êtes téléporté dans une cave et vous devez tuer 50 mobs en 10 mn pour réussir.</p>\n</li>\n  <li>\n<p>- si l'épreuve est réussie vous apprenez l'aura humterre.</p>\n</li>\n  <li>\n<p>MAJ du 4/4/18 : la consommation de mana pour réactiver l'aura est divisée par deux !</p>\n</li>\n  <li>\n<p></p>\n</li>\n\n</ul>",
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
        "description": "<p>On trouve à Redwall un Vendeur Étrange. Il s'agit de Kalius, un <b>PNJ</b> en robe verte situé dans une petit bâtiment proche de la banque. Celui-ci vous donnera aléatoirement un objet si vous avez ce qu'il faut sur vous :</p>\n<br/>\n<p>Au mot clef \"échange\" (ou \"travail\") il vous proposera d'échanger :</p>\n<br/>\n<ul>\n  <li>Soit 10 crânes de démons incultes</li> <li>Soit 250 Scalps</li> <li>Soit 40 Crânes du bouffon morbide</li>\n</ul>\n<br/>\n<p>Et donnera en <b>récompense</b> aléatoirement :</p>\n<br/>\n<ul>\n  <li>1 sachet de poudre jaune (5 chances sur 15)</li> <li>1 Potion de grande résistance à la nécromancie (protection contre le mal) (7 chances sur 15)</li> <li>1 Tiare dorée incrustée d'émeraudes (1 chance sur 15)</li> <li>1 Amulette des Héros (1 chance sur 15)</li> <li>1 Manteau des éléments (1 chance sur 15)</li> <li>De l'xp 12M (je l'ai fait avec un lvl 136 et 200, le <b>gain</b> d'xp est fixe)</li>\n</ul>\n<br/>\n<p></p>",
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
        "description": "<p>Pour débuter cette quête vous devez parler au forgeron Durikh (qui se trouve dans une maison au Nord de Redwall).</p>\n<br/>\n<p><b>Durikh vous demandera de lui prouver votre bonne volonté en lui rapportant ces objets : </b></p>\n<br/>\n<ul>\n  <li>10 piles de bois (Arbres S'intelles)</li> <li>20 baies sauvages (Arbres S'intelles / B'Zerilis)</li> <li>10 pommes magiques (Apocalypses des Sables de DI)</li> <li>2 bouteilles d'alcool (Gardiens du Désert DI)</li>\n</ul>\n<br/>\n<p><b>Apportez-les lui et reparlez lui (Il vous donne 15M d'xp). </b></p>\n<br/>\n<p>Le forgeron vous proposera alors de forger une arme à partir d'une base que vous devrez fournir. Pour ce faire il vous réclamera des objets :</p>\n<br/>\n<ul>\n  <li>5 morceaux en or (Démons Incultes)</li> <li>10 morceaux d'adamandite (Gardiens du Coffre ou quête)</li> <li>1 marteau à forger (Drake Vigrator)</li> <li>1 sablier d'or (Drake Vigrator)</li>\n</ul>\n<br/>\n<p>Les morceaux d'adamandite peuvent se fabriquer chez l'assistant du forgeron d'après cette quête: Parlez à l'assistant du forgeron et dites lui: Adamandite</p>\n<br/>\n<p>Il vous réclamera 20 morceaux de fer (B'Zurkhan) pour un morceau d'adamandite. En échange de ces objets, le forgeron vous proposera de forger une nouvelle arme. Pour ce faire, vous devez choisir le nom de l'arme.</p>\n<br/>\n<p><b>Attention</b>:</b></p>\n<br/>\n<p>- Vous devez avoir l'arme à améliorer dans votre inventaire, sinon le forgeron ne se souciera pas de vous.</p>\n<br/>\n<p>- Le forgeron peut rater l'arme! (50%)! ce qui entraînera qu'elle se brise, à ce moment la il vous dédommagera d'un peu d'or ..</p>\n<br/>\n<p>==&gt; A Noter: Si le forgeron rate une fois votre arme , il la réussira à coup sûr ensuite. Mais c'est seulement valable pour le type d'arme raté.</p>\n<br/>\n<p>Enfin quand il rate votre arme vous devrez seulement fournir la deuxième série d'item (et l'arme) lors de votre prochain essai (qui sera réussi). Possible que ce soit vrai aussi si vous réussissez l'arme...</p>",
        "images": [],
        "order": 0
      },
      {
        "title": "Armes améliorables:",
        "description": "<ul>\n  <li>Arc long des étoiles (445) --&gt; Arc long des maitres étoilés (raté puis réussi par Uqbar)</li> <li>Arc composite Foehn (706) --&gt; Arc Foehn étoilé</li> <li>Lame des chimère (706) --&gt; Lame des chimères étoilée</li> <li>Ecimeuse (735) --&gt; Ecimeuse incrustée d'étoiles</li> <li>Claymore d'extinction (909) --&gt; Claymore d'extinction étoilée</li>\n</ul>\n<br/>\n<p><b>\"Durikh\" donne 15M XP en <b>récompense</b> de la fabrication d'une de ses armes.</b></p>\n<br/>\n<p>Pour ne pas rater inutilement demandez à Elcentor IG, il a tout réussi !!</p>\n<br/>\n<p></p>",
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
        "description": "<ul>\n  \n  <li>\n<p>La quête permet d'entraîner les compétences <b>Coup puissant </b> et <b>Coup Assommant</b> jusqu'à 105.</p>\n</li>\n  <li>\n<p></li>\n  <li></p>\n</li>\n\n</ul>",
        "images": [],
        "order": 0
      },
      {
        "title": "La quête",
        "description": "<ul>\n  \n  <li>\n<p>Rendez vous Au nord-ouest de DI dans une petite maison ou vous trouverez Oscoor Kayle \"travail\" puis \"entraîner\") et il vous proposera d'entraîner coup puissant et coup assommant jusquà 105. Le coût est de 20.000 pièces d'or par point supplémentaire.</p>\n</li>\n  <li>\n<p>La quête n'est pas répétable.</p>\n</li>\n  <li>\n<p></p>\n</li>\n\n</ul>",
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
        "description": "<p>Cette quête est super-intéressante et vous permet de gagner :</p>\n<br/>\n<ul>\n  <li><b>Environ 20 points de caractéristiques</b> ! (en humain)</li> <li>Environ 90k xp</li> <li>Un anneau qui vous boostera, au choix parmi 6</li>\n</ul>\n<br/>\n<p><b>Attention</b> :<span style=\"font-style: normal;\"> Le <b>level maximum pour accomplir cette quête est 10</b>. Si vous êtes d'un lvl supérieur, c'est grillé.</span></p>\n<br/>\n<p><b>Conseils :</b></p>\n<br/>\n<ul>\n  <li>Si vous êtes prêtre/mage, attendez au moins d'avoir obtenu votre premier sort de soins (lvl 3) pour commencer. Si vous êtes guerrier, attendez d'avoir 25 d'endurance et une armure de cuir. En archer débrouillez-vous !!!</li>\n</ul>\n\n<ul>\n  <li><b>Pensez à vous faire bénir</b> par un ancien ou/et achetez une bénédiction à Zélina au temple de LH pour 1000 pièces d'or. Avec un peu de chance, elle vous évitera de mourir trop souvent !!</li> <li><b>Vous pouvez partir et revenir</b>. Si vous dites \"<b>partir</b>\" à Franc (remettez l'épée dans votre sac), vous vous retrouverez au temple de LH, faites-vous (re)bénir. Vous pourrez ensuite revenir en reparlant au père Stanfrid.</li>\n</ul>\n\n<ul>\n  <li>Enfin gardez courage, il y en a pour 45 minutes, vous mourrez peut-être mais ça vaut le coup !!</li>\n</ul>",
        "images": [],
        "order": 0
      },
      {
        "title": "Débuter la quête",
        "description": "<ul>\n  \n  <li>\n<p>Tâchez de vous faire bénir avant de commencer.</p>\n</li>\n  <li>\n<p>Vous pouvez de plus acheter une bénédiction de 600 PV à Zélina au temple de LH pour 1000 pièces d'or (le dragon à la fontaine vous donnera 5000 pièces d'or si vous lui dites \"or\").</p>\n</li>\n  <li>\n<p><b><u>Cette bénédiction qui dure 40 minutes s'ajoutera à toute autre !</u></b></p>\n</li>\n  <li>\n<p>Parlez au père Stanfrid à <b>l'intérieur</b> du temple de LightHaven, dans la partie Nord-Ouest. Dites-lui \"Travail\", ensuite \"Oui\".</p>\n</li>\n  <li>\n<p><b><u>Il vous donnera une épée de fou</u></b> (Dommage : <b>51-100</b>, +20.000 d'attaque) ainsi que 20 potions de guérison (faites une macro).</p>\n</li>\n  <li>\n<p><b><u>Équipez cette arme</u></b> pour tuer les monstres de la quête.</p>\n</li>\n  <li>\n<p>Vos sorts ne vous sont d'aucune utilité, sauf votre éventuel sort de soin.</li>\n  <li></p>\n</li>\n\n</ul>",
        "images": [
          "/t4c-nms-overview/assets/quests/le-debutant/img_1_0.jpg",
          "/t4c-nms-overview/assets/quests/le-debutant/img_1_0.jpg"
        ],
        "order": 1
      },
      {
        "title": "1ère épreuve : Araignées (environ 4000 points d'expérience)",
        "description": "<ul>\n  \n  <li>\n<p>Reparlez à Frank, vous serez téléporté devant l'escalier de la première épreuve. Descendez l'escalier, une fois à l'intérieur, vous tomberez nez à nez avec des araignées.</p>\n</li>\n  <li>\n<p>Elles sont de couleur brune ou verte, et lâchent de l'or ainsi que des potions. Vous devez en tuer 50 avant de pouvoir passer le portail au fond de la cave au Nord-Ouest (vous pouvez compter le nombre d'araignées déjà tuées en regardant en jeu le Livre des Quêtes situé à droite de la barre de chat). Les araignées tuées vous rapportent environ 1000 points d'expérience au total.</p>\n</li>\n  <li>\n<p>Quand vous passez le portail, une araignée géante, mini-boss, vous attend de l'autre côté. Tuez-la. Elle drope à 100% le premier morceau de parchemin qu'il vous faut pour terminer la quête <u>(<b>faites Ctrl N pour le voir</b>).</u> Ramassez le. Si vous êtes plein, déposez vos potions ou buvez-les. Si l'araignée n'est pas là c'est qu'elle vient d'être tuée. Elle respawn toutes les 10 minutes.</p>\n</li>\n  <li>\n<p>Ensuite retournez voir Frank. Il vous donnera 3000 points d'expérience et vous téléportera devant l'escalier de la seconde épreuve...</p>\n</li>\n\n</ul>",
        "images": [
          "/t4c-nms-overview/assets/quests/le-debutant/img_2_0.jpg"
        ],
        "order": 2
      },
      {
        "title": "2ème épreuve : Bébé-dragons (environ 13.000 points d'expérience)",
        "description": "<ul>\n  \n  <li>\n<p>Passé l'escalier, allez au Nord-Ouest de l'entrée pour parler au <b>PNJ</b> Banon. Dites-lui \"dragon\", il vous demandera de</p>\n</li>\n  <li>\n<p>récolter des dents de dragon (15 dents). Pour vous aider il vous donnera aussi 20 potions de guérison. N'oubliez pas de préparer la macro.</p>\n</li>\n  <li>\n<p>Petit plus, si vous ne sortez pas, vous pouvez faire autant de fois que vous voulez les dents par 15, à chaque fois, vous aurez 5000 pièces d'or, pratique mais chaud... :D</p>\n</li>\n  <li>\n<p>Attention, les bébé-dragons font très mal à distance avec leur sort de feu. Prenez les au corps à corps (pas plus de 2 ou 3 à la fois) et cela ne devrait pas poser de problèmes. Le taux de drop des dents est de 20% à 30%.</p>\n</li>\n  <li>\n<p>Une fois les 15 dents récoltées, retournez voir Banon qui vous donnera 5000 pièces d'or. Les dragons tués vous rapportent environ 8000 points d'expérience.</p>\n</li>\n  <li>\n<p>Ensuite, retournez voir Frank. Il vous donnera un morceau de carte et 5000 points d'expérience.</p>\n</li>\n\n</ul>",
        "images": [
          "/t4c-nms-overview/assets/quests/le-debutant/img_3_0.jpg"
        ],
        "order": 3
      },
      {
        "title": "3ème épreuve : Les miroirs (10.000 points d'expérience)",
        "description": "<ul>\n  \n  <li>\n<p>À l'intérieur de la cave, vous trouverez un pentagramme de sang au sol, plusieurs portails ainsi que 3 coffres.</p>\n</li>\n  <li>\n<p>Cette quête est sympa mais déroutante. Ici, pas de monstres, mais un cheminement à trouver au travers de 5 portails.</p>\n</li>\n  <li>\n<p>Le but est de traverser les portails dans un ordre précis, afin de vous faire téléporter dans une pièce avec un coffre qui contient le morceau de carte. Il faut traverser 5 miroirs pour compléter un combinaison.</p>\n</li>\n  <li>\n<p>Il est possible que vous fassiez une bonne combinaison MAIS ne tombiez pas dans la bonne pièce. Il sera indiqué \"Le coffre est vide\". Essayez alors une autre combinaison.</p>\n</li>\n  <li>\n<p>Retournez voir Frank pour la suite. Il vous donnera 10.000 points d'expérience (et des potions de guérison?).</p>\n</li>\n\n</ul>",
        "images": [
          "/t4c-nms-overview/assets/quests/le-debutant/img_4_0.jpg"
        ],
        "order": 4
      },
      {
        "title": "4ème épreuve : La folle (environ 30.000 points d'expérience)",
        "description": "<ul>\n  \n  <li>\n<p>Frank vous a redonné tous les bouts de parchemin afin que vous puissiez assembler ceux-ci avec le dernier bout. Il vous met en garde : une fois accompli, ne regardez pas la carte. Mais comme ils sont tous un peu barjos dans cette quête, Frank se fout éperdument que vous regardiez ou non la carte, et il serait même préférable de la regarder, vous comprendrez mieux pourquoi plus tard.</p>\n</li>\n  <li>\n<p>En bas de l'escalier, dans une petite maison, vous trouverez une <b>PNJ</b> un peu folle nommée \"Prilina\".</p>\n</li>\n  <li>\n<p>Dites-lui \"travail\". Elle vous demandera de tuer les rats qui font cruik cruik. Ces rats géants se trouvent un peu plus bas dans la cave (vous pouvez obtenir le nombre de rats déjà tués en regardant le Livre de Quêtes à droite de la barre de chat). Après en avoir tué 20, retournez voir Prilina et redites-lui \"travail\".</p>\n</li>\n  <li>\n<p>Elle vous demandera 10 bandelettes de momies pour pouvoir recoller les rats, sinon ils ne feront plus cruik cruik!!. Admettez que ce serait dommage non?</p>\n</li>\n  <li>\n<p>Retournez au fond de la cave, vous y trouverez des momies rampantes. Elles dropent à environ 30% des bandelettes. Vous n'en avez pas pour très long mais elle sont méchantes.</p>\n</li>\n  <li>\n<p>D'autant plus qu'il vous faut 20 bandelettes. En effet, une fois vos 10 premières bandelettes présentées, la folle vous en demandera encore 10 autres au cas où elle doive se recoller elle-même... allez y comprendre quelque chose !!</p>\n</li>\n  <li>\n<p>Donc tant qu'à faire réunissez les 20 bandelettes en une fois avant de retourner la voir mais surtout posez-en 10 au sol avant de lui parler!!!!!</p>\n</li>\n  <li>\n<p>Une fois les 20 bandelettes données, la folle vous donne le dernier fragment et la carte s'assemble.</p>\n</li>\n  <li>\n<p>Retournez voir Frank pour la suite. Il vous donnera 22.000 points d'expérience.</p>\n</li>\n\n</ul>",
        "images": [
          "/t4c-nms-overview/assets/quests/le-debutant/img_5_0.jpg",
          "/t4c-nms-overview/assets/quests/le-debutant/img_5_0.jpg"
        ],
        "order": 5
      },
      {
        "title": "5ème épreuve : Le labyrinthe (25.000 points d'expérience)",
        "description": "<p>Frank vous téléportera ensuite sur une nouvelle petite île, un labyrinthe géant.</p>\n<br/>\n<p>Auparavant il vous prendra la carte et vous donnera un parchemin de LightHaven.</p>\n<br/>\n<p><b>ATTENTION</b> !! : surtout ne l'activez pas car, comme dit Franc, \"si vous l'utilisez cela sera considéré comme un abandon et vous ne pourrez pas revenir\". </b>Vous seriez téléporté définitivement à LightHaven. Vous n'auriez pas d'anneau, mais en fait ce n'est pas trop grave, un joueur pourra vous en donner un. Vous aurez l'essentiel, le complément à 100 de vos points de caractéristiques initiaux.</p>\n<br/>\n<p>Frank vous dira aussi que auriez dû regarder cette carte, car c'est justement celle du labyrinthe. Si vous ne l'avez pas mémorisée, revoici la fameuse carte</p>\n<br/>\n<p>Une fois rendu(e) à la sortie du labyrinthe, Gulvik vous attendra dans sa petite maison.</p>\n<br/>\n<p>Il vous donnera 25.000 points d'expérience et 10.000 pièces d'or.</p>\n<br/>\n<p><b>Si vous êtes humain(e), il vous donnera aussi le complément à 100 du nombre total de points de caractéristique que vous aviez à la création de votre personnage, soit entre 15 et 25 points. </b></p>\n<br/>\n<p>Vous pourrez ensuite choisir un anneau. <b>Conseil</b> : quelle que soit votre classe, prenez <b>l'anneau de résistances</b> car il y existe de meilleurs anneaux pour les autres choix.</p>\n<br/>\n<ul>\n  <li>Anneau de force (+15 force, +1 CA, +5 % en attaque)</li> <li>Anneau d'endurance (+15 endurance, +1 CA, +5 % en guérison rapide)</li> <li>Anneau de dextérité (+15 dextérité, +1 CA, +5 % en archerie)</li> <li>Anneau de sagesse (+15 sagesse, +1 CA, +5 % en méditation)</li> <li>Anneau d'intelligence (+15 intelligence, +1 CA, +5 % en esquive)</li> <li><b><u>Anneau de résistances</u> (+5 CA, +2 à toutes les résistances) &lt;=<u> conseillé pour toutes les classes</u></b></li>\n</ul>\n<br/>\n<p><br/></p>\n<br/>\n<p>Au total vous aurez gagné près de 90.000 points d'expérience et plus de 25.000 pièces d'or.</p>\n<br/>\n<p>Et environ <b>20 points de caractéristiques à distribuer</b> si vous êtes humain. Gulvik vous téléportera au temple de LightHaven au mot \"partir\".</p>\n<br/>\n<p>BRAVO ! Vous avez terminé !</p>\n<br/>\n<p></p>",
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
        "description": "<ul>\n  \n  <li>\n<p><b>De nombreuses quêtes standards sont revalorisées et donnent de 100K à 500K xp (et même 1M xp pour l'habit de feuille).</b></p>\n</li>\n  <li>\n<p><b>De plus elles sont souvent répétables... En principe ces quêtes figurent aussi dans le guide du level-up, section Raven's Dust.</b></p>\n</li>\n  <li>\n<p><b><big><b>ATTENTION</b> : Les quêtes dites \"non répétable\" sont répétables après renaissance.</big></b></p>\n</li>\n\n</ul>",
        "images": [],
        "order": 0
      },
      {
        "title": "L’audience au Roi (bonifiée 200K xp) non répétable",
        "description": "<ul>\n  <li>Dans le château de Silversky, allez trouver le Chambellan Thomar au 1er étage centre gauche.</li> <li>Dites-lui \"entretien\". Il vous dira que pour parler au Roi, vous devez réaliser au <b>préalable</b> une quête.</li> <li>Dites \"quête\" et \"oui\" et il vous demandera de tuer 10 Mages Rôdeurs en 30 minutes IRL.</li> <li>Vous les trouverez juste à l’extérieur des remparts de Silversky.</li> <li>Une fois cette tâche accomplie, retournez voir le Chambellan Thomar et dites \"quête\".</li> <li>Vous pourrez alors parler à Théodore XIII et obtiendrez 200.00 xp.</li>\n</ul>\n<br/>\n<p><b>Remarque </b>: Vous ne pouvez effectuer cette quête qu’une seule fois par renaissance.</p>\n<br/>\n<p><b>Remarque:</b> Si, à un moment, le Roi vous dit que pour lui parler, vous devez vous adresser à Thomar, allez voir ce dernier et dites \"entretien\". Il vous dira que, depuis que la quête a été réalisée, vous pouvez parler au Roi.</p>\n<br/>\n<p><b>PNJ</b> impliqués:</b> Le Chambellan Thomar, le Roi Théodore</p>\n<br/>\n<p><b>Récompenses acquises</b>: <b>200K xp</b>. Vous pouvez parler au Roi (indispensable si vous êtes \"good\").</p>",
        "images": [],
        "order": 1
      },
      {
        "title": "La lame d’acuité",
        "description": "<ul>\n  <li>Au château de Silversky, trouvez Tobias (c’est le mage près du donjon).</li> <li>Dites \"livre de l'art de la guerre\" puis \"oui\" et il vous en vendra un pour 15.000 pièces d’or.</li> <li>Amenez-le à Adriana (la professeure vous enseignant la pénétration d’armure à l’est du magasin de potions).</li> <li>Dites-lui \"livre de l'art de la guerre\" et elle sera d’accord pour vous l’échanger pour une lame d’acuité.</li> <li>Dites \"oui\" pour effectuer l’échange.</li>\n</ul>\n<br/>\n<p><b>Remarque:</b> Vous pouvez effectuer cette quête à volonté.</p>\n<br/>\n<p><b>PNJ</b> impliqués: Tobias, Adriana</b></p>\n<br/>\n<p><b>Récompense</b> acquise:</b> Lame d’acuité (82 For, 20 Int, 23 Sag)</p>",
        "images": [],
        "order": 2
      },
      {
        "title": "Le Bouffon Morbide (bonifiée 400K xp) non répétable",
        "description": "<ul>\n  <li>Au château de Silversky, trouvez Samuel (deuxième étage à gauche) et dites \"Bouffon morbide\".</li> <li>Il vous demandera de tuer le Bouffon Morbide qui reste tapi dans le donjon du château (respawn 22mn environ). Notez que vous devez le tuer vous-même.</li> <li>Une fois que vous l’avez renvoyé au Royaume des Morts, ramassez son crâne (Attention, c’est un coriace et les joueurs ayant un niveau inférieur à 30 devront prendre quelques potions).</li> <li>Retournez voir Samuel et dites \"Bouffon morbide\".</li> <li>Il vous remerciera et vous récompensera avec 400.000 xp et un protecteur scarabée.</li>\n</ul>\n<br/>\n<p><b>Remarque </b>: Vous ne pouvez effectuer cette quête qu’une seule fois par renaissance.</p>\n<br/>\n<p><b>PNJ</b> impliqué</b>: Samuel</p>\n<br/>\n<p><b>Mini Boss impliqué</b>: Bouffon Morbide</p>\n<br/>\n<p><b>Récompense</b> acquise</b>: <b>400K xp</b>, Protecteur Scarabée (100 End, 53 Int, 40 Sag)</p>",
        "images": [],
        "order": 3
      },
      {
        "title": "L’alliance (bonifiée 500K xp)",
        "description": "<ul>\n  <li><b>Attention</b> il faut marcher beaucoup</li> <li>Vous devez être level 28.</li> <li>Dans la ville de Silversky, trouvez Baldric Silverknife (avec le look d’un voleur, il est à l’est de la boutique de potions (<b>1570,2555</b>)).</li> <li>Dites-lui \"cochons\" et il vous demandera de tuer 10 cochons… Groinnk ??</li> <li>Vous trouverez des cochons dans les champs de Silversky (<b>1565,2450</b>).</li> <li>Après avoir terminé cette impitoyable et extrêmement difficile tâche, retournez voir Baldric et dites \"cochons\" puis \"tâches\".</li> <li>Il vous dira de trouver Doremas (il est à l’ouest de la fontaine de Silversky (<b>1455,2495</b>)).</li> <li>Trouvez-le et dites \"Grimish\". Il vous enverra voir Grimish le Gobelin.</li> <li>Trouvez Grimish situé au camp Orque de Raven’s Dust (<b>1390,1830</b>) - oui, oui, je sais que vous en avez assez de marcher -</li> <li>Dites-lui \"Doremas\".</li> <li>Devinez quoi : vous devez retourner voir Doremas et lui dire \"Grimish\".</li> <li>Il sera surpris que vous l’ayez trouvé et vous enverra retrouver Grimish (c’est vrai ?).</li> <li>Une fois que vous serez de retour au côtés de Grimish, dites \"Doremas\" et il vous demandera de résoudre l’énigme suivante : «Maintenant, vous dire quoi être meilleur que rats crus mais plus laid que Doremas ?»</li> <li>La réponse est : \"rien\".</li> <li>Grimish vous donnera le mot de passe : \"L’alliance est renouvelée \".</li> <li>Retournez voir Doremas et dites \"Grimish\" ; il vous enverra voir Baldric Silverknife.</li> <li>Trouvez-le et dites \"l'alliance est renouvelée\".</li> <li>Vous recevrez 500K xp.</li>\n</ul>\n<br/>\n<p><b>Remarque</b>: Vous devez être au minimum niveau 28 pour que Baldric Silverknife vous adresse la parole.</p>\n<br/>\n<p><b>PNJ</b> impliqués</b>: Baldric Silverknife, Doremas, Grimish le Gobelin</p>\n<br/>\n<p><b>Récompense</b> acquise: 500K xp.</b></p>",
        "images": [],
        "order": 4
      },
      {
        "title": "Le pourfendeur de gobelins - chez Rhodar",
        "description": "<ul>\n  <li>Dans la ville de Silversky, trouvez le <b>PNJ</b> nommé Rhodar Pyras (C'est le marchand d’armes à l’Est de l’entrée du château).</li> <li>Dites \"pourfendeur de gobelin\" et il vous en vendra un pour 25.000 pièces d’or, mais seulement si vous avez déjà tué au moins 500 gobelins (il vous indiquera alors combien de gobelins vous avez tué).</li>\n</ul>\n<br/>\n<p><b>Remarque</b>: Cette quête est indispensable aux déchus.</p>\n<br/>\n<p><b>PNJ</b> impliqué</b>: Rhodar Pyras</p>\n<br/>\n<p><b>Récompense</b> acquise</b>: Pourfendeur de gobelins (97 For, 20 Int, 23 Sag)</p>",
        "images": [],
        "order": 5
      },
      {
        "title": "Le marteau de Rhodar (bonifiée 500K xp)",
        "description": "<ul>\n  <li>Sortez de Silversky par la porte ouest et suivez le chemin vers le nord. A la seconde intersection, allez vers l’ouest. Suivez le chemin jusqu’à ce que celui-ci s’achève.</li> <li>Vous trouverez à cet endroit marteau\" puis\"oui\".</li> <li>Vous serez récompensé par <b>500K xp</b> et 3.500 pièces d’or.</li>\n</ul>\n<br/>\n<p>Remarque: Vous pouvez effectuer cette quête à volonté.</p>\n<br/>\n<p><b>Attention</b> : le marteau est indroppable !</p>\n<br/>\n<p><b>PNJ</b> impliqué</b>: Rhodar Pyras</p>\n<br/>\n<p><b>Mini Boss impliqué</b>: Quadros le Borgne</p>\n<br/>\n<p><b>Récompense</b> acquise: 500K xp</b>, 3.500 pièces d’or</p>",
        "images": [],
        "order": 6
      },
      {
        "title": "Les yeux de tarentules",
        "description": "<ul>\n  <li>Les tarentules dropent des yeux de tarentules.</li> <li>Récupérez-les et amenez-les à Aloysius Starbolt (situé au château de Silversky, 2ème étage,coursive à l'est).</li> <li>Dites \"yeux de tarentule\", \"oui\" et il vous échangera une paire d’yeux contre 3.000 pièces d’or.</li>\n</ul>\n<br/>\n<p><b>Remarque 1</b>: Vous pouvez effectuer cette quête à volonté.</p>\n<br/>\n<p><b>Remarque 2</b>: Quête non bonifiée.</p>\n<br/>\n<p><b>Remarque 3</b>: Si vous faites la quête des peaux d'antilopes, gardez vos yeux (autant d'yeux que vous avez de peaux).</p>\n<br/>\n<p><b>PNJ</b> impliqué</b>: Aloysius Starbolt</p>\n<br/>\n<p><b>Récompense</b> acquise</b>: 3.000 pièces d’or</p>",
        "images": [],
        "order": 7
      },
      {
        "title": "Sauvez le Petit Arbre (fioles cristallines) (bonifiée 200K xp)",
        "description": "<ul>\n  <li>Au camp des Druides de Raven’s Dust, trouvez Celestina Avel et dites \"arbre\".</li> <li>Elle vous demandera 2 fioles d’eau cristalline afin de sauver le Petit Arbre.</li> <li>Les fioles sont dropées par de nombreuses créatures sur Stoneheim (surtout sortie Est de StoneCrest), par les 3 Grott et les pillards des Dunes ainsi que d'autres mobs sur Raven’s Dust.</li> <li>Ramenez deux fioles à Celestina Avel et dites \"arbre\" puis \"oui\".</li> <li>Comme récompenses, vous recevrez un sachet d’écorce de saule et 200.000 xp.</li>\n</ul>\n<br/>\n<p><b>Remarque</b>: Vous pouvez effectuer cette quête à volonté</p>\n<br/>\n<p><b>PNJ</b> impliqués</b>: Celestina Avel</p>\n<br/>\n<p><b>Récompense</b> acquise:</b> <b>200K xp,</b> Sachet d’écorces de saule.</p>",
        "images": [],
        "order": 8
      },
      {
        "title": "Anneau Feu Follet (la nuit) - c'est la suite (bonifiée 400K xp)",
        "description": "<ul>\n  <li>Allez au Lac Tarentules et cherchez le personnage nommée Evelyn (elle apparaît an Nord de la RST RD, pos <b>830, 1825</b>).</li> <li>Elle ne vous parlera que pendant la nuit!!</li> <li>Dites-lui \"anneau feu follet\" et elle vous demandera un sachet d’écorce de saule que vous obtenez en faisant la quête \"Sauvez le Petit Arbre\" et un anneau de fer (que vous pouvez aisément trouver ou acheter sur Arakas chez la marchande Fali).</li> <li>Une fois les deux objets réunis, retournez la voir et dites-lui à nouveau \"anneau feu follet\" puis \"oui\" et elle vous donnera l'anneau feu follet et 400.000 xp.</li>\n</ul>\n<br/>\n<p><b>Remarque #1</b>: Vous pouvez effectuer cette quête à volonté.</p>\n<br/>\n<p><b>Remarque #2</b>: Il y a peut-être un léger problème avec cette quête : si vous avez plus d’un sachet d’écorce ou plus d’un anneau de fer, Evelyn vous demandera d’aller les chercher car elle n’admettra pas que vous en ayez plusieurs. Pour régler la question, laissez tomber l’excédent à terre et ne gardez dans votre inventaire qu’un seul sachet et un seul anneau. Ainsi vous pourrez terminer la quête.</p>\n<br/>\n<p><b>PNJ</b> impliqués</b>: Evelyn</p>\n<br/>\n<p><b>Récompense</b> acquise</b>: <b>400K xp,</b> Anneau feu Follet (0 stats) sert a fabriquer l'anneau cerfeuil.</p>",
        "images": [],
        "order": 9
      },
      {
        "title": "L'habit de feuilles (les 4 pierres) non répétable (bonifiée 1M xp)",
        "description": "<ul>\n  <li>Au camp des druides de Raven’s Dust, trouvez Darius Moonglow. Dites-lui \"pierres\" et il vous demandera de trouver 4 pierres (verte, bleue, rouge et jaune).</li> <li>Pierre verte droppée par les Mages Rôdeurs</li> <li>Pierre jaune droppée par les Gardes de l’ombre</li> <li>Pierre bleue droppée par les Guerriers Minotaures</li> <li>Pierre rouge droppée par les arbres démoniaques</li> <li>Une fois collectées, ramenez-les lui, dites \"pierre\" et vous serez récompensés par un habit de feuilles et 1.000.000 xp !!</li>\n</ul>\n<br/>\n<p><b>Remarque </b>: Vous ne pouvez faire cette quête qu’une seule fois par renaissance.</p>\n<br/>\n<p><b>PNJ</b> impliqué </b>: Darius Moonglow</p>\n<br/>\n<p><b>Récompenses acquises </b>: <b>1 million d'xp,</b> Habit de feuilles (20 End, 15 Int, 115 Sag),</p>\n<br/>\n<p><br/></p>",
        "images": [],
        "order": 10
      },
      {
        "title": "L’anneau de foi (bonifiée 250k xp)",
        "description": "<ul>\n  <li>Les Gardes de l’ombre dropent des calices d'or.</li> <li>Ramenez-en un à Frère Thorkas au temple de Silversky et dites \"calice d'or\" et \"oui\".</li> <li>Vous serez récompensé par 250.000 xp et un anneau de foi.</li>\n</ul>\n<br/>\n<p><b>Remarque</b>: Vous pouvez effectuer cette quête à volonté</p>\n<br/>\n<p><b>PNJ</b> impliqués</b>: Frère Thorkas</p>\n<br/>\n<p><b>Récompense</b> acquise</b>: Anneau de foi (15 Int, 65 Sag), <b>250K xp</b></p>\n<br/>\n<p><br/></p>",
        "images": [],
        "order": 11
      },
      {
        "title": "Le bracelet orque (peaux d'antilope et yeux de tarentules) (bonifiée 250K xp)",
        "description": "<p><b>Attention</b> : le chasseur Morindin ne vous parlera que le jour !</b></p>\n<br/>\n<ul>\n  <li><b>Trouvez 2 peaux d’antilopes</b> et amenez-les à Morindin le chasseur le jour (il est au nord du Lac Tarentules).</li> <li>Dites-lui \"peaux d'antilopes\" et \"oui\". Vous recevrez un sachet de graines de pissenlit et 150K xp.</li> <li><b>Maintenant trouvez 2 paires d’yeux de tarentules</b> et ramenez-les avec le sachet de graines à Ghundarg Garak vers une maison (<b>1140,1800</b>) au camp orque de RD.</li> <li>Dites \"Ingrédients\" puis \"oui\" et vous recevrez un bracelet orque et 100K xp.</li>\n</ul>\n<br/>\n<p><b>Remarque #1</b>: Si vous avez commencé la quête des Clés Royales et que votre karma est inférieur à 170, Morindin le chasseur refusera de vous parler.</p>\n<br/>\n<p><b>Remarque #2:</b> Morindin le chasseur ne vous parlera que le jour.</p>\n<br/>\n<p><b>Remarque #3:</b> Vous pouvez effectuer cette quête à volonté.</p>\n<br/>\n<p><b>PNJ</b> impliqués:</b> Morindin le chasseur, Ghundard Garak</p>\n<br/>\n<p><b>Récompense</b> acquise:</b> <b>150K+100K xp</b>, Bracelet orque (35 End, 32 Int, 38 Sag)</p>\n<br/>\n<p><br/></p>",
        "images": [],
        "order": 12
      },
      {
        "title": "Le pied humain (bonifiée 800K xp)",
        "description": "<ul>\n  <li>Une fois la quête du bracelet orque complétée, Ghundarg Garak vous demandera un pied humain.</li> <li>C’est un drop rare de Blaarg Pedista, à l’intérieur des caves orques.</li> <li>Une fois que vous en aurez un, ramenez-le à Ghundarg et dites \"pied humain\" et \"oui\".</li> <li>Vous serez récompensés par 800k xp et un montant aléatoire d’or (de 1000 à 26.000 pièces d’or).</li>\n</ul>\n<br/>\n<p>Remarque: Vous pouvez effectuer cette quête à volonté.</p>\n<br/>\n<p><b>PNJ</b> impliqué</b>: Ghundarg Garak</p>\n<br/>\n<p><b>Mini Boss impliqué</b>: Blaarg Pedista</p>\n<br/>\n<p><b>Récompense</b> acquise:</b> <b>800k xp</b>, Montant d’or aléatoire (1000 - 26.000 po)</p>\n<br/>\n<p><br/></p>",
        "images": [],
        "order": 13
      },
      {
        "title": "Le recrutement par Mordrick Mansel, le bouclier tour (bonifiée 500K xp)",
        "description": "<ul>\n  <li>Au château de Silversky, trouvez Mordrick Mansel. Dites \"travail\", \"oui\", \"rapport\". Il vous demandera de tuer 15 arbres démoniaques. Une fois les quinze arbres tués, retournez voir Mordrick.</li> <li>Dites \"rapport\" et vous serez récompensés de 10.000 + 250*niveau xp. <i><b>(19.500 niveau 38)</b></i></li> <li>Vous recevrez aussi une nouvelle mission : connaître les plans secrets des orques.</li> <li>Allez au camp orque de Raven’s Dust et tuez Ghundarg Garak : vous obtiendrez les plans. Retournez voir Mordrick et dites \"rapport\".</li> <li>Malheureusement il ne parle pas orque [vous non plus d’ailleurs :-)] et les plans doivent être traduits.</li> <li>Vous recevrez 300.000 + (5.000*niveau) xp.</li> <li>Trouvez Morindin le chasseur (au nord du Lac Tarentules) et demandez-lui de traduire les plans : dites \"traduire\" et \"oui\".</li> <li>Il vous demandera 5.000 pièces d’or pour cette traduction. Dites \"oui\" encore une fois et il effectuera la traduction.</li> <li>Revenez voir Mordrick et dites \"rapport\". Vous serez récompensés par un bouclier Tour.</li>\n</ul>\n<br/>\n<p><b>Remarque #1</b>: Ghundard Garak est un dur et les personnes de niveau inférieur à 40 devraient se faire accompagner.</p>\n<br/>\n<p><b>Remarque #2</b>: Morindin le chasseur ne vous parlera pas la nuit.</p>\n<br/>\n<p><b>PNJ</b> impliqués</b>: Mordrick Mansel, Ghundard Garak, Morindin le chasseur</p>\n<br/>\n<p><b>Récompense</b> acquise</b>: 310.000 + (5.500 * niveau) xp, Bouclier Tour (125 End)</p>\n<br/>\n<p><br/></p>",
        "images": [],
        "order": 14
      },
      {
        "title": "L'orque Archimage",
        "description": "<ul>\n  <li>Cette quête débute quand, à un moment totalement aléatoire, Aloysius Starbolt vous informe qu’il ressent un danger venant du nord.</li> <li>Allez au camp orque de Raven’s Dust et près de la maison de Grimish, vous trouverez un orque Archimage.</li> <li>Tuez-le, retournez voir Aloysius pour recevoir 25.000 xps et l’une des récompenses suivantes : un anneau de confiance, un anneau de platine ou les instructions pour trouver le donjon des minotaures.</li>\n</ul>\n<br/>\n<p><b>Remarque</b>: Vous pouvez effectuer cette quête à volonté.</p>\n<br/>\n<p><b>PNJ</b> impliqué:</b> Aloysius Starbolt</p>\n<br/>\n<p><b>Mini Boss impliqué</b>: Orque Archimage</p>\n<br/>\n<p><b>Récompense</b> acquise: 25.000 xps, anneau de confiance (17 Int, 31 Sag) OU Anneau de platine (39 Int, 41 Sag) OU les instructions pour trouver <b>le donjon des minotaures.</b></p>\n<br/>\n<p><br/></p>",
        "images": [],
        "order": 15
      },
      {
        "title": "Les bottes en peau de lézard (bonifiée 300K xp)",
        "description": "<ul>\n  <li>A Silversky, trouvez Elysana Blackrose (elle est dans une maison au Sud du temple).</li> <li>Dites \"travail\", \"Ingredients\" et elle vous demandera les ingrédients suivants : 1x douce-amères, 1x graine de chapelet et 1x hamamelis. (dropées par orque mage et minotaures).</li> <li>Une fois que vous avez les ingrédients, retournez voir Elysana et dites-lui \"Ingrédients\".</li> <li>Elle vous récompensera de 300K xps et d’une paire de bottes en peau de lézard.</li>\n</ul>\n<br/>\n<p>Remarque: Vous pouvez effectuer cette quête à volonté.</p>\n<br/>\n<p><b>PNJ</b> impliqué</b>: Elysana Blackrose</p>\n<br/>\n<p><b>Récompense</b> acquise</b>: 300Kxps, Bottes en peau de lézard (75 End, 30 Int, 25 Sag)</p>\n<br/>\n<p><br/></p>",
        "images": [],
        "order": 16
      },
      {
        "title": "L'anneau de pierre de sang (douces-amères et gingembre) (bonifiée 250K xp)",
        "description": "<ul>\n  <li>Vous trouverez Greyleaf l’arbre démoniaque à l’est du Lac Tarentules.</li> <li>Pour pouvoir lui parler, vous avez besoin d’une <b>pierre verte de l’esprit de la forêt</b> que vous pouvez acheter à Elysana Blackrose (maison proche du temple de SS) pour 20.000 pièces d’or, en lui disant \"pierre verte de l'esprit de la foret\".</li> <li>Muni de cette pierre dites \"utile\" et Greyleaf vous demandera un sachet de douces-amères et un sachet de gingembre sauvage (drops des minotaures).</li> <li>Une fois les ingrédients récoltés, retournez le voir et dites-lui \"utile\" puis, selon votre préférence :</li>\n</ul>\n<br/>\n<p><b>Choix #1</b> : Dites \"oui\" et vous serez récompensés par 250K xp et un anneau de pierre de sang.</p>\n<br/>\n<p><b>Choix #2</b> : Dites \"non\" puis \"oui\" et vous serez récompensés par 3.500 xp (?) et une amulette éthérée.</p>\n<br/>\n<p><b>Remarque</b>: Vous pouvez effectuer cette quête à volonté</p>\n<br/>\n<p><b>PNJ</b> impliqués</b>: Greyleaf l’arbre démoniaque, Elysana Blackrose (si nécessaire)</p>\n<br/>\n<p><b>Récompense</b> acquise:</b> <b>250K xp</b>, Anneau de pierre de sang (30 Int, 18 Sag) OU 3.500 xp?, Amulette éthérée (75 Int, 55 Sag)</p>\n<br/>\n<p><br/></p>",
        "images": [],
        "order": 17
      },
      {
        "title": "L’anneau de précision (bonifiée 180K xp)",
        "description": "<ul>\n  <li>Grimish au camp orque de Raven’s Dust demande 3 ailes de chauve-souris vampires (que vous pouvez trouver à la Broken One Cave - cave de l'aveugle).</li> <li>Dites-lui \"comte Hemogobelin\" puis \"oui\" et vous recevrez 180.000 xp et un anneau de précision en <b>échange des ailes.</b></li>\n</ul>\n<br/>\n<p><b>Remarque #1:</b> Grimish demande 3 ailes de chauve-souris vampire (et vous devez en avoir 3 dans votre inventaire), mais il n’en prend pour le moment que deux de votre inventaire.</p>\n<br/>\n<p><b>Remarque #2:</b> Vous pouvez effectuer cette quête à volonté.</p>\n<br/>\n<p><b>Remarque #3</b>: Quête peu rentable</p>\n<br/>\n<p><b>PNJ</b> impliqué</b>: Grimish</p>\n<br/>\n<p><b>Récompense</b> acquise:</b> <b>180K xp</b>, Anneau de précision (29 Int, 29 Sag)</p>\n<br/>\n<p><br/></p>",
        "images": [],
        "order": 18
      },
      {
        "title": "La potion de guérison importante",
        "description": "<ul>\n  <li>Au château de Silversky, trouvez Menark (il est près de l’entrée du donjon). Dites \"étudier\" et il vous demandera un os de squelette et une bandelette de momie.</li> <li>Vous trouverez l’os en tuant des Sorciers squelettes (à l’extérieur de la Broken One Cave) et la bandelette en tuant des Horreurs Enrubannées (Crypte de Raven’s Dust).</li> <li>Récupérez les ingrédients et ramenez-les à Menark. Dites \"étudier\" et \"oui\".</li> <li>Vous recevrez une potion de guérison importante et <b>7.500 xps.</b></li>\n</ul>\n<br/>\n<p><b>Remarque:</b> Vous pouvez effectuer cette quête à volonté.</p>\n<br/>\n<p><b>PNJ</b> impliqués:</b> Menark</p>\n<br/>\n<p><b>Récompense</b> acquise:</b> 7.500 xp, Potion de guérison importante</p>\n<br/>\n<p><br/></p>",
        "images": [],
        "order": 19
      },
      {
        "title": "l'amulette éthérée (bonifiée 1,2M xp)(non répétable)",
        "description": "<ul>\n  <li>Apporter un oeuf d'un Kraanian à Zakhar (dans sa tour aux horreurs railleuses, loin dans les montagnes Ouest de RD).</li> <li>Ensuite prendre 2 niveaux , retourner le voir, il vous dira qu'il s'est fait voler son bâton de mana, par le <b>Profundus Supremus</b> qui se trouve dans une grotte en prenant le chemin vers la gauche en bas de la tour de Zakhar, le tuer. Il dropera un parchemin dans votre inventaire.</li> <li>Ensuite aller voir Aloysius Starbolt (Château SS, 1er étage, en bas à droite), il vendra le bâton pour <b>32,000</b> pièces d'or, dites <i>Baton de mana (ou parchemin), oui</i> (le parchemin s'enflamme). Retourner voir Zakhar à sa tour, il prendra le bâton.</li> <li>Ensuite attendre à nouveau 2 niveaux, puis retourner encore voir Zakhar, l'oeuf de Kraanian aura éclos, il fera apparaitre un énorme Kraanian, (assez laid, mais même skin que ceux que les rats de l'ile éthérée font apparaître). Le tuer, reparler à Zakhar et lui dire <i>Zzartgax</i> .</li> <li>Quête faisable à partir du lvl 30 à 35 environ.</li>\n</ul>\n<br/>\n<p><b>Remarque:</b> Cette qu^éte s'étend sur 4 levels !</p>\n<br/>\n<p><b>PNJ</b> impliqués:</b> Zakhar, Aloysius Starbolt</p>\n<br/>\n<p><b>Récompenses acquises : <b>1,2</b> Million d'xp</b>, Amulette Ethérée (75 Int, 55 Sag)</p>\n<br/>\n<p><br/></p>",
        "images": [],
        "order": 20
      },
      {
        "title": "Audience à Bane Gwengad",
        "description": "<ul>\n  <li>Allez au château de Bane Gwengad et trouvez Dwarthon Lithin (à l'ouest du trône). Dites-lui \"Bane\" et il vous demandera de tuer Delwooble l’Incantateur Fou qui se cache dans le donjon du château.</li> <li>Remarque : Si Dwarton (ou Bane ou Delwobble) n'est pas là c'est qu'un joueur l'a kill. Il <b>repop</b> en 20 minutes environ.</li> <li>Trouvez Delwobble (il est situé dans un petit couloir à l’extrême Est, juste avant Shadeen la Dague) et tuez-le.</li> <li>Retournez voir Dwarthon et dites-lui \"Bane\". Vous pouvez désormais parler à Bane Gwengad.</li>\n</ul>\n<br/>\n<p><b>PNJ</b> impliqué:</b> Dwarthon Lithin</p>\n<br/>\n<p><b>Mini Boss impliqué:</b> Delwobble l’Incantateur Fou</p>\n<br/>\n<p><b>Récompense</b> acquise:</b> Vous pouvez parler à Bane Gwengad</p>\n<br/>\n<p><br/></p>",
        "images": [],
        "order": 21
      },
      {
        "title": "La dague de sang (bonifiée 200K xp) et cape de résistance au feu (aléatoire)",
        "description": "<p>Afin de faire cette quête, vous devez au <b>préalable</b> avoir terminé la quête d’audience à Bane Gwengad (voir ci-dessus).</p>\n<br/>\n<ul>\n  <li>Trouvez Bane et dites-lui \"Ingrédients\".</li> <li>Il vous demandera une pierre de mana et un sachet de graines de chapelet.</li> <li>Retournez voir Bane avec ces objets et dites \"Ingrédients\" puis \"oui\" et il vous donnera en échange une dague du sang et 200.000 xp.</li> <li>Ensuite allez voir Baldric Silverknife à Silversky (Est du magasin de potions).</li> <li>Dites-lui \"quelque chose\". Il vous demandera une dague du sang et un tesson brillant (drop des Horreurs Enrubannées à la crypte de RD) afin qu’il vous donne son tambour.</li> <li>Une fois que vous avez tout, retournez voir Baldric et dites à nouveau \"quelque chose\" puis \"oui\" et il vous donnera son tambour.</li> <li>Allez maintenant voir Thorbin Kaloneg à la taverne de Silversky.</li> <li>Dites-lui \"Baldric\" et il vous demandera de lui donner le tambour de Baldric afin qu’il puisse l’enterrer.</li> <li>Dites-lui \"oui\" et vous recevrez en récompenses 3.000 xp et <b>soit une cape de résistance au feu soit un verre de bière vide</b>!!</li>\n</ul>\n<br/>\n<p><b>Remarque #1:</b> Vous n'obtiendrez pas toujours la cape de résistance au feu.</p>\n<br/>\n<p><b>Remarque #2:</b> Vous pouvez effectuer cette quête à volonté.</p>\n<br/>\n<p><b>PNJ</b> impliqués:</b> Bane Gwengad, Baldric Silverknife, Thorbin Kaloneg</p>\n<br/>\n<p><b>Récompenses acquises :</b> <b>200K xp</b> puis <b>soit</b> une cape de résistance au feu (45 Int, 35 Sag) + 3.000 xp(?) <b>soit</b> un verre de bière vide.</p>\n<br/>\n<p><br/></p>\n<br/>\n<p></p>",
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
        "description": "<ul>\n  \n  <li>\n<p><b>Condition</b> pour y avoir accès: Être Séraphin d Artherk ou d'Ogrimar.</p>\n</li>\n  <li>\n<p>L'entrée de la FNR se trouve devant la cave de l'aveugle (nord de Raven's Dust). Une fois devant la cave trouvez le <b>PNJ</b> nommé Archibald Spielengnaffron.</p>\n</li>\n  <li>\n<p>Vous lui dites \"<b>foret de non retour</b>\" puis \"<b>oui</b>\". Vous serez alors téléporté dans un cercle de pierre.</p>\n</li>\n  <li>\n<p></li>\n  <li>Les parchemins d'évasion, dropés par les mystiques ou les coffres vous téléporteront hors de la forêt, près du <b>pnj</b> qui téléporte à la forêt.</p>\n</li>\n  <li>\n<p>Les parchemins d'orientation servent a ne pas se faire téléporter par les araignées et les arbres.</p>\n</li>\n  <li>\n<p></li>\n  <li></p>\n</li>\n  <li>\n<p></p>\n</li>\n\n</ul>",
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
        "description": "<ul>\n  \n  <li>\n<p>Vous devez être déchu pour réaliser cette quête.</p>\n</li>\n  <li>\n<p>Vous devez avoir réalisé auparavant la quête de l'accès a l'asile !</p>\n</li>\n  <li>\n<p>Après avoir récupéré la Fiole de Sang de Forbin, allez sur RD voir le déchu qui se trouve dans la baraque juste avant l'entrée du Mausolée de RD et parlez lui. Dites lui \"fiole de sang de forbin\". Il vous demandera de lui ramener cette fiole et vous donnera la \"liste\" des items de Drachen qu'l convoite (Sceptre de pouvoir de Drachen, Epée vorpale de Drachen, Plastron de Drachen, Heaume de Drachen, Robe de Drachen)</p>\n</li>\n  <li>\n<p>Dites lui \"Forbin\". Il va demander une preuve de la confiance de son frère pour continuer la discussion.</p>\n</li>\n  <li>\n<p>Poursuivez le dialogue et dites lui \"preuve\" puis \"récupéré\". Quand il constatera que vous avez la fiole de sang, il sera prêt a vous envoyer vers la forêt de non retour. Dites lui enfin \"envoie\". Vous serez téléportés vers la Forêt de Non-Retour pour trouver les items demandés.</p>\n</li>\n  <li>\n<p>Une fois tout les items réunis, retournez le voir pour qu'il vous donne une fiole de : <s>puissance/résistance à la magie (+20%).</s> Cette fiole est désormais obsolète.</p>\n</li>\n  <li>\n<p></p>\n</li>\n\n</ul>",
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
        "description": "<ul>\n  <li><b>Première solution</b> : Par la cave de glace. L'entrée se trouve au Nord du Mausolée de Raven's Dust. Dirigez-vous comme pour aller au mausolée de Raven's Dust (nord de RD). Mais au <b>lieu</b> de parler au <b>PNJ</b> contournez-le par la droite : vous trouverez des montagnes enneigées et l'entrée d'une grotte. Entrez-y.Vous êtes dans la cave de glace, vous devez trouver la sortie qui est située vers le bas, à droite. Quand vous aurez trouvé la sortie vous serez dans la ville de Niève.</li>\n</ul>\n\n<ul>\n  <li><b>Deuxième solution</b> (la plus pratique) : avoir le sort \"portail vers Niève\" ou trouver une bonne âme qui vous fasse un portail.</li>\n</ul>\n\n<ul>\n  <li><b>Troisième solution</b> (sauf pour le 1er pasage) : utiliser un parchemin de Niève. Achetez-en la première fois que vous passerez à Niève. Il vous mènera au temple.</li>\n</ul>\n\n<ul>\n  <li><b>Quatrième solution</b> : passer par les portails du planewalking (vous devez être séraph et level 50+ et avoir fait la quête du planewalking). Le portail est situé au centre de la ville.</li>\n</ul>\n\n<ul>\n  <li><b>Dernière solution</b> (sauf pour le 1er passage) : placez votre sanctuaire au temple du sous-sol lors d'un passage.</li>\n</ul>\n<br/>\n<p></p>",
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
        "description": "<p>L'accès sera différent selon que vous êtes humain/déchu ou séraphin/néphilim.</p>",
        "images": [],
        "order": 0
      },
      {
        "title": "Humains ou Déchus",
        "description": "<p>Pour accéder à la Cave <b>Humterre</b>, il vous faut l'accès à Drake Island (évidemment !).</p>\n<br/>\n<p>Allez voir Umnia Felony, la femme dans la maison en face du temple de RedWall. Parlez lui. Elle vous demandera</p>\n<br/>\n<ul>\n  <li><b> 6 piles d'Arbre S'Intelle (et non pile de bois)</b></li> <li><b>3 Essences de B'Zurkhan</b></li>\n</ul>\n<br/>\n<p>Retournez la voir avec les objets. Vous aurez <b>500K or et 5M xp</b> et un des 4 items suivants :</p>\n<br/>\n<ul>\n  <li>Lame enchantée</li> <li>Flèches de feu</li> <li>Fléau de Feu</li> <li>Anneau de feu</li>\n</ul>\n<br/>\n<p>Une fois la <b>récompense</b> obtenue, parlez-lui de son \"Frère\". Elle vous enverra alors parler à Keldor Felony, situé sur l'îlot à droite de la ville. Ce dernier vous demandera de <b>tuer 50 Drakes Akaïstes</b> (nord-ouest du désert de DI).</p>\n<br/>\n<p>Ceci fait, il vous récompensera de 500 000 po et 5M xp. Il vous proposera aussi de vous téléporter dans la cave Humterre pour la modique somme de 100 000 pièces d'or.</p>\n<br/>\n<p><b>Vous devrez débourser 100 000 pièces d'or à chaque fois que vous désirerez vous faire téléporter vers la Cave Humterre.</b></p>",
        "images": [],
        "order": 1
      },
      {
        "title": "Séraphins ou néphilims",
        "description": "<p>Pour accéder à la Cave <b>Humterre</b>, il vous faut l'accès à Drake Island (évidemment!)</p>\n<p style=\"border-style: initial; border-color: initial; font-style: normal;\">Allez voir Namess, au Nord du temple de RW. Il vous demandera</p>\n<br/>\n<ul>\n  <li><p style=\"border-style: initial; border-color: initial; font-style: normal;\"><b>6 piles d'Arbre S'Intelle (et non pile de bois)</b></p>\n</li> <li><p style=\"border-style: initial; border-color: initial; font-style: normal;\"><b>3 Essences de B'Zurkhan</b></p>\n<p style=\"border-style: initial; border-color: initial; font-style: normal;\"> Ceci fait, il vous demandera de <b>tuer 50 Drakes Akaïstes</b>. Le reste de la quête est semblable à celle pour les humains sauf que votre interlocuteur sera Namess.</p>\n</li>\n</ul>\n<p style=\"border-style: initial; border-color: initial; font-style: normal;\"><b>6 piles d'Arbre S'Intelle (et non pile de bois)</b></p>\n<p style=\"border-style: initial; border-color: initial; font-style: normal;\"><b>3 Essences de B'Zurkhan</b></p>\n<p style=\"border-style: initial; border-color: initial; font-style: normal;\"> Ceci fait, il vous demandera de <b>tuer 50 Drakes Akaïstes</b>. Le reste de la quête est semblable à celle pour les humains sauf que votre interlocuteur sera Namess.</p>\n<br/>\n<p></p>",
        "images": [],
        "order": 2
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
        "description": "<ul>\n  \n  <li>\n<p>Une fois en possession de votre clé d'Artherk ou d'Ogrimar, allez à <b>la chambre de Providence</b>. Pour la trouver, dirigez-vous vers le Nord-Est de Stoneheim (après les gremlins) puis longez la côte Ouest jusqu'à 2 grands monolithes sur votre gauche. Passez entre eux sur un pont invisible au-dessus de l'eau.</p>\n</li>\n  <li>\n<p>Vous arriverez sur une petite île ou se situe l’entrée de la<b> chambre de Providence. </b>Prenez l'escalier, avancez et ensuite prenez le portai<b>l. </b>Vous arriverez dans le <b>Cœur du Destin</b>. Marchez jusqu'au vortex central. Vous arrivez à l'entrée (entrance) du <b>Royaume de l'Oracle. </b></p>\n</li>\n  <li>\n<p>Vous voici au <b>Royaume de l'Oracle</b>. Au Nord de la forêt cherchez un coffre d'ivoire (ivory chest <b>2660,2612,2</b>). Ramassez la clé d'ivoire que droppe ce coffre (<b>repop</b> 16 minutes si vous êtes plusieurs). Une fois que vous avez cette clé dirigez-vous vers <b>la maison de l'Oracle</b> et entrez par la porte principale (front door). Aidez vous de la carte ci-dessous.</p>\n</li>\n\n</ul>",
        "images": [
          "/t4c-nms-overview/assets/quests/la-traversee-de-loracle/img_0_0.jpg"
        ],
        "order": 0
      },
      {
        "title": "Les salles de la maison de l’Oracle",
        "description": "<ul>\n  \n  <li>\n<p>Mettez vos protections (résistance feu…).</p>\n</li>\n  <li>\n<p>Allez au coffre <b>C1</b> (voir carte) et prenez la clé qu'il droppe. Retournez à l'entrée et ouvrez la porte Nord (<b>C2</b>). Dans cette salle vous trouverez de nombreux petits couloirs. A la fin de chacun d'eux il y a un coffre. Un de ces coffres (marqués de 1 à 11 en lettre blanches) vous donnera une clé directement dans votre inventaire. Sortez de la pièce et allez au Nord-Est.</p>\n</li>\n  <li>\n<p>Ouvrez la porte située à la fin du couloir et vous arriverez dans un labyrinthe contenant 8 coffres \"recouverts de pierres précieuses\" Chaque coffre droppe au sol une clé qui ouvre un autre coffre jusqu'au 8<sup>ème</sup> dans lequel vous trouverez la clé cristalline d'émeraude. L'ordre que vous devez suivre est marqué sur la carte en chiffres jaunes de 1 à 8 (si vous êtes plusieurs, ces coffres ont un <b>repop</b> de 16 minutes).</p>\n</li>\n  <li>\n<p>La salle suivante a 2 portes (Nord-Ouest et Ouest). La porte au Nord-ouest ne s'ouvre pas donc prenez la porte ouest. Vous entrez dans des salles remplies de B'Thonians. Tuez-les jusqu'à ce que l'un d'eux droppe au sol une clé brillante en argent. Prenez-la, allez jusqu'à la porte au Sud-Ouest et ouvrez-la (voir la carte).</p>\n</li>\n  <li>\n<p>Ouvrez toutes les portes vers le sud-ouest et vous arriverez dans une salle pleine de B'Thurkans. Tuez-les jusqu'à faire dropper au sol une clé solide en or. Ramassez-la et ouvrez la porte Sud.</p>\n</li>\n  <li>\n<p>Vous serez alors dans une salle avec des téléporteurs. Direction le coffre jusqu'à marcher sur le premier téléporteur. Dès que vous avez été téléporté la première fois, revenez sur vos pas jusqu'à être téléporté une deuxième fois. Faites ceci (en arrière puis en avant) jusqu'à arriver au coffre (marqué <b>C2</b> sur la carte). Ouvrez-le et ramassez la clé brillante en platine (<b>repop</b> 16 minutes). Cette clé ouvre la porte permettant de sortir de la maison de l'Oracle par le Nord-Ouest.</p>\n</li>\n  <li>\n<p>Quittez la maison de l'oracle, sans oublier de vérifier le coffre \"bonus\" derrière la porte secrète dans un mur d'illusion (faites le tour). C'est le coffre marqué C au nord-ouest (<b>repop</b> 8 heures seul sinon 4 heures).</p>\n</li>\n  <li>\n<p>Marchez autour de la maison (comme indiqué sur la carte) et entrez dans le portail. Suivez toujours les flèches et descendez les escaliers en <b>D2</b>.</p>\n</li>\n  <li>\n<p><b>Note</b> : <b>Attention</b> aux protecteurs temporels. Un bon moyen de traverser la zone est d’utiliser le sort sanctuaire. Si vous ne l'avez pas appris, ayez des potions dans votre sac.</p>\n</li>\n  <li>\n<p>Vous arriverez au point<b> U2 </b>marque sur la carte ci-contre. En face de vous, il y a un coffre. Ouvrez-le, il droppe une petite clé en or que vous ramasserez (<b>repop</b> 16 minutes).</p>\n</li>\n  <li>\n<p>La porte Sud s'ouvre sur les 3 fameux coffres Oracle 'bonus\" (<b>repop</b> 8 heures seul sinon 4 heures). La petite clé en or ouvre la porte au Nord. Une autre manière d'atteindre ce point est de prendre les escaliers <b>D1</b> (sur la carte, à côté du respawn de protecteurs temporels) mais vous n'aurez pas accès aux 3 coffres bonus si vous n’avez pas déjà la \"petite clé en or \".</p>\n</li>\n  <li>\n<p>Si vous prenez en<b> D1</b> (mais il faut traverser une forêt de protecteurs temporels !) vous arriverez au point <b>U1</b>. En face de vous, un coffre contenant une petite clé en argent qui ouvre la porte au Sud (<b>repop</b> 16 minutes).</p>\n</li>\n  <li>\n<p>Ouvrez la porte vous concernant et prenez vers l'Ouest. Suivez le fameux <b>couloir</b> aux drakes et vous arriverez à 2 portails. Celui de droite est celui des séraphins d'Artherk et celui de gauche celui des séraphins d'Ogrimar (néphilims). Prenez votre portail et vous arrivez enfin aux épreuves à franchir pour arriver à l'Oracle.</p>\n</li>\n\n</ul>",
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
        "description": "<p>Cette première chambre comporte 6 cellules avec un gardien des Eons dans chacune d’elles. Tuez-les dans l'ordre correct (marqué de 1 à 6 en lettres blanches sur le plan) et 6 morceaux de pierres finement découpées tomberont l'une après l'autre dans votre sac (vérifiez). Cliquez alors le coffre <b>C1</b>, vous obtenez directement dans votre sac une clé de pierre merveilleusement ciselée qui vous ouvre la porte de :</p>",
        "images": [],
        "order": 3
      },
      {
        "title": "La chambre de déception",
        "description": "<p>Un unique coffre contient la clé. Les autres sont piégés d'un sort de feu (mettez vos protections feu). Trouvez le bon coffre, la clé tombera dans votre poche et passez dans :</p>",
        "images": [],
        "order": 4
      },
      {
        "title": "La chambre d'illusions",
        "description": "<p>Elle est parcourue de murs invisibles. Ils sont marqués sur la carte par une ligne noire. <b>Attention</b> aux Gardiens éthérés qui vous téléportent. Trouvez votre chemin jusqu'au coffre <b>C2 </b>et prenez la clé qui tombe au sol. Ouvrez la porte de :</p>",
        "images": [],
        "order": 5
      },
      {
        "title": "La chambre de vélocité",
        "description": "<p>Ouvrez le coffre <b>C3,</b> la clé de verre enchantée tombe dans votre poche. Maintenant dépêchez-vous d'aller au coffre <b>C4</b> pour prendre la clé pulsative. Vous devez faire vite car si vous arrivez trop tard, la clé de verre se brise et vous devrez retourner au coffre<b> C3</b> en reprendre une (<b>repop</b> immédiat). Une fois la clé obtenue, entrez dans :</p>",
        "images": [],
        "order": 6
      },
      {
        "title": "La chambre du désespoir",
        "description": "<ul>\n  \n  <li>\n<p>Prenez le portail situé dans la petite pièce. Vous arrivez dans une salle remplie de <b>gardiens du portail de l'Oracle. </b>Attention, un seul peut être tué. Son nom est \"<b>gardien de l'Oracle\"</b>. Il se trouve très légèrement à l'écart au moment où vous<b> </b>entrez dans la pièce. Si vous pouvez, pestez-le pour ne pas le perdre de vue puis tuez-le. Il droppe une clé dans votre inventaire qui vous permet de sortir de la salle (vous conservez cette clé tant que vous ne renaissez pas).</p>\n</li>\n  <li>\n<p><b>Ouf c'est gagné !</b></p>\n</li>\n  <li>\n<p>Prenez les escaliers descendants et avancez dans le couloir. Au milieu du trajet prenez le coude vers le haut et vous trouverez un escalier montant. Prenez-le et vous verrez enfin :</p>\n</li>\n\n</ul>",
        "images": [],
        "order": 7
      },
      {
        "title": "L'Oracle",
        "description": "<ul>\n  \n  <li>\n<p><b>Attention!</b> si vous êtes séraphin ou néphilim, et si vous voulez affronter Makrsh P'Tangh sur son île ou faire de l'xp aux \"tempos\" dites \"<b>étape finale\" à l'Oracle</b>, il vous enverra sur l'île de Makrsh P'Tangh.</p>\n</li>\n  <li>\n<p>Par contre, <b>si vous voulez renaître</b>, dites à l'Oracle le mot-clé \"<b>travail</b>\" ... ou directement \"<b>test</b>\".</p>\n</li>\n  <li>\n<p>En poursuivant le dialogue il vous donnera une clé.</p>\n</li>\n  <li>\n<p>Dialogue avec l'Oracle : (vous pouvez lui dire directement <b>test</b>)</p>\n</li>\n  <li>\n<p>-- {L'Oracle}\":\" Ahhh, enfin nous nous rencontrons. Bienvenue, XXX. Comme vous l'avez sans doute deviné, je suis l'Oracle.</p>\n</li>\n  <li>\n<p>-- Vous avez dit :<b> travail</b></p>\n</li>\n  <li>\n<p>-- {L'Oracle}\":\" Je suis le Gardien du Temps. Certains ont besoin d'être riche et d'avoir une \"solde\" extraordinaire pour se sentir puissant. En ce qui me concerne, j'ai beaucoup de tâches à accomplir, dont l'une, et non la moindre, est de veiller à l'équilibre entre le Bien et le Mal. Autant vous dire que pour moi la puissance n'est pas la richesse.</p>\n</li>\n  <li>\n<p>-- Vous avez dit : <b>solde</b></p>\n</li>\n  <li>\n<p>-- {L'Oracle}\":\" Il en est \"un\" qui s'estime lui-même hors du flux du temps. Sa présence est une menace pour le délicat équilibre du Bien et du Mal.</p>\n</li>\n  <li>\n<p>-- Vous avez dit : <b>un</b></p>\n</li>\n  <li>\n<p>-- {L'Oracle}\":\" Je parle de \"Makrsh\" \"P'tang\" bien sûr. Son désir de \"mort\" et de \"destruction\" dépasse l'entendement.</p>\n</li>\n  <li>\n<p>-- Vous avez dit : <b>makrsh p'tang</b></p>\n</li>\n  <li>\n<p>-- {L'Oracle}\":\" Vous allez devoir vous en occuper, et bientôt, si ce monde veut continuer d'exister. Ils sont peu aujourd'hui à avoir le \"potentiel\" pour affronter quelqu'un d'aussi puissant. Je crois que vous possédez un tel \"potentiel\".</p>\n</li>\n  <li>\n<p>-- Vous avez dit :<b> potentiel</b></p>\n</li>\n  <li>\n<p>-- {L'Oracle}\":\" Je dis potentiel car je ne pense pas que vous soyez vraiment prêt pour affronter Makrsh P'tang dans l'immédiat. Il y a de nombreuses \"préparations\" à faire avant de pouvoir l'affronter.</p>\n</li>\n  <li>\n<p>-- Vous avez dit :<b> preparations</b></p>\n</li>\n  <li>\n<p>-- {L'Oracle}\":\" Si vous êtes sur le point d'atteindre votre véritable potentiel, à ce moment là, vous ne ferez plus qu'un avec l'essence séraphique enfouie au plus profond de votre âme. Je dois d'abord vous \"tester\" pour savoir si vous pouvez survivre à la procédure.</p>\n</li>\n  <li>\n<p>-- Vous avez dit : <b>tester</b></p>\n</li>\n  <li>\n<p>--{L'Oracle}\":\" Pour votre test, vous allez faire face à Gabriel Archonis (côté good). Vous allez le combattre dans un duel à mort dans une arène spéciale. Il y quatre portes qui entourent le site, chacune d'entre elles vous projettera hors du combat dans un <b>lieu</b> en tranquille. Utiliser une de ces portes signifie que vous déclarez forfait et que vous devrez tout reprendre plus tard. Pour atteindre le <b>lieu</b> du combat, il vous faudra une \"Clef\".</p>\n</li>\n  <li>\n<p>-- Vous avez dit : <b>clef</b></p>\n</li>\n  <li>\n<p><b>L'Oracle vous donne une clef.</b></p>\n</li>\n  <li>\n<p>-- {L'Oracle}\":\" Vous voilà donc... Je crois que vous comprenez ce qui doit être fait maintenant. Soyez rapide et n'ayez pas peur, et vous vaincrez. Rappelez-vous cela quand vous serez dans l'arène. Maintenant allez-y et bonne chance.</p>\n</li>\n  <li>\n<p><b></li>\n  <li>Dirigez-vous vers l'Assistant au Nord, ouvrez la porte puis parlez à l'Assistant :</b></p>\n</li>\n  <li>\n<p></li>\n  <li>-- Votre Clef de jugement déverrouille la porte.</p>\n</li>\n  <li>\n<p>-- {Assistant de l'Oracle}\":\" *Assistant de l'Oracle ...* * Assistant de l'Oracle ...* *Pas très agréable ce travail ...* OH! Bonjour, que puis-je pour vous ?</p>\n</li>\n  <li>\n<p>-- Vous avez dit : <b>travail</b></p>\n</li>\n  <li>\n<p>-- {Assistant de l'Oracle}\":\" Encore Vous !! La dernière fois ne vous a pas suffi... encore \"franchir\" le mur je suppose ..?</p>\n</li>\n  <li>\n<p>-- vous avez dit : <b>franchir</b></p>\n</li>\n  <li>\n<p>-- {Assistant de l'Oracle}\":\" Hum !!! Bonne chance...</p>\n</li>\n  <li>\n<p><b>L'Assistant vous téléporte au travers du mur.</b></p>\n</li>\n  <li>\n<p>Prenez les escaliers. Vous verrez un portail. Entrez dans l’arène dans laquelle vous trouverez un homme (différent selon le chemin evil ou good). <u>Il y a 4 portails autour de la salle. Surtout ne les touchez PAS</u>, vous seriez téléporté en ville, et il vous faudrait refaire tout le chemin.</p>\n</li>\n  <li>\n<p>Conformément à ce que l'Oracle vous a dit vous devrez affronter la mort pour finir votre dernier test. Déshabillez-vous (0 CA) ne lancez aucun sort de protection et attaquez le <b>PNJ</b> (Gabriel Archonis côté good ou Gaenen Elthorn côté evil). Vous raterez jusqu'au moment où votre barre de vie sera proche de zéro). A ce moment vous toucherez à chaque fois et tuerez le PNJ. Une fois mort, attendez et vous serez téléporté près de l'Oracle.</p>\n</li>\n  <li>\n<p>Parlez-lui une dernière fois...</p>\n</li>\n  <li>\n<p>-- vous avez dit : <b>prêt a renaitre</b></p>\n</li>\n  <li>\n<p>-- {L'Oracle}\":\" Etes vous absolument certain de vouloir renaître maintenant ?</p>\n</li>\n  <li>\n<p>-- vous avez dit : <b>oui</b></p>\n</li>\n  <li>\n<p>et...</p>\n</li>\n  <li>\n<p><b>L'Oracle: Félicitations à xxxxxx</b> pour sa 1ère (ou autre)... renaissance!<b> </b><b></b></p>\n</li>\n\n</ul>",
        "images": [],
        "order": 8
      },
      {
        "title": "Les points séraph",
        "description": "<ul>\n  \n  <li>\n<p>Vous vous retrouvez maintenant près d’Alphan. C’est le moment de choisir ou placer vos points d’énergie. 10 points sont disponibles en 1ère renaissance, 12 en 2ème renaissance ... jusqu'à 20 en x6.</p>\n</li>\n  <li>\n<p><b>Puissances</b></p>\n</li>\n  <li>\n<p>La spécialisation coûte !! En clair : si vous voulez 10 dans une puissance donnée cela vous coûtera 1 point d’énergie.</p>\n</li>\n  <li>\n<p>Si vous voulez ajouter 10 de plus dans la même puissance cela vous coûtera 2 points soit 3 en tout … encore 10 de plus coûtera 3 points puis 4 points etc.</p>\n</li>\n  <li>\n<p>Ce qui est intéressant c’est que quand vous porterez un objet ajoutant X% dans une puissance donnée, le calcul se fera sur la puissance obtenue chez l’Oracle. Par exemple si vous avez obtenu 120 en puissance lumière et que vous équipiez un symbole d'espoir, cela donnera 120*125/100 = 150 (et non 120+25 = 145) ok ?</p>\n</li>\n  <li>\n<p>C<b>aractéristiques</b></p>\n</li>\n  <li>\n<p>Même principe que les puissances. Un point dans une caractéristique donnée coûte 1 point d’énergie. Un point de plus dans la même caractéristique coûte maintenant 2 points d'énergie etc.</p>\n</li>\n  <li>\n<p><b>Résistances</b></p>\n</li>\n  <li>\n<p>2 points d'énergie ajoutent toujours 10 dans la résistance choisie.</p>\n</li>\n  <li>\n<p><b>Vie ou mana</b></p>\n</li>\n  <li>\n<p>1 point d'énergie ajoute toujours 10 points en vie ou mana.</p>\n</li>\n  <li>\n<p><b>L'aura séraph</b></p>\n</li>\n  <li>\n<p>Vous disposez maintenant d'une <b>aura </b>séraph<b>. Si vous êtes attaqué, elle lance aléatoirement un sort </b>de contre-attaque. Elle lance aussi, toujours aléatoirement et si vous êtes attaqué, un sort de soin. Si vous êtes groupés, ce sort soigne les membres du groupe proches de vous.</p>\n</li>\n  <li>\n<p></p>\n</li>\n\n</ul>",
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
        "description": "<ul>\n  \n  <li>\n<p>Si vous faite déchu il y aura des choses différentes et des choses que vous pourrez pas faire.</p>\n</li>\n  <li>\n<p>Entre autre chose vous ne pourrez plus faire l'accès oracle ni aller à l'oracle en déchu.</p>\n</li>\n  <li>\n<p>Votre Sanctuaire sera dans les enclos à cochons et à DI au cimetière assez loin du temple donc pas trop pratique.</p>\n</li>\n  <li>\n<p>Ensuite votre aura sera différente et les ailes différentes.</p>\n</li>\n  <li>\n<p>Et faut être 5x level 100 pour renaitre déchu et pour ceux qui achètent en écus faut acheter un 5x et ensuite acheter 1x déchu qui revient 100 écus plus cher.</p>\n</li>\n  <li>\n<p>Donc je ne vous conseille pas de faire déchu comme premier perso mais si ça vous tente faites le comme deuxième perso (ou troisième ....).</p>\n</li>\n\n</ul>",
        "images": [],
        "order": 0
      },
      {
        "title": "Renaître déchu",
        "description": "<p>Cette quête vous permettra de renaître en Déchu. Vous devez étre x5 et level 100.</p>\n<br/>\n<p>Pour commencer vous pouvez préparer les accès nécessaires suivants pour pouvoir parler au différents <b>PNJ</b> impliqués dans cette quête.</p>\n<br/>\n<ul>\n  <li>Iles Ethérées</li> <li>Zone Oracle Good ou Evil</li> <li>Dragon Island</li>\n</ul>\n<br/>\n<p>Pour commencer, rendez-vous au château de Silversky pour parler au <b>PNJ</b> Cuisteau. Il vous envoie à Niève (dans la première grotte, celle qui lies le mausolé au village Nieve) parler à Tafnoir Aigridor (dites lui travail). Celui ci vous demande de récupérer 30 peaux de loups (les loups blancs de la plaine de Niève). Une fois ces peaux obtenues, retournez le voir. Il vous envoie voir le tanneur Ladre Citre, se trouvant dans le village de Niève (vers le Sud en-dessous de la maison de l'ogresse) auquel vous donnerez ces peaux. Dites lui \"travail\" \"débordé\" \"oui\".</p>\n<br/>\n<p>Celui-ci vous donne des pièces d'or ainsi qu'une clef permettant d'ouvrir une maison un peu plus haut (Maison de l'Ogresse). Vous y trouverez un coffre (forme de chaudron) dans lequel vous devez récupérer deux cuisseaux en cliquant dessus.</p>\n<br/>\n<p><br/></p>\n<br/>\n<p>Rendez-vous ensuite dans la maison de Malcolm Fello crane de malfrat\" puis \"oui\". Vous serez récompensé par une partie de cotte de mailles (aléatoire) et des xps. Vous n’avez qu'à lui dire \"crane de malfrat\" une fois et il prendra tous les crânes que vous avez dans votre inventaire. Il garde aussi en mémoire combien de crânes vous lui avez rapporté, tout simplement parce que pour certains, vous recevrez plus d’xps. Pour chaque crâne donné à Delnar vous recevez une pièce aléatoire de cotte de maille et vous recevrez 50.000 xps ; excepté pour le 10e (vous recevrez 175.000 xps), pour le 25e (vous recevrez 500.000 xps) et pour le 100e (vous recevrez 2.500.000 xps).</p>\n<br/>\n<p>Remarque: Vous pouvez effectuer cette quête à volonté.</p>\n<br/>\n<p><b>PNJ</b> impliqué: Delnar Lavndir</p>\n<br/>\n<p>Récompenses acquises: Partie de cotte de mailles (aléatoire) (80 End), 50.<b>000, 175</b>.<b>000, 500</b>.000 ou 2.500.000 xps (selon le crâne que vous amenez).</p>",
        "images": [],
        "order": 0
      },
      {
        "title": "Les gemmes (Quête neutre)",
        "description": "<ul>\n  \n  <li>\n<p>De nombreux monstres droppent des gemmes (Agathe, Diamant…). Dirigez-vous vers la ville des voleurs et trouvez Meltar Goanvach. Dites lui \"connard\" et courrez car il vous attaquera (vous aimeriez vous faire insulter, vous ?). Retournez le voir et dites \" Gemmes\", \"oui\". Vous serez récompensé par des points d’expérience et des potions de résistance.</p>\n</li>\n  <li>\n<p>(<b>\"Mention Spéciale Evil\"</b> N'insultez surtout pas Meltar Goanvach Si vous êtes, et/ou espérez devenir Ogrimarien! Sachant qu'il est incontournable afin d'accomplir beaucoup plus facilement, et 2 fois moins coûteux en gemmes pour accéder à réalisation de la Clef d'Ogrimar! Dites lui plutôt: \"Couronne de corruption\" N'ayant pas essayé avec un Séraphin, étant une quête neutre, ce mot clefs devrait pouvoir fonctionner en tous cas...)</p>\n</li>\n  <li>\n<p>Récompenses :</p>\n</li>\n  <li>\n<p></li>\n  <li>Remarque: Vous pouvez effectuer cette quête à volonté.</p>\n</li>\n  <li>\n<p><b>PNJ</b> impliqué: Meltar Goanvach</p>\n</li>\n  <li>\n<p>Récompenses acquises: Points d’expérience variés et potions de résistance variées.</p>\n</li>\n\n</ul>",
        "images": [],
        "order": 1
      },
      {
        "title": "La quête du collectionneur de scalps (bénéfique et maléfique)",
        "description": "<ul>\n  \n  <li>\n<p>Ramenez 5 Scalps (droppés par les Skraugs violets) à Wajpoothin au village Skraugs verts (à l’est) pour une masse Skraugbashor. Mots-clés : \"masse de Skraugbashor\", \"oui\". Vous recevrez aussi 1.000 xps multipliés par votre niveau actuel.</p>\n</li>\n  <li>\n<p>Ramenez 5 Masses Skraugbashor à Khan Wulgworth au village Skraugs roses (dans une grotte au centre) pour une ceinture de force Skraug. Mots-clés : \"masse de Skraugbashor\", \"oui\". Vous recevrez aussi 1.000 xps multipliés par votre niveau actuel.</p>\n</li>\n  <li>\n<p>Ramenez 3 ceintures de force Skraug au Prévot Grant Anfust à Stonecrest (situé dans la maison au sud du square de la ville), pour un livre du collectionneur (également droppé par les Assassins Obsidiens). Mots-clés : \"ceinture de force skraug\", \" oui\". Vous recevrez aussi 3.000 xps multipliés par votre niveau actuel.</p>\n</li>\n  <li>\n<p>Ramenez 5 livres du collectionneur au Roy Aedenas Valreus (situé à la ville des Centaures), pour un anneau du lion. Mots-clés : \"livres du collectionneur\", \"oui\". Vous recevrez aussi 3.750 xps multipliés par votre niveau actuel.</p>\n</li>\n\n</ul>",
        "images": [],
        "order": 2
      },
      {
        "title": "Partie bénéfique",
        "description": "<p>Ramenez 2 anneaux du lion à Sir Beltigan (situé dans son château au sud-ouest de Stonecrest) pour obtenir soit un œil du tigre soit une épée de puissance en cristal. Mots-clés : \" anneaux du Lion\", \"oui\". Vous recevrez aussi 4.000 xps multipliés par votre niveau actuel.</p>",
        "images": [],
        "order": 3
      },
      {
        "title": "Partie maléfique",
        "description": "<ul>\n  \n  <li>\n<p>Ramenez 3 anneaux du lion à Sir Mordenthal (situé dans son château au nord-est de Stonecrest) pour obtenir soit un manteau de l’Armageddon ou une grande hache de la victoire. Mots-clés : \"anneaux du Lion\", \"oui\". Vous recevrez aussi 6.000 xps multipliés par votre niveau actuel.</p>\n</li>\n  <li>\n<p><b>Remarque: Vous pouvez effectuer cette quête à volonté.</b></p>\n</li>\n  <li>\n<p><b>PNJs</b> impliqués:</b> Wajpoothin, Khan Wulgworth, Prévot Grant Anfust, Roy Aedenas Valreus, Sir Beltigan (pour la quête bénéfique), Sir Mordenthal (pour la quête maléfique).</p>\n</li>\n  <li>\n<p><b>Récompenses acquises:</b> Selon vos choix:</p>\n</li>\n  <li>\n<p>a. Masse Skraugbashor (280 For, 25 Dex, 20 Int, 25 Sag), 1.000 xps * niveau</li>\n  <li>b. Ceinture de force Skraug (100 End, 20 Int, 25 Sag), 1.000 xps * niveau</li>\n  <li>c. Anneau du lion (30 For, 22 End, 26 Dex, 25 Int, 25 Sag), 3.750 xps * niveau</li>\n  <li>d. Œil du tigre (115 Int, 113 Sag) ou épée de puissance en cristal (251 For, 21 Dex, 53 Int, 50 Sag), 4.000 xps * niveau pour la partie bénéfique uniquement.</li>\n  <li>e. Manteau de l’Armageddon (37 End, 175 Int,70 Sag) ou Grande hache de la victoire (242 For, 43 Dex, 25 Int, 25 Sag), 6.000 xps * niveau pour la partie maléfique uniquement.</p>\n</li>\n\n</ul>",
        "images": [],
        "order": 4
      },
      {
        "title": "L’anneau de vraie foi (Quête bénéfique)",
        "description": "<ul>\n  \n  <li>\n<p>Cherchez le <b>PNJ</b> nommé Theoran Feizdir (dans une petite maison située dans la plaine au sud-est de Stonecrest) et dites \"anneau de vraie foi\". Il vous demandera:</p>\n</li>\n  <li>\n<p>1 Anneau de foi (de la quête de l’anneau de foi)</li>\n  <li>1 Graal de pureté (droppé par les centaures vengeurs de Stoneheim)</li>\n  <li>2 Fioles d’ eau bénite (préparées par Theoran Feizdir [pour une fiole d’eau cristalline] ou Frère Thorkas [pour une fiole d’eau cristalline et 1.000 pièces d’or]), Mots-clés : \"eau bénite\", \"oui\".</p>\n</li>\n  <li>\n<p>Ramenez-lui les objets et dites \"anneau de vraie foi\", \"oui\" et il vous donnera l’anneau.</p>\n</li>\n  <li>\n<p>Remarque #1: Vous pouvez effectuer cette quête à volonté.</li>\n  <li>Remarque #2: Quand vous dites \"adieu\" à Theoran Feizdir il invoque une Aura Protectrice pour vous. Elle vous donne +20 à toutes les résistances et dure 2 minutes 30 secondes.</p>\n</li>\n  <li>\n<p><b>PNJs</b> impliqués:</b> Theoran Feizdir, Frère Thorkas (facultatif).</p>\n</li>\n  <li>\n<p><b>Récompense</b> acquise:</b> Anneau de vraie foi (prérequis : 15 Int, 90 Sag)</p>\n</li>\n\n</ul>",
        "images": [],
        "order": 5
      },
      {
        "title": "Le parchemin d’amitié des chevaux (Quête neutre)",
        "description": "<ul>\n  \n  <li>\n<p>A la ville des Centaures, cherchez un <b>PNJ</b> nommé Dionysus Argantma (situé dans la maison au nord de la fontaine).</p>\n</li>\n  <li>\n<p>Dites-lui \"centaures squelettes\" et il vous demandera d’en tuer 12 puis de revenir le voir pour une récompense. Vous trouverez des centaures squelettes dans le donjon du château de Mordenthal (nord-est de Stonecrest). Tuez-en 12 (ou plus mais cela sera perdu) et retournez voir Dionysus Argantma. Dites \"centaures squelettes\", \"oui\" et il vous récompensera par un parchemin d’amitié des chevaux et 1.500 xps multipliés par votre niveau courant.</p>\n</li>\n  <li>\n<p>Vous pouvez l’utiliser à différentes fins:</p>\n</li>\n\n</ul>",
        "images": [],
        "order": 6
      },
      {
        "title": "1ère manière : Quête de Malachaï",
        "description": "<p>Ramenez un parchemin d’amitié des chevaux (ou plusieurs à la fois) à Malachai Thanatos situé ville des Centaures dans la maison au sud de la fontaine (Mot-clé : \"parchemin d'amitié des chevaux\") pour obtenir l’un des articles suivants :</p>\n<br/>\n<ul>\n  <li>Sinistre lame de guerre</li> <li>Lame assassine</li> <li>Arc pourfendeur de Centaures</li> <li>Robe des Enfers</li>\n</ul>\n<br/>\n<p>Vous recevrez aussi 2.000 xps multipliés par votre niveau courant.</p>\n<br/>\n<p>Quand vous en aurez plusieurs, ces objets peuvent à nouveau être échangés au choix:</p>\n<br/>\n<p>Ramenez <b>2</b> <b>Lames assassines</b> à Daran Pied-léger (situé à l’Auberge des Aventures de Stonecrest) pour une clé des îles éthérées brisée.<br/>Mots-clés: \"lame assassine\", \"oui\". Vous recevrez aussi 1.500 xps multipliés par votre niveau actuel. <br/>Ramenez <b>3 robes des Enfers</b> à Julian (situé à Stonecrest) pour un sceptre des Ténèbres. Mots-clés: \"Robe des enfers\", \"oui\". Vous obtiendrez aussi 2.500 xps multipliés par votre niveau actuel.</p>\n<br/>\n<p>Ramenez <b>4 Sinistres lames de guerre</b> à Mordenthal (situé dans son château) pour une gemme sombre (et peut-être une lame-gemme sombre). Mots-clés : \"Sinistres lames de guerre\", \"oui\". Vous recevrez aussi 1.500 xps multipliés par votre niveau actuel.</p>\n<br/>\n<p>Ramenez <b>5 Arcs pourfendeurs de Centaures</b> à Resha (située dans une maison proche de l’entrée est de Stonecrest) pour un Manteau de l’Archer. Mots-clés : \"arcs pourfendeurs de centaures\", \"oui\". Vous serez récompensés aussi par 2.500 xps multipliés par votre niveau actuel.</p>",
        "images": [],
        "order": 7
      },
      {
        "title": "2ème manière (buggée)",
        "description": "<ul>\n  \n  <li>\n<p>Une fois que vous avez 10 parchemins d’amitié des chevaux, cherchez le <b>PNJ</b> errant nommé Cheval Sauvage Planétaire. Parlez-lui (mots-clés : \"travail\"...) et il vous proposera de vous téléporter (pour le prix d’un parchemin) à l’un des endroits suivants:</p>\n</li>\n  <li>\n<p>Pont de Lighthaven</li>\n  <li>Stonehenge d’Arakas</li>\n  <li>Maison d’Annabelle</li>\n  <li>Brigands d’Arakas</li>\n  <li>Entrée de Windhowl</li>\n  <li>Château de Bane Gwengad</li>\n  <li>Château de Silversky</li>\n  <li>Stonehenge de Raven's Dust</li>\n  <li>Désert de Raven's Dust</li>\n  <li>Place de Stonecrest</p>\n</li>\n  <li>\n<p>Il se téléporte avec vous.</p>\n</li>\n  <li>\n<p>Remarque #1: Vous pouvez effectuer cette quête à volonté.</li>\n  <li>Remarque #2: Il y a un bug et le cheval n’apparaît pas dans le jeu (lol!!!!!).</p>\n</li>\n  <li>\n<p><b>PNJ</b> impliqué: Dionysus Argantma, Malachai Thanatos/Cheval sauvage planétaire (Facultatif), Sir Mordenthal/Daran Pied-léger/Resha/Julian (Facultatif).</li>\n  <li></p>\n</li>\n  <li>\n<p>Récompenses acquises: Selon vos choix:</p>\n</li>\n  <li>\n<p>a. Parchemin d’amitié des chevaux, 1.500 xps * niveau</p>\n</li>\n  <li>\n<p>b. Sinistre lame de guerre (266 For, 35 Dex, 35 Sag) ou Lame assassine (110 For, 65 Dex, 15 Int) ou Arc pourfendeur des Centaures (27 For, 140 Dex) ou Robe des Enfers (28 End, 123 Int, 85 Sag), 2.000 xps * niveau</p>\n</li>\n  <li>\n<p>c. Clé Ethérée Brisée, 1.500 xps * niveau</p>\n</li>\n  <li>\n<p>d. Sceptre des Ténèbres (20 For, 83 Int, 35 Sag), 2.500 xps * niveau</p>\n</li>\n  <li>\n<p>e. Gemme Sombre (et peut-être une lame-gemme sombre (242 For, 53 Int, 43 Sag)), 1.500 xps * niveau</p>\n</li>\n  <li>\n<p>f. Manteau de l’Archer (25 For, 70 Dex, 30 Int, 40 Sag), 2.500 xps * niveau</p>\n</li>\n\n</ul>",
        "images": [],
        "order": 8
      },
      {
        "title": "La lame perdue du Dragon (Quête neutre)",
        "description": "<ul>\n  \n  <li>\n<p>A Stonecrest, trouvez le Prévôt Grant Anfust (près de l'entrée Est).</p>\n</li>\n  <li>\n<p>Dites \"chapardeurs\" puis \"arpenteurs de la nuit\" et il vous demandera de tuer 10 chapardeurs ou 10 arpenteurs de la nuit et de revenir le voir pour une récompense. Tuez-en 10 de chaque (vous en trouverez à profusion à la sortie est de Stonecrest) et retournez voir le Prévôt.</p>\n</li>\n  <li>\n<p>Dites à nouveau \"chapardeurs\" ou \"arpenteurs de la nuit\" et il vous remerciera avec une <b>Note</b> de Remerciement et 1.500 xps multipliés par votre niveau (Au maximum 50.000 xps).</p>\n</li>\n  <li>\n<p>Après cumul de 6 Notes de remerciement, parlez au Bourgmestre Belamzer (situé dans sa résidence, à Stonecrest). Dites \"note de remerciement\" et vous recevrez en <b>récompense</b> une lame perdue du Dragon et 3.000 xps multipliés par votre niveau actuel.</p>\n</li>\n  <li>\n<p><b>Remarque :</b> Vous pouvez effectuer cette quête à volonté.</p>\n</li>\n  <li>\n<p><b>PNJs</b> impliqués :</b> Prévôt Grant Anfust, Bourgmestre Belamzer</p>\n</li>\n  <li>\n<p><b>Récompenses acquises :</b> Lame perdue du Dragon (242 For), 6 * 1.500 xps * niveau actuel - au maximum 300.000 xps- et 3.000 xps * niveau actuel.</p>\n</li>\n\n</ul>",
        "images": [],
        "order": 9
      },
      {
        "title": "Le heaume perdu du dragon (Quête neutre)    (Certificat de reconnaissance)",
        "description": "<p>A Stonecrest, trouvez le prévôt Grant Anfust. Dites \"document secret\" et il vous demandera de lui en rapporter 5. Allez aux endroits suivants :</p>\n<br/>\n<p> Ps:Attention qd vous clicquez un des coffres la clef se brise donc <b>important</b> de pas clicquer d'avance et s'assurer que qqun d'autre a pas ouvert avant. Sinon vous pouvez crocheter direct le coffre de Mithanna avec crochetage de serrures.</p>\n<br/>\n<ul>\n  <li>1° Ouvrez le coffre dans la résidence du Bourgmestre Belamzer, vous trouverez une clé brillante en métal. \n<ul>\n  <li>Temps du coffre: 10 min a 2 et 20 min seul</li>\n</ul>\n</li> <li>2° Ouvrez le coffre brillant en métal dans la boutique d’armes de Gulfrid Morzholdir et vous devriez trouver une clé en métal sombre. \n<ul>\n  <li>Temps du coffre: 50 min toujours</li>\n</ul>\n</li> <li>3° Ouvrez le coffre en métal sombre dans la boutique d’armures de Herewald Herngwean et vous trouverez une clé en éclat d’os. \n<ul>\n  <li>Temps du coffre: 10 min a 2 et 20min seul</li>\n</ul>\n</li> <li>4° Ouvrez le coffre en éclats d’os dans la maison de Mithanna Snowraven et vous trouverez une clé de sureté en acier. \n<ul>\n  <li>Temps du coffre: 50 min toujours</li>\n</ul>\n</li> <li>5° Allez dans la planque des voleurs et ouvrez le coffre de sûreté en acier. Vous trouverez un document secret. \n<ul>\n  <li>Temps du coffre: 41 min toujours</li>\n</ul>\n</li>\n</ul>\n\n<ul>\n  <li>Temps du coffre: 10 min a 2 et 20 min seul</li>\n</ul>\n\n<ul>\n  <li>Temps du coffre: 50 min toujours</li>\n</ul>\n\n<ul>\n  <li>Temps du coffre: 10 min a 2 et 20min seul</li>\n</ul>\n\n<ul>\n  <li>Temps du coffre: 50 min toujours</li>\n</ul>\n\n<ul>\n  <li>Temps du coffre: 41 min toujours</li>\n</ul>\n<br/>\n<p>Collectez 5 Documents Secrets et rendez visite au prévôt Grant Anfust. Mots-clés: \"document secret\", \"oui\" et vous serez récompensés d’'un Certificat de reconnaissance, complétés par 2.500 xps et 3.500 pièces d’or, bien entendu multipliés par votre niveau actuel.</p>\n<br/>\n<p>Collectez 6 Certificats de reconnaissances et allez voir le bourgmestre Belamzer. Mot-clé: \" Certificat de reconnaissance\" et vous serez récompensés par un heaume perdu du dragon, ainsi que 2.500 xps et 1.000 pièces d’or, multipliés par votre niveau actuel.</p>\n<br/>\n<p>Remarque #1: A chaque fois que vous ouvrez un coffre, la clé correspondante se brise et devient inutilisable (elle disparaît de votre inventaire). Les coffres ne droppent pas à chaque fois la clé suivante : ils droppent parfois autre chose ! Si cela se produit vous devez recommencer depuis le début puisque vous n’avez plus la clé qui s’est brisée. Si quelqu’un d’autre a ouvert le coffre récemment, vous devrez attendre environ une demi-heure pour avoir un nouveau drop.</p>\n<br/>\n<p>Remarque #2: Vous pouvez effectuer cette quête à volonté.</p>\n<br/>\n<p><b>PNJ</b> impliqué: Prévôt Grant Anfust, Bourgmestre Belamzer</p>\n<br/>\n<p>Récompenses acquises: Heaume perdu du dragon (150 End, 30 Int, 46 Sag), 17.000 xps * niveau actuel, 22.000 pièces d’or * niveau actuel.</p>",
        "images": [],
        "order": 10
      },
      {
        "title": "Sceptre d’espoir (Quête bénéfique)",
        "description": "<p>Dans la ville des Centaures, trouvez Dionysus Argantma. Dites \"Baton d'espérance\" et il vous demandera les objets suivants:</p>\n<br/>\n<ul>\n  <li>2 piles de bois d’arbres démoniaques (droppés par les arbres démoniaques sur RD)</li> <li>5 Symboles d’espoir (achetés à 10.000 pièces d’or chaque chez Chryseida Yolangda à Stonecrest)</li>\n</ul>\n<br/>\n<p>Ceci fait, retournez voir Dionysus Argantma et dites \"Baton d'espérance\", \"oui\" et il vous donnera un sceptre d’espoir.</p>\n<br/>\n<p>Remarque #1: Vous pouvez effectuer cette quête à volonté.</p>\n<br/>\n<p>Remarque #2: Vous devez être \"messager de la Lumière\" afin d’accomplir cette quête. (cf. Renaissance Séraphin d’Artherk, au commencement de cette quête).</p>\n<br/>\n<p><b>PNJ</b> impliqué: Dionysus Argantma, Chryseida Yolangda</p>\n<br/>\n<p>Récompenses acquises: Sceptre d’espoir (110 For, 23 Int, 131 Sag).</p>",
        "images": [],
        "order": 11
      },
      {
        "title": "La clé éthérée (Quête neutre) (indroppable)",
        "description": "<ul>\n  <li>Échangez 2 lames assassines (obtenue lors de la quête du parchemin d’amitié des chevaux) chez Daran Pied-Léger (taverne de SC) contre une clé éthérée brisée (mot clé \"lame assassine\").</li>\n</ul>\n<br/>\n<p>Prenez une clé éthérée brisée et allez voir Bastien Milandra au château de Sir Beltigan.</p>\n<br/>\n<p>Parlez-lui et dites dans l’ordre <i>nom</i>, <i>oui</i>, <i>travail</i>, <i>oui</i>, <i>aide</i>, <i>oui</i>, <i>séraphin</i>, <i>oui</i>, <i>clef éthérée</i>, et enfin <i>oui</i> à <b>Bastien Milandra</b> et il réparera finalement la clé.</p>\n<br/>\n<p>Remarque: Vous pouvez effectuer cette quête à volonté (mais vous n’aurez pas besoin d’une 2e clé car elle ne se brise plus jamais).</p>\n<br/>\n<p><b>PNJ</b> impliqué: Bastien Milandra</p>\n<br/>\n<p>Récompenses acquises: Clé éthérée qui vous donne accès au Royaume Ethéré et ses îles par le portail éthéré (il se déplace entre la cave araignées et les skraugs verts en 6 <b>positions</b> différentes - voir carte SH)</p>",
        "images": [],
        "order": 12
      },
      {
        "title": "Le luth de Paix (Quête neutre)",
        "description": "<ul>\n  \n  <li>\n<p>Dans la ville des centaures, parlez à Dionysus Argantma. Dites \"quete\", \"Luth de paix\", \"recharger\".</p>\n</li>\n  <li>\n<p>Il vous demandera de recharger son luth, dites \"oui\". Prenez le et cherchez un portail éthéré (vous devez avoir terminé la quête de la clé éthérée). Une fois que vous l’avez trouvé, entrez dedans et cherchez Glaenshenmilandira (la seule <b>pnj</b> sur ces îles, impossible à louper, mais c'est loin !).</p>\n</li>\n  <li>\n<p>Dites-lui \"Luth de paix\" et elle vous demandera 6 luths magiques (droppés par le Bouffon Morbide, à Silversky). Trouvez-les et retournez la voir. Dites à nouveau \"Luth de paix\", \"oui\" et elle rechargera le luth.</p>\n</li>\n  <li>\n<p>Vous recevrez 2.000 xps multipliés par votre niveau actuel.</p>\n</li>\n  <li>\n<p>Retournez voir Dionysus Argantma et dites \"Luth de paix\". Vous recevrez 750 xps et 2.000 pièces d’or, le tout multipliés par votre niveau actuel; et si vous êtes chanceux, une robe des Cieux (inconnue sur NMS ???).</p>\n</li>\n  <li>\n<p>Remarque #1: Vous pouvez effectuer cette quête à volonté.</p>\n</li>\n  <li>\n<p>Remarque #2: Diyonyisus Argantma ne vous parlera de cette quête que la nuit.</p>\n</li>\n  <li>\n<p>Remarque #3: Sur les Îles Ethérées, vous croiserez un monstre nommé Purificateur. Si vous le tuez, vous devrez tuer autant de Néoflares que vous avez tué de purificateurs avant que Glaenshenmilandira ne vous parle.</p>\n</li>\n  <li>\n<p><b>PNJ</b> impliqué: Dionysus Argantma, Bastien Milandra (Facultatif), Glaenshenmilandira</p>\n</li>\n  <li>\n<p>Mini Boss impliqué: Bouffon Morbide</p>\n</li>\n  <li>\n<p>Récompenses acquises: 2.750 xps * niveau actuel, 2.000 pièces d’or * niveau actuel, peut-être une robe des Cieux (28 End, 73 Int, 135 Sag)</p>\n</li>\n\n</ul>",
        "images": [],
        "order": 13
      },
      {
        "title": "Quête de Mordenthal (maléfique)",
        "description": "<ul>\n  \n  <li>\n<p>Description de la quête : Récoltez 3 anneaux du lion, via la quête de l'anneau du lion, et dites \"anneaux du lion\", puis \"oui\" à Mordenthal, situé dans son temple, dans les Montagnes au Nord de StoneCrest.</p>\n</li>\n  <li>\n<p>Attention, vous devez être d'un alignement maléfique pour effectuer cette quête !</p>\n</li>\n  <li>\n<p>Vous pouvez accomplir cette quête à volonté.</p>\n</li>\n  <li>\n<p><b>Récompenses :</b> Manteau d'Armegeddon ou Grande Hache du Corbeau.</p>\n</li>\n  <li>\n<p></li>\n  <li></p>\n</li>\n  <li>\n<p></p>\n</li>\n\n</ul>",
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
        "description": "<p>(\"travail\"...).</p>\n<br/>\n<p>Il vous faudra réunir :</p>",
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
        "description": "<p>Il faut une bonne CA (environ 200) pour XP sur l'île au sort de zone. En archer la CA n'est pas nécessaire car vous pouvez vous cacher dans une maison ou derrière un cours d'eau. L'xp est intéressante mais depuis l'existence de Drake Island, cette ile a perdu beaucoup de son intérêt sauf pour les drops..</p>",
        "images": [],
        "order": 2
      },
      {
        "title": "Objets étoilés",
        "description": "<p>Vous y trouverez des mobs et coffres qui vont droper :</p>\n<br/>\n<ul>\n  <li>parcelle d'étoile (drop assez fréquent du coffre étoilé dans le village au Nord)</li> <li>fragment de météorite (drop rare des skraugs Noctris Dézéthoill)</li>\n</ul>\n<br/>\n<p>Avec une parcelle d'étoile et 3 fragments de météorite, vous pourrez obtenir un item étoilé+4</p>\n<br/>\n<p><b>Attention</b> : vous perdez l'accès après une renaissance ou si vous fabriqués un item étoilé !</p>\n<br/>\n<p><br/></p>\n<br/>\n<p></p>",
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
        "description": "<p>Pour accéder à Drake Island vous devrez être au moins level 80 mais vous pouvez vous procurer les items auparavant.</p>",
        "images": [
          "/t4c-nms-overview/assets/quests/acces-drake-island-la-4eme-ile/img_0_0.jpg"
        ],
        "order": 0
      },
      {
        "title": "Rosalia Moonshadow",
        "description": "<p>Prenez la direction de la zone Oracle. Rendez vous sur la petite île après le pont invisible. Vous y trouverez une dame en robe orange, avec un bouclier des Haut-Elfes, Rosalia Moonshadow.</p>\n<br/>\n<p>Dites lui \"<b>Redwall</b>\". Pour vous y envoyer, elle vous demandera une potion volcanique, une poignée de plumes et une poudre de diamants.</p>",
        "images": [],
        "order": 1
      },
      {
        "title": "Les ingrédients nécessaires",
        "description": "<ul>\n  <li>50 points de résistance au feu</li> <li>2 sachets de poudre jaune</li> <li>10 luths magiques</li> <li>1 collier de diamants</li> <li>4 diamants</li> <li>40 cristaux bruts</li> <li>800.000 pièces d'or</li> <li>l'accès aux Iles éthérées est nécessaire. Il est obtenu : \n<ul>\n  <li>si vous êtes Good, l'accès aux Iles éthérées est inclus dans l'accès Oracle.</li> <li>Sinon, en vous procurant une clé éthérée grâce à 2 lames assassines. Pour cela vous devez : \n<ul>\n  <li>Parlez à Dyonysos de la ville centaure (mot-clé \"<b>aide</b>\" \"<b>centaures squelettes</b>\") puis tuez 12 centaures squelettes au sous-sol du château de Mordenthal. Puis retournez parlez à Dyonysos, dites \"<b>centaures squelettes</b>\" et \"<b>oui</b>\", il vous donnera un parchemin d'amitié des chevaux. Refaites cela autant qu'il vous faudra de parchemins.</li> <li>Donnez des parchemins d'amitié des chevaux à Malachaï Thanatos de la ville centaure jusqu'à obtenir 2 lames assassines.</li> <li>Puis échangez ces 2 lames chez Daran Pied-Léger (taverne de SC) contre une clé éthérée brisée (mot clé \"<b>lame assassine</b>\").</li> <li>Et enfin allez voir Bastien Milandra (château de Sir Beltigan) qui vous l'échangera contre une clé éthérée (<b>T<i>ravail</i> et <i>Oui</i> 6 fois, puis <i>Travail</i>, <i>Aide</i>, <i>Aide</i>, <i>Séraphe</i>, <i>Séraphe</i>, <i>Oui</i>, <i>Clef éthérée</i>, et enfin <i>Oui</i></b><i>)</i></li> <li>ouf !!! Répétez bien \"<b>oui</b>\" à ses fadaises car il faut être gentil avec lui.</li>\n</ul>\n</li>\n</ul>\n</li>\n</ul>\n\n<ul>\n  <li>si vous êtes Good, l'accès aux Iles éthérées est inclus dans l'accès Oracle.</li> <li>Sinon, en vous procurant une clé éthérée grâce à 2 lames assassines. Pour cela vous devez : \n<ul>\n  <li>Parlez à Dyonysos de la ville centaure (mot-clé \"<b>aide</b>\" \"<b>centaures squelettes</b>\") puis tuez 12 centaures squelettes au sous-sol du château de Mordenthal. Puis retournez parlez à Dyonysos, dites \"<b>centaures squelettes</b>\" et \"<b>oui</b>\", il vous donnera un parchemin d'amitié des chevaux. Refaites cela autant qu'il vous faudra de parchemins.</li> <li>Donnez des parchemins d'amitié des chevaux à Malachaï Thanatos de la ville centaure jusqu'à obtenir 2 lames assassines.</li> <li>Puis échangez ces 2 lames chez Daran Pied-Léger (taverne de SC) contre une clé éthérée brisée (mot clé \"<b>lame assassine</b>\").</li> <li>Et enfin allez voir Bastien Milandra (château de Sir Beltigan) qui vous l'échangera contre une clé éthérée (<b>T<i>ravail</i> et <i>Oui</i> 6 fois, puis <i>Travail</i>, <i>Aide</i>, <i>Aide</i>, <i>Séraphe</i>, <i>Séraphe</i>, <i>Oui</i>, <i>Clef éthérée</i>, et enfin <i>Oui</i></b><i>)</i></li> <li>ouf !!! Répétez bien \"<b>oui</b>\" à ses fadaises car il faut être gentil avec lui.</li>\n</ul>\n</li>\n</ul>\n\n<ul>\n  <li>Parlez à Dyonysos de la ville centaure (mot-clé \"<b>aide</b>\" \"<b>centaures squelettes</b>\") puis tuez 12 centaures squelettes au sous-sol du château de Mordenthal. Puis retournez parlez à Dyonysos, dites \"<b>centaures squelettes</b>\" et \"<b>oui</b>\", il vous donnera un parchemin d'amitié des chevaux. Refaites cela autant qu'il vous faudra de parchemins.</li> <li>Donnez des parchemins d'amitié des chevaux à Malachaï Thanatos de la ville centaure jusqu'à obtenir 2 lames assassines.</li> <li>Puis échangez ces 2 lames chez Daran Pied-Léger (taverne de SC) contre une clé éthérée brisée (mot clé \"<b>lame assassine</b>\").</li> <li>Et enfin allez voir Bastien Milandra (château de Sir Beltigan) qui vous l'échangera contre une clé éthérée (<b>T<i>ravail</i> et <i>Oui</i> 6 fois, puis <i>Travail</i>, <i>Aide</i>, <i>Aide</i>, <i>Séraphe</i>, <i>Séraphe</i>, <i>Oui</i>, <i>Clef éthérée</i>, et enfin <i>Oui</i></b><i>)</i></li> <li>ouf !!! Répétez bien \"<b>oui</b>\" à ses fadaises car il faut être gentil avec lui.</li>\n</ul>",
        "images": [],
        "order": 2
      },
      {
        "title": "Trouvez 50 points de résistance au feu et 2  sachets de poudre jaune",
        "description": "<ul>\n  <li>Une potion de faible résistance vaut 1 point.</li> <li>Une potion de résistance partielle vaut 2 points.</li> <li>Une potion de grande résistance vaut 5 points.</li>\n</ul>\n<br/>\n<p>Pour ce faire collectez les gemmes opale (pour les potions de faible résistance), rubis (pour les potions de résistance partielle) et grenat (pour les potions de grande résistance) ; la qualité de ces gemmes n'ayant aucune importance. Puis allez voir Meltar Goanvach dans la cave des voleurs de Stonecrest pour échanger vos gemmes (mot-clé \"<b>gemmes</b>\"). Attention, obtenir une potion est très aléatoire, préparez-vous à en échanger beaucoup.</p>\n<br/>\n<p>Vous trouverez ces gemmes un peu partout et particulièrement en faisant le donjon des Galinettes (pour levels <b>50-80</b>).</p>\n<br/>\n<p>Par ailleurs, les kobolds droppent parfois une potion de faible résistance au feu. Pensez-y quand vous êtes petit level.</p>\n<br/>\n<p>Si vous êtes dans une guilde, les hauts levels pourront probablement vous aider soit en vous en donnant, soit en faisant la quête des fèves au salon de jeu.</p>\n<br/>\n<p>Vous aurez aussi besoin de 2 sachets de poudre jaune (dropés par Araf Kul et Roshnak Tul, camp Orc d'Arakas).</p>",
        "images": [],
        "order": 3
      },
      {
        "title": "Allez voir Harung Batkist au rez-de-chaussée de la bibliothèque de Raven's Dust",
        "description": "<p>Dites-lui : \"<b>Potion Volcanique</b>\" puis indiquez-lui vos potions.</p>\n<br/>\n<p>Par exemple, si vous avez 6 potions de grandes résistance, 5 partielles et 10 faibles, dites lui :</p>\n<br/>\n<ul>\n  <li><b>6 fois \"grande\"</b></li> <li><b>5 fois \"partielle\"</b></li> <li><b>10 fois \"faible\"</b></li>\n</ul>\n<br/>\n<p>Dites enfin \"<b>volcanique</b>\" puis \"<b>oui</b>\".</p>",
        "images": [],
        "order": 4
      },
      {
        "title": "Trouvez 10 luths magiques et un collier de diamants",
        "description": "<p><b>Les luths magiques</b> sont dropés par le Bouffon Morbide (prison du château de Silversky - respawn environ 22 minutes).</p>\n<br/>\n<p><b>Le collier de diamants</b> est droppé par les créatures bannies du labyrinthe d'Arakas ou le dragon Yeridaj de Niève (respawn environ 1 heure)</p>",
        "images": [],
        "order": 5
      },
      {
        "title": "Allez voir \"un brave chasseur\" aux Iles éthérées",
        "description": "<p>Il tient compagnie à la Séraphine Glaenshenmilandira dans le château des Iles Éthérées (l'accès en est donc indispensable, voyez plus haut comment l'obtenir (quêtes de la clef éthérée néphilim ou accès Oracle pour séraphin).</p>\n<br/>\n<p>Dites-lui \"<b>distraire</b>\", il vous prendra alors pour la distraire, les 10 luths magiques et le collier de diamants. Pendant qu'il jouera de la musique, la belle relâchera son <b>attention</b> et il lui arrachera une pleine poignée de plumes.</p>",
        "images": [],
        "order": 6
      },
      {
        "title": "Retournez voir Rosalia Moonshadow",
        "description": "<p>(en pratique, vous pouvez préparer la poudre de diamant par avance)</p>\n<br/>\n<p>Redites-lui \"<b>Redwall</b>\", elle vous dira qu'elle a oublié quelque chose pour vous envoyer sur Drake Island : la poudre de diamant.</p>",
        "images": [],
        "order": 7
      },
      {
        "title": "Trouvez 4 diamants et 40 \"cristal brut\"",
        "description": "<p><b>Les diamants</b> sont dropés par le coffre Sud de la maison du Bourgmestre de Windhowl (profitez-en pour cliquer l'autre coffre plus au Nord, il drope parfois un morceau de nacre). Les diamants sont aussi dropés par le coffre à l'est du camp du commandant Owain, aux druides d'Arakas.</p>\n<br/>\n<p><b>Les \"cristal brut\"</b> sont dropés par les skraugs verts.</p>",
        "images": [],
        "order": 8
      },
      {
        "title": "Allez voir Arakis Haz à Windhowl",
        "description": "<p>Elle se trouve dans une maison au Sud-Est de Windhowl (<b>1722,1349</b>). Dites-lui \"<b>fabriquer</b>\". Elle fabriquera la poudre de diamant (elle vous demandera aussi 800.000 pièces d'or).</p>",
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
        "description": "<ul>\n  \n  <li>\n<p>Redites lui \"<b>RedWall</b>\". Elle vous enverra franchir un labyrinthe invisible en moins de 10 minutes. Si vous dépassez les 10 minutes, il vous faudra refaire tout le labyrinthe.</p>\n</li>\n  <li>\n<p>Pour bien commencer, empruntez la porte de gauche. Continuez dans cette direction puis traversez la salle en zigzaguant. Une fois de l'autre côté, passez la porte et continuez tout droit dans le couloir. Vous passerez à travers un mur (passage <b>secret</b>) qui vous mènera à Magdala. Répondez \"<b>oui</b>\" à sa question et elle vous enverra à RedWall, ville de Drake Island.</p>\n<p style=\"text-align:center;\"></p>\n<p class=\"mw-empty-elt\"></p>\n</li>\n  <li>\n<p></p>\n</li>\n\n</ul>",
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
    "prerequisites": ["Niveau 50 minimum (conseillé 120+ pour finir)", "Être sur Stoneheim (SH)"],
    "rewards": ["Accès à l'Académie (Niveau 150 requis)", "Aura des Sages (remplace les items 1.25)", "Environ 64M+ XP au total", "10 Parchemins XP x2 (après Cerberus)"],
    "npcs": ["Pelkor Zyrus"],
    "gold": "",
    "steps": [
      {
        "title": "Introduction & Récompenses",
        "description": "<p>Cette quête majeure se déroule en plusieurs phases et offre trois types de bénéfices :</p><ul><li><b>XP massive :</b> Chaque capture rapporte entre 500k et 2.5M+ XP. Faire les 8 premiers monstres (accessibles seul) vous monte au niveau 54.</li><li><b>L'Aura des Sages :</b> Une aura permanente qui remplace avantageusement l'équipement Crimsonscale (amulette, bracelet immortel, ceinture instable). Plus besoin de switcher !</li><li><b>Accès à l'Académie :</b> Permet d'accéder aux zones de haut niveau (150+).</li></ul>",
        "images": [],
        "order": 0
      },
      {
        "title": "Démarrage : Le Sceptre de Capture",
        "description": "<p>Rendez-vous au <b>Salon de Jeux de Stoneheim</b> (au Nord-Est de Stonecrest). Traversez le bâtiment pour trouver <b>Pelkor Zyrus</b> derrière ses grilles.</p><ul><li>Dites \"travail\" : il vous remettra un sceptre de capture.</li><li>Après chaque capture réussie, retournez le voir, dites \"proie\" pour valider et recevoir votre XP, puis demandez la suivante.</li></ul><br/><p><b>Règles de capture :</b></p><ul><li><b>Affaiblissement :</b> Réduisez la vie du monstre au minimum avec vos sorts/armes habituels, puis achevez-le avec le <b>sceptre équipé</b>.</li><li><b>Bénédiction :</b> À partir du 3ème monstre, une bénédiction (ex: Zélina) est indispensable pour avoir assez d'attaque pour toucher avec le sceptre.</li><li><b>Aide :</b> À partir du 9ème monstre (Soldat égaré), l'aide d'un haut niveau (GB) est fortement recommandée.</li></ul>",
        "images": [],
        "order": 1
      },
      {
        "title": "Phase 1 : Les captures sur Arakas",
        "description": "<ul><li><b>1. Rat affamé :</b> Sous-sol -2 du temple de Lighthaven, vers l'Ouest (180,118,1). <i>Gain : 500K XP</i></li><li><b>2. Rejet du monde :</b> Cave du vieil ermite, Sud-Ouest (140,1050,2). <i>Gain : 600K XP</i></li><li><b>3. Chef de guerre Kobold :</b> Nord-Est des montagnes Jarko (2174,152,0). <i>Gain : 700K XP</i></li><li><b>4. Rampilius :</b> Labyrinthe d'Arakas (765,186,1). <i>Gain : 800K XP</i></li><li><b>5. Agrenarok :</b> Cité perdue des Nains (2640,340,0). <i>Gain : 900K XP</i></li><li><b>7. Soldat disparu :</b> Cave B des montagnes Jarko (1765,370,0). <i>Gain : 1.1M XP</i></li></ul>",
        "images": [
          "/t4c-nms-overview/assets/quests/quete-dacces-a-lacademie/img_3_0.jpg",
          "/t4c-nms-overview/assets/quests/quete-dacces-a-lacademie/img_4_0.jpg"
        ],
        "order": 2
      },
      {
        "title": "Phase 2 : Les captures sur Raven's Dust",
        "description": "<ul><li><b>6. Rampilios :</b> Cave d'Anrak (1169,263,2). Entrée via le sous-sol de la maison d'Anrak (597,1763,0). <i>Gain : 1M XP</i></li><li><b>8. Celleniem :</b> Zone railleuse, après la tour de Zhakar (328,2008,0). <i>Gain : 1.2M XP</i></li><li><b>9. Soldat égaré :</b> Crypte de Raven's Dust, niveau -2 (550,2230,1). <i>Gain : 1.4M XP</i></li><li><b>10. Fracasseur :</b> Cave des Minotaures (360,980,1). <i>Gain : 1.5M XP</i></li><li><b>11. Yéti féroce :</b> Plaine de Niève (1409,344,4). <i>Gain : 1.6M XP</i></li><li><b>12. Drake Dixtor :</b> Sud-Ouest du désert (215,2655,0). <i>Gain : 1.8M XP</i></li><li><b>13. Squelette équestre :</b> Cave de l'Aveugle (787,1836,2). <i>Gain : 1.9M XP</i></li><li><b>14. Yéti Adulte :</b> Plaine de Niève (1585,250,4). <i>Gain : 2M XP</i></li><li><b>17. Golem glacial :</b> Plaine de Niève (1655,355,4). <i>Gain : 5M XP</i></li></ul>",
        "images": [],
        "order": 3
      },
      {
        "title": "Phase 3 : Les captures sur Stoneheim",
        "description": "<ul><li><b>15. Drake Dixtor Supérieur :</b> Cave des Skraugs Roses (1836,1040,2). <i>Gain : 2.25M XP</i></li><li><b>16. Golem de pierre :</b> Sud de la RST Stoneheim (470,1170,0). <i>Gain : 2.5M XP</i></li><li><b>18. Golem embrasé :</b> Volcan de Stoneheim. <i>Gain : XP variable</i></li><li><b>19. Liche ancestrale :</b> Crypte de Stonecrest. <i>Gain : XP variable</i></li></ul>",
        "images": [],
        "order": 4
      },
      {
        "title": "Phase Finale : L'Accès et l'Aura",
        "description": "<p>Pour finaliser l'accès et obtenir l'<b>Aura des Sages</b>, vous devez :</p><ol><li>Avoir terminé les 19 captures précédentes.</li><li>Avoir complété la quête Crimsonscale (tué Gluriurl) lors de votre renaissance actuelle.</li><li>Posséder la ceinture instable et le bracelet immortel.</li><li><b>Déséquiper</b> tous ces items avant de parler à Pelkor.</li></ol><p>Dites \"proie\" puis \"partir\" à Pelkor pour recevoir l'accès définitif (Niveau 150 requis pour entrer).</p>",
        "images": [],
        "order": 5
      },
      {
        "title": "Bonus : Le Cerberus (Niveau 200+)",
        "description": "<p>Une fois le niveau 200 atteint et l'accès au niveau -4 de l'Académie débloqué, vous pourrez affronter le <b>Cerberus</b>.</p><ul><li>Il nécessite d'obtenir 22 clés de chair durcie.</li><li>La capture du Cerberus rapporte <b>10 Milliards d'XP</b> et 10 parchemins d'expérience doublée (1h).</li></ul>",
        "images": ["/t4c-nms-overview/assets/quests/donjon-du-cerberus/img_24_0.jpg"],
        "order": 6
      }
    ],
    "credits": ["Mëyli", "Uqbar", "Tellah", "Artemys"]
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
        "description": "<p><b>Parlez à Sarah, située au premier sous-sol du temple de Stonecrest, elle vous proposera de broder une robe si vous lui fournissez la robe (non brodée) et les <b>items nécessaires</b> (un ornement et 3 bobines de fil d'or).</b></p>\n<br/>\n<p>Le skin de la robe va changer comme indiqué. Très intéressant pour transformer le plastron chance en une belle robe mauve ou pour maigrir rapidement !!</p>",
        "images": [],
        "order": 0
      },
      {
        "title": "Les robes",
        "description": "<p><b>Robe des Fournaises</b></p>\n<br/>\n<ul>\n  <li>Devient robe rouge ordinaire</li>\n</ul>\n<br/>\n<p><b>Robe des Flammes ardentes</b></p>\n<br/>\n<ul>\n  <li>Devient robe rouge ordinaire</li>\n</ul>\n<br/>\n<p><b>Manteau de sève mystique</b></p>\n<br/>\n<ul>\n  <li>Devient robe brune ordinaire</li>\n</ul>\n<br/>\n<p><b>Suaire du Phoenix</b></p>\n<br/>\n<ul>\n  <li>Devient robe blanche ordinaire</li>\n</ul>\n<br/>\n<p><b>Manteau Inlandsis</b></p>\n<br/>\n<ul>\n  <li>Devient robe bleu pale ordinaire</li>\n</ul>\n<br/>\n<p><b>Manteau du Khamsin</b></p>\n<br/>\n<ul>\n  <li>Devient robe jaune ordinaire</li>\n</ul>\n<br/>\n<p><b>Plastron étincelant =&gt; toge étincelante</b></p>\n<br/>\n<ul>\n  <li>Devient robe mauve ordinaire</li>\n</ul>",
        "images": [
          "/t4c-nms-overview/assets/quests/quete-de-sarah-robes-brodees/img_1_0.jpg"
        ],
        "order": 1
      },
      {
        "title": "Items nécessaires",
        "description": "<p><b>3 bobines de fil d'or et :</b></p>\n<br/>\n<ul>\n  <li>Un ornement de rubis pour une robe rouge</li> <li>Un ornement de saphir pour une robe bleue</li> <li>Un ornement de diamant pour une robe blanche ou jaune</li> <li>Un ornement d'émeraude pour une robe marron</li>\n</ul>\n<br/>\n<p>Voyez la quête des ornements pour savoir comment obtenir les ornements (sauf cobalt).</p>\n<br/>\n<p>3 bobines de fil d'or (obtenues à partir de minerai d'or) pour la toge étincelante et</p>\n<br/>\n<ul>\n  <li>Deux ornements de cobalt (il vous faut 2 minerais de cobalt par ornement, minés sur les gisements d'argent de la grotte Orc RD). \n<ul>\n  <li>Pour faire les ornements de cobalt, aller dans la cave des Skraugs verts muni des minerais et parler à Brikdétruk (<b>position</b> <b>1952,1406</b>). Puis lui dire \"Travail\" plusieurs fois de suite.</li>\n</ul>\n</li>\n</ul>\n\n<ul>\n  <li>Pour faire les ornements de cobalt, aller dans la cave des Skraugs verts muni des minerais et parler à Brikdétruk (<b>position</b> <b>1952,1406</b>). Puis lui dire \"Travail\" plusieurs fois de suite.</li>\n</ul>\n<br/>\n<p>Les bobines se craftent à partir de pépites d'or . Autre solution : 3 coffres dropent (parfois) directement une bobine de fil d'or sur Arakas :</p>\n<br/>\n<ul>\n  <li>Aux druides d'Arakas Audrey (celle qui fait les robes de couleurs. pos <b>2935,155</b>)</li> <li>Au village nain 2ème maison (pos: <b>2652,391</b>)</li> <li>Cave D des montagnes de Jarko, à côté de Trish Jalnec (celui qui drope la pioche de lh. pos <b>870,2629</b>)</li>\n</ul>\n<br/>\n<p><br/></p>\n<br/>\n<p></p>",
        "images": [],
        "order": 2
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
        "description": "<ol><li><b>TIP</b> : Un bon spot pour faire droper les livres est le petit lac à l'ouest du désert de DI. Tournez autour et tuez les mobs. Il y a là beaucoup de drakes akaïstes qui dropent bien surtout si vous portez quelques items chance.</li> <li><b>TIP</b> : Un conseil, allez-y par le Nord, en passant par la plaine centrale et le passage le long de la côte. Vous éviterez ainsi au maximum les vers et autres gardiens du désert.</li></ol>",
        "images": [],
        "order": 1
      },
      {
        "title": "Les récompenses",
        "description": "<p>La liste d'objets ci-dessous est <b>non exhaustive...</b></p>",
        "images": [],
        "order": 2
      },
      {
        "title": "Objets utiles et/ou équipables",
        "description": "<ul>\n  <li>Anneau béni des Hauts Altéens</li> <li>Amulette de chance (+20 chance)</li> <li>Anneau de fer</li> <li>Anneau de pierre de sang</li> <li>Anneau de platine</li> <li>Anneau de sorcellerie en jade</li> <li>Bague araignée</li> <li>Baguette magique*</li> <li>Chapeau en feuilles</li> <li>Cape du bouffon</li> <li>Cape des voyelles</li> <li>Cape d'Armageddon</li> <li>Carquois de terre</li> <li>Chapeau de glace*</li> <li>Collier du coeur noir*</li> <li>Conte des dragons</li> <li>Epée de Fureur</li> <li>Flèches de terre</li> <li>Fragment de météorite</li> <li>Hyperpotion d'esprit clair</li> <li>Livre des sorts rouge</li> <li>Marteau des nains</li> <li>Oeil du tigre</li> <li>Potion de faible résistance contre le mal/feu...</li> <li>Potion de grande résistance contre le mal/feu...</li> <li>Pièces d'or (de 10 à 500 000 maximum)</li> <li>Scalpel du chirurgien</li> <li>Sceptre de Zlüg</li> <li>Sceptre d'espoir</li> <li>Sombre chapeau</li> <li>Tambour finement ciselé</li> <li>Retrait de pièces d'or !!! (<b>attention</b> à votre or)</li> <li>Parchemin d'expérience d'une heure (droppable)</li> <li>Parchemin d'expérience de 10 minutes (droppable)</li> <li>Trèfle à 4 feuilles</li> <li>Venin d'araignée</li>\n</ul>",
        "images": [],
        "order": 3
      },
      {
        "title": "Décoratifs et RP (équipables)",
        "description": "<ul>\n  <li>Lance</li> <li>Couvercle de poubelle (bouclier des ères sans bonus)</li> <li>Bâton orné d'une pierre verte</li> <li>Lambeaux de troll ensanglantés (cuir)</li> <li>Bottes de la tortue</li> <li>Robe grise (robe skin)</li> <li>Epée squelette</li>\n</ul>",
        "images": [],
        "order": 4
      },
      {
        "title": "RP non équipables",
        "description": "<ul>\n  <li>Arbalète</li> <li>Pic à glace</li> <li>Fiole d'alchimiste (nécessaire pour la formule de la Fiole du Démon 106 Apothicaire)</li> <li>Ciseaux</li> <li>Tige de gobelin</li> <li>Pomme juteuse</li> <li>Rouleau à pâtisserie</li> <li>Cake aux fruits</li>\n</ul>\n<br/>\n<p></p>",
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
        "description": "<ul>\n  \n  <li>\n<p>Rendez-vous au sous-sol des métiers de Redwall.</p>\n</li>\n  <li>\n<p>Parlez à un vieillard sénile et dites lui \"travail\". Puis poursuivez le dialogue jusqu'à dire \"essences\".</p>\n</li>\n  <li>\n<p>Il vous prendra alors vos 10 essences de B'Zurkhan contre 10M d'xp et 500k po.</p>\n</li>\n  <li>\n<p>Vous pouvez renouveler cette quête à volonté.</p>\n</li>\n  <li>\n<p></p>\n</li>\n\n</ul>",
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
        "description": "<p>Rendez visite à Lahor, situé dans la maison de Lance Silversmith, vous découvrirez que son \"Travail\" est de forger des armes.</p>\n<br/>\n<ul>\n  <li>Deux morceaux de fer (drop des Bzus, ile DI).</li> <li>Une peau de ver (drop des apocalypses des sables, île DI).</li> <li>Une lame perdue du dragon (quête des notes de remerciement, ile SH).</li> <li>Une sinistre lame de guerre (quête de Malachaï, ile SH).</li> <li>Un bâton de marche tordu (coffre de l'asile, ile AR).</li> <li>Une dague du crâne (quête des ailes de chauve-souris) <u>OU</u> un scalpel du chirurgien (quête de la pierre de vie). <br/>Vous obtiendrez, selon l'arme que vous avez fournie, une <b>dague ensanglantée du crâne</b> ou un <b>scalpel du chirurgien poli </b>(le nom a été modifié depuis le screen) et 70.000 xp.</li>\n</ul>\n<br/>\n<p><b>Notez bien que la quête échoue environ une fois sur deux</b>!!! Vous recevrez alors 20 000 pièces d'or et 70.000 xp, mais tous les objets seront perdus (grrrrr cela m'est arrivé...).</p>\n<br/>\n<p><br/>entrer\"), ceux qui dropent la clef de chair durcie #22, pour arriver dans son antre.</p>\n<br/>\n<p>Puis, mettez vous tout nu, complètement débuff et sans arme et foncez dessus (<b>non....joke</b>)!</p>\n<br/>\n<p>Pour terminer la quête Académie, n'oubliez pas de capturer le Cerberus cela vous rapportera 10G d'xp et 10 parchemins d'xp x2 d'1 heure (ensuite aller rendre la capture a Pelkor Zirus comme les autres captures au salon de jeux.(Oubliez pas d'enlever le sceptre pour qu'il le reprenne)).</p>\n<br/>\n<p><b>Attention</b> : lorsque vous passez le portail pour la première fois, vous perdez <u>presque</u> toutes vos clefs de chair durcie!!</p>\n<br/>\n<p>Ne restent que celles qui permettent d'accéder au Cerberus en ligne droite, c'est à dire les #3, #6, #21 et #22. Vous pourrez donc retourner au Cerberus, mais ne pourrez pas camper les coffres iridium ou ivoire, ni les vers enfouis, ni les gargouilles éthérées. Pour ce faire, il faut... refaire les clefs qui vous intéressent (dans l'ordre... ou pas...). Amusez-vous bien!!</p>\n<br/>\n<p><b>Tip</b> : Vous pouvez faire d'avance en double les clés qui tombent au sol mais pas celles qui tombent directement dans votre sac.</p>\n<br/>\n<p><u><b>Cerberus, le boss à 3 têtes </b></u></p>\n<br/>\n<p><b>Attention</b> ce boss a la capacité de vous retirer toutes vos magies actives et d'invoquer des rejetons (gare à leur nécro) s'il est de mauvaise humeur !!</p>\n<br/>\n<p></p>",
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
        "description": "<ul>\n  \n  <li>\n<p>Vous disposez de 5 coffres iridium à l'Académie-4.</p>\n</li>\n  <li>\n<p>Ils sont accessibles à partir du moment où vous disposez des 11 premières clés de chair durcie. Le temps de <b>repop</b> d'un coffre est de 1 heure in game. Chaque joueur dispose d'un timer qui lui est propre. Un coffre drope dans l'inventaire un lingot d'iridium, un item <b>secret</b> ou une potion (pas de relique hélas).</p>\n</li>\n  <li>\n<p>Vous devrez passez par la salle aux leviers \"clé 8\" puis par la salle \"clé 10\". <b>Attention</b> : n'oubliez pas la potion d'inertie pour passer la salle \"clé 10\". Enfin entrez dans la salle aux 4 tourbillons.</p>\n</li>\n  <li>\n<p>Comment ça se passe ?</p>\n</li>\n  <li>\n<p>Selon le coffre que vous désirez ouvrir, vous devrez marcher sur une série de dalles bleues ou vertes numérotées de 1 à 8 pour les bleues et de 1 à 5 pour les vertes. La dalle bleue numéro 1 est notée B1 etc.</p>\n</li>\n  <li>\n<p>A partir de la salle aux quatre tourbillons, au dessus de la clé 10, en prenant le tourbillon caché par le mur du bas. Les cheminements menant aux différentes dalles Bleues et Vertes sont les suivants :</p>\n</li>\n  <li>\n<p>V1 et V2 = dans la salles des dalles (DD GGGG D)</li>\n  <li>V3 = D G DD (salle des dalles petit côté, haut)</li>\n  <li>V4 = D G D sur une île obsidienne</p>\n</li>\n  <li>\n<p>Attention, pour chaque couleur, il faut bien suivre l'ordre des dalles. Si vous marchez sur une mauvaise dalle, vous devrez recommencer au début la couleur concernée (mais vous pouvez marcher plusieurs fois sur la dalle que vous êtes en train de faire).</p>\n</li>\n  <li>\n<p>Les temps moyens affichés correspondent aux temps qu'il faut pour réaliser la combinaison et ouvrir le coffre concerné en partant du coffre précédent. <u>Exemple</u> : temps moyen du coffre 1 : 3 minutes 40 en partant du coffre 5. Ces temps sont réalisés en se dirigeant directement vers les dalles 1B après l'ouverture du coffre précédent sans passer par les bâfreurs de chair fraîche quand cela est possible.</p>\n</li>\n  <li>\n<p>Enfin le dernier chapitre vous donne le contenu de chaque coffre...</p>\n</li>\n\n</ul>",
        "images": [
          "/t4c-nms-overview/assets/quests/coffres-iridium/img_0_0.jpg",
          "/t4c-nms-overview/assets/quests/coffres-iridium/img_0_0.jpg"
        ],
        "order": 0
      },
      {
        "title": "Coffre 1 = 8B2V (8 bleu 2 vert)",
        "description": "<ul>\n  \n  <li>\n<p>-- Temps moyen : 3 minutes 45 --</p>\n</li>\n  <li>\n<p>Aller dans la salle aux quatre tourbillons (au dessus de la salle \"clé 10\") et prendre le tourbillon caché par le mur du bas.</p>\n</li>\n  <li>\n<p>Depuis première île, GGGG et activer dalle 1 bleu puis prendre tourbi vers bâfreurs.</li>\n  <li>Depuis première île, aller salle des dalles (DD GGGG D), activer 1 vert et 2 bleu puis prendre tourbi au nord.</li>\n  <li>Depuis première île, aller petit côté (DGDD) activer 3 bleu puis prendre tourbi vers bâfreurs.</li>\n  <li>Depuis première île, aller salles des dalles (DD GGGG D), activer 2 vert puis <b>4, 5, 6</b>, 7 bleu avant de reprendre le tourbi à côté de la porte Nord.</li>\n  <li>Depuis première île, faire DD GGGG, activer 8 bleu puis D, arrivée salle des dalles, cliquer sur le coffre près de la porte au Nord.</p>\n</li>\n  <li>\n<p>Ensuite n'oubliez pas d'activer 1 vert avant de prendre le tourbillon vers bâfreurs.</p>\n</li>\n  <li>\n<p></li>\n  <li></p>\n</li>\n\n</ul>",
        "images": [],
        "order": 1
      },
      {
        "title": "Coffre 2 = 7B4V (7 bleu 4 vert)",
        "description": "<ul>\n  \n  <li>\n<p>-- Temps moyen : 4 minutes 20 --</p>\n</li>\n  <li>\n<p>Aller dans la salle aux quatre tourbillons (au dessus de la salle \"clé 10\") et prendre le tourbillon caché par le mur du bas.</p>\n</li>\n  <li>\n<p>Depuis première île, GGGG et activer dalle 1 bleu puis prendre tourbi vers bâfreurs.</li>\n  <li>Depuis première île, aller salle des dalles (DD GGGG D), activer 1 vert 2 vert 2 bleu puis prendre tourbi au Nord vers bâfreurs.</li>\n  <li>Depuis première île, aller petit côté (DGDD), activer 3 bleu 3 vert puis prendre tourbi vers bâfreurs.</li>\n  <li>Depuis première île, DGD puis activer dalle 4 vert puis D vers petit côté ...</li>\n  <li>Depuis première île, aller salle des dalles (DD GGGG D), activer 4 ,5 , 6 , 7 bleu puis ouvrir le coffre au Sud (caché par le mur).</p>\n</li>\n  <li>\n<p>Ensuite n'oubliez pas d'activer 1 vert avant de prendre le tourbillon Nord vers bâfreurs.</p>\n</li>\n  <li>\n<p></li>\n  <li></p>\n</li>\n\n</ul>",
        "images": [],
        "order": 2
      },
      {
        "title": "Coffre 3 = 2B1V (le petit coffre)(2 bleu 1 vert)",
        "description": "<p>-- Temps moyen : 2 minutes 15 --</p>\n<br/>\n<p>Aller dans la salle aux quatre tourbillons (au dessus de la \"clé 10\") et prendre celui caché par le mur du bas.</p>\n<br/>\n<p>Depuis première île, GGGG et activer dalle 1 bleu puis prendre tourbi vers bâfreurs.<br/>Depuis première île, aller salle des dalles (DD GGGG D), activer 1 vert et 2 bleu puis prendre tourbi au Nord.<br/>Depuis première île, activer DG puis ouvrir le coffre.</p>\n<br/>\n<p>Ensuite au choix :</p>\n<br/>\n<ul>\n  <li>Sortez par DD (petit côté de la salle des dalles puis bâfreurs)</li> <li>ou rejoignez directement la dalle 1 bleu par GD GD GD DGG.</li>\n</ul>\n<br/>\n<p><br/></p>",
        "images": [],
        "order": 3
      },
      {
        "title": "Coffre 4 = 6B4V (6 bleu 4 vert)",
        "description": "<p>-- Temps moyen : 4 minutes 45 --</p>\n<br/>\n<p>Aller dans la salle aux quatre tourbillons (au dessus de la \"clé 10\") et prendre celui caché par le mur du bas.</p>\n<br/>\n<p>Depuis première île, GGGG et activer 1 bleu puis prendre tourbi vers bâfreurs.<br/>Depuis première île, aller salle des dalles (DD GGGG D), activer 1 vert 2 vert 2 bleu puis prendre tourbi au nord.<br/>Depuis première île, aller petit côté (DGDD), activer 3 bleu 3 vert puis prendre tourbi.<br/>Depuis première île, DGD puis activer dalle 4 vert puis D vers petit côté ...<br/>Depuis première île, aller salle des dalles (DD GGGG D), activer <b>4, 5, 6</b> bleu puis puis tourbi au nord.<br/>Depuis première île, activer DD GG puis ouvrir le coffre.</p>\n<br/>\n<p>Ensuite au choix :</p>\n<br/>\n<ul>\n  <li>Sortez par GG D (bâfreurs)</li> <li>ou rejoignez directement la dalle 1 bleu par DDG DDG G.</li>\n</ul>\n<br/>\n<p><br/></p>",
        "images": [],
        "order": 4
      },
      {
        "title": "Coffre 5 = 3B5V (3 bleu 5 vert)",
        "description": "<ul>\n  \n  <li>\n<p>-- Temps moyen : 4 minutes 15 --</p>\n</li>\n  <li>\n<p>Aller dans la salle aux quatre tourbillons (au dessus de la \"clé 10\") et prendre celui caché par le mur du bas.</p>\n</li>\n  <li>\n<p>Depuis première île, GGGG et activer dalle 1 bleu puis prendre tourbi vers bâfreurs.</li>\n  <li>Depuis première île, aller salles des dalles (DD GGGG D), activer 1 vert 2 vert 2 bleu puis prendre tourbi au nord.</li>\n  <li>Depuis première île, aller petit côté (DGDD), activer 3 bleu 3 vert puis prendre tourbi.</li>\n  <li>Depuis première île, DGD puis activer dalle 4 vert puis D vers petit côté ...</li>\n  <li>Depuis première île, aller salle des dalles (DD GGGG D), activer 5 vert puis tourbi au nord.</li>\n  <li>Depuis première île, activer G puis ouvrir le coffre.</p>\n</li>\n  <li>\n<p>Enfin GGG. Au passage marchez sur la dalle 1 bleu. Et G pour sortir (bâfreurs)</p>\n</li>\n  <li>\n<p></li>\n  <li></p>\n</li>\n\n</ul>",
        "images": [],
        "order": 5
      },
      {
        "title": "=== Coffre 1 === 8B 2V",
        "description": "<ul>\n  <li>Lingot d'iridium + potions</li> <li>Estampe secrète de Miryden</li> <li>Estampe secrète de Gorodek</li> <li>Orbe <b>secret</b> d'Isilaë</li> <li>Orbe <b>secret</b> de Valmar</li> <li>Poudre secrète de Falyel</li> <li>Poudre secrète de Jalaam</li> <li>Marque secrète de Klauzar</li> <li>Marque secrète de Gorodek</li> <li>Inscription secrète de Silvius</li> <li>Inscription secrète d'Amaëlle</li> <li>Blason <b>secret</b> de Xordiv</li> <li>Blason <b>secret</b> de Miryden</li>\n</ul>",
        "images": [],
        "order": 6
      },
      {
        "title": "=== Coffre 2 === 7B 4V",
        "description": "<ul>\n  <li>Lingot d'iridium + potions</li> <li>Estampe secrète de Falyel</li> <li>Estampe secrète de Klauzar</li> <li>Orbe <b>secret</b> de Xordiv</li> <li>Orbe <b>secret</b> de Jalaam</li> <li>Poudre secrète d'Amaëlle</li> <li>Poudre secrète de Klauzar</li> <li>Marque secrète de Falyel</li> <li>Marque secrète de Miryden</li> <li>Inscription secrète d'Isilaë</li> <li>Inscription secrète de Gorodek</li> <li>Blason <b>secret</b> de Valmar</li> <li>Blason <b>secret</b> de Silvius</li>\n</ul>",
        "images": [],
        "order": 7
      },
      {
        "title": "=== Coffre 3 === 2B 1V",
        "description": "<ul>\n  <li>Lingot d'iridium + potions</li> <li>Estampe secrète d'Amaëlle</li> <li>Estampe secrète de Valmar</li> <li>Orbe <b>secret</b> de Silvius</li> <li>Orbe <b>secret</b> de Gorodek</li> <li>Poudre secrète d'Isilaë</li> <li>Poudre secrète de Miryden</li> <li>Marque secrète d'Amaelle</li> <li>Marque secrète de Valmar</li> <li>Inscription secrète de Falyel</li> <li>Inscription secrète de Xordiv</li> <li>Blason <b>secret</b> de Klauzar</li> <li>Blason <b>secret</b> de Jalaam</li>\n</ul>",
        "images": [],
        "order": 8
      },
      {
        "title": "=== Coffre 4 === 6B 4V",
        "description": "<ul>\n  <li><b></b>Lingot d'iridium + potions</li> <li>Estampe secrète de Xordiv</li> <li>Estampe secrète de Sylvius</li> <li>Orbe <b>secret</b> de Miryden</li> <li>Orbe <b>secret</b> de Falyel</li> <li>Poudre secrète de Gorodek</li> <li>Poudre secrète de Valmar</li> <li>Marque secrète de Sylvius</li> <li>Marque secrète de Xordiv</li> <li>Inscription secrète de Klauzar</li> <li>Inscription secrète de Jalaam</li> <li>Blason <b>secret</b> d'Amaëlle</li> <li>Blason <b>secret</b> d'Isilaë</li>\n</ul>",
        "images": [],
        "order": 9
      },
      {
        "title": "=== Coffre 5 === 3B 5V",
        "description": "<ul>\n  <li><b></b>Lingot d'iridium + potions</li> <li>Estampe secrète d'Isilaë</li> <li>Estampe secrète de Jalaam</li> <li>Orbe <b>secret</b> de Klauzar</li> <li>Orbe <b>secret</b> d'Amaëlle</li> <li>Poudre secrète de Xordiv</li> <li>Poudre secrète de Silvius</li> <li>Marque secrète de Jalaam</li> <li>Marque secrète d'Isilaë</li> <li>Inscription secrète de Miryden</li> <li>Inscription secrète de Valmar</li> <li>Blason <b>secret</b> de Falyel</li> <li>Blason <b>secret</b> de Gorodek</li>\n</ul>\n<br/>\n<p>Uqbar, Elcentor et quelques autres ! merci à eux</p>\n<br/>\n<p></p>",
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
        "description": "<p>Vous trouverez deux coffres ivoire au niveau -4 de l'Académie.</p>\n<br/>\n<p>Il vous faut avoir les clés de chair jusqu'à la clé 14 pour pouvoir accéder à la salle aux 11 tourbillons (celle de la clé de chair 15).</p>\n<br/>\n<p>Il vous faudra aussi des clés de rosée (celle du puits pour aller au Lord) pour pouvoir ouvrir les coffres.</p>\n<br/>\n<p>1er coffre : prenez le tourbillon permettant d'accéder à la salle de la clé corail 3. Cliquez sur le coffre \"accès au coffre ivoire\". Vous êtes arrivé !</p>\n<br/>\n<p>En plus d'ivoires d'Agamaoth celui de droite (dit coffre archer) drope aussi :</p>\n<br/>\n<ul>\n  <li>Critique</li> <li>Popo Prisme</li> <li>Fèves de toutes sortes</li> <li>Chevalière de stagnation</li> <li>Lame en orichalque</li> <li>Manche en orichalque</li> <li>Fût en ébonite</li> <li>Pointes de flèches en tungstène</li>\n</ul>\n<br/>\n<p>2ème coffre : prenez le tourbillon permettant d'accéder à l'escargot de la clé 17. Marcher sur la droite en longeant le bord (prévoyez des potions pour la lave) et <b>entrez par la gauche dans le premier tourbillon rencontré.</b> Vous êtes arrivé !</p>\n<br/>\n<p>En plus d'ivoires d'Agamaoth celui de gauche (dit coffre guerrier) drope aussi :</p>\n<br/>\n<ul>\n  <li>Critique</li> <li>Popo Prisme</li> <li>Fèves de toutes sortes</li> <li>Chevalière de stagnation</li> <li>Lame de métrolite</li> <li>Lame en acier métrolite</li> <li>Manche en acier métrolite</li> <li>Pointes de flèche en orichalque</li>\n</ul>\n<br/>\n<p>Ouvrez les coffres à l'aide d'une clé de rosée (du Lord). Le timing des coffres est personnel et est d'une heure IG.</p>\n<br/>\n<p>Bonne chance !</p>\n<br/>\n<p></p>",
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
        "description": "<ul>\n  \n  <li>\n<p>Pour rappel, Les anciens BOSS de LH2 ou plutôt leurs réincarnations ne sont pas loin <b>!</b></p>\n</li>\n  <li>\n<p>QUARAN (Tarnian), OCTRAEL (Edgar), ARKELISE (Moonrock), KORES (Araknor) peuvent être invoqués en vous rendant dans la maisonnette de Marty Rhyser au -3.</p>\n</li>\n  <li>\n<p>Tous les détails dans camping super Boss</p>\n</li>\n\n</ul>",
        "images": [],
        "order": 0
      },
      {
        "title": "PLAN DE L'ACADEMIE-3",
        "description": "<ul>\n  \n  <li>\n<p></li>\n  <li></p>\n</li>\n  <li>\n<p><b>Les différents monstres (boss et mini-boss) sont invoqués via la console centrale (coffre central). </b></p>\n</li>\n  <li>\n<p><b>Il faut activer une combinaison de deux orbes (coffres) avant d'activer la console centrale. Chaque orbe est affectée d'une valeur de 1 à 8.</b></p>\n</li>\n  <li>\n<p><b>Une combinaison est déterminée par la somme de la valeur des deux orbes (coffres) qui la composent.</b></p>\n</li>\n  <li>\n<p><b>Il y a au total 13 combinaisons possibles. Dans la suite, le premier nombre représente la somme de la valeur de deux orbes. Les paires de nombres qui suivent représentent les valeurs des deux orbes.</b></p>\n</li>\n  <li>\n<p><b>En général, chaque combinaison a 3 effets possibles avec respectivement une probabilité de 50%, 25% et 25% parmi bonus, malus ou monstre.</b></p>\n</li>\n  <li>\n<p><b>Plus d'effets sont parfois possibles...</b></p>\n</li>\n  <li>\n<p>Remarque : L'homme lézard depop après 20 minutes s'il n'est pas tué.</p>\n</li>\n\n</ul>",
        "images": [
          "/t4c-nms-overview/assets/quests/camping-academie-3/img_1_0.jpg"
        ],
        "order": 1
      },
      {
        "title": "INVOCATION DES MONSTRES en fonction des orbes activées",
        "description": "<ul>\n  \n  <li>\n<p><b>3</b> : 12 : <b>Alanara'ak l'hérétique (dit \"le poulet\")</b> / Jumeaux humanoïdes grotesques / Malus</p>\n</li>\n  <li>\n<p><b>4</b> : 13 :<b> Créature infernale</b> <b>(dite \"le totem\")</b> / Assemblage minéral / Ver d'acier</p>\n</li>\n  <li>\n<p><b>5</b> : 14/23 : Humanoïde grotesque (50%) / Croc Blanc (25%) / <s>Amalgame de chair</s>/ Malus (25%)</p>\n</li>\n  <li>\n<p><b>6</b> : 15/24 : Homme lézard / Assemblage minéral / ver d'acier</p>\n</li>\n  <li>\n<p><b>7</b> : 16/25/34 : Croc Blanc (50%) / Humanoïde grotesque (25%) / Amalgame de chair (25%)</p>\n</li>\n  <li>\n<p><b>8</b> : 17/26/35 : Bonus (50%) / Ver d'acier (25%) / Assemblage minéral (25%)</p>\n</li>\n  <li>\n<p><b>9</b> : 18/27/36/45 : Malus (50%) / Humanoïde grotesque (25%) / Amalgame de chair (25%)</p>\n</li>\n  <li>\n<p><b>10</b> : 28/37/46 : Ver d'acier / Croc Blanc / Amalgame de chair ou Bonus ou Malus ??</p>\n</li>\n  <li>\n<p><b>11</b> : 38/47/56 : Homme lézard (50%) / Assemblage minéral (25%) / Bonus (25%)</p>\n</li>\n  <li>\n<p><b>12</b> : 48/57 : Amalgame de chair (50%) / Homme lézard (25%) / Malus (25%)</p>\n</li>\n  <li>\n<p><b>13</b> : 58/67 : Amalgame de chair / Assemblage minéral / Ver d'acier / Humanoïde grotesque / Homme lézard</p>\n</li>\n  <li>\n<p><b>14</b> : 68 : <b>Chevalier des abysses</b> / Croc Blanc / Homme lézard</p>\n</li>\n  <li>\n<p><b>15</b> : 78 : <b>Ethana &amp; Ethoan</b> <b>(les amoureux)</b> / Amalgame de chair / bonus</p>\n</li>\n\n</ul>",
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
        "description": "<ul>\n  \n  <li>\n<p>Comme toujours dans mes participations au wiki, je prendrai le point de vue du newbe.</p>\n</li>\n  <li>\n<p>En effet, il faut vraiment être un débutant pour ne pas savoir ramasser un loot. Pourtant, lors des séances de camping auxquelles, j’ai participé, il est arrivé que des erreurs de ramassage gâchent l’ambiance du groupe.</p>\n</li>\n  <li>\n<p>Quoi de plus dommage et de plus triste que de voir un joueur, une joueuse, quitter le groupe par dépit, après avoir vu \"disparaitre \" un item qui lui était réservé. Se mettre à sa place, émotionnellement, est assez facile.</p>\n</li>\n  <li>\n<p>Evidemment, je ne sous-entends pas que certain(e)s volent délibérément les items au sol. Simplement, je pense que ce type d’erreur est vraiment dommageable pour notre petite communauté. Surtout, quand on sait que certains d’entre nous (des GB), font toujours de leur mieux pour que chacun, chacune, obtienne au moins, un item recherché.</p>\n</li>\n  <li>\n<p>Alors voici les outils et une méthode qui devrait vous aider à ne pas faire d’erreur.</p>\n</li>\n\n</ul>",
        "images": [],
        "order": 4
      },
      {
        "title": "Les éléments de contrôle",
        "description": "<p>Il y a trois fonctions qui peuvent vous aider à ne pas vous tromper lorsque vous ramassez un loot.</p>\n<br/>\n<ul>\n  <li>CTRL+N : Afficher les noms des items et des persos de la zone visible</li> <li>CTRL+K : Ramasser l’objet réservé proche. A noter que cette fonction n’est efficace que pendant le temps de réservation de l’item (2-mn)</li> <li>Clic bouton droit sur l’objet : Donne le nom de l’objet visé lorsque l’option \"affichage du détail des objets \" est décochée. Evidemment, la couleur jaune d’attribution est visible.</li>\n</ul>",
        "images": [],
        "order": 5
      },
      {
        "title": "Utilisation des fonctions",
        "description": "<ul>\n  \n  <li>\n<p>Lorsque le mob est mort, CTRL+N liste les items au sol.</p>\n</li>\n  <li>\n<p>Si un item est listé en jaune rapprochez-vous et faites CTRL+K</p>\n</li>\n  <li>\n<p>Si les 2mn sont passées, ce contrôle ne fonctionne plus.</p>\n</li>\n  <li>\n<p>Approchez-vous de l’item que vous voulez ramasser. Cliquez bouton droit de la souris, pour vérifier que vous ciblez le bon item. Si l'objet est en jaune, faites clic bouton gauche pour le ramasser.</p>\n</li>\n  <li>\n<p>Si vous avez ciblé le mauvais (il est en vert) vérifiez le voisin avec, de nouveau, Clic bouton droit de la souris.</p>\n</li>\n  <li>\n<p>ainsi de suite jusqu’à trouver votre item.</p>\n</li>\n  <li>\n<p>Lorsque vous l'avez trouvé, faites clic bouton gauche pour le ramasser.</p>\n</li>\n\n</ul>",
        "images": [],
        "order": 6
      },
      {
        "title": "Exemple de situation",
        "description": "<p>Vous pourriez voir deux items identiques au sol, dont l’un vous est réservé, vous déplacer et en ramasser un, sans vérifier. Imaginez ce qui peut se passer dans la tête d’un autre joueur qui vérifiant les items au sol, se rend compte que son item jaune n’est plus là. Vous pouvez penser qu’il n’a qu’à ramasser l’item au sol, c’est vrai, mais voilà ce n’est pas le sien. Et lui, elle, ne veut pas prendre un item au sol qui ne lui est pas destiné, ne veut pas \"voler \" cet item.</p>",
        "images": [],
        "order": 7
      },
      {
        "title": "Conclusion",
        "description": "<ul>\n  \n  <li>\n<p>Pardon pour cette conclusion, mais, s’il vous plait, ne foncez pas sur les loots. Ne passez pas bêtement pour un(e) voleur(se), juste parce que vous voulez absolument un item, et ne prenez pas le temps de vérifier que l’item que vous ramassez est bien le vôtre.</p>\n</li>\n  <li>\n<p>T4C est un jeu très prenant, c’est vrai, mais ce n’est qu’un jeu, ne l’oublions pas. Alors du calme, de la bienveillance et de la bonne humeur. Si l'objet convoité ne tombe pas pendant une séance, ce sera pour la prochaine...</p>\n</li>\n  <li>\n<p></li>\n  <li></p>\n</li>\n  <li>\n<p></li>\n  <li></p>\n</li>\n  <li>\n<p></p>\n</li>\n\n</ul>",
        "images": [],
        "order": 8
      }
    ],
    "credits": [
      "T4C NMS Révolution wiki"
    ]
  },
  {
    "title": "Accès à l'Asile Déchu",
    "slug": "acces-a-lasile-dechu",
    "zone": "Général",
    "prerequisites": [],
    "rewards": [],
    "npcs": [],
    "gold": "",
    "steps": [
      {
        "title": "Accès à l'asile et début de la quête de la fiole de magie",
        "description": "<p>Vous devez être déchu pour réaliser cette quête. </p>\n\n<p>Pour commencer, allez à l'asile et parlez à Forbin, qui est juste à côté du gardien. Il vous remettra la clé d'entrée de l'asile. </p>\n\n<p>Il vous demandera aussi de tuer Bouniak le traître. Entrez dans l'asile et tuez Bouniak (robe et chapeau rouges). Retournez voir Forbin qui vous récompensera d'une <u><b>Fiole de Sang de Forbin </b></u>(cette fiole vous sera utile auprès de Dronus). </p>\n\n<p>Forbin vous demandera ensuite d'aller voir ce personnage nommé Dronus. Vous le trouverez dans une maison à côté du Mausolée <span class=\"coords-trigger cursor-pointer bg-slate-700/50 px-1.5 py-0.5 rounded text-cyan-400 border border-slate-600 hover:bg-cyan-500/20 transition-colors\" title=\"Cliquer pour copier\">(761, 1354, 0)</span>. Pour mémoire, le Mausolée est accessible depuis la cave de l'aveugle laquelle est située tout au nord de RD. </p>\n\n<p> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> </p>",
        "images": [],
        "order": 0
      }
    ],
    "credits": []
  },
  {
    "title": "Accès niveaux -2 -3 -4 Académie",
    "slug": "acces-niveaux-2-3-4-academie",
    "zone": "Académie",
    "prerequisites": [],
    "rewards": [],
    "npcs": [],
    "gold": "",
    "steps": [
      {
        "title": "Accès à la zone lvl 175 - 200 du Niveau -1",
        "description": "<ul>\n  <li>Vous devez avoir accès à l'Académie.</li> <li>Il vous suffit ensuite d'atteindre le niveau 175 pour pouvoir franchir une des 4 portes qui mènent chacune à une des 4 zones 175+.</li> <li>Facile ... non ?</li>\n</ul>",
        "images": [],
        "order": 0
      },
      {
        "title": "Quête d'accès à l'Académie Niveau -2 (le chevalier ténébreux)",
        "description": "<ul>\n  <li>Vous devez avoir accès à l'Académie niveau -1.</li> <li>Trouvez un coffre dans une des zones pour niveau 175+ (il y en a un dans chaque zone), vous devez le camper jusqu'à obtenir un <span class=\"text-amber-400 font-bold\">\"Parchemin des ténèbres\"</span> (vous avez le temps entre les niveaux 175 et 200).</li> <li>Quand vous utiliserez le parchemin (vers le level 200), il fera apparaître le <span class=\"text-amber-400 font-bold\">\"Chevalier Ténébreux\"</span> dans la zone ou vous êtes. Faites vous aider.</li> <li><b>Avec l'aide d'un petit groupe solide</b>, attaquez-le (collez-le bien et faites le ménage d'abord). Quand vous l'aurez tué il réapparaîtra automatiquement dans les autres zones. Vous devrez le tuer dans les 4 zones (un seul parchemin suffit).</li> <li>Lorsque vous tuez le Chevalier ténébreux un message apparaît : <span class=\"text-amber-400 font-bold\">\"Le chevalier ténébreux s'empare de votre Ame...\"</span>. Vous devez voir ce message dans chaque zone pour que la quête soit complète. S'il n'apparaît pas dans une zone, tuez à nouveau le Chevalier dans la zone concernée suffira, même si c'est avec un autre groupe.</li> <li>Une fois le Chevalier Ténébreux tué dans les 4 zones, rendez vous au milieu de l'Académie et cliquez sur le Puits. \n<ul>\n  <li><span class=\"text-amber-400 font-bold\">\"Le puits absorbe les ténèbres de votre âme.....\"</span></li>\n</ul>\n</li> <li>Vous avez désormais accès au 2ème niveau de l'Académie, les escaliers pour y descendre se trouvent au bout de chaque salle d'XP des zones 175+. Vous devez être niveau 200 pour franchir la porte.</li>\n</ul>\n\n<ul>\n  <li><span class=\"text-amber-400 font-bold\">\"Le puits absorbe les ténèbres de votre âme.....\"</span></li>\n</ul>\n\n<p>N.B 1 : Vous pouvez réaliser la quête en groupe, tous les membres du groupe participants aux combats contre le Chevalier Ténébreux auront accès à L'Académie niveau -2. </p>\n\n<p>N.B.2 : Pour les soigneurs du groupe : Vous devez obligatoirement frapper au moins une fois le Chevalier dans chaque zone pour que la quête vous soit validée. </p>\n\n<p>N.B.3 : Les Chevaliers disparaissent au bout d'une heure s'il ne sont pas tués. </p>",
        "images": [],
        "order": 1
      },
      {
        "title": "Quête d'accès à l'Académie Niveau -3",
        "description": "<ul>\n  <li>Vous devez avoir accès à l'Académie niveau -2.</li>\n</ul>\n\n<ul>\n  <li>Allez parler au PNJ Ataniel Claren situé dans une maison aux Yétis de la serre <span class=\"coords-trigger cursor-pointer bg-slate-700/50 px-1.5 py-0.5 rounded text-cyan-400 border border-slate-600 hover:bg-cyan-500/20 transition-colors\" title=\"Cliquer pour copier\">(410,2750,6)</span>, il vous demandera de tuer des douzaines de montres.</li> <li>Allez tuer environ 50 monstres du niveau -2 puis retournez parler à Ataniel qui vous remettra la Baguette d'Ataniel afin de tuer l'Atrocité mutante (skin Rejeton du Chaos).</li> <li>Faites une macro avec la baguette d'Ataniel. Cela vous permettra de lancer le sort de la baguette.</li> <li>L'atrocité est située dans la zone des vipères (à l'Est des yétis). Montez vers le Nord après l'entrée (560,2595,6 environ). Pour la tuer, vous devez utiliser la macro <b>de loin</b> rapidement et plusieurs fois.</li> <li><b>Attention :</b> dès que vous la voyez ne traînez pas car <b>elle dépop rapidement si vous ne l'attaquez pas</b>.</li> <li><b>Attention</b> : <b>lancez le sort <u>de loin</u> avec votre macro</b> jusqu'à ce qu'elle soit morte ! Si vous vous approchez trop près vous serez téléporté à votre sanctuaire (vivant) et l'atrocité dépopera (respawn environ 20 minutes).</li>\n</ul>\n\n<ul>\n  <li>Retournez voir Ataniel Claren pour votre récompense : \n<ul>\n  <li>accès à l'Académie niveau -3</li> <li><b>3G xp</b>.</li>\n</ul>\n</li>\n</ul>\n\n<ul>\n  <li>accès à l'Académie niveau -3</li> <li><b>3G xp</b>.</li>\n</ul>",
        "images": [],
        "order": 2
      },
      {
        "title": "Quête d'accès à l'Académie Niveau -4",
        "description": "<ul>\n  <li>Vous devez avoir accès à l'Académie niveau -3.</li> <li>Munissez-vous d'un parchemin de rappel puis allez parler au PNJ Dradus situé dans une maison aux Yétis de la serre <span class=\"coords-trigger cursor-pointer bg-slate-700/50 px-1.5 py-0.5 rounded text-cyan-400 border border-slate-600 hover:bg-cyan-500/20 transition-colors\" title=\"Cliquer pour copier\">(450,2730,6)</span>. Dites lui <span class=\"text-amber-400 font-bold\">\"mur\"</span> puis poursuivez le dialogue jusqu'à lui remettre le parchemin pour qu'il puisse s'échapper.</li> <li>Parlez ensuite à Kelmar Taniel dans la même maison. Il vous demandera alors de lui rapporter les ingrédients suivants :</li>\n</ul>\n\n<p><i>- Bulbe de l'éveillé (drop Larve sanglante)</i> </p>\n\n<p><i>- Ecume de larve toxique (drop Larve toxique)</i> </p>\n\n<p><i>- Globe oculaire (drop Lérot)</i> </p>\n\n<p><i>- Nerf sciatique (drop Scolopendre)</i> </p>\n\n<p><i>- Pierre de dérobade (drop Soldat d'outre-tombe)</i> </p>\n\n<ul>\n  <li>Une fois les 5 objets en votre possession, rendez-vous près de Kelmar, cliquez simplement dessus puis cliquez tout de suite sur Dradus. Vous serez téléporté dans sa cellule. Attaquez-le de suite.</li> <li><b>Attention ! Vous devrez le tuer en moins de 3 minutes</b> (prenez soin d'avoir avec vous des potions Hyper pour vous booster - surtout en paladin/guerrier -, ainsi que des potions critiques).</li> <li>Si vous dépassez le temps, vous aurez une quête supplémentaire à effectuer : \n<ul>\n  <li>Rapporter 1 moustache vibratoire, 1 corpuscule de résurrection, 1 venin de scorpion, 1 aile de gargouille, 1 pierre de majesté. Puis toujours en moins de 3 minutes tuer Dradus.... Bon courage...</li>\n</ul>\n</li> <li>Une fois Dradus tué, reparlez à Kelmar, il vous demandera d'aller tuer Iliana Valress. Elle va apparaître à ce moment sur son spot.</li> <li>Allez aux Vipères Terrifiantes, au nord-est du petit lac <span class=\"coords-trigger cursor-pointer bg-slate-700/50 px-1.5 py-0.5 rounded text-cyan-400 border border-slate-600 hover:bg-cyan-500/20 transition-colors\" title=\"Cliquer pour copier\">(630,2585,6)</span>, trouvez Iliana Valress (si vous ne la trouvez pas sur place, cherchez-la au Sud ou encore au Nord-Ouest, elle bouge beaucoup) cliquez sur elle puis tuez la. Le médaillon d'accès se retrouvera alors dans votre inventaire. Faites vous aider, surtout pour nettoyer la zone.</li> <li>Retournez parler à Kelmar puis cliquez sur Dradus, vous obtiendrez votre récompense : \n<ul>\n  <li><b>Accès au niveau -4 de l'Académie</b></li> <li><b>10G xp</b></li> <li><b>5M de pièces d'or</b></li>\n</ul>\n</li> <li>Pour vous rendre au -4, allez dans l'octogone au centre du -3. Puis, en sortant par la porte nord-ouest, cliquez sur la statue.</li>\n</ul>\n\n<ul>\n  <li>Rapporter 1 moustache vibratoire, 1 corpuscule de résurrection, 1 venin de scorpion, 1 aile de gargouille, 1 pierre de majesté. Puis toujours en moins de 3 minutes tuer Dradus.... Bon courage...</li>\n</ul>\n\n<ul>\n  <li><b>Accès au niveau -4 de l'Académie</b></li> <li><b>10G xp</b></li> <li><b>5M de pièces d'or</b></li>\n</ul>\n<p >T4C NMS Révolution, Accès -4 les deux boss</p>\n\n<p> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> </p>",
        "images": [
          "/t4c-nms-overview/assets/quests/acces-niveaux-2-3-4-academie/img_3_0.jpg"
        ],
        "order": 3
      }
    ],
    "credits": []
  },
  {
    "title": "Armure de plaque incrustée d'émeraudes",
    "slug": "armure-de-plaque-incrustee-demeraudes",
    "zone": "Général",
    "prerequisites": [],
    "rewards": [],
    "npcs": [],
    "gold": "",
    "steps": [
      {
        "title": "Présentation",
        "description": "<p>Avec 140 endurance et +41 de CA, cette armure est plutôt destinée aux jeteurs de sort car elle donne un bonus de +10 dans toutes les puissances. Elle n'est pas trop à la mode car on pourra lui préférer les vêtements ou armures spécialisés. </p>",
        "images": [],
        "order": 0
      },
      {
        "title": "Obtention",
        "description": "<p>Ramassez des émeraudes reluisantes sur les golems d'émeraudes que vous trouverez sur les terres des skraugs rouges ou bien sur leur île, au nord des skraugs verts. Au nord de cette petite île, vous trouverez un homme en armure de plaque verte, il vous proposera de forger une partie de l'armure en échange de 80k et de 1 à 3 émeraudes reluisantes. Pour ce faire annoncer le nombre d'émeraude que vous souhaitez fournir pour la fabrication. Moins vous en donnerez, plus la fabrication a de chance d'échouer. </p>\n\n<p>Afin d'obtenir les jambieres ou le plastron, il est nécessaire de lui fournir 3 émeraudes reluisantes. </p>\n\n<p><b><span class=\"text-amber-400 font-bold\">\"Balzak\"</span> donne 1M XP en récompense de la fabrication d'une pièce d'armure émeraude.</b> </p>\n\n<p>Taux de réussite, environ 30% en donnant 3 émeraudes. Si échec vous perdez l'or et pas d'XP. </p>\n\n<p> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> </p>",
        "images": [],
        "order": 1
      }
    ],
    "credits": []
  },
  {
    "title": "Armure Métrolite",
    "slug": "armure-metrolite",
    "zone": "Général",
    "prerequisites": [],
    "rewards": [],
    "npcs": [],
    "gold": "",
    "steps": [
      {
        "title": "Armure Métrolite",
        "description": "<p>Parlez à Eiden. Vous le trouverez en face du temple, dans une échoppe située près de Veronica la marchande de potions de DI, il vous expliquera qu'il peut vous fabriquer cette armure au prix de 200 000 pièces d'or et de 1 à 3 restes d'acier métrolite par partie. Vous aurez un morceau aléatoire de l'armure si la confection réussit. </p>\n\n<p>La différence entre <span class=\"text-amber-400 font-bold\">\"un\"</span> et <span class=\"text-amber-400 font-bold\">\"deux\"</span> est le taux de réussite (supérieur avec deux). En effet, il est tout à fait possible qu'Eiden ne réussisse pas à tirer quoi que ce soit des restes d'acier métrolite que vous lui rapporterez. Si vous en fournissez trois, le taux de réussite est encore supérieur mais vous pouvez aussi obtenir le plastron ou les jambières (ce qui n'est pas le cas avec les options précédentes). </p>\n\n<p>Chaque essai, que ce soit avec un, deux ou trois restes, vous coûtera 200 000 pièces d'or. Vous trouverez les restes en tuant les B'Zurkhans (autour d'un lac à l'Ouest de RedWall). </p>\n\n<p>La quête peut être effectuée à volonté. </p>\n\n<p>Récompense : </p>\n\n<ul>\n  <li>Soit plastron d'armure métrolite.</li> <li>Soit jambières d'armure métrolite.</li> <li>Soit gants d'armure métrolite.</li> <li>Soit heaume d'armure métrolite.</li> <li>Soit ceinture d'armure métrolite.</li> <li>Soit bottes d'armure métrolite.</li> <li>Soit rien du tout.</li>\n</ul>",
        "images": [],
        "order": 0
      },
      {
        "title": "Bouclier Métrolite",
        "description": "<p>Pour le bouclier Métrolite, vous aurez besoin de 4 morceaux d'or (drop des démons incultes) et 5 restes d'acier métrolite (drop des B'Zurkhans) et d'un bouclier B'Ronkhanique (drop des drakes B'Ronkhans). </p>\n\n<p>Dites <span class=\"text-amber-400 font-bold\">\"bouclier\"</span> à Eiden. Si l'opération réussit, le skin de votre bouclier sera accordé à votre armure (personnellement je ne l'aime pas trop). En cas d'échec, vous récupérez votre bouclier d'origine. </p>\n\n<p><b>Eiden vous donnera 10M XP s'il réussit la fabrication d'une partie d'armure métrolite.</b> </p>\n\n<p><b>Note :</b> Vous remarquerez, si ce n'est déjà fait, que les boosts sont les mêmes. Vous échangerez donc le B'Ronkhanique contre le Métrolite uniquement pour le look. Ci-contre les deux descriptions identiques avec leur skin respectif. A vous de choisir. </p>\n\n<p><br/></p>\n\n<p> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> </p>",
        "images": [
          "/t4c-nms-overview/assets/quests/armure-metrolite/img_1_0.jpg",
          "/t4c-nms-overview/assets/quests/armure-metrolite/img_1_1.jpg"
        ],
        "order": 1
      }
    ],
    "credits": []
  },
  {
    "title": "Audrey la couturière",
    "slug": "audrey-la-couturiere",
    "zone": "Général",
    "prerequisites": [],
    "rewards": [],
    "npcs": [],
    "gold": "",
    "steps": [
      {
        "title": "La quête d'Audrey la couturière (robe de couleur)",
        "description": "<p>Cette quête permet d'obtenir une robe de couleur ainsi que 80.000 xp (quête non répétable). </p>\n\n<ul>\n  <li>10 potions de guérison légère</li> <li>5 potions de mana</li> <li>2 diamants (vous trouverez un coffre dropant un diamant chez le bourgmestre de Windhowl et un second aux Druides, au Nord-Est du camp du commandant Owain, au bord de l'eau)</li> <li>25 000 pièces d'or</li>\n</ul>\n\n<p>Il faudra aussi que le garde soit distrait par vous ou par un comparse : </p>",
        "images": [
          "/t4c-nms-overview/assets/quests/audrey-la-couturiere/img_0_0.jpg",
          "/t4c-nms-overview/assets/quests/audrey-la-couturiere/img_0_1.jpg"
        ],
        "order": 0
      },
      {
        "title": "Méthode Solo",
        "description": "<p>Préparez les mots-clefs (<span class=\"text-amber-400 font-bold\">\"Nécessaire\"</span>, <span class=\"text-amber-400 font-bold\">\"Distraire\"</span>). Dites le mot-clef <b><span class=\"text-amber-400 font-bold\">\"Distraire\"</span></b> au gardien. A partir de ce moment il vous reste 5 secondes avant d'être téléporté(e) en prison. Dites le mot-clef <b><span class=\"text-amber-400 font-bold\">\"nécessaire\"</span></b> à Audrey. A ce moment si vous avez les ingrédients sur vous, vous gagnez 80.000 xp et Audrey vous remet la robe, puis vous allez en prison. Vous devez être rapide pour que cela fonctionne en solo mais c'est faisable. Entrez les mots-clefs avant de commencer et utilisez <b>CTRL+HAUT</b> pour les répéter rapidement. </p>",
        "images": [],
        "order": 1
      },
      {
        "title": "Méthode Coopérative",
        "description": "<p>Vous aurez besoin de l'aide d'un comparse qui distraira le garde en lui disant le mot-clef <b><span class=\"text-amber-400 font-bold\">\"Distraire\"</span></b>, et c'est lui qui sera téléporté en prison pendant 10 minutes, il pourra tout de même s'échapper immédiatement s'il le désire grâce à la RST, Mot de rappel ou un Parchemin. Dites ensuite les mot-clefs <b><span class=\"text-amber-400 font-bold\">\"Nécessaire\"</span></b> puis <b><span class=\"text-amber-400 font-bold\">\"oui\"</span> </b>à Audrey (en moins de 5 secondes là aussi), elle vous remettra une robe si vous avez les ingrédients et l'or sur vous. </p>\n\n<p><b>Récompenses:</b> Une robe de couleur aléatoire parmi Brunie, Rose, Bleutée, Jaune ou Orangée (<u>Bonus</u> : +5 Int +5 Sag +2 CA -25 Esquive, <u>Prérequis</u> 12 End 28 Sag 28 Int) . </p>\n\n<p>Vous gagnerez aussi 80.000 xp de récompense. </p>\n\n<p><br/><b>P.S.</b> Si vous avez envie de calmer les nerfs du garde après avoir eu la robe, vous pouvez compléter la quête <span class=\"text-amber-400 font-bold\">\"Le Gardien et les yeux de tarentules\"</span>! </p>\n\n<p><b>Cette quête ne peut être effectuée qu'une seule fois.</b> </p>\n\n<p> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> </p>",
        "images": [],
        "order": 2
      }
    ],
    "credits": []
  },
  {
    "title": "Coffres de l'Académie",
    "slug": "coffres-de-lacademie",
    "zone": "Académie",
    "prerequisites": [],
    "rewards": [],
    "npcs": [],
    "gold": "",
    "steps": [
      {
        "title": "Académie - 1",
        "description": "<p>4 coffres sont situés niveau Académie -1 (repop ?) </p>\n\n<p>Ils dropent : </p>\n\n<ul>\n  <li>Parchemin des ténèbres (pour la quête d'accès Académie-2)</li> <li>Potions</li>\n</ul>",
        "images": [],
        "order": 0
      },
      {
        "title": "Académie - 2",
        "description": "<ul>\n  \n  <li>\n<p><b>Le coffre de l'Académie -2 est situé aux embaumés</b> (repop 15 minutes seul / 30 minutes à deux) : </p>\n\n<p>-Items RP (balai, ciseaux....)</li>\n  <li>-Perle de pluie (environ une fois sur deux)</li>\n  <li>-Parchemin d'xp de 10 minutes (rare) </p>\n</li>\n\n</ul>",
        "images": [],
        "order": 1
      },
      {
        "title": "Académie -4",
        "description": "<p>En plus des nombreux coffres du donjon du Cerberus, vous trouverez au -4 les coffres iridium et les coffres ivoire </p>\n\n<p> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> </p>",
        "images": [],
        "order": 2
      }
    ],
    "credits": []
  },
  {
    "title": "Crypte de Stonecrest",
    "slug": "crypte-de-stonecrest",
    "zone": "Stoneheim",
    "prerequisites": [],
    "rewards": [],
    "npcs": [],
    "gold": "",
    "steps": [
      {
        "title": "La crypte du Lord Stonecrest",
        "description": "<p>Le Lord Stonecrest permet d'obtenir toutes les parties de l'<b>Armure de Plaque Océane</b> (125 endu), le <b>Coeur de l'Océan</b> ainsi que l'<b>Amulette du Héros</b>. </p>\n\n<p>Les invocations du Lord dropent parfois une <b>Cape d'Élémendil</b> (le Lord invoque lorsqu'il attaqué au corps à corps). </p>",
        "images": [],
        "order": 0
      },
      {
        "title": "Cheminement à suivre",
        "description": "<p>Il suffit de suivre les numéros (1 à 13) des <b>flèches vertes</b> dans l'ordre pour arriver au puits qui vous mènera vers le tombeau du Lord. </p>\n\n<p>Les flèches jaunes quant à elles servent uniquement à se rendre aux différents coffres (sans grand intérêt). </p>\n\n<p>Une fois arrivé au puits (situé niveau gris au point 13 des flèches vertes), cliquez sur celui-ci. </p>\n\n<p>Vous recevrez <b>1 Clef couverte de rosée</b>. </p>\n\n<p>Au même moment, vous serez téléporté au niveau du tombeau du Lord Stonecrest, dans une salle contenant 5 coffres. </p>",
        "images": [],
        "order": 1
      },
      {
        "title": "Option particulière à NMS",
        "description": "<p><b>Attention : ici, si vous êtes venus pour conserver la clé de rosée pour la vendre à un autre joueur (elle peut servir à ouvrir un coffre ivoire), il faut à ce moment quitter la crypte et déposer la clé de rosée (par exemple dans votre coffre de SH) avant de recommencer la prochaine tournée.</b> </p>\n\n<p>Suite habituelle : Si vous poursuivez l'accès au Lord, la clef pour accéder au Lord Stonecrest est cachée aléatoirement dans 1 des 5 coffres. </p>\n\n<p>Votre <b>Clef couverte de rosée</b> peut ouvrir seulement 1 de ces 5 coffres et se réduira en poussière après utilisation. </p>\n\n<p>La clef en os effritée permettant d’accéder au tombeau du Lord restera dans le même coffre jusqu'à ce qu'un joueur la trouve. </p>\n\n<p>Une fois la clé trouvée rendez-vous au au tombeau du Lord, ouvrez-le pour faire apparaître le Lord, combattez-le (éventuellement au CAC pour ne pas le tuer trop vite et le faire invoquer si vous cherchez la cape <b>d'Élémendil</b> ) et espérez des drops !! </p>\n\n<p>Le temps de respawn du Lord est de 30 minutes. </p>",
        "images": [],
        "order": 2
      },
      {
        "title": "Niveau Gris",
        "description": "<p><br/></p>",
        "images": [
          "/t4c-nms-overview/assets/quests/crypte-de-stonecrest/img_3_0.jpg"
        ],
        "order": 3
      },
      {
        "title": "Niveau Vert",
        "description": "<p><br/></p>",
        "images": [
          "/t4c-nms-overview/assets/quests/crypte-de-stonecrest/img_4_0.jpg"
        ],
        "order": 4
      },
      {
        "title": "Niveau Violet",
        "description": "<p><br/></p>",
        "images": [
          "/t4c-nms-overview/assets/quests/crypte-de-stonecrest/img_5_0.jpg"
        ],
        "order": 5
      },
      {
        "title": "Niveau Bleu",
        "description": "<p><br/></p>",
        "images": [],
        "order": 6
      },
      {
        "title": "Tombeau du Lord",
        "description": "<p><br/></p>\n\n<p> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> </p>",
        "images": [],
        "order": 7
      }
    ],
    "credits": []
  },
  {
    "title": "Donjon du Cerberus",
    "slug": "donjon-du-cerberus",
    "zone": "Général",
    "prerequisites": [],
    "rewards": [],
    "npcs": [],
    "gold": "",
    "steps": [
      {
        "title": "Présentation",
        "description": "<p>Dans le donjon du CERBERUS, votre but sera d'obtenir les 22 clefs qui permettront d'accéder à la salle du Boss ultime CERBERUS, puis de le capturer (le tuer avec le sceptre de capture) pour -enfin- terminer la quête de l'Académie et obtenir la récompense finale : 10G d'xp et 10 parchemins d'xp doublée d'1 heure. </p>\n\n<p>Il drope aussi des items très intéressants... </p>\n\n<p>Dans ce donjon original vous allez vous éclater avec les 22 épreuves à passer pour obtenir les 22 clés qui permettent de franchir le portail d'accès au CERBERUS. </p>",
        "images": [],
        "order": 0
      },
      {
        "title": "Le plan du Donjon du CERBERUS",
        "description": "",
        "images": [
          "/t4c-nms-overview/assets/quests/donjon-du-cerberus/img_1_0.jpg"
        ],
        "order": 1
      },
      {
        "title": "Les potions d'Evalcian",
        "description": "<p>Evalcian vend diverses potions dont plusieurs seront utiles durant votre quête. Elles vous éviteront d'être malade, téléporté ou même de mourir. </p>\n\n<p>Evalcian vend aussi des potions de guérison extrêmes. Elles soignent deux fois plus que les critiques mais pèsent deux fois plus lourd .... </p>\n\n<p><u>Attention</u> : Si vous voulez boire une seconde potion d'immunisation identique à celle en cours, il vaut mieux, pour qu'elle soit prise en compte, attendre que la précédente soit terminée. Mais n'oubliez pas de quitter la salle dangereuse un instant ! </p>\n\n<p>- <b>Inertie : salle clé 10</b> : Si vous n'avez pas bu une '<u>Potion d'inertie</u>' alors votre personnage sera téléporté à l'entrée du niveau -4 après 10 secondes. </p>\n\n<p><u>Attention</u> : Si vous voulez boire une seconde potion d'immunisation (ou d'inertie) identique à la première, il vaut mieux, pour être certain qu'elle soit prise en compte, attendre que la première soit terminée. Mais n'oubliez pas de quitter la salle dangereuse un instant ! </p>\n\n<p><b>Les durées d'efficacité sont les suivantes :</b> </p>\n\n<p><u>Mineure</u> = 60 secondes. <u>Standard</u> = 30 minutes. <u>Majeure</u> = 60 minutes. </p>",
        "images": [
          "/t4c-nms-overview/assets/quests/donjon-du-cerberus/img_2_0.jpg",
          "/t4c-nms-overview/assets/quests/donjon-du-cerberus/img_2_1.jpg"
        ],
        "order": 2
      },
      {
        "title": "Les 22 Clefs",
        "description": "<p>Là on s'attaque au principal ! Vous devez obtenir les clefs de chair de 1 à 22 pour pouvoir passer le portail d'accès au Cerberus situé en salle de la clé de chair #22. </p>\n\n<p><br/></p>",
        "images": [],
        "order": 3
      },
      {
        "title": "Clef de chair durcie #1",
        "description": "<p>Juste après l'entrée du donjon, vous trouverez des baffreurs qui n'ont qu'une envie, vous abreuvez de flèches très douloureuses ! Tuez les jusqu'à obtenir la clef 1. Attention c'est facile à dire mais ils sont forts et se multiplient vite. Un peu d'aide sera vite bien utile... </p>\n\n<p><br/></p>",
        "images": [],
        "order": 4
      },
      {
        "title": "Clef de chair durcie #2",
        "description": "<ul>\n  \n  <li>\n<p>Entrez maintenant dans la salle au SE des baffreurs. Passez juste la porte sans avancer plus. Un minimum de dextérité dans la manipulation du pavé numérique sera nécessaire !! </p>\n\n<p>Donc, sur ce pavé numérique (en mode déplacement - utilisez la touche <span class=\"text-amber-400 font-bold\">\"verr num\"</span> ou <span class=\"text-amber-400 font-bold\">\"num lock\"</span> pour passer du mode numérique au mode déplacement , et inversement) tapez la combinaison suivante jusqu’à arriver au coffre : </p>\n\n<p>9 - 8 - 9 </p>\n\n<p>Attention il faut être bien placé au départ sinon vous vous retrouvez au milieu des baffreurs qui ne vont pas chômer et vous attaquer !!</li>\n  <li>Une fois à côté du coffre SURTOUT ne bougez plus :) Cliquez sur le coffre et la clef #2 (ou plus généralement une potion - hélas) tombera au sol. Le Repop du coffre est de 20 minutes (irl) seul, et de 10 minutes (irl) à 2. </p>\n\n<p></li>\n  <li></p>\n<p >Clé de chair 3 (by TELLAH)</p>\n</li>\n\n</ul>",
        "images": [],
        "order": 5
      },
      {
        "title": "Clef de chair durcie #3",
        "description": "<ul>\n  \n  <li>\n<p>Pour cette clé vous serez toujours voisin de ces charmants baffreurs. </p>\n\n<p>Entrez dans la salle au NO desdits baffreurs. </p>\n\n<p>Vous y trouverez 7 coffres. Deux cartes différentes sont là pour vous aider à ouvrir les coffres dans le bon ordre sans déraper ! </p>\n\n<p><u>1ère solution</u> : Ouvrez les coffres l'un après l'autre en prenant le chemin marqué en rouge menant à chacun des coffres, numérotés de 1 à 7. Un éclair apparaît si vous avez bien ouvert le bon coffre. La clef de chair #3 tombera directement dans votre inventaire après ouverture du septième coffre. </p>\n<p >Sauvé du forum by UQBAR</p>\n\n<p>Vous devrez vous déplacer contre le mur en périphérie de la pièce (attention il y a un piège en haut à gauche) sous peine de vous retrouver au milieu des baffreurs et de déguster leurs flèches!! Idem si vous déviez des chemins indiqués en rouges (prévoyez d'avoir toujours vos protections). </p>\n\n<p></li>\n  <li></p>\n\n<p><u>2ème solution</u> : Si vous avez le sens de l'orientation, utilisez la boussole et la carte détaillée ci-dessous qui donne les positions exactes par lesquelles il faut passer.</li>\n  <li><b>Carte Clef #3 détaillée</b> </p>\n\n<p>Cette deuxième carte vous donne avec précision toutes les cases par lesquelles vous devez passer pour arriver au plus près de chaque coffre pour l'ouvrir; et ceci sans déraper et vous retrouver au milieux des terribles baffreurs. </p>\n\n<p>Par exemple, pour le coffre 3 il faut démarrer de 160,458... </p>\n\n<p>Bravo si vous faites cette clé sans mourir... </p>\n\n<p>C'est quasi impossible si vous allé seul au casse-pipe !!</li>\n  <li></p>\n\n<p></li>\n  <li></p>\n<p >Clé de chair 4 (by ARTEMYS)</p>\n</li>\n\n</ul>",
        "images": [],
        "order": 6
      },
      {
        "title": "Clef de chair durcie #4",
        "description": "<ul>\n  \n  <li>\n<p>Un clé simple si vous ne faites pas d'erreur (évidemment) </p>\n\n<p>Il faut cliquer sur les bons portails dans le bon ordre (voir plan ci-contre). </p>\n\n<p>1 - Portail sous les rochers</li>\n  <li>2 - Portail au nord-est</li>\n  <li>3 - Portail le plus à l'ouest</li>\n  <li>4 - Portail en face de la porte par laquelle on arrive avec la clef de chair durcie #3</li>\n  <li>5 - Portail au sud-est du premier. </p>\n\n<p>Si vous vous trompez , ne reprenez pas au début mais à celui que vous avez loupé ! </p>\n\n<p>Attention : si vous cliquez au mauvais moment sur le portail N°1 vous serez téléportés à votre sanctuaire. Et d'autres portails sont piégés (sort de feu). </p>\n\n<p></li>\n  <li></p>\n</li>\n\n</ul>",
        "images": [],
        "order": 7
      },
      {
        "title": "Clef de chair durcie #5",
        "description": "<ul>\n  \n  <li>\n<p>Gare aux baffreurs... les vers sont moins méchants mais méfiez-vous. </p>\n\n<p>Entrez légèrement dans la salle de la clé #2 puis rendez vous dans la salle au SE : </p>\n\n<p>faites 1-7-7-2-6 ou 4-7-7-2-6 au pavé numérique selon votre position initiale </p>\n\n<p>Si vous allez trop loin ou si votre position initiale est mauvaise... vous êtes bon pour une visite aux baffreurs !! </p>\n\n<p>Une fois arrivé dans la salle au SE, Il vous faut tuer des vers enfouis pour récupérer la clef #5 au sol.</li>\n  <li>Attention, il faut les tuer à distance sinon ils explosent. A faire en petit groupe. Une aide est même obligatoire pour les CAC qui ne savent pas tuer à distance. </p>\n\n<p></li>\n  <li></p>\n</li>\n\n</ul>",
        "images": [],
        "order": 8
      },
      {
        "title": "Clef de chair durcie #6",
        "description": "<ul>\n  \n  <li>\n<p>Gare aux baffreurs... les vers sont moins méchants mais méfiez-vous. </p>\n\n<p>Allez dans la salle de la clef de chair #3, puis se rendre (en longeant les murs côté nord) dans la salle au NO. Attention à rester bien collé au mur sinon visite aux baffreurs !! </p>\n\n<p>Ensuite tuez des vers enfouis pour récupérer la clef #6 au sol.</li>\n  <li>Attention, il faut les tuer de près, pas facile non plus. Pour activer le repop des vers, sortez de la salle et switchez de perso. Reswitchez pour revenir. Ensuite attendez sagement derrière la porte qu'ils se regroupent au plus près avant d'entrer dans la salle, ce qui évitera de les faire exploser. </p>\n\n<p></li>\n  <li></p>\n</li>\n\n</ul>",
        "images": [],
        "order": 9
      },
      {
        "title": "Clef de chair durcie #7",
        "description": "<p>Ici pas de baffreurs mais un anneau !! </p>\n\n<p>Il faut avoir la clef #6 et un anneau de cerfeuil. L'anneau se drope sur les Démonicons, sur la petite île au dessus du camp gob d'Arakas (ancienne île aux deux ponts). Il peut aussi être crafté par un bijoutier (recette level 18, un bijoutier vous fera ça si vous trouvez les ingrédients), et enfin vous pouvez l'obtenir en échange de 3000 fèves de bronze au salon de jeu, idéalement en mage feu pour mieux massacrer le Celleniem.<br/>Parlez à Evalcian. Mot clef : <span class=\"text-amber-400 font-bold\">\"trésor\"</span> </p>\n\n<p>Une clé hyper facile .... si vous avez un anneau de cerfeuil.... sinon voyez votre guilde/famille car les Démonicons droppent cet anneau tous les 107 ans (environ)... et 3000 fèves c'est beaucoup !! Vous pouvez aussi réunir les ingrédients ... </p>\n\n<p><br/></p>\n\n<p><b><u>Clef de chair durcie #8</u></b> </p>\n\n<p>Une clé collaborative... (vous pouvez commencer par la 9 si tout est bloqué à la 8). </p>\n\n<p>Le principe de base est d'activer les trois leviers de la salle pour déverrouiller le coffre. Un même joueur ne peut activer un levier qu'une fois par heure IG (que ce soit pour clé #8 ou clé #9) mais si vous êtes 3, les trois leviers peuvent être activés directement... </p>\n\n<p>Cliquez d'abord sur le coffre.<br/>Cliquez ensuite chacun sur un des 3 leviers l'un après l'autre. Un message s'affiche pour chaque levier : </p>\n\n<ul>\n  <li><span class=\"text-amber-400 font-bold\">\"Le levier semble bloqué...\"</span> -&gt; il faut attendre 1 heure IG ou le faire ouvrir par un autre joueur (vous aurez aussi ce message quand la clé est disponible mais vous avez oublié de cliquer sur le coffre).</li> <li><span class=\"text-amber-400 font-bold\">\"Vous actionnez le levier mais rien ne se produit\"</span> -&gt; il est activé mais tous ne sont pas activés.</li> <li>\"Vous actionnez le levier ce qui semble enclencher un mécanisme -&gt; le 3ème levier est activé (celui près de la porte) et c'est tout bon.</li>\n</ul>\n\n<p><br/>Enfin recliquez sur le coffre pour obtenir la clef #8 directement dans votre inventaire. </p>\n\n<p><b>IMPORTANT</b> : Comme vous le savez, il y a deux salles de 3 leviers chacune (voir clef #9). Seulement il y a un petit hic sinon ce ne serait pas drôle. Les deux salles sont en fait connectées et <b>lorsque un levier est activé dans la salle clef #8, ça en désactive un dans la salle clé #9 et vice-versa</b>. Amusant non ? </p>\n\n<p><br/></p>",
        "images": [],
        "order": 10
      },
      {
        "title": "Clef de chair durcie #9",
        "description": "<p>Une clé collaborative... </p>\n\n<p>Comme pour la clef 8, le principe de base est d'activer les trois leviers de la salle pour déverrouiller le coffre. Un même joueur ne peut activer un levier qu'une fois par heure IG mais si vous êtes trois, les trois leviers peuvent être activés directement. Cela vaut pour les deux salles donc <b>si vous venez d'activer un levier pour la clé #8 il vous faudra attendre 1 heure IG même pour la clé #9 et vice-versa.</b><br/>Cliquez d'abord sur le coffre. Cliquez sur les 3 leviers l'un après l'autre. Un message s'affiche pour chaque levier : </p>\n\n<ul>\n  <li><span class=\"text-amber-400 font-bold\">\"Le levier semble bloqué...\"</span> -&gt; il faut attendre 1 heure IG ou le faire ouvrir par un autre joueur (vous aurez aussi ce message quand la clé est disponible mais vous avez oublié de cliquer sur le coffre).</li> <li><span class=\"text-amber-400 font-bold\">\"Vous actionnez le levier mais rien ne se produit\"</span> -&gt; il est activé mais tous ne sont pas activés.</li> <li>\"Vous actionnez le levier ce qui semble enclencher un mécanisme -&gt; Le 3ème levier est activé et c'est tout bon.</li>\n</ul>\n\n<p><br/>Enfin recliquez sur le coffre pour obtenir la clef 9 directement dans votre inventaire. </p>",
        "images": [],
        "order": 11
      },
      {
        "title": "Clef de chair durcie #10",
        "description": "<ul>\n  \n  <li>\n<p>Un peu de camping... </p>\n\n<p><b>Attention !</b> Vous devez être immunisé contre la téléportation (potion d'inertie ou d'inertie majeure d'Evalcian) pour rentrer dans cette salle au NO de la salle aux 3 leviers de la clé 8 (sinon vous êtes téléporté au début du -4).</li>\n  <li>Il faut camper les trois petits coffres pour avoir les clefs rouillées du donjon 1 puis 2 puis 3 pour enfin ouvrir le coffre au milieu et faire tomber (peut-être) au sol la clé #10.</li>\n  <li>Temps de repop : petits coffres 10 minutes / gros coffre 20 minutes (seul), 10 minutes (à deux). </p>\n\n<p><u>Attention</u> : Si vous voulez boire une seconde potion identique, il vaut mieux, pour qu'elle soit prise en compte, attendre que la précédente soit terminée. Mais n'oubliez pas de quitter la salle dangereuse un instant ! </p>\n\n<p></li>\n  <li></p>\n</li>\n\n</ul>",
        "images": [],
        "order": 12
      },
      {
        "title": "Clef de chair durcie #11",
        "description": "<ul>\n  \n  <li>\n<p>Un peu de camping... </p>\n\n<p><b>Attention !!</b> Vous devez être immunisé contre le glas (potion d'immunisation contre le glas d'Evalcian) pour rentrer dans cette pièce au SE de la salle aux 3 leviers de la clef 9 (sinon vous mourez... et droppez!). En cas d'oubli vous avez quelques secondes pour recall ou boire votre potion.</li>\n  <li>Il faut camper les trois petits coffres pour avoir les clefs rouillées du donjon 4 puis 5 puis 6 pour enfin ouvrir le coffre au milieu et faire tomber (peut-être) au sol la clef #11.</li>\n  <li>Temps de repop : petits coffres 10 minutes / gros coffre 20 minutes (seul), 10 minutes (à deux). </p>\n\n<p><u>Attention</u> : Si vous voulez boire une seconde potion identique, il vaut mieux, pour qu'elle soit prise en compte, attendre que la précédente soit terminée. Mais n'oubliez pas de quitter la salle dangereuse un instant ! </p>\n\n<p>Pour la suite vous aurez besoin de passez par les îles obsidiennes et /ou la grande salle </p>\n\n<p><b><u>Présentation de la grande salle (salle des dalles</u></b>) Pour vous rendre dans cette salle, vous devrez passer par les îles obsidiennes (voir plus loin) </p>\n\n<p><b>Le premier schéma donne l'emplacement et la couleur des dalles dans la grande salle</b> </p>\n\n<p>Selon le cas vous devrez marcher sur certaines dalles de couleurs numérotées. </p>\n\n<p>Le coffre petit côté donne la clé de chair #12. </p>\n\n<p>Le coffre central grand côté donne la clé de chair #13. </p>\n\n<p>A l'Ouest coffre iridium 1 (8B2V). </p>\n\n<p>A l'Est caché par le mur coffre iridium 2 (7B4V). </p>\n\n<p></li>\n  <li></p>\n\n<p><b><u>Présentation des îles obsidiennes</u></b> </p>\n\n<p>Le passage par les îles obsidiennes sera nécessaire pour obtenir certaines des clés de chair suivantes. </p>\n\n<p>L'accès aux îles obsidiennes se fait par la salle aux 4 tourbillons, ouverte par la clé#11, au-dessus du coffre clé#10. Ensuite vous devrez prendre le tourbillon sud caché par le mur pour vous trouver sur l'île obsidienne de départ (voir plan des îles plus bas). </p>\n</li>\n\n</ul>",
        "images": [],
        "order": 13
      },
      {
        "title": "Clef de chair durcie #12",
        "description": "<ul>\n  \n  <li>\n<p>Pour cette clé il faudra marcher beaucoup en allant d'une île obsidienne à l'autre comme il vous sera indiqué ! </p>\n\n<p>Vous devez vous procurer d'abord la clé obsidienne 19. Vous allez bien vous amuser car vous devrez commencer par trouver la clé obs 1 puis la clé obs 2 etc... jusqu'à la clé obs 19 !! </p>\n\n<p><b>Attention !</b> Vous devez être immunisé contre la téléportation (potion d'inertie ou inertie majeure d'Evalcian) pour faire cette clé car vous devrez passer par la salle clé #10 ! </p>\n\n<p>Après avoir pris le tourbillon caché par le mur Sud vous arrivez sur l'ile obsidienne de Départ <span class=\"coords-trigger cursor-pointer bg-slate-700/50 px-1.5 py-0.5 rounded text-cyan-400 border border-slate-600 hover:bg-cyan-500/20 transition-colors\" title=\"Cliquer pour copier\">(2242,1270,4)</span> avec les 3 premiers tourbillons (les directions à prendre pour se rendre à l'ile suivante sont données depuis l'ile antérieure). </p>\n\n<p>clef 1 (ile 2220,1209,4) : milieu</li>\n  <li>clef 2 (ile 2276,1250,4) : G - D - GG - D</li>\n  <li>clef 3 <span class=\"coords-trigger cursor-pointer bg-slate-700/50 px-1.5 py-0.5 rounded text-cyan-400 border border-slate-600 hover:bg-cyan-500/20 transition-colors\" title=\"Cliquer pour copier\">(2158,1118,4)</span> : G - D - G - DD - G</li>\n  <li>clef 4 <span class=\"coords-trigger cursor-pointer bg-slate-700/50 px-1.5 py-0.5 rounded text-cyan-400 border border-slate-600 hover:bg-cyan-500/20 transition-colors\" title=\"Cliquer pour copier\">(2247,1381,4)</span> : DD - G - DD</li>\n  <li>clef 5 <span class=\"coords-trigger cursor-pointer bg-slate-700/50 px-1.5 py-0.5 rounded text-cyan-400 border border-slate-600 hover:bg-cyan-500/20 transition-colors\" title=\"Cliquer pour copier\">(2264,1324,4)</span> : G - DD - G</li>\n  <li>clef 6 <span class=\"coords-trigger cursor-pointer bg-slate-700/50 px-1.5 py-0.5 rounded text-cyan-400 border border-slate-600 hover:bg-cyan-500/20 transition-colors\" title=\"Cliquer pour copier\">(2280,1135,4)</span> : DD - puis sortir aux baffreurs par GGG</li>\n  <li>clef 7 <span class=\"coords-trigger cursor-pointer bg-slate-700/50 px-1.5 py-0.5 rounded text-cyan-400 border border-slate-600 hover:bg-cyan-500/20 transition-colors\" title=\"Cliquer pour copier\">(2192,1163,4)</span> : milieu et G</li>\n  <li>clef 8 <span class=\"coords-trigger cursor-pointer bg-slate-700/50 px-1.5 py-0.5 rounded text-cyan-400 border border-slate-600 hover:bg-cyan-500/20 transition-colors\" title=\"Cliquer pour copier\">(2173,1314,4)</span> : D - GGGGG puis sortir par D salle des dalles grand côté puis baffreurs par tourbillon nord</li>\n  <li></p>\n\n<p></li>\n  <li>clef 9 <span class=\"coords-trigger cursor-pointer bg-slate-700/50 px-1.5 py-0.5 rounded text-cyan-400 border border-slate-600 hover:bg-cyan-500/20 transition-colors\" title=\"Cliquer pour copier\">(2259,1214,4)</span> : D</li>\n  <li>clef 10 <span class=\"coords-trigger cursor-pointer bg-slate-700/50 px-1.5 py-0.5 rounded text-cyan-400 border border-slate-600 hover:bg-cyan-500/20 transition-colors\" title=\"Cliquer pour copier\">(2310,1011,4)</span> : G-D puis sortir par D salle des dalles petit côté puis baffreurs par tourbillon </p>\n\n<p>clef 11 <span class=\"coords-trigger cursor-pointer bg-slate-700/50 px-1.5 py-0.5 rounded text-cyan-400 border border-slate-600 hover:bg-cyan-500/20 transition-colors\" title=\"Cliquer pour copier\">(2149,1053,4)</span> : GGGG puis sortir par G aux baffreurs</li>\n  <li>clef 12 <span class=\"coords-trigger cursor-pointer bg-slate-700/50 px-1.5 py-0.5 rounded text-cyan-400 border border-slate-600 hover:bg-cyan-500/20 transition-colors\" title=\"Cliquer pour copier\">(2168,1204,4)</span> : GG puis sortir par GGG aux baffreurs</li>\n  <li>clef 13 <span class=\"coords-trigger cursor-pointer bg-slate-700/50 px-1.5 py-0.5 rounded text-cyan-400 border border-slate-600 hover:bg-cyan-500/20 transition-colors\" title=\"Cliquer pour copier\">(204,365,6)</span> : salle des 4 tourbillons (au nord de la salle clé 10), coffre nord-ouest</li>\n  <li>clef 14 <span class=\"coords-trigger cursor-pointer bg-slate-700/50 px-1.5 py-0.5 rounded text-cyan-400 border border-slate-600 hover:bg-cyan-500/20 transition-colors\" title=\"Cliquer pour copier\">(2199,1356,4)</span> : DD - GGG</li>\n  <li>clef 15 <span class=\"coords-trigger cursor-pointer bg-slate-700/50 px-1.5 py-0.5 rounded text-cyan-400 border border-slate-600 hover:bg-cyan-500/20 transition-colors\" title=\"Cliquer pour copier\">(2237,1159,4)</span> : D - G - D</li>\n  <li>clef 16 <span class=\"coords-trigger cursor-pointer bg-slate-700/50 px-1.5 py-0.5 rounded text-cyan-400 border border-slate-600 hover:bg-cyan-500/20 transition-colors\" title=\"Cliquer pour copier\">(2281,1361,4)</span> : GGG - DD puis sortir par DGD salle des dalles puis par tourbillon nord aux baffreurs.</li>\n  <li>clef 17 <span class=\"coords-trigger cursor-pointer bg-slate-700/50 px-1.5 py-0.5 rounded text-cyan-400 border border-slate-600 hover:bg-cyan-500/20 transition-colors\" title=\"Cliquer pour copier\">(212,367,6)</span> : salle des 4 tourbillons (au nord de la salle clé 10), coffre nord-est</li>\n  <li>clef 18 <span class=\"coords-trigger cursor-pointer bg-slate-700/50 px-1.5 py-0.5 rounded text-cyan-400 border border-slate-600 hover:bg-cyan-500/20 transition-colors\" title=\"Cliquer pour copier\">(2298,1301,4)</span> : DD - G puis sortir par DDGD aux baffreurs</li>\n  <li>clef 19 <span class=\"coords-trigger cursor-pointer bg-slate-700/50 px-1.5 py-0.5 rounded text-cyan-400 border border-slate-600 hover:bg-cyan-500/20 transition-colors\" title=\"Cliquer pour copier\">(207,373,6)</span> : salle des 4 tourbillons (au nord de la salle clé 10), coffre sud-est </p>\n\n<p>Puis prenez une dernière fois le tourbillon.</li>\n  <li><u>clef 12 : finale</u> </p>\n\n<p>Muni de la clé obsidienne 19, vous pouvez récupérer la clé de chair 12 par le cheminement suivant :</li>\n  <li>DGDD (vous arrivez dans la salle des dalles, petit côté).</li>\n  <li>Ouvrez le coffre pour la clef #12</li>\n  <li>Descendez dans le tourbillon. Arrivée salle des baffreurs... </p>\n</li>\n\n</ul>",
        "images": [],
        "order": 14
      },
      {
        "title": "Clef de chair durcie #13",
        "description": "<ul>\n  \n  <li>\n<p>Encore beaucoup de marche pour cette clé ! </p>\n\n<p><b>Attention !</b> Vous devez être immunisé contre la téléportation (potion d'inertie d'Evalcian) pour traverser la salle du coffre clé de chair 10.</li>\n  <li>Vous devez activer les dalles bleues de 1 à 10 dans l'ordre. Ensuite cliquez sur le coffre au centre de la salle des dalles (grand côté) , il vous donnera la clé directement dans l'inventaire.</li>\n  <li>Pour faire tout cela, il vous faudra passer plusieurs fois par la salle aux 4 tourbillons et entrer dans le tourbillon Sud caché par le mur. </p>\n\n<p>Enchaînement depuis le tourbillon Sud :</li>\n  <li>Dalle 1 : GGGG, puis marcher sur la dalle bleue côté droit de l'île puis sortir côté gauche vers baffreurs.</li>\n  <li>Dalle 2 : DD GGGG D, arrivée salle des dalles grand côté, marcher sur la dalles bleue 2 puis sortir par tourbillon nord.</li>\n  <li>Dalle 3 : D G DD, arrivée salle des dalles petit côté, marcher sur la dalle bleue 3 puis sortir par tourbillon.</li>\n  <li>Dalles 4-5-6-7 : DD GGGG D, arrivée salle des dalles grand côté, marcher sur les dalles bleues 4,5,6,7 puis sortir.</li>\n  <li>Dalle 8 : DD GGGG, marcher sur la dalle bleue puis sortir.</li>\n  <li>Dalles 9-10 : DD GGGG D, arrivée salle des dalles grand côté, marcher sur les dalles bleues 9,10.</li>\n  <li>Pour finir, cliquer sur le coffre central pour obtenir la clé #13. </p>\n\n<p>Attention : Vous pouvez marcher sur la même dalle bleue deux fois de suite, mais si vous marchez sur une mauvaise dalle il faut recommencer depuis le début ! </p>\n\n<p></li>\n  <li></p>\n</li>\n\n</ul>",
        "images": [],
        "order": 15
      },
      {
        "title": "Clef de chair durcie #14",
        "description": "<ul>\n  \n  <li>\n<p>Et là beaucoup beaucoup de marche... </p>\n\n<p><b>Attention !</b> Vous devez être immunisé contre la téléportation (potion d'inertie d'Evalcian) pour traverser la salle du coffre clé de chair 10. </p>\n\n<p>Ici aussi vous devez parcourir les îles obsidiennes. Cette fois-ci pour obtenir les clefs en obsidienne #19, #11, #8 et #4. Faites d'abord toutes les clés jusqu'à la clé 19 puis recommencez jusqu'à la 11, de même pour la 8 et pour la 4. Vous allez marcher beaucoup et c'est pas fini.... </p>\n\n<p>Vous devez aussi vous procurer (avec un peu de chance ces clefs traînent dans votre coffre ou un GB vous les donnera) : </p>\n\n<p>- Une clef tordue &gt; drop des Seigneurs ténébreux de la guerre (cave du Château de Mordenthal au Nord de SH) </p>\n\n<p>- Une clef de pierre &gt; drop de divers morts-vivants de RD </p>\n\n<p>- Une clef de fer noircie &gt; drop de divers monstres de la crypte de Lord Stonecrest sur SH </p>\n\n<p>- Une clef d'os poli &gt; drop de divers monstres de la crypte Centaures à l'Est de la ville Centaure sur SH (Ennemi des Ombres.....) </p>\n<p >Salle aux 10 dalles bleues pour clé de chair 14 (by Mëyli)</p>\n\n<p></li>\n  <li>Ensuite allez dans la salle aux dix dalles bleues (NO de la salle où on obtient la clef de chair durcie #10). </p>\n\n<p>Activez les dalles de 1 à 2 dans cette salle, puis prenez le tourbillon du milieu dans la salle aux quatre tourbillons (ouverte par la clef de chair durcie #11) pour trouver la clef rouillée du donjon #7 dans le petit coffre tout à gauche de la petite île ou vous arrivez. Puis recall ... </p>\n<p ></p>\n<p >T4C NMS Révolution, clef de chair 14 les dix dalles.</p>\n<p >Vidéo des 10 dalles</p>\n<p ></p>\n<p ></p>\n\n<p>Activez les dalles 1 à 4 et cliquez sur l'autre petit coffre à gauche de l'île pour avoir la clef rouillée du donjon #8. Puis recall... </p>\n\n<p>Activez maintenant les dalles 1 à 6 pour cliquer sur le petit coffre centre droit de l'île pour obtenir la clef rouillée du donjon #9. Puis recall ... </p>\n\n<p></li>\n  <li>Puis activez les dalles de 1 à 8 et ouvrez le petit coffre le plus à droite de l'île pour obtenir la clef rouillée du donjon #10. Puis recall... </p>\n\n<p></li>\n  <li>Enfin, retournez activer les dalles de 1 à 10 et trouvez la clef de chair durcie #14 dans le coffre au <u>centre de la salle aux dalles bleues.</u> </p>\n<p >Salles des gargouilles (by TELLAH)</p>\n</li>\n\n</ul>",
        "images": [],
        "order": 16
      },
      {
        "title": "Clef de chair durcie #15",
        "description": "<p>Camping au voisinage des gargouilles... </p>\n\n<p><b>Attention !!</b> Vous devez être immunisé contre le glas (potion d'immunisation au glas d'Evalcian) pour vous rendre dans cette salle au NE de la salle de la clé #11. </p>\n\n<p>La clef se trouve dans le petit coffre situé à l'est dans la salle aux 11 tourbillons (au NE de celle où vous devez boire une potion d'immunisation au glas). Vous devrez tuer les deux gargouilles pour passer (amusant vous verrez). En fait les gargouilles lancent un sort qui vous fait marcher dans toutes les directions donc, faites attention de ne pas tomber dans un tourbillon. </p>\n\n<p>Le repop du coffre clé 15 est de 20 minutes (irl) seul et 10 minutes (irl) à deux ! </p>\n\n<p><br/></p>",
        "images": [],
        "order": 17
      },
      {
        "title": "Clef de chair durcie #16",
        "description": "<p>Ici il vous faudra d'abord obtenir les clés corail 1 et 3 </p>\n\n<ul>\n  <li>Clé corail #1 (le puits)</li>\n</ul>\n\n<p>Prenez une potion d'inertie puis allez cliquer sur le puits dans la salle au NO de la salle où on obtient la clef de chair durcie #14 (passez par le labyrinthe) et jetez-y 1,5M de pièces d'or au mot <span class=\"text-amber-400 font-bold\">\"<i><b>jetées</b>\"</span></i> (attention il prend toutes vos pièces d'or, posez donc le surplus au sol). S'il la donne pas du 1er coup réessayez avec 100 ou 200k d'or.<br/>Vous obtenez la clef corail #1. </p>\n\n<p>PS: Respawn de 20 min pour refaire à nouveau si vous ratez au 100 coffres. </p>\n<p >Coffres pour clé corail 3 (by Mëyli)</p>\n\n<ul>\n  <li>Clé corail #3 (par la salle dite <span class=\"text-amber-400 font-bold\">\"aux 100 coffres\"</span>)</li>\n</ul>\n\n<p>Pour faire la suite, vous devez être immunisé contre le glas (potion d'immunisation au glas d'Evalcian).<br/>Cela fait, allez dans la salle aux 11 tourbillons, en prenant celui du milieu de l'avant dernier rang (tourbillon <span class=\"text-amber-400 font-bold\">\"coffressss\"</span> du screen de la clé #15), vous tombez dans une salle remplie de coffres.<br/>Vous devrez cliquer rapidement sur cinq coffres à la suite pour obtenir la clef de corail #3. </p>\n\n<p>Le début de chaque flèche verte montre l'endroit ou vous placer pour cliquer sur le coffre à l'autre extrémité de la flèche.<br/>Attention vous avez un timing assez serré (environ 30 secondes). Entraînez vous à vous déplacer aux bons endroits. </p>\n\n<p>Prenez ensuite le portail de cette salle pour être téléporté a l'entrée du niveau -4 </p>\n\n<p><br/>Avec cette clef, procurez-vous la clef de chair durcie #16 dans le gros coffre au centre de l'île sur laquelle vous avez eu les clefs rouillées du donjon de #7 à #10 (voir clef de chair durcie #14). N'oubliez pas d'être immunisé contre l'inertie.<br/>Temps de repop : 20 minutes (10 minutes à plusieurs). </p>",
        "images": [],
        "order": 18
      },
      {
        "title": "Clef de chair durcie #17",
        "description": "<p>Maintenant c'est du gâteau !! </p>\n\n<p>Sans la fiole de protection contre la terreur, cette clé est la plus difficile à cause de la perte de contrôle due aux gargouilles (cette fiole n'existe que depuis peu et la clé était jadis une vraie galère mais qui a laissé aux anciens des souvenirs inoubliables) . </p>\n\n<p>Il s'agit d'obtenir dans l'ordre les clefs corail 2 4 5 6 et 7 avant de s'attaquer à la clef de chair #17 proprement dite. </p>\n\n<p>Tip: : Il existe maintenant une fiole de protection contre la terreur (craft) qui permet de supprimer l'effet des gargouilles et facilite grandement l'obtention de cette clé. Une fiole est active durant 30 minutes. </p>\n\n<ul>\n  <li>Clef corail #2</li>\n</ul>\n<p >Salle des gargouilles (by TELLAH)</p>\n\n<p><b>Salle des gargouilles pour les clés corail suivantes :</b> </p>\n\n<p>Rendez vous salle des gargouilles et explorez les vortex dans l'ordre, chaque clef corail ouvre le coffre qui donne sa suite numérique (Clef #4 ouvre le coffre pour trouver la #5... Clef #5 ouvre le coffre pour trouver la #6... etc).<b> </b> </p>\n\n<p>N<b>oter que les clefs corail sont à usage unique !</b> </p>\n\n<p><br/></p>\n<p >Tourbillon 1 pour clé corail 4 (by Mëyli)</p>\n\n<ul>\n  <li>Clef corail #4 </li>\n</ul>\n\n<p>Tourbillon N°1 (au nord) afin d'obtenir la clef corail #4. </p>\n\n<p>Recall après avoir eu votre clef. </p>\n\n<p><br/></p>\n<p >Tourbillon 2 pour clé corail 5 (by Mëyli)</p>\n\n<ul>\n  <li>Clef corail #5</li>\n</ul>\n\n<p>Tourbillon N°2 (à l'est) afin d'obtenir la clef corail #5. </p>\n\n<p>Recall après avoir eu votre clef. </p>\n\n<p><br/></p>\n<p >Tourbillon 3 pour clé corail 6 (by Mëyli)</p>\n\n<ul>\n  <li>Clef corail #6</li>\n</ul>\n\n<p>Tourbillon N°3 (à l'ouest) afin d'obtenir la clef corail #6. </p>\n\n<p>Recall après avoir eu votre clef. </p>\n\n<p><br/></p>\n<p >Tourbillon 4 pour clé corail 7 (by Mëyli)</p>\n\n<ul>\n  <li>Clef corail #7 </li>\n</ul>\n\n<p>Tourbillon N°4 (caché au sud) afin d'obtenir la clef corail #7. </p>\n\n<p>Recall après avoir eu votre clef. </p>\n\n<p><br/></p>\n\n<ul>\n  <li>Clef de chair #17</li>\n</ul>\n<p >Tourbillon 5 (l'escargot) pour clé de chair 17 (by Mëyli)</p>\n\n<p>Le repop des 4 premiers coffres est de 20 minutes (seul)... immédiat à plusieurs... </p>\n\n<p>Le coffre qui drop la clef #17 n'a pas de temps de repop. </p>\n\n<p>Légende : </p>\n\n<p>- Etoile verte = Point de départ </p>\n\n<p>- Point jaune = Tourbillon qui vous téléporte au début </p>\n\n<p><br/></p>",
        "images": [],
        "order": 19
      },
      {
        "title": "Clef de chair durcie #18",
        "description": "<p>A faire en trio. </p>\n\n<p><br/>Avec la clef #17 vous ouvrez la salle derrière les gargouilles. Mieux vaut être 3 pour actionner les dalles dans l'ordre (jaune bleu vert). Marcher sur la dalle bleu vous rend malade (saturnisme) pendant une heure. De plus celui qui actionne la bleue ne peut pas ouvrir le coffre tant qu'il est malade. </p>\n\n<p>Vous pouvez acheter une potion de dissipation du saturnisme (chez Evalcian) qui vous guérira de cette maladie. </p>\n\n<ul>\n  <li>Jaune</li> <li>Bleue</li> <li>verte</li>\n</ul>\n<p >Clé 18</p>\n\n<p><br/></p>",
        "images": [],
        "order": 20
      },
      {
        "title": "Clef de chair durcie #19",
        "description": "<p>A faire en trio. </p>\n\n<p><br/>Salle à l'opposé (il faut traverser les 3 salles avec rejetons ou faire le tour par la salle aux quatre tourbillons). Même principe que la clef #18 avec 3 dalles de couleur à actionner dans l'ordre (jaune bleu vert), mais avec des dalles piégées. Attention ça peut faire mal. </p>\n\n<p>Voici les positions exactes des dalles : </p>\n\n<ul>\n  <li>Jaune : 216, 344, 6</li> <li>Bleue : 232, 338, 6</li> <li>Verte : 222, 339, 6</li>\n</ul>\n<p >Clé 19</p>\n\n<p><br/></p>",
        "images": [],
        "order": 21
      },
      {
        "title": "Clef de chair durcie #20",
        "description": "<p>Avec de l'aide. </p>\n\n<p>Tuez (en groupe) des rejetons furtifs jusqu'à faire droper la clef #20. </p>\n\n<p><br/></p>",
        "images": [],
        "order": 22
      },
      {
        "title": "Clef de chair durcie #21",
        "description": "<p>Avec de l'aide. </p>\n\n<p>Tuez (en groupe) des rejetons furtifs jusqu'à faire droper la clef #21. </p>\n\n<p><br/></p>",
        "images": [],
        "order": 23
      },
      {
        "title": "Clef de chair durcie #22",
        "description": "<p>Avec de l'aide. </p>\n\n<p>Tuez (en groupe) des rejetons du Cerberus jusqu'à faire droper la clef #22. </p>\n\n<p>Félicitations, vous avez maintenant accès au CERBERUS ! </p>\n\n<p>Passez le portail dans la salle des rejetons du Cerberus (mot-clé <span class=\"text-amber-400 font-bold\">\"entrer\"</span>), ceux qui dropent la clef de chair durcie #22, pour arriver dans son antre. </p>\n\n<p>Puis, mettez vous tout nu, complètement débuff et sans arme et foncez dessus (<b>non....joke</b>)! </p>\n\n<p>Pour terminer la quête Académie, n'oubliez pas de capturer le Cerberus cela vous rapportera 10G d'xp et 10 parchemins d'xp x2 d'1 heure (ensuite aller rendre la capture a Pelkor Zirus comme les autres captures au salon de jeux.(Oubliez pas d'enlever le sceptre pour qu'il le reprenne)). </p>\n\n<p><b>Attention</b> : lorsque vous passez le portail pour la première fois, vous perdez <u>presque</u> toutes vos clefs de chair durcie!! </p>\n\n<p>Ne restent que celles qui permettent d'accéder au Cerberus en ligne droite, c'est à dire les #3, #6, #21 et #22. Vous pourrez donc retourner au Cerberus, mais ne pourrez pas camper les coffres iridium ou ivoire, ni les vers enfouis, ni les gargouilles éthérées. Pour ce faire, il faut... refaire les clefs qui vous intéressent (dans l'ordre... ou pas...). Amusez-vous bien!! </p>\n\n<p>Tip : Vous pouvez faire d'avance en double les clés qui tombent au sol mais pas celles qui tombent directement dans votre sac. </p>\n\n<p><u><b>Cerberus, le boss à 3 têtes </b></u> </p>\n\n<p>Attention ce boss a la capacité de vous retirer toutes vos magies actives et d'invoquer des rejetons (gare à leur nécro) s'il est de mauvaise humeur !! </p>\n<p >T4C NMS Révolution, Cerberus en groupe.</p>\n\n<p> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> </p>",
        "images": [],
        "order": 24
      }
    ],
    "credits": [
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
    "title": "La chasse aux dragons",
    "slug": "la-chasse-aux-dragons",
    "zone": "Général",
    "prerequisites": [],
    "rewards": [],
    "npcs": [],
    "gold": "",
    "steps": [
      {
        "title": "Introduction",
        "description": "<p>Il vous faudra tuer plusieurs dragons situés sur Arakas, Raven's Dust, Niève (L'ile de glace), Stoneheim, et Drake Island au cours de cette quête, afin d'obtenir tout les artefacts nécessaires à son accomplissement. </p>\n\n<p>Votre récompense sera : </p>\n\n<ul>\n  <li><b>Un Bol du Dragon</b> : +10 CA +10 chance + (10 + 2xlevel/10) all stat. Se porte comme un bouclier.</li> <li>Votre niveau x 24000 pièces d'or.</li>\n</ul>",
        "images": [],
        "order": 0
      },
      {
        "title": "Arakas",
        "description": "",
        "images": [
          "/t4c-nms-overview/assets/quests/la-chasse-aux-dragons/img_1_0.jpg"
        ],
        "order": 1
      },
      {
        "title": "Raven's Dust",
        "description": "",
        "images": [
          "/t4c-nms-overview/assets/quests/la-chasse-aux-dragons/img_2_0.jpg"
        ],
        "order": 2
      },
      {
        "title": "Niève (Ile de Glace)",
        "description": "",
        "images": [
          "/t4c-nms-overview/assets/quests/la-chasse-aux-dragons/img_3_0.jpg"
        ],
        "order": 3
      },
      {
        "title": "StoneHeim",
        "description": "",
        "images": [],
        "order": 4
      },
      {
        "title": "Dragon Livoxdrinn",
        "description": "<p><br/></p>",
        "images": [],
        "order": 5
      },
      {
        "title": "Drake Island",
        "description": "",
        "images": [],
        "order": 6
      },
      {
        "title": "La Quête",
        "description": "<p>Allez voir Ayanis <span class=\"coords-trigger cursor-pointer bg-slate-700/50 px-1.5 py-0.5 rounded text-cyan-400 border border-slate-600 hover:bg-cyan-500/20 transition-colors\" title=\"Cliquer pour copier\">(1428,633,1)</span>, au village métier situé au sous-sol de Redwall. </p>\n\n<p>Apporter-lui l'os de Dasrinn, une fiole de sang de dragon, une dent de dragon, le sang d'Ashardalon, une griffe de Livoxdrinn, un griffe argentée de Freidaclan, un oeuf de Yeridaj, la dent de Zudinm et enfin le crâne de Liridell Mirev. </p>\n\n<p>Dites lui le mot clef <span class=\"text-amber-400 font-bold\">\"dragon\"</span>. Elle vous prendra les items sauf le crâne de Liridell et vous récompensera. </p>\n\n<p><b>Récompenses :</b> </p>\n\n<ul>\n  <li><b>Un Bol du Dragon</b> : +10 CA +10 chance + (10 + 2xlevel/10) all stat. Se porte comme un bouclier.</li> <li>Votre niveau x 24000 pièces d'or.</li>\n</ul>\n\n<p>Vous pouvez répéter la quête. Comme vous avez déjà le crâne de Liridell, elle sera plus facile. Mais vous n'aurez que le bol et pas l'or. </p>\n\n<p> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> </p>",
        "images": [],
        "order": 7
      }
    ],
    "credits": []
  },
  {
    "title": "La hache légendaire",
    "slug": "la-hache-legendaire",
    "zone": "Général",
    "prerequisites": [],
    "rewards": [],
    "npcs": [],
    "gold": "",
    "steps": [
      {
        "title": "LA HACHE LEGENDAIRE",
        "description": "<ul>\n  \n  <li>\n<p>Ramenez 10 haches du bûcheron, 200 haches du bûcheron expérimenté, 10 haches du bûcheron expert et 10 haches du bûcheron reconnu à Brestian dans le sous-sol de Redwall, qui vous donnera une hache légendaire en échange. </p>\n\n<p>10x La hache du bûcheron (18 force) se trouve sur Griroesh, le gardien de Jarko, (AR).</li>\n  <li>200x La hache du bûcheron expérimenté (23 force) se trouve sur les vers des sables, dans le désert, (RD).</li>\n  <li>10x La hache du bûcheron expert (28 force) se trouve sur les Lepreuchauns aux Bois Creux, (SH).</li>\n  <li>10x La hache du bûcheron reconnu (33 force) se trouve sur les Démons Terreux, dans la cave Humterre (DI). </p>\n\n<p> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> </p>\n</li>\n\n</ul>",
        "images": [],
        "order": 0
      }
    ],
    "credits": []
  },
  {
    "title": "La pioche légendaire",
    "slug": "la-pioche-legendaire",
    "zone": "Général",
    "prerequisites": [],
    "rewards": [],
    "npcs": [],
    "gold": "",
    "steps": [
      {
        "title": "LA PIOCHE LEGENDAIRE",
        "description": "<ul>\n  \n  <li>\n<p>La pioche légendaire est une pioche qui vous permettra de miner dans l'ensemble des mines existantes. </p>\n\n<p>Rendez vous chez Zaeron Kayle, l'entraîneur de Drake Island, un voisin du forgeron. </p>\n\n<p>Il vous demandera de réunir deux minerais rares dans chaque type de gisement. Sachant qu'il existe treize types de gisements, vous devrez miner longuement jusqu'à faire dropper 2 minerais rares pour chaque type de minerai (le taux de drop semble être d'environ un minerai rare pour cent minerais normaux). </p>\n\n<p><b>Arakas :</b> </p>\n\n<p>Fer (cave de LH) : Taénite</li>\n  <li>Plomb (cave des brigands) : Cérusite </p>\n\n<p><b>Raven's Dust :</b> </p>\n\n<p>Cuivre (cave d'Anrak) : Orichalque</li>\n  <li>Argent (cave Orc niveau -2) :: Cobalt</li>\n  <li>Mithril (cave des Profundus) :: Granite </p>\n\n<p><b>Stoneheim :</b> </p>\n\n<p>Or (cave des Centaures) : Rhodite</li>\n  <li>Saphir (cave des skraugs verts) : Azurite</li>\n  <li>Métrolite (cave des bois creux) : Obsidienne</li>\n  <li>Adamantite (cave des abeilles) : Tourmaline </p>\n\n<p><b>Drake Island :</b> </p>\n\n<p>Rubis (cave du Beholder) : Cornaline </p>\n\n<p><b>Cave Humterre :</b> </p>\n\n<p>Diamant : Quartz</li>\n  <li>Emeraude : Jade</li>\n  <li>Titane : Sphène </p>\n\n<p>Retournez ensuite chez Zaeron Kayle qui vous récompensera d'une pioche légendaire. </p>\n\n<p>Bon courage ! </p>\n\n<p> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> </p>\n</li>\n\n</ul>",
        "images": [],
        "order": 0
      }
    ],
    "credits": []
  },
  {
    "title": "La potion du nécromant",
    "slug": "la-potion-du-necromant",
    "zone": "Général",
    "prerequisites": [],
    "rewards": [],
    "npcs": [],
    "gold": "",
    "steps": [
      {
        "title": "Introduction",
        "description": "<p>Rendez vous chez Squirell au sous-sol métiers de RedWall. </p>\n\n<p>Dites lui <span class=\"text-amber-400 font-bold\">\"travail\"</span> puis <span class=\"text-amber-400 font-bold\">\"potions\"</span>. Il vous demandera </p>\n\n<ul>\n  <li>un <span class=\"text-amber-400 font-bold\">\"crin de dragon\"</span> (drop du dragon ? drop des demonicons AR mais très rare!)</li> <li>une aigue-marine brute (drop de nombreux monstres de SH)</li> <li>deux feuilles de cigüe (sur des plants situés sur Arakas)</li>\n</ul>\n\n<p>Muni de ces items, retournez voir Squirell </p>\n\n<p>Il vous les échangera contre une potion du nécromant. </p>\n\n<p> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> </p>",
        "images": [],
        "order": 0
      }
    ],
    "credits": []
  },
  {
    "title": "La quête de Kertius Alim",
    "slug": "la-quete-de-kertius-alim",
    "zone": "Général",
    "prerequisites": [],
    "rewards": [],
    "npcs": [],
    "gold": "",
    "steps": [
      {
        "title": "La quête de Kertius Alim (pour robes en soie avec bonus +5 chance)",
        "description": "<p>Cette quête permet d'obtenir la <span class=\"text-amber-400 font-bold\">\"boîte de démolécularisation supérieure\"</span> qui permettra, avec d'autres items, de reskinner certaines robes existantes tout en y ajoutant 5 points de chance. </p>\n<p >Sève mystique en soie</p>\n\n<p>Pour reskinner ces robes, il vous faudra : </p>\n\n<p>-- Obtenir une <span class=\"text-amber-400 font-bold\">\"boîte de démolécularisation supérieure\"</span> auprès de Kertius Alim. </p>\n\n<p>-- Obtenir une <span class=\"text-amber-400 font-bold\">\"fiole de démolécularisation supérieure\"</span>. Première méthode : camper Korès (ex Araknor). Le grand Démon revient.... (hum...buggé actuellement). </p>\n\n<p>-- Autres méthodes pour obtenir la fiole : </p>\n\n<ul>\n  <li>Camper 100 fioles de démolécularisation auprès du <span class=\"text-amber-400 font-bold\">\"rejet du monde\"</span> (cave du vieil ermite, au Sud-Ouest - 140,1050,2 ou cave de LH).</li> <li>Camper un sceau maléfique auprès d'Elbegast, boss du château d'Utanar.</li> <li>Faire crafter la fiole sup auprès d'un apothicaire level 130.</li> <li>Faire le donjon Eléonore. On l'obtient parfois en échange d'une plume étincelante.</li>\n</ul>\n\n<p>-- Enfin selon la robe choisie, compléter les items manquants de la recette... </p>\n\n<p>-- Contacter un couturier qualifié qui apprendra la recette qui vous intéresse s'il n'en dispose pas encore (à apprendre auprès d'Avanna située à l'ouest de LH derrière la taverne). </p>\n\n<p>-- Et c'est partiiiii pour le craft !! </p>",
        "images": [
          "/t4c-nms-overview/assets/quests/la-quete-de-kertius-alim/img_0_0.jpg"
        ],
        "order": 0
      },
      {
        "title": "Kertius Alim : La boîte de démolécularisation supérieure",
        "description": "<p>Pour fabriquer la boîte il faut trouver Kertius Alim et lui parler 4 fois. Petite difficulté, chaque fois que vous lui parlez il se téléporte ailleurs ..... </p>\n\n<p>Les positions possibles de Kertius sont très nombreuses (une cinquantaine environ) </p>\n\n<p>La liste des positions connues : </p>\n<ol><li>915,1885,0 petit îlot au milieu du lac au nord de la RST RD (le plus fréquent)</li> <li>1182,1802,0 ouest du camp Orc</li> <li>489,2063,0 nord de Zakhar</li> <li>1185,2508,0 nord des Druides de RD, au-delà de la rivière</li> <li>273,2095,0 cercle du Val des Enchanteurs</li> <li>1826,221,4 plaine de Niève chez les Zartgax</li> <li>297,1653,0 derrière le château de Bane, près du plant de coton</li> <li>2470,2230,0 Ville de Niève</li> <li>716,1900,0 a droite de Moridin Tennglaw</li> <li>2536,2347,0 pret du rempart du dragon Yeridaj</li> <li>655,1885,0 Etheanan</li> <li>1215,2440.0 sortie ouest de RD a la hauteur du château de SS</li> <li>1103,1697,0 sud est de la bibliothèque</li> <li>2444.2082.0 ville de Niève</li> <li>883,2364,0 Gauche du troll de rd ds le creux d un montagne</li> <li>893,2139,0 Sud Est RST RD - pointe embouchure rivière</li> <li>1623,2195,0 Est château SS petit chemin vers vortex</li> <li>425,1886,0 montagnes railleuses, Nord Est de la pnj présent alvors ou Nord Ouest de Jormungand</li> <li>615,2205,0 Sur le chemin des horreurs railleuses au debut avant la croisé des chemins.</li> <li>........???</li></ol>\n<p><b>à compléter !!!!!</b> </p>\n\n<p>Ce sont des lieux souvent proches (ou pas...) de ceux vers lesquels le chapeau de nomade de RD peut vous téléporter. Donc utiliser le chapeau vous permettra éventuellement de trouver Kertius plus facilement. </p>\n\n<p>Lors de votre 4ème rencontre il vous donnera la liste des items nécessaires pour fabriquer la boîte : </p>\n\n<ul>\n  <li>3 énergies infernales (drop des monstres de la Créature Infernale dite <span class=\"text-amber-400 font-bold\">\"Totem\"</span> à l'Académie -3)</li> <li>4 catalyseurs d'énergie (drop du chevalier des abysses, au camping Académie -3)</li> <li>1 effluve cristallisée (drop des chevaliers de la damnation - château du désert de DI)</li>\n</ul>\n\n<p>Une fois en possession des items cherchez à nouveau Kertius. Il vous fabriquera la boîte de démolécularisation. </p>",
        "images": [],
        "order": 1
      },
      {
        "title": "La fiole de démolécularisation supérieure",
        "description": "<p>Au moment ou Kertius Alim fabrique la boîte, il vous dira :<br/>{Kertius Alim}<span class=\"text-amber-400 font-bold\">\":\"</span> <b>Pour la faire fonctionner, vous aurez besoin d'une fiole de démolécularisation supérieure, un objet très rare que seul un grand Démon possède. Je vous souhaite bon courage ! Moi je dois filer ! Au revoir et merci encore !</b> </p>\n\n<p>Ce grand Démon est Korès (ex Araknor LH2). Pour y accéder ce n'est pas facile et pour lui faire droper la fiole encore moins. Il faut être de 12 à 16 joueurs bien organisés. </p>\n\n<p>Rendez vous donc en groupe dans la maisonnette qui fut celle de Marty Rhyser au -3 (au sud ouest). Vous y trouverez Girflet Kirhn qui, après un petit dialogue (<span class=\"text-amber-400 font-bold\">\"envoyer\"</span>), vous téléportera vers la salle d'entraînement. Un nouveau PNJ vous proposera d'affronter divers monstres dont KORES. Vous devrez disposer de 10 sources d'énergie obtenues auprès des monstres du -2. </p>\n\n<p>Attention : Il existe d'autres méthodes pour obtenir cette fiole : camper 100 fioles de démolécularisation auprès du <span class=\"text-amber-400 font-bold\">\"rejet du monde\"</span> : Cave du vieil ermite, au Sud-Ouest - 140,1050,2 (2ème mob de la quête Académie) ou cave de LH. Moins facile, obtenir un sceau maléfique, drop d'Elbegast (boss du château d'Urtanar). Faire le donjon d'Eléonore permet parfois d'en obtenir une avec une plume étincelante. </p>",
        "images": [],
        "order": 2
      },
      {
        "title": "Le craft d'une robe skinnée (avec un bonus +5 en chance)",
        "description": "<p>Une fois en possession de la boîte et de la fiole vous pourrez reskinner certaines robes, comme le suaire ou la sève mystique, tout en y rajoutant 5 points de chance..... </p>\n\n<p>La robe devient une robe <span class=\"text-amber-400 font-bold\">\"en soie\"</span> (voir les <span class=\"text-amber-400 font-bold\">\"recettes couturier\"</span> sur le site NMS). </p>\n\n<p>Elcentor, Xiathis, Uqbar, Tormund </p>\n\n<p> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> </p>",
        "images": [],
        "order": 3
      }
    ],
    "credits": [
      "Elcentor"
    ]
  },
  {
    "title": "Le chapeau de chance",
    "slug": "le-chapeau-de-chance",
    "zone": "Général",
    "prerequisites": [],
    "rewards": [],
    "npcs": [],
    "gold": "",
    "steps": [
      {
        "title": "INTRODUCTION",
        "description": "<p>Cette quête est ouverte à tous les niveaux. Il est cependant conseillé d'avoir fait la quête Crimson jusqu'à la tablette RST. Mais ce n'est pas indispensable. J'ai eu 18/20 en courant à pied jusqu'à Orkanis dans l'épreuve 4. </p>\n\n<p><u>Récompenses :</u> </p>\n\n<p>- Bonne surprise : Toujours si vous terminez les 4 épreuves : <b>Un bonus de chance de +10</b> permanent, même après reroll mais pas après renaissance. </p>\n\n<p>- Entre 15 et 20 de moyenne aux épreuves : <b>le chapeau de diplômé</b> (+25 chance)<span > </span>et ainsi qu’une bourse d’expérience indroppable (environ 7% du level en cours quand vous l'activez) et le bonus chance. Conseil : utilisez la bourse aux levels les plus longs (195 à 200) ou à très haut level. </p>\n<p >- Moins de 10 vous obtenez un masque de cancre (+5 chance) et, nous sommes trop gentils, +10 de chance permanents.</p>\n\n<p>Il faut finir les quêtes même si vous avez 0 car vous aurez toujours le bonus +10 en chance. </p>\n<p >Vous ne pouvez faire la quête qu'une seule fois par renaissance donc <b>préparez-la bien !!</b> </p>\n<p >Une bénédiction (p.e. de Zélina) vous aidera bien la tâche si vous êtes de petit niveau (et vous évitera de mourir bêtement (épreuve 4 ou 5)). </p>\n<p >Une fois à Windhowl, achetez deux parchemins de WH (sauf si vous disposez d'un portail ou d'un sanctuaire à Windhowl) et assurez-vous d'avoir la gemme HDV de Lighthaven. </p>\n\n<p>La durée est chronométrée en temps <span class=\"text-amber-400 font-bold\">\"in game \"</span>. Après chaque question, faites un screen (ctrl + h) de la question puis déconnectez-vous ou switchez sur un autre perso et allez voir le screen dans le répertoire du jeu dans <span class=\"text-amber-400 font-bold\">\"mes documents\"</span> (sous répertoire <span class=\"text-amber-400 font-bold\">\"ScreenShot\"</span>) et étudiez la question. Puis reconnectez-vous. </p>",
        "images": [
          "/t4c-nms-overview/assets/quests/le-chapeau-de-chance/img_0_0.jpg"
        ],
        "order": 0
      },
      {
        "title": "LA QUETE",
        "description": "<p >Allez voir <b>Madame Flichère</b> à la fontaine de Windhowl.<br/>Vous devrez réussir 6 épreuves avec une moyenne générale égale ou supérieure à 15 sur 20.</p>\n<p >Après chaque épreuve, retournez voir Madame Flichère qui vous enverra faire la suivante.</p>\n<p >Les six épreuves sont (les PNJ sont au Sud de la ville) :</p>",
        "images": [],
        "order": 1
      },
      {
        "title": "1) Professeur Indetroikat épreuve de calcul (chronométrée)",
        "description": "<ul>\n  \n  <li><p >Réponses selon la question posée :</li>\n  <li>1<span > (</span>14*8/7-4)/2 = 6</li>\n  <li>2<span > (</span>17*9/3-1)/2 = 25</li>\n  <li>3<span > (</span>13*6/3-8)/2 = 9</li>\n  <li>4<span > (</span>19*9/3-1)/2 = 28</li>\n  <li>5<span > (</span>16*8/4-2)/2 = 10</p>\n</li>\n\n</ul>",
        "images": [],
        "order": 2
      },
      {
        "title": "2) Professeur Senfaute épreuve d'orthographe (chronométrée)",
        "description": "<ul>\n  \n  <li><p > <b>Parlez-lui (surtout soyez poli avec elle !!! ne jamais dire je m'en fous)</b></p>\n<p >Réponse selon la question posée :</li>\n  <li>1<span > c</span>auchemard envoyers athé pieds suffire</li>\n  <li>2<span > a</span>utant voir remboursez tord payons</li>\n  <li>3<span > </span>prêt demie-heure maline sensée marrons</li>\n  <li>4<span > </span>soient repère aie laissés tué</li>\n  <li>5<span > </span>quand ou tribue s'en tout</p>\n</li>\n\n</ul>",
        "images": [],
        "order": 3
      },
      {
        "title": "3 ) Professeur Ensiklopèdy épreuve d'histoire (chronométrée)",
        "description": "<ul>\n  \n  <li>\n<p>Réponse selon la question posée:</li>\n  <li>1<span > </span>Quel est le nom du lieu actuel ou vivent les dragons?: Firesky</li>\n  <li>2<span > </span>Qui a tué le roy d'Orkanis ?: Mhorgwloth</li>\n  <li>3<span > </span>Nom du vieil ermite : theorn lemnearan</li>\n  <li>4<span > </span>Qui a banni Balork : artherk</li>\n  <li>5<span > </span>Nom du précédent roi de goldmoon : Théopold 1er </p>\n</li>\n\n</ul>",
        "images": [],
        "order": 4
      },
      {
        "title": "4) Madame FLichère épreuve des coffres (chronométrée). Repérez les coffres par avance !",
        "description": "<ul>\n  \n  <li><p >Ou courir selon le lieu indiqué :</li>\n  <li>1 Coffre cité des nains, dans une maison (2681-370-0), après le labyrinthe d'Arakas</li>\n  <li>2 Coffre à Mato, aux druides Arakas (2890-287-0)</li>\n  <li>3 Coffre à Orkanis, dans la maison du troll, loin au NO d'Arakas</li>\n  <li>4 Coffre crypte du nomade (cave de la gitane), derrière un pilier en descendant l'escalier d'entrée de la crypte.</li>\n  <li>5 Coffre aux monts Righul (1936-156-0) (près de la mer au nord des montagnes Jarko)</p>\n</li>\n\n</ul>",
        "images": [],
        "order": 5
      },
      {
        "title": "5) Madame FLichère épreuve du rat (chronométrée)",
        "description": "<p>Allez tuer le rat affamé sous-sol -2 temple LH (180-120-1) <br/></p>",
        "images": [
          "/t4c-nms-overview/assets/quests/le-chapeau-de-chance/img_6_0.jpg"
        ],
        "order": 6
      },
      {
        "title": "6) Professeur Fetero (tour des mages), épreuve de magie (chronométrée)",
        "description": "<ul>\n  \n  <li>\n<p>Réponses selon la question posée :</li>\n  <li>1 Magie des orcs : <b>magie noire</b></li>\n  <li>2 Quel est le nom de la plus grande tour de magie d'Athéa ? : <b>Urtanar</b></li>\n  <li>3 Ressource pour la magie : <b>mana</b></li>\n  <li>4 Quel est le nom du traître emprisonné sur le plan de la magie ? : <b>makrsh p'tangh</b></li>\n  <li>5 Nom du maître de la tour des mages : <b>r'yleth cth</b></li>\n  <li></p>\n<p >Chapeau du diplômé</p>\n</li>\n\n</ul>",
        "images": [
          "/t4c-nms-overview/assets/quests/le-chapeau-de-chance/img_7_0.jpg"
        ],
        "order": 7
      },
      {
        "title": "LA RECOMPENSE FINALE",
        "description": "<p >Il faut avoir entre 15 et 20 de moyenne pour obtenir le chapeau de diplômé (+25 chance)<span > </span>et une bourse de chance indroppable (+10 en chance permanent même après reroll mais pas après renaissance) ainsi qu’une bourse d’expérience indroppable (environ 7% du level en cours quand vous l'activez) <u>mais ne vous pouvez pas</u> en demander le transfert si vous êtes level max.</p>\n<p >Vous pouvez aussi conserver ces bourses d'XP et, après plusieurs renaissances, les utiliser toutes quand vous serez proches du level max. </p>\n<p >Entre 10 et 15 vous obtiendrez un masque de clown (+10 chance)<span > </span>et un bonus de chance (+10 permanents)<span > </span>ainsi qu’une bourse d’expérience.</p>\n<p >Moins de 10 vous obtenez un masque de cancre (+5 chance) et, nous sommes trop gentils, +10 de chance permanents.</p>",
        "images": [],
        "order": 8
      },
      {
        "title": "Bibliothécaire d'Althéa (Toge chance)",
        "description": "<p>Aller voir la cheffe bibliothécaire à la grande bibliothèque de RD. </p>\n\n<p>Cela va être une quête d'entraide pour les petits, à partir du lvl 50 demandez de l'aide aux GB pour 2 ou 3 items </p>\n\n<p>Suivez bien le dialogue la cheffe va vous proposer 4 étapes. </p>\n\n<p>Elle permettent de découvrir d'anciennes petites quêtes oubliées. </p>\n\n<p>1ere étape. </p>\n\n<ul>\n  <li>1 Parchemin magique vierge.</li> <li>1 Plume.</li> <li>1 Encrier.</li>\n</ul>\n\n<p>Pour l'encre allez voir Cloriande Bollour dans une maison à droite d'Araknor. Elle va vous demander 3 clefs du coffre surprise. </p>\n\n<p>2eme étape </p>\n\n<ul>\n  <li>1 Parchemin de rappel ( un peu partout )</li> <li>1 Parchemin d'enchantement ( qui ne sait pas quoi !! ) (quête du parchemin d'enchantement)</li> <li>1 Parchemin du village centaure ( drop sur les sentinelles centaures au village Centaure )</li> <li>1 Parchemin de purification de l'or ( drop à DI aux Drakes Akaïstes; pour ceux pas encore rendus à DI demander aux GB )</li> <li>1 Parchemin de l'académie. ( drop académie au -4 pour ceux pas accès demandez aux GB)</li> <li>1 Parchemin de l'amitié des chevaux ( Quête parchemins d'amitié des chevaux SH )</li> <li>1 Document secret ( Quête du Heaume perdu du dragon SH sur le Wiki )</li>\n</ul>\n\n<p>3eme étape </p>\n\n<ul>\n  <li>1 Livre de Feylor ( coffre au village nains, apporter des clefs de fer ds votre sac )</li> <li>1 Livre de chance ( un peu partout à DI )</li> <li>1 Livre des sorts rouges ( qui sait pas ou :) )</li> <li>1 Livre du collectionneur ( avec quête des scalps ou drop sur les Assassins Obsidiens la grotte ds la montagne de Mordenthal )</li> <li>1 Livre de l'art de la guerre ( achat au château SS de RD à Tobias au 1er étage 15k )</li>\n</ul>\n\n<p>4eme étape </p>\n\n<ul>\n  <li>1 Certificat de reconnaissance ( suite de la quête du heaume perdu du dragon SH, suivez bien les détails sur le wiki ) Temps de repop des coffres</li>\n</ul>\n\n<p>Félicitations ! vous êtes maintenant le scribe officiel et diplômé de l'Académie. </p>\n\n<p>Voici vos cadeaux. </p>\n\n<p>Toge du bibliothécaire. ( +12 chance ) </p>\n\n<p>Diplôme de scribe. ( pour collection ) </p>\n\n<p>Voila j'espère que vous avez apprécié. Cela vous a permis de découvrir de petits quêtes oubliées!!! </p>\n\n<p> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> </p>",
        "images": [],
        "order": 9
      }
    ],
    "credits": []
  },
  {
    "title": "Le donjon de l'éternelle agonie",
    "slug": "le-donjon-de-leternelle-agonie",
    "zone": "Général",
    "prerequisites": [],
    "rewards": [],
    "npcs": [],
    "gold": "",
    "steps": [
      {
        "title": "Le donjon du Marécage de l'Agonie (150-175)",
        "description": "<p>Vous devez être de niveau 150 à 175 sinon Sigvurd (maison au nord de Redwall) ne vous parlera pas. </p>\n\n<p>Il vous faudra : </p>\n\n<p>- Une pierre verte de l'esprit de la forêt (que vous pouvez acheter à Elysana Blackrose (maison proche du temple de SS) pour 20.000 pièces d’or, en lui disant <span class=\"text-amber-400 font-bold\">\"pierre verte de l'esprit de la foret\"</span>) </p>\n\n<p>-50 feuilles d'arbre démoniaque (dropées par les arbres démoniaques de RD) ou une décoction démoniaque. </p>\n\n<p>-Un éclat d'âme d'arbre Sintelle (dropé par les arbres Sintelle de DO bien sûr). </p>\n\n<p>Dans le donjon, vous pourrez obtenir des <span class=\"text-amber-400 font-bold\">\"feuilles d'Ent\"</span> qui vous procureront de l'xp à l'aide d'une petite quête : la quête du remède de Sigvurd. </p>",
        "images": [
          "/t4c-nms-overview/assets/quests/le-donjon-de-leternelle-agonie/img_0_0.jpg"
        ],
        "order": 0
      },
      {
        "title": "La décoction démoniaque",
        "description": "<p>Allez voir Solange, avec 50 feuilles d'arbre démoniaque dans votre inventaire, dans une maison aux druides RD. Vous pourrez échanger vos 50 feuilles versus une <span class=\"text-amber-400 font-bold\">\"décoction démoniaque \"</span> en disant ''décoction'' à Solange. La décoction démoniaque vous sera utile pour votre prochain accès au marécage. Vous libérerez ainsi de la place dans votre inventaire. </p>",
        "images": [],
        "order": 1
      },
      {
        "title": "Le remède de Sigvurd",
        "description": "<p>Quand vous récupérerez une feuille d'Ent (elles sont rares), apportez-la à Solange que vous trouverez aux druides de RD dans la même maison que Celestina. </p>\n\n<p>Dites-lui ''travail'' ''passionnée'' ''médecine'', ''potion'', ''source'', et elle vous remettra une petite fiole de contrepoison que vous devrez donner à Sigvurd en cliquant simplement dessus pour le guérir. Il vous remerciera par un bonus d’xp (dépendant de votre niveau - environ 22M au level 157). </p>",
        "images": [],
        "order": 2
      },
      {
        "title": "La quête d'accès au donjon",
        "description": "<p>Allez voir Sigvurd, dans la maison du forgeron au Nord de la ville de Redwall et parlez-lui. Il vous enjoint de trouver un arbre situé au Nord et de lui parler... </p>\n\n<p><b>Dialogue avec Sigvurd :</b> </p>\n\n<p>-- {Sigvurd}<span class=\"text-amber-400 font-bold\">\":\"</span> {*ouvre difficilement les yeux*} ... Ah ... Euh ... Bonjour ... {*tremble de froid*} </p>\n\n<p>-- Vous avez dit : travail </p>\n\n<p>-- {Sigvurd}<span class=\"text-amber-400 font-bold\">\":\"</span> Regardez-moi ... Comment voulez-vous que je puisse <span class=\"text-amber-400 font-bold\">\"encore\"</span> travailler ? &lt;&gt;Je ne peux même plus sortir de ce lit ... {*marque une longue pause*} </p>\n\n<p>-- Vous avez dit : encore </p>\n\n<p>-- {Sigvurd}<span class=\"text-amber-400 font-bold\">\":\"</span> Oui ... {*parle difficilement*} ... On ne dirait pas ... en réalité ... je suis aventurier ... {*prend une grande bouffée d'air avant de continuer*} ... Je suis rentré depuis quelques semaines ... mon <span class=\"text-amber-400 font-bold\">\"état\"</span> ne cesse d'empirer ... Je ne peux presque plus bouger ... </p>\n\n<p>-- Vous avez dit : état </p>\n\n<p>-- {Sigvurd}<span class=\"text-amber-400 font-bold\">\":\"</span> Nous avons traversé un <span class=\"text-amber-400 font-bold\">\"marécage\"</span> ... Nous étions six ... Mes compagnons n'y ont pas survécu ... &lt;&gt;Je ... je ne sais pas ce que j'ai ... {*remonte sa manche pour vous montrer ses avant-bras*} ... ce sont des griffures ... &lt;&gt;Je ... je suis le <span class=\"text-amber-400 font-bold\">\"dernier\"</span> ... {*plisse le front*} </p>\n\n<p>-- Vous avez dit : marécage </p>\n\n<p>-- {Sigvurd}<span class=\"text-amber-400 font-bold\">\":\"</span> Un marécage ... oui ... {*a une quinte de toux*} ... une stupide idée ... &lt;&gt;Nous pensions y trouver un trésor ... &lt;&gt; Rhaaaa ... si seulement nous n'avions pas écouté cet <span class=\"text-amber-400 font-bold\">\"arbre\"</span> de malheur ... </p>\n\n<p>-- Vous avez dit : arbre </p>\n\n<p>-- {Sigvurd}<span class=\"text-amber-400 font-bold\">\":\"</span> C'est un arbre maudit ! ... {*perd son souffle en s'exclamant*} ... &lt;&gt;N'y <span class=\"text-amber-400 font-bold\">\"allez\"</span> pas ou vous mourrez ! ... Tous les arbres sont maudits !!! ... Et celui là en particulier ... &lt;&gt;En fait ... il parle ! Mais comment voulez-vous qu'un arbre puisse parler ? ... {*sent la folie le gagner*} </p>\n\n<p>-- Vous avez dit : allez </p>\n\n<p>-- {Sigvurd}<span class=\"text-amber-400 font-bold\">\":\"</span> Il est au nord ... Mais n'y allez pas !!! ... {*tousse en essayant de hausser le ton*} ... Il est maudit ... Je vous l'ai déjà dis ! {*insiste*} </p>\n\n<p><b>Trouvez cet arbre....il est situé au Nord de RW dans les eaux marécageuses vers l'Ouest.</b> </p>\n\n<p><b>Si vous tentez de lui parler de suite il vous répondra :</b> </p>\n\n<p>-- Les feuilles de l'arbre bougent avec le vent. </p>\n\n<p><b>Bien évidemment, comme pour Greyleaf, il vous faut une pierre verte de l'esprit de la forêt pour lui parler. Procurez-vous cette pierre comme vu plus haut et reparlez-lui :</b> </p>\n\n<p>-- {Chêne millénaire}<span class=\"text-amber-400 font-bold\">\":\"</span> Bonjour jeune aventurier </p>\n\n<p>-- Vous avez dit : travail </p>\n\n<p>-- {Chêne millénaire}<span class=\"text-amber-400 font-bold\">\":\"</span> Je suis le gardien du marécage ...seuls les courageux aventuriers peuvent y <span class=\"text-amber-400 font-bold\">\"entrer\"</span>. </p>\n\n<p>-- Vous avez dit : entrer </p>\n\n<p>-- {Chêne millénaire}<span class=\"text-amber-400 font-bold\">\":\"</span> Si vous voulez y entrer, vous devrez d'abord me <span class=\"text-amber-400 font-bold\">\"montrer\"</span> votre valeur et vos aptitudes à pouvoir y survivre ! </p>\n\n<p>-- Vous avez dit : montrer </p>\n\n<p>-- {Chêne millénaire}<span class=\"text-amber-400 font-bold\">\":\"</span> Bien ... Si vous pensez pouvoir y survivre ... Trouvez 50 <span class=\"text-amber-400 font-bold\">\"feuilles\"</span> d'arbre démoniaque ou une <span class=\"text-amber-400 font-bold\">\"décoction\"</span> démoniaque, peu importe ... l'un ou l'autre. &lt;&gt;Ensuite vous devrez trouver un <span class=\"text-amber-400 font-bold\">\"éclat\"</span> d'âme d'arbre Sintelle. &lt;&gt;Quand vous aurez <span class=\"text-amber-400 font-bold\">\"tout\"</span> rassemblé, revenez me voir, je vous y enverrai. </p>\n\n<p>-- {Chêne millénaire}<span class=\"text-amber-400 font-bold\">\":\"</span> Rapportez-moi une cinquantaine de feuilles d'arbre démoniaque pour me prouver que vous pourrez survivre une fois dans le marécage ! </p>\n\n<p><b>Trouvez les ingrédients, groupez avec si possible 3 ou 4 amis et reparlez-lui :</b> </p>\n\n<p>-- Des aventuriers s'aventurent péniblement dans les marécages de l'éternelle agonie. </p>\n\n<p>-- {Chêne millénaire}<span class=\"text-amber-400 font-bold\">\":\"</span> Vous étiez prévenus ... Allez en paix ! </p>\n\n<p><b>Et</b> <b>vous êtes téléportés...</b> </p>",
        "images": [],
        "order": 3
      },
      {
        "title": "Le donjon",
        "description": "<p><b>Sur cette île sont de nombreux monstres très méchants. Evitez de trop bouger, avancez lentement !!</b> </p>\n\n<p><b>Tuez les monstres, ils invoquent des Ent's poisseux. Tuez-les aussi. Ils droppent, rarement, des <span class=\"text-amber-400 font-bold\">\"feuilles d'Ent\"</span>. Pensez surtout à les ramasser. Quand vous aurez tué un certain nombre d'Ent's poisseux, un boss sera invoqué au début de la jetée.</b> </p>\n\n<p><b>Vous êtes prévenu par un message d'un des Ent poisseux : *dans un dernier souffle* ... L'Ent lethifère... il vous ôtera votre misérable vie ! ... Vous ne sortirez jamais d'ici ... *agonise sur le sol*.</b> </p>\n\n<p><b>Retournez au début de la jetée et tuez le boss. A sa mort il droppe une souche. Cliquez dessus pour obtenir votre récompense et retourner à votre sanctuaire (n'oubliez pas d'apporter vos feuille d'Ent à Solange).</b> </p>\n\n<p><b>Récompenses : environ 50M xp et au hasard :</b> </p>\n\n<p><b>Iridium, parchemin de l'académie, nerf sciatique, globe oculaire, bulbe de l'éveillé, écume de larve toxique, chapeau des espérances multiples (+10 de chance), item secret de l'Académie.</b> </p>\n\n<p> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> </p>",
        "images": [
          "/t4c-nms-overview/assets/quests/le-donjon-de-leternelle-agonie/img_4_0.jpg"
        ],
        "order": 4
      }
    ],
    "credits": []
  },
  {
    "title": "Le donjon des abîmes",
    "slug": "le-donjon-des-abimes",
    "zone": "Général",
    "prerequisites": [],
    "rewards": [],
    "npcs": [],
    "gold": "",
    "steps": [
      {
        "title": "Le Donjon des abîmes (80-120)",
        "description": "<p>Ce donjon est réservé aux niveaux 80 à 120. Donjon intéressant et trop rarement fait. Il vous faudra un bon groupe et/ou un bon level. Mais c'est aussi une bonne zone d'xp. </p>\n\n<ul>\n  <li>un médaillon des abîmes dropé par les B'Zurkans sur DI.</li>\n</ul>\n\n<p>Le donjon vous sera réservé durant 1H 30. </p>",
        "images": [
          "/t4c-nms-overview/assets/quests/le-donjon-des-abimes/img_0_0.jpg"
        ],
        "order": 0
      },
      {
        "title": "La Quête d'accès",
        "description": "<ul>\n  \n  <li>\n<p>Dans Redwall trouvez Cléantine (facile, elle se promène devant la porte du temple) et parlez-lui. </p>\n\n<p><b>Dialogue :</b> </p>\n\n<p>-- {Cléantine}<span class=\"text-amber-400 font-bold\">\":\"</span> Avez-vous vu mon <span class=\"text-amber-400 font-bold\">\"fils\"</span> ??? ... Dites-moi que vous l'avez vu ! ... {*très inquiète*}</li>\n  <li>-- Vous avez dit : <b>fils</b></li>\n  <li>-- {Cléantine}<span class=\"text-amber-400 font-bold\">\":\"</span> <b>Fastalan</b>, mon fils... il a <span class=\"text-amber-400 font-bold\">\"disparu\"</span> il y a presque trois jours ... Je ne sais plus quoi faire ...</li>\n  <li>-- Vous avez dit : <b>disparu</b></li>\n  <li>-- {Cléantine}<span class=\"text-amber-400 font-bold\">\":\"</span> Il a fait d'étranges <span class=\"text-amber-400 font-bold\">\"rencontres\"</span> dernièrement ... Depuis, je ne le reconnais plus ... Il m'avait parlé d'un <span class=\"text-amber-400 font-bold\">\"rituel\"</span> ... dans une cave ... dans les montagnes ... mais je ne sais pas où exactement ..</li>\n  <li>-- Vous avez dit : <b>rencontres</b></li>\n  <li>-- {Cléantine}<span class=\"text-amber-400 font-bold\">\":\"</span> Oui ... des mages étranges ... sombres ... ensemble ils s'adonnaient à divers <span class=\"text-amber-400 font-bold\">\"rituels\"</span>, je pensais que c'était pour s'amuser ... mais ... il n'est pas rentré ... {*fond en larmes*}</li>\n  <li>-- Vous avez dit : <b>rituels</b></li>\n  <li>-- {Cléantine}<span class=\"text-amber-400 font-bold\">\":\"</span> Oui ... j'ai peur qu'il se soit fait <span class=\"text-amber-400 font-bold\">\"enrôlé\"</span> dans un mouvement dangereux ... Je suis trop bête ! ... Je pensais à un jeu, j'aurai dû m'inquiéter davantage !!! {*semble s'en vouloir*}</li>\n  <li>-- Vous avez dit : <b>enrôlé</b></li>\n  <li>-- {Cléantine}<span class=\"text-amber-400 font-bold\">\":\"</span> Ce qu'il m'a fait pensé à ça ... c'est que depuis peu il s'habille souvent en noir ... il porte aussi un drôle de <span class=\"text-amber-400 font-bold\">\"médaillon\"</span>, dont il ne se sépare jamais.</li>\n  <li>-- Vous avez dit : <b>médaillon</b></li>\n  <li>-- {Cléantine}<span class=\"text-amber-400 font-bold\">\":\"</span> Un médaillon avec une sorte de flamme, tous ses amis ont le même ... Il est parti en quête à l'ouest de Redwall pour le trouver. &lt;&gt;Ho ! ... Ramenez-moi mon fils, je vous en prie ! </p>\n\n<p><b>En résumé, elle vous parle de son fils Fastalan parti avec des mages sombres dans une cave des montagnes qu'il va falloir retrouver et sauver !! Pour cela il faut avoir un certain médaillon.</b> </p>\n\n<p>Sortez de Redwall vers l'ouest comme indiqué. Vous tombez sur des B'Zurkans. Tuez-en jusqu'à faire droper un <span class=\"text-amber-400 font-bold\">\"médaillon des abîmes\"</span> puis reparlez à Cléantine. </p>\n\n<p>Dialogue : </p>\n\n<p>-- Vous avez dit : <b>médaillon</b></li>\n  <li>-- {Cléantine}<span class=\"text-amber-400 font-bold\">\":\"</span> OH ! Oui !!!! ... C'est le même médaillon que ça ! Vous devriez pouvoir vous faire passer pour l'un de leurs membres avec ça ... Allez-y vite !!! {*semble avoir récupéré une lueur d'espoir*} </p>\n</li>\n\n</ul>",
        "images": [],
        "order": 1
      },
      {
        "title": "Le Donjon",
        "description": "<p>Muni du médaillon constituez un groupe de 4 ou plus avec un (ou deux) bon heal puis allez voir du côté de la cave des Assassins Obsidiens située dans les montagnes de Mordenthal <span class=\"coords-trigger cursor-pointer bg-slate-700/50 px-1.5 py-0.5 rounded text-cyan-400 border border-slate-600 hover:bg-cyan-500/20 transition-colors\" title=\"Cliquer pour copier\">(285,170,0)</span>. </p>\n\n<p>Tout au fond de cette grotte vers le nord-ouest se trouve un lac. Vous allez y trouver un portail <span class=\"coords-trigger cursor-pointer bg-slate-700/50 px-1.5 py-0.5 rounded text-cyan-400 border border-slate-600 hover:bg-cyan-500/20 transition-colors\" title=\"Cliquer pour copier\">(1025,2580,2)</span>. </p>\n\n<p>Traversez-le avec votre groupe : </p>\n\n<p><span class=\"text-amber-400 font-bold\">\"Un groupe d'aventuriers s'aventure dans les profondeurs des abîmes de Stoneheim\"</span>. </p>\n\n<p>Le donjon vous est réservé pour 1H30 .... </p>\n\n<p>Attention : si vous en sortez vous ne pouvez y retourner. </p>\n\n<p><br/><b>Déroulement</b> </p>\n\n<p><b>Attention</b> : soyez prudents, <b>avancez groupés</b> et tuez les mobs au fur et à mesure. </p>\n\n<p>Vous devez trouver l'emplacement de 3 dalles en marchant dessus. Celui qui marche dessus obtient le message <span class=\"text-amber-400 font-bold\">\"l'atmosphère devient subitement oppressante\"</span>. </p>\n\n<p>Positions approximatives des dalles : (1707,1979) (1765,2032) (1778,1995) </p>\n\n<p>Marcher sur une dalle fera pop un boss dans la zone d'arrivée. Retournez-y <b>en groupe</b> et tuez le boss. A sa mort il dropera une rune. </p>\n\n<p>L'un d'entre vous doit ramasser les 3 runes et aller cliquer sur la statue de Tzeeneth située à l'est en haut (accompagnez-le). Il entendra : </p>\n\n<p><span class=\"text-amber-400 font-bold\">\"Vous placez vos runes dans les cavités de la statue. &lt;&gt;Une épaisse fumée semble se répandre... vous entendez des pas au loin ...\"</span>. </p>\n\n<p>Ceci fera pop Tzeeneth dans la zone d'arrivée. Retournez-y et tuez-le : <span class=\"text-amber-400 font-bold\">\"le groupe d'aventuriers a réussi à libérer Fastalan des griffes de Tzeeneth\"</span>. </p>\n\n<p>Enfin Cléantine apparaîtra. Cliquez sur elle pour quitter le donjon : <span class=\"text-amber-400 font-bold\">\"Je vous remercie d'avoir retrouvé Fastalan, ma vie aurait perdu tout son sens si vous n'aviez pas retrouvé mon fils. Voici une petite récompense pour vous remercier.\"</span> </p>\n\n<p>Vous pouvez obtenir un item intéressant (Talisman des abîmes x 3 (fréquent), pièces de triplicite, robes niveau SC comme robe terreuse robe archi robe Elentir, épée des nains, cocon de soie (rare), potion du veinard?, potion du chanceux?, anneau du cimmérien?, ornement prestigieux? ....). Elle vous donnera aussi un bonus xp. </p>\n\n<p>Bug : il y as un trou ds la barrière ou pop les boss. Du coup ils finissent souvent dans la salle. </p>\n\n<p><b>Remarque</b> : le talisman des abîmes, j'ai beau l'avoir miam j'ai pas vu grosse différence sur mes compétences :) (Mélandria) </p>\n\n<p> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> </p>",
        "images": [
          "/t4c-nms-overview/assets/quests/le-donjon-des-abimes/img_2_0.jpg",
          "/t4c-nms-overview/assets/quests/le-donjon-des-abimes/img_2_1.jpg"
        ],
        "order": 2
      }
    ],
    "credits": []
  },
  {
    "title": "Le donjon des galinettes",
    "slug": "le-donjon-des-galinettes",
    "zone": "Général",
    "prerequisites": [],
    "rewards": [],
    "npcs": [],
    "gold": "",
    "steps": [
      {
        "title": "Le donjon des Galinettes (pour niveaux 50 à 80)",
        "description": "<p>Ce donjon (plein de gallinacées!!) est destiné au niveaux 50 à 80 et sera réservé pendant une heure. </p>\n\n<p>Items nécessaires pour la quête d'accès : </p>\n\n<ul>\n  <li><b>5 Branches de noyer</b> (sur RD avec une hache du bûcheron expérimenté (23 force); il y en a 4 proches de SS et le 5ème n'est pas bien loin).</li> <li><b>Une corde</b> (chapardeurs SH, vous en avez certainement en stock)</li>\n</ul>\n\n<p>XP : Ce sont les mages avec un sort de zone qui vont cartonner (séisme puis boulder pour les prêtres) . Il est toutefois possible de le faire avec toutes les classes de personnages - en archer restez hors de la mêlée, un peu à droite en bas, en guerrier ayez une bonne CA. </p>\n\n<p>Il est possible de le faire seul en prêtre mais soyez au moins level 59 pour la béné (et n'oubliez pas la ceinture instable et des potions). Votre XP sera au bas de la fourchette (qui va de 10 à 20M/heure donc meilleure que tout autre spot hors les sentis (par ex 4/5M aux skraugs verts)). A 2 ça sera mieux et à 3 ou 4 le top!! </p>",
        "images": [],
        "order": 0
      },
      {
        "title": "La quête d'accès",
        "description": "<p>C'est partiiii... </p>\n\n<p>Comme le nom <span class=\"text-amber-400 font-bold\">\"galinettes\"</span> nous intrigue, furetons dans Stonecrest. Et voilà, nous tombons sur <b>Papy Auguste</b>, du côté de l'écurie de Stonecrest, tout à l'ouest de la ville. </p>\n\n<p>Parlons-lui <b>(travail...)</b>, Il a l'air tout désemparé car ses poules ont été volées par des skraugs. Il nous demande de l'aider à reconstruire son poulailler et à retrouver ses poules. Bien sûr cela nous fait sauter de joie et nous acquiesçons par <span class=\"text-amber-400 font-bold\">\"<b>oui</b>\"</span>. Et paf il nous demande de lui ramener <b>5 branches de noyer</b> et une <b>corde</b>. </p>\n\n<p>Sortons de la ville et tuons ces pauvres chapardeurs jusqu'à ce qu'ils dropent une corde... avec quelques items chance cela va vite (ou encore demandons à un GB, ils donneront gracieusement la corde) . Puis trouvons une hache du bûcheron expérimenté à 23 de force (les GB peuvent aussi vous aider) et hop, allons couper des noyers sur l'île de Raven's Dust (avec une hache du bûcheron expérimenté) jusqu'à obtenir 5 branches (les emplacements sont ici sur le wiki). Et voilà, vite fait bien, les noyers n'étaient pas loin de Silversky!! </p>\n\n<p>Retournons parler à <b>Papy Auguste</b> avec la <b>corde</b> et les <b>5 branches de noyer</b>. Il nous donnera une T<b>ourte à la viande</b> en récompense.... Voilà qui va nous servir ! </p>\n\n<p>Reste à retrouver le gardien skraug. Allons au village skraugs rouges ... il y a là plusieurs grottes. Visitons la grande grotte devant laquelle veille un shaman skraug. Et, une fois dans la grotte, allons vers l'Ouest ... Ha voilà un skraug vert parmi les rouges, <b>Guschnock</b>, ce doit être lui. </p>\n\n<p>Après nous être groupés et rapprochés (pas d'obstacle entre lui et nous), parlons à ce <b>Guschnock</b> (<span class=\"text-amber-400 font-bold\">\"<b>manger</b>\"</span>). Et voilà il accepte notre cadeau et nous nous trouvons transférés dans un petit donjon plein de galinettes. </p>",
        "images": [],
        "order": 1
      },
      {
        "title": "Le donjon",
        "description": "<p>Il s'agit maintenant de tuer des galinettes, ça marche très bien au sort de zone mais attention elles font assez mal, il vaut mieux être plusieurs ou alors proche du niveau 80. Seul en prêtre, avec ceinture instable et bénédiction (lev 59) il est possible de tenter l'aventure en utilisant séisme mais ce sera chaud. Il vaut mieux disposer de boulder (lev 67). </p>\n\n<p>De temps à autre nous verrons une galinette anxieuse. Cliquons dessus. Après environ une douzaine de galinettes anxieuses, <b>Ghartagol</b> le boss va apparaître. Tuons-le, ce qui fait apparaître Papy vers l'Est. Avant la fin du timer (une heure), ramassons les gemmes et potions de résist feu puis cliquons sur Papy et nous aurons notre récompense (15k or et un item comme potion de résist feu... collier de diamant...). Ensuite, il nous renverra illico à notre sanctuaire. </p>\n\n<p>XP : </p>\n\n<p>Selon niveau et groupe on peut faire de 8 à plus de 20M d'xp par heure ! </p>\n\n<p><br/></p>\n\n<p> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> </p>",
        "images": [
          "/t4c-nms-overview/assets/quests/le-donjon-des-galinettes/img_2_0.jpg"
        ],
        "order": 2
      }
    ],
    "credits": []
  },
  {
    "title": "Le Gardien et les yeux de tarentules",
    "slug": "le-gardien-et-les-yeux-de-tarentules",
    "zone": "Raven's Dust",
    "prerequisites": [],
    "rewards": [],
    "npcs": [],
    "gold": "",
    "steps": [
      {
        "title": "Introduction",
        "description": "<p>Un conseil : <b>Préférez gardez vos yeux de tarentule pour la quête du bracelet orque !</b> </p>",
        "images": [],
        "order": 0
      },
      {
        "title": "Quête du Gardien et des yeux de tarentule",
        "description": "<p>•Rapportez <b>10 yeux de tarentule</b> au PNJ <span class=\"text-amber-400 font-bold\">\"George Le Gardien\"</span> dans la même maison que le PNJ Audrey (quête des robes colorées) aux Druide d'Arakas. </p>\n\n<p>Il vous récompensera par 25 000 pièces d'or et des points d'XP selon votre niveau soit (2k XP * LVL) jusqu'au niveau 50 et (5k XP * LVL) au-delà. </p>\n\n<p><br/><b>Mot clef pour distraire le gardien:</b> <span class=\"text-amber-400 font-bold\">\"distraire\"</span> </p>\n\n<p><b>Mot clef pour donner les yeux:</b> <span class=\"text-amber-400 font-bold\">\"Yeux de tarentules\"</span> </p>\n\n<p>•<b>Attention:</b> Pour que <span class=\"text-amber-400 font-bold\">\"George Le Gardien\"</span> accepte de vous parler et de prendre vos yeux de tarentules, vous devrez le <span class=\"text-amber-400 font-bold\">\"Distraire\"</span> avant. Vous serez alors téléporté(e) en prison pour une durée de 10 minutes mais vous pouvez échapper avec la Runed Stone Tablet, avec Mot de rappel ou avec un parchemin. Ensuite, retournez voir le Gardien et il acceptera de prendre vos yeux (si personne ne lui a parlé entre-temps). Bien sûr l'idéal est de faire la quête en duo, l'un qui distrait le gardien, l'autre qui donne les yeux et reçoit l'XP! </p>\n\n<p><b>Méthode Solo:</b> Dites <span class=\"text-amber-400 font-bold\">\"Distraire\"</span> puis <span class=\"text-amber-400 font-bold\">\"Adieu\"</span> au gardien. Ensuite, vous avez moins de 5 secondes pour lui dire <span class=\"text-amber-400 font-bold\">\"Yeux de tarentules\"</span> puis <span class=\"text-amber-400 font-bold\">\"oui\"</span>. </p>\n\n<p><b>Cette quête peut être effectuée à volonté!</b> </p>\n\n<p> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> </p>",
        "images": [],
        "order": 1
      }
    ],
    "credits": []
  },
  {
    "title": "Le Sceptre des Abysses",
    "slug": "le-sceptre-des-abysses",
    "zone": "Général",
    "prerequisites": [],
    "rewards": [],
    "npcs": [],
    "gold": "",
    "steps": [
      {
        "title": "Introduction",
        "description": "<p>Pour commencer , il faut avoir accès à DI. </p>\n\n<ul>\n  <li>Partez de Redwall en direction des montagnes au centre de DI. Dans le creux du L qu'elles forment vous trouverez un passage invisible. prenez ce passage puis au fond rentrez dans le vortex , vous voila téléporté(e) dans un donjon.</li> <li>Partez au Nord Ouest puis prenez un deuxième vortex dans un petit labyrinthe qui vous amènera cette fois-ci dans une cave.</li>\n</ul>\n\n<p><br/></p>\n\n<ul>\n  <li>Traversez la cave et tuez le Beholder jusqu'à ce qu'il laisse tomber une clé des abysses (Respawn : 10 minutes)</li>\n</ul>\n\n<p>(Attention il est fort, je vous conseille d'être groupé(e) avec au moins un autre joueur). </p>\n\n<p>(Il n'y a pas forcément besoin de tuer le Beholder, souvent des clés trainent à terre). </p>\n\n<ul>\n  <li>Cette clé vous permet d'ouvrir la maison se situant au nord du temple de Redwall.</li>\n</ul>\n\n<ul>\n  <li>Trouvez dans ce donjon le Seigneur des Abysses et dites lui <span class=\"text-amber-400 font-bold\">\"Sceptre\"</span> , il vous dira d'aller voir le Beholder si vous désirez le sceptre.</li>\n</ul>\n\n<p><br/></p>\n\n<ul>\n  <li>Retournez voir le Beholder et dites lui <span class=\"text-amber-400 font-bold\">\"sceptre\"</span> : il vous parlera d'un homme : Arakis Haz.</li>\n</ul>\n\n<ul>\n  <li>Partez en direction de Windhowl, et trouvez Arakis Haz (il se situe dans une maison près des remparts, c'est celui qui vous fait la poudre de diamant (1722,1349)).</li>\n</ul>\n\n<ul>\n  <li>Dites lui <span class=\"text-amber-400 font-bold\">\"Sceptre\"</span> et il vous donnera le sceptre des Abysses.</li>\n</ul>\n\n<p><br/><b>Récompenses :</b> </p>\n\n<ul>\n  <li>Sceptre des abysses (revendable au marchand de LH 85k)</li> <li>16 000 000 xp</li> <li>2 500 pièces d'or par level.</li>\n</ul>\n\n<p><br/><i>La quête ne peut-être effectuée qu'une fois.</i> </p>\n\n<p> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> </p>",
        "images": [],
        "order": 0
      }
    ],
    "credits": []
  },
  {
    "title": "Les autres quêtes 1.25",
    "slug": "les-autres-quetes-125",
    "zone": "Général",
    "prerequisites": [],
    "rewards": [],
    "npcs": [
      "Filandrius",
      "Filandrius",
      "Sentinelle de Windhowl"
    ],
    "gold": "",
    "steps": [
      {
        "title": "Le Chef des Mercenaires (Arakas)",
        "description": "<p>A la fontaine de Lighthaven, cherchez un PNJ nommé Vincent Finelame. Parlez-lui et il vous dira qu’il a besoin d’un groupe d’héros pour faire un assaut sur trois camps différents. Dites <span class=\"text-amber-400 font-bold\">\"<b>Olin Haad</b>\"</span>, <span class=\"text-amber-400 font-bold\">\"<b>Tarnian\"</span></b>, <span class=\"text-amber-400 font-bold\">\"<b>oui</b>\"</span>, <span class=\"text-amber-400 font-bold\">\"<b>Details</b>\"</span> et il vous donnera plus de détails sur votre quête. </p>\n\n<p>Dirigez-vous vers le pont ouest de Lighthaven et une fois passé, allez vers le nord. Vous arriverez au 1<sup>er</sup> camp, facile à identifier avec les catapultes. Tuez 15 mercenaires jusqu’à ce que vienne le Lieutenant mercenaire. Tuez-le et dirigez-vous vers le 2<sup>e</sup> camp, situé juste au nord-est de celui où vous êtes. Tuez encore une fois 15 mercenaires et le Lieutenant mercenaire. Dirigez-vous vers l’est et suivez le chemin jusqu’à atteindre le 3<sup>e</sup> camp. Encore une fois tuez les 15 mercenaires et le Lieutenant mercenaire. Vous recevez le message suivant: </p>\n\n<p><i>Dès que le lieutenant mercenaire s’écroule, vidé de toute vie, vous entendez le son d’un cor de guerre venant du camp nord.</i> </p>\n\n<p>Suivez le chemin vers l'est (la route contourne la montagne et continue vers l'ouest) jusqu’à ce qu’il s’achève. Continuez vers l’ouest et vous arriverez à quelques maisons abandonnées. Trouvez le Chef mercenaire et tuez le. Retournez voir Vincent Finelame. </p>\n\n<p>Dites-lui <span class=\"text-amber-400 font-bold\">\"<b>Récompense</b>\"</span> et vous recevrez 750 xps multipliés par votre niveau actuel et 500 pièces d’or. </p>\n\n<p><b>Remarque:</b> Vous pouvez effectuer cette quête à volonté. </p>\n\n<p><b>PNJ impliqué: </b>Vincent Finelame. </p>\n\n<p><b>Mini-boss impliqués:</b> Mercenaires, Lieutenant mercenaire, Chef des mercenaires. </p>\n\n<p><b>Récompenses acquises:</b> (750*lvl actuel) xps, 500 pièces d’or. </p>",
        "images": [],
        "order": 0
      },
      {
        "title": "Le Livre de la Connaissance Arcane (ceinture instable) (SH)",
        "description": "<p>Allez à la Grande Bibliothèque (à l’est de l’entrée de la crypte de Raven’s Dust) et parlez à Filandrius. Dites <span class=\"text-amber-400 font-bold\">\"<b>La magie étrangère</b>\"</span>, <span class=\"text-amber-400 font-bold\">\"<b>Besoin</b>\"</span>, <span class=\"text-amber-400 font-bold\">\"<b>Filnar'thir</b>\"</span>, <span class=\"text-amber-400 font-bold\">\"<b>Ténèbres</b>\"</span>, <span class=\"text-amber-400 font-bold\">\"<b>Récupérer ce livre</b>\"</span> et il vous enverra tuer Anthor le Fou et prendre le Livre de la Connaissance Arcane. </p>\n\n<p>Allez à Stoneheim et trouvez Anthor (il est situé au nord-est de l’entrée de la grotte aux araignées, juste avant les skraugs verts). Maintenant tuez Anthor le Fou, vous recevrez le Livre de la Connaissance Arcane. </p>\n\n<p><b>Tip</b> : Si vous l'attaquez en physique (war, archer, ou sort physique) et n'êtes pas très fort, après 20 ou 30 secondes il va se régénérer vite et vous aurez du mal à le tuer. Dans ce cas faites vous aider par un mage qui va l'affaiblir à l'aide d'un sort mental et attaquez le à ce moment. </p>\n\n<p>Retournez-voir Filandrius, cliquez dessus et il prendra le Livre. Vous recevrez une ceinture de protection instable et une gemme de protection instable. Vous pouvez aussi lui demander de vous enseigner des nouveaux sorts (si vous avez les bonnes stats). </p>\n\n<p><b>PNJ impliqués: </b>Filandrius </p>\n\n<p><b>Mini-boss impliqués:</b> Anthor le Fou </p>\n\n<p><b>Récompenses acquises:</b> Ceinture de Protection Instable, Gemme de Protection Instable (0 stats), Nouveaux sorts disponibles. </p>\n\n<p>PS1: Si par accident vous deletez la ceinture retournez parler à filandrius il vous refera faire la quête. </p>\n\n<p>PS2: Vous conservez la ceinture en cas de renaissance ! </p>",
        "images": [],
        "order": 1
      },
      {
        "title": "Le Faucheur de Vie (bracelet et gemme IMMO) (SH)",
        "description": "<p>La quête des Faucheurs de Vie consiste à tuer les 3 Faucheurs de Vie situés sur chaque île, à raison d’un par île. </p>\n\n<p>Dirigez-vous vers Windhowl et <u>parlez à la sentinelle de Windhowl</u> (située aux portes de la ville). Dites <span class=\"text-amber-400 font-bold\">\"<b>aide</b>\"</span> et il vous dira que derrière les portes se trouve Hel, le Faucheur de Vie d’Arakas. Cherchez-le (c’est un PNJ non-séraphe situé vers le nord-ouest de Windhowl <span class=\"coords-trigger cursor-pointer bg-slate-700/50 px-1.5 py-0.5 rounded text-cyan-400 border border-slate-600 hover:bg-cyan-500/20 transition-colors\" title=\"Cliquer pour copier\">(1663,1044,0)</span>) et cliquez sur lui jusqu’à ce qu’il devienne un PNJ néphilim. Tuez-le et vous recevrez la pierre spirituelle de Hel. Retournez voir la sentinelle et dites <span class=\"text-amber-400 font-bold\">\"<b>récompense\"</span></b>, vous recevrez 100 xps multipliés par votre niveau et 500 pièces d’or multipliées par votre niveau. </p>\n\n<p>Maintenant, <u>allez parler à Filandrius</u> (situé dans la Grande Bibliothèque de RD). Il reconnaîtra la pierre spirituelle de Hel et vous dira que c’est intéressant. Dites <span class=\"text-amber-400 font-bold\">\"<b>Intéressant</b>\"</span>, <span class=\"text-amber-400 font-bold\">\"I<b>nnombrables richesses</b>\"</span>, <span class=\"text-amber-400 font-bold\">\"P<b>ierre spirituelle</b>\"</span> (et non le mot clef pierre spirituelle qui apparaît dans le dialogue), <span class=\"text-amber-400 font-bold\">\"<b>Noms</b>\"</span> et <u>il vous donnera le nom des 3 Faucheurs de Vie</u> : Jormungand, Hel et Fenrir. Il vous dira aussi qu’une fois les 3 pierres spirituelles réunies vous devrez trouvez un portail au village des Centaures. </p>\n\n<p>Dirigez-vous ensuite vers la Tour de Zhakar. Allez vers l’ouest et passez au-dessus de Stonehenge. Suivez la ligne de montagnes et tournez vers l’est à la première ouverture. Continuez vers l’est et vous trouverez le Faucheur de Vie de Raven’s Dust, Jormungand qui ressemble lui aussi à un néphilim <span class=\"coords-trigger cursor-pointer bg-slate-700/50 px-1.5 py-0.5 rounded text-cyan-400 border border-slate-600 hover:bg-cyan-500/20 transition-colors\" title=\"Cliquer pour copier\">(480, 2010, 0)</span>. Tuez-le et vous recevrez sa pierre spirituelle. </p>\n\n<p>Allez jusque Stoneheim et prenez la route allant de Stonecrest jusqu’au château de Mordenthal. Suivez le chemin jusqu’à atteindre les montagnes. Dirigez-vous alors vers l’ouest vers la côte. Longez la côte vers le nord et vous trouverez Fenrir, le Faucheur de Vie de Stoneheim <span class=\"coords-trigger cursor-pointer bg-slate-700/50 px-1.5 py-0.5 rounded text-cyan-400 border border-slate-600 hover:bg-cyan-500/20 transition-colors\" title=\"Cliquer pour copier\">(155, 215, 0)</span>. Il ressemble aussi à un néphilim. Tuez-le et vous recevrez sa pierre spirituelle. </p>\n\n<p>Maintenant allez au village des Centaures. Dépassez le château et allez vers l’est (la route en direction de la cave aux centaures). Dès que vous avez passé le petit lac, dirigez-vous vers le sud. Vous arriverez au portail (en 1127, 1191, 0). Cliquez sur ce portail. Il prendra les 3 pierres spirituelles, les mélangera et vous serez téléporté à côté du Faucheur de Vie. Tuez-le et vous obtiendrez le Cristal de la Providence. Dépêchez-vous car le temps est limité. Si vous avez un deuxième jeu de pierres, vous pourrez vous faire aider par un ami mais vous devrez achever le Faucheur vous-même. </p>\n\n<p>Retournez voir Filandrius à la Grande Bibliothèque et dites <span class=\"text-amber-400 font-bold\">\"<b>délivrer</b>\"</span>. Filandrius prendra le Cristal de la Providence et vous recevrez le Bracelet et la Gemme des Immortels. </p>\n\n<p><b>Remarque #1 :</b> Vous devez être au minimum niveau 50 pour commencer cette quête.... et beaucoup plus pour la finir !! </p>\n\n<p><b>Remarque #2 : </b>La récompense donnée par la Sentinelle ne peut être obtenue qu’une seule fois par renaissance. </p>\n\n<p><b>PNJ impliqués : </b>Filandrius, Sentinelle de Windhowl </p>\n\n<p><b>Mini-boss impliqués :</b> Jormungand, Hel, Fenrir, le Faucheur de Vie (Harvester of Life) </p>\n\n<p><b>Récompenses acquises :</b> Bracelet et Gemme des Immortels(0 stats), 100 xp * niveau actuel, 500 po * niveau actuel. </p>",
        "images": [],
        "order": 2
      },
      {
        "title": "Voyage entre les plans (réservé aux Séraphes level 50+)",
        "description": "<p>Vous remarquerez que dans chaque ville (et pas que dans les villes) se trouve un portail auxquel vous n'avez pas accès. </p>\n\n<p>Vous ne pourrez y accéder que si vous êtes Séraphe/Néphi, au moins level 50 et avez terminé la quête d'accès. </p>\n\n<p>Pour avoir accès à l'Interplan vous devez activer 8 portails (sur 10). Ces portails sont situés à : </p>\n<ol><li>Lighthaven (AR)</li> <li>Windhowl (AR)</li> <li>Camp des Druides (AR)</li> <li>Silversky (RD)</li> <li>Oasis (RD)</li> <li>Bibliothèque (RD)</li> <li>Stonecrest (SH)</li> <li>Ville Centaure (SH)</li></ol>\n<p>Pour activer l'accès approchez-vous d’un portail et sautez dedans. Dites <span class=\"text-amber-400 font-bold\">\"<b>Creations</b>\"</span>, <span class=\"text-amber-400 font-bold\">\"<b>Stop</b>\"</span>, <span class=\"text-amber-400 font-bold\">\"<b>Yes</b>\"</span>. Vous entrez alors à l’intérieur et vous apparaîtrez autre part. Vous avez environ 60 secondes pour tuer Doppelganger. Entrez dans chacun des 8 portails et faites de même. Vous ne pourrez pas rentrez dans un portail déjà fait avant d’avoir fini les huit. Terminez les 8 et vous pourrez traverser les plans (Plane Walking) (cela signifie que vous pouvez utiliser les portails pour voyager de l'un à l'autre). Cette carte de l'interplan vous montre les destinations des portails quand vous traversez les plans. </p>\n\n<p><b>Remarque 1 :</b> Le meilleur moyen pour tuer Doppelganger, même pour les mages, ce sont les armes physiques (ou à mains nues si vous bénéficiez d'une bonne force). Il est conseillé d'activer si vous en avez vos boucliers offensifs. Les sorts, à moins d’être à un niveau supérieur à 150 ne leur font rien. </p>\n\n<p><b>Remarque 2</b> : Vous perdez l'accès à chaque renaissance et devrez attendre le niveau 50 pour le refaire. </p>\n\n<p><b>Remarque 3</b> : Niève et Redwall seront automatiquement activés </p>\n\n<p><b>Mini-boss impliqués :</b> Doppelganger </p>\n\n<p><b>Récompense acquise :</b> Planewalking (ou interplan) (plus besoin d’acheter des parchemins de LH, WH, SS, etc.) </p>",
        "images": [],
        "order": 3
      },
      {
        "title": "L’Ancienne Plaque Céleste (Quête réservée aux Séraphes)(non répétable)",
        "description": "<p>Près de la fontaine de Stonecrest, vous trouverez un PNJ appelé Tristan. Parlez-lui et répondez à ses questions. Dites-lui <span class=\"text-amber-400 font-bold\">\"<b>oui</b>\"</span>, <span class=\"text-amber-400 font-bold\">\"<b>oui</b>\"</span>, <span class=\"text-amber-400 font-bold\">\"<b>récemment</b>\"</span>, <span class=\"text-amber-400 font-bold\">\"<b>déterraient</b>\"</span> et vous entendrez une histoire au sujet de deux hommes qui creusaient le sol avec des pelles. Ils finirent par trouver un corps de Séraphin et sont partis vers l’est dans leur roulotte. </p>\n\n<p>Allez vers l’est et suivez le chemin menant aux araignées. Juste avant d’y arriver, vous verrez un petit camp avec des guerriers Obsidian Conclave. Tuez-en environ dix jusqu’à ce qu’apparaisse le commandant Mordred. Tuez-le et vous obtiendrez une petite clé en fer. Avec celle-ci, ouvrez le coffre situé dans le camp, vous obtiendrez l'ancienne plaque céleste (indropable). </p>\n\n<p><b>PNJ impliqué: </b>Tristan </p>\n\n<p><b>Mini-boss impliqué:</b> Commandant Mordred </p>\n\n<p><b>Récompense acquise:</b> le plastron Ancienne Plaque Céleste (Stats: 100 End, 30 For, 30 Dex, 30 Int, 30 Sag) (indropable) </p>\n\n<ul>\n  <li><b>Bonus du plastron</b> : Quand vous êtes attaqué, un sort s'enclenche sur la gauche avec les autres sorts : il boost la CA, régénère mana vie et plus, très utile dans les zones ou il y a beaucoup de mobs surtout avec les sorts de zone comme les boucliers de feu air eau ou électrique.</li> <li><b>Attention</b> : ne pas deleter avant d'être 260, vous savez pas quand elle pourrait servir.</li>\n</ul>\n\n<p><br/></p>\n\n<p> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> </p>",
        "images": [],
        "order": 4
      }
    ],
    "credits": []
  },
  {
    "title": "Les autres quêtes 1.25",
    "slug": "les-autres-quetes-125lcdm",
    "zone": "Général",
    "prerequisites": [],
    "rewards": [],
    "npcs": [
      "Filandrius",
      "Filandrius",
      "Sentinelle de Windhowl"
    ],
    "gold": "",
    "steps": [
      {
        "title": "Le Chef des Mercenaires (Arakas)",
        "description": "<p>A la fontaine de Lighthaven, cherchez un PNJ nommé Vincent Finelame. Parlez-lui et il vous dira qu’il a besoin d’un groupe d’héros pour faire un assaut sur trois camps différents. Dites <span class=\"text-amber-400 font-bold\">\"<b>Olin Haad</b>\"</span>, <span class=\"text-amber-400 font-bold\">\"<b>Tarnian\"</span></b>, <span class=\"text-amber-400 font-bold\">\"<b>oui</b>\"</span>, <span class=\"text-amber-400 font-bold\">\"<b>Details</b>\"</span> et il vous donnera plus de détails sur votre quête. </p>\n\n<p>Dirigez-vous vers le pont ouest de Lighthaven et une fois passé, allez vers le nord. Vous arriverez au 1<sup>er</sup> camp, facile à identifier avec les catapultes. Tuez 15 mercenaires jusqu’à ce que vienne le Lieutenant mercenaire. Tuez-le et dirigez-vous vers le 2<sup>e</sup> camp, situé juste au nord-est de celui où vous êtes. Tuez encore une fois 15 mercenaires et le Lieutenant mercenaire. Dirigez-vous vers l’est et suivez le chemin jusqu’à atteindre le 3<sup>e</sup> camp. Encore une fois tuez les 15 mercenaires et le Lieutenant mercenaire. Vous recevez le message suivant: </p>\n\n<p><i>Dès que le lieutenant mercenaire s’écroule, vidé de toute vie, vous entendez le son d’un cor de guerre venant du camp nord.</i> </p>\n\n<p>Suivez le chemin vers l'est (la route contourne la montagne et continue vers l'ouest) jusqu’à ce qu’il s’achève. Continuez vers l’ouest et vous arriverez à quelques maisons abandonnées. Trouvez le Chef mercenaire et tuez le. Retournez voir Vincent Finelame. </p>\n\n<p>Dites-lui <span class=\"text-amber-400 font-bold\">\"<b>Récompense</b>\"</span> et vous recevrez 750 xps multipliés par votre niveau actuel et 500 pièces d’or. </p>\n\n<p><b>Remarque:</b> Vous pouvez effectuer cette quête à volonté. </p>\n\n<p><b>PNJ impliqué: </b>Vincent Finelame. </p>\n\n<p><b>Mini-boss impliqués:</b> Mercenaires, Lieutenant mercenaire, Chef des mercenaires. </p>\n\n<p><b>Récompenses acquises:</b> (750*lvl actuel) xps, 500 pièces d’or. </p>",
        "images": [],
        "order": 0
      },
      {
        "title": "Le Livre de la Connaissance Arcane (ceinture instable) (SH)",
        "description": "<p>Allez à la Grande Bibliothèque (à l’est de l’entrée de la crypte de Raven’s Dust) et parlez à Filandrius. Dites <span class=\"text-amber-400 font-bold\">\"<b>La magie étrangère</b>\"</span>, <span class=\"text-amber-400 font-bold\">\"<b>Besoin</b>\"</span>, <span class=\"text-amber-400 font-bold\">\"<b>Filnar'thir</b>\"</span>, <span class=\"text-amber-400 font-bold\">\"<b>Ténèbres</b>\"</span>, <span class=\"text-amber-400 font-bold\">\"<b>Récupérer ce livre</b>\"</span> et il vous enverra tuer Anthor le Fou et prendre le Livre de la Connaissance Arcane. </p>\n\n<p>Allez à Stoneheim et trouvez Anthor (il est situé au nord-est de l’entrée de la grotte aux araignées, juste avant les skraugs verts). Maintenant tuez Anthor le Fou, vous recevrez le Livre de la Connaissance Arcane. </p>\n\n<p><b>Tip</b> : Si vous l'attaquez en physique (war, archer, ou sort physique) et n'êtes pas très fort, après 20 ou 30 secondes il va se régénérer vite et vous aurez du mal à le tuer. Dans ce cas faites vous aider par un mage qui va l'affaiblir à l'aide d'un sort mental et attaquez le à ce moment. </p>\n\n<p>Retournez-voir Filandrius, cliquez dessus et il prendra le Livre. Vous recevrez une ceinture de protection instable et une gemme de protection instable. Vous pouvez aussi lui demander de vous enseigner des nouveaux sorts (si vous avez les bonnes stats). </p>\n\n<p><b>PNJ impliqués: </b>Filandrius </p>\n\n<p><b>Mini-boss impliqués:</b> Anthor le Fou </p>\n\n<p><b>Récompenses acquises:</b> Ceinture de Protection Instable, Gemme de Protection Instable (0 stats), Nouveaux sorts disponibles. </p>\n\n<p>PS1: Si par accident vous deletez la ceinture retournez parler à filandrius il vous refera faire la quête. </p>\n\n<p>PS2: Vous conservez la ceinture en cas de renaissance ! </p>",
        "images": [],
        "order": 1
      },
      {
        "title": "Le Faucheur de Vie (bracelet et gemme IMMO) (SH)",
        "description": "<p>La quête des Faucheurs de Vie consiste à tuer les 3 Faucheurs de Vie situés sur chaque île, à raison d’un par île. </p>\n\n<p>Dirigez-vous vers Windhowl et <u>parlez à la sentinelle de Windhowl</u> (située aux portes de la ville). Dites <span class=\"text-amber-400 font-bold\">\"<b>aide</b>\"</span> et il vous dira que derrière les portes se trouve Hel, le Faucheur de Vie d’Arakas. Cherchez-le (c’est un PNJ non-séraphe situé vers le nord-ouest de Windhowl <span class=\"coords-trigger cursor-pointer bg-slate-700/50 px-1.5 py-0.5 rounded text-cyan-400 border border-slate-600 hover:bg-cyan-500/20 transition-colors\" title=\"Cliquer pour copier\">(1663,1044,0)</span>) et cliquez sur lui jusqu’à ce qu’il devienne un PNJ néphilim. Tuez-le et vous recevrez la pierre spirituelle de Hel. Retournez voir la sentinelle et dites <span class=\"text-amber-400 font-bold\">\"<b>récompense\"</span></b>, vous recevrez 100 xps multipliés par votre niveau et 500 pièces d’or multipliées par votre niveau. </p>\n\n<p>Maintenant, <u>allez parler à Filandrius</u> (situé dans la Grande Bibliothèque de RD). Il reconnaîtra la pierre spirituelle de Hel et vous dira que c’est intéressant. Dites <span class=\"text-amber-400 font-bold\">\"<b>Intéressant</b>\"</span>, <span class=\"text-amber-400 font-bold\">\"I<b>nnombrables richesses</b>\"</span>, <span class=\"text-amber-400 font-bold\">\"P<b>ierre spirituelle</b>\"</span> (et non le mot clef pierre spirituelle qui apparaît dans le dialogue), <span class=\"text-amber-400 font-bold\">\"<b>Noms</b>\"</span> et <u>il vous donnera le nom des 3 Faucheurs de Vie</u> : Jormungand, Hel et Fenrir. Il vous dira aussi qu’une fois les 3 pierres spirituelles réunies vous devrez trouvez un portail au village des Centaures. </p>\n\n<p>Dirigez-vous ensuite vers la Tour de Zhakar. Allez vers l’ouest et passez au-dessus de Stonehenge. Suivez la ligne de montagnes et tournez vers l’est à la première ouverture. Continuez vers l’est et vous trouverez le Faucheur de Vie de Raven’s Dust, Jormungand qui ressemble lui aussi à un néphilim <span class=\"coords-trigger cursor-pointer bg-slate-700/50 px-1.5 py-0.5 rounded text-cyan-400 border border-slate-600 hover:bg-cyan-500/20 transition-colors\" title=\"Cliquer pour copier\">(480, 2010, 0)</span>. Tuez-le et vous recevrez sa pierre spirituelle. </p>\n\n<p>Allez jusque Stoneheim et prenez la route allant de Stonecrest jusqu’au château de Mordenthal. Suivez le chemin jusqu’à atteindre les montagnes. Dirigez-vous alors vers l’ouest vers la côte. Longez la côte vers le nord et vous trouverez Fenrir, le Faucheur de Vie de Stoneheim <span class=\"coords-trigger cursor-pointer bg-slate-700/50 px-1.5 py-0.5 rounded text-cyan-400 border border-slate-600 hover:bg-cyan-500/20 transition-colors\" title=\"Cliquer pour copier\">(155, 215, 0)</span>. Il ressemble aussi à un néphilim. Tuez-le et vous recevrez sa pierre spirituelle. </p>\n\n<p>Maintenant allez au village des Centaures. Dépassez le château et allez vers l’est (la route en direction de la cave aux centaures). Dès que vous avez passé le petit lac, dirigez-vous vers le sud. Vous arriverez au portail (en 1127, 1191, 0). Cliquez sur ce portail. Il prendra les 3 pierres spirituelles, les mélangera et vous serez téléporté à côté du Faucheur de Vie. Tuez-le et vous obtiendrez le Cristal de la Providence. Dépêchez-vous car le temps est limité. Si vous avez un deuxième jeu de pierres, vous pourrez vous faire aider par un ami mais vous devrez achever le Faucheur vous-même. </p>\n\n<p>Retournez voir Filandrius à la Grande Bibliothèque et dites <span class=\"text-amber-400 font-bold\">\"<b>délivrer</b>\"</span>. Filandrius prendra le Cristal de la Providence et vous recevrez le Bracelet et la Gemme des Immortels. </p>\n\n<p><b>Remarque #1 :</b> Vous devez être au minimum niveau 50 pour commencer cette quête.... et beaucoup plus pour la finir !! </p>\n\n<p><b>Remarque #2 : </b>La récompense donnée par la Sentinelle ne peut être obtenue qu’une seule fois par renaissance. </p>\n\n<p><b>PNJ impliqués : </b>Filandrius, Sentinelle de Windhowl </p>\n\n<p><b>Mini-boss impliqués :</b> Jormungand, Hel, Fenrir, le Faucheur de Vie (Harvester of Life) </p>\n\n<p><b>Récompenses acquises :</b> Bracelet et Gemme des Immortels(0 stats), 100 xp * niveau actuel, 500 po * niveau actuel. </p>",
        "images": [],
        "order": 2
      },
      {
        "title": "Voyage entre les plans (réservé aux Séraphes level 50+)",
        "description": "<p>Vous remarquerez que dans chaque ville (et pas que dans les villes) se trouve un portail auxquel vous n'avez pas accès. </p>\n\n<p>Vous ne pourrez y accéder que si vous êtes Séraphe/Néphi, au moins level 50 et avez terminé la quête d'accès. </p>\n\n<p>Pour avoir accès à l'Interplan vous devez activer 8 portails (sur 10). Ces portails sont situés à : </p>\n<ol><li>Lighthaven (AR)</li> <li>Windhowl (AR)</li> <li>Camp des Druides (AR)</li> <li>Silversky (RD)</li> <li>Oasis (RD)</li> <li>Bibliothèque (RD)</li> <li>Stonecrest (SH)</li> <li>Ville Centaure (SH)</li></ol>\n<p>Pour activer l'accès approchez-vous d’un portail et sautez dedans. Dites <span class=\"text-amber-400 font-bold\">\"<b>Creations</b>\"</span>, <span class=\"text-amber-400 font-bold\">\"<b>Stop</b>\"</span>, <span class=\"text-amber-400 font-bold\">\"<b>Yes</b>\"</span>. Vous entrez alors à l’intérieur et vous apparaîtrez autre part. Vous avez environ 60 secondes pour tuer Doppelganger. Entrez dans chacun des 8 portails et faites de même. Vous ne pourrez pas rentrez dans un portail déjà fait avant d’avoir fini les huit. Terminez les 8 et vous pourrez traverser les plans (Plane Walking) (cela signifie que vous pouvez utiliser les portails pour voyager de l'un à l'autre). Cette carte de l'interplan vous montre les destinations des portails quand vous traversez les plans. </p>\n\n<p><b>Remarque 1 :</b> Le meilleur moyen pour tuer Doppelganger, même pour les mages, ce sont les armes physiques (ou à mains nues si vous bénéficiez d'une bonne force). Il est conseillé d'activer si vous en avez vos boucliers offensifs. Les sorts, à moins d’être à un niveau supérieur à 150 ne leur font rien. </p>\n\n<p><b>Remarque 2</b> : Vous perdez l'accès à chaque renaissance et devrez attendre le niveau 50 pour le refaire. </p>\n\n<p><b>Remarque 3</b> : Niève et Redwall seront automatiquement activés </p>\n\n<p><b>Mini-boss impliqués :</b> Doppelganger </p>\n\n<p><b>Récompense acquise :</b> Planewalking (ou interplan) (plus besoin d’acheter des parchemins de LH, WH, SS, etc.) </p>",
        "images": [],
        "order": 3
      },
      {
        "title": "L’Ancienne Plaque Céleste (Quête réservée aux Séraphes)(non répétable)",
        "description": "<p>Près de la fontaine de Stonecrest, vous trouverez un PNJ appelé Tristan. Parlez-lui et répondez à ses questions. Dites-lui <span class=\"text-amber-400 font-bold\">\"<b>oui</b>\"</span>, <span class=\"text-amber-400 font-bold\">\"<b>oui</b>\"</span>, <span class=\"text-amber-400 font-bold\">\"<b>récemment</b>\"</span>, <span class=\"text-amber-400 font-bold\">\"<b>déterraient</b>\"</span> et vous entendrez une histoire au sujet de deux hommes qui creusaient le sol avec des pelles. Ils finirent par trouver un corps de Séraphin et sont partis vers l’est dans leur roulotte. </p>\n\n<p>Allez vers l’est et suivez le chemin menant aux araignées. Juste avant d’y arriver, vous verrez un petit camp avec des guerriers Obsidian Conclave. Tuez-en environ dix jusqu’à ce qu’apparaisse le commandant Mordred. Tuez-le et vous obtiendrez une petite clé en fer. Avec celle-ci, ouvrez le coffre situé dans le camp, vous obtiendrez l'ancienne plaque céleste (indropable). </p>\n\n<p><b>PNJ impliqué: </b>Tristan </p>\n\n<p><b>Mini-boss impliqué:</b> Commandant Mordred </p>\n\n<p><b>Récompense acquise:</b> le plastron Ancienne Plaque Céleste (Stats: 100 End, 30 For, 30 Dex, 30 Int, 30 Sag) (indropable) </p>\n\n<ul>\n  <li><b>Bonus du plastron</b> : Quand vous êtes attaqué, un sort s'enclenche sur la gauche avec les autres sorts : il boost la CA, régénère mana vie et plus, très utile dans les zones ou il y a beaucoup de mobs surtout avec les sorts de zone comme les boucliers de feu air eau ou électrique.</li> <li><b>Attention</b> : ne pas deleter avant d'être 260, vous savez pas quand elle pourrait servir.</li>\n</ul>\n\n<p><br/></p>\n\n<p> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> </p>",
        "images": [],
        "order": 4
      }
    ],
    "credits": []
  },
  {
    "title": "Petites quêtes pour s'enrichir (un peu)",
    "slug": "petites-quetes-pour-senrichir-un-peu",
    "zone": "Général",
    "prerequisites": [],
    "rewards": [],
    "npcs": [],
    "gold": "",
    "steps": [
      {
        "title": "Le dragon Darkfang",
        "description": "<p>Allez voir le dragon Darkfang près de la fontaine, il vous donnera 5000 pièces d'or, mais une seule fois! Cela vous permettra d'acheter une ou plusieurs bénédictions auprès de Zélina, située au temple. Bénédiction qui vous sera bien utile lors de vos premiers niveaux. </p>",
        "images": [
          "/t4c-nms-overview/assets/quests/petites-quetes-pour-senrichir-un-peu/img_0_0.jpg"
        ],
        "order": 0
      },
      {
        "title": "La quête des rats et les poils de rats",
        "description": "<p>A la fin de la quête, le samaritain vous donne 3000 pièces d'or en récompense en plus de l'xp gagné. </p>\n\n<p>Et surtout, durant la quête, amassez les poils de rats, vous pourrez les vendre à Fulika, la fille en jaune au milieu du village métiers situé au Sud de LH (2850,1300) au prix de 1667 pièces d'or l'unité. </p>",
        "images": [],
        "order": 1
      },
      {
        "title": "Les défenses d'ogre",
        "description": "<p>Lorsque vous serez un peu plus fort, allez tuez des ogres - ils sont au sud ouest de la ville - vous pourrez vendre les défenses d'ogre obtenues à Fulika pour 9444 pièces d'or l'unité. </p>\n\n<p>Voilà, vous êtes presque riches !! </p>\n\n<p> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> </p>",
        "images": [],
        "order": 2
      }
    ],
    "credits": []
  },
  {
    "title": "Puissance Ancestrale Humterre (Aura réservée aux humains)",
    "slug": "puissance-ancestrale-humterre-aura-reservee-aux-humains",
    "zone": "Général",
    "prerequisites": [],
    "rewards": [],
    "npcs": [],
    "gold": "",
    "steps": [
      {
        "title": "L'AURA HUMTERRE",
        "description": "<p>Une fois l'accès à la Cave Humterre validé, </p>\n\n<p>- trouver <b>Kwazor</b> un mage au fond de la cave Humterre et lui parler (lui dire <span class=\"text-amber-400 font-bold\">\"travail\"</span>), il vous parle du livre d'Humterre et d'un vieillard. </p>\n\n<p>- aller voir le <b>Vieillard Sénile </b>dans le village Métiers de Redwall et lui parler (lui dire <span class=\"text-amber-400 font-bold\">\"travail\"</span>), il vous parle de potion de jouvence et du squelette Morgool (cimetière de Redwall). </p>\n\n<p>- aller voir le <b>Squelette de Redwall</b> et lui parler (lui dire <span class=\"text-amber-400 font-bold\">\"travail\"</span>), il vous donnera une potion de jouvence contre 4 os de squelette (qui drop aux squelettes dans la cave minotaure sur RD) et un crane du bouffon morbide (drop du bouffon au château de SS). </p>\n\n<p>- porter la potion de jouvence au <b>Vieillard Sénile</b> qui vous donnera le livre en échange. </p>\n\n<p>- porter le livre à <b>Kwazor</b> qui vous proposera une épreuve : vous êtes téléporté dans une cave et vous devez tuer 50 mobs en 10 mn pour réussir. </p>\n\n<p>- si l'épreuve est réussie vous apprenez l'aura humterre. </p>\n\n<p>MAJ du 4/4/18 : la consommation de mana pour réactiver l'aura est divisée par deux ! </p>\n\n<p> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> </p>",
        "images": [],
        "order": 0
      }
    ],
    "credits": []
  },
  {
    "title": "Quete de Nirtelle , ou la quête de l'institut de beauté",
    "slug": "quete-de-nirtelle-ou-la-quete-de-linstitut-de-beaute",
    "zone": "Général",
    "prerequisites": [],
    "rewards": [],
    "npcs": [],
    "gold": "",
    "steps": [
      {
        "title": "Quête de Nirtelle ou Institut de beauté",
        "description": "<p>Rendez vous à Lighthaven auprès de Nirtelle, une jeune femme qui habite dans une maison à l'Est de la taverne. Parlez lui. </p>\n\n<p><b>Elle vous demandera de lui rapporter :</b> </p>\n\n<p><br/><b>Cette quête augmente votre chance aléatoirement entre +1 et +20 pendant 12 heures IG. </b> </p>\n\n<p><b>Il faut de la chance pour avoir plus de chance !!</b> </p>\n\n<p><b>Nirtelle vous donne aussi 50K XP comme récompense.</b> </p>\n\n<p> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> </p>",
        "images": [],
        "order": 0
      }
    ],
    "credits": []
  },
  {
    "title": "Quête des ornements",
    "slug": "quete-des-ornements",
    "zone": "Général",
    "prerequisites": [],
    "rewards": [],
    "npcs": [],
    "gold": "",
    "steps": [
      {
        "title": "Quête des ornements",
        "description": "<p>Vous devez être niveau 200+ pour pouvoir vous rendre Académie -2. </p>\n\n<p>Prenez sur vous un ou plusieurs lots de 50 minerais de : </p>\n\n<ul>\n  <li>rubis</li> <li>émeraude</li> <li>diamant</li> <li>saphir</li> <li>titane pour lingot de titane (qui n'est pas cité)</li>\n</ul>\n\n<p>Rendez vous chez<b> Retally</b>, dans une maison aux Yétis de la serre, à l'Académie-2. </p>\n\n<p>Parlez-lui : mots clés <span class=\"text-amber-400 font-bold\">\"minerais\"</span> <span class=\"text-amber-400 font-bold\">\"ornements\"</span> <span class=\"text-amber-400 font-bold\">\"pierres\"</span> et le nom des minerais que vous voulez transformer. </p>\n\n<p>Retally transformera votre lot de 50 minerais en un ornement et vous donnera 2,5M xp/level selon votre level. </p>\n\n<p>Par exemple au level 200, un ornement vous rapportera 500M. Intéressant pour <span class=\"text-amber-400 font-bold\">\"petits\"</span> levels. </p>\n\n<p> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> </p>",
        "images": [
          "/t4c-nms-overview/assets/quests/quete-des-ornements/img_0_0.jpg"
        ],
        "order": 0
      }
    ],
    "credits": []
  },
  {
    "title": "Quete du présent des alvors",
    "slug": "quete-du-present-des-alvors",
    "zone": "Général",
    "prerequisites": [],
    "rewards": [],
    "npcs": [],
    "gold": "",
    "steps": [
      {
        "title": "Description",
        "description": "<ul>\n  \n  <li>\n<p>Tout d'abord, il faut récupérer des perles de pluie: </p>\n\n<p>Soit auprès d'un Gobelin particulier qui se trouve au niveau -3 des sous-sols du temple de Lighthaven. Il est mêlé aux autres Gobelins dans la salle de droite et n'a aucun signe de distinction si ce n'est qu'il droppe ces perles. </p>\n\n<p>Taux de drop anecdotique, vous devrez tuer quelques centaines de fois le même gobelin pour loot les 80 perles, comptez entre 40 et 50 heures au minimum. Si vous etes chanceux, le temps de repop de l'item sur le gobelin varie entre 2 et 15 minutes (D'apres Knuckles et son camping incessant, mouarfff !). </p>\n\n<p>Soit au niveau -2 de l'Académie, dans le coffre situé dans la zone des embaumés. </p>\n\n<p></li>\n  <li><span typeof=<span class=\"text-amber-400 font-bold\">\"mw:File\"</span>><a href=<span class=\"text-amber-400 font-bold\">\"https://static.wikia.nocookie.net/t4c/images/0/06/Perles.JPG/revision/latest?cb=20091017085656&amp;path-prefix=fr\"</span> ><img alt=<span class=\"text-amber-400 font-bold\">\"Perles\"</span> src=<span class=\"text-amber-400 font-bold\">\"https://static.wikia.nocookie.net/t4c/images/0/06/Perles.JPG/revision/latest?cb=20091017085656&amp;path-prefix=fr\"</span> decoding=<span class=\"text-amber-400 font-bold\">\"async\"</span> loading=<span class=\"text-amber-400 font-bold\">\"lazy\"</span> width=<span class=\"text-amber-400 font-bold\">\"631\"</span> height=<span class=\"text-amber-400 font-bold\">\"616\"</span> data-image-name=<span class=\"text-amber-400 font-bold\">\"Perles.JPG\"</span> data-image-key=<span class=\"text-amber-400 font-bold\">\"Perles.JPG\"</span> data-relevant=<span class=\"text-amber-400 font-bold\">\"1\"</span>></a></span> </p>\n\n<p></li>\n  <li>Une fois que vous aurez récupéré plusieurs perles, rendez-vous sur StoneHeim, au Sud de la maison du prêtre qui transforme les fioles d'eau cristalline en fioles d'eau bénite. Vous devrez trouver Aqua Laguna qui se trouve un peu au-dessus du chemin, parmi les loups. A l'initialisation du dialogue, il mettra en évidence le mot-clef <span class=\"text-amber-400 font-bold\">\"sagesse\"</span>. Poursuivez donc le dialogue dans cette voie en suivant les mots-clefs. Au mot-clef <span class=\"text-amber-400 font-bold\">\"récompense\"</span>, il vous transformera toutes vos perles de pluie en potions de premier secours, et ceci en une fois.</li>\n  <li>Une fois les potions en main, direction Raven's Dust, au Nord-Ouest des montagnes entourant la tour de Zhakar. Vous trouverez Hably Cover sur une petite plage. Dîtes-lui <span class=\"text-amber-400 font-bold\">\"potion\"</span> et elle vous proposera de résoudre une énigme plutôt loufoque. Vous devrez proposer un nombre au hasard et vous obtiendrez diverses récompenses. </p>\n\n<p>Après 80, 81 ou 82 tentatives infructueuses, vous aurez le Présent des Alvors à coup sûr avec le meme perso !!! (j ais rarement vu plus de 82) Apres la quete se remet a 0 donc vous pouvez recommencer indéfiniment. </p>\n</li>\n\n</ul>",
        "images": [],
        "order": 0
      },
      {
        "title": "Récompenses",
        "description": "<ul>\n  <li><b>Le Présent des Alvors</b> (Amulette des Héros version archer)</li> <li>De l'or (en général 500po multiplié par votre lvl)</li> <li>Épée d'argent (épée pour noob à 71 force)</li> <li>Potion de régénération (valeur de 90kpo/unité à la revente chez un marchand)</li> <li>Paire de ciseaux !</li> <li>Rien *la fille part dans ses pensées*</li> <li>Un petit tour sur RD</li> <li>un petit retour a son sanctuaire</li> <li>Lingot d'iridium</li> <li>Pomme</li> <li>Livre de cuisine</li> <li>Cake aux fruits</li> <li>?...</li>\n</ul>",
        "images": [],
        "order": 1
      },
      {
        "title": "Conseils",
        "description": "<p>Essayez d'échanger ces perles une fois haut niveau, elles vous rapporteront plus d'or. </p>\n\n<p><br/></p>\n\n<p> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> </p>",
        "images": [],
        "order": 2
      }
    ],
    "credits": []
  },
  {
    "title": "Quête initiale",
    "slug": "quete-initiale",
    "zone": "Général",
    "prerequisites": [
      "une armure de cuir gobeline et 5000 po."
    ],
    "rewards": [],
    "npcs": [],
    "gold": "5000",
    "steps": [
      {
        "title": "INTRODUCTION à la QUETE INITIALE des METIERS",
        "description": "<p>Les premières recettes peuvent être apprises et mises en pratique directement avec de bonnes chances de réussite. Mais au-delà du niveau de métier 10 rien ne va plus ! Cette quête permet d'apprendre les recettes au delà du niveau 10. </p>\n\n<p>Cette quête va vous faire marcher beaucoup!! Prenez de bonnes chaussures et munissez-vous d'une armure de cuir gobeline et de 5000 po. </p>\n\n<p>Elle commence chez le PNJ Gierfres, dans la maison de Sigfried (le marchand d'armes à l'ouest du temple de LH) Dites lui <span class=\"text-amber-400 font-bold\">\"mission\"</span>. Il vous faudra ensuite parler tour à tour à différents PNJ : </p>\n\n<ul>\n  <li>l'ébéniste Fortaleyn: près du marchand armes +2 d'Arakas.</li> <li>l'apothicaire Ilyzie : au nord du lac krakra.</li> <li>l'armurier Egnizek : près du gardien de WH au centre de la ville.</li> <li>le bijoutier Nelkus Piltez (pos: 355, 2320, 2) : dans la cave B des monts Righuls, aussi appelés montagnes de Jarko.</li> <li>le couturier Peliaces : prés de la taverne de LH, maison proche de la coiffeuse.</li>\n</ul>\n\n<p>Le couturier vous demande de lui ramener une armure de cuir gobeline + 5000 pièces d'or pour faire le sac, et le chemin recommence à l'envers jusqu'au PNJ Gierfres. </p>\n\n<p>Au retour, vous gagnez 20k xp à chaque PNJ et 300k xp à la fin de la quête. </p>",
        "images": [],
        "order": 0
      },
      {
        "title": "La quête des commerces de Sigfried",
        "description": "<p><b>Items nécessaires</b> : une armure de cuir gobeline et 5000 po. </p>\n\n<p>La quête commence avec Geirfres. Il s'agit du père de Sigfried (marchand d'armes de LightHaven) qui se trouve dans son échoppe. Il vous expliquera que le commerce va mal à cause d'une dénommée Fortaleyn qui ne veut plus fournir d'arcs à Sigfried. Vous aurez alors pour mission de rétablir le commerce entre ces deux personnes. Mot-clés: <span class=\"text-amber-400 font-bold\">\"mission\"</span> et <span class=\"text-amber-400 font-bold\">\"arrange\"</span>. </p>\n\n<p>Fortaleyn se trouve près du marchand d'armes+2 au sud du camp de la Gitane et expliquera qu'elle aimerait bien continuer les affaires avec Sigfried mais que le commerce n'est plus rentable pour elle. Elle doit fabriquer des armes plus évoluées et pour cela elle a besoin de runes magiques qu'elle vous demandera de récupérer. Mot-clés: <span class=\"text-amber-400 font-bold\">\"travail\"</span>, <span class=\"text-amber-400 font-bold\">\"commerce\"</span>, <span class=\"text-amber-400 font-bold\">\"conditions\"</span>, <span class=\"text-amber-400 font-bold\">\"renouvelé\"</span>, <span class=\"text-amber-400 font-bold\">\"formules\"</span>, <span class=\"text-amber-400 font-bold\">\"magiques\"</span> et <span class=\"text-amber-400 font-bold\">\"apothicaire\"</span>. </p>\n\n<p>Direction la plaine des Kraanians (au nor du lac) pour trouver Ilyzie, une apothicaire capable de fabriquer les runes dont Fortaleynn a besoin. Ces runes valent extrêmement cher mais Ilyzie acceptera de vous en donner si vous lui trouvez une armure à la mode. Mot-clés: <span class=\"text-amber-400 font-bold\">\"travail\"</span>, <span class=\"text-amber-400 font-bold\">\"apothicaire\"</span>, <span class=\"text-amber-400 font-bold\">\"boulot\"</span>, <span class=\"text-amber-400 font-bold\">\"payer\"</span>, <span class=\"text-amber-400 font-bold\">\"habillé\"</span>, <span class=\"text-amber-400 font-bold\">\"service\"</span>, <span class=\"text-amber-400 font-bold\">\"quelque chose\"</span> et <span class=\"text-amber-400 font-bold\">\"intervenez\"</span>. </p>\n\n<p>Rendez-vous à WindHowl pour trouver Egnizek (dans une maison à l'Ouest de la taverne) qui acceptera de vous donner l'armure si vous l'aidez à la terminer. Pour cela, il lui faut une pierre précieuse que vous fournira Nelkus Piltez. Mot-clés: <span class=\"text-amber-400 font-bold\">\"travail\"</span>, <span class=\"text-amber-400 font-bold\">\"oeuvre\"</span>, <span class=\"text-amber-400 font-bold\">\"détails\"</span>, <span class=\"text-amber-400 font-bold\">\"fabriquer\"</span>, <span class=\"text-amber-400 font-bold\">\"presque terminée\"</span> et <span class=\"text-amber-400 font-bold\">\"trouver\"</span>. </p>\n\n<p>Nelkus Piltez se trouve dans la cave B des Monts de Righul <span class=\"coords-trigger cursor-pointer bg-slate-700/50 px-1.5 py-0.5 rounded text-cyan-400 border border-slate-600 hover:bg-cyan-500/20 transition-colors\" title=\"Cliquer pour copier\">(355, 2320, 2)</span>. Il vous expliquera que son sac servant à transporter les pierres précieuses est troué et qu'il aurait bien besoin d'un nouveau sac. Vous devrez donc aller lui en chercher un en allant voir Peliaces à LightHaven. Mot-clés: <span class=\"text-amber-400 font-bold\">\"travail\"</span>, <span class=\"text-amber-400 font-bold\">\"sac\"</span>, <span class=\"text-amber-400 font-bold\">\"tissu\"</span>, <span class=\"text-amber-400 font-bold\">\"couturier\"</span> et <span class=\"text-amber-400 font-bold\">\"faire\"</span>. </p>\n\n<p>Peliaces habite une maison au centre de LightHaven, derrière celle de Kalastor. Il vous fabriquera le sac si vous lui ramenez les ingrédients nécessaires : 1 armure de cuir gobeline et 5000 pièces d'or. Mots-clés: <span class=\"text-amber-400 font-bold\">\"travail\"</span> et <span class=\"text-amber-400 font-bold\">\"sacs\"</span>. </p>\n\n<p>Dès lors, vous pourrez apprendre le métier de couturier auprès de Peliaces. (20,000 xp) </p>\n\n<p>Vous pourrez apprendre celui de bijoutier auprès de Nelkus Piltez une fois que vous lui aurez ramené le sac.(20,000 xp) </p>\n\n<p>Celui d'armurier auprès d'Egnizek une fois que vous aurez ramené la pierre précieuse.(20,000 xp) </p>\n\n<p>Celui d'apothicaire auprès d'Ilyzie une fois que vous aurez ramené l'armure, celui d'ébéniste auprès de Fortaleyn une fois que vous aurez ramené les runes.(20,000 xp) </p>\n\n<p>Enfin celui de forgeron auprès de Geirfres une fois que Fortaleyn aura accepté de reprendre le commerce avec Sigfried. (300,000 xp) </p>\n\n<p>Ouff c'est fini !!!! (380,000 xp au total quand même) </p>\n\n<p>Remarque : Après chaque renaissance, la quête est à refaire pour poursuivre l'apprentissage des recettes lvl 10+ (leticia :)). Intéressant aussi pour l'xp. </p>\n\n<p>Mais pour le moment vous êtes de niveau zéro dans le (les) métier que vous avez choisi. Apprenez maintenant une recette de ce niveau (dite <span class=\"text-amber-400 font-bold\">\"apprendre\"</span> au premier PNJ de votre métier) et fabriquez l'item correspondant pour gagner un niveau. Et ainsi de suite.. </p>\n\n<p>Vous trouverez les informations dont vous avez besoin (nom du PNJ et localisation, ingrédients de la recette) sur le site NMS des Métiers dont le lien figure sur la page d'accueil de ce Wiki. </p>\n\n<p>Bon courage. </p>\n\n<p> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> </p>",
        "images": [
          "/t4c-nms-overview/assets/quests/quete-initiale/img_1_0.jpg"
        ],
        "order": 1
      }
    ],
    "credits": []
  },
  {
    "title": "Quêtes T4C Stoneheim",
    "slug": "quetes-t4c-stoneheim",
    "zone": "Stoneheim",
    "prerequisites": [],
    "rewards": [],
    "npcs": [],
    "gold": "",
    "steps": [
      {
        "title": "Les crânes de malfrats (Quête neutre)",
        "description": "<p>Juste à la sortie (porte est) de Stoneheim, vous trouverez un PNJ nommé Delnar Lavndir. Dites-lui <span class=\"text-amber-400 font-bold\">\"crane de malfrat\"</span> et il vous dira qu’il les collectionne. Vous pouvez en trouver sur des cadavres de chapardeurs ou d’arpenteurs de la nuit (vous les trouverez après la sortie par la porte est, pas loin de Delnar). </p>\n\n<p>Après en avoir cumulé quelques uns, retournez voir Delnar Lavndir. Dites <span class=\"text-amber-400 font-bold\">\"crane de malfrat\"</span> puis <span class=\"text-amber-400 font-bold\">\"oui\"</span>. Vous serez récompensé par une partie de cotte de mailles (aléatoire) et des xps. Vous n’avez qu'à lui dire <span class=\"text-amber-400 font-bold\">\"crane de malfrat\"</span> une fois et il prendra tous les crânes que vous avez dans votre inventaire. Il garde aussi en mémoire combien de crânes vous lui avez rapporté, tout simplement parce que pour certains, vous recevrez plus d’xps. Pour chaque crâne donné à Delnar vous recevez une pièce aléatoire de cotte de maille et vous recevrez 50.000 xps ; excepté pour le 10e (vous recevrez 175.000 xps), pour le 25e (vous recevrez 500.000 xps) et pour le 100e (vous recevrez 2.500.000 xps). </p>\n\n<p>Remarque: Vous pouvez effectuer cette quête à volonté. </p>\n\n<p>PNJ impliqué: Delnar Lavndir </p>\n\n<p>Récompenses acquises: Partie de cotte de mailles (aléatoire) (80 End), 50.000, 175.000, 500.000 ou 2.500.000 xps (selon le crâne que vous amenez). </p>",
        "images": [],
        "order": 0
      },
      {
        "title": "Les gemmes (Quête neutre)",
        "description": "<p>De nombreux monstres droppent des gemmes (Agathe, Diamant…). Dirigez-vous vers la ville des voleurs et trouvez Meltar Goanvach. Dites lui <span class=\"text-amber-400 font-bold\">\"connard\"</span> et courrez car il vous attaquera (vous aimeriez vous faire insulter, vous ?). Retournez le voir et dites <span class=\"text-amber-400 font-bold\">\" Gemmes\"</span>, <span class=\"text-amber-400 font-bold\">\"oui\"</span>. Vous serez récompensé par des points d’expérience et des potions de résistance. </p>\n\n<p>(<b><span class=\"text-amber-400 font-bold\">\"Mention Spéciale Evil\"</span></b> N'insultez surtout pas Meltar Goanvach Si vous êtes, et/ou espérez devenir Ogrimarien! Sachant qu'il est incontournable afin d'accomplir beaucoup plus facilement, et 2 fois moins coûteux en gemmes pour accéder à réalisation de la Clef d'Ogrimar! Dites lui plutôt: <span class=\"text-amber-400 font-bold\">\"Couronne de corruption\"</span> N'ayant pas essayé avec un Séraphin, étant une quête neutre, ce mot clefs devrait pouvoir fonctionner en tous cas... ) </p>\n\n<p>Récompenses : </p>\n\n<p><br/>Remarque: Vous pouvez effectuer cette quête à volonté. </p>\n\n<p>PNJ impliqué: Meltar Goanvach </p>\n\n<p>Récompenses acquises: Points d’expérience variés et potions de résistance variées. </p>",
        "images": [],
        "order": 1
      },
      {
        "title": "La quête du collectionneur de scalps (bénéfique et maléfique)",
        "description": "<p>Ramenez 5 Scalps (droppés par les Skraugs violets) à Wajpoothin au village Skraugs verts (à l’est) pour une masse Skraugbashor. Mots-clés : <span class=\"text-amber-400 font-bold\">\"masse de Skraugbashor\"</span>, <span class=\"text-amber-400 font-bold\">\"oui\"</span>. Vous recevrez aussi 1.000 xps multipliés par votre niveau actuel. </p>\n\n<p>Ramenez 5 Masses Skraugbashor à Khan Wulgworth au village Skraugs roses (dans une grotte au centre) pour une ceinture de force Skraug. Mots-clés : <span class=\"text-amber-400 font-bold\">\"masse de Skraugbashor\"</span>, <span class=\"text-amber-400 font-bold\">\"oui\"</span>. Vous recevrez aussi 1.000 xps multipliés par votre niveau actuel. </p>\n\n<p>Ramenez 3 ceintures de force Skraug au Prévot Grant Anfust à Stonecrest (situé dans la maison au sud du square de la ville), pour un livre du collectionneur (également droppé par les Assassins Obsidiens). Mots-clés : <span class=\"text-amber-400 font-bold\">\"ceinture de force skraug\"</span>, <span class=\"text-amber-400 font-bold\">\" oui\"</span>. Vous recevrez aussi 3.000 xps multipliés par votre niveau actuel. </p>\n\n<p>Ramenez 5 livres du collectionneur au Roy Aedenas Valreus (situé à la ville des Centaures), pour un anneau du lion. Mots-clés : <span class=\"text-amber-400 font-bold\">\"livres du collectionneur\"</span>, <span class=\"text-amber-400 font-bold\">\"oui\"</span>. Vous recevrez aussi 3.750 xps multipliés par votre niveau actuel. </p>",
        "images": [],
        "order": 2
      },
      {
        "title": "Partie bénéfique",
        "description": "<p>Ramenez 2 anneaux du lion à Sir Beltigan (situé dans son château au sud-ouest de Stonecrest) pour obtenir soit un œil du tigre soit une épée de puissance en cristal. Mots-clés : <span class=\"text-amber-400 font-bold\">\" anneaux du Lion\"</span>, <span class=\"text-amber-400 font-bold\">\"oui\"</span>. Vous recevrez aussi 4.000 xps multipliés par votre niveau actuel. </p>",
        "images": [],
        "order": 3
      },
      {
        "title": "Partie maléfique",
        "description": "<ul>\n  \n  <li>\n<p>Ramenez 3 anneaux du lion à Sir Mordenthal (situé dans son château au nord-est de Stonecrest) pour obtenir soit un manteau de l’Armageddon ou une grande hache de la victoire. Mots-clés : <span class=\"text-amber-400 font-bold\">\"anneaux du Lion\"</span>, <span class=\"text-amber-400 font-bold\">\"oui\"</span>. Vous recevrez aussi 6.000 xps multipliés par votre niveau actuel. </p>\n\n<p><b>Remarque: Vous pouvez effectuer cette quête à volonté.</b> </p>\n\n<p><b>PNJs impliqués:</b> Wajpoothin, Khan Wulgworth, Prévot Grant Anfust, Roy Aedenas Valreus, Sir Beltigan (pour la quête bénéfique), Sir Mordenthal (pour la quête maléfique). </p>\n\n<p><b>Récompenses acquises:</b> Selon vos choix: </p>\n\n<p>a. Masse Skraugbashor (280 For, 25 Dex, 20 Int, 25 Sag), 1.000 xps * niveau</li>\n  <li>b. Ceinture de force Skraug (100 End, 20 Int, 25 Sag), 1.000 xps * niveau</li>\n  <li>c. Anneau du lion (30 For, 22 End, 26 Dex, 25 Int, 25 Sag), 3.750 xps * niveau</li>\n  <li>d. Œil du tigre (115 Int, 113 Sag) ou épée de puissance en cristal (251 For, 21 Dex, 53 Int, 50 Sag), 4.000 xps * niveau pour la partie bénéfique uniquement.</li>\n  <li>e. Manteau de l’Armageddon (37 End, 175 Int,70 Sag) ou Grande hache de la victoire (242 For, 43 Dex, 25 Int, 25 Sag), 6.000 xps * niveau pour la partie maléfique uniquement. </p>\n</li>\n\n</ul>",
        "images": [],
        "order": 4
      },
      {
        "title": "L’anneau de vraie foi (Quête bénéfique)",
        "description": "<ul>\n  \n  <li>\n<p>Cherchez le PNJ nommé Theoran Feizdir (dans une petite maison située dans la plaine au sud-est de Stonecrest) et dites <span class=\"text-amber-400 font-bold\">\"anneau de vraie foi\"</span>. Il vous demandera: </p>\n\n<p>1 Anneau de foi (de la quête de l’anneau de foi)</li>\n  <li>1 Graal de pureté (droppé par les centaures vengeurs de Stoneheim)</li>\n  <li>2 Fioles d’ eau bénite (préparées par Theoran Feizdir [pour une fiole d’eau cristalline] ou Frère Thorkas [pour une fiole d’eau cristalline et 1.000 pièces d’or]), Mots-clés : <span class=\"text-amber-400 font-bold\">\"eau bénite\"</span>, <span class=\"text-amber-400 font-bold\">\"oui\"</span>. </p>\n\n<p>Ramenez-lui les objets et dites <span class=\"text-amber-400 font-bold\">\"anneau de vraie foi\"</span>, <span class=\"text-amber-400 font-bold\">\"oui\"</span> et il vous donnera l’anneau. </p>\n\n<p>Remarque #1: Vous pouvez effectuer cette quête à volonté.</li>\n  <li>Remarque #2: Quand vous dites <span class=\"text-amber-400 font-bold\">\"adieu\"</span> à Theoran Feizdir il invoque une Aura Protectrice pour vous. Elle vous donne +20 à toutes les résistances et dure 2 minutes 30 secondes. </p>\n\n<p><b>PNJs impliqués:</b> Theoran Feizdir, Frère Thorkas (facultatif). </p>\n\n<p><b>Récompense acquise:</b> Anneau de vraie foi (prérequis : 15 Int, 90 Sag) </p>\n</li>\n\n</ul>",
        "images": [],
        "order": 5
      },
      {
        "title": "Le parchemin d’amitié des chevaux (Quête neutre)",
        "description": "<p>A la ville des Centaures, cherchez un PNJ nommé Dionysus Argantma (situé dans la maison au nord de la fontaine). </p>\n\n<p>Dites-lui <span class=\"text-amber-400 font-bold\">\"centaures squelettes\"</span> et il vous demandera d’en tuer 12 puis de revenir le voir pour une récompense. Vous trouverez des centaures squelettes dans le donjon du château de Mordenthal (nord-est de Stonecrest). Tuez-en 12 (ou plus mais cela sera perdu) et retournez voir Dionysus Argantma. Dites <span class=\"text-amber-400 font-bold\">\"centaures squelettes\"</span>, <span class=\"text-amber-400 font-bold\">\"oui\"</span> et il vous récompensera par un parchemin d’amitié des chevaux et 1.500 xps multipliés par votre niveau courant. </p>\n\n<p>Vous pouvez l’utiliser à différentes fins: </p>",
        "images": [],
        "order": 6
      },
      {
        "title": "1ère manière : Quête de Malachaï",
        "description": "<p>Ramenez un parchemin d’amitié des chevaux (ou plusieurs à la fois) à Malachai Thanatos situé ville des Centaures dans la maison au sud de la fontaine (Mot-clé : <span class=\"text-amber-400 font-bold\">\"parchemin d'amitié des chevaux\"</span>) pour obtenir l’un des articles suivants : </p>\n\n<ul>\n  <li>Sinistre lame de guerre</li> <li>Lame assassine</li> <li>Arc pourfendeur de Centaures</li> <li>Robe des Enfers</li>\n</ul>\n\n<p>Vous recevrez aussi 2.000 xps multipliés par votre niveau courant. </p>\n\n<p>Quand vous en aurez plusieurs, ces objets peuvent à nouveau être échangés au choix: </p>\n\n<p>Ramenez <b>2</b> <b>Lames assassines</b> à Daran Pied-léger (situé à l’Auberge des Aventures de Stonecrest) pour une clé des îles éthérées brisée.<br/>Mots-clés: <span class=\"text-amber-400 font-bold\">\"lame assassine\"</span>, <span class=\"text-amber-400 font-bold\">\"oui\"</span>. Vous recevrez aussi 1.500 xps multipliés par votre niveau actuel. <br/>Ramenez <b>3 robes des Enfers</b> à Julian (situé à Stonecrest) pour un sceptre des Ténèbres. Mots-clés: <span class=\"text-amber-400 font-bold\">\"Robe des enfers\"</span>, <span class=\"text-amber-400 font-bold\">\"oui\"</span>. Vous obtiendrez aussi 2.500 xps multipliés par votre niveau actuel. </p>\n\n<p>Ramenez <b>4 Sinistres lames de guerre</b> à Mordenthal (situé dans son château) pour une gemme sombre (et peut-être une lame-gemme sombre). Mots-clés : <span class=\"text-amber-400 font-bold\">\"Sinistres lames de guerre\"</span>, <span class=\"text-amber-400 font-bold\">\"oui\"</span>. Vous recevrez aussi 1.500 xps multipliés par votre niveau actuel. </p>\n\n<p>Ramenez <b>5 Arcs pourfendeurs de Centaures</b> à Resha (située dans une maison proche de l’entrée est de Stonecrest) pour un Manteau de l’Archer. Mots-clés : <span class=\"text-amber-400 font-bold\">\"arcs pourfendeurs de centaures\"</span>, <span class=\"text-amber-400 font-bold\">\"oui\"</span>. Vous serez récompensés aussi par 2.500 xps multipliés par votre niveau actuel. </p>",
        "images": [],
        "order": 7
      },
      {
        "title": "2ème manière (buggée)",
        "description": "<ul>\n  \n  <li>\n<p>Une fois que vous avez 10 parchemins d’amitié des chevaux, cherchez le PNJ errant nommé Cheval Sauvage Planétaire. Parlez-lui (mots-clés : <span class=\"text-amber-400 font-bold\">\"travail\"</span>...) et il vous proposera de vous téléporter (pour le prix d’un parchemin) à l’un des endroits suivants: </p>\n\n<p>Pont de Lighthaven</li>\n  <li>Stonehenge d’Arakas</li>\n  <li>Maison d’Annabelle</li>\n  <li>Brigands d’Arakas</li>\n  <li>Entrée de Windhowl</li>\n  <li>Château de Bane Gwengad</li>\n  <li>Château de Silversky</li>\n  <li>Stonehenge de Raven's Dust</li>\n  <li>Désert de Raven's Dust</li>\n  <li>Place de Stonecrest </p>\n\n<p>Il se téléporte avec vous. </p>\n\n<p>Remarque #1: Vous pouvez effectuer cette quête à volonté.</li>\n  <li>Remarque #2: Il y a un bug et le cheval n’apparaît pas dans le jeu (lol!!!!!). </p>\n\n<p>PNJ impliqué: Dionysus Argantma, Malachai Thanatos/Cheval sauvage planétaire (Facultatif), Sir Mordenthal/Daran Pied-léger/Resha/Julian (Facultatif).</li>\n  <li></p>\n\n<p>Récompenses acquises: Selon vos choix: </p>\n\n<p>a. Parchemin d’amitié des chevaux, 1.500 xps * niveau </p>\n\n<p>b. Sinistre lame de guerre (266 For, 35 Dex, 35 Sag) ou Lame assassine (110 For, 65 Dex, 15 Int) ou Arc pourfendeur des Centaures (27 For, 140 Dex) ou Robe des Enfers (28 End, 123 Int, 85 Sag), 2.000 xps * niveau </p>\n\n<p>c. Clé Ethérée Brisée, 1.500 xps * niveau </p>\n\n<p>d. Sceptre des Ténèbres (20 For, 83 Int, 35 Sag), 2.500 xps * niveau </p>\n\n<p>e. Gemme Sombre (et peut-être une lame-gemme sombre (242 For, 53 Int, 43 Sag)), 1.500 xps * niveau </p>\n\n<p>f. Manteau de l’Archer (25 For, 70 Dex, 30 Int, 40 Sag), 2.500 xps * niveau </p>\n</li>\n\n</ul>",
        "images": [],
        "order": 8
      },
      {
        "title": "La lame perdue du Dragon (Quête neutre)",
        "description": "<p>A Stonecrest, trouvez le Prévôt Grant Anfust (près de l'entrée Est). </p>\n\n<p>Dites <span class=\"text-amber-400 font-bold\">\"chapardeurs\"</span> puis <span class=\"text-amber-400 font-bold\">\"arpenteurs de la nuit\"</span> et il vous demandera de tuer 10 chapardeurs ou 10 arpenteurs de la nuit et de revenir le voir pour une récompense. Tuez-en 10 de chaque (vous en trouverez à profusion à la sortie est de Stonecrest) et retournez voir le Prévôt. </p>\n\n<p>Dites à nouveau <span class=\"text-amber-400 font-bold\">\"chapardeurs\"</span> ou <span class=\"text-amber-400 font-bold\">\"arpenteurs de la nuit\"</span> et il vous remerciera avec une Note de Remerciement et 1.500 xps multipliés par votre niveau (Au maximum 50.000 xps). </p>\n\n<p>Après cumul de 6 Notes de remerciement, parlez au Bourgmestre Belamzer (situé dans sa résidence, à Stonecrest). Dites <span class=\"text-amber-400 font-bold\">\"note de remerciement\"</span> et vous recevrez en récompense une lame perdue du Dragon et 3.000 xps multipliés par votre niveau actuel. </p>\n\n<p><b>Remarque :</b> Vous pouvez effectuer cette quête à volonté. </p>\n\n<p><b>PNJs impliqués :</b> Prévôt Grant Anfust, Bourgmestre Belamzer </p>\n\n<p><b>Récompenses acquises :</b> Lame perdue du Dragon (242 For), 6 * 1.500 xps * niveau actuel - au maximum 300.000 xps- et 3.000 xps * niveau actuel. </p>",
        "images": [],
        "order": 9
      },
      {
        "title": "Le heaume perdu du dragon (Quête neutre)    (Certificat de reconnaissance)",
        "description": "<p>A Stonecrest, trouvez le prévôt Grant Anfust. Dites <span class=\"text-amber-400 font-bold\">\"document secret\"</span> et il vous demandera de lui en rapporter 5. Allez aux endroits suivants : </p>\n\n<p> Ps:Attention qd vous clicquez un des coffres la clef se brise donc important de pas clicquer d'avance et s'assurer que qqun d'autre a pas ouvert avant. Sinon vous pouvez crocheter direct le coffre de Mithanna avec crochetage de serrures. </p>\n\n<ul>\n  <li>1° Ouvrez le coffre dans la résidence du Bourgmestre Belamzer, vous trouverez une clé brillante en métal. \n<ul>\n  <li>Temps du coffre: 10 min a 2 et 20 min seul</li>\n</ul>\n</li> <li>2° Ouvrez le coffre brillant en métal dans la boutique d’armes de Gulfrid Morzholdir et vous devriez trouver une clé en métal sombre. \n<ul>\n  <li>Temps du coffre: 50 min toujours</li>\n</ul>\n</li> <li>3° Ouvrez le coffre en métal sombre dans la boutique d’armures de Herewald Herngwean et vous trouverez une clé en éclat d’os. \n<ul>\n  <li>Temps du coffre: 10 min a 2 et 20min seul</li>\n</ul>\n</li> <li>4° Ouvrez le coffre en éclats d’os dans la maison de Mithanna Snowraven et vous trouverez une clé de sureté en acier. \n<ul>\n  <li>Temps du coffre: 50 min toujours</li>\n</ul>\n</li> <li>5° Allez dans la planque des voleurs et ouvrez le coffre de sûreté en acier. Vous trouverez un document secret. \n<ul>\n  <li>Temps du coffre: 41 min toujours</li>\n</ul>\n</li>\n</ul>\n\n<ul>\n  <li>Temps du coffre: 10 min a 2 et 20 min seul</li>\n</ul>\n\n<ul>\n  <li>Temps du coffre: 50 min toujours</li>\n</ul>\n\n<ul>\n  <li>Temps du coffre: 10 min a 2 et 20min seul</li>\n</ul>\n\n<ul>\n  <li>Temps du coffre: 50 min toujours</li>\n</ul>\n\n<ul>\n  <li>Temps du coffre: 41 min toujours</li>\n</ul>\n\n<p>Collectez 5 Documents Secrets et rendez visite au prévôt Grant Anfust. Mots-clés: <span class=\"text-amber-400 font-bold\">\"document secret\"</span>, <span class=\"text-amber-400 font-bold\">\"oui\"</span> et vous serez récompensés d’'un Certificat de reconnaissance, complétés par 2.500 xps et 3.500 pièces d’or, bien entendu multipliés par votre niveau actuel. </p>\n\n<p>Collectez 6 Certificats de reconnaissances et allez voir le bourgmestre Belamzer. Mot-clé: <span class=\"text-amber-400 font-bold\">\" Certificat de reconnaissance\"</span> et vous serez récompensés par un heaume perdu du dragon, ainsi que 2.500 xps et 1.000 pièces d’or, multipliés par votre niveau actuel. </p>\n\n<p>Remarque #1: A chaque fois que vous ouvrez un coffre, la clé correspondante se brise et devient inutilisable (elle disparaît de votre inventaire). Les coffres ne droppent pas à chaque fois la clé suivante : ils droppent parfois autre chose ! Si cela se produit vous devez recommencer depuis le début puisque vous n’avez plus la clé qui s’est brisée. Si quelqu’un d’autre a ouvert le coffre récemment, vous devrez attendre environ une demi-heure pour avoir un nouveau drop. </p>\n\n<p>Remarque #2: Vous pouvez effectuer cette quête à volonté. </p>\n\n<p>PNJ impliqué: Prévôt Grant Anfust, Bourgmestre Belamzer </p>\n\n<p>Récompenses acquises: Heaume perdu du dragon (150 End, 30 Int, 46 Sag), 17.000 xps * niveau actuel, 22.000 pièces d’or * niveau actuel. </p>",
        "images": [],
        "order": 10
      },
      {
        "title": "Sceptre d’espoir (Quête bénéfique)",
        "description": "<p>Dans la ville des Centaures, trouvez Dionysus Argantma. Dites <span class=\"text-amber-400 font-bold\">\"Baton d'espérance\"</span> et il vous demandera les objets suivants: </p>\n\n<ul>\n  <li>2 piles de bois d’arbres démoniaques (droppés par les arbres démoniaques sur RD)</li> <li>5 Symboles d’espoir (achetés à 10.000 pièces d’or chaque chez Chryseida Yolangda à Stonecrest)</li>\n</ul>\n\n<p>Ceci fait, retournez voir Dionysus Argantma et dites <span class=\"text-amber-400 font-bold\">\"Baton d'espérance\"</span>, <span class=\"text-amber-400 font-bold\">\"oui\"</span> et il vous donnera un sceptre d’espoir. </p>\n\n<p>Remarque #1: Vous pouvez effectuer cette quête à volonté. </p>\n\n<p>Remarque #2: Vous devez être <span class=\"text-amber-400 font-bold\">\"messager de la Lumière\"</span> afin d’accomplir cette quête. (cf. Renaissance Séraphin d’Artherk, au commencement de cette quête). </p>\n\n<p>PNJ impliqué: Dionysus Argantma, Chryseida Yolangda </p>\n\n<p>Récompenses acquises: Sceptre d’espoir (110 For, 23 Int, 131 Sag). </p>",
        "images": [],
        "order": 11
      },
      {
        "title": "La clé éthérée (Quête neutre) (indroppable)",
        "description": "<ul>\n  <li>Échangez 2 lames assassines (obtenue lors de la quête du parchemin d’amitié des chevaux) chez Daran Pied-Léger (taverne de SC) contre une clé éthérée brisée (mot clé <span class=\"text-amber-400 font-bold\">\"lame assassine\"</span>).</li>\n</ul>\n\n<p>Prenez une clé éthérée brisée et allez voir Bastien Milandra au château de Sir Beltigan. </p>\n\n<p>Parlez-lui et dites dans l’ordre <i>nom</i>, <i>oui</i>, <i>travail</i>, <i>oui</i>, <i>aide</i>, <i>oui</i>, <i>séraphin</i>, <i>oui</i>, <i>clef éthérée</i>, et enfin <i>oui</i> à <b>Bastien Milandra</b> et il réparera finalement la clé. </p>\n\n<p>Remarque: Vous pouvez effectuer cette quête à volonté (mais vous n’aurez pas besoin d’une 2e clé car elle ne se brise plus jamais). </p>\n\n<p>PNJ impliqué: Bastien Milandra </p>\n\n<p>Récompenses acquises: Clé éthérée qui vous donne accès au Royaume Ethéré et ses îles par le portail éthéré (il se déplace entre la cave araignées et les skraugs verts en 6 positions différentes - voir carte SH) </p>",
        "images": [],
        "order": 12
      },
      {
        "title": "Le luth de Paix (Quête neutre)",
        "description": "<p>Dans la ville des centaures, parlez à Dionysus Argantma. Dites <span class=\"text-amber-400 font-bold\">\"quete\"</span>, <span class=\"text-amber-400 font-bold\">\"Luth de paix\"</span>, <span class=\"text-amber-400 font-bold\">\"recharger\"</span>. </p>\n\n<p>Il vous demandera de recharger son luth, dites <span class=\"text-amber-400 font-bold\">\"oui\"</span>. Prenez le et cherchez un portail éthéré (vous devez avoir terminé la quête de la clé éthérée). Une fois que vous l’avez trouvé, entrez dedans et cherchez Glaenshenmilandira (la seule pnj sur ces îles, impossible à louper, mais c'est loin !). </p>\n\n<p>Dites-lui <span class=\"text-amber-400 font-bold\">\"Luth de paix\"</span> et elle vous demandera 6 luths magiques (droppés par le Bouffon Morbide, à Silversky). Trouvez-les et retournez la voir. Dites à nouveau <span class=\"text-amber-400 font-bold\">\"Luth de paix\"</span>, <span class=\"text-amber-400 font-bold\">\"oui\"</span> et elle rechargera le luth. </p>\n\n<p>Vous recevrez 2.000 xps multipliés par votre niveau actuel. </p>\n\n<p>Retournez voir Dionysus Argantma et dites <span class=\"text-amber-400 font-bold\">\"Luth de paix\"</span>. Vous recevrez 750 xps et 2.000 pièces d’or, le tout multipliés par votre niveau actuel; et si vous êtes chanceux, une robe des Cieux (inconnue sur NMS ???). </p>\n\n<p>Remarque #1: Vous pouvez effectuer cette quête à volonté. </p>\n\n<p>Remarque #2: Diyonyisus Argantma ne vous parlera de cette quête que la nuit. </p>\n\n<p>Remarque #3: Sur les Îles Ethérées, vous croiserez un monstre nommé Purificateur. Si vous le tuez, vous devrez tuer autant de Néoflares que vous avez tué de purificateurs avant que Glaenshenmilandira ne vous parle. </p>\n\n<p>PNJ impliqué: Dionysus Argantma, Bastien Milandra (Facultatif), Glaenshenmilandira </p>\n\n<p>Mini Boss impliqué: Bouffon Morbide </p>\n\n<p>Récompenses acquises: 2.750 xps * niveau actuel, 2.000 pièces d’or * niveau actuel, peut-être une robe des Cieux (28 End, 73 Int, 135 Sag) </p>",
        "images": [],
        "order": 13
      },
      {
        "title": "Quête de Mordenthal (maléfique)",
        "description": "<p>Description de la quête : Récoltez 3 anneaux du lion, via la quête de l'anneau du lion, et dites <span class=\"text-amber-400 font-bold\">\"anneaux du lion\"</span>, puis <span class=\"text-amber-400 font-bold\">\"oui\"</span> à Mordenthal, situé dans son temple, dans les Montagnes au Nord de StoneCrest. </p>\n\n<p>Attention, vous devez être d'un alignement maléfique pour effectuer cette quête ! </p>\n\n<p>Vous pouvez accomplir cette quête à volonté. </p>\n\n<p><b>Récompenses :</b> Manteau d'Armegeddon ou Grande Hache du Corbeau. </p>\n\n<p><br/></p>\n\n<p> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> </p>",
        "images": [],
        "order": 14
      }
    ],
    "credits": []
  },
  {
    "title": "R.S.T. (Runed Stone Tablet) Drake Island",
    "slug": "rst-runed-stone-tablet-drake-island",
    "zone": "Général",
    "prerequisites": [],
    "rewards": [],
    "npcs": [],
    "gold": "",
    "steps": [
      {
        "title": "Introduction",
        "description": "<ul>\n  \n  <li>\n<p><b>Important : la récompense n'est donnée que si vous avez accès à DI.</b> </p>\n\n<p>Rendez vous à l'auberge à l'est de StoneCrest (SH) et parlez à Mercyn Kignar lui dire <span class=\"text-amber-400 font-bold\">\"taches\"</span>, il vous demandera de trouver les 6 nexus sur SH, qui se trouvent le long des plages ... dites <span class=\"text-amber-400 font-bold\">\"Acceptez\"</span> </p>\n\n<p></li>\n  <li>Le deuxième se situe avant le pont de la ville des centaures, derrière les montagnes (785-971-0).</li>\n  <li>Le troisième surplombe les montagnes derrière le village skraug vert, à l'est (1386-516-0).</li>\n  <li>Le quatrième est au bout de la foret des gremlins (1195-350-0) .</li>\n  <li>Le cinquième est situé derrière le village skraug rouge (884-145-0).</li>\n  <li>...Et le sixième est tout en haut des montagnes de Mordenthal, en venant des skraugs rouges (266-90-0).</li>\n  <li>Puis retournez voir Mercyn Kignar pour qu'il vous active la RST... Récompense : RST de DI et 18M d'xp.</li>\n  <li>Merci a Anvar pour sa contribution du 05/08/2009. Modifié le 7/09/2011 par Syll. </p>\n\n<p> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> <big></big> </p>\n</li>\n\n</ul>",
        "images": [
          "/t4c-nms-overview/assets/quests/rst-runed-stone-tablet-drake-island/img_0_0.jpg"
        ],
        "order": 0
      }
    ],
    "credits": []
  }
];
