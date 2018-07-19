var Theme = require("../objects/theme");
var database = require("./database");
var ThemeOdd = require("../objects/themeOdd");
var screenshot = require('desktop-screenshot');


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

function truncateDB() {
    return new Promise((resolve, reject) => {
        database.ThemeOdd.truncate({

        }).then(() => {
            resolve()
        })
    })
}

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