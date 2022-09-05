import { Digit } from '../interfaces/IParameters';
import { FirstAssert, SecondAssert } from '../interfaces/WeigthChoice';
export declare const REPLACE_INVALID_CHARACTER: RegExp;
export declare const IS_SEQUENTIAL: RegExp;
export declare const EXPECTED_LENGTH = 14;
export declare const splitRest: (split: number) => string | number;
export declare const verificationLength: {
    first: number;
    second: number;
};
export declare const weigthChoice: (digit: Digit) => FirstAssert | SecondAssert;
