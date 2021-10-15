var isPalindrome = function(head) {
    let slow = head;
    let fast = head;
    // use runner technique to find middle of linked list
    while(fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    
    // reverse the list from middle to end and reset fast to the beginning
    slow = reverse(slow);
    fast = head;

    // compare the beginning and middle values
    
    while(slow !== null) {
        if(slow.val !== fast.val) {
            return false;
        }
        
        slow = slow.next;
        fast = fast.next;
    }
    
    return true;
};

function reverse(head) {
    let next = null, prev = null;
    let node = head;
    
    while(node) {
        next = node.next;
        node.next = prev;
        prev = node;
        node = next;
    }
    
    return prev;
}

// Time: O(n)
// Space: O(1)