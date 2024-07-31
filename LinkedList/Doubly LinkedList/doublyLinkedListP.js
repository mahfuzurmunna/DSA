class Node {
  constructor(data, next = null, prev = null) {
    this.data = data;
    this.next = next;
    this.prev = prev;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.prev = null;
  }

  addAtFirst(value) {
    const newNode = new Node(value, this.head, null);
    if (this.head) this.head.next = newNode;
    this.head = newNode;
    if (!this.tail) {
      this.tail = newNode;
    }
  }
  addAtLast(value) {
    const newNode = new Node(value, null, this.tail);
    if (this.tail) this.tail.next = newNode;
    this.tail = newNode;
    if (!this.head) {
      this.head = newNode;
    }
  }
}

let dLL = new DoublyLinkedList();
dLL.addAtFirst(100);
dLL.addAtLast(200);
dLL.addAtLast(400);
dLL.addAtLast(600);
dLL.addAtLast(800);
dLL.addAtLast(900);
dLL.addAtLast(1000);

// Example of adding after a specific node
let node = dLL.head.next; // Node with value 200
dLL.addAfterNode(node, 300);

console.log(dLL.print()); // Output: 100 200 300 400 600 800 900
console.log(dLL.findMiddleNode()); // Output: 400
