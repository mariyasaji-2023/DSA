// class Node {
//     constructor(data) {
//         this.data = data;
//         this.next = null;
//     }
// }
// class Linkedlist {
//     constructor() {
//         this.head = null
//         this.tail = null
//     }
//     addnode(data) {
//         const newnode = new Node(data)
//         if (this.head === null) {
//             this.head = newnode
//         } else {
//             this.tail.next = newnode
//         }
//         this.tail = newnode
//     }
//     print() {
//         if (this.head === null) {
//             console.log("empty");
//         }
//         let temp = this.head
//         const values = []
//         while (temp != null) {
//             values.push(temp.data)
//             temp = temp.next
//         }
//         console.log((values));
//     }


// deletenode(data){
//     let temp = this.head;
//     let prev = null
//     if (temp != null && temp.data === data) {
//        this. head = temp.next
//         return
//     }
//     while (temp != null && temp.data != data) {
//         prev = temp;
//         temp = temp.next;
//     } if (temp == null) {
//         return
//     } if (temp == tail) {
//         tail = prev;
//         tail.next = null;
//         return;
//     }
//     prev.next=temp.next
// }
// }

// const llist = new Linkedlist()
// llist.addnode(7)
// llist.addnode(6)
// llist.addnode(7)
// llist.addnode(0)
// llist.deletenode(7)
// llist.print()

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
            this.head = newnode;
        } else {
            this.tail.next = newnode
        }
        this.tail = newnode
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

    deletenode(data) {
        let temp = this.head
        let prev = null;
        
        if (temp != null && temp.data === data) {
            this.head = temp.next
            return
        }
        while (temp != null && temp.data != data) {
            prev = temp;
            temp = temp.next
        } if (temp == null) {
            return
        } if (temp == this.tail) {
            this.tail = prev
          tail.next = null
            return
        }
        prev.next = temp.next
    }
}

const llist = new Linkedlist()
llist.addnode(8)
llist.addnode(3)
llist.addnode(5)
llist.addnode(2)
llist.addnode(6)
llist.deletenode(2)
llist.print()