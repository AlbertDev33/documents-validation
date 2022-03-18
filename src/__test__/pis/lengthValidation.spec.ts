import { LengthValidation } from '@src/pis/LengthValidation';

interface ISutType {
  sut: LengthValidation;
}

const stub = (): ISutType => {
  const sut = new LengthValidation();

  return {
    sut,
  };
};

describe('PIS Length Validation', () => {
  it('should return true is valid length', () => {
    const { sut } = stub();
    const pis = '55636637228';
    const isValid = sut.execute(pis);
    expect(isValid).toBe(true);
  });

  it('should return false is invalid length', () => {
    const { sut } = stub();
    const pis = '556366372288';
    const isValid = sut.execute(pis);
    expect(isValid).toBe(false);
  });
});
