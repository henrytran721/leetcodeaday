// Given the head of a linked list, remove the nth node from the end of the list and return its head.

// Input: head = [1,2,3,4,5], n = 2
// Output: [1,2,3,5]

var removeNthFromEnd = function(head, n) {
    // 2 pass solution
    // find full length of linked list
    // subtract n from full length
    // travese again and remove node
    // Time: O(n)
    // Space: O(1)
    
    if(n === 1 && head.next === null) {
        head = null;
        return head;
    };
    
    let current = head;
    let len = 0;
    
    while(current !== null) {
        len++;
        current = current.next;
    }
    console.log(len);
    current = head;
    len = len - n;
    let count = 0;
    
    // if n is 2 remove first node [1,2] n = 2, we remove 1 and return [2]
    if(len === 0) return head.next;
    
    while(count !== (len - 1)) {
        count++;
        current = current.next;
    }
    
    current.next = current.next.next;
    
    return head;
};