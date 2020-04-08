/**
 * Returns true if the circle with radius `rad` and centre coordinates (`cx`, `cy`)
 * intersects with the rectangle with opposite corners (`x1`, `y1`) and (`x2`, `y2`).
 *
 * @param rad {number} The radius of the circle.
 * @param cx {number} The x-coordinate of the centre of the circle.
 * @param cy {number} The y-coordinate of the centre of the circle.
 * @param x1 {number} The x-coordinate of the a corner of the rectangle.
 * @param y1 {number} The y-coordinate of the a corner of the rectangle.
 * @param x2 {number} The x-coordinate of the opposite corner of the rectangle.
 * @param y2 {number} The y-coordinate of the opposite corner of the rectangle.
 *
 * @returns {boolean} true if the specified circle intersects with the specified rectangle.
 */
export function rectCircleIntersect(
  rad: number,
  cx: number,
  cy: number,
  x1: number,
  y1: number,
  x2: number,
  y2: number
): boolean {
  if (x1 > x2) {
    let tmp = x1;
    x1 = x2;
    x2 = tmp;
  }

  if (y1 > y2) {
    let tmp = y1;
    y1 = y2;
    y2 = tmp;
  }

  let x = cx;
  if (x1 > cx) {
    x = x1;
  } else if (x2 < cx) {
    x = x2;
  }

  let y = cy;
  if (y1 > cy) {
    y = y1;
  } else if (y2 < cy) {
    y = y2;
  }

  // Note: There is a possibility of overflow here.
  return (x - cx) ** 2 + (y - cy) ** 2 <= rad ** 2;
}
