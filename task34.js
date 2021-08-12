function findVowel(strN) {
    var vowel=/[aeiouAEIOU]/gi;
    var strF=strN.match(vowel);
    console.log(strF.length);
}
findVowel("this is now a thing");
findVowel("There are 6 here");