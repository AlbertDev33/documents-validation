"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CpfLengthValidation_1 = require("../../cpf/CpfLengthValidation");
const stub = () => {
    const sut = new CpfLengthValidation_1.CpfLengthValidation();
    return {
        sut,
    };
};
describe('CPF Shape validation', () => {
    it('should return false if is invalid length', () => {
        const { sut } = stub();
        const cpf = '9552264600';
        const isValid = sut.execute(cpf);
        expect(isValid).toBe(false);
    });
    it('should return false if is empyt value', () => {
        const { sut } = stub();
        const cpf = '';
        const isValid = sut.execute(cpf);
        expect(isValid).toBe(false);
    });
    it('should return true if is valid length', () => {
        const { sut } = stub();
        const cpf = '84576016016';
        const isValid = sut.execute(cpf);
        expect(isValid).toBe(true);
    });
});
//# sourceMappingURL=isValidLength.spec.js.map