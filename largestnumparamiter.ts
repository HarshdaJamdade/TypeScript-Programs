function Maximum(value1:number,value2:number,value3:number):void
{
    if(value1>=value2 && value1>=value3)
    {
        console.log("largest value is "+value1)
    }
    else if(value2>=value3 && value2>=value1)
    {
        console.log("largest value is "+value2)
    }
    else
    {
        console.log("largest value is "+value3)
    }

}

var No1:number=23
var No2:number=89
var No3:number=6

Maximum(No1,No2,No3)
