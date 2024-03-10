class Node{
    constructor(data){
        this.data = data
        this.next = null
    }
}
class stack {
    constructor(){
        this.top = null
    }
    push(data){
        const newNode = new Node(data)
        if(this.top == null){
            this.top = newNode
        }else{
            newNode.next = this.top
            this.top = newNode
        }
    }
    pop(){
        if(this.top == null){
            console.log("empty");
        }else{
            this.top = this.top.next
        }
    }
    display(){
        let current = this.top
        while(current!= null){
            console.log(current.data);
            current = current.next
        }
    }
}

const newstack = new stack()
newstack.push(9)
newstack.push(2)
newstack.push(3)
newstack.push(4)
newstack.pop()
newstack.display()