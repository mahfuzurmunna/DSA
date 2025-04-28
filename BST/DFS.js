// class Node {
//   constructor(key) {
//     this.key = key;
//     this.left = null;
//     this.right = null;
//   }
// }
//single node
class BSTNode {
  constructor(key, left = null, right = null) {
    this.key = key;
    this.left = left;
    this.right = right;
  }
}

//bst implementation
class binarySearchTree {
  constructor() {
    this.root = null;
  }
  //insert a node in BST
  insertion(key) {
    const newNode = new BSTNode(key);
    if (!this.root) {
      return (this.root = newNode);
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

bst.insertion(15);
bst.insertion(25);
bst.insertion(10);
bst.insertion(7);
bst.insertion(22);
bst.insertion(17);
bst.insertion(13);

//normal approach (stack)
const depthFirstTraversal = (root) => {
  const values = [];
  if (root === null) {
    return values; //return null or empty array;
  }

  const stack = [root];

  while (stack.length > 0) {
    const node = stack.pop();
    values.push(node.key);

    if (node.right) {
      stack.push(node.right);
    }
    if (node.left) {
      stack.push(node.left);
    }
  }
  return values;
};

//recursive approach

const recursiveDepthFirstSearch = (root) => {
  if (root === null) {
    return; // return empty array or message or null
  }
  const leftValues = recursiveDepthFirstSearch(root.left);
  const rightValues = recursiveDepthFirstSearch(root.right);

  // return [root.key, leftValues,rightValues]
  // [a, [b,c,d], [e,f,g]]
  return [root.key, ...leftValues, ...rightValues];
};

console.log(bst.root);

recursiveDepthFirstTraversal(bst.root);
