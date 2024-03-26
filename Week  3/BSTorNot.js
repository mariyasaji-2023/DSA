class TreeNode {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
  }
  
  function isValidBST(root) {
    function inorderHelper(node) {
      if (node != null) {
        inorderHelper(node.left);
        console.log(node.data);
        inorderHelper(node.right);
      }
    }
  
    const inorderResult = [];
    inorderHelper(root);
  
    // Check if the inorder result is sorted
    for (let i = 0; i < inorderResult.length - 1; i++) {
      if (inorderResult[i] >= inorderResult[i + 1]) {
        return false;
      }
    }

    return true;
  }
  
  const root = new TreeNode(5);
  root.left = new TreeNode(3);
  root.right = new TreeNode(7);
  root.left.left = new TreeNode(2);
  root.left.right = new TreeNode(4);
  root.right.left = new TreeNode(6);
  root.right.right = new TreeNode(8);
  
  // Check if the tree is a valid BST
  console.log(isValidBST(root)); // Output: true
  