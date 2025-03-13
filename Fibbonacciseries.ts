function Fibonacci(No1:number):void
{
    var i=0,s=1,rem=0
    
    for(i=1;i<=No1;i++)
    {
        if(rem<No1)
        {    
             i=s
             s =rem
             rem=i+s
             console.log(rem)
        }
        
    }
}

var No : number=21

Fibonacci(No)
