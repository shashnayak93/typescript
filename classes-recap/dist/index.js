"use strict";
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
class Bike {
    constructor(color) {
        this.color = color;
    }
}
class Jacket {
    constructor(color, brand) {
        this.color = color;
        this.brand = brand;
    }
    print() {
        console.log(`${this.color} ${this.brand} jacket`);
    }
}
const bike1 = new Bike("red");
const jacket1 = new Jacket("black", "Prada");
class Employee {
    constructor(first, last) {
        this.first = first;
        this.last = last;
    }
    greet() {
        console.log("Hello!");
    }
}
class FullTimeEmployee extends Employee {
    constructor(first, last, salary) {
        super(first, last);
        this.salary = salary;
    }
    getPay() {
        return this.salary;
    }
}
class PartTimeEmployee extends Employee {
    constructor(first, last, hourlyRate, hoursWorked) {
        super(first, last);
        this.hourlyRate = hourlyRate;
        this.hoursWorked = hoursWorked;
    }
    getPay() {
        return this.hourlyRate * this.hoursWorked;
    }
}
const betty = new FullTimeEmployee("Betty", "White", 95000);
console.log(betty.getPay());
const bill = new PartTimeEmployee("Bill", "Billerson", 24, 1100);
console.log(bill.getPay());
