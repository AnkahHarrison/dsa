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
    return this.size === 0;
  }
  size() {
    return this.count - this.lowestCount;
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
  peak() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.lowestCount];
  }
  clear() {
    //set all value to default
    this.items = {};
    this.count = 0;
    this.lowestCount = 0;
  }
}

const myQueue = new Queue();
myQueue.enqueue(1);
myQueue.enqueue(2);
myQueue.enqueue(100);
const rem = myQueue.dequeue();
const emt = myQueue.isEmpty();
const sz = myQueue.size();
console.log(myQueue.items);
console.log(emt);
console.log(sz);
console.log(rem);
