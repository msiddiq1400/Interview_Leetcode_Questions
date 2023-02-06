var numberOfSteps = function (num) {
    let steps = 0
    if (num === 0) {
        return steps
    }

    while (num > 1) {
        if (num % 2 === 0) {
            num /= 2
        } else {
            num -= 1
        }
        steps += 1
    }
    return steps + 1
}

console.log(numberOfSteps(8)) // 8 4 2 1 0
