var buildTree = function(preorder, inorder) {
    // first node of preorder is the root
    // left of root in inorder are left nodes
    // right of root in inorder are right nodes
    let map = new Map();
    let preorderIndex = 0;
    
    for(let i = 0; i < inorder.length; i++) {
        map.set(inorder[i], i);
    }
    
    // roots are preorder numbers so we increment as we build the tree
    return arrayToTree(preorder, 0, preorder.length - 1);
    
    function arrayToTree(preorder, left, right) {
        if(left > right) return null;
        let rootVal = preorder[preorderIndex++];
        let root = new TreeNode(rootVal);
        root.left = arrayToTree(preorder, left, map.get(rootVal) - 1);
        root.right = arrayToTree(preorder, map.get(rootVal) + 1, right);
        return root;
    }
};
