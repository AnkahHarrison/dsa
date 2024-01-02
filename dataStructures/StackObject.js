class Stack {
  constructor() {
    this.items = {};
    this.count = 0;
  }
  push(element) {
    this.items[this.count] = element;
    this.count++;
  }
  pop() {
    this.items;
  }

  size() {
    return this.count;
  }

  isEmpty(){
    this.count ===0
  }
  
}

const myStack = new Stack();

myStack.push(5);
myStack.push(6);
myStack.push(7);
myStack.push(8);
myStack.push(9);

console.log(myStack.items);
console.log(myStack.size());
