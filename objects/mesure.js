var mesure = class mesure {
   
    /**
     * 
     * @param {Number} id 
     * @param {string} name 
     * @param {Number} objectifId
     */
    constructor(id, name, objectifId){
        this.id = id;
        this.name = name;
        this.objectifId = objectifId;
    }

    /**
     * retourne un objet utilisable avec Sequelize
     */

    convertToSequelize(){
        return {
            id: this.id,
            name: this.name,
            idObjectif: this.objectifId
        }
    }
}

module.exports = mesure;