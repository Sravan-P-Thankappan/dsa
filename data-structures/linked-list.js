
class Nod {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(value) {
        let newNode = new Nod(value);
        if (!this.head) {
            this.head = this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop() {
        if (!this.head) return undefined;
        let currentNode = this.head;
        let prevNode = this.head;
        while (currentNode.next) {
            prevNode = currentNode
            currentNode = currentNode.next;
        }

        this.tail = prevNode;
        this.tail.next = null;
        this.length--;
        if (this.length == 0) {
            this.head = this.tail = null;
        }
        return currentNode;
    }

    unshift(value) {
        let newNode = new Nod(value);
        if (!this.head) {
            this.head = this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    shift() {
        if (!this.head) return undefined;
        let currentNode = this.head;
        this.head = this.head.next;
        currentNode.next = null;
        this.length--;
        if (this.length == 0) {
            this.tail = null;
        }
        return currentNode;
    }
}

let l1 = new LinkedList();

