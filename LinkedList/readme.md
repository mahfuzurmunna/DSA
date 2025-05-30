# Linked List Concept

A linked list is a linear dynamic data structure which consist of a `node` where each `nodes` contains `data` and a `reference` to the next node in sequence. The elements are not stored at contiguous memory locations. The elements in a linked list are linked using pointers.

This allows for dynamic memory allocation and efficient insertion and deletion operations compared to arrays.

### Visualization of Singly Linked List Linked List &#8227;

![Screenshot of LinkedList process](../assets/singlyLinkedList.png)

### Linked List Applications

&#10687; Efficient Memory Utilization ,i.e no need to pre-allocate memory

&#10687; Implementing stacks and queues using linked lists.

&#10687; Using linked lists to handle collisions in hash tables.

&#10687; Representing graphs using linked lists.

&#10687; Allocating and deallocating memory dynamically.

### Types Of Linked List

&#10687; Singly Linked List

&#10687; Doubly Linked List

Both works very similar, but the difference is **Singly Linked List's** each node has a single pointer `(next)` that points to the _**Next Node**_ on the list.

While in **Doubly Linked List**, each node has two pointers `(previous & next)`, one pointing to the _**Next Node**_ and other pointing to the _**Previous Node**_.

### Visualization of Singly Linked List Linked List &#8227;

![Screenshot of stack process](../assets/singlyLinkedList.png)

### Implementation of Singly Linked List in Javascript

```javascript
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
}
```

### Insertion method in Singly Linked List

```javascript

//Insert data at first (head)
  insertAtFirst(data) {
    const newNode = new Node(data, this.head);
    this.head = newNode;
  }


// Insert data at a given node
  insertDataAtGivenValue(prevNode, data) {
    if (!prevNode) return "prevNode cannot be null";
    const newNode = new Node(data, prevNode.next);
    prevNode.next = newNode;
  }


//Insert data at the end
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
```

### Size of the Singly linked list

```javascript
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
```

### Get the first element of the Singly list

```javascript
getFirst() {
return this.head.data;
}
```

### Removing Methods in Singly linked List

```javascript

// clearing the linked List
clear() {
return (this.head = null);
}


//Remove the first element
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
let prevNode = this.head;
let currentNode = this.head.next;

    while (currentNode) {
      if (currentNode.data === key) {
        currentNode = currentNode.next;
        return;
      }
      prevNode = currentNode;
    }

    return "No node is found with the key";

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

```

### Search & Traversal (print) Method

```javascript

//search node with a given index
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

//search node with key
getWith(key) {
if (!this.head) return "Linked List is empty";
let currentNode = this.head;

    while (currentNode.next) {
      if (currentNode.key === key) {
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;

}

// Traversal of linked list (LeetCode)
print() {
if (!this.head) return "Linked List is empty";
let listValues = [];
let currentNode = this.head;
while (currentNode.next) {
listValues.push(currentNode);
currentNode = currentNode.next;
}

    return listValues.join(" -> ");

}
```

### Reversing a Linked List

```javascript
// Reverse linked list
reverse() {
let next = null;
let prev = null;
let current = this.head;

    while (current) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    this.head = prev;

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

```

## Author

#### Mr. Munna
