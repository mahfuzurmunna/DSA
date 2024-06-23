# Queue Concept

A queue is a special type data structure is used for storing and managing data in a specific order. It follows the principal of **FIFO** where the first element added to the queue is the first one to be removed.

To remember queue in other way we can compare queue with McDonalds queue system.

## Usage Of Queue:

&#10687; Task scheduling in operating systems

&#10687; Simulation of real-world systems (e.g., waiting lines)

&#10687; Priority queues for event processing

### Visualization of stack &#8227;

![Screenshot of stack process](../assets/Queue.png)

### Implementation in Javascript

```javascript
class Stack {
  constructor() {
    this.stack = [];
  }
  //this method will add a value ( First in )
  add(data) {
    this.stack.push(data);
  }

  //this metho will remove the last in value
  remove() {
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
console.log(myStack.printStack());
console.log(myStack.contain(4));
console.log(myStack);
console.log(myStack.reverse());

console.log(myStack.size());

console.log(myStack.clear());

console.log(myStack.isEmpty());

console.log(myStack.size());
```

## Author

#### Mr. Munna
