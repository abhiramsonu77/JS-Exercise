function mult(num) {
    if(num<0){ 
        console.log("Given number is negative");
    }else if (num%3==0||num%7==0) {
        console.log("Given number is a multile of 3 or multile of 7");
    }
}
console.log(mult(-4));
console.log(mult(21));
console.log(mult(12));