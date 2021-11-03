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
 var sumNumbers = function(root) {
    let valStr = "";
    let treeValues = [];
    getTreeVals(root, valStr, treeValues);
    return treeValues.reduce((a,b)=>(Number(a) + Number(b)))
};

let getTreeVals = (node, valStr, treeValues) =>{
    valStr += node.val;
    if (node.left === null && node.right == null){
        treeValues.push(valStr);
        return;
    }
    if (node.left != null){
        getTreeVals(node.left, valStr, treeValues)
    }
    if (node.right != null){
        getTreeVals(node.right, valStr, treeValues)
    }
    
}