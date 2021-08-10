function endString(strN) {
    if (strN.length<=3) {
    console.log(strN);
    }
    else{
    var endStr= strN.slice(-3);
    return endStr + strN + endStr;
    }
}
console.log(endString("pool"));
console.log(endString("Ironman"));
console.log(endString("cat"));