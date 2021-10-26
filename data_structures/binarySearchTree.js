class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}


class BST {
    constructor() {
        this.root = null;
    }

    // insert, find, bfs, dfsPre, dfsIn, dfsPost

    insert(val) {
        var newNode = new Node(val);
        if(!this.root) {
            this.root = newNode;
        } else {
            let current = this.root;
            while(true) {
             if(val < current.val) {
                if(current.left === null) {
                    current.left = newNode;
                    return this;
                } else {
                    current = current.left;
                }
            } else {
                if(current.right === null) { 
                    current.right = newNode;
                    return this;
                } else {
                    current = current.right;
                }
            }
            }
        }
    }

    find(val) {
        if(!this.root) return false;

        let current = this.root;
        while(current) {
            if(current.val === val) {
                return current;
            } else if(current.val > val) {
                current = current.left;
            } else {
                current = current.right;
            }
        }
    }

    bfs() {
        // use a queue to visit each node horizontally
        let queue = [], result = [];
        queue.push(this.root);
        console.log(queue);
        while(queue.length) {
            let node = queue.shift();
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
            result.push(node.val);
        }

        return result;
    }

    // [10, 5, 3, 6, 12, 11, 25]
    // visits head, left, right
    dfsPreOrder() {
        var result = [];
        function traverse(node) {
            result.push(node.val);
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
        }
        
        traverse(this.root);
        return result;
    }
    
    // [3, 5, 6, 10, 11, 12, 25]
    // visits left middle right
    dfsInOrder() {
        var result = [];
        function traverse(node) {
            if(node.left) traverse(node.left);
            result.push(node.val);
            if(node.right) traverse(node.right);
        }

        traverse(this.root);
        return result;
    }

    // [3, 6, 5, 11, 25, 12, 10]
    // visits left, right, middle
    dfsPostOrder() {
        var result = [];
        function traverse(node) {
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
            result.push(node.val);
        }

        traverse(this.root);
        return result;
    }
}

let bst = new BST();
bst.insert(10);
bst.insert(5);
bst.insert(12);
bst.insert(25);
bst.insert(6);
bst.insert(3);
bst.insert(11);
console.log(bst.dfsPostOrder());


// insert: Time - O(log n) Space: O(n)
// search: Time: O(log n) Space: O(1)
// bfs: Time: O(n) Space: O(n)
// dfs: Time: O(n) Space: O(n)
