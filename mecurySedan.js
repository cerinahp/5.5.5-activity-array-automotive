//this includes the vehicle class as a module
const VehicleModule = require(.vehicleBaseClass).Vehicle 
class Car extends VehicleModule{
    constructor(make, model, year, color, mileage){
        super(make, model, year, color, mileage);
        this.maxPassengers = 5;
        this.passenger = 0;
        this.numberOfWheels = 4;
        this.maximumSpeed = 160;
        this.fuel = 10;
        this.scheduleService = false;
    }

    loadPassenger(num)
    if (this.passenger < this.maxPassengers){
        if((num + this.passenger)<= this.maxPassengers) {
            this.passenger = num;
            return this.passenger;
        } else {
            console.log(this.model + " " + this.make + "not have enough space to take all passengers ");
        }
        }  else { 
            console.log(this.modle + '' + this.make + "is full")
             
    }
    
    start() {
        if (this.fuel > 0) {            
            console.log("engine has started.");
            return this.started = true
        } else {
            console.log("no fuel");
            return this.started = false;
        }
    }
    checkService(mileage) {
        if (this.mileage > 30000) {            
            this.scheduleService == true
            return this.scheduleService;                       
        }
    }

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mecury", "Sedan", "2009", "gold", "60000");
v.start()
v.loadPassenger(5)
v.stop()
v.checkService()

console.log(v.make)
