class Demo1
{
    x : number
    str : String

    constructor(No1 : number, name : string)
    {
        console.log("Inside parameterised constructor ")
        this.x = No1
        this.str = name
    }

    fun()
    {
        console.log("value of x is : "+this.x)
        console.log("value of str is : "+this.str)
    }
}

var dobj = new Demo1(11,"Harshu")
dobj.fun()