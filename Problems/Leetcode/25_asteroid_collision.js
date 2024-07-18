var asteroidCollision = function (asteroids) {
  let stack = [];
  for (const ast of asteroids) {
    if (!stack.length || ast > 0) {
      stack.push(ast);
    } else {
      while (true) {
        const lastAst = stack[stack.length - 1];
        if (lastAst === -ast) {
          stack.pop();
          break;
        } else if (lastAst > -ast) {
          break;
        } else {
          stack.pop();
          if (!stack.length) {
            stack.push(ast);
          }
        }
      }
    }
  }

  return stack;
};

let asteroids = [10, 2, -5];
