class GuessingGame {
    constructor(array, halfLength) {
        this.array = array ;
        this.halfLength = halfLength ;
        }
    setRange(min, max) {
        this.array = []
        let arrayLength = max - min
        for (let index = 0; index <= arrayLength; index++) {
            this.array.push(min)
            min++
        }
        return this.array
    }
    
    
    guess() {
        this.halfLength = Math.floor(this.array.length / 2)
        return this.array[this.halfLength]
    }

    lower() {
        this.array = this.array.slice(0, this.halfLength + 1) 
        return this.array 
    }

    greater() {
        this.array = this.array.slice(this.halfLength)
        return this.array
    }
}

module.exports = GuessingGame;
