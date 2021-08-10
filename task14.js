function rmCharacter(str1,pos) {
    var newString= str1.slice(0,pos-1)+str1.slice(pos,str1.length);
    //Creates 2 new strings on either side of the slice position & concantenates them
    console.log("Original string ' " +str1 +" '");
    console.log("New string ' " +newString +" '");  
}
console.log(rmCharacter("abhiram",4));