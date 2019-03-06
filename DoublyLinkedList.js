// node <-> node <-> node <-> node <-> node
// dynamic size, flexible but more memory than SinglyLinkedList
// O(1) insertion front/ end, O(n) specifc index
// O(1) deletion front/ end, O(n) specfic index
// O(n) searching/ access in non-contiguous memory (n / 2 => n)


class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  addToHead(val) {
    const newNode = new Node(val);

    if(!this.head) {
      this.head = newNode;
      this.tail = this.head;
      return this;
    }

    this.head.prev = newNode;
    newNode.next = this.head;
    this.head = newNode;


    this.length++;
    return this;
  }


  removeFromHead() {
    if(!this.head) return undefined;

    const removedHead = this.head;

    this.head = removedHead.next;
    this.head.prev = null;
    removedHead.next = null;

    if(!this.length) this.tail = null;

    this.length--;
    return removedHead
  }

  addToTail(val) {
    const newNode = new Node(val);

    if(!this.tail) {
      this.head = newNode;
      this.tail = this.head;
      return this;
    }

    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;

    this.length++;
    return this;
  }

  removeFromTail() {
    if(!removeTail) return undefined;
    this.length--;

    const removeTail = this.tail;

    this.tail = removeTail.prev;
    this.tail.next = null;
    removeTail.prev = null;

    if(!this.length) this.head = null;

    return removeTail;
  }

  getItemAt(index) {
    if(index < 0 || index >= this.length) return undefined;

    const direction = index >= Math.floor(this.length / 2)
      ? 'prev'
      : 'next';

    let currentNode, count, interval;

    if(direction === 'prev') {
      currentNode = this.tail;
      count = this.length - 1;
      interval = -1;
    }else {
      currentNode = this.head;
      count = 0;
      interval = 1;
    }

    while(count !== index) {
      currentNode = currentNode[direction];
      count += interval;
    }

    return current
  }

}



class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
    this.prev = null;
  }
}
