import { REPLACE_INVALID_CHARACTER } from './constants';

export class CleanCnpj {
  public execute(cnpj: string) {
    const parseCnpj = String(cnpj);
    return parseCnpj.replace(REPLACE_INVALID_CHARACTER, '');
  }
}
