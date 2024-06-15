class bstNode {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}

class binarySearchTree {
  constructor() {
    this.root = null;
  }

  //delete key from a bst
  delete(key) {
    if (this.root === null) {
      return null;
    } else {
      this.root = this.deleteNode(this.root, key);
    }
  }

  //deletenode Function
  deleteNode(node, key) {
    // node -> root

    if (key < node.key) {
      node.left = this.deleteNode(node.left, key);
    } else if (key > node.key) {
      node.right = this.deleteNode(node.right, key);
    } else {
      if (node.left === null && node.right === null) {
        return null;
      } else if (node.left === null) {
        return node.right;
      } else if ((node.right = null)) {
        return node.left;
      } else {
        let tempNode = this.findMinNode(node.right);
        node.key = tempNode;
        node.right = this.deleteNode(node.right, tempNode.key);
      }
    }
    return node;
  }

  findMinNode(node) {
    while (node.left !== null) {
      node = node.left;
    }
    return node;
  }
}
