# Linked List Concept

A linked list is a linear dynamic data structure which consist of a node where each nodes contains data and a reference to the next node in sequence. The elements are not stored at contiguous memory locations. The elements in a linked list are linked using pointers.

This allows for dynamic memory allocation and efficient insertion and deletion operations compared to arrays.

### Linked List Applications

&#10687; Efficient Memory Utilization ,i.e no need to pre-allocate memory

&#10687; Implementing stacks and queues using linked lists.

&#10687; Using linked lists to handle collisions in hash tables.

&#10687; Representing graphs using linked lists.

&#10687; Allocating and deallocating memory dynamically.

### Visualization of stack &#8227;

![Screenshot of stack process](../assets/Linked List.png)

### Implementation in Javascript

```javascript
class Linked List {
  constructor(c) {
    this.front = 0;
    this.rear = 0;
    this.capacity = c;
    this.Linked List = new Array(this.capacity);
  }

  // Function to insert an element at the rear of the Linked List

  enLinked List(data) {
    // Check Linked List is full or not
    if (this.capacity === this.rear) {
      return "Linked List is empty";
    }
    // insert element at the rear
    else {
      this.Linked List[this.rear] = data;
      this.rear++;
    }
    return;
  }

  //removing the first element that has been added in the Linked List and resetting the Linked List
  deLinked List() {
    if (this.isEmpty()) {
      return "Linked List is empty";
    } else {
      for (let i = 0; i < this.rear - 1; i++) {
        this.Linked List[i] = this.Linked List[i + 1];
      }
      if (this.rear < this.capacity) this.Linked List[this.rear] = 0;
      this.rear--;
    }

    return;
  }

  //checks if the Linked List is empty or not
  isEmpty() {
    return this.front === this.rear ? true : false;
  }

  //print front of the Linked List
  peek() {
    if (this.isEmpty()) {
      return "Linked List is empty";
    }
    return this.Linked List[this.front];
  }

  //total size of the Linked List
  size() {
    return this.Linked List.length;
  }

  //remove all the values
  clear() {
    this.Linked List = [];
  }

  //print all the value
  printLinked List() {
    if (this.isEmpty()) {
      return "Linked List is empty";
    }
    let str = "";
    for (let i = this.front; i < this.rear; i++) {
      str += this.Linked List[i] + "\n";
    }
    return str;
  }

  //convert to array
  toArray() {
    const newLinked List = new Linked List();
    newLinked List.Linked List = [...this.Linked List];
    return newLinked List;
  }

  //convert to string
  toString() {
    return this.Linked List.join(", ");
  }
}

let Linked List = new Linked List(4);

Linked List.enLinked List(20);
Linked List.enLinked List(30);
Linked List.enLinked List(40);
Linked List.enLinked List(50);
Linked List.deLinked List();
console.log("front value:", Linked List.peek());
console.log(`Linked List value:`, Linked List.printLinked List());
```

## Author

#### Mr. Munna
