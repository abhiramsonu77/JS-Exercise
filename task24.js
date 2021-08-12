function StrCut(strN) {
    if (strN.length<=3) {
        console.log(strN.toUpperCase());
    }
    else{
        var strS=strN.substring(0,3).toLowerCase()+strN.substring(3,strN.length);
        console.log(strS);
    }
}
StrCut("PYTHON");
StrCut("JavaScript");
StrCut("cat");