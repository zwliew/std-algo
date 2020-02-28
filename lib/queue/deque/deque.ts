export interface Deque {
  size: number;
  empty(): boolean;
  pushFront(item: any);
  pushBack(item: any);
  popFront(): any;
  popBack(): any;
  clear(): void;
  front(): any;
  back(): any;
}
