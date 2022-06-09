"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assertDigits_1 = require("@src/cnpj/assertDigits");
const makeStub = () => {
    const sut = new assertDigits_1.AssertDigits();
    return {
        sut,
    };
};
describe('Assert CNPJ digits', () => {
    it('should return true if the first digit is valid', () => {
        const { sut } = makeStub();
        const cnpjObjStub = {
            cnpj: '27355010000104',
            cnpjSummedNumber: 111,
            digit: 'first',
        };
        const sutSum = sut.execute({ ...cnpjObjStub });
        expect(sutSum).toBe(true);
    });
    it('should return true if the second digit is valid', () => {
        const { sut } = makeStub();
        const cnpjObjStub = {
            cnpj: '27355010000104',
            cnpjSummedNumber: 95,
            digit: 'second',
        };
        const sutSum = sut.execute({ ...cnpjObjStub });
        expect(sutSum).toBe(true);
    });
    it('should return false is invalid digit', () => {
        const { sut } = makeStub();
        const cnpjObjStub = {
            cnpj: '27355010000105',
            cnpjSummedNumber: 95,
            digit: 'second',
        };
        const sutSum = sut.execute({ ...cnpjObjStub });
        expect(sutSum).toBe(false);
    });
});
//# sourceMappingURL=assertDigits.spec.js.map