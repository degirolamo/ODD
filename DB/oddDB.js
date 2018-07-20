var ODD = require("../objects/odd");
var database = require("./database");


/**
 * Fonction pour récupérer tous les ODD
 */

function getAllOdd(){
    return new Promise((resolve, reject) => {
        database.ODD.findAll({
        }).then((Odds)=>{
            resolve(Odds)
        })
    })
}

module.exports.getAllOdd = getAllOdd;