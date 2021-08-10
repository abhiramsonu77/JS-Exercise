function checkval(x,y) {
    if ((x<0 && y>0)||(y<0 &&x >0)) {
        console.log("One number is positive and other is negative");
    }else{
        console.log("Not true");
    }
}

console.log(checkval(1,3));
console.log(checkval(-25,25));
console.log(checkval(4,-7));