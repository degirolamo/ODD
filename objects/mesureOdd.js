var mesureOdd = class mesureOdd {
    /**
     * 
     * @param {Number} mesureId 
     * @param {Number} oddMesureId 
     * @param {Number} pourcentage
     */
    constructor(mesureId, oddMesureId, pourcentage){
        this.mesureId = mesureId;
        this.oddMesureId = oddMesureId;
        this.pourcentage = pourcentage;
    }

    convertToSequelize(){
        return {
            mesureId: this.mesureId,
            oddMesureId: this.oddMesureId,
            pourcentage: this.pourcentage
        }
    }
}
module.exports = mesureOdd;