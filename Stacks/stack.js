class Stack {
  constructor() {
    this.stack = [];
  }
  //this method will add a value ( First in )
  add(data) {
    this.stack.push(data);
  }

  //this method will remove the last in value
  remove() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.stack.pop();
  }

  // this method checks if the method empty or not
  isEmpty() {
    return this.stack.length === 0 ? true : false;
  }

  // this method clears the stack
  clear() {
    return (this.stack = []);
  }

  // this method reverse the stack
  reverse() {
    let reversedStack = new Stack();
    reversedStack = [...this.stack].reverse();
    return reversedStack;
  }

  // this method checks if the particular element exists or not
  contain(element) {
    return this.stack.includes(element);
  }

  //this method will show the size of the stack
  size() {
    return this.stack.length;
  }

  // this method will print all the value of stack
  printStack() {
    return this.stack;
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
myStack.add(20);
myStack.add(7);
myStack.remove();
console.log("first print:" + myStack.printStack());
console.log(myStack.contain(4));
console.log(myStack);
console.log(myStack.reverse());

// console.log(myStack.size());

// console.log(myStack.clear());

// console.log(myStack.isEmpty());
console.log("remove" + myStack.remove());

console.log(myStack.size());
console.log("befor" + myStack.printStack());
myStack.remove();
console.log("after" + myStack.printStack());
