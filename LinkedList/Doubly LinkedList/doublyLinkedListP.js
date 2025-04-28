//doubly linked list implementation using javascript class

// node creation
class Node {
  constructor(data, next = null, prev = null) {
    this.data = data;
    this.next = next;
    this.prev = prev;
  }
}

// doubly linkedlist implementation
class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  // insert at first data
  insertAtFirst(data) {
    const newNode = new Node(data, this.head, null);
    if (this.head) {
      this.head.prev = newNode;
    }
    this.head = newNode;
    if (!this.tail) {
      this.tail = newNode;
    }
  }

  //insert at last
  insertAtLast(data) {
    const newNode = new Node(data, null, this.tail);
    if (this.tail) {
      this.tail.next = newNode;
    }
    this.tail = newNode;
    if (!this.head) {
      this.head = newNode;
    }
  }

  //insert after a given node
  insertAfterGivenNode(prevNode, data) {
    const newNode = new Node(data, prevNode.next, prevNode);

    // if the linkedList is empty
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      return;
    }

    if (!prevNode) {
      console.log("PrevNode not found, please enter a valid node");
      return;
    }
    if (prevNode.next) {
      prevNode.next.prev = newNode;
    }
    prevNode.next = newNode;
    if (!prevNode.next) {
      this.tail = newNode;
    }
  }

  //delete first node
  delelteFirst() {
    //if the list is empty
    if (!this.head) {
      console.log("List is empty");
      return;
    }

    // if the list has only one node
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
      return;
    }

    // deleting the current head and making the head.next as a head;
    this.head = this.head.next;

    this.head.prev = null;
  }

  deleteLast() {
    if (!this.head) {
      console.log("List is empty");
      return;
    }

    // if the list has only one node
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
      return;
    }

    this.tail = this.tail.prev;
    this.tail.next = null;
  }

  reverse() {
    let currentNode = this.head;
    let temp = null;

    while (currentNode) {
      temp = currentNode.prev;
      currentNode.prev = currentNode.next;
      currentNode.next = temp;

      currentNode = currentNode.prev;
    }
    if (temp) {
      this.tail = this.head;
      this.head = temp.prev;
    }
  }

  printList() {
    let list = [];
    let currentNode = this.head;
    while (currentNode) {
      list.push(currentNode.data);
      currentNode = currentNode.next;
    }
    return list.join(" -> ");
  }
}

const newDLL = new DoublyLinkedList();
newDLL.insertAtFirst(10);
newDLL.insertAtFirst(20);
newDLL.insertAtFirst(30);
newDLL.insertAtFirst(40);
newDLL.insertAtLast(0);
newDLL.delelteFirst();
newDLL.deleteLast();
newDLL.reverse();
console.log(newDLL.printList());
