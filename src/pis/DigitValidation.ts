export class DigitValidation {
  private MULTIPLE_FACTOR = [3, 2, 9, 8, 7, 6, 5, 4, 3, 2];

  private PIS_LENGTH = 11;

  private CALC_LENGTH = 10;

  public execute(pis: string): boolean {
    const parsedPis = pis.split('');
    const digit = parsedPis[this.CALC_LENGTH];

    const sum = parsedPis.reduce((acc, num, index) => {
      let accumulator = acc;
      if (index < this.CALC_LENGTH) {
        accumulator += Number(num) * this.MULTIPLE_FACTOR[index];
      }
      return accumulator;
    }, 0);

    return this.digitVerification(sum, digit);
  }

  private digitVerification(sum: number, digit: string): boolean {
    const rest = sum % this.PIS_LENGTH;
    const sub = this.PIS_LENGTH - rest;
    const verificationDigit =
      sub === this.CALC_LENGTH || sub === this.PIS_LENGTH ? 0 : sub;
    return verificationDigit === Number(digit);
  }
}
