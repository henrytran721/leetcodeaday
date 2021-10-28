// Given the root of a binary tree, invert the tree, and return its root.

var invertTree = function(root) {
    if(!root) return null;
    
    function swapNodes(node) {
        if(!node) return;
        // swap left and right
        let temp = node.left;
        node.left = node.right;
        node.right = temp;
        // if we have children, run swap on children and descend down the tree
        if(node.left) swapNodes(node.left);
        if(node.right) swapNodes(node.right);
    }
    
    swapNodes(root);
    return root;
};

//        4
//     2     7
//    1  3  6  9

//        4
//     7     2
//    3  1  9  6

// Time O(N)
// Space: O(N)