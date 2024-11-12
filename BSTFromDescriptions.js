/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[][]} descriptions
 * @return {TreeNode}
 */
var createBinaryTree = function(descriptions) {
    const parents = new Map();
    const nodes = new Set()
    let childSum = 0
    for (let desc of descriptions){
        nodes.add(desc[0]).add(desc[1])
        if (!parents.has(desc[0])){
            parents.set(desc[0], {})
        }
        childSum += desc[1]
        if (desc[2] == 1){
            parents.get(desc[0]).left = desc[1]
        } else{
            parents.get(desc[0]).right = desc[1]
        }
    }
    let nodeSum = 0
    for (let node of nodes){
        nodeSum += node
    }
    let rootVal = nodeSum-childSum
    return BSTBuilder(rootVal, parents)
};

function BSTBuilder(value, map){
    let newNode = new TreeNode(value)
    if (map.has(value)){
        if (map.get(value).hasOwnProperty('left')){
            newNode.left = BSTBuilder(map.get(value).left, map)
        }
        if (map.get(value).hasOwnProperty('right')){
            newNode.right = BSTBuilder(map.get(value).right, map)
        }
    }
    return newNode;
}