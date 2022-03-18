import {
  FIRST_VERIFICATION_LENGTH,
  SECOND_VERIFICATOR_LENGTH,
} from '../../cpf/constants/constants';
import { DigitValidation } from '../../cpf/DigitValidation';

interface ISutType {
  sut: DigitValidation;
}

const stub = (): ISutType => {
  const sut = new DigitValidation();

  return {
    sut,
  };
};

describe('First Digit Validation', () => {
  it('should return true if the first verificator digit is valid', () => {
    const { sut } = stub();
    const cpf = '31895977070';

    const isValid = sut.execute(cpf, FIRST_VERIFICATION_LENGTH);
    expect(isValid).toBe(true);
  });

  it('should return false if the first verificator digit is invalid', () => {
    const { sut } = stub();
    const cpf = '46431264012';

    const isValid = sut.execute(cpf, FIRST_VERIFICATION_LENGTH);
    expect(isValid).toBe(false);
  });

  it('should return true if the second verificator digit is valid', () => {
    const { sut } = stub();
    const cpf = '52326088000';

    const isValid = sut.execute(cpf, SECOND_VERIFICATOR_LENGTH);
    expect(isValid).toBe(true);
  });

  it('should return false if the second verificator digit is invalid', () => {
    const { sut } = stub();
    const cpf = '03736369035';

    const isValid = sut.execute(cpf, SECOND_VERIFICATOR_LENGTH);
    expect(isValid).toBe(false);
  });
});
