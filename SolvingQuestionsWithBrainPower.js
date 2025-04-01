/**
 * @param {number[][]} questions
 * @return {number}
 */
var mostPoints = function(questions) {
    const n = questions.length
    const dp = new Array(n).fill(0)

    const dfs = (i) => {
        if (i >= n){
            return 0
        }
        if (dp[i] > 0){
            return dp[i]
        }
        let points = questions[i][0]
        let skips = questions[i][1]
        dp[i] = Math.max(dfs(i+1), points + dfs(i+skips+1))
        return dp[i]
    }
    return dfs(0)

};