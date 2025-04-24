//node class
class Node {
  constructor(data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

// doubly linked list constructor
class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
}

// insert at first method
DoublyLinkedList.prototype.insertAtfirst = function (data) {
  const newNode = new Node(data, null, this.head);
  if (this.head) {
    this.head.left = newNode;
  }

  this.head = newNode;

  if (!this.tail) {
    this.tail = newNode;
  }
};

//insert at last method
DoublyLinkedList.prototype.insertAtLast = function (data) {
  const newNode = new Node(data, this.tail, null);

  if (this.tail) {
    this.tail.left = newNode;
  }
  this.tail = newNode;
  if (!this.head) {
    this.head = newNode;
  }
};

//insert after a given node/key
DoublyLinkedList.prototype.insertAfterGivenNode = function (prevNode,data) {
  
}
 