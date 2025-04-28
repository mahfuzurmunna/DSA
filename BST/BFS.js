const breadthFirstSearch = (root) => {
  if (root === null) {
    return; //return empty array or message
  }

  const values = [];
  const queue = [root];

  while (queue.length > 0) {
    const node = queue.shift(); //point of optimization
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
  if (root === null) return [];
  const leftValues = recursiveBFS(node.left);
  console.log(leftValues);
  const rightValue = recursiveBFS(node.right);
  console.log(rightValue);

  return [root, ...node.right, ...node.left];
};
