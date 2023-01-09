
export class Car {
    public brand: string;
    public doors: number;
    public fueltank: number;
    public isRunning: boolean;
    public type: string;

    createdAt: number;

    constructor(brand: string, type: string) {
        this.brand = brand;
        this.doors = 0;
        this.fueltank = 0;
        this.type = type;
        this.isRunning = false;
        this.createdAt = Date.now();
    }

    turnOn() {
        if (this.isRunning) {
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

    fillTank(gas:number){

        if (gas <= 0) {
            console.log('El gas tiene que ser positivo');
            return;
        }
        
        let newFuelTank = this.fueltank + gas;

        if (newFuelTank > 100) {
            this.fueltank = 100
        }else{
            this.fueltank = newFuelTank;
            
        }

    }
}


let myMazda = new Car('Mazda', 'Sedan');
// let myFord = new Car();

console.log(myMazda);
myMazda.fillTank(50);
myMazda.fillTank(150);
myMazda.turnOn();
console.log(myMazda);

// console.log('ford');
// console.log(myFord);
