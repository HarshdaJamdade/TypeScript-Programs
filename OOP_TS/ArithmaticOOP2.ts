class Arithmatic_constructor
{  
    //characteristics
    No1 : number
    No2 : number

    constructor(x: number,y:number)
    {
        this.No1 =x
        this.No2 =y
    }

    //Behaviour
    Addition() : any
    {
        var Ans : number = 0;
        Ans = this.No1 + this.No2;
        return Ans
    }

    Substraction() : any
    {
        var Ans : number = 0;
        Ans = this.No1 - this.No2;
        return Ans
    }

}

var aobj = new Arithmatic_constructor(11,10);
aobj.No1 = 11
aobj.No2 = 10


var Result : number =0

Result = aobj.Addition()
console.log("Addition is : " +Result)

Result = aobj.Substraction()
console.log("Substraction is : " +Result)
