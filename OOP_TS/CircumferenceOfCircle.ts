class circle
{
    Redius : number
    PI = 3.14
    Ans : any 

    constructor(x: number)
    {
        this.Redius = x
    }
    Area()
    {
        this.Ans = this.PI * this.Redius * this.Redius
        console.log("Area of circle is : "+this.Ans)
    }
}

class circlex extends circle
{
    circumference()
    {
        this.Ans = 2 * this.PI * this.Redius
        console.log("circumference of area : "+this.Ans)
    }
}

var No1 = 5
var cobj = new circlex(No1)
cobj.Area()
cobj.circumference()


var NO2 = 10
var cobj2 = new circlex(NO2)
cobj2.Area()
cobj2.circumference()