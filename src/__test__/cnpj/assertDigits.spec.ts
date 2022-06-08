import { AssertDigits } from '@src/cnpj/assertDigits';

type ISutType = {
  sut: AssertDigits;
};

const makeStub = (): ISutType => {
  const sut = new AssertDigits();

  return {
    sut,
  };
};

describe('Assert CNPJ digits', () => {
  it('should return true if the first digit is valid', () => {
    const { sut } = makeStub();

    const cnpjObjStub = {
      cnpj: '27355010000104',
      cnpjSummedNumber: 111,
      digit: 'first' as const,
    };
    const sutSum = sut.execute({ ...cnpjObjStub });

    expect(sutSum).toBe(true);
  });

  it('should return true if the second digit is valid', () => {
    const { sut } = makeStub();

    const cnpjObjStub = {
      cnpj: '27355010000104',
      cnpjSummedNumber: 95,
      digit: 'second' as const,
    };
    const sutSum = sut.execute({ ...cnpjObjStub });

    expect(sutSum).toBe(true);
  });

  it('should return false is invalid digit', () => {
    const { sut } = makeStub();

    const cnpjObjStub = {
      cnpj: '27355010000105',
      cnpjSummedNumber: 95,
      digit: 'second' as const,
    };
    const sutSum = sut.execute({ ...cnpjObjStub });

    expect(sutSum).toBe(false);
  });
});
