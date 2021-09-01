// node 
// properties
// - next, value


// singly linked list
// properties
// head, tail, length

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        let newNode= new Node(val);
        if(!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.length++;
        return this;
    }

    pop() {
        if(!this.head) {
            return null;
        } else if(this.length === 1) {
            let lastNode = this.tail;
            this.tail = null;
            this.head = null;
            return lastNode;
        } else {
            let current = this.head;
            let newTail = current;
            while(current.next !== null) {
                newTail = current;
                current = current.next;
            }
            this.tail = newTail;
            this.tail.next = null;
            this.length--;

            return current;
        }
    }

    // remove from beginning
    shift() {
        if(!this.head) return undefined;
        let oldHead = this.head;
        this.head = this.head.next;
        this.length--;
        if(!this.length) {
            this.head = null;
            this.tail = null;
        }
        return oldHead;
    }

    unshift(val) {
        let newNode = new Node(val);
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    get(i) {
        let counter = 0;
        let current = this.head;
        // edge case
        if(i < 0 || i > this.length) return null;
        while(i !== counter) {
            counter++;
            current = current.next;
        }
        
        return current;
    }

    set(i, val) {
        var foundNode = this.get(i);
        if(foundNode) {
            foundNode.val = val;
        } else {
            return null;
        }
    }

    insert(i, val) {
        if(i < 0 || i > this.length) return false;
        let newNode = new Node(val);

        if(i === 0) {
            return this.unshift(val);
        } else if(i === this.length) {
            return this.push(val);
        } else {
            var prevNode = this.get(i - 1);
            var nextNode = prevNode.next;
            prevNode.next = newNode;
            newNode.next = nextNode;
            this.length++;
            return true;
        }
    }

    remove(i) {
        if(i < 0 || i > this.length - 1) return undefined;

        if(i === 0) {
            return this.shift();
        } else if(i === this.length - 1) {
            return this.pop();
        } else {
            var prevNode = this.get(i - 1);
            var removedNode = prevNode.next;
            var nextNode = removedNode.next;

            prevNode.next = nextNode;
            removedNode.next = null;
            this.length--;
            return removedNode;
        }
    }
}

let sll = new SinglyLinkedList();
sll.push(0);
sll.push(1);
sll.push(2);
sll.push(3);
console.log(sll.remove(2));
