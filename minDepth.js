// Given a binary tree, find its minimum depth.

// The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.

// Note: A leaf is a node with no children.


var minDepth = function(root) {
    if(!root) return 0;
    // use min variable to keep track of the minimum depth we've seen
    let min = Infinity;
    
    function traverse(node, depth) {
        if(node === null) {
            return;
        }
        // once we hit a leaf compare depth to our min and reassign value if necessary
        if(!node.left && !node.right) {
            min = depth < min ? depth : min;
            console.log(min);
        }
        //  traverse left and right and increment depth
        traverse(node.left, depth + 1);
        traverse(node.right, depth + 1);
    }
    traverse(root, 1);
    return min;
};

// Time: O(n) traverse all leaves via dfs
// Space: O(n) call stack via recursion