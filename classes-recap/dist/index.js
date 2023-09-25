"use strict";
class Player {
    //public - accessible globally
    //private - only accessible in the class, can work with the # but you ES2015 for it to work
    constructor(first, last) {
        this.score = 0;
        this.first = first;
        this.last = last;
    }
    secretMethod() {
        console.log("SECRET METHOD!!!");
    }
}
const elton = new Player("Elton", "Steele");
