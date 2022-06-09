"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sumNumbers_1 = require("@src/cnpj/sumNumbers");
const makeStub = () => {
    const sut = new sumNumbers_1.SumNumbers();
    return {
        sut,
    };
};
describe('Sum CNPJ numbers', () => {
    it('should return sum value = 214', () => {
        const { sut } = makeStub();
        const cnpj = '11444777000161';
        const sutSum = sut.execute({ cnpj, digit: 'first' });
        const expectedSumValue = 214;
        expect(sutSum).toBe(expectedSumValue);
    });
    it('should return sum value = 231', () => {
        const { sut } = makeStub();
        const cnpj = '62466493000107';
        const sutSum = sut.execute({ cnpj, digit: 'first' });
        const expectedSumValue = 231;
        expect(sutSum).toBe(expectedSumValue);
    });
    it('should return sum value = 111', () => {
        const { sut } = makeStub();
        const cnpj = '27355010000104';
        const sutSum = sut.execute({ cnpj, digit: 'first' });
        const expectedSumValue = 111;
        expect(sutSum).toBe(expectedSumValue);
    });
    it('should return sum value = 95', () => {
        const { sut } = makeStub();
        const cnpj = '27355010000104';
        const sutSum = sut.execute({ cnpj, digit: 'second' });
        const expectedSumValue = 95;
        expect(sutSum).toBe(expectedSumValue);
    });
});
//# sourceMappingURL=sumNumber.spec.js.map