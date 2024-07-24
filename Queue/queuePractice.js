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
