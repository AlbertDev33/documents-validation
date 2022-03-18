import { DigitValidation } from '@src/pis/DigitValidation';

interface ISutType {
  sut: DigitValidation;
}

const stub = (): ISutType => {
  const sut = new DigitValidation();

  return {
    sut,
  };
};

describe('Digit Validation', () => {
  it('should return true is valid pis', () => {
    const { sut } = stub();
    const pis = '49053197570';

    const isValid = sut.execute(pis);
    expect(isValid).toBe(true);
  });
});
