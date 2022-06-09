"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("@src/pis/constants/constants");
const stub = () => {
    const sut = constants_1.isSequential;
    return {
        sut,
    };
};
describe('Is Sequential', () => {
    it('should return false is sequential', () => {
        const { sut } = stub();
        const pis = '1111111111';
        const cleanedPis = sut.execute(pis);
        expect(cleanedPis).toBe(false);
    });
    it('should return true is not sequential', () => {
        const { sut } = stub();
        const pis = '55636637228';
        const cleanedPis = sut.execute(pis);
        expect(cleanedPis).toBe(true);
    });
});
//# sourceMappingURL=isSequential.spec.js.map