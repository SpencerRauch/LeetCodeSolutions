/**
 * https://leetcode.com/problems/binary-tree-right-side-view
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function(root) {
    if (!root) return []
    const queue = [root]
    const nums = []
    while (queue.length > 0){
        const times = queue.length;
        for(let i = 0; i < times; i++){
            let cur = queue.shift()
            if (cur.left){
                queue.push(cur.left)
            }
            if (cur.right){
                queue.push(cur.right)
            }
            if (i == times-1){
                nums.push(cur.val)
            }
        }
    }
    return nums
};