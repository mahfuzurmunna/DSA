class node {
  constructor(data, next = null, prev = null) {
    this.data = data;
    this.next = next;
    this.prev = prev;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  //insert node at first
  insertAtFirst(data) {
    const newNode = new Node(data, this.head, null);
    if (this.head) {
      this.head.prev = newNode;
    }
    this.head = newNode;
    if (this.tail === null) {
      this.tail = newNode;
    }
  }

  //insert node at last
  insertAtLast(data) {
    const newNode = new Node(data, null, this.tail);
    if (this.tail !== null) {
      this.tail.next = newNode;
    }

    this.tail = newNode;

    if (!this.head) {
      this.head = newNode;
    }
  }

  //insert node after a give node
  insertAfterGivenNode(prevNode, data) {
    if (prevNode === null) {
      console.log("invalid prev node");
      return;
    }
    const newNode = new Node(data, prevNode.next, prevNode);
    let nextNode = prevNode.next;
    if (nextNode) {
      nextNode.prev = newNode;
    }

    prevNode.next = newNode;
    if (!nextNode) {
      this.tail = newNode;
    }
  }

  //delete first node
  deleteFirstNode() {
    if (!this.head) {
      return;
    }
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
    }
  }

  //delete last node
  deleteLastNode() {
    if (!this.tail) {
      return;
    }
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
    }
  }

  //reverse doubly linked list
  reverse() {
    let current = this.head;
    let temp = null;

    while (current) {
      // swapping the pointers
      temp = current.prev;
      current.prev = current.next;
      current.next = temp;

      // move to next node
      current = current.next;
    }

    if (temp !== null) {
      this.tail = this.head;
      this.head = temp.prev;
    }
  }
}
