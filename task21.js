function check100(x,y){
    if (x!=y) {
        x1=Math.abs(x-100);
        y1=Math.abs(y-100);
        if (x1<y1) {
            console.log(x+ " is near to 100");
        }
        else{
            console.log(y+" is near to 100");
        }
    }
}
check100(99,88);
check100(55,61);
check100(101,98);