function Rdigit(x,y,z) {
    if (x%10==y%10 || y%10==z%10) { //Transitive property,if a=b&b=c then a=c
        console.log("Last numbers are same");
    }else{
        console.log("Numbers are not same");
    }
}
Rdigit(25,36,26);
Rdigit(30,25,84);
Rdigit(50,20,330);