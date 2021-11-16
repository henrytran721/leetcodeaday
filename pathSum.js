// Given the root of a binary tree and an integer targetSum, return true if the tree has a root-to-leaf path such that adding up all the values along the path equals targetSum.

// A leaf is a node with no children.

var hasPathSum = function(root, targetSum) {
    if(!root) return false;
    
    function traverse(node, targetSum, currSum) {
        // if we hit a leaf break out of recursion
        if(!node) {
            return false;
        }
        currSum += node.val;
        console.log(currSum);
        if(!node.left && !node.right) {
            return currSum === targetSum;
        }
        return traverse(node.left, targetSum, currSum) || traverse(node.right, targetSum, currSum);
    }
    
    return traverse(root, targetSum, 0);
};


// Time: O(n)
// Space: O(n)