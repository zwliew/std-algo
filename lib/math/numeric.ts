/**
 * Returns the greatest common divisor of integers a and b.
 *
 * @param a {number} An integer
 * @param b {number} An integer
 *
 * @returns {number} The greatest common divisor of integers `a` and `b`.
 */
export function gcd(a: number, b: number): number {
  while (b) {
    a = a % b;
    [a, b] = [b, a];
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

/**
 * Computes the quotient and remainder of the division of the numerator `a` by the denominator `b`.
 *
 * @param a {number} The numerator
 * @param b {number} The denominator
 *
 * @returns {{quotient: number, remainder: number}} An object comprising `quotient` and a `remainder` properties.
 */
export function div(
  a: number,
  b: number
): { quotient: number; remainder: number } {
  return {
    quotient: Math.floor(a / b),
    remainder: a % b,
  };
}
