export function count<T>(arr: T[], val: T) {
  let count = 0;
  for (let el of arr) {
    if (el === val) {
      ++count;
    }
  }
  return count;
}

export function countIf<T>(arr: T[], pred: (el: T) => boolean) {
  let count = 0;
  for (let el of arr) {
    if (pred(el)) {
      ++count;
    }
  }
  return count;
}
