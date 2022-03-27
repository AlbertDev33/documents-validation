import { CleanPis } from '../CleanPis';
import { DigitValidation } from '../DigitValidation';
import { IsSequential } from '../IsSequential';
import { LengthValidation } from '../LengthValidation';

export const EXPECTED_LENGTH = 11;
export const CALC_LENGTH = 10;
export const cleanPis = new CleanPis();
export const lengthValidation = new LengthValidation();
export const isSequential = new IsSequential();
export const digitValidation = new DigitValidation();

export const validateEnum = (digit: number): string | number => {
  const enumerator = {
    10: '0',
    11: '0',
  };

  return enumerator[digit] || digit;
};
