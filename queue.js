class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  class Queue {
    constructor() {
      this.front = null;
      this.rear = null;
    }
  
    enqueue(data) {
      let newNode = new Node(data);
      if (this.rear === null) {
        this.front = this.rear = newNode;
        return;
      }
      this.rear.next = newNode;
      this.rear = newNode;
    }
  
    dequeue() {
      if (this.front === null) {
        console.log('Empty is our node');
        return;
      }
      this.front = this.front.next;
      if (this.front === null) {
        this.rear = null;
      }
    }
  
    display() {
      let current = this.front;
      while (current !== null) {
        console.log(current.data);
        current = current.next;
      }
    }
  }
  
  function main() {
    let queue = new Queue();
    queue.enqueue(10);
    queue.enqueue(20);
    queue.enqueue(30);
    queue.enqueue(40);
    queue.enqueue(50);
    queue.dequeue();
    queue.display();
  }
  
  main();
  

