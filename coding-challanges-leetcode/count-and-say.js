var getNext = function (prev) {
    const numbersArray = prev.split('')
    let counter = 0
    let res = 0
    for (let i = 0; i < numbersArray.length; i++) {
        counter++
        // console.log("i: " + i + "  current: " + numbersArray[i] + "   next: " + numbersArray[i+1])
        if (i === numbersArray.length - 1 || numbersArray[i] != numbersArray[i + 1]) {
            res = res + counter + numbersArray[i]
            counter = 0
        }
    }
    return res
}

var countAndSay = function (n) {
    let prev = '1'
    if (n === 1) return '1'
    for (let i = 2; i <= n; i++) {
        prev = getNext(prev)
    }
    return prev
}

console.log(countAndSay(25))
