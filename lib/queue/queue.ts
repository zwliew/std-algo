export interface Queue<T> {
  size(): number;
  getFront(): T;
  getBack(): T;
  push(item: T): void;
  pop(): T;
  empty(): boolean;
  clear(): void;
}
