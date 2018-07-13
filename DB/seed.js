var database = require("./database");
var ODD = require("../objects/odd");
var Theme = require("../objects/theme");
var ThemeOdd = require("../objects/themeOdd");
var Objectif = require("../objects/objectif");
var Mesure = require("../objects/mesure");
var MesureOdd = require("../objects/mesureOdd");
var ODD_mesure = require("../objects/odd_mesure");

var objectifs = [
    new Objectif(null, "Préserver la cohésion sociale et le bien-être de la population").convertToSequelize(),
    new Objectif(null, "Miser sur la qualité de la formation").convertToSequelize(),
    new Objectif(null, "Améliorer la compétitivité de l’économie valaisanne").convertToSequelize(),
    new Objectif(null, "Optimiser la capacité d’action des institutions").convertToSequelize(),
    new Objectif(null, "Positionner le canton du valais sur la scène fédérale et intercantonale").convertToSequelize(),
    new Objectif(null, "Anticiper les changements démographiques").convertToSequelize(),
    new Objectif(null, "Prévenir les risques et assurer la sécurité").convertToSequelize(),
    new Objectif(null, "Développer harmonieusement le territoire").convertToSequelize(),
    new Objectif(null, "Améliorer la mobilité").convertToSequelize(),
    new Objectif(null, "Garantir l’équilibre des finances cantonales").convertToSequelize(),
]
database.sync().then(() => {
    database.Objectif.bulkCreate(objectifs).then((objectifs) => {
        var mesures = [
            new Mesure(null, "Un renforcement de l’intégration et du sentiment d’appartenance", objectifs[0].id).convertToSequelize(),
            new Mesure(null, "Un développement du bilinguisme et des échanges entre les régions", objectifs[0].id).convertToSequelize(),
            new Mesure(null, "Des prestations de santé de qualité, une médecine de proximité et en réseau", objectifs[0].id).convertToSequelize(),
            new Mesure(null, "Des conditions dignes pour les personnes", objectifs[0].id).convertToSequelize(),
            new Mesure(null, "Une école parmi les plus performantes de Suisse et d’Europe", objectifs[1].id).convertToSequelize(),
            new Mesure(null, "Un accent fort sur les mathématiques, les langues et l’informatique", objectifs[1].id).convertToSequelize(),
            new Mesure(null, "Une égalité des chances pour tous les élèves", objectifs[1].id).convertToSequelize(),
            new Mesure(null, "La formation professionnelle au cœur du système de formation", objectifs[1].id).convertToSequelize(),
            new Mesure(null, "Un canton de la formation supérieure, de la recherche et de l’innovation", objectifs[1].id).convertToSequelize(),
            new Mesure(null, "Une consolidation des synergies entre la formation et l’économie", objectifs[1].id).convertToSequelize(),
            new Mesure(null, "Une promotion de la culture d’innovation et d’entrepreneuriat", objectifs[2].id).convertToSequelize(),
            new Mesure(null, "Une promotion économique priorisée sur la création de valeur ajoutée", objectifs[2].id).convertToSequelize(),
            new Mesure(null, "Le renforcement des interactions entre recherche et économie", objectifs[2].id).convertToSequelize(),
            new Mesure(null, "L’amélioration des conditions-cadres : fiscalité – allègements administratifs", objectifs[2].id).convertToSequelize(),
            new Mesure(null, "Un tourisme « 4 saisons », le leadership énergétique et la digitalisation", objectifs[2].id).convertToSequelize(),
            new Mesure(null, "La valorisation des grands événements sportifs et culturels", objectifs[2].id).convertToSequelize(),
            new Mesure(null, "Une révision totale de la Constitution pour répondre aux défis du 21e siècle", objectifs[3].id).convertToSequelize(),
            new Mesure(null, "Un soutien actif aux fusions de communes", objectifs[3].id).convertToSequelize(),
            new Mesure(null, "Une administration plus efficace, accessible et transparente", objectifs[3].id).convertToSequelize(),
            new Mesure(null, "Une gouvernance optimisée pour mieux servir la population", objectifs[3].id).convertToSequelize(),
            new Mesure(null, "Le développement d’une stratégie en matière d’affaires fédérales", objectifs[4].id).convertToSequelize(),
            new Mesure(null, "La réalisation d’un lobbying ciblé", objectifs[4].id).convertToSequelize(),
            new Mesure(null, "Une attitude proactive", objectifs[4].id).convertToSequelize(),
            new Mesure(null, "Une conduite et un suivi systématique", objectifs[4].id).convertToSequelize(),
            new Mesure(null, "La valorisation des compétences des seniors", objectifs[5].id).convertToSequelize(),
            new Mesure(null, "Des actions ciblées en faveur des familles", objectifs[5].id).convertToSequelize(),
            new Mesure(null, "Le développement des soins et du soutien à domicile", objectifs[5].id).convertToSequelize(),
            new Mesure(null, "Un nombre de places suffisant en EMS", objectifs[5].id).convertToSequelize(),
            new Mesure(null, "Des risques identifiés et analysés, des mesures préventives adoptées", objectifs[6].id).convertToSequelize(),
            new Mesure(null, "La priorité aux risques majeurs : tremblements de terre – inondations", objectifs[6].id).convertToSequelize(),
            new Mesure(null, "L’anticipation des conséquences des changements climatiques", objectifs[6].id).convertToSequelize(),
            new Mesure(null, "L’assainissement des sols pollués", objectifs[6].id).convertToSequelize(),
            new Mesure(null, "L’adaptation des moyens carcéraux", objectifs[6].id).convertToSequelize(),
            new Mesure(null, "Un développement territorial global, durable, rationnel, cohérent et équitable", objectifs[7].id).convertToSequelize(),
            new Mesure(null, "La 3e correction du Rhône, catalyseur du développement territorial", objectifs[7].id).convertToSequelize(),
            new Mesure(null, "Une mise en œuvre de la LAT limitant les dézonages", objectifs[7].id).convertToSequelize(),
            new Mesure(null, "Un renforcement de la mise en œuvre des principes du développement durable", objectifs[7].id).convertToSequelize(),
            new Mesure(null, "Un développement du trafic régional en phase avec celui de la population", objectifs[8].id).convertToSequelize(),
            new Mesure(null, "L’intégration dans les réseaux ferroviaires et aériens nationaux et internationaux", objectifs[8].id).convertToSequelize(),
            new Mesure(null, "L’extension des infrastructures de mobilité douce", objectifs[8].id).convertToSequelize(),
            new Mesure(null, "Un réseau routier achevé et entretenu", objectifs[8].id).convertToSequelize(),
            new Mesure(null, "L’anticipation des nouvelles technologies", objectifs[8].id).convertToSequelize(),
            new Mesure(null, "L’optimisation du transfert rail-route", objectifs[8].id).convertToSequelize(),
            new Mesure(null, "Un équilibre financier à long terme", objectifs[9].id).convertToSequelize(),
            new Mesure(null, "Le financement des investissements nécessaires au développement du canton", objectifs[9].id).convertToSequelize(),
            new Mesure(null, "Une caisse de prévoyance saine", objectifs[9].id).convertToSequelize(),
            new Mesure(null, "Une fiscalité favorable à la croissance économique", objectifs[9].id).convertToSequelize(),
            new Mesure(null, "Des recettes fédérales consolidées", objectifs[9].id).convertToSequelize(),
        ]
        database.Mesure.bulkCreate(mesures).then((mesures) => {
            var odds_mesure = [
                new ODD_mesure(null, "Pas de pauvreté", "images/odd1.png").convertToSequelize(),
                new ODD_mesure(null, "Faim zéro", "images/odd2.png").convertToSequelize(),
                new ODD_mesure(null, "Bonne santé et bien-être", "images/odd3.png").convertToSequelize(),
                new ODD_mesure(null, "Education de qualité", "images/odd4.png").convertToSequelize(),
                new ODD_mesure(null, "Egalité des sexes", "images/odd5.png").convertToSequelize(),
                new ODD_mesure(null, "Eau propre et assainissement", "images/odd6.png").convertToSequelize(),
                new ODD_mesure(null, "Energie propre et d'un coût abordable", "images/odd7.png").convertToSequelize(),
                new ODD_mesure(null, "Travail décent et croissance économique", "images/odd8.png").convertToSequelize(),
                new ODD_mesure(null, "Industrie, innovation et infrastructure", "images/odd9.png").convertToSequelize(),
                new ODD_mesure(null, "Inégalités réduites", "images/odd10.jpg").convertToSequelize(),
                new ODD_mesure(null, "Villes et communautés durables", "images/odd11.png").convertToSequelize(),
                new ODD_mesure(null, "Consommation et production responsables", "images/odd12.png").convertToSequelize(),
                new ODD_mesure(null, "Mesures relatives à la lutte contre les changements climatiques", "images/odd13.png").convertToSequelize(),
                new ODD_mesure(null, "Vie aquatique", "images/odd14.png").convertToSequelize(),
                new ODD_mesure(null, "Vie terrestre", "images/odd15.png").convertToSequelize(),
                new ODD_mesure(null, "Paix, justice et institutions efficaces", "images/odd16.png").convertToSequelize(),
                new ODD_mesure(null, "Partenariats pour la réalisation des objectifs", "images/odd17.png").convertToSequelize(),
            ]
            database.ODD_mesure.bulkCreate(odds_mesure).then((odds_mesure) => {
                var mesureOdd = [
                    new MesureOdd(mesures[0].id, odds_mesure[0].id, Math.random() * 101).convertToSequelize(),
                    new MesureOdd(mesures[0].id, odds_mesure[3].id, Math.random() * 101).convertToSequelize(),
                    new MesureOdd(mesures[0].id, odds_mesure[7].id, Math.random() * 101).convertToSequelize(),
                    new MesureOdd(mesures[1].id, odds_mesure[0].id, Math.random() * 101).convertToSequelize(),
                    new MesureOdd(mesures[1].id, odds_mesure[1].id, Math.random() * 101).convertToSequelize(),
                    new MesureOdd(mesures[1].id, odds_mesure[3].id, Math.random() * 101).convertToSequelize(),
                    new MesureOdd(mesures[1].id, odds_mesure[9].id, Math.random() * 101).convertToSequelize(),
                    new MesureOdd(mesures[2].id, odds_mesure[0].id, Math.random() * 101).convertToSequelize(),
                    new MesureOdd(mesures[2].id, odds_mesure[2].id, Math.random() * 101).convertToSequelize(),
                    new MesureOdd(mesures[3].id, odds_mesure[3].id, Math.random() * 101).convertToSequelize(),
                    new MesureOdd(mesures[3].id, odds_mesure[9].id, Math.random() * 101).convertToSequelize(),
                    new MesureOdd(mesures[3].id, odds_mesure[10].id, Math.random() * 101).convertToSequelize(),
                    new MesureOdd(mesures[3].id, odds_mesure[14].id, Math.random() * 101).convertToSequelize(),
                    new MesureOdd(mesures[4].id, odds_mesure[4].id, Math.random() * 101).convertToSequelize(),
                    new MesureOdd(mesures[4].id, odds_mesure[6].id, Math.random() * 101).convertToSequelize(),
                    new MesureOdd(mesures[4].id, odds_mesure[1].id, Math.random() * 101).convertToSequelize(),
                    new MesureOdd(mesures[4].id, odds_mesure[5].id, Math.random() * 101).convertToSequelize(),
                    new MesureOdd(mesures[5].id, odds_mesure[5].id, Math.random() * 101).convertToSequelize(),
                    new MesureOdd(mesures[5].id, odds_mesure[14].id, Math.random() * 101).convertToSequelize(),
                    new MesureOdd(mesures[5].id, odds_mesure[16].id, Math.random() * 101).convertToSequelize(),
                    new MesureOdd(mesures[5].id, odds_mesure[3].id, Math.random() * 101).convertToSequelize(),
                    new MesureOdd(mesures[6].id, odds_mesure[6].id, Math.random() * 101).convertToSequelize(),
                    new MesureOdd(mesures[6].id, odds_mesure[5].id, Math.random() * 101).convertToSequelize(),
                    new MesureOdd(mesures[6].id, odds_mesure[9].id, Math.random() * 101).convertToSequelize(),
                    new MesureOdd(mesures[6].id, odds_mesure[2].id, Math.random() * 101).convertToSequelize(),
                    new MesureOdd(mesures[7].id, odds_mesure[7].id, Math.random() * 101).convertToSequelize(),
                    new MesureOdd(mesures[7].id, odds_mesure[3].id, Math.random() * 101).convertToSequelize(),
                    new MesureOdd(mesures[7].id, odds_mesure[14].id, Math.random() * 101).convertToSequelize(),
                    new MesureOdd(mesures[7].id, odds_mesure[11].id, Math.random() * 101).convertToSequelize(),
                    new MesureOdd(mesures[7].id, odds_mesure[10].id, Math.random() * 101).convertToSequelize(),
                    new MesureOdd(mesures[8].id, odds_mesure[8].id, Math.random() * 101).convertToSequelize(),
                    new MesureOdd(mesures[8].id, odds_mesure[2].id, Math.random() * 101).convertToSequelize(),
                    new MesureOdd(mesures[9].id, odds_mesure[1].id, Math.random() * 101).convertToSequelize(),
                    new MesureOdd(mesures[10].id, odds_mesure[10].id, Math.random() * 101).convertToSequelize(),
                    new MesureOdd(mesures[10].id, odds_mesure[12].id, Math.random() * 101).convertToSequelize(),
                    new MesureOdd(mesures[10].id, odds_mesure[11].id, Math.random() * 101).convertToSequelize(),
                    new MesureOdd(mesures[10].id, odds_mesure[16].id, Math.random() * 101).convertToSequelize(),
                    new MesureOdd(mesures[11].id, odds_mesure[13].id, Math.random() * 101).convertToSequelize(),
                    new MesureOdd(mesures[11].id, odds_mesure[11].id, Math.random() * 101).convertToSequelize(),
                    new MesureOdd(mesures[12].id, odds_mesure[12].id, Math.random() * 101).convertToSequelize(),
                    new MesureOdd(mesures[12].id, odds_mesure[1].id, Math.random() * 101).convertToSequelize(),
                    new MesureOdd(mesures[12].id, odds_mesure[2].id, Math.random() * 101).convertToSequelize(),
                    new MesureOdd(mesures[13].id, odds_mesure[13].id, Math.random() * 101).convertToSequelize(),
                    new MesureOdd(mesures[13].id, odds_mesure[15].id, Math.random() * 101).convertToSequelize(),
                    new MesureOdd(mesures[14].id, odds_mesure[14].id, Math.random() * 101).convertToSequelize(),
                    new MesureOdd(mesures[14].id, odds_mesure[6].id, Math.random() * 101).convertToSequelize(),
                    new MesureOdd(mesures[14].id, odds_mesure[9].id, Math.random() * 101).convertToSequelize(),
                    new MesureOdd(mesures[15].id, odds_mesure[15].id, Math.random() * 101).convertToSequelize(),
                    new MesureOdd(mesures[15].id, odds_mesure[12].id, Math.random() * 101).convertToSequelize(),
                    new MesureOdd(mesures[16].id, odds_mesure[16].id, Math.random() * 101).convertToSequelize(),
                    new MesureOdd(mesures[16].id, odds_mesure[1].id, Math.random() * 101).convertToSequelize(),
                    new MesureOdd(mesures[16].id, odds_mesure[13].id, Math.random() * 101).convertToSequelize(),
                    new MesureOdd(mesures[16].id, odds_mesure[6].id, Math.random() * 101).convertToSequelize(),
                    new MesureOdd(mesures[17].id, odds_mesure[16].id, Math.random() * 101).convertToSequelize(),
                    new MesureOdd(mesures[17].id, odds_mesure[2].id, Math.random() * 101).convertToSequelize(),
                    new MesureOdd(mesures[18].id, odds_mesure[4].id, Math.random() * 101).convertToSequelize(),
                    new MesureOdd(mesures[18].id, odds_mesure[3].id, Math.random() * 101).convertToSequelize(),
                    new MesureOdd(mesures[18].id, odds_mesure[7].id, Math.random() * 101).convertToSequelize(),
                    new MesureOdd(mesures[19].id, odds_mesure[9].id, Math.random() * 101).convertToSequelize(),
                    new MesureOdd(mesures[19].id, odds_mesure[13].id, Math.random() * 101).convertToSequelize(),
                    new MesureOdd(mesures[22].id, odds_mesure[4].id, Math.random() * 101).convertToSequelize(),
                    new MesureOdd(mesures[24].id, odds_mesure[9].id, Math.random() * 101).convertToSequelize(),
                    new MesureOdd(mesures[26].id, odds_mesure[5].id, Math.random() * 101).convertToSequelize(),
                    new MesureOdd(mesures[28].id, odds_mesure[12].id, Math.random() * 101).convertToSequelize(),
                    new MesureOdd(mesures[30].id, odds_mesure[3].id, Math.random() * 101).convertToSequelize(),
                    new MesureOdd(mesures[32].id, odds_mesure[1].id, Math.random() * 101).convertToSequelize(),
                    new MesureOdd(mesures[35].id, odds_mesure[11].id, Math.random() * 101).convertToSequelize(),
                    new MesureOdd(mesures[37].id, odds_mesure[7].id, Math.random() * 101).convertToSequelize(),
                    new MesureOdd(mesures[39].id, odds_mesure[15].id, Math.random() * 101).convertToSequelize(),
                    new MesureOdd(mesures[40].id, odds_mesure[6].id, Math.random() * 101).convertToSequelize(),
                    new MesureOdd(mesures[42].id, odds_mesure[8].id, Math.random() * 101).convertToSequelize(),
                    new MesureOdd(mesures[47].id, odds_mesure[6].id, Math.random() * 101).convertToSequelize(),
                ]
                database.MesureODD.bulkCreate(mesureOdd).then((mesureOdd) => {
                    var themes = [
                        new Theme(null, "Consommation et production").convertToSequelize(),
                        new Theme(null, "Développement urbain, mobilité et infrastructure").convertToSequelize(),
                        new Theme(null, "Energie et climat").convertToSequelize(),
                        new Theme(null, "Ressources naturelles").convertToSequelize(),
                        new Theme(null, "Système économique").convertToSequelize(),
                        new Theme(null, "Formation, recherche, innovation").convertToSequelize(),
                        new Theme(null, "Lutte contre la pauvreté").convertToSequelize(),
                        new Theme(null, "Cohésion sociale et égalité des genres").convertToSequelize(),
                        new Theme(null, "Santé").convertToSequelize(),
                        new Theme(null, "Exemplarité").convertToSequelize(),
                    ]
                    database.Theme.bulkCreate(themes).then((themes) => {
                        var odds = [
                            new ODD(null, "Pas de pauvreté", "images/odd1.png").convertToSequelize(),
                            new ODD(null, "Faim zéro", "images/odd2.png").convertToSequelize(),
                            new ODD(null, "Bonne santé et bien-être", "images/odd3.png").convertToSequelize(),
                            new ODD(null, "Education de qualité", "images/odd4.png").convertToSequelize(),
                            new ODD(null, "Egalité des sexes", "images/odd5.png").convertToSequelize(),
                            new ODD(null, "Eau propre et assainissement", "images/odd6.png").convertToSequelize(),
                            new ODD(null, "Energie propre et d'un coût abordable", "images/odd7.png").convertToSequelize(),
                            new ODD(null, "Travail décent et croissance économique", "images/odd8.png").convertToSequelize(),
                            new ODD(null, "Industrie, innovation et infrastructure", "images/odd9.png").convertToSequelize(),
                            new ODD(null, "Inégalités réduites", "images/odd10.jpg").convertToSequelize(),
                            new ODD(null, "Villes et communautés durables", "images/odd11.png").convertToSequelize(),
                            new ODD(null, "Consommation et production responsables", "images/odd12.png").convertToSequelize(),
                            new ODD(null, "Mesures relatives à la lutte contre les changements climatiques", "images/odd13.png").convertToSequelize(),
                            new ODD(null, "Vie aquatique", "images/odd14.png").convertToSequelize(),
                            new ODD(null, "Vie terrestre", "images/odd15.png").convertToSequelize(),
                            new ODD(null, "Paix, justice et institutions efficaces", "images/odd16.png").convertToSequelize(),
                            new ODD(null, "Partenariats pour la réalisation des objectifs", "images/odd17.png").convertToSequelize(),
                        ]
                        database.ODD.bulkCreate(odds).then((odds) => {
                            var themeOdds = [
                                new ThemeOdd(themes[0].id, odds[11].id).convertToSequelize(),
                                new ThemeOdd(themes[1].id, odds[8].id).convertToSequelize(),
                                new ThemeOdd(themes[1].id, odds[10].id).convertToSequelize(),
                                new ThemeOdd(themes[2].id, odds[5].id).convertToSequelize(),
                                new ThemeOdd(themes[2].id, odds[6].id).convertToSequelize(),
                                new ThemeOdd(themes[2].id, odds[12].id).convertToSequelize(),
                                new ThemeOdd(themes[3].id, odds[1].id).convertToSequelize(),
                                new ThemeOdd(themes[3].id, odds[5].id).convertToSequelize(),
                                new ThemeOdd(themes[3].id, odds[14].id).convertToSequelize(),
                                new ThemeOdd(themes[3].id, odds[13].id).convertToSequelize(),
                                new ThemeOdd(themes[4].id, odds[7].id).convertToSequelize(),
                                new ThemeOdd(themes[4].id, odds[9].id).convertToSequelize(),
                                new ThemeOdd(themes[4].id, odds[15].id).convertToSequelize(),
                                new ThemeOdd(themes[4].id, odds[16].id).convertToSequelize(),
                                new ThemeOdd(themes[5].id, odds[3].id).convertToSequelize(),
                                new ThemeOdd(themes[6].id, odds[0].id).convertToSequelize(),
                                new ThemeOdd(themes[6].id, odds[15].id).convertToSequelize(),
                                new ThemeOdd(themes[7].id, odds[4].id).convertToSequelize(),
                                new ThemeOdd(themes[7].id, odds[9].id).convertToSequelize(),
                                new ThemeOdd(themes[7].id, odds[15].id).convertToSequelize(),
                                new ThemeOdd(themes[8].id, odds[2].id).convertToSequelize(),
                                new ThemeOdd(themes[9].id, odds[16].id).convertToSequelize(),
                            ]
                            database.ThemeOdd.bulkCreate(themeOdds).then((themeOdds) => {
                                database.close();
                            })
                        })
                    })
                })
            })
        })
    })
})

