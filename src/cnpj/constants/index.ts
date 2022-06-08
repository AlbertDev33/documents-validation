import { CleanCnpj } from '../cleanCNPJ';
import { Digit } from '../interfaces/IParameters';
import { FirstAssert, SecondAssert } from '../interfaces/WeigthChoice';
import { IsSequential } from '../isSequential';

const CLEAN_INVALID_CHARACTER = /[^0-9]/;
const FLAG = 'g';
export const REPLACE_INVALID_CHARACTER = new RegExp(
  CLEAN_INVALID_CHARACTER,
  FLAG,
);

const SEQUENTIAL_PATTERN = /^(\d)\1{3,14}$/;
export const IS_SEQUENTIAL = new RegExp(SEQUENTIAL_PATTERN);
export const EXPECTED_LENGTH = 14;

export const splitRest = (split: number): string | number => {
  const keys = {
    1: '0',
    0: '0',
  };
  const value: string = keys[split];
  return value || split;
};

export const verificationLength = {
  first: 12,
  second: 13,
};

export const weigthChoice = (digit: Digit): FirstAssert | SecondAssert => {
  const choice = {
    first: [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2],
    second: [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2],
  };

  return choice[digit] as FirstAssert | SecondAssert;
};

export const cleanCNPJ = new CleanCnpj();
export const isSequential = new IsSequential();
