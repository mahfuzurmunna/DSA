class Stack {
  constructor() {
    this.stack = [];
    this.maxSize = 100;
    this.top = -1;
  }
  isFull() {
    return this.top === this.maxSize - 1;
  }

  isEmpty() {
    return this.top === -1;
  }
  add(value) {
    if (this.isFull()) return "Stack is overflowed";
    this.top++;
    this.stack[this.top] = value;
  }

  remove() {
    if (this.isEmpty()) return null;

    this.top--;
    return this.stack.pop();
  }

  //search a particular value method
  peek() {
    return this.stack[this.top];
  }

  printStack() {
    if (this.isEmpty()) return null;
    let values = [];
    for (let i = 0; i <= this.top; i++) {
      values.push(this.stack[i]);
    }

    console.log(values.join(" "));
  }

  //clone
  clone() {
    let newStack = new Stack();
    newStack.stack = [...this.stack];
    return newStack;
  }
}

let stack = new Stack();

stack.add(100);
stack.add(400);
stack.add("munna");
stack.add(true);
stack.add({ name: "munna", age: 27 });
stack.add([10, 20]);

// stack.printStack();
// console.log(stack);
// stack.remove();
// console.log(stack);
// stack.printStack();
// console.log(stack.peek());

function reverseString(str) {
  const stack = new Stack();
  let rS = "";
  for (const word of str) {
    stack.add(word);
  }
  while (!stack.isEmpty()) {
    rS += stack.remove();
  }

  return rS;
}

const str = "mada";

console.log(reverseString(str));

function isBalanced(str) {
  const stack = new Stack();
  for (let i = 0; i < str.length; i++) {
    stack.add(str[i]);
  }
  let fP = 0;
  let sP = 0;
  let removedParenthesis;

  if (stack.peek() === "(") {
    return false;
  } else {
    while (!stack.isEmpty()) {
      removedParenthesis = stack.remove();
      if (removedParenthesis === "(") {
        fP++;
      } else {
        sP++;
      }
    }
  }
  if (removedParenthesis === ")") return false;
  return fP === sP;
}

console.log(isBalanced("((()))"));

function isBalanced2(str) {
  const stack = new Stack();

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(") {
      stack.add(str[i]);
    } else {
      if (stack.isEmpty()) {
        return false;
      } else {
        stack.remove();
      }
    }
  }

  return stack.isEmpty();
}

console.log(isBalanced2("(((())))"));
