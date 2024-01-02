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
  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }

  clear(){
    this.items=[]
  }
}

const myStack = new Stack();

myStack.push(1);
myStack.push(2);
myStack.push(3);
const pek = myStack.peek();
const full = myStack.isEmpty();

const theSize = myStack.size();

//myStack.pop();
console.log(myStack.items);
console.log(pek);
console.log(full);
console.log(theSize);
