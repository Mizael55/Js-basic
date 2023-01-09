
class Car {
    brand: string;
    doors: number;
    fueltank: number;
    isRunning: boolean;
    type: string;

    createdAt: number;

    constructor() {
        this.brand = 'No brand';
        this.doors = 0;
        this.fueltank = 0;
        this.type = 'No type';
        this.isRunning = false;
        this.createdAt = Date.now();
    }

    turnOn() {
        if (this.isRunning === true) {
            console.log('Car is already running');
            return;
        }

        if (this.fueltank <= 0) {
            console.log('Car has no fuel');
            return;  
        }

            this.isRunning = true;
            console.log('Car is now running');  
  
        }
    }

let myMazda = new Car();
let myFord = new Car();

console.log(myMazda);
myMazda.turnOn();
console.log(myMazda);

console.log('ford');
console.log(myFord);
