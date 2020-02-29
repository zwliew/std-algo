import { randInt, randNumber } from './random';

const TEST_RUNS = 10;

test('randInt generates integer from min through max', () => {
  for (let i = 0; i < TEST_RUNS; ++i) {
    for (let j = i + 1; j < TEST_RUNS; ++j) {
      const x = randInt(i, j);
      expect(x).toBeLessThan(j);
      expect(x).toBeGreaterThanOrEqual(i);
    }
  }
});

test('randInt generates integer', () => {
  for (let i = 0; i < TEST_RUNS; ++i) {
    for (let j = i + 1; j < TEST_RUNS; ++j) {
      const x = randInt(i, j);
      expect(x).toEqual(Math.floor(x));
      expect(x).toEqual(Math.ceil(x));
    }
  }
});

test('randNumber generates number from min through max', () => {
  for (let i = 0; i < TEST_RUNS; ++i) {
    for (let j = i + 1; j < TEST_RUNS; ++j) {
      const x = randNumber(i, j);
      expect(x).toBeLessThan(j);
      expect(x).toBeGreaterThanOrEqual(i);
    }
  }
});

test('randNumber generates number', () => {
  for (let i = 0; i < TEST_RUNS; ++i) {
    for (let j = i + 1; j < TEST_RUNS; ++j) {
      const x = randNumber(i, j);
      expect(typeof x).toEqual('number');
    }
  }
});
