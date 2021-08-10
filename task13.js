function strAdd(str1) {
    if (str1.startsWith("Py")) {
        console.log(str1);
    } else{
        str1="Py"+str1;
        console.log(str1);
    }
}
console.log(strAdd("Python"));
console.log(strAdd("JavaScript"));