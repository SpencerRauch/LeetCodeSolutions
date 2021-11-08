/**
 * @param {number} n
 * @return {number}
 */
 var numTrees = function(n) {
    let answers = Array(n+1).fill(0);
    answers[0] = 1;
    for ( let i = 1; i <=n; i++){
        for (j = 0; j < i; j++){
            answers[i] += answers[j] * answers[i-j-1];
        }
    }
    return answers[n]
};
//https://leetcode.com/problems/unique-binary-search-trees