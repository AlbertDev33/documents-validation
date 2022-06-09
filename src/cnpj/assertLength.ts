import { EXPECTED_LENGTH } from './constants';

export class AssertLength {
  public execute(cnpj: string): boolean {
    return cnpj.length === EXPECTED_LENGTH;
  }
}
