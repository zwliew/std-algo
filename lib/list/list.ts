class Node {
  next: Node;
  prev: Node;
  item: any;

  constructor(prev, item, next) {
    this.item = item;
    this.next = next;
    this.prev = prev;
  }
}

class List {
  size: number = 0;
  front: Node = null;
  back: Node = null;

  empty(): boolean {
    return this.size === 0;
  }

  pushFront(item: any) {
    const newNode = new Node(null, item, this.front);
    if (this.front) {
      this.front.prev = newNode;
    } else {
      this.back = newNode;
    }
    this.front = newNode;
    ++this.size;
  }

  pushBack(item: any) {
    const newNode = new Node(this.back, item, null);
    if (this.back) {
      this.back.next = newNode;
    } else {
      this.front = newNode;
    }
    this.back = newNode;
    ++this.size;
  }

  popFront() {
    const f = this.front;
    if (f === null) {
      throw Error('List is empty');
    }
    const item = f.item;
    const next = f.next;
    f.item = null;
    f.next = null;
    this.front = next;
    if (!next) {
      this.back = null;
    } else {
      next.prev = null;
    }
    --this.size;
    return item;
  }

  popBack() {
    const b = this.back;
    if (b === null) {
      throw Error('List is empty');
    }
    const item = b.item;
    const prev = b.prev;
    b.item = null;
    b.prev = null;
    this.back = prev;
    if (!prev) {
      this.back = null;
    } else {
      prev.next = null;
    }
    --this.size;
    return item;
  }

  clear() {
    for (let x = this.front; x !== null; ) {
      const next = x.next;
      x.item = null;
      x.next = null;
      x.prev = null;
      x = next;
    }
    this.front = this.back = null;
    this.size = 0;
  }

  insertBefore(node: Node, item: any) {
    if (node === null) {
      throw Error("Can't insert before a null node");
    }

    const newNode = new Node(node.prev, item, node);
    node.prev = newNode;
    if (node.prev === null) {
      this.front = newNode;
    } else {
      node.prev.next = newNode;
    }
    ++this.size;
  }

  insert(idx: number, item: any) {
    if (idx < 0 || idx > this.size) {
      throw Error('Index out of bounds');
    }

    if (idx === this.size) {
      this.pushBack(item);
      return;
    }

    let x = this.front;
    for (; idx > 0; --idx, x = x.next);
    this.insertBefore(x, item);
  }
}

export default List;
