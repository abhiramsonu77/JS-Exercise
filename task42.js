function arrayMax(arr) {
    if (arr[0]>arr[arr.length-1]) {
        for(var i=0;i<arr.length;i++){
            arr[i]=arr[0];
        }
        console.log(arr);
    }else{
        for(var i=0;i<arr.length;i++){
            arr[i]=arr[arr.length-1];
        }
        console.log(arr);
    }
}
arrayMax([20,30,40]);
arrayMax([50,48,42,35]);