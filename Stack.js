/*
 Stack: reverse order (LIFO)
  O(1) insertion/ deletion
*/

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  push(item) {
    const newNode = new Node(item);

    if(!this.last) {
      this.first = newNode;
      this.last = this.first;
      return ++this.length;
    }

    newNode.next = this.first;
    this.first = newNode

    return ++this.length;
  }

  pop() {
    if(!this.first) return null;
    this.length--;

    const removedNode = this.first;

    this.first = this.first.next;
    removedNode.next = null;

    if(!this.length) this.last = null;

    return removedNode;
  }

}



class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
