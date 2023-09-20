module.exports = function towelSort(matrix) {
    let ans = [];
    if (!matrix) return ans;
    for (let i = 0; i < matrix.length; i++) {
      ans = (i % 2 === 0) ? [...ans, ...matrix[i]] : [...ans, ...matrix[i].reverse()]
    }
    return ans;
}