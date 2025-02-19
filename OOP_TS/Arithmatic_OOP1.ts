//we have to write application which have perform addition and substraction of two numbers

class Arithmatic
{  
    //characteristics
    No1 : number
    No2 : number

    //Behaviour
    Addition() : any
    {
        var Ans : number = 0;
        Ans = this.No1 + this.No2 ;
        return Ans
    }

    Substraction() : any
    {
        var Ans : number = 0;
        Ans = this.No1 - this.No2;
        return Ans
    }

}

var obj = new Arithmatic();
obj.No1 = 11;
obj.No2 = 10;

var Result : number =0

Result = obj.Addition()
console.log("Addition is : " +Result)

Result = obj.Substraction()
console.log("Substraction is : " +Result)
