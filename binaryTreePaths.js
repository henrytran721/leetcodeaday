// Given the root of a binary tree, return all root-to-leaf paths in any order.

// A leaf is a node with no children.


var binaryTreePaths = function(root) {
    let result = [];
    function dfs(node, s) {
        // check for last element, if last add val to string and push to result arr and break out of recursion
        if(node.left === null && node.right === null) {
            s += node.val;
            result.push(s);
            return;
        }
        
        s += node.val + "->";
        // traverse the tree on either side, add value and arrow if not last element
        if(node.left) dfs(node.left, s);
        if(node.right) dfs(node.right, s);
    }
    
    dfs(root, '');
    return result;
};

// Time: O(n)
// Space: O(n)