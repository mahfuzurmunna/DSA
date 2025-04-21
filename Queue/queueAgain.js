class Queue {
  constructor(capacity) {
    this.queue = new Array(this.capacity);
    this.capacity = capacity;
    this.front = 0;
    this.rear = 0;
  }

  isEmpty() {
    return this.front === this.rear;
  }

  isFull() {
    return this.rear === this.capacity;
  }

  length() {
    return this.rear - this.front;
  }

  peek() {
    return this.queue[this.front];
  }

  enqueue(value) {
    if (this.isFull()) {
      console.log(
        `You cant add more the value: ${value} in the queue because -> Queue is full`
      );
      return "You cant add more value in the queue because -> Queue is full";
    }

    this.queue[this.rear] = value;
    this.rear++;
  }

  dequeue() {
    if (this.isEmpty()) {
      return "Queue is empty, please add a value";
    }

    for (let i = 1; i < this.rear; i++) {
      this.queue[i - 1] = this.queue[i];
    }
    this.rear--;
    this.queue.length = this.rear;
  }
  // another method of dequeing
  /**
   dequeue() {
   if(isEmpty()) {return 'Queue is empty'} else {
   this.front++;}
   return;
   }
   */

  printQueue() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    let str = "";
    for (let i = this.front; i < this.rear; i++) {
      str += this.queue[i] + "\n";
    }
    return str;
  }

  // convert queue into string 
  toString() {
   return  this.queue.slice(this.front,this.rear).join(",")
  }
}

const newQ = new Queue(5);

newQ.enqueue(10);
newQ.enqueue(20);
newQ.enqueue(30);
newQ.enqueue(40);
// newQ.enqueue(60);
newQ.dequeue();
newQ.enqueue(50);
newQ.enqueue(100);

// console.log(newQ.dequeue());

console.log(newQ.printQueue());

console.log(newQ.length());
console.log(newQ.toString());
