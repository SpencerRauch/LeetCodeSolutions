/**
 *  Definition for a _Node.
 * function _Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 * https://leetcode.com/problems/n-ary-tree-postorder-traversal/
 */

/**
 * @param {_Node|null} root
 * @return {number[]}
 */
var postorder = function(root, values=[]) {
    if (!root) return values
    for (let child of root.children)
    {
        postorder(child,values)
    }
    values.push(root.val)
    return values
};