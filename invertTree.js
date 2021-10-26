var invertTree = function(root) {
    
    if (root == null) return root;
    if (root.left != null){
        invertTree(root.left)
    }
    if (root.right != null){
        invertTree(root.right);
    }
    
    let temp = root.left
    root.left = root.right
    root.right = temp;
    
    return root;
    
};