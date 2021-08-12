function changeLet(strN){
    var strC=strN.split("");
    for (var i=0;i<strC.length;i++){
        switch (strC[i]) {
            case 'z':
                strC[i]='a';
                break;
            case 'Z':
                strC[i]='A';
                break;    
            default:
                strC[i]=String.fromCharCode(1+strC[i].charCodeAt());
                break;
        }
    }
    console.log(strC.join(""));
}
changeLet("Python");
changeLet("ABCXYZ");