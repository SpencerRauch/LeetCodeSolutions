// https://leetcode.com/problems/longest-zigzag-path-in-a-binary-tree/


// works but too slow, TLE
var longestZigZag = function(root) {
    var count = 0;
    function dfs(node){
        count = [findMaxZigZag(node, true,0),findMaxZigZag(node, false,0),count].reduce((a, b) => Math.max(a, b), -Infinity)
        if (node.left) dfs(node.left)
        if (node.right) dfs(node.right)
    }

    function findMaxZigZag(node, left,count){
        if(left && node.left){
            count++
            count = findMaxZigZag(node.left, false, count)
        }
        if (!left && node.right){
            count++
            count = findMaxZigZag(node.right, true, count)
        }
        return count
    }
    dfs(root)
    return count
};

//works in time
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
var longestZigZag = function(root) {
    let longest = 0;
    function dfs(node, left,count){
        if (!node) return;
        longest = Math.max(longest, count)
        if(left){
            dfs(node.left, false, count+1) //direction we are going, keep counting
            dfs(node.right, true, 1) // not direction we are going, restart count
        } else {
            dfs(node.left, false, 1)
            dfs(node.right, true, count+1)
        }
    }
    // dfs(root, false, 0)
    // dfs(root, true, 0)
    
    dfs(root.left, false, 1)
    dfs(root.right, true, 1)
    return longest
};