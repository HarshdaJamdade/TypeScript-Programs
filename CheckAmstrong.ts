function CheckAmstrong(value:number)
{
    var a : number = 0
    var r:number = value
    var ans: number = 0
    while(r != 0)
    {
        a = r % 10;
        console.log(a)
        ans += a*a*a
        console.log(ans)
        r = r/10
        console.log(r)
    }
    console.log(ans)
    if(ans == value){
        return true
    }
    return false
}

console.log(CheckAmstrong(153))
