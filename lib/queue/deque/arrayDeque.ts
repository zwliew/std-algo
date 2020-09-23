import { Deque } from ".";

export default class ArrayDeque implements Deque {
  private arr = new Array(16);
  private front = -1;
  private back = -1;

  size = 0;

  empty(): boolean {
    return this.size === 0;
  }

  getFront(): any {
    if (this.empty()) {
      throw Error("Cannot get front of empty deque");
    }
    return this.arr[this.front];
  }

  getBack(): any {
    if (this.empty()) {
      throw Error("Cannot get back of empty deque");
    }
    return this.arr[this.back];
  }

  pushFront(item: any) {
    if (this.empty()) {
      this.front = this.back = 0;
    } else {
      this.front = this.dec(this.front);
    }
    this.arr[this.front] = item;
    ++this.size;
    this.resizeIfNeeded();
  }

  pushBack(item: any) {
    if (this.empty()) {
      this.front = this.back = 0;
    } else {
      this.back = this.inc(this.back);
    }
    this.arr[this.back] = item;
    ++this.size;
    this.resizeIfNeeded();
  }

  popFront() {
    if (this.empty()) {
      throw Error("Cannot pop from an empty deque");
    }
    const item = this.arr[this.front];
    this.front = this.inc(this.front);
    --this.size;
    return item;
  }

  popBack() {
    if (this.empty()) {
      throw Error("Cannot pop from an empty deque");
    }
    const item = this.arr[this.back];
    this.back = this.dec(this.back);
    --this.size;
    return item;
  }

  clear(): void {
    this.arr = new Array(16);
    this.front = -1;
    this.back = -1;
    this.size = 0;
  }

  private resizeIfNeeded() {
    if (this.size === this.arr.length) {
      this.resize(this.arr.length * 2);
    }
  }

  private resize(newSize: number) {
    const newArr = new Array(newSize);
    for (let idx = this.front, i = 0; i < this.size; idx = this.inc(idx), ++i) {
      newArr[i] = this.arr[idx];
    }
    this.arr = newArr;
    this.front = 0;
    this.back = this.size - 1;
  }

  private inc(idx: number) {
    return (idx + 1) % this.arr.length;
  }

  private dec(idx: number) {
    return (idx - 1 + this.arr.length) % this.arr.length;
  }
}
