class circle
{
    Redius : number
    PI : any = 3.14

    constructor(x : number)
    {
        this.Redius = x
    }

    Area()
    {
        var Ans = 0
        Ans = this.PI * this.Redius * this.Redius
        console.log("Area of circle is : "+Ans)
    }
}

var No1 = 5
var cobj = new circle(No1)
cobj.Area()

var NO2 = 25
var cobj2 = new circle(NO2)
cobj2.Area()