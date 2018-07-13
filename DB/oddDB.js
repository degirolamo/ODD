var ODD = require("../objects/odd");
var database = require("./database");


function getAllOdd(){
    return new Promise((resolve, reject) => {
        database.ODD.findAll({
        }).then((Odds)=>{
            resolve(Odds)
        })
    })
}

module.exports.getAllOdd = getAllOdd;