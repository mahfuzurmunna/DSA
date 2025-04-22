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
    if (!this.head) return "List is empty";
    if (this.head.data === key) {
      this.head = null;
    }
    let currentNode = this.head;
    while (currentNode.next !== null) {
      if (currentNode.next.data === data) {
        currentNode.next = currentNode.next.next;
        return;
      }
      currentNode = currentNode.next;
    }
    console.log("No node found with the given key: ", key);
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
myLL.insert(7);
myLL.insertAfterNode(6, 10);

myLL.deleteLastNode();
myLL.deleteLastNode();
myLL.deleteLastNode();
myLL.deleteLastNode();
myLL.deleteLastNode();
console.log(myLL);
