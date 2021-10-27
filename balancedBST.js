// Given a binary tree, determine if it is height-balanced.

// For this problem, a height-balanced binary tree is defined as:

// a binary tree in which the left and right subtrees of every node differ in height by no more than 1.


var isBalanced = function(root) {
    if(!root) return true;
    
    // perform dfs on root.left and root.right
    function dfs(node, height) {
        if(!node) return height;
        return Math.max(dfs(node.left, height + 1), dfs(node.right, height + 1));
    }
    
    let left = dfs(root.left, 0);
    let right = dfs(root.right, 0);
    console.log(left, right);
    
    return Math.abs(left - right) > 1 ? false : true;
};


// Time: O(n)
// Space: O(n)