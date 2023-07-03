/**
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
 * @return {number[]}
 */

 var getAllElements = function(root1, root2) {
    let array = []
    const traverseAndPush = function(root, array) {
        if (root == null) return;
        array.push(root.val)
        if (root.left != null){
            traverseAndPush(root.left, array)
        }
        if (root.right != null){
            traverseAndPush(root.right, array)
        }
        
    }
    traverseAndPush(root1, array)
    traverseAndPush(root2, array)
    return array.sort((a,b) => (a-b))

    
};

//https://leetcode.com/problems/all-elements-in-two-binary-search-trees/