export interface List {
  empty(): boolean;
  pushFront(item: any): void;
  pushBack(item: any): void;
  getFront(): any;
  getBack(): any;
  popFront(): any;
  popBack(): any;
  clear(): void;
}
