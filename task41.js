function check1(arr) {
    if (arr.length>=1) {
        if (arr[0]==1 || arr[arr.length-1]==1) {
            console.log("First or last element is 1");
        }
        else{
            console.log("Doesn't have 1 in first or last place");
        }
    }
}
check1([4,5,2,1]);
check1([1,4,5,21,1]);
check1([5,9,21,57]);