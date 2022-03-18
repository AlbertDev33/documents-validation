const EXPECTED_LENGTH = 11;

export class LengthValidation {
  public execute(pis: string): boolean {
    return pis.length === EXPECTED_LENGTH;
  }
}
