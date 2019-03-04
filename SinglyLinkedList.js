/*
 node -> node -> node -> node -> null
 dynamic size, better memory usage than arrays
 O(1) insertion for front/ end, O(n) at specifc index
 O(1) deletion for front only, O(n) at specfic index/ end
 O(n) searching/ access in non-contiguous memory
*/


class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  addHead(item) {
    const newNode = new Node(item);

    if(!this.tail) {
      this.head = newNode;
      this.tail = this.head;
      return this;
    }

    newNode.next = this.head;
    this.head = newNode;

    this.length++;
    return this;
  }

  removeHead() {
    if(!this.head) return undefined;
    this.length--;

    const removedHead = this.head;
    this.head = removedHead.next;
    removedHead.next = null;

    if(!this.length) this.tail = null;

    return removedHead;
  }

  addTail(item) {
    const newNode = new Node(item);

    if(!this.head) {
      this.head = newNode;
      this.tail = this.head;
      return this;
    }

    this.tail.next = newNode;
    this.tail = newNode;

    this.length++;
    return this;
  }

  removeTail() {
    if(!this.head) return null;
    this.length--;

    let currentNode = this.head;
    let newTail;

    while(currentNode.next) {
      newTail = currentNode;
      currentNode = currentNode.next;
    }

    this.tail = newTail;
    this.tail.next = null;

    if(!this.length) this.head = this.tail = null;

    return currentNode;
  }

  indexOf(item) {
    let currentNode = this.head;
    let index = -1;

    while(currentNode) {
      index++;
      if(currentNode.value === item) {
        return index;
      }
      currentNode = currentNode.next;
    }

    return false;
  }

  getItemAt(index) {
    if(index < 0 || index >= this.length) return undefined;

    let currentNode = this.head;
    let count = 0;

    while(count < index) {
      count++;
      currentNode = currentNode.next;
    }

    return currentNode;
  }

  setValue(index, newValue) {
    const foundNode = this.getItemAt(index);

    if(foundNode) {
      foundNode.value = newValue;
      return true;
    }

    return false;
  }

  addItemAt(item, index) {
    if(index < 0 || index > this.length) return false;
    if(index === 0) return this.addHead(item);
    if(index === this.length) return this.addTail(item);

    const newNode = new Node(item);

    const previousNode = this.getItemAt(index - 1);
    const followingNode = previousNode.next;

    previousNode.next = newNode;
    newNode.next = followingNode;

    this.length++;
    return this;
  }

  removeAt(index) {
    let currentNode = this.head;
    let previousNode = null;
    let count = 0;

    if(index < 0 || index >= this.length) return false;
    if(index === 0) return this.removeHead();
    if(index === this.length - 1) return this.removeTail();

    const previousNode = this.getItemAt(index - 1);
    const removeNode = previousNode.next;
    previousNode.next = removeNode.next;

    removeNode.next = null;

    this.length--;
    return removeNode;
  }

  reverseList() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;

    let followingNode;
    let previousNode = null;

    for(let i = 0; i < this.length; i++) {
      followingNode = node.next;
      node.next = previousNode;
      previousNode = node;
      node = followingNode;
    }

    return this;
  }
}



class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
