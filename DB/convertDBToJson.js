var database = require("./database");
var fs = require('fs');

function convertDBTheme() {
    return new Promise((resolve) => {
        database.Theme.findAll({
            include: [
                {
                    model: database.ODD,
                }
            ]
        }).then((Themes) => {
            var tab = []
            Themes = JSON.parse(JSON.stringify(Themes))
            var temp = {
                "id": 0,
                "name": "Themes"
            }
            tab.push(temp);
            for (var i = 0; i < Themes.length; i++) {
                var Theme = Themes[i];
                var temp = {
                    "id": Theme.id,
                    "name": Theme.name,
                    "parent": 0
                }
                tab.push(temp);
                for (var j = 0; j < Theme.odds.length; j++) {
                    var Odd = Theme.odds[j];
                    var temp = {
                        "id": Theme.id + '000' + Odd.id,
                        "name": Odd.name,
                        "parent": Theme.id
                    }
                    tab.push(temp);
                }

            }
            fs.writeFileSync(__dirname + '/../public/dbTheme.json', JSON.stringify(tab))
            resolve();
        })
    })
}

function convertDBMesure() {
    return new Promise((resolve) => {
        database.Mesure.findAll({
            include: [
                {
                    model: database.ODD_mesure
                }
            ]
        }).then((Mesures) => {
            var tab = []
            Mesures = JSON.parse(JSON.stringify(Mesures))
            for (var i = 0; i < Mesures.length; i++) {
                var mesure = Mesures[i];
                for (var j = 0; j < mesure.odd_mesures.length; j++) {
                    var odd_mesure = mesure.odd_mesures[j]
                    var temp = {
                        "name": mesure.name,
                        "pourcentage": odd_mesure.mesure_odd.pourcentage,
                        "ODD": odd_mesure.id,
                        "Objectif": mesure.idObjectif
                    }
                    tab.push(temp);
                }
            }
            fs.writeFileSync(__dirname + '/../public/dbMesure.json', JSON.stringify(tab))
            resolve();
        })
    })
}

function convertDBOdd() {
    return new Promise((resolve) => {
        database.Objectif.findAll({
            include: [
                {
                    model: database.Mesure,
                    include: [
                        {
                            model: database.ODD_mesure
                        }
                    ]
                }

            ]
        }).then((Objectifs) => {
            var tab = []
            Objectifs = JSON.parse(JSON.stringify(Objectifs))
            for (var i = 0; i < Objectifs.length; i++) {
                var objectif = Objectifs[i];
                var percent = {};
                var occurence = {};
                for (var j = 0; j < objectif.mesures.length; j++) {
                    var mesure = objectif.mesures[j];
                    for (var k = 0; k < mesure.odd_mesures.length; k++) {
                        var odd_mesure = mesure.odd_mesures[k];
                        if (percent.hasOwnProperty(odd_mesure.id)) {
                            percent[odd_mesure.id] += odd_mesure.mesure_odd.pourcentage;
                            occurence[odd_mesure.id] += 1;
                        } else {
                            percent[odd_mesure.id] = odd_mesure.mesure_odd.pourcentage;
                            occurence[odd_mesure.id] = 1;
                        }
                    }
                }
                for (var oddMesureId in percent) {
                    var temp = {
                        "name": objectif.name,
                        "pourcentage": percent[oddMesureId] / occurence[oddMesureId],
                        "ODD": oddMesureId,
                        "Objectif": objectif.id
                    }
                    tab.push(temp);
                }

            }
            fs.writeFileSync(__dirname + '/../public/dbOdd.json', JSON.stringify(tab))
            resolve();
        })
    })
}

module.exports.convertDBOdd = convertDBOdd;
module.exports.convertDBTheme = convertDBTheme;
module.exports.convertDBMesure = convertDBMesure;


