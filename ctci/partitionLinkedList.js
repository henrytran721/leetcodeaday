// Given the head of a linked list and a value x, partition it such that all nodes less than x come before nodes greater than or equal to x.

// You should preserve the original relative order of the nodes in each of the two partitions.

 
// list less than x 
// list greater than x 
// merge the lists together

var partition = function(head, x) {
    let current = head;
    let lessThan = new ListNode(null);
    // track the beginning
    let lessHead = lessThan;
    let greaterThan = new ListNode(null);
    // track the beginning
    let greaterHead = greaterThan;
    
    while(current !== null) {
        if(current.val >= x) {
            // add to list then travese
            greaterThan.next = new ListNode(current.val);
            greaterThan = greaterThan.next;
        } else {
            lessThan.next = new ListNode(current.val);
           lessThan = lessThan.next;
        }
        
        current = current.next;
    }
    
    // set the end of the list to null
    greaterThan.next = null;
    // set the next of our less than list to greaterThan list
    lessThan.next = greaterHead.next;
    
    return lessHead.next;
};

// Time: O(n)
// Space: O(n)