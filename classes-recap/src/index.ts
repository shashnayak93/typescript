class Player {
    // public readonly first: string;
    // //readonly can let other developers know not to modify, and it will red underline in typescript
    // public readonly last: string;
    // private score: number = 0;
    //public - accessible globally
    //private - only accessible in the class, can work with the # but you ES2015 for it to work
    constructor(public first: string, public last: string, private _score: number){

    }

    private secretMethod(): void {
        console.log("SECRET METHOD!!!");
    }

    get fullName(): string{
        return `${this.first} ${this.last}`
    }

    get score():number{
        return this._score;
    }

    set score(newScore: number){
        if(newScore<0){
            throw new Error("Score cannot be negative!");
        }
        this._score = newScore;
    }
}

const elton = new Player("Elton", "Steele", 100);
elton.fullName;
elton.score = 23;
