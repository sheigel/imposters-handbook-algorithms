const assert = require('assert');

const sort = (list) => {
    if(list.length<1){
        return list
    }
    const pivotIdx = list.length - 1;
    const left = [], right = [];

    for (var idx = 0; idx < list.length - 1; idx++) {
        var el = list[idx];
        if (el < list[pivotIdx]) {
            left.push(el)
        } else {
            right.push(el)
        }
    }
    return [...sort(left), list[pivotIdx],...sort(right)]
};

assert.deepEqual(sort([5, 6, 3, 8, 4, 1, 2]), [1, 2, 3, 4, 5, 6, 8]);