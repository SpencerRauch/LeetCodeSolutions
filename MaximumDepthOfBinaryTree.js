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
 var maxDepth = function(root) {
    const traverse = (root, depth) => {
        if (root !== null){
            depth++
            let left = root.left !== null ? traverse(root.left, depth) : 0
            let right = root.right !== null ? traverse(root.right, depth) : 0
            
            return Math.max(left,right,depth)
        }
        else return depth
            
    }
    return traverse(root,0)
};

// https://leetcode.com/problems/maximum-depth-of-binary-tree
