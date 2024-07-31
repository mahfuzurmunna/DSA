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

  getAt(index) {
    if (!this.head) return null;
    let current = 0;
    let node = this.head;

    while (node.next) {
      if (index === current) {
        return node.data;
      }
      node = node.next;
      current++;
    }
    return node.data;
  }

  add(value) {
    const newNode = new Node(value);
    if (!this.head) return (this.head = newNode);

    let prevNode = this.head;
    while (prevNode.next) {
      prevNode = prevNode.next;
    }
    return (prevNode.next = newNode);
  }

  delete() {
    if (!this.head) return null;

    if (!this.head.next) {
      return (this.head = null);
    }

    let lastNode = this.head.next;

    while (lastNode.next) {
      lastNode = lastNode.next;
    }

    return (lastNode = null);
  }

  printLinkedList() {
    if (!this.head) return null;
    const listValues = [];
    // listValues.push(this.head.data);
    let currentNode = this.head;

    while (currentNode) {
      listValues.push(currentNode.data);
      currentNode = currentNode.next;
    }
    return listValues.join(" -> ");
  }

  size() {
    if (!this.head) return null;
    let current = this.head;
    let size = 1;
    while (current.next) {
      size++;
      current = current.next;
    }
    return size;
  }
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

  findMiddle() {
    if (!this.head) return "LL is empty";
    let fast = this.head;
    let slow = this.head;

    while (fast && fast.next) {
      fast = fast.next.next;
      slow = slow.next;
    }
    return slow;
  }
}

const ll = new SinglyLinkedList();

ll.add(100);
ll.add(200);
ll.add(300);
ll.add(400);
ll.add(500);
ll.add(600);

// console.log(ll.printLinkedList());

ll.delete();
// console.log(ll);

function reverseStr(str) {
  const ll = new SinglyLinkedList();
  for (let word of str) {
    ll.add(word);
  }

  ll.reverse();
  const result = ll.printLinkedList();

  return result.split(" -> ").join("");
}

// console.log(reverseStr("muina"));

function findMiddleOfStr(str) {
  const ll = new SinglyLinkedList();
  for (let word of str) {
    ll.add(word);
  }
  const middleLetter = ll.findMiddle();
  return middleLetter.data;
}

// console.log(findMiddleOfStr("muina"));

function findMiddleOfLl(list) {
  let fast = list.head;
  let slow = list.head;
  let count = 1;
  while (fast && fast.next) {
    count++;
    fast = fast.next.next;
    slow = slow.next;
  }
  return slow.data;
}
console.log(ll.printLinkedList());
console.log(findMiddleOfLl(ll));
