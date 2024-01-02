class Stack {
  constructor() {
    this.count = 0;
    this.items = {};
  }
  push(element) {
    this.items[this.count] = element;
    this.count++;
  }
  pop(){

  }
  size(){
this.count
  }
}
const myStack = new Stack();
myStack.push(1);
myStack.push(2);
myStack.push(3);
console.log(myStack.items);
