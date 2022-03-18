import {
  cleanCpf,
  cpfLengthValidation,
  digitValidation,
  FIRST_VERIFICATION_LENGTH,
  isSequential,
  SECOND_VERIFICATOR_LENGTH,
} from './constants/constants';

export const isValidCpf = (cpf: string | number): boolean => {
  const cleanedCpf = cleanCpf.execute(cpf);
  const isSequentialValidation = isSequential.execute(cleanedCpf);
  const isValidLength = cpfLengthValidation.execute(cleanedCpf);
  const isValidFirstDigit = digitValidation.execute(
    cleanedCpf,
    FIRST_VERIFICATION_LENGTH,
  );
  const isValidSecondDigit = digitValidation.execute(
    cleanedCpf,
    SECOND_VERIFICATOR_LENGTH,
  );

  if (
    !!isSequentialValidation &&
    !!isValidLength &&
    !!isValidFirstDigit &&
    !!isValidSecondDigit
  ) {
    return true;
  }

  return false;
};
