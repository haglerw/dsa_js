class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        // first, last, size
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    // enqueue - add to queue. we are going to be implementing push in a linked list
    enqueue(value) {
        let newNode = new Node(value);
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        return ++this.size;
    }

    // dequeue - remove from queue. we are going to be implementing shift in a linked list
    dequeue() {
        if (!this.first) return null;
        let temp = this.first;
        if (this.first === this.last) {
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return temp;
    }
}