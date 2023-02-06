var canConstruct = function (ransomNote, magazine) {
    let mapChar = new Map()
    var strArray = magazine.split('')
    for (let i = 0; i < strArray.length; i++) {
        if (mapChar.has(strArray[i])) {
            mapChar.set(strArray[i], mapChar.get(strArray[i]) + 1)
        } else {
            mapChar.set(strArray[i], 1)
        }
    }

    var strArray2 = ransomNote.split('')
    for (let i = 0; i < strArray2.length; i++) {
        if (mapChar.has(strArray2[i])) {
            mapChar.set(strArray2[i], mapChar.get(strArray2[i]) - 1)
            if (mapChar.get(strArray2[i]) < 0) {
                return false
            }
        } else {
            return false
        }
    }
    return true
}

console.log(canConstruct('aa', 'aab'))
