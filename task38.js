function StrCut(strN) {
    if (strN.length<=3) {
        console.log(strN);
    }
    else{
        var strS=strN.substring(strN.length-3,strN.length)+strN.substring(0,strN.length-3);
        console.log(strS);
    }
}
StrCut("PYTHON");
StrCut("JavaScript");
StrCut("cat");