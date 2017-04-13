const assert = require('assert')

function search(list, lookFor, min = 0, max = list.length-1) {
    if (min > max) {
        return -1
    }
    const middle = Math.floor((min + max) / 2);
console.log(list, lookFor, min, max, middle)
    if (list[middle] === lookFor) {
        return middle;
    }
    if (list[middle] < lookFor)
        return search(list, lookFor, middle+1, max)
    return search(list, lookFor, min, middle-1)
}

assert.equal(search([0, 1, 2, 3], 0), 0)
assert.equal(search([0, 1, 2, 3], 3), 3)

assert.equal(search([2, 4, 6, 8, 9, 11, 20, 32, 43], 43), 8)
assert.equal(search([2, 4, 6, 8, 9, 11, 20, 32, 43], 20), 6)
assert.equal(search([2, 4, 6, 8, 9, 11, 20, 32, 43], 11), 5)
assert.equal(search([2, 4, 6, 8, 9, 11, 20, 32, 43], 9), 4)
assert.equal(search([2, 4, 6, 8, 9, 11, 20, 32, 43], 8), 3)
assert.equal(search([2, 4, 6, 8, 9, 11, 20, 32, 43], 2), 0)