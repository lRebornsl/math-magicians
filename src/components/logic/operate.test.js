import operate from './operate';

describe('Operate Tests', () => {
  test('1 + 2 should return 3', () => {
    expect(operate(1, 2, '+')).toBe('3');
  });
  test('1 - 2 should return -1', () => {
    expect(operate(1, 2, '-')).toBe('-1');
  });
  test('1 x 2 should return 2', () => {
    expect(operate(1, 2, 'x')).toBe('2');
  });
  test('10 ÷ 2 should return 5', () => {
    expect(operate(10, 2, '÷')).toBe('5');
  });
});
