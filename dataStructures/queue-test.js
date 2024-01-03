class queue {
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
    } else {
      return this.items[this.lowestCount];
    }
  }
  clear() {
    this.items = {};
    this.count = 0;
    this.lowestCount = 0;
  }
}

myQueue = new queue();
myQueue.enqueue(1);
myQueue.enqueue(2);
myQueue.enqueue(5);
myQueue.enqueue(20);
const emp = myQueue.isEmpty();
const del = myQueue.dequeue();
const siz = myQueue.size();
const pek = myQueue.peak();
console.log(myQueue.items);
console.log(emp);
console.log(siz);
console.log(del);
console.log(pek);
