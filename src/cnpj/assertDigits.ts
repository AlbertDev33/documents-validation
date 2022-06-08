import { splitRest, verificationLength } from './constants';
import { IParameters } from './interfaces/IParameters';

export class AssertDigits {
  private SPLIT_FACTOR = 11;

  public execute({ cnpj, cnpjSummedNumber, digit }: IParameters): boolean {
    const position = verificationLength[digit];
    const currentDigit = +cnpj[position];
    const splitResult = cnpjSummedNumber % this.SPLIT_FACTOR;
    const split = Number(splitRest(splitResult));
    const resultedDigit = this.SPLIT_FACTOR - split;
    return split === currentDigit || resultedDigit === currentDigit;
  }
}
