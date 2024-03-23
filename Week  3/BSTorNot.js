class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function isValidBST(root) {
    // Helper function to perform inorder traversal
    function inorderTraversal(node, result) {
        if (node === null) return;

        inorderTraversal(node.left, result);
        result.push(node.value);
        inorderTraversal(node.right, result);
    }

    // Store the inorder traversal result in an array
    const inorderResult = [];
    inorderTraversal(root, inorderResult);

    // Check if the inorder result is sorted
    for (let i = 0; i < inorderResult.length - 1; i++) {
        if (inorderResult[i] >= inorderResult[i + 1]) {
            return false;
        }
    }

    return true;
}

// Example usage:
// Construct a sample BST
const root = new TreeNode(5);
root.left = new TreeNode(3);
root.right = new TreeNode(7);
root.left.left = new TreeNode(2);
root.left.right = new TreeNode(4);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(8);

// Check if the tree is a valid BST
console.log(isValidBST(root)); // Output: true
