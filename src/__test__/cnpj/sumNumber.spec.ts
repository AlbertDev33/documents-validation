import { SumNumbers } from '@src/cnpj/sumNumbers';

type ISutType = {
  sut: SumNumbers;
};

const makeStub = (): ISutType => {
  const sut = new SumNumbers();

  return {
    sut,
  };
};

describe('Sum CNPJ numbers', () => {
  it('should return sum value = 214', () => {
    const { sut } = makeStub();

    const cnpj = '11444777000161';
    const sutSum = sut.execute(cnpj);
    const expectedSumValue = 214;

    expect(sutSum).toBe(expectedSumValue);
  });

  it('should return sum value = 214', () => {
    const { sut } = makeStub();

    const cnpj = '62466493000107';
    const sutSum = sut.execute(cnpj);
    const expectedSumValue = 231;

    expect(sutSum).toBe(expectedSumValue);
  });
});
