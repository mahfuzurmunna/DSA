const breadthFirstSearch = (root) => {
  const values = [];
  if (root === null) {
    return values;
  }

  const queue = [root];
  while (queue.length > 0) {
    const node = queue.shift(); // point of optimization
    values.push(node.key);

    if (node.left !== null) {
      queue.push(node.left);
    }

    if (node.right !== null) {
      queue.push(node.right);
    }
  }

  return values;
};

const recursiveBFS = (root) => {
  const values = [];
};
