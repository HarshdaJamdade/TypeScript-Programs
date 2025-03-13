function Summation(arr:number[]):number
{
    var i =0
    var Ans = 0

    for(i=0;i<arr.length;i++)
    {
        Ans=Ans+arr[i]
    }
    return Ans

}
var arr:number[]=[23,6,7,4,5,7]
console.log(Summation(arr))
