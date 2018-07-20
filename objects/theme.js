var theme = class theme {
   
    /**
     * 
     * @param {Number} id 
     * @param {string} name 
     */
    constructor(id, name){
        this.id = id;
        this.name = name;
    }

    /**
     * retourne un objet utilisable avec Sequelize
     */
    
    convertToSequelize(){
        return {
            id: this.id,
            name: this.name,
        }
    }
}

module.exports = theme;