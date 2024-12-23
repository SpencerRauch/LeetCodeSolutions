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
var minimumOperations = function(root) {
    // console.log(root.val)

    //generate levels with BFS
    const levels = [];
    const queue = [[root,0]];
    while (queue.length > 0){
        const dq = queue.shift();
        const node = dq[0]
        const level = dq[1]
        if (!levels[level]){
            levels[level] = []
        }
        levels[level].push(node.val)
        if (node.left != null){
            queue.push([node.left, level+1])
        }
        if (node.right != null){
            queue.push([node.right, level+1])
        }


    }
    console.log(levels)

    let count = 0;
    let i = 1;
    while(i<levels.length){
        //pull out one level
        const unsorted = levels[i]
        //create sorted version
        const sorted = [...unsorted].sort((a,b)=> (a-b));
        
        //create map to locate values for swapping
        const map = new Map();
        for (let j = 0; j < unsorted.length;j++){
            map.set(unsorted[j], j)
        }
        //
        for (let j = 0; j < unsorted.length;j++){
            //if value is where it belongs, do nothing
            const value = unsorted[j]
            if(value == sorted[j]){
                continue;
            }
            //otherwise find the index of the value that should be here
            const swapIndex = map.get(sorted[j]);
            // and swap it into place
            let temp = unsorted[j]
            unsorted[j] = unsorted[swapIndex]
            unsorted[swapIndex] = temp

            //update map
            map.set(unsorted[swapIndex], swapIndex)
            map.set(unsorted[j], j)
            //increase swap count
            count++
        }
        console.log("unsort after", unsorted)
        i++
    }

    return count

};