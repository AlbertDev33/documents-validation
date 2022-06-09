export declare type Digit = 'first' | 'second';
export interface IParameters {
    cnpj: string;
    cnpjSummedNumber?: number;
    digit: Digit;
}
