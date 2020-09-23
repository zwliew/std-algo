export interface Stack<T> {
  push(item: T): void;
  pop(): T;
  top(): T;
  size(): number;
  empty(): boolean;
  clear(): void;
}
