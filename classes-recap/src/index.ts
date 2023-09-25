class Player {
    public readonly first: string;
    //readonly can let other developers know not to modify, and it will red underline in typescript
    public readonly last: string;
    private score: number = 0;
    //public - accessible globally
    //private - only accessible in the class, can work with the # but you ES2015 for it to work
    constructor(first: string, last: string){
        this.first = first;
        this.last = last;
    }

    private secretMethod(): void {
        console.log("SECRET METHOD!!!");
    }
}

const elton = new Player("Elton", "Steele");