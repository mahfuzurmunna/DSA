class Stack {
  constructor() {
    this.stack = [];
  }
  //this method will add a value ( First in )
  push(data) {
    this.stack.push(data);
  }

  //this metho will remove the last in value
  pop() {
    this.stack.pop();
  }

  // this method checks if the method empty or not
  isEmpty() {
    return this.stack.length === 0 ? "true" : "false";
  }

  // this method clears the stack
  clear() {
    return (this.stack = []);
  }

  // this method reverse the stack
  reverse() {
    return this.stack.reverse();
  }

  // this method checks if the particular element exists or not
  contain(element) {
    return this.stack.includes(element);
  }

  // this method will print all the value of stack
  printStack() {
    let value = "";
    for (let i = 0; i < this.stack.length; i++) {
      value += this.stack[i] + "\n";
    }
    return stack;
  }

  //this method clones the stack
  clone() {
    let newStack = new Stack();
    newStack.stack = [...this.stack];
    return newStack;
  }

  // this method will return the stack into an array
  toArray() {
    return [...this.stack];
  }

  //this method will return the stack into a string
  toString() {
    return this.stack.join(", ").toString();
  }
}

//usage Example
let myStack = new Stack();

myStack.add(4);
myStack.add(5);
myStack.add(10);

myStack.remove();

console.log(myStack.printStack());
