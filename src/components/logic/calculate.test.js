import calculate from './calculate';

describe('Calculate Tests', () => {
  test('Button AC return a null properties object', () => {
    const obj = {
      total: 62,
      next: null,
      operation: '+',
    };

    const button = 'AC';

    const result = calculate(obj, button);

    expect(result).toEqual({
      total: null,
      next: null,
      operation: null,
    });
  });

  test('Button 0 return a void object', () => {
    const obj = {
      total: null,
      next: '0',
      operation: null,
    };

    const button = '0';

    const result = calculate(obj, button);

    expect(result).toStrictEqual({});
  });
});
