class Deque {
  constructor() {
    this.count = 0;
    this.items = {};
    this.lowestCount = 0;
  }
  addFront(element) {
    if (this.isEmpty()) {
      this.addBack(element);
    } else if (this.lowestCount > 0) {
      this.lowestCount--;
      this.items[this.lowestCount] = element;
    } else {
      for (let index = this.count; index > 0; index--) {
        this.items[index] = this.items[index - 1];
      }
      this.count++;
      this.lowestCount = 0;
      this.items[0] = element;
    }
  }
  addBack(element) {
    this.items[this.count] = element;
    this.count++;
  }
  isEmpty() {
    return this.size === 0;
  }
  size() {
    return this.count - this.lowestCount;
  }
}

const deque = new Deque();

const front = deque.addBack(1);
deque.addBack(19);
deque.addBack(17);
deque.addFront(568);
console.log(front);
console.log(deque.items);
