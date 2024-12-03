/**
 * Definition for a binary tree node.
 * https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    if (root == p && p == q) return p
    function dfs(node, p, q){
        if (!node || node == p || node == q) return node
        let left = dfs(node.left, p, q)
        let right = dfs(node.right, p, q)
        if (left && right) return node
        return left || right
    }
    return dfs(root,p,q)
};