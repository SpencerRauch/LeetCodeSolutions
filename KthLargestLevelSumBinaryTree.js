/**
 * https://leetcode.com/problems/kth-largest-sum-in-a-binary-tree/
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */


/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */

//intuition, generate level order, sum like levels, find max
var kthLargestLevelSum = function(root, k) {

    const queue = [[root,1]];
    const sumsByLevel = {};
    while(queue.length > 0){
        const [node, level] = queue.shift();
        if (sumsByLevel.hasOwnProperty(level)){
            sumsByLevel[level] += node.val
        } else {
            sumsByLevel[level] = node.val
        }
        if (node.left) queue.push([node.left, level+1])
        if (node.right) queue.push([node.right, level+1])
    }
    const sortedVals = Object.values(sumsByLevel).sort((a,b)=>(b-a))
    console.log(sortedVals)

    return sortedVals[k-1] ? sortedVals[k-1] : -1;

};

// intuition: with levels being passed, order isn't important, easier to traverse without a queue
// array more effiecient for storage
// don't bother to sort if k is bigger than length
var kthLargestLevelSum = function(root, k) {
    const sumsByLevel = [];
    function explore(node=root, level=0){
        if (!sumsByLevel[level]){
            sumsByLevel[level] = node.val
        } else {
            sumsByLevel[level] += node.val
        }
        if (node.left) explore(node.left, level + 1)
        if (node.right) explore(node.right, level + 1)
    }
    explore()
    if (!sumsByLevel[k-1]) return -1
    sumsByLevel.sort((a,b)=>(b-a))
    return sumsByLevel[k-1]
};


// this solution uses the queue but processes the amount in the queue at a time, giving level totals
// more memory efficient, a bit slower

var kthLargestLevelSum = function(root, k) {
    let sum = [];
    const queue = [root];
    while(queue.length > 0){
        const len = queue.length;
        let levelSum = 0;
        for(let i=0;i<len;i++){
            const node = queue.shift();
            levelSum += node.val;
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
        sum.push(levelSum);
    }
    sum = sum.sort((a,b)=>b-a);
    return sum[k-1] ?? -1;
};