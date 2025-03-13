function add(No1:number,No2:number):number
{
    var Ans:number=0
    Ans=No1+No2
    return Ans
}

function sub(No1:number,No2:number):number
{
    var Ans:number=0
    Ans=No1-No2
    return Ans
}

var value1:number=11
var value2:number=10
var Result:number=0

Result=add(value1,value2)
console.log("add is :"+Result)

Result=sub(value1,value2)
console.log("sub is :"+Result)