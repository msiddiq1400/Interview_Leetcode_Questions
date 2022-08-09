var twoSum = function(nums, target) {
    let output = [];
    nums.forEach((curr, index, arr) => {
        for(let i=0; i < arr.length; i++) {
            if(curr + arr[i] === target && index !== i) {
                output.push(index)
            }
        }
    })
    return output;
};