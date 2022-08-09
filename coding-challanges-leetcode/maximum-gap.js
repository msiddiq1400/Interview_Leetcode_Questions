var maximumGap = function(nums) {
    let out = 0;
    if(nums.length < 2) {
        return 0;
    }
    let arr = nums.sort((a,b) => a - b);
    for (let i=0; i<arr.length; i++) {
        let diff = arr[i+1] - arr[i];
        if(diff > out) {
            out = diff
        }
    }
    return out;
};