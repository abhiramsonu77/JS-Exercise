function Ldigit(num1,num2,num3) {
    if (num1%10==num2%10 && num2%10==num3%10) { //Transitive property,if a=b&b=c then a=c
        console.log("Last numbers are same");
    }else{
        console.log("Numbers are not same");
    }
}
Ldigit(23,33,123);
Ldigit(2,52,202);
Ldigit(28,33,12);