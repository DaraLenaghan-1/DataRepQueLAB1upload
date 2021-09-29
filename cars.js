//blueprint for creating objects
class Vehicle
{
    constructor(make, model, year)// constructor with two arguments
    {
        this.make = make;
        this.model = model;
        this.year = year;
    }//end constructor

    information()
    {
        console.log(`Make: ${this.make}`);
        console.log(`Model: ${this.model}`);
        console.log( `Year: ${this.year}`);
    }//end info

}//end Vehicle

//child class extends from parent class vehicle
class Car extends Vehicle
{
    constructor(make, model, year, doors)
    {
        super(make,model,year);//using the parent class with "super"
        this.doors = doors;
    }

    information()
    {
        super.information();
        console.log(`Doors: ${this.doors}`);
    }
}

let myCar = new Car(`Ford`, `Galaxy`, 2016, 5);
myCar.information();

// let myVehicle = new Vehicle(`Ford`, `Galaxy`, 2016);
// myVehicle.information();