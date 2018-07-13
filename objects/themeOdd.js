var themeOdd = class themeOdd {
    /**
     * 
     * @param {Number} themeId 
     * @param {Number} oddId 
     */
    constructor(themeId, oddId){
        this.themeId = themeId;
        this.oddId = oddId;
    }

    convertToSequelize(){
        return {
            themeId: this.themeId,
            oddId: this.oddId
        }
    }
}
module.exports = themeOdd;