/**
 *
 * @param {Number[]} array array on which swapping to be performed
 * @param {number} i Position
 * @param {number} j Position
 */
function swap(array, i, j) {
  [array[i], array[j]] = [array[j], array[i]];
}

module.exports = swap;
