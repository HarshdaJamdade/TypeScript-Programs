//Additin and substraction of 2 numbers

//charactristics -data(te karnyakarna karta kay lagnar ahe?)
//behaviour       -function(tula kay karaych ahe?)

class Arithmatic
{
    //charactristics
    No1:number
    No2:number

    constructor(X: number,Y: number)
    {
        this.No1=X
        this.No2=Y
    }

   //behaviours
    add():number
   {
    var Ans:number=0
    Ans=this.No1+this.No2
    return Ans
   }

   sub():number
   {
    var Ans:number=0
    Ans=this.No1-this.No2
    return Ans
   }
}

var obj1=new Arithmatic(11,10)

var Result:number=0

Result=obj1.add()
console.log("add is : "+Result)

Result=obj1.sub()
console.log("sub is : "+Result)


var obj2=new Arithmatic(51,42)

var Result:number=0

Result=obj2.add()
console.log("add is : "+Result)

Result=obj2.sub()
console.log("sub is : "+Result)