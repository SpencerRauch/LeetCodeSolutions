/**
 * https://leetcode.com/problems/asteroid-collision/
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
    const ans = [];
    for (let i = 0; i < asteroids.length; i++){
        const last = ans[ans.length-1]
        const cur = asteroids[i]
        if (ans.length == 0 || last < 0 || cur > 0){
            ans.push(cur)
        } else if (-cur == last){
            ans.pop()
        } else if (-cur > last){
            ans.pop()

            i--
        }
    }
    return ans
};