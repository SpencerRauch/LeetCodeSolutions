//https://leetcode.com/problems/assign-cookies/


/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    let count = 0
    s.sort((a,b)=>a-b)
    g.sort((a,b)=>a-b)
    while (s.length > 0 && g.length > 0){
        if (s[s.length-1] < g[g.length-1]){
            g.pop()
        } else {
            count++
            g.pop()
            s.pop()
        }
    }
    return count
};