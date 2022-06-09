"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cnpj_1 = require("@src/cnpj");
describe('CNPJ integration test', () => {
    it('should return true is valid cnpj', () => {
        const cnpj = '38.359.637/0001-41';
        const isValid = cnpj_1.isValidCNPJ(cnpj);
        expect(isValid).toBe(true);
    });
    it('should return false is invalid cnpj', () => {
        const cnpj = '38.359.637/0001-25';
        const isValid = cnpj_1.isValidCNPJ(cnpj);
        expect(isValid).toBe(false);
    });
    it('should return true is valid cnpj', () => {
        const cnpj = '23.217.854/0001-20';
        const isValid = cnpj_1.isValidCNPJ(cnpj);
        expect(isValid).toBe(true);
    });
    it('should return true is valid cnpj', () => {
        const cnpj = '93.487.056/0001-01';
        const isValid = cnpj_1.isValidCNPJ(cnpj);
        expect(isValid).toBe(true);
    });
});
//# sourceMappingURL=integration.spec.js.map