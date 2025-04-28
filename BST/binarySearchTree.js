class Node {
  constructor(key, left = null, right = null) {
    this.key = key;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(key) {
    const newNode = new Node(key);
    if (!this.root) {
      this.root = newNode;
    } else {
      this.root = insertNode(this.root, newNode);
    }
  }

  insertNode(node, newNode) {
    if (newNode.key < node.key) {
      if (!node.left) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (!node.right) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  delete(key) {
    this.root = this.deleteNode(this.root, key);
  }

  deleteNode(node, key) {
    if (node === null) {
      return null;
    }
    if (key < node.key) {
      node.left = this.deleteNode(node.left, key);
    } else if (key > node.key) {
      node.right = this.deleteNode(node.right, key);
    } else {
      if (node.left === null && node.right === null) {
        return null;
      } else if (node.left === null) {
        return node.right;
      } else if (node.right === null) {
        return node.left;
      } else {
        let tempNode = this.findMinNode(node.right);
        node.key = tempNode.key;
        node.right = this.deleteNode(node.right, tempNode.key);
      }
    }
    return node;
  }

  findMinNode(node) {
    while (node.left) {
      node = node.left;
    }
    return node;
  }

  inOrderTraversal() {
    const result = [];

    this.inOrder(this.root, result);
    return result;
  }

  inOrder(node,result) {
    if (node) {
      this.inOrder(node.left, result);
      result.push(node.key);
      this.inOrder(node.right, result);
    }
  }

  preOrderTraversal() {
    const result = [];
    this.preOrder(this.root, result);
    return result;
  }

  preOrder(node,result) {
    if (node) {
      result.push(node.key);
      this.preOrder(node.left, result);
      this.preOrder(node.right, result);
    }
  }

  postOrderTraversal() {
    const result = [];
    this.postOrder(this.root,result);
    return result;
  }

  postOrder(node,result) {
    if(node) {
      
    }
  }
}
