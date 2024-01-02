class Stack {
  constructor() {
    this.items = [];
  }
  push(item) {
    this.items.push(item);
  }
  pop(item) {
    this.items.pop(item);
  }

  peek() {
    return this.items[this.items.length - 1];
  }
  clear() {
    this.items = [];
  }

  size() {
    return this.items.length;
  }
}

const myStack = new Stack();
myStack.push(5);
myStack.push(6);
myStack.push(7);
const len = myStack.size();
const topElement = myStack.peek();
console.log(myStack.items);

console.log(topElement);
console.log(len);
