class Queue {
  constructor() {
    this.items = {};
    this.count = 0;
    this.lowestCount = 0;
  }
  enqueue(element) {
    this.items[this.count] = element;
    this.count++;
  }

  isEmpty() {
    this.size === 0;
  }
  dequeue() {
    if (this.isEmpty()) {
      return undefined;
    } else {
      const result = this.items[this.lowestCount];
      delete this.items[this.lowestCount];
      this.lowestCount++;
      return result;
    }
  }
  size() {
    return this.count - this.lowestCount;
  }
}

const myQueue = new Queue();

myQueue.enqueue(1);
myQueue.enqueue(2);
myQueue.enqueue(3);
const del = myQueue.dequeue();
console.log(del);
console.log(myQueue.items);
