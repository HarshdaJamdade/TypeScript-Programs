function ChkString(sentance: string, value:string){
    var splitSentance = sentance.split(' ')
    var i = 0;
    for(i=0; i < splitSentance.length; i++){
        if(splitSentance[i] == value){
            console.log("String contains " + value + " in it")
            break;
        }
    }
    if(i == splitSentance.length){
        console.log("String does not contains " + value + " in it")
    }
    
}

ChkString("Pune Kotharud Marvellous Infosystemss", "Marvellous"); 