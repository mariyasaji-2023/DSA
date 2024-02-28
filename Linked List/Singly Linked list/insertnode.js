class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class Linkedlist {
    constructor() {
        this.head = null
        this.tail = null
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
    print() {

        let temp = this.head
        let values = []
        while (temp != null) {
            values.push(temp.data)
            temp = temp.next
        }
        console.log(values);
    }
    
    insertAfter(nextTo, data) {
        const newNode = new Node(data)
        let temp = this.head
        while(temp != null && temp.data != nextTo) {
            temp = temp.next
        } if (temp == null) {
            return
        } if (this.tail == temp) {
            this.tail.next = newNode;
            this.tail = newNode
            return
        }
        newNode.next = temp.next
        temp.next = newNode
    }
    deleteone(data){
        let temp = this.head
        let prev = null;

        if(temp != null && temp.data == data){
            this.head = temp.next
            return
        } 
        while(temp != null && temp.data != data){
            prev = temp
            temp = temp.next
        }if(temp == null){
            return
        }if(temp === this.tail){
            this.tail = prev  
            this.tail.next = null
            return     
        }
        prev.next = temp.next
    }
}

  
const newlist = new Linkedlist()
newlist.addnode(4)
newlist.addnode(3)
newlist.addnode(7)
newlist.addnode(2)
newlist.addnode(6)
newlist.insertAfter(2,1)
newlist.deleteone(4)
newlist.print()

