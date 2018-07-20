/**
 * DB
 */
const Sequelize = require('sequelize');
const sequelize = new Sequelize('db', 'daniel', 'pass1234', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false,
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    },
    timezone: 'Europe/Zurich'
})

/**
 * Objectifs table
 */
var Objectif = sequelize.define('objectif', {
    id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement:true },
    name: Sequelize.STRING
 })

/**
 * Mesures table
 */
var Mesure = sequelize.define('mesure', {
    id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
    name: Sequelize.STRING
})

/**
 * ODD table
 */
var ODD = sequelize.define('odd',{
    id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
    name: Sequelize.STRING,
    image: Sequelize.STRING
})

/**
 * ODD_mesure table
 */
var ODD_mesure = sequelize.define('odd_mesure', {
    id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
    name: Sequelize.STRING,
    image: Sequelize.STRING
})

/**
 * Theme table
 */
var Theme = sequelize.define('theme',{
    id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
    name: Sequelize.STRING
})

/**
 * ThemeODD table
 */
var ThemeOdd = sequelize.define('theme_odd',{
})

Theme.belongsToMany(ODD, {through: 'theme_odd'})
ODD.belongsToMany(Theme, {through: 'theme_odd'})
/**
 * MesureODD table
 */
var MesureODD = sequelize.define('mesure_odd',{
    pourcentage: Sequelize.INTEGER
})


/**
 * Relation entre les tables
 */

Mesure.belongsToMany(ODD_mesure, {through: 'mesure_odd'})
ODD_mesure.belongsToMany(Mesure, {through: 'mesure_odd'})

Mesure.belongsTo(Objectif, {foreignKey: 'idObjectif'})
Objectif.hasMany(Mesure, {foreignKey: 'idObjectif' })

module.exports = {
    sync: function () {
        return new Promise((resolve, reject) => {
            sequelize.sync({ force: true }).then(() => {
                resolve();
            })
        })
    },
    close: function () {
        sequelize.close();
    },
    Mesure,
    Objectif,
    MesureODD,
    ODD,
    ODD_mesure,
    Theme,
    ThemeOdd
}



 