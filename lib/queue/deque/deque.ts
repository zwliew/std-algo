export interface Deque {
  size: number;
  empty(): boolean;
  pushFront(item: any): void;
  pushBack(item: any): void;
  popFront(): any;
  popBack(): any;
  clear(): void;
  front(): any;
  back(): any;
}
