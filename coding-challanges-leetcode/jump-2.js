var jump = function (nums) {
    if (nums.length === 1) return 0
    let totalJumps = 0
    let maximumReachFromCurrentPosition = nums[0]
    let steps = nums[0]
    for (let currentPosition = 1; currentPosition < nums.length - 1; currentPosition++) {
        maximumReachFromCurrentPosition = Math.max(maximumReachFromCurrentPosition, currentPosition + nums[currentPosition])
        steps--
        if (steps === 0) {
            totalJumps++
            steps = maximumReachFromCurrentPosition - currentPosition
        }
    }
    return totalJumps + 1
}

console.log(jump([3, 4, 2, 1, 2, 3, 7, 1, 1, 1, 3]))
