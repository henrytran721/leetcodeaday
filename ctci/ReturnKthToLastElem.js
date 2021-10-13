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

        while(current !== null) {
            result.push(current.val);
            current = current.next;
        }

        return result;
    }
}

function returnKthElement(sll, k) {
    let lastElement = sll.length - k;
    let current = sll.head;
    let counter = 0;

    while(counter !== lastElement) {
        current = current.next;
        counter++;
    }

    return current;
}

let sll = new SLL();
sll.push(0);
sll.push(1);
sll.push(2);
sll.push(3);
sll.push(4);
sll.push(5);
sll.push(6);
console.log(returnKthElement(sll, 4));

// Time: O(n)
// Space: O(1)