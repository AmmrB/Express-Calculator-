import { findMean, findMedian, findMode } from './helpers';

describe('findMedian', () => {
  test('finds the median of an even set', () => {
    expect(findMedian([1, -1, 4, 2])).toBe(1.5);
  });

  test('finds the median of an odd set', () => {
    expect(findMedian([1, -1, 4])).toBe(1);
  });
});

describe('findMean', () => {
  test('finds the mean of an empty array', () => {
    expect(findMean([])).toBe(0);
  });

  test('finds the mean of an array of numbers', () => {
    expect(findMean([1, -1, 4, 2])).toBe(1.5);
  });
});

describe('findMode', () => {
  test('finds the mode', () => {
    expect(findMode([1, 1, 1, 2, 2, 3])).toBe(1);
  });
});