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

  //insert data at firt position
  insertAtFirst(data) {
    const newNode = new Node(data);
    return (this.head = newNode);
  }

  // Insert data at a given node
  insertAfterANode(prevNode, data) {
    if (!prevNode) return "There is no previous node";
    const newNode = new Node(data, prevNode.next);

    return (this.prevNode.next = newNode);
  }

  //insert data at last
  insertAtLast(data) {
    if (!this.head) {
      return "LinedList is empty";
    }
    const newNode = new Node(data);
    if (!this.head.next) {
      this.head.next = newNode;
    }

    let currentNode = this.head;
    let nextNode = this.head.next;

    while (nextNode.next) {
      nextNode = newNode.next;
      currentNode = nextNode;
    }
    return (nextNode.next = newNode);
  }

  //size of the linked list
  size() {
    if (!this.head) {
      return "LinkedList is empty";
    }
    let count = 0;
    let currentNode = this.head;

    while (currentNode) {
      count++;
      currentNode = currentNode.next;
    }

    return count;
  }

  //get first element of the linked list
  getFirst() {
    return this.head.data;
  }

  //get element with a given index
  getAt(index) {
    let current = 0;
    let node = this.head;
    while (node) {
      if (current === index) {
        return node;
      } else {
        current++;
        node = node.next;
      }
    }
    return "No data at given index";
  }

  //clear the list
  clear() {
    return (this.head = null);
  }

  // Remove the first element
  removeFirst() {
    if (!this.head) {
      return "LinkedList is Empty";
    }

    return (this.head = this.head.next);
  }

  // Remove element by given key
  removeByGivenKey(key) {
    if (!this.head) {
      return "LinkedList is Empty";
    }

    if (this.head.data === key) {
      return (this.head = this.head.next);
    }

    let currentNode = this.head;

    while (currentNode.next) {
      if (currentNode.next.data === key) {
        return (currentNode.next = currentNode.next.next);
      }
      currentNode = currentNode.next;
    }
    return "No node is found with the given key";
  }

  // Remove last element
  removeLast() {
    if (!this.head) {
      return "LinkedList is empty";
    }
    if (!this.head.next) {
      return (this.head = null);
    }
    let prevNode = this.head;
    let lastNode = this.head.next;

    while (lastNode.next) {
      prevNode = lastNode;
      lastNode = lastNode.next;
    }

    return (lastNode = null);
  }

  //reverse linked list
  reverse() {
    let next = null;
    let prev = null;
    let current = this.head;

    while (current) {
      next = current.next;
      current.next = current;
      prev = current;
      current = next;
    }
    this.head = prev;
  }
}

const ll = new LinkedList();
ll.insertAtFirst(3);
ll.insertAtFirst(2);
ll.insertAtFirst(1);
// ll.insertDataAtGivenValue();
ll.printList(); // Output: 1 -> 2 -> 3
ll.size();
