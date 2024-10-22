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