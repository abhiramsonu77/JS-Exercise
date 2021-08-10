function sum(num1,num2) {
    if (num1==num2) {
        var s=(num1+num2)*3;
        console.log("Sum = "+s);
    } else{
        var s=num1+num2;
        console.log("Sum = "+s);
    }
}
console.log(sum(3,3));
console.log(sum(4,8));