var sidea=5;
var sideb=6;
var sidec=7;
//Using Heron's formula : Find semi perimeter
var s=(sidea+sideb+sidec)/2;
//Use Heron's Formula
var area=Math.sqrt(s*(s-sidea)*(s-sideb)*(s-sidec));
console.log(area);