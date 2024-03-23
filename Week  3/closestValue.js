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
        if(currentNode == null){
            this.root = newNode
            return
        }
        while(true){
            if(data <currentNode.data){
                if(currentNode.left == null){
                    currentNode.left = newNode
                    break;
                }else{
                    currentNode =currentNode.left
                }
            }else{
                if(currentNode.right == null){
                    currentNode.right = newNode
                    break;
                }else{
                    currentNode = currentNode.right
                }
            }
        }
    }
    contains(data){
        let currentNode = this.root
        while(currentNode != null){
            if(data < currentNode.data){
                currentNode = currentNode.left
            }else if(data > currentNode.data){
                currentNode = currentNode.right
            }else{
                return true
            }
        }
        return false

    }
    preorder(){
        this.preorderHelper(this.root)
    }
    preorderHelper(node){
        if(node != null){
            console.log(node.data);
            this.preorderHelper(node.left)
            this.preorderHelper(node.right)
        }
    }
}


const tree = new Binarysearch()
tree.insertnode(20)
tree.insertnode(30)
tree.insertnode(25)
tree.insertnode(10)
// tree.insertnode(15)
// tree.insertnode(22)
// tree.insertnode(9)
console.log(tree.contains (15));
tree.preorder()

