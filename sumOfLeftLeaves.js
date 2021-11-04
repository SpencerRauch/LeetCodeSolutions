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
 var sumOfLeftLeaves = function(root) {
    if (root == null) return 0;
    if (root.left == null) return sumOfLeftLeaves(root.right);
    if (root.left.left == null && root.left.right == null){
        return root.left.val + sumOfLeftLeaves(root.right);
    }
    return (sumOfLeftLeaves(root.left)+sumOfLeftLeaves(root.right));
};

// https://leetcode.com/problems/sum-of-left-leaves