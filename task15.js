function strFL(strN) {
    
    if (strN.length<=1) {
        console.log(strN);
    }else {
    //Slicing a first and last characters
    var midString= strN.substring(1,strN.length-1);
    //adding first and last character with change
    return strN.charAt(strN.length-1) + midString + strN.charAt(0);
    }
}
console.log(strFL("loop"));
console.log(strFL("cat"));