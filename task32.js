function timeConv(num){
    var hr= Math.floor(num/60);
    var min=num%60;
    console.log("Time is "+hr +" Hours " +min +" Minutes");
}
timeConv(150);
timeConv(120);