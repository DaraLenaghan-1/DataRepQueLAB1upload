//blueprint for creating objects
class BMI
{
    constructor(height, weight)// constructor with two arguments
    {
        this.height = height;
        this.weight = weight;
    }//constructor end

    calculateBMI()//method
    {
        let bmi = this.weight/(this.height**2);
        return bmi;
    }//end calculate

}//end BMI

//an instance of the class. invoking the calculateBMI method.

                //height,weight
let myBMI = new BMI(2,    90);
let calc = myBMI.calculateBMI();
console.log(calc);