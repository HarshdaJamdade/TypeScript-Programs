var Str = " Hello "
var cnt = 0

function OvelsInString(value : string)
{
    for(let i=0;i<value.length;i++)
    {
        if(value[i]==="a" ||  value[i]==="o" || value[i]==="e" || value[i]==="i" || value[i]==="u")
        {
            cnt++;
        }
    }
    return cnt
    
}

 console.log(OvelsInString(Str))