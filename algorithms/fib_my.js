const assert = require('assert')

Array.prototype.head = function () {
    if (this.length > 0) {
        return this[0]
    }
    return null
}
Array.prototype.tail = function () {
    if (this.length > 0) {
        return this.slice(1)
    }
    return []
}

const primesUntil = ( max) => {
    const range = Array.apply(null, Array(max - 1)).map((k, idx) => 2 + idx)

    function eliminateMultiples(range, prime) {
        if (range.length === 0) {
            return []
        }
        if (range.head() % prime === 0) {
            return eliminateMultiples(range.tail(), prime)
        }
        return [range.head(), ...eliminateMultiples(range.tail(), prime)]
    }

    function findPrimesIn(range) {
        if (range.length === 0) {
            return []
        }

        return [range.head(), ...findPrimesIn(eliminateMultiples(range.tail(), range.head()))]
    }

    return findPrimesIn(range.slice())
}

let primes = primesUntil(30)

assert.deepEqual(primes, [2, 3, 5, 7, 11, 13, 17, 19, 23, 29])
