function solve(classDefinition) {
    classDefinition.prototype.species = 'Human';
    classDefinition.prototype.toSpeciesString = function () {
        return `I am a ${this.species}. ${this.toString()}`
    }
}   