/**
 * Returns the greatest common divisor of integers a and b.
 *
 * @param a {number} An integer
 * @param b {number} An integer
 *
 * @returns {number} The greatest common divisor of integers `a` and `b`.
 */
export function gcd(a: number, b: number): number {
  let tmp;
  while (b) {
    tmp = a % b;
    a = b;
    b = tmp;
  }
  return a;
}

/**
 * Returns the least common multiple of integers a and b.
 *
 * @param a {number} An integer
 * @param b {number} An integer
 *
 * @returns {number} The least common multiple of integers `a` and `b`.
 */
export function lcm(a: number, b: number): number {
  return (a / gcd(a, b)) * b;
}
