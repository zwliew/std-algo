export class Counter<K> {
  private ctr: Map<K, number>;

  constructor() {
    this.ctr = new Map();
  }

  add(key: K, val: number) {
    if (!Number.isInteger(val)) {
      throw Error("Given value is not an integer.");
    }
    let curVal = this.ctr.get(key);
    if (curVal === undefined) {
      curVal = 0;
    }
    this.ctr.set(key, curVal + val);
  }

  delete(key: K) {
    this.ctr.delete(key);
  }

  get(key: K) {
    let curVal = this.ctr.get(key);
    if (curVal === undefined) {
      this.ctr.set(key, 0);
      curVal = 0;
    }
    return curVal;
  }
}
