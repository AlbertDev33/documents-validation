import { ICleanedCpf } from '../implementation/ValidationCPFProvider';

export interface IValidationCPFProvider {
  isValid(cpf: string): ICleanedCpf;
}
