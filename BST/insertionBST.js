//single node
class BSTnode {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}

//bst implementation
class binarySearchTree {
  constructor() {
    this.root = null;
  }
  //insert a node in BST
  insert(key) {
    const newNode = new BSTnode(key);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  //insertNode function (recursive)
  insertNode(node, newNode) {
    // node -> root
    if (newNode.key < node.key) {
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
}

// just inserting random keys
const bst = new binarySearchTree();

bst.insert(15);
bst.insert(25);
bst.insert(10);
bst.insert(7);
bst.insert(22);
bst.insert(17);
bst.insert(13);

console.log(bst);
