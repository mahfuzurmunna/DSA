### Visualization of Doubly Linked List Linked List &#8227;

![Screenshot of stack process](../assets/doublyLinkedList.png)

### Implementation of Doubly Linked List Using Javascript

```javascript
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
}
```

### Insertion method in Doubly Linked List

```javascript
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

```

### Removing Methods in Doubly linked List

```javascript
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

```
