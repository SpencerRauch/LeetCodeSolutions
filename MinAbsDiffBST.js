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
var getMinimumDifference = function(root) 
{
    const nums = []
    diff = inOrder(root, nums)

    return diff
};

function inOrder(node, nums, diff=Infinity)
{   
    if (node == null) return diff
    diff = inOrder(node.left, nums, diff)
    nums.push(node.val)
    if (nums.length > 1)
    {
        diff = Math.min(diff, Math.abs(nums[nums.length-1] - nums[nums.length-2]))
    }
    diff = inOrder(node.right, nums, diff)
    return diff
}