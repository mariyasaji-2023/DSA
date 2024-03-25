class Node{
  constructor(data){
    this.data = data
    this.left = null
    this.right = null
  }
}

class Binarysearch{
  constructor(){
    this.root = null
  }
  insertnode(data){
    const newNode = new Node(data)
    let currentNode = this.root
    if(currentNode===null){
      this.root = newNode
      return
    }
    while(true){
      if(data < currentNode.data){
        if(currentNode.left === null){
          currentNode.left = newNode
          break
        }else{
          currentNode = currentNode.left
        }
      }else{
        if(currentNode.right===null){
          currentNode.right =newNode
          break
        }else{
          currentNode = currentNode.right
        }
      }
    }
  }
  contains(data){
    let currentNode = this.root
    while(currentNode!=null){
      if(data < currentNode.data){
        currentNode = currentNode.left
      }else if(data > currentNode.data){
        currentNode =currentNode.right
      }else{
        return true
      }
    }
    return false
  }
}
const result = new Binarysearch()
result.insertnode(40)
result.insertnode(20)
result.insertnode(45)
console.log(result.contains(20));