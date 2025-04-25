class Node {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(key) {
    const newNode = new Node(key);  // Create a new Node
    if (!this.root) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(rootNode, newNode) {
    if (newNode.key < rootNode.key) {
      if (!rootNode.left) {
        rootNode.left = newNode;
      } else {
        this.insertNode(rootNode.left, newNode);
      }
    } else if (newNode.key > rootNode.key) {
      if (!rootNode.right) {
        rootNode.right = newNode;
      } else {
        this.insertNode(rootNode.right, newNode);
      }
    }
  }

  // In-order traversal to print tree values in sorted order
  inOrderTraversal(node) {
    if (node !== null) {
      this.inOrderTraversal(node.left); // Traverse left subtree
      console.log(node.key);             // Print the node's key
      this.inOrderTraversal(node.right); // Traverse right subtree
    }
  }
}

// Example Usage
const bst = new BinarySearchTree();

// Insert some nodes
bst.insert(50);
bst.insert(30);
bst.insert(20);
bst.insert(40);
bst.insert(70);
bst.insert(60);
bst.insert(80);

// Print tree values in sorted order (in-order traversal)
console.log("In-order traversal of the binary search tree:");
bst.inOrderTraversal(bst.root);
