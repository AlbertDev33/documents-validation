"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("@src/pis/constants/constants");
const stub = () => {
    const sut = constants_1.lengthValidation;
    return {
        sut,
    };
};
describe('PIS Length Validation', () => {
    it('should return true is valid length', () => {
        const { sut } = stub();
        const pis = '55636637228';
        const isValid = sut.execute(pis);
        expect(isValid).toBe(true);
    });
    it('should return false is invalid length', () => {
        const { sut } = stub();
        const pis = '556366372288';
        const isValid = sut.execute(pis);
        expect(isValid).toBe(false);
    });
});
//# sourceMappingURL=lengthValidation.spec.js.map