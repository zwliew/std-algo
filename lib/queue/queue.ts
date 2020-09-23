import { Deque } from "./deque";

class Queue {
  private deque = new Deque();

  front() {
    return this.deque.getFront();
  }

  back() {
    return this.deque.getBack();
  }

  push(item: any) {
    this.deque.pushBack(item);
  }

  pop(): any {
    return this.deque.popFront();
  }

  empty() {
    return this.deque.empty();
  }

  size() {
    return this.deque.size;
  }

  clear() {
    this.deque.clear();
  }
}

export default Queue;
