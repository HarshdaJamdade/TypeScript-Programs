//Additin and substraction of 2 numbers

//charactristics -data(te karnyakarna karta kay lagnar ahe?)
//behaviour       -function(tula kay karaych ahe?)

class Arithmatic
{
    //charactristics
    No1:number
    No2:number

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

var obj=new Arithmatic()
obj.No1=11
obj.No2=10

var Result:number=0

Result=obj.add()
console.log("add is : "+Result)

Result=obj.sub()
console.log("sub is : "+Result)