class Player {
    #score = 0;
    numLives = 10;
    constructor(first, last){
        this.first = first;
        this.last = last;
    }
    getScore(){
        return this.#score;
    }
    updateScore(newScore){
        this.#score=newScore;
    }
    taunt(){
        console.log("BOOYAH");
    }
    lostLife(){
        this.numLives-=1;
    }
}

const player1 = new Player("Blue", "Steele");
// player1.taunt();
// console.log(player1.first);
// console.log(player1.last);
// console.log(player1);
// console.log(player1.numLives);
// player1.lostLife();
// console.log(player1.numLives);
console.log(player1.getScore());
player1.updateScore(28);
console.log(player1.getScore());



const player2 = new Player("Charlie", "Brown");
// player2.taunt();
