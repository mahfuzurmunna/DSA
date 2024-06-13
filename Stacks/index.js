class Stack {
  constructor() {
    this.stack = [];
  }

  //   to add data in the class
  add(data) {
    this.stack.push(data);
  }

  //   to remove data from the class
  remove() {
    this.stack.pop();
  }

  //   to show data from the top of the stack
  peek() {
    return this.stack[this.stack.length - 1];
  }

  //   to validte either the stack is empty or full of data
  isEmpty() {
    return this.stack.length === 0;
  }

  //   to see the length of the stack
  size() {
    return this.stack.length;
  }

  // to remove all the data
  clear() {
    this.stack = [];
  }

  // either a element exists or not
  contain(element) {
    return this.stack.includes(element);
  }

  //reverse the stack
  reverse() {
    this.stack.reverse();
  }

  //printing the stack
  printStack() {
    let str = [];
    for (let i = 0; i < this.stack.length; i++) {
      str.push(this.stack[i]);
    }

    return str;
  }
}

//usage Example
let myStack = new Stack();

myStack.add(4);
myStack.add(5);
myStack.add(10);

myStack.remove();

console.log(myStack.printStack());
