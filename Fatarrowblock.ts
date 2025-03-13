//lamda statement
var temp = (No1 : number,No2 : number)=>
{
    console.log("Inside lamda statment")
    var Result:number=0
    Result=No1+No2
    return Result
}

var ans:number=0
ans = temp(10,11)
console.log(ans)
console.log(typeof(temp))//function