class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  prepend(item) {
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

}
