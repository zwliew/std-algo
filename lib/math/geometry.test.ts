import { rectCircleIntersect } from './geometry';

test('rectCircleIntersect swaps the coordinates of the rectangle correctly', () => {
  const CASES: any[][] = [
    [1, 0, 0, 1, -1, 3, 1, true],
    [1, 0, 0, 3, 1, 1, -1, true],
    [1, 0, 0, 3, -1, 1, 1, true],
    [1, 0, 0, 1, 1, 3, -1, true],
  ];
  for (let [rad, cx, cy, x1, y1, x2, y2, expected] of CASES) {
    expect(rectCircleIntersect(rad, cx, cy, x1, y1, x2, y2)).toEqual(expected);
  }
});

test('rectCircleIntersect returns the correct value', () => {
  const CASES: any[][] = [
    [1, 0, 0, 1, -1, 3, 1, true],
    [1, 0, 0, 3, 1, 1, -1, true],
    [1, 0, 0, 3, -1, 1, 1, true],
    [1, 0, 0, 1, 1, 3, -1, true],
    [1, 0, 0, -1, 0, 0, 1, true],
    [1, 1, 1, -3, -3, 3, 3, true],
    [1, 1, 1, 1, -3, 2, -1, false],
  ];
  for (let [rad, cx, cy, x1, y1, x2, y2, expected] of CASES) {
    expect(rectCircleIntersect(rad, cx, cy, x1, y1, x2, y2)).toEqual(expected);
  }
});
