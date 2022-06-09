import {
  assertDigits,
  assertLength,
  cleanCNPJ,
  isSequential,
  sumNumbers,
} from './constants';

export const isValidCNPJ = (cnpj: string) => {
  const cnpjCleaned = cleanCNPJ.execute(cnpj);
  const isValidLength = assertLength.execute(cnpjCleaned);
  const assertIsSequential = isSequential.execute(cnpjCleaned);
  const firstSum = sumNumbers.execute({
    cnpj: cnpjCleaned,
    digit: 'first',
  });
  const secondSum = sumNumbers.execute({
    cnpj: cnpjCleaned,
    digit: 'second',
  });
  const assertFirstDigit = assertDigits.execute({
    cnpj: cnpjCleaned,
    cnpjSummedNumber: firstSum,
    digit: 'first',
  });

  const assertSecondDigit = assertDigits.execute({
    cnpj: cnpjCleaned,
    cnpjSummedNumber: secondSum,
    digit: 'second',
  });

  const assert = [
    isValidLength,
    assertIsSequential,
    assertFirstDigit,
    assertSecondDigit,
  ];

  return assert.every(value => value === true);
};
