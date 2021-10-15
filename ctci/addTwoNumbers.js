// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.

var addTwoNumbers = function(l1, l2) {
    let i = l1;
    let j = l2;
    let carry = 0;
    // create a new linked list and have a variable pointing to the head
    let dummyHead = new ListNode(null);
    let head = dummyHead;
    
    // traverse through each list and add numbers
    // if one list is longer than the other, add null + # (legal statement)
    // add numbers and extract carry to add to next iteration
    while(i !== null || j !== null) {
        let x = (i !== null) ? i.val : null;
        let y = (j !== null) ? j.val : null;
        // find total sum
        let sum = carry + x + y;
        carry = Math.floor(sum / 10);
        let value = sum % 10;
        dummyHead.next = new ListNode(value);
        i = (i !== null) ? i.next : null;
        j = (j !== null) ? j.next : null;
        dummyHead = dummyHead.next;
    }
    
    // add carry if it still exists
    carry > 0 ? dummyHead.next = new ListNode(carry) : null;
    return head.next;
};

// Time: O(n + m)
// Space: O(n + m)