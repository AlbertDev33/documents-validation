import { EXPECTED_LENGTH } from './constants/constants';

export class LengthValidation {
  public execute(pis: string): boolean {
    return pis.length === EXPECTED_LENGTH;
  }
}
