class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}


class SLL {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        let newNode = new Node(val);
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    print() {
        let result = [];
        let current = this.head;

        while(current.next !== null) {
            result.push(current.val);
            current = current.next;
        }

        return result;
    }
}

function removeDups(sll) {
    let current = sll.head;
    let prev = null;
    let map = {};
    while(current.next !== null) {
        console.log(prev);
        if(current.val in map) {
            prev.next = current.next;
            sll.length--;
        } else {
            map[current.val] = true;
            prev = current;
        }
        current = current.next;
    }
    return sll;
}


let sll = new SLL();
sll.push(1);
sll.push(2);
sll.push(1);
sll.push(3);
sll.push(2);
sll.push(1);
sll.push(3);
console.log(removeDups(sll));

// Time: O(n)
// Space: O(n)