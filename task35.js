function strComa(n1,n2) {
    var div= (n1/n2).toString();
    var Nstr=div.split("");
    if (div>=10000) {
        for (var i = div.length-3; i > 0; i=i-3) {
            Nstr.splice(i,0,",")
        }
        var strP=Nstr.join("");
        console.log(strP);
    }
    
}

strComa(1500000,3);
strComa(64520,2);