import { REPLACE_INVALID_CHARACTER } from './constants';

export class CleanCnpj {
  public execute(cnpj: string) {
    return cnpj.replace(REPLACE_INVALID_CHARACTER, '');
  }
}
