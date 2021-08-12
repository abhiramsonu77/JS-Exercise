function checkStr(strS,strG) {
    if (strS.charAt(1)==strG && strS.charAt(3)==strG) {
        console.log("Given character is present at 2nd and 4th position");
    }else{
        console.log("This character is not at specified position");
    }   
}
checkStr("Javascript",'a');
checkStr("python",'y');