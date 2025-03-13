    class Arithmatic
    {
        No1:number
        No2:number

        constructor(X:number,Y:number)
        {
            console.log("inside construction")
            this.No1=X
            this.No2=Y
        }
        Addition()
        {
            console.log("Addition of numbers is = "+(this.No1+this.No2))
        }

        Subtraction()
        {
            console.log("Subtraction of numbers is = "+(this.No1-this.No2))
        }

        Multipication()
        {
            console.log("Multipication of numbers is = "+(this.No1*this.No2))
        }

        Division()
        {
            console.log("Division of numbers is = "+(this.No1/this.No2))
        }

    }

    var obj=new Arithmatic(100,10)

    obj.Addition()
    obj.Subtraction()
    obj.Multipication()
    obj.Division()
