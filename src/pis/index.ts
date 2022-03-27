import {
  cleanPis,
  isSequential,
  lengthValidation,
  digitValidation,
} from './constants/constants';

export const isValidPis = (pis: string) => {
  const cleanedPis = cleanPis.execute(pis);
  const isValidLength = lengthValidation.execute(cleanedPis);
  const isPisSequential = isSequential.execute(cleanedPis);
  const isDigitValid = digitValidation.execute(cleanedPis);

  const pisArr = [isValidLength, isPisSequential, isDigitValid];

  const isValid = pisArr.every(value => value === true);

  return isValid;
};
