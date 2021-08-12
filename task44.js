function Sortsum(arr) {
    var result=[0,0];
    for(var i=0;i<arr.length;i++){
        if(i%2==0){
            result[0]+=arr[i];
        }else{
            result[1]+=arr[i];
        }
    }
    console.log(result);
}
Sortsum([1,2,3,4,5,6]);