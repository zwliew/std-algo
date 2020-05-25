/**
 * Clamps the given value to be within the boundaries given.
 * @param {number} val The value to be clamped
 * @param {number} lo The lower boundary to clamp to
 * @param {number} hi The upper boundary to clamp to
 */
export function clamp(val: number, lo: number, hi: number) {
  return val < lo ? lo : val > hi ? hi : val;
}
