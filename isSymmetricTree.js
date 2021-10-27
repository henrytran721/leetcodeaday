// Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).

var isSymmetric = function(root) {
    if(!root) return true;
    // root will be same so compare next two child nodes
    return isSame(root.left, root.right);
    
    function isSame(p, q) {
    // if we hit the end of the tree return true
    if(p === null && q === null){
        return true;
    }
    // if values arent the same or one side is null, return false
    if(!p && q || !q && p || p.val !== q.val) { 
        return false;
    }
    // recurse down the tree
    return isSame(p.left, q.right) && isSame(p.right, q.left);
    }
};

// Time: O(n) visit every node in the tree
// Space: O(n) call stack