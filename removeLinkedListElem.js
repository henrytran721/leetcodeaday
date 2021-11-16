var removeElements = function(head, val) {
    let dummyHead = new ListNode();
    dummyHead.next = head;
    let current = dummyHead;
    if(!head) return null;
    // if first element move the head
    if(head.val === val) {
        head = head.next;
    }
    
    while(current !== null && current.next !== null) {
        if(current.next.val === val) {
            current.next = current.next.next;
        } else {
            current = current.next;
        }
        
    }
    
    return dummyHead.next;
};

// dummy 0 -> 1 -> 2 -> 6 -> 3 -> 4 -> 5 -> 6
//                 c -> 3 -> 4 -> 5 -> 6 
//                                c   -> null
// 1 -> 2 -> 3 -> 4 -> 5 -> null
// Time: O(n)
// Space: O(n)