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
 * @param {number} distance
 * @return {number}
 */
var countPairs = function(root, distance) {
    let count = 0;

    const dfs = (root) =>{
        //no node, no leafs
        if(!root) return [];
        //found a leaf, a distance 1 from last node
        if( !root.left && !root.right) return [1];

        //find distances to leaf nodes on the left
        const leftDis = dfs(root.left);
        // find distances to leaf nodes on the right
        const rightDis = dfs(root.right);

        //iterate through left leaf node distances
        for(const l of leftDis){
            //iterate through right leaf node distances
            for(const r of rightDis){
                //if their sum is less than or equal the distance, increase count
                if(l + r <= distance) count++;
            }
        }


        const result = [];

        for(const l of leftDis){
            //if it's possible to reach this left leaf node from the other side under distance, keep track of it for comparison with right
            if(l+1 <= distance) result.push(l+1);
        }

        for(const r of rightDis){
            //inverse for the right
            if(r+1 <= distance) result.push(r+1);
        }

        return result;
    }

    dfs(root);
    return count;
};