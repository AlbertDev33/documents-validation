import { IValidationCPFProvider } from '../protocol/IValidationCPFProvider';

export interface ICleanedCpf {
  value: {
    cpf: string;
    isValid: boolean;
  };
}

export class ValidationCPFProvider implements IValidationCPFProvider {
  public isValid(cpf: string): ICleanedCpf {
    const parseString = String(cpf);
    const cleanedCpf = this.cleanMask(parseString);

    const cpfArray = cleanedCpf.split('');

    if (cleanedCpf === '' || cpfArray.length < 11) {
      throw new Error('Não é um número válido!');
    }

    const isSequencialNumbers = /^(\d)\1{3,11}$/;

    if (isSequencialNumbers.test(cleanedCpf)) {
      throw new Error('Números sequências não é um CPF válido!');
    }

    const firstNumberValidate = cpfArray.slice(-2)[0];
    const secondNumberValidate = cpfArray.slice(-2)[1];

    const firstRest = this.firsNumberVerification(cleanedCpf.length, cpfArray);

    const firstValidation = cpfArray.length - firstRest;
    this.numberVerification(firstRest, +firstNumberValidate, firstValidation);

    const secondRest = this.secondNumberVerification(
      cleanedCpf.length,
      cpfArray,
    );
    const secondValidation = cpfArray.length - secondRest;

    this.numberVerification(
      secondRest,
      +secondNumberValidate,
      secondValidation,
    );

    return {
      value: {
        cpf: cleanedCpf,
        isValid: true,
      },
    };
  }

  private cleanMask(cpf: string): string {
    return cpf.replace(/[^0-9]/g, '');
  }

  private numberVerification(
    restNumber: number,
    numberToValidate: number,
    validationNumber: number,
  ): void {
    if (restNumber === 0 || restNumber === 1) {
      if (numberToValidate !== 0) {
        throw new Error('CPF Inválido');
      }
    } else if (validationNumber !== numberToValidate) {
      throw new Error('CPF Inválido');
    }
  }

  private firsNumberVerification(cleanedCpf: number, cpfArray: string[]): number {
    let len = cleanedCpf;
    let sum = 0;
    let div = 0;
    let rest = 0;

    for (const numbers of cpfArray) {
      if (len !== 2) {
        len -= 1;
        const multiplicationResult = +numbers * len;

        sum += multiplicationResult;

        div = Math.trunc(sum / cpfArray.length);

        rest = sum - cpfArray.length * div;
      }
    }
    return rest;
  }

  private secondNumberVerification(
    cleanedCpf: number,
    cpfArray: string[],
  ): number {
    let len = cleanedCpf;
    let sum = 0;
    let div = 0;
    let rest = 0;

    for (const numbers of cpfArray) {
      if (len !== 1) {
        const multiplicationResult = +numbers * len--;
        sum += multiplicationResult;

        div = Math.trunc(sum / cpfArray.length);

        rest = sum - cpfArray.length * div;
      }
    }
    return rest;
  }
}
