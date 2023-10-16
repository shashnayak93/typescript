// class Player {
//     // public readonly first: string;
//     // //readonly can let other developers know not to modify, and it will red underline in typescript
//     // public readonly last: string;
//     // private score: number = 0;
//     //public - accessible globally
//     //private - only accessible in the class, can work with the # but you ES2015 for it to work
//     constructor(public first: string,
//                 public last: string,
//                 protected _score: number){

//     }

//     private secretMethod(): void {
//         console.log("SECRET METHOD!!!");
//     }

//     get fullName(): string{
//         return `${this.first} ${this.last}`
//     }

//     get score():number{
//         return this._score;
//     }

//     set score(newScore: number){
//         if(newScore<0){
//             throw new Error("Score cannot be negative!");
//         }
//         this._score = newScore;
//     }
// }

// class SuperPlayer extends Player{
//     public isAdmin: boolean = true;
//     maxScore(){
//         this._score = 999999;
//     }
// }

// const elton = new Player("Elton", "Steele", 100);
// elton.fullName;
// elton.score = 23;


interface Colorful{
    color: string;
}

interface Printable{
    print(): void;
}

class Bike implements Colorful{
    constructor(public color: string){}
}

class Jacket implements Colorful, Printable{
    constructor(public color: string, public brand: string){}
    print(){
        console.log(`${this.color} ${this.brand} jacket`);
    }
}

const bike1 = new Bike("red")
const jacket1 = new Jacket("black", "Prada")

abstract class Employee {
    constructor(public first: string, public last: string){}
    abstract getPay():number;
    greet(){
        console.log("Hello!");
    }
}

class FullTimeEmployee extends Employee{
    constructor(first: string, last: string, private salary: number){
        super(first, last);
    }
    getPay(): number{
        return this.salary;
    }
}

class PartTimeEmployee extends Employee{
    constructor(first: string, last: string, private hourlyRate: number, private hoursWorked: number){
        super(first, last);
    }
    getPay(): number{
        return this.hourlyRate * this.hoursWorked;
    }
}

const betty = new FullTimeEmployee("Betty", "White", 95000);
console.log(betty.getPay());

const bill = new PartTimeEmployee("Bill", "Billerson", 24, 1100);
console.log(bill.getPay());
