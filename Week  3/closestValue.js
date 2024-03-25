class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(data) {
        const newNode = new Node(data);
        if (this.root === null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(node, newNode) {
        if (newNode.data < node.data) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }

    findClosestValue(target) {
        if (!this.root) {
            return null; // Tree is empty
        }

        let closest = this.root.data;
        let current = this.root;

        while (current) {
            if (Math.abs(current.data - target) < Math.abs(closest - target)) {
                closest = current.data;
            }

            if (current.data === target) {
                return current.data; // Found exact match
            } else if (target < current.data) {
                current = current.left;
            } else {
                current = current.right;
            }
        }

        return closest;
    }
}

// Example usage:
const tree = new BinarySearchTree();
tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(3);
tree.insert(7);
tree.insert(12);
tree.insert(17);

const target = 9;
console.log("Closest value to", target, "in the tree is:", tree.findClosestValue(target));
