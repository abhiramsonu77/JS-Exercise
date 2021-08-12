function CapLet(str){
    str=str.split(" ")
    for (var i = 0; i < str.length; i++) {
        str[i]= str[i][0].toUpperCase()+str[i].substr(1);
    }
    str=str.join(" ")
    console.log(str);
}
CapLet("a new string");
CapLet("a Long string with JavaScript");