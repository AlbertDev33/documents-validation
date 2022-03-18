import { CleanCpf } from '../CleanCpf';
import { IsSequential } from '../IsSequential';
import { CpfLengthValidation } from '../CpfLengthValidation';
import { DigitValidation } from '../DigitValidation';

export const FIRST_VERIFICATION_LENGTH = 10;
export const SECOND_VERIFICATOR_LENGTH = 11;
export const cleanCpf = new CleanCpf();
export const isSequential = new IsSequential();
export const cpfLengthValidation = new CpfLengthValidation();
export const digitValidation = new DigitValidation();
