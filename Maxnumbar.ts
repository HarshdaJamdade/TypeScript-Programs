function SecondMaxc(arr:number[]): number
{
    var Max : number=0
    var i : number=0
    var Result : number=0
    var SecondMax : number=0

    for(i=0;i<arr.length;i++)
    {
        if(arr[i]>=Result)
        {
            Max=arr[i]
            Result=Max
        }
    }
    return Max
}

var arr:number[]=[23,89,6,29,56,77,45,32]
console.log(SecondMaxc(arr))    