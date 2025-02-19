class Arithmatic_OOP
{
    NO1 : number
    NO2 : number
    Ans : number

    constructor(x : number,y: number)
    {
        this.NO1=x
        this.NO2=y
    }

    Addition()
    {
        this.Ans = this.NO1 + this.NO2
        console.log("Addition is : "+this.Ans)
    }

    substraction()
    {
        this.Ans = this.NO1-this.NO2
        console.log("Substraction is : "+this.Ans)
    }
    
    Multiplication()
    {
        this.Ans = this.NO1 * this.NO2
        console.log("Multiplication is : "+this.Ans)
    }

    Division()
    {
        this.Ans = this.NO1 / this.NO2
        console.log("Division is : "+this.Ans)
    }

}

var value1 = 20
var value2 = 10
var aobj = new Arithmatic_OOP(value1,value2)
aobj.Addition()
aobj.substraction()
aobj.Multiplication()
aobj.Division()



var a = 100
var b = 20
var aobj1 = new Arithmatic_OOP(a,b)
aobj1.Addition()
aobj1.substraction()
aobj1.Multiplication()
aobj1.Division()