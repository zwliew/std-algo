export interface Deque<T> {
  size(): number;
  empty(): boolean;
  pushFront(item: T): void;
  pushBack(item: T): void;
  popFront(): T;
  popBack(): T;
  clear(): void;
  getFront(): T;
  getBack(): T;
}
