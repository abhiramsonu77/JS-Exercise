function strCat(str1,str2) {
    if (str1.length===str2.length) {
        Sstr=str1+str2;
        console.log(Sstr);
    }else if (str1.length<str2.length) {
        strS=str2.substr(0,str1.length);
        Sstr=str1+strS;
        console.log(Sstr);
    }else{
        strS=str1.substr(0,str2.length);
        Sstr=str2+strS;
        console.log(Sstr);
    }
}
strCat("python","Jquery");
strCat("JavaScript","Ruby");
strCat("php","perl");