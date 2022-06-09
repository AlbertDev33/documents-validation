"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assertLength_1 = require("@src/cnpj/assertLength");
const stub = () => {
    const sut = new assertLength_1.AssertLength();
    return {
        sut,
    };
};
describe('Assert CNPJ length', () => {
    it('should return true is valid length', () => {
        const { sut } = stub();
        const cnpj = '38703179000116';
        const isValid = sut.execute(cnpj);
        expect(isValid).toBe(true);
    });
    it('should return false is invalid length', () => {
        const { sut } = stub();
        const cnpj = '3870317900011';
        const isValid = sut.execute(cnpj);
        expect(isValid).toBe(false);
    });
});
//# sourceMappingURL=assertLength.spec.js.map