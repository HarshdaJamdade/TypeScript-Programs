function Area(value1:number,PI:number = 3.14):number
{
    var Ans:number=0

    Ans=value1*value1*PI

    return Ans
}

var Redius:number=5

var Result: number =Area(Redius)
console.log("Area of circle is : "+Result)  