// node class
class Node {
  constructor(data, prev = null, next = null) {
    this.data = data;
    this.prev = prev;
    this.next = next;
  }
}

// doubly linkedList class
class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
}

// insert at first method
DoublyLinkedList.prototype.insertAtBeginning = function (data) {
  const newNode = new Node(data, null, this.head);
  if (this.head !== null) {
    this.head.prev = newNode;
  }
  this.head = newNode;
  if (this.tail === null) {
    this.tail = newNode;
  }
};

// insert at end method
DoublyLinkedList.prototype.insertAtEnd = function (data) {
  const newNode = new Node(data, this.tail, null);
  if (this.tail !== null) {
    this.tail.next = newNode;
  }
  this.tail = newNode;
  if (this.head === null) {
    this.head = newNode;
  }
};

// insert node at a given point
DoublyLinkedList.prototype.insertAtGivenNode = function (data) {};

// new doubly linkedListS
const dLL = new DoublyLinkedList();

dLL.insertAtBeginning(10);
// dLL.insertAtEnd(20);

console.log(dLL);
