function convert(degree) {
    var temp;
    if (degree=='F') { //Convert Farenheit to celsius
        temp=(document.getElementById("far").value-32)*5/9;
        document.getElementById("cel").value = temp;
    } else { //Convert Celsius to farenheit
        temp=(document.getElementById("cel").value*5/9)+32;
        document.getElementById("far").value = temp;
    }
}