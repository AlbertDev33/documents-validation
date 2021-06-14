import { ICleanedCpf } from '../implementation/ValidationCPFProvider';

export interface IValidationCPFProvider {
  isValid(cpf: number | string): ICleanedCpf;
}
