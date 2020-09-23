import { List } from "./list";

class Node<T> {
  next: Node<T> | null | undefined;
  prev: Node<T> | null | undefined;
  item: T | null;

  constructor(
    item: T | null,
    prev: Node<T> | null | undefined,
    next: Node<T> | null | undefined
  ) {
    this.item = item;
    this.next = next;
    this.prev = prev;
  }
}

export class LinkedList<T> implements List<T> {
  size: number = 0;
  front: Node<T> = new Node<T>(null, null, null);
  back: Node<T> = new Node<T>(null, null, null);

  /**
   * Returns true if the list is empty.
   *
   * @returns {boolean} true if the list is empty; false otherwise.
   */
  empty(): boolean {
    return this.size === 0;
  }

  /**
   * Inserts the given element to the front of the list.
   *
   * @param item {T} The element to be inserted.
   *
   * @returns {void}
   */
  pushFront(item: T): void {
    const newNode = new Node(item, this.front, this.front.next);
    this.front.next = newNode;
    if (this.empty()) {
      this.back.prev = newNode;
    }
    ++this.size;
  }

  /**
   * Inserts the given element to the back of the list.
   *
   * @param item {T}
   *
   * @returns {void}
   */
  pushBack(item: T): void {
    const newNode = new Node(item, this.back.prev, this.back);
    this.back.prev = newNode;
    if (this.empty()) {
      this.front.next = newNode;
    }
    ++this.size;
  }

  /**
   * Removes and returns the first element in the list.
   *
   * @returns {T} The first element in the list.
   */
  popFront(): T {
    if (this.empty()) {
      throw Error("List is empty.");
    }
    const item = this.front.next?.item;
    this.front.next = this.front.next?.next;
    --this.size;
    if (this.empty()) {
      this.back.prev = this.back.prev?.prev;
    }
    return item!;
  }

  /**
   * Removes and returns the last element in the list.
   *
   * @returns {T}
   */
  popBack(): T {
    if (this.empty()) {
      throw Error("List is empty.");
    }
    const item = this.back.prev?.item;
    this.back.prev = this.back.prev?.prev;
    --this.size;
    if (this.empty()) {
      this.front.next = this.front.next?.next;
    }
    return item!;
  }

  /**
   * Removes all the elements in the list.
   *
   * @returns {void}
   */
  clear(): void {
    this.front.next = this.back.prev = null;
    this.size = 0;
  }

  /**
   * Returns the first element in the list.
   *
   * @returns {T}
   */
  getFront(): T {
    if (this.empty()) {
      throw Error("List is empty.");
    }
    return this.front.next?.item!;
  }

  /**
   * Returns the last element in the list.
   *
   * @returns {T}
   */
  getBack(): T {
    if (this.empty()) {
      throw Error("List is empty.");
    }
    return this.back.prev?.item!;
  }

  // TODO: Implement more linked list methods
  //   insertBefore(node: Node | null, item: T) {
  //     if (node === null) {
  //       throw Error("Can't insert before a null node");
  //     }
  //     const newNode = new Node(node.prev, item, node);
  //     node.prev = newNode;
  //     if (node.prev === null) {
  //       this.front = newNode;
  //     } else {
  //       node.prev.next = newNode;
  //     }
  //     ++this.size;
  //   }

  //   insert(idx: number, item: T) {
  //     if (idx < 0 || idx > this.size) {
  //       throw Error("Index out of bounds");
  //     }

  //     if (idx === this.size) {
  //       this.pushBack(item);
  //       return;
  //     }

  //     if (idx === 0) {
  //       this.pushFront(item);
  //       return;
  //     }

  //     let x = this.front;
  //     for (; idx > 0; --idx, x = x?.next || null);
  //     this.insertBefore(x, item);
  //   }
  // }
}
