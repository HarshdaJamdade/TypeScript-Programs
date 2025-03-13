class Demo
{
    No : number
    str : string

     constructor(x:number,name:string)
    {
       console.log("Inside parameterised constructor of demo class")   
       this.No=x
       this.str=name
    }

    fun(): void
    {
        console.log("Inside Fun of Demo class")
        console.log("value of No is : "+this.No)
        console.log("value of str is : "+this.str)
    }
}

var obj1=new Demo(11,"PPA")
var obj2=new Demo(10,"LB")

obj1.fun()
obj2.fun()