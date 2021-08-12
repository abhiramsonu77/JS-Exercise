function checknum(arr) {
    if (arr.length==2) {
        for(var i=0;i<arr.length;i++){
            if (arr[i]==1||arr[i]==3) {
                console.log("Contains number 1 or 3");
            }
        }
    }else{
        console.log("Invalid array");
    }
}
checknum([1,5]);
checknum([54,3]);