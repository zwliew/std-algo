import { Deque } from '.';

export default class ArrayDeque implements Deque {
  private arr = new Array(16);
  private front = -1;
  private back = 0;

  size = 0;

  empty(): boolean {
    return this.size === 0;
  }

  getFront(): any {
    if (this.size === 0) {
      throw Error('Cannot get front of empty deque');
    }
    return this.arr[this.front];
  }

  getBack(): any {
    if (this.size === 0) {
      throw Error('Cannot get back of empty deque');
    }
    return this.arr[ArrayDeque.dec(this.back, this.arr.length)];
  }

  pushFront(item: any) {
    const newFront = ArrayDeque.dec(this.front, this.arr.length);
    this.arr[newFront] = item;
    this.front = newFront;
    ++this.size;
    this.resizeIfNeeded();
  }

  pushBack(item: any) {
    this.arr[this.back] = item;
    this.back = ArrayDeque.inc(this.back, this.arr.length);
    ++this.size;
    this.resizeIfNeeded();
  }

  popFront() {
    if (this.empty()) {
      throw Error('Cannot pop from an empty deque');
    }
    const item = this.arr[this.front];
    this.front = ArrayDeque.inc(this.front, this.arr.length);
    --this.size;
    return item;
  }

  popBack() {
    if (this.empty()) {
      throw Error('Cannot pop from an empty deque');
    }
    this.back = ArrayDeque.dec(this.back, this.arr.length);
    --this.size;
    return this.arr[this.back];
  }

  clear(): void {
    this.arr = [];
    this.front = -1;
    this.back = 0;
    this.size = 0;
  }

  private resizeIfNeeded() {
    if (this.size === this.arr.length) {
      this.resize(this.arr.length * 2);
    }
  }

  private resize(newSize: number) {
    const newArr = new Array(newSize);
    for (
      let idx = this.front;
      idx !== this.back;
      idx = ArrayDeque.inc(idx, this.arr.length)
    ) {
      newArr[idx] = this.arr[idx];
    }
    this.arr = newArr;
    this.front = 0;
    this.back = this.size;
  }

  private static inc(idx: number, mod: number) {
    return (idx + 1) % mod;
  }

  private static dec(idx: number, mod: number) {
    return (idx - 1 + mod) % mod;
  }
}
