
class PriorityQueue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  insert(item, priority) {
    const newNode = new Node(item, priority);

    if(!this.head) {
      this.head = newNode;
      this.tail = this.head;
      return this
    }

    if(this.tail.priority < priority) {

      let currentNode = this.head;
      let previousNode = null;

      while(currentNode) {
        if(currentNode.priority <= priority) {
          break;
        }
        previousNode = currentNode;
        currentNode = currentNode.next;
      }

      if(!previousNode) {
        this.head = newNode
      }else{
        previousNode.next = newNode
      }
      newNode.next = currentNode

    }else {
      this.tail.next = newNode;
      this.tail = newNode
    }

    this.length++
    return this
  }

  peek() {
    if(!this.head) return undefined;

    return this.head;
  }

  popMax() {
    if(!this.head) return undefined;

    const removeMax = this.head
    this.head = removeMax.next;
    removeMax.next = null;

    return removeMax
  }

}


class Node {
  constructor(value, priority){
    this.value = value;
    this.priority = priority
    this.next = null;
  }
}
