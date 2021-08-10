function diff(n) {
    if (n<=19) {
        return Math.abs(n-19);
    }
    else{
        return Math.abs(n-19)*3;
    }
}
console.log(diff(21));
console.log(diff(5));