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

  // Insert data at the start
  insertAtFirst(data) {
    const newNode = new Node(data, this.head);
    this.head = newNode;
  }

  // Insert data at a given node
  insertDataAtGivenValue(prevNode, data) {
    if (!prevNode) return "prevNode cannot be null";
    const newNode = new Node(data);
    prevNode.next = newNode;
  }

  // Insert data at the end
  insertAtLast(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    if (!this.head.next) {
      this.head.next = newNode;
      return;
    }
    let lastNode = this.head.next;
    while (lastNode.next) {
      lastNode = lastNode.next;
    }
    lastNode.next = newNode;
  }

  // Size of the linked list
  size() {
    let count = 0;
    let currentNode = this.head;
    while (currentNode) {
      count++;
      currentNode = currentNode.next;
    }
    console.log(count);
    return count;
  }

  // Get the first element of the list
  getFirst() {
    return this.head.data;
  }

  getAt(index) {
    let current = 0;
    let node = this.head;

    while (node) {
      if (current === index) {
        return node;
      }
      node = node.next;
      count++;
    }
    return null;
  }

  //clear the list
  clear() {
    return (this.head = null);
  }

  // Remove the first element
  removeFirst() {
    return (this.head = this.head.next);
  }

  // Remove element by given key
  removeByGivenKey(key) {
    if (!this.head) {
      return "Linked List is Empty";
    }
    if (this.head.data === key) {
      this.head = this.head.next;
    }
  }

  // Remove last element

  // Search operation in linked list (LeetCode)

  // Traversal of linked list (LeetCode)

  // Reverse linked list
  printList() {
    let arr = [];
    let node = this.head;
    while (node) {
      arr.push(node.data);
      node = node.next;
    }
    console.log(arr.join(" -> "));
    return arr;
  }
}

// Example usage:
const ll = new LinkedList();
ll.insertAtFirst(3);
ll.insertAtFirst(2);
ll.insertAtFirst(1);
// ll.insertDataAtGivenValue();
ll.printList(); // Output: 1 -> 2 -> 3
ll.size();
// ll.reverse();
// ll.printList(); // Output: 3 -> 2 -> 1
