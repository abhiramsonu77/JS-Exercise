function check20(x,y,z){
    if ((x>=20 && (x<y||x<z))||
        (y>=20 && (y<x||y<z))||
        (z>=20 && (z<x||z<y))){
        console.log("Number is greater than or equal to 20 and less than one of the others");
    }else{
        console.log("Doesn't satisfy condition");
    }
}
check20(19,23,45);
check20(5,18,32);
check20(8,23,23);
