function strSrch(strS) {
    var ind=strS.search("Script");
    if(ind==4){
        var strN=strS.slice(0,4)+strS.slice(10);
        console.log(strN);
    }
    else{
        console.log(strS);
    }
}
console.log(strSrch("JavaScript is a language"));
console.log(strSrch("This is a test string"))
console.log(strSrch("This is JavaScript"));
