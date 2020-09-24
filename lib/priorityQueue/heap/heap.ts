export interface Heap<T> {
  size(): number;
  push(item: T): void;
  pop(): T;
  top(): T;
  empty(): boolean;
}
