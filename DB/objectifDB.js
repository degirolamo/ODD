var Objectif = require("../objects/objectif");
var database = require("./database");
var MesureOdd = require("../objects/mesureOdd");


/**
 * Fonction pour récupérer tous les objectifs, les mesures et les ODD qui sont liés de la DB
 */

function getAllObjectif() {
    return new Promise((resolve, reject) => {
        database.Objectif.findAll({
            include: [
                {
                    model: database.Mesure,
                    include:
                        [
                            {
                                model: database.ODD_mesure
                            }
                        ]
                }
            ]
        }).then((Objectifs) => {
            resolve(Objectifs)
        })
    })
}

/**
 * Fonction pour vider la table MesureODD 
 */

function truncatePercentDB() {
    return new Promise((resolve, reject) => {
        database.MesureODD.truncate({

        }).then(() => {
            resolve()
        })
    })
}

/**
 * Fonction pour remplir la table MesureODD avec les nouvelles données
 */

function addPercentDB(obj) {
    return new Promise((resolve) => {
        var percents = [];
        var index = 0;
        var mesure = 0;
        var odd = 0;
        var pourcentage = 0;
        var indexToCheckOdd = 1;
        var indexToCheckMesure = 2;
        Object.keys(obj).forEach(function (key) {
            if (index == 0 || index % 3 == 0) {
                odd = obj[key];
            } else if (indexToCheckOdd == index) {
                mesure = obj[key];
                indexToCheckOdd += 3;
            } else if (indexToCheckMesure == index) {
                pourcentage = obj[key];
                indexToCheckMesure += 3;
                var percent = new MesureOdd(mesure, odd, pourcentage).convertToSequelize();
                percents.push(percent);
            }
            index++;
        })
        console.log(percents);
        
        database.MesureODD.bulkCreate(percents).then((percents) => {
            resolve(percents);

        })
    })
}



module.exports.truncatePercentDB = truncatePercentDB;
module.exports.addPercentDB = addPercentDB;
module.exports.getAllObjectif = getAllObjectif;