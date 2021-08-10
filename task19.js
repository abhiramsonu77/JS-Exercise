function strChk(str1) {
    if (str1.startsWith("Java")||str1.startsWith("java")) {
        console.log("True");
    } else{
        console.log("False");
    }
}
console.log(strChk("java is a prog. language"));
console.log(strChk("Python is also a language"));