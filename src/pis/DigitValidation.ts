import {
  validateEnum,
  EXPECTED_LENGTH,
  CALC_LENGTH,
} from './constants/constants';

export class DigitValidation {
  private MULTIPLE_FACTOR = [3, 2, 9, 8, 7, 6, 5, 4, 3, 2];

  public execute(pis: string): boolean {
    const parsedPis = pis.split('');
    const digit = parsedPis[CALC_LENGTH];

    const sum = parsedPis.reduce((acc, num, index) => {
      let accumulator: number = acc;
      if (index < CALC_LENGTH) {
        accumulator += Number(num) * this.MULTIPLE_FACTOR[index];
      }
      return accumulator;
    }, 0);

    return this.digitVerification(sum, digit);
  }

  private digitVerification(sum: number, digit: string): boolean {
    const rest = sum % EXPECTED_LENGTH;
    const sub = EXPECTED_LENGTH - rest;
    const verificationDigit = validateEnum(sub);
    return Number(verificationDigit) === Number(digit);
  }
}
