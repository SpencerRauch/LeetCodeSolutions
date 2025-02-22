/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {string} traversal
 * @return {TreeNode}
 */
var recoverFromPreorder = function(traversal) {
    let split = traversal.split("-")
    let root = new TreeNode(+split[0], null, null)
    const nodes = [[root,0]]
    for( let i = 1, level = 1; i < split.length; i++){
        if (split[i] != ""){
            nodes.push([new TreeNode(+split[i], null, null), level])
            level = 1
        } else {
            level++
        }
    }
    for(let i = 1; i < nodes.length; i++){
        let node = nodes[i][0]
        let targLevel = nodes[i][1]
        for (let j = i-1; j >= 0; j--){
            let prevLevel = nodes[j][1]
            let prevNode = nodes[j][0]
            if(prevLevel == targLevel-1){
                if (prevNode.left == null){
                    prevNode.left = node
                } else {
                    prevNode.right = node
                }
                break
            }
        }
    }
    return root
};