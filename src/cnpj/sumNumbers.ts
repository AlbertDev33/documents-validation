import { verificationLength, weigthChoice } from './constants';
import { IParameters } from './interfaces/IParameters';

export class SumNumbers {
  private indexStart = 0;
  private split = '';

  public execute({ cnpj, digit }: IParameters): number {
    const indexEnd = verificationLength[digit];
    const arrCnpj = cnpj.slice(this.indexStart, indexEnd).split(this.split);
    const weight = weigthChoice(digit);

    const sumValue = arrCnpj.reduce((previousValue, currentValue, index) => {
      let previousNumber: number = previousValue;
      previousNumber += Number(currentValue) * weight[index];
      return previousNumber;
    }, 0);
    return sumValue;
  }
}
