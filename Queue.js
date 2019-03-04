/*
 Queue: maintains order (FIFO)
  O(1) insertion/ deletion
*/

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(item) {
    const newNode = new Node(item);

    if(!this.first) {
      this.first = newNode;
      this.last = this.first;
      return ++this.size;
    }

    this.last.next = newNode;
    this.last = newNode;

    return ++this.size;
  }


  dequeue() {
    if(!this.first) return null;
    this.length--;

    const removedNode = this.first;

    this.first = this.first.next;
    removedNode.next = null;

    if(!this.length) this.first = this.last = null;

    return removedNode;
  }

}



class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
