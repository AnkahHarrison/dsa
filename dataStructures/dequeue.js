class Deque {
  constructor() {
    this.count = 0;
    this.items = {};
    this.lowestCount = 0;
  }
  addFront(element) {}
  addBack(element) {
    this.items[this.count] = element;
    this.count++;
  }
}
