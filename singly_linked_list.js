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

    // push
    push(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.length++;
        
        return this;
    }

    // pop
    pop() {
        if (!this.head) return undefined;
        let current = this.head;
        let newTail = current;
        while (current.next) {
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current;
    }

    // shift - remove element from the beginning of a linked list
    shift() {
        if (!this.head) return undefined;
        let tempHead = this.head;
        this.head = tempHead.next;
        this.length--;
        if (this.length === 0) {
            this.tail = null;
        }
        return tempHead;
    }

    // unshift - insert an element from the beginning of a linked list
    unshift(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    // get - get an element at a specific index in the list
    get(index) {
        if (index < 0 || index >= this.length) return null;

        let counter = 0;
        let current = this.head;

        while(counter !== index) {
            current = current.next;
            counter++;
        }

        return current;
    }

    // set
    set(index, val) {
        let foundNode = this.get(index);
        if (!foundNode) return false;
        foundNode.val = val;
        return true;
    }

    // insert
    insert(index, val) {
        if (index < 0 || index > this.length) return false;
        if (index === this.length) return !!this.push(val);
        if (index === 0) return !!this.unshift(val);
        let prevNode = this.get(index-1);
        let temp = prevNode.next;
        let newNode = new Node(val);
        prevNode.next = newNode;
        newNode.next = temp;
        this.length++;
        return true;
    }

    // remove
    remove(index) {
        if(index < 0 || index >= this.length) return undefined;
        if(index === 0) return this.shift();
        if(index === this.length-1) return this.pop();
        const prevNode = this.get(index-1);
        const deletedNode = prevNode.next;
        prevNode.next = deletedNode.next;
        this.length--;
        return deletedNode;
    }

    // reverse a singly linked list
    reverse() {
        // swap head and tail
        let node = this.head;
        this.head = this.tail;
        this.tail = node;
        let next;
        let prev = null;

        for (let i = 0; i < this.length; i++) {
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
        return true;
    }
}

let list = new SinglyLinkedList();
list.push("Hello");
list.push("Hagler");
list.push("!");
list.push("Be");
list.push("A");
list.push("Great");
list.push("Developer");
list.push("!");


// 1 --> 2 --> 3 --> 4 --> 5