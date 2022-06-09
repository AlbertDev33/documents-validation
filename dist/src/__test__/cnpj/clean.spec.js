"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cleanCNPJ_1 = require("@src/cnpj/cleanCNPJ");
const stub = () => {
    const sut = new cleanCNPJ_1.CleanCnpj();
    return {
        sut,
    };
};
describe('Clean CNPJ', () => {
    it('should return a cleaned string', () => {
        const { sut } = stub();
        const cnpj = '84.123.302/0001-47';
        const cleaned = '84123302000147';
        const cleanedCnpj = sut.execute(cnpj);
        expect(cleanedCnpj).toEqual(cleaned);
    });
});
//# sourceMappingURL=clean.spec.js.map