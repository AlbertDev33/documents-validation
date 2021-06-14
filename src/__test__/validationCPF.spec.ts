import { ValidationError } from "@shared/error/validationError";
import { ValidationCPFProvider } from "../ValidationCPF/implementation/ValidationCPFProvider";
import { IValidationCPFProvider } from "../ValidationCPF/protocol/IValidationCPFProvider";

interface ISutType {
    sut: IValidationCPFProvider;
}

const makeSut = (): ISutType => {
    const sut = new ValidationCPFProvider()

    return {
        sut,
    }
};

describe('Validation CPF', () => {
    it('should be able to validate a valid cpf', () => {
        const { sut } = makeSut();

        const validCpf = '845.760.160-16';

        const { value } = sut.isValid(validCpf);

        expect(value.cpf).toBe('84576016016');
        expect(value.isValid).toBe(true);
    });

    it('should be able to validate a valid cpf typeof number', () => {
        const { sut } = makeSut();

        const validCpf = 84576016016;

        const { value } = sut.isValid(validCpf);

        expect(value.cpf).toBe('84576016016');
        expect(value.isValid).toBe(true);
    });

    it("should throw with cpf less than 11", () => {
        const { sut } = makeSut();

        const invalidCpf = '845.760.160-1';

        expect(() => sut.isValid(invalidCpf)).toThrow('Não é um número válido!');
    });

    it("should throw with empty cpf", () => {
        const { sut } = makeSut();

        const invalidCpf = '';

        expect(() => sut.isValid(invalidCpf)).toThrow('Não é um número válido!');
    });

    it("should throw with sequencial number", () => {
        const { sut } = makeSut();

        const invalidCpf = '11111111111';

        expect(() => sut.isValid(invalidCpf)).toThrow('Números sequências não é um CPF válido!');
    });

    it("should throw with sequencial typeor number", () => {
        const { sut } = makeSut();

        const invalidCpf = 11111111111;

        expect(() => sut.isValid(invalidCpf)).toThrow('Números sequências não é um CPF válido!');
    });

    it("should throw with invalid first validate number", () => {
        const { sut } = makeSut();

        const invalidCpf = '845.760.160-26';

        expect(() => sut.isValid(invalidCpf)).toThrow('CPF Inválido!');
    });

    it("should throw with invalid second validate number", () => {
        const { sut } = makeSut();

        const invalidCpf = '845.760.160-15';

        expect(() => sut.isValid(invalidCpf)).toThrow('CPF Inválido!');
    });

    it("should throw with invalid number", () => {
        const { sut } = makeSut();

        const invalidCpf = '345.760.150-16';

        expect(() => sut.isValid(invalidCpf)).toThrow('CPF Inválido!');
    });

    it("should throw with not a number cpf", () => {
        const { sut } = makeSut();

        const invalidCpf = '3a5.760.15w-16';

        expect(() => sut.isValid(invalidCpf)).toThrow('Não é um número válido!');
    });
});