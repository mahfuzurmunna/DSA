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
    const newNode = new Node(data, null, this.head);
    if (this.head) {
      this.head.next = newNode;
    }
    this.head = newNode;
    if (!this.tail) {
      this.tail = newNode;
    }
  }

  //insert at last
  insertAtLast(data) {
    const newNode = new Node(data, this.tail, null);
    if (this.tail) {
      this.tail.right = newNode;
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

  //
}
