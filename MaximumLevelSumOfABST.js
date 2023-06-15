/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxLevelSum = function(root) {
    let level = 1;
    let rows = {}
    traverse(root, level, rows)
    let max = Math.max(...Object.values(rows))
    console.log(max)
    for (let key in rows){
        if (rows[key] == max) return parseInt(key)
    }
};

function traverse(node, level, rows){
    if (node == null) return
    if (rows.hasOwnProperty(level)){
        rows[level] += node.val
    } else {
        rows[level] = node.val
    }
    level++
    traverse(node.left, level, rows)
    traverse(node.right, level, rows)
}

// https://leetcode.com/problems/maximum-level-sum-of-a-binary-tree/description/