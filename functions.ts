function square(num: number){
    return num * num;
}


// function greet(person: string){
//     return `Hi there, ${person}`;
// }

const doSomething = (person: string, age: number, isFunny: boolean) => {};

square(3);
greet("Shashwath Nayak");
doSomething("Chicken", 47, false);

function greet(person: string = "stranger"){
    return `Hi there, ${person}`;
}

function rando(num: number){
    if(Math.random() < 0.5){
        return num.toString();
    }
    return num;
}

const add = (x: number, y: number): number => {
    return x+y;
}

const colors = ["red","orange","yellow"];
colors.map((color) => {
    return color.toUpperCase();
})

function secondsInDay() {
    return 24 * 60 * 60;
  }

function doNothing() {
2 + 2;
}

function makeError(msg: string): never{
    throw new Error(msg);
}

function gameLoop():never{
    while(true){
        console.log("GAME LOOP RUNNING!");
    }
}
