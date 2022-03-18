export class DigitValidation {
  private multiplicator = 10;

  private mod = 11;

  private limit = 1;

  public execute(cpf: string, length: number) {
    const cpfNumbers = cpf.split('');
    const digit = cpfNumbers[length - 1];

    let cpfLength = length;
    const sum = cpfNumbers.reduce((acc, num) => {
      let acumulator = acc;
      if (cpfLength > this.limit) {
        acumulator += Number(num) * cpfLength;
        cpfLength -= 1;
      }
      return acumulator;
    }, 0);

    return this.digitVerification(sum, digit);
  }

  private digitVerification(sum: number, digit: string): boolean {
    const rest = (sum * this.multiplicator) % this.mod;
    const verificatorDigit = rest % 10;

    return verificatorDigit === Number(digit);
  }
}
