//Lamda Statement
var temp = (No1 : number,No2 : number) =>
{
    console.log("Inside addition Lamda statement  : ")
    var Result : number =0;
    Result = No1 + No2;
    return Result;
}

var Ans = temp(11,10)
console.log("addition is " +Ans);

console.log(typeof(temp)); //function