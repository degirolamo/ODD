var odd_mesure = class odd_mesure {

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
     * Return an object usable by sequelize
     */
    convertToSequelize(){
        return{
            id: this.id,
            name: this.name,
            image: this.image
        }
    }
}

module.exports = odd_mesure;