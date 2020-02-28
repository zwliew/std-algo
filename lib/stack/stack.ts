export default class Stack {
  private arr = [];

  push(item: any) {
    this.arr.push(item);
  }

  pop() {
    if (this.empty()) {
      throw Error('Cannot pop from an empty stack');
    }
    return this.arr.pop();
  }

  top() {
    return this.arr[this.arr.length - 1];
  }

  size() {
    return this.arr.length;
  }

  empty() {
    return this.size() === 0;
  }
}
