class Queue {
  constructor(c) {
    this.front = 0;
    this.rear = 0;
    this.capacity = c;
    this.queue = new Array(this.capacity);
  }

  // Function to insert an element at the rear of the queue
  enqueue(data) {
    // Check queue is full or not
    if (this.capacity === this.rear) {
      return "Queue is full";
    }
    // insert element at the rear
    else {
      this.queue[this.rear] = data;
      this.rear++;
    }
    return;
  }

  //checks if the queue is empty or not
  isEmpty() {
    return this.front === this.rear;
  }

  //removing the first element that has been added in the queue and resetting the queue
  dequeue() {
    if (this.isEmpty()) {
      return "Queue is empty";
    } else {
      this.front++;
    }

    return;
  }

  //print front of the queue
  peekFirst() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    return this.queue[this.front];
  }

  //total size of the queue
  size() {
    return this.rear - this.front;
  }

  //remove all the values
  clear() {
    this.queue = new Array(this.capacity);
    this.front = 0;
    this.rear = 0;
  }

  //print all the value
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

  //convert to string
  toString() {
    return this.queue.slice(this.front, this.rear).join(", ");
  }
}

let queue = new Queue(4);

queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
queue.enqueue(50);
queue.dequeue();
console.log("front value:", queue.peek());
console.log(typeof queue);
console.log(`queue value:`, queue.printQueue());
