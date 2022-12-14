let arr = [1, 2, [3, 4, 5, [6, 7], 8], 9, 10, [11, [12, 13]]]

const flatten = (arr) => {
    let res = []
    arr.forEach((item, i) => {
        if (Array.isArray(item)) {
            res = res.concat(flatten(item))
        } else {
            res.push(item)
        }
    })
    return res
}

console.log(flatten(arr));