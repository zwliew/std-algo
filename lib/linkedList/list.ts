export interface List<T> {
  size(): number;
  empty(): boolean;
  pushFront(item: T): void;
  pushBack(item: T): void;
  getFront(): T;
  getBack(): T;
  popFront(): T;
  popBack(): T;
  clear(): void;
}
