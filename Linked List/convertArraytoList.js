// class Node {
//     constructor(data){
//         this.data = data
//         this.next = null
//     }
// }
// class LinkedList {
//     constructor(){
//         this.head = null
//         this.tail = null
//     }
//     Addnode(data){
//         const newnode = new Node(data)
//         if(this.head === null){
//             this.head = newnode
//         }else{
//             this.tail.next = newnode
//         }
//         this.tail = newnode
//     }
//     print(){
//         const values = []
//             let temp = this.head
//         while(temp != null){
//             values.push(temp.data)
//             temp = temp.next
//         }
//         console.log(values);
//     }
//     arrtolist(arr){
//       for(let i=0;i<arr.length;i++){
//         this.Addnode(arr[i])
//       }
//     }

    
// }



// const arr =[1,2,3,4]

// let List = new LinkedList()
// List.arrtolist(arr)

// List.print()
class Node{
    constructor(data){
      this.data = data;
      this.next = null;
    }
  }
  
  class Linkedlist{
    constructor(){
      this.head = null;
      this.tail = null;
    }
  
    addNode(data){
      const newNode = new Node(data);
      if(this.head === null){
        this.head = newNode;
      }else{
        this.tail.next = newNode;
      }
      this.tail = newNode;
    }
  
    print(){
      let temp = this.head;
      const values = []
      if(this.head === null){
        console.log("Empty");
      }
  
      while(temp!==null){
        values.push(temp.data);
        temp = temp.next;
      }
      console.log(values)
  
  
    }
  
    convertArraytoList(arr){
      for(let i=0;i<arr.length;i++){
        this.addNode(arr[i]);
      }
    }
  }
  
  const list = new Linkedlist();
  list.convertArraytoList([1,2,3,4,5]);
  list.print()