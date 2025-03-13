function Factor(value:number):void
{
    var i:number=0
    
    for(i=1;i<value;i++)
    {
        if(value%i==0)
        {
            console.log("factor is : "+i)
        }
    }
}

var No:number=20
Factor(No)