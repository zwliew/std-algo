/**
 * Returns a new string that is the reverse of the given string.
 *
 * @param orig The string to be reversed.
 */
export function reversed(orig: string) {
  return [...orig].reverse().join("");
}
