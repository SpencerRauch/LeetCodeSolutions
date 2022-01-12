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
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function(root, val) {
    if (root == null){
        return new TreeNode(val) // If tree is empty, make a new node and return it
    }
    
    if (val > root.val){  // if value is larger than root value, go right
        if (root.right == null){ // nothing to the right? 
            root.right = new TreeNode(val)  // make our new node here         
        } else{ // otherwise, traverse right and make recursive call
            insertIntoBST(root.right, val)
        }
    }else{ // if value is less than root value, go left
        if (root.left == null){
            root.left = new TreeNode(val)           
        } else{
            insertIntoBST(root.left, val)
        }
        
    }
    return root;
    
};

//https://leetcode.com/problems/insert-into-a-binary-search-tree/