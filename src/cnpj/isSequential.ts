import { IS_SEQUENTIAL } from './constants';

export class IsSequential {
  public execute(cnpj: string) {
    return !IS_SEQUENTIAL.test(cnpj);
  }
}
