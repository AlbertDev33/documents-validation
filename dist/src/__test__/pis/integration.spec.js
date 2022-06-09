"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pis_1 = require("@src/pis");
describe('PIS integration test', () => {
    it('should return true is valid pis', () => {
        const pis = '01542949618';
        const isValid = pis_1.isValidPis(pis);
        expect(isValid).toBe(true);
    });
    it('should return false is invalid pis', () => {
        const pis = '09325649278';
        const isValid = pis_1.isValidPis(pis);
        expect(isValid).toBe(false);
    });
    it('should return true with pis mask', () => {
        const pis = '979.65476.46-7';
        const isValid = pis_1.isValidPis(pis);
        expect(isValid).toBe(true);
    });
});
//# sourceMappingURL=integration.spec.js.map