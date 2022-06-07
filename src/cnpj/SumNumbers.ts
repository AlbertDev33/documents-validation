export class SumNumbers {
  private WEIGHT = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
  private indexStart = 0;
  private indexEnd = 12;
  private split = '';

  public execute(cnpj: string): number {
    const arrCnpj = cnpj
      .slice(this.indexStart, this.indexEnd)
      .split(this.split);

    const sumValue = arrCnpj.reduce((previousValue, currentValue, index) => {
      let previousNumber: number = previousValue;
      previousNumber += Number(currentValue) * this.WEIGHT[index];
      return previousNumber;
    }, 0);
    return sumValue;
  }
}
