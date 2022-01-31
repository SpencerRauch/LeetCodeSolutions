/**
 * @param {number[][]} accounts
 * @return {number}
 */
 var maximumWealth = function(accounts) {
    let max = 0;
    for (let account of accounts){
        max = Math.max(account.reduce((a,b) => (a+b)), max)
    }
    return max
    
};

//https://leetcode.com/problems/richest-customer-wealth