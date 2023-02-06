var kthSmallest = function (matrix, k) {
    let out = []
    counter = 0
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++, counter++) {
            out.push(matrix[i][j])
        }
    }
    out.sort((a, b) => a - b)
    return out[k - 1]
}

console.log(
    kthSmallest(
        [
            [1, 5, 9],
            [10, 11, 13],
            [12, 13, 15],
        ],
        8
    )
)
