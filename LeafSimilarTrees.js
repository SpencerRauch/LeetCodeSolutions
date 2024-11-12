/**
 * https://leetcode.com/problems/leaf-similar-trees/
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {
    var leaves = (root, arr=[]) => {
        if (!root.left && !root.right){
            arr.push(root.val)
            return arr
        }
        if (root.left){
            leaves(root.left,arr)
        }
        if (root.right){
            leaves(root.right,arr)
        }
        return arr
    }
    const leaves1 = leaves(root1)
    const leaves2 = leaves(root2)
    if (leaves1.length != leaves2.length) return false
    for (let i = 0; i < leaves1.length; i++){
        if (leaves1[i] != leaves2[i]) return false
    }
    return true
};