/**
 * Returns a random integer within the range [min, max).
 * max is excluded from the range, while min is included.
 * @param {number} min The minimum integer that can be generated.
 * @param {number} max The maximum integer that can be generated.
 * @returns {number} A randomly-generated integer within the range [min, max).
 */
export function randInt(min: number, max: number): number {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

/**
 * Returns a random number within the range [min, max).
 * max is excluded from the range, while min is included.
 * @param {number} min The minimum number that can be generated.
 * @param {number} max The maximum number that can be generated.
 * @returns {number} A randomly-generated number within the range [min, max).
 */
export function randNumber(min: number, max: number): number {
  return Math.random() * (max - min) + min;
}
