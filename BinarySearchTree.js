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

}
