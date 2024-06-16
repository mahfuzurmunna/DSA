class Node {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}

//breadth

const treeSumWithBFS = (root) => {
  if (root === null) return 0;

  const queue = [root];

  let sum = 0;

  while (queue.length > 0) {
    const node = queue.shift();
    sum += node.key;

    if (node.left !== null) {
      queue.push(node.left);
    }

    if (node.right !== null) {
      queue.push(node.right);
    }
  }
};

//depth first search
const treeSumWithDFS = (root) => {
  if (root === null) return 0;

  return root.key + treeSumWithDFS(root.left) + treeSumWithDFS(root.right);
};

//dfs (stack tree sum)

const treeSumWithDFSstack = (root) => {
  if (root === null) {
    return 0;
  }

  let sum = 0;
  let stack = [root];

  while (stack.length > 0) {
    const node = stack.pop();

    sum += node.key;

    if (node.right !== null) {
      stack.push(node.right);
    }

    if (node.left !== null) {
      stack.push(node.left);
    }
  }

  return sum;
};

const root = new Node(10);
root.left = new Node(5);
root.right = new Node(15);
root.left.left = new Node(3);
root.left.right = new Node(7);
root.right.left = new Node(12);
root.right.right = new Node(18);

console.log(treeSumWithDFSstack(root)); //output 70
