// Write a function to delete a node in a singly-linked list. You will not be given access to the head of the list, instead you will be given access to the node to be deleted directly.

// It is guaranteed that the node to be deleted is not a tail node in the list.

// Input: head = [4,5,1,9], node = 5
// Output: [4,1,9]


// Assign value of current node to next node's value 
// reassign pointer of node to next.next of node


var deleteNode = function(node) {
    node.val = node.next.val;
    node.next = node.next.next;
};


// Time and Space: O(1)