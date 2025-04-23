class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
  }

  //   insert one after another
  insert(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      return;
    }

    let lastNode = this.head;

    while (lastNode.next) {
      lastNode = lastNode.next;
    }
    lastNode.next = newNode;
  }

  //   insert data at given node
  insertAfterNode(prevNodeData, data) {
    if (!this.head) return "List is empty";

    let currentNode = this.head;

    while (currentNode && currentNode.data !== prevNodeData) {
      currentNode = currentNode.next;
    }

    if (!currentNode) {
      return "Please enter a valid node";
    } else {
      const newNode = new Node(data, currentNode.next);
      currentNode.next = newNode;
    }
  }

  //   delete first node
  deleteFirstNode() {
    if (!this.head) return "List is empty";
    this.head = this.head.next;
  }

  //   delte last node
  deleteLastNode() {
    if (!this.head) return "List is empty";
    if (!this.head.next) {
      this.head = null;
      return;
    }
    let secondLastNode = this.head;
    while (secondLastNode.next.next) {
      secondLastNode = secondLastNode.next;
    }

    secondLastNode.next = null;
  }

  //delete a node with a given key
  deleteByKey(key) {
    if (!this.head) {
      console.log('"List is empty"');
      return;
    } //null;

    //data found at head
    if (this.head.data === key) {
      this.head = this.head.next;
      return;
    }

    let currentNode = this.head;

    while (currentNode.next) {
      if (currentNode.next.data === key) {
        currentNode.next = currentNode.next.next;
        return;
      }
      currentNode = currentNode.next;
    }

    console.log(
      `Enter a valid key, this key ${key} is not present in the list`
    );

    return;
  }

  //reverse linkedList
  reverseLinkedList() {
    if (!this.head) {
      console.log("List is empty");
      return;
    }

    let prevNode = null;
    let currentNode = this.head;
    let nextNode = null;

    while (currentNode) {
      nextNode = currentNode.next;
      currentNode.next = prevNode;
      prevNode = currentNode;
      currentNode = nextNode;
    }

    this.head = prevNode;
  }

  //   print the linkedList
  printList() {
    if (!this.head) return "List is empty";
    let currentNode = this.head;
    const result = [];

    while (currentNode) {
      result.push(currentNode.data);
      currentNode = currentNode.next;
    }
    console.log(result.join(" -> "));
  }
}
const myLL = new SinglyLinkedList();
myLL.insert(4);
myLL.insert(5);
myLL.insert(6);

myLL.insertAfterNode(6, 10);
myLL.deleteByKey(6);
myLL.printList();
myLL.reverseLinkedList();
myLL.printList()

// console.log(myLL);
