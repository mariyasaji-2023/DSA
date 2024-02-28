class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Linkedlist {
    constructor() {
        this.head = null;
        this.tail = null;
    }
    addnode(data) {
        const newnode = new Node(data)
        if (this.head == null) {
            this.head = newnode
        } else {
            this.tail.next = newnode
        }
        this.tail = newnode
    }
    deleteNode(data) {
        let temp = this.head;
        let prev = null;
        if (temp != null && temp.data === data) {
            temp = temp.next;
            return
        }
        while (temp != null && temp.data != data) {
            prev = temp;
            temp = temp.next;
        } if (temp == null) {
            return
        } if (temp == this.tail) {
            this.tail = temp;
            temp.next = null;
            return;
        }
        prev.next = temp.next

    }

    insertNode(nextTo, data) {
        const newnode = new Node(data);
        let temp = this.head;
        while (temp != null && temp.data != nextTo) {
            temp = temp.next
        } if (temp == null) {
            return
        } if (temp === this.tail) {
            this.tail.next = newnode;
            this.tail = newnode
            return
        }
        newnode.next = temp.next;
        temp.next = newnode

    }
    print() {
        if (this.head == null) {
            console.log("empty");
        }
        let temp = this.head;
        const values = []
        while (temp != null) {
            values.push(temp.data)
            temp = temp.next
        }
        console.log(values);
    }



}

const llist = new Linkedlist()
llist.addnode(8)
llist.addnode(3)
llist.addnode(5)
llist.addnode(2)
llist.addnode(6)
llist.deleteNode(2)
llist.insertNode(6,1)
llist.print()