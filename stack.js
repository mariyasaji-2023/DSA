class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  class Stack {
    constructor() {
      this.top = null;
    }
  
    push(data) {
      const newNode = new Node(data);
  
      if (this.top === null) {
        this.top = newNode;
      } else {
        newNode.next = this.top;
        this.top = newNode;
      }
    }
  
    display() {
      let current = this.top;
      while (current !== null) {
        console.log(current.data);
        current = current.next;
      }
    }

 
    pop() {
      if (this.top === null) {
        console.log('Stack underflow');
      } else {
        this.top = this.top.next;
      }
    }
  }
  
  function main() {
    const stack = new Stack();
    stack.push(10);
    stack.push(20);
    stack.push(30);
    stack.push(40);
    stack.pop();
    stack.display();
  }
  
  main();
 
