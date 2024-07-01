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

// console.log(bst);

const iterativeDFS = (root) => {
  if (root === null) {
    return "The tree is empty";
  }
  const values = [];
  const stack = [root];
  while (stack.length > 0) {
    const node = stack.pop();
    values.push(node.key);

    if (node.right !== null) {
    }
  }
};

// console.log(iterativeDFS(bst.root));
// const stack = [];
// stack.push(20);
// stack.push;
// console.log(recursiveDepthFirstTraversal(bst.root));

//normal approach (stack)
const depthFirstTraversal = (root) => {
  const values = [];
  if (root === null) {
    return values; // or [];
  }

  const stack = [root];

  while (stack.length > 0) {
    const node = stack.pop();
    values.push(node.key);

    if (node.right !== null) {
      stack.push(node.right);
    }

    if (node.left !== null) {
      stack.push(node.left);
    }
  }
  return values;
};

//recursive approach

const recursiveDepthFirstTraversal = (root) => {
  if (root === null) {
    return []; //return empty array or any message
  }
  const leftValues = recursiveDepthFirstTraversal(root.left);
  console.log(`left values ->` + leftValues);
  const rightValues = recursiveDepthFirstTraversal(root.right);
  console.log(`right values :` + rightValues);

  return [root.key, ...leftValues, ...rightValues];
  //this will return [  1, [ 2, [4, undefined, undefined],  [5, undefined, undefined] ], [ 3, undefined, [6, undefined, undefined]]] [a, [b,d,e], [c,f,g]];

  //if we want to store in them in one array then: then
  // -> return [this.root,...leftValues, ...rightValues]
};

console.log(bst.root);

recursiveDepthFirstTraversal(bst.root);
