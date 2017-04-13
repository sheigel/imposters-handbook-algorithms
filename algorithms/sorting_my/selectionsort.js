const assert = require('assert');

const sort = (array) => {
    if (array.length < 2) {
        return array;
    }
    let minIdx = 0;
    for (let idx = 0; idx < array.length; idx++) {
        if (array[idx] < array[minIdx]) {
            minIdx = idx;
        }
    }
    const temp = array[0];
    array[0] = array[minIdx];
    array[minIdx] = temp;
    return [array[0], ...sort(array.slice(1))];
};

assert.deepEqual(sort([5, 6, 3, 8, 4, 1, 2]), [1, 2, 3, 4, 5, 6, 8]);