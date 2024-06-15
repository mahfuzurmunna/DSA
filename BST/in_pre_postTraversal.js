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

  //pre order traversal
  preOderTraversal() {
    const result = [];
    this.preOrder(this.root, result);
    return result;
  }

  preOrder() {
    if (node !== null) {
      result.push(node.key);
      this.preOrder(node.left, result);
      this.preOrder(node.right, result);
    }
  }

  //in order traversal
  inOrderTraversal() {
    const result = [];
    this.inOrder(this.root, result);
    return result;
  }

  inOrder() {
    this.inOrder(node.left, result);
    result.push(node.key);
    this.inOrder(node.right, result);
  }

  //post order traversal
  postOrderTraversal() {
    const result = [];
    this.postOrder(this.root, result);
    return result;
  }

  postOrder() {
    this.postOrder(node.left, result);
    this.postOrder(node.right, result);
    result.push(node.key);
  }
}
