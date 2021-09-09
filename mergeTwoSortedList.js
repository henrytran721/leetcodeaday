// Merge two sorted linked lists and return it as a sorted list. The list should be made by splicing together the nodes of the first two lists.

// Input: l1 = [1,2,4], l2 = [1,3,4]
// Output: [1,1,2,3,4,4]


// Input: l1 = [], l2 = []
// Output: []

// Input: l1 = [], l2 = [0]
// Output: [0]


var mergeTwoLists = function(l1, l2) {
    let copy = new ListNode(null);
    let head = copy;
    let list1 = l1;
    let list2 = l2;
    if(l1 == null && l2 == null) {
        return head.next;
    }

    while(list1 !== null && list2 !== null) {
        if(list1.val < list2.val) {
            copy.next = new ListNode(list1.val);
            list1 = list1.next;
        } else {
            copy.next = new ListNode(list2.val);
            list2 = list2.next;
        }
        
        copy = copy.next;
    }
    
    while(list1 !== null) {
        copy.next = new ListNode(list1.val);
        list1 = list1.next;
        copy = copy.next;
    }
    
    while(list2 !== null) {
        copy.next = new ListNode(list2.val);
        list2 = list2.next;
        copy = copy.next;
    }

    console.log(head.next);
    return head.next;
};

// Time: O(m + n)
// Space: O(n)