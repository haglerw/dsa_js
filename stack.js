class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.val = null;
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    // push to insert nodes on Stack -- inserts from the beginning
    push(val) {
        const newNode = new Node(val);
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            newNode.next = this.first;
            this.first = newNode;
        }
        this.size++;
        return this.size;
    }

    pop() {
        if (!this.first) return null;
        let temp = this.first;
        if (this.first === this.last) {
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return temp.val;
    }
}


let stack = new Stack();


// 1 -> 2 -> 3 -> 4