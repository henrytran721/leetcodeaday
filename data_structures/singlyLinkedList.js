// class Node 
// should have a val property
// should have a next property


// sll 
// head -> head.next -> head.next.next -> tail -> null
// head -> node -> -> node -> tail
// head
// tail
// length

// push O(1)
// pop O(n)
// shift O(1)
// unshift O(1)
// get O(n)
// set O(n)
// insert O(n)
// remove O(n)
// reverse O(n)

// Advantages of Linked List over Arrays
// Insertion at the beginning of the list is optimized over an array
// easily add or remove without reallocation or reorganization of te entire structure

// Disadvantages 
// Random access requires O(n) time to traverse the list

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

    // returns popped node
    pop() {
        // have two variables traversing the list
        // if current.next == null, remove this node and set other variable to node before this node
        // head -> head.next -> head.next.next -> tail -> null

        let current = this.head;
        let newTail = this.head;
        if(this.length === 0) {
            this.head = null;
            this.tail = null;
        } else {
            while(current.next !== null) {
                newTail = current;
                current = current.next;
            }
        newTail.next = null;
        this.tail = newTail;
        this.length--;
        }
        return current;
    }

    shift() {
        // remove from beginning and reset head to next node
        if(this.length === 0) {
            this.head = null;
            this.tail = null;
        } else {
            let oldHead = this.head;
            this.head = oldHead.next;
            oldHead.next = null;
            this.length--;
            return oldHead;
        }
    }

    // add node to the beginning
    unshift(val) {
        let newNode = new Node(val);
        if(!this.head) {
            this.head = null;
            this.tail = null;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    get(i) {
        if(i < 0 || i > this.length) return undefined;

        let current = this.head;
        let counter = 0;
        while(counter !== i) {
            counter++;
            current = current.next;
        }

        return current;
    }

    set(i, val) {
        let foundNode = this.get(i);
        if(foundNode) {
            foundNode.val = val;
            return true;
        } else {
            return false;
        }
    }

    insert(i, val) {
        if(i < 0 || i > this.length) {
            return undefined;
        }
        
        let newNode = new Node(val);
        if(i === 0) {
            return this.unshift(val);
        } else if(i === this.length) {
            return this.push(val);
        } else {
            let prevNode = this.get(i - 1);
            newNode.next = prevNode.next;
            prevNode.next = newNode;
            this.length++;
            return this;
        }
    }

    remove(i) {
        if(i < 0 || i > this.length - 1) {
            return undefined;
        }

        if(i === 0) {
            return this.shift();
        } else if(i === this.length - 1) {
            return this.pop();
        } else {
            let prevNode = this.get(i - 1);
            let removedNode = prevNode.next;
            prevNode.next = removedNode.next;
            this.length--;
            return removedNode;
        }
    }

    print() {
        let arr = [];
        let current = this.head;

        while(current !== null) {
            arr.push(current.val);
            current = current.next;
        }
        return arr;
    }

    reverse() {
        let current = this.head;
        let next;
        let prev = null;
        
        // swap head and tail
        this.head = this.tail;
        this.tail = current;


        for(let i = 0; i < this.length; i++) {
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }

        return this;
    }
}

let sll = new SLL();
sll.push(0);
sll.push(1);
sll.push(2);
sll.push(3);
console.log(sll.get(1));

