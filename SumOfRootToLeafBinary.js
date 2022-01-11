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

 var sumRootToLeaf = function(root) {
    let binaryStrings = [];
    let traverse = (node, tempString) => {
        if (node === null) {
            return;
        }
        let binaryString = tempString + node.val;
        // create binary string on way down;
        if (node.left === null && node.right === null) {
            // no children, add to binaryStrings
            binaryStrings.push(binaryString);
        }
        
        traverse(node.left, binaryString);
        traverse(node.right, binaryString);
    }
    
    traverse(root, '');
    
    let sum = 0;
    for (let binaryString of binaryStrings){
        sum += parseInt(binaryString, 2)
    }
    return sum;
};