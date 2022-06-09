"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const isSequential_1 = require("@src/cnpj/isSequential");
const stub = () => {
    const sut = new isSequential_1.IsSequential();
    return {
        sut,
    };
};
describe('Clean CNPJ', () => {
    it('should return false is sequential number', () => {
        const { sut } = stub();
        const cnpj = '11111111111111';
        const isValid = sut.execute(cnpj);
        expect(isValid).toBe(false);
    });
    it('should return true is not sequential number', () => {
        const { sut } = stub();
        const cnpj = '84123302000147';
        const isValid = sut.execute(cnpj);
        expect(isValid).toBe(true);
    });
});
//# sourceMappingURL=isSequential.spec.js.map