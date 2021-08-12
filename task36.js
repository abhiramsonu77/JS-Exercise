function hlfStr(strN) {
    if (strN.length%2==0) {
        var sStr=strN.substr(0,strN.length/2);
    }
    console.log(sStr);
}
hlfStr("JavaScript");
hlfStr("even");