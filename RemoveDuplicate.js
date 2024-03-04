class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class LinkedList {
    constructor() {
        this.head = null
        this.tail = null
    }

    addnode(data) {
        const newnode = new Node(data)
        if (this.head === null) {
            this.head = newnode
        } else {
            this.tail.next = newnode
        }
        this.tail = newnode
    }

    removeDuplicates() {
        let current = this.head
        while (current != null) {
            let nextnode = current.next
            while (nextnode != null && nextnode.data == current.data){
                nextnode = nextnode.next
            }
            current.next = nextnode
            if(nextnode == this.tail && nextnode.data === current.data){
                this.tail = current
                this . tail.next = null
            }
            current = nextnode
    }
    }

    print() {
        let temp = this.head;
        const values = []

        while (temp != null) {
            values.push(temp.data)
            temp = temp.next
        }
        console.log(values);
    }
}

const newlist = new LinkedList()
newlist.addnode(5)
newlist.addnode(3)
newlist.addnode(3)
newlist.addnode(8)
newlist.addnode(2)
newlist.removeDuplicates()
newlist.print()