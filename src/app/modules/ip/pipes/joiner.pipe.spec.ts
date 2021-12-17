import { JoinerPipe } from './joiner.pipe';

class Foo {
  public bar() {
    return '1';
  }
}

describe('JoinerPipe', () => {
  let pipe = new JoinerPipe();
  beforeEach(() => {
    pipe = new JoinerPipe();
  });

  [
    { expectedValue: '1-2', joiner: '-', values: ['1', '2'] },
    { expectedValue: '1', joiner: '-', values: ['1'] },
    { expectedValue: '', joiner: '-', values: [] },
  ].forEach(({ expectedValue, joiner, values }) => {
    it(`should return ${expectedValue}`, () => {
      const result = pipe.transform(joiner, ...values);

      expect(result).toEqual(expectedValue);
    });
  });
});
