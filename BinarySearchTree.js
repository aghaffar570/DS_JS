// O(log n) insertion
// O(log n) searching


class BinarySearchTree {
  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
    this.length = 0;
  }

  insert(val) {
    const direction = val < this.value ? 'left' : 'right';

    if(this[direction]) this[direction].insert(val);
    else this[direction] = new BinarySearchTree(val);

    this.length++
  }

  contains(val) {
    if(val === this.value) return true;

    const direction = val < this.value ? 'left' : 'right';

    if(this[direction]) return this[direction].contains(val);
    else return false;
  }

  depthFirst(callback, option = 'in-order') {
    if(option === 'pre-order') callback(this.value);

    if(this.left) this.depthFirst(callback, option)

    if(option === 'in-order') callback(this.value);

    if(this.right) this.depthFirst(callback, option)

    if(option === 'post-order') callback(this.value);
  }

  breadthFirst(callback) {
    const queue = [this];

    while (queue.length) {
      const current = queue.shift();
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
      callback(current.value);
    }
  }

}
