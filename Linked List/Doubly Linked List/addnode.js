// class Node{
//   constructor(data){
//     this.data = data;
//     this.next = null;
//     this.prev = null;
//   }
// }

// class LinkedList {
//   constructor(){
//     this.head = null
//     this.tail = null
//   }
//   addnode(data){
//     const newnode =new Node(data)
//     if(this.head == null){
//       this.head = newnode
//     }else{
//       this.tail.next = newnode
//       newnode.prev = this.tail
//     }
//     this.tail = newnode
//   }
//   printforward(){
//     let values = []
//     let temp = this.head
//     while(temp != null){
//       values.push(temp.data)
//       temp = temp.next
//     }
//     console.log((values));
//   }
//   printbackword(){
//     let values = []
//     let temp = this.tail 
//     while(temp != null){
//       values.push(temp.data)
//       temp = temp.prev
//     }
//     console.log(values);
//   }
// }

// const newlist = new LinkedList()
// newlist.addnode(5)
// newlist.addnode(8)
// newlist.addnode(6)
// newlist.addnode(3)
// newlist.addnode(9)
// newlist.printbackword()
// newlist.printforward()

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null
  }
  addnode(data) {
    const newnode = new Node(data)
    if (this.head === null) {
      this.head = newnode
    } else {
      this.tail.next = newnode
      newnode.prev = this.tail
    }
    this.tail = newnode
  }
  deletenode(data) {
    let temp = this.head
    if(temp != null && temp.data == data){
      this.head =temp.next
    if(temp == null){
      return;
    }if(this.head != null){
      this.head.prev = null
    }if(temp == this.tail){
      this.tail = null
    }
    return
  }
  }
  printforward() {
    let values = []
    let temp = this.head
    while (temp != null) {
      values.push(temp.data)
      temp = temp.next
    }
    console.log((values));
  }
  printbackword() {
    let values = []
    let temp = this.tail
    while (temp != null) {
      values.push(temp.data)
      temp = temp.prev
    }
    console.log(values);
  }
}

const newlist = new LinkedList()
newlist.addnode(5)
newlist.addnode(8)
newlist.addnode(6)
newlist.addnode(3)
newlist.addnode(9)
newlist.printbackword()
newlist.printforward()