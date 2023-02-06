var runningSum = function (nums) {
    let out = []
    for (let i = 1; i <= nums.length; i++) {
        out.push(nums.slice(0, i).reduce((acc, element) => acc + element, 0))
    }
    return out
}

console.log(runningSum([1, 2, 3, 4]))
