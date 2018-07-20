var Theme = require("../objects/theme");
var database = require("./database");
var ThemeOdd = require("../objects/themeOdd");
var screenshot = require('desktop-screenshot');


/**
 * Fonction pour récupérer tous les Thèmes et les ODD liés de la DB
 */

function getAllTheme() {
    return new Promise((resolve, reject) => {
        database.Theme.findAll({
            include: [
                {
                    model: database.ODD
                }
            ]
        }).then((Themes) => {
            resolve(Themes)
        })
    })
}

/**
 * Fonction pour vider la table ThemeOdd
 */

function truncateDB() {
    return new Promise((resolve, reject) => {
        database.ThemeOdd.truncate({

        }).then(() => {
            resolve()
        })
    })
}

/**
 * Fonction pour remplir la table ThemeOdd avec les nouvelles données
 */

function addDB(obj) {
    return new Promise((resolve) => {
        var links = [];
        for (var i = 0; i < obj.length; i++) {
            var link = new ThemeOdd(obj[i].theme, obj[i].odd).convertToSequelize();
            links.push(link);
        }
        database.ThemeOdd.bulkCreate(links).then((links) => {
            resolve(links);

        })
    })
}

/**
 * Fonction pour prendre la capture d'écran et l'enregistrer à la racine
 */

function snap() {
    screenshot("Links.png", {
        quality: 100}, function(error, complete) {
            if (error)
                console.log("Screenshot failed", error);
            else
                console.log("Screenshot succeeded");
        })
    }


module.exports.snap = snap;
module.exports.getAllTheme = getAllTheme;
module.exports.truncateDB = truncateDB;
module.exports.addDB = addDB;