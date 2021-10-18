// Given the heads of two singly linked-lists headA and headB, return the node at which the two lists intersect. If the two linked lists have no intersection at all, return null.


var getIntersectionNode = function(headA, headB) {
    // extract the tail and size of each list
    let dataA = getTailAndSize(headA);
    let dataB = getTailAndSize(headB);
    
    // if the end of the list doesn't match, automatically return false
    if(dataA[1] !== dataB[1]) {
        return undefined;
    }
    
    // find shorter and longer lists
    let shorter = dataA[0] > dataB[0] ? headB : headA;
    let longer = dataA[0] > dataB[0] ? headA : headB;
    
    // set to same length
    let counter = 0;
    let diff = Math.abs(dataA[0] - dataB[0]);
    while(counter !== diff) {
        counter++;
        longer = longer.next;
    }
    
    // loop until we have the same reference
    while(shorter !== longer) {
        shorter = shorter.next;
        longer = longer.next;
    }
    
    return longer;
};


function getTailAndSize(head) {
    let len = 0;
    
    while(head.next !== null) {
        len++;
        head = head.next;
    }
    
    return [len, head];
}

// Time: O(n + m)