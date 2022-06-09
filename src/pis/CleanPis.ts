const CLEAN_INVALID_CHARACTER = /[^0-9]/;
const FLAG = 'g';
const REPLACE_INVALID_CHARACTER = new RegExp(CLEAN_INVALID_CHARACTER, FLAG);

export class CleanPis {
  public execute(pis: string): string {
    const parseString = String(pis);
    return parseString.replace(REPLACE_INVALID_CHARACTER, '');
  }
}
