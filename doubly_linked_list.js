// Node
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

// DoublyLinkedList
class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // push - insert at the end of the list
    push(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }

        this.length++;

        return this;
    }

    // pop - remove an element from the end of a DLL
    pop() {
        if (!this.head) return undefined;
        let temp = this.tail;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = temp.prev;
            this.tail.next = null;
            temp.prev = null;
        }

        this.length--;

        return temp;
    }

    // shift - remove an element from the beginning of a DLL
    shift() {
        if (!this.head) return undefined;
        let oldHead = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = oldHead.next;
            this.head.prev = null;
            oldHead.next = null;
        }
        this.length--;
        return oldHead;
    }

    // unshift - insert at the beginning of a DLL
    unshift(val) {
        let node = new Node(val);
        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            this.head.prev = node;
            node.next = this.head;
            this.head = node;
        }
        this.length++;
        return this;
    }

    // get - an optimized version, working with index to see if it's closer to the head or the tail
    get(index) {
        let foundNode, counter;
        if (index < 0 || index >= this.length) return null;
        const middle = Math.floor((0 + this.length)/2);
        if (index <= middle) {
            counter = 0;
            foundNode = this.head;
            
            while (counter !== index) {
                foundNode = foundNode.next;
                counter++;
            }
        } else {
            counter = this.length - 1;
            foundNode = this.tail;
            
            while (counter !== index) {
                foundNode = foundNode.prev;
                counter--;
            }
        }

        return foundNode;
    }

    // set - replace value of node at a specific index
    set(index, val) {
        let foundNode = this.get(index);
        if (foundNode) {
            foundNode.val = val;
            return true;
        }
        return false;
    }

    // insert - insert at a specific index
    insert(index, val) {
        if (index < 0 || index > this.length) return false;
        if (index === 0) return !!this.unshift(val);
        if (index === this.length) return !!this.push(val);
        
        let newNode = new Node(val);
        let prevNode = this.get(index-1);
        let temp = prevNode.next;
        
        prevNode.next = newNode, newNode.prev = prevNode;
        newNode.next = temp, temp.prev = newNode;
        this.length++;
        return true;
    }

    // remove - remove a node from a DLL given an index
    remove(index) {
        if (index < 0 || index >= this.length) return undefined;
        if (index === 0) return this.shift();
        if (index === this.length - 1) return this.pop();
        let foundNode = this.get(index);
        let prevNode = foundNode.prev;
        let nextNode = foundNode.next;
        prevNode.next = nextNode;
        nextNode.prev = prevNode;
        foundNode.next = null;
        foundNode.prev = null;
        this.length--;
        return foundNode;
        
    }
}


let list = new DoublyLinkedList();
list.push(2);
list.push(4);
list.push(6);
list.push(8);
list.push(10);


// 1 <--> 2 <--> 3 <--> 4 --> NULL