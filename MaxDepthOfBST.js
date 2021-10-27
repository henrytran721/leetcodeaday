// Given the root of a binary tree, return its maximum depth.

// A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.


var maxDepth = function(root) {
    return dfs(root, 0);
    
    function dfs(node, max) {
        if(!node) return max;
        // track the depth at every iteration by adding 1, once it reaches null return the max
        return Math.max(dfs(node.left, max + 1), dfs(node.right, max + 1));
    }
};


// Time: O(n) every node visited
// Space: O(n) call stack