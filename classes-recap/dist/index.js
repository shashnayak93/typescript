"use strict";
class Player {
    // public readonly first: string;
    // //readonly can let other developers know not to modify, and it will red underline in typescript
    // public readonly last: string;
    // private score: number = 0;
    //public - accessible globally
    //private - only accessible in the class, can work with the # but you ES2015 for it to work
    constructor(first, last, _score) {
        this.first = first;
        this.last = last;
        this._score = _score;
    }
    secretMethod() {
        console.log("SECRET METHOD!!!");
    }
    get fullName() {
        return `${this.first} ${this.last}`;
    }
    get score() {
        return this._score;
    }
    set score(newScore) {
        if (newScore < 0) {
            throw new Error("Score cannot be negative!");
        }
        this._score = newScore;
    }
}
const elton = new Player("Elton", "Steele", 100);
elton.fullName;
elton.score = 23;
