import { AssertDigits } from './assertDigits';
import { AssertLength } from './assertLength';
import { CleanCnpj } from './cleanCNPJ';
import { IsSequential } from './isSequential';
import { SumNumbers } from './sumNumbers';

const cleanCNPJ = new CleanCnpj();
const assertLength = new AssertLength();
const isSequential = new IsSequential();
const sumNumbers = new SumNumbers();
const assertDigits = new AssertDigits();

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
