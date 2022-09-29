/**
 * 
 * @param {* 遍历项} item 
 * @param {* 遍历项索引} index 
 * @param {* 数组本身} arr 
 */

// 返回满足条件的第一个元素的值，否则返回undefined
Array.prototype._find = function (callback) {
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            return this[i]
        }
    }
    return undefined
}

let array = [1, 2, 3, 4, 5, 6, 7, 8]
let ans = array._find(function (item, index, arr) {
    return item == 9
})
console.log(ans);