class Queue {
  constructor(c) {
    this.queue = [];
    this.capacity = c;
    this.front = 0;
    this.rear = 0;
  }

  isFull() {
    return this.getLength() === this.capacity;
  }
  isEmpty() {
    return this.front === this.rear;
  }
  getLength() {
    return this.rear - this.front;
  }
  enqueue(value) {
    if (this.isFull()) return "Queue is overflowed";

    this.queue[this.rear] = value;
    this.rear++;
    return true;
  }

  dequeue() {
    if (this.isEmpty()) return null;
    const value = this.queue[this.front];

    this.front++;
    return this.queue.shift();
  }

  peek() {
    if (this.isEmpty()) return null;
    return this.queue[this.front];
  }

  printQueue() {
    if (this.isEmpty()) return null;
    let queue = [];

    console.log(this.queue);
  }
}

let newQ = new Queue(50);

newQ.enqueue(20);
newQ.enqueue(10);
newQ.enqueue(40);
// console.log("frist " + newQ.printQueue());

// console.log(newQ.size());
// console.log("befor " + newQ.printQueue());
newQ.dequeue();
// console.log("after " + newQ.printQueue());
console.log(newQ);
newQ.printQueue();
console.log(newQ.getLength());

// module.exports = Stack;

function reverseStr(str) {
  const queue = new Queue(100);

  for (let i = str.length - 1; i >= 0; i--) {
    queue.enqueue(str[i]);
  }
  let rS = "";
  while (!queue.isEmpty()) {
    rS += queue.dequeue();
  }
  console.log(rS);
}

// reverseStr("munna");

let num1 = 20;
let num2 = 30;

[num1, num2] = [num2, num1];

console.log(num1, num2);
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
function palindromeStack(str) {
  let newStr = str.toLowerCase().split(/\W+/).join("");
  console.log(newStr);
  let stack = new Stack();
  let queue = new Queue(100);

  for (const word of newStr) {
    stack.add(word);
    queue.enqueue(word);
  }
  while (!stack.isEmpty() || !queue.isEmpty()) {
    let stackLastWord = stack.remove();
    let queueFirstWord = queue.dequeue();

    if (stackLastWord !== queueFirstWord) {
      return false;
    }
  }
  return true;
}

console.log(palindromeStack("mada"));
