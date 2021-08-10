function leapcheck(year) {
    if (year%400==0 || (year%100!=0 && year%4==0)) {
        console.log("Year is leap year");
    }
    else{
        console.log("Year is not leap year");
    }
}
leapcheck(2016);
leapcheck(1700);