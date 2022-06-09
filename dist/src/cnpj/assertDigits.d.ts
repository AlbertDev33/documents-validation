import { IParameters } from './interfaces/IParameters';
export declare class AssertDigits {
    private SPLIT_FACTOR;
    execute({ cnpj, cnpjSummedNumber, digit }: IParameters): boolean;
}
