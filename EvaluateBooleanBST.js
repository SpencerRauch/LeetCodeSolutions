// https://leetcode.com/problems/evaluate-boolean-binary-tree
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
 * @return {boolean}
 */
var evaluateTree = function(root) {
    if (root.val == 0 || root.val == 1) return root.val == 1
    if (root.val == 2){
        return evaluateTree(root.left) || evaluateTree(root.right)
    }
    return evaluateTree(root.left) && evaluateTree(root.right)

};