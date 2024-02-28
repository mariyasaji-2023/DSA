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
        if (this.head === null) {
            this.head = newnode

        } else {
            this.tail.next = newnode
        }
        this.tail = newnode
    }print(){
        if(this.head===null){
            console.log("empty");
        }
        let temp=this.head
        let values = []
        while(temp!=null){
            values.push(temp.data)
            temp=temp.next
        }
        console.log(values);
    }

}

const newlist = new Linkedlist()
newlist.addnode(2)
newlist.addnode(4)
newlist.print()









// const newlist = new Linkedlist()
// newlist.addnode(2)
// newlist.addnode(4)
// newlist.print()