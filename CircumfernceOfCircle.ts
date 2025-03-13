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

class CircleX extends circle
{
    Circumference()
    {
        var Ans : number=0
        Ans=2*this.PI*this.Redius
        return Ans
    }

}

var obj1=new CircleX(3)
var obj2=new CircleX(4)

console.log("Area of circle  is ="+obj1.Area())
console.log("Area of circle  is ="+obj2.Area())

console.log("Circumference of circle  is ="+obj1.Circumference())
console.log("Circumference of circle  is ="+obj2.Circumference())