/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
 var findJudge = function(n, trust) {
    let trustmap = Array.from({length: n+1}, () => ({trusts: [], trustedby: []}))
    for (let i=1; i<n+1;i++){
        for (let j=0; j<trust.length;j++){
            if (trust[j].includes(i)){
                if(trust[j][0]==i){
                    trustmap[i]["trusts"].push(trust[j][1])
                } else {
                    trustmap[i]["trustedby"].push(trust[j][0])
                }
            }
        }
    }
    let judge = 0;
    for (let i = 1; i < trustmap.length; i++){
        if (trustmap[i].trusts.length == 0 && trustmap[i].trustedby.length == n-1){
            if (judge != 0){
                return -1
            } else judge = i;
        }
    }
    if (judge === 0){
        return -1
    } else return judge;

};
// https://leetcode.com/problems/find-the-town-judge
console.log(findJudge( 4, [[1,3],[1,4],[2,3],[2,4],[4,3]]))