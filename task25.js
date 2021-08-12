function chkMrk(total,exam){
    if (exam=="final") {
        if (total>=90) {
            console.log("A+ in final");
        }
        else{
            return false;
        }
    }else{
        if (total>=89 && total<=100) {
            console.log("A+")
        }
        else{
            return false
        }
    }
}

console.log(chkMrk(92,"final"));
console.log(chkMrk(75," "));
console.log(chkMrk(85,"final"));
console.log(chkMrk(94," "));