class circle
{
    Redius:number
    PI:number=3.14

    constructor(X:number)
    {
        this.Redius=X
    }

    Area()
    {
        var Ans:number=0
        Ans=this.PI*this.Redius*this.Redius
        return Ans
    }
}

var obj1=new circle(3)
var obj2=new circle(4)

console.log("Area of circle  is ="+obj1.Area())
console.log("Area of circle  is ="+obj2.Area())
