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
    insertNode(data){
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


    // delete
    
    removeHelper(data, currentNode, parentNode) {
        while (currentNode !== null) {
            if (data < currentNode.data) {
                parentNode = currentNode;
                currentNode = currentNode.left;
            } else if (data > currentNode.data) {
                parentNode = currentNode;
                currentNode = currentNode.right;
            } else {
                if (currentNode.left !== null && currentNode.right !== null) {
                    currentNode.data = this.getMinValue(currentNode.right);
                    this.removeHelper(currentNode.data, currentNode.right, currentNode);
                } else {
                    if (parentNode === null) {
                        if (currentNode.right === null) {
                            this.root = currentNode.left;
                        } else {
                            this.root = currentNode.right;
                        }
                    } else {
                        if (parentNode.left === currentNode) {
                            if (currentNode.right === null) {
                                parentNode.left = currentNode.left;
                            } else {
                                parentNode.left = currentNode.right;
                            }
                        } else {
                            if (currentNode.right === null) {
                                parentNode.right = currentNode.left;
                            } else {
                                parentNode.right = currentNode.right;
                            }
                        }
                    }
                }
                break;
            }
        }
    }

    getMinValue(currentNode) {
        if (currentNode.left === null) {
            return currentNode.data;
        } else {
            return this.getMinValue(currentNode.left);
        }
    }
    preorder() {
        this.preorderHelper(this.root);
    }

    // Helper function for preorder traversal
    preorderHelper(node) {
        if (node !== null) {
            console.log(node.data);
            this.preorderHelper(node.left);
            this.preorderHelper(node.right);
        }
    }
    inorder() {
        this.inorderHelper(this.root);
    }

    // Helper function for inorder traversal
    inorderHelper(node) {
        if (node !== null) {
            this.inorderHelper(node.left);
            console.log(node.data);
            this.inorderHelper(node.right);
        }
    }

    // Postorder traversal method
    postorder() {
        this.postorderHelper(this.root);
    }

    // Helper function for postorder traversal
    postorderHelper(node) {
        if (node !== null) {
            this.postorderHelper(node.left);
            this.postorderHelper(node.right);
            console.log(node.data);
        }
    }
}

    



const tree = new Binarysearch()
tree.insertNode(7)
tree.insertNode(5)
tree.insertNode(10)

tree.preorder();

console.log("Inorder traversal:");
tree.inorder();

console.log("Postorder traversal:");
tree.postorder();
tree.removeHelper(7, tree.root, null); 
console.log(tree.contains(7));