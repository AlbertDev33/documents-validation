import { DigitValidation } from '@src/pis/DigitValidation';
import { digitValidation } from '@src/pis/constants/constants';

interface ISutType {
  sut: DigitValidation;
}

const stub = (): ISutType => {
  const sut = digitValidation;

  return {
    sut,
  };
};

describe('Digit Validation', () => {
  const pis = [
    '82965927312',
    '49053197570',
    '74231307199',
    '27184417238',
    '16458624884',
    '47587920170',
    '08288289590',
    '94247252725',
  ];

  const invalidPis = [
    '82965927322',
    '49053197580',
    '74231307189',
    '27184417288',
    '16458624874',
    '47587920190',
    '08288289570',
    '94247252735',
  ];

  it('should return true is valid pis', () => {
    const { sut } = stub();
    pis.forEach(value => {
      const isValid = sut.execute(value);
      expect(isValid).toBe(true);
    });
  });

  it('should return false is valid pis', () => {
    const { sut } = stub();
    invalidPis.forEach(value => {
      const isValid = sut.execute(value);
      expect(isValid).toBe(false);
    });
  });
});
