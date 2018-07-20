var odd = class odd {

    /**
     * 
     * @param {*} id 
     * @param {*} name 
     * @param {*} image
     */
    constructor(id, name, image){
        this.id = id;
        this.name = name;
        this.image = image;
    }

    /**
     * retourne un objet utilisable avec Sequelize
     */
    
    convertToSequelize(){
        return{
            id: this.id,
            name: this.name,
            image: this.image
        }
    }
}

module.exports = odd;