class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  //insertData At start
  insertAtStart(data) {
    const newNode = new Node(data);
    this.head = newNode;
  }

  //insert data at the end
  insertAtEnd(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let last = this.head;

    while (last.next) {
      last = last.next;
    }
    last.next = newNode;
  }

  //insert data at a given value
  insertAfter(prevNode, data) {
    if (!prevNode) {
      return "The given prevNode cannot be null";
    }
    const newNode = new Node(data, prevNode.next);
    prevNode.next = newNode;
  }

  //size of the LinkedList
  size() {
    let counter = 0;
    let node = this.head;

    while (node) {
      counter++;
      node = node.next;
    }
    return counter;
  }

  //get first element of list
  getFirst() {
    return this.head.data;
  }

  //remove first element
  removeFirstNode() {
    if (!this.head) {
      return;
    }
    this.head = this.head.next;
  }

  //remove last element
  removeLastNode() {
    if (!this.head) {
      return;
    }
    if (!this.head.next) {
      this.head = null;
    }
    let previousNode = this.head;
    let node = this.head.next;
    while (node.next) {
      previousNode = node;
      node = node.next;
    }
    previousNode.next = null;
  }
}

// Example usage:
const myList = new LinkedList();
myList.insertAtEnd(2);
myList.insertAtEnd(3);
myList.insertAtEnd(4);
myList.insertAtEnd(5);
console.log(myList);
// The linked list now contains: 2 -> 3 -> 4 -> 5
