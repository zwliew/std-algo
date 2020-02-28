export function count(arr: any[], val: any) {
  let count = 0;
  for (let el of arr) {
    if (el === val) {
      ++count;
    }
  }
  return count;
}

export function countIf(arr: any[], pred: (el: any) => boolean) {
  let count = 0;
  for (let el of arr) {
    if (pred(el)) {
      ++count;
    }
  }
  return count;
}
