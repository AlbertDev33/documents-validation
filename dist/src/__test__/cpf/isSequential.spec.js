"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const IsSequential_1 = require("../../cpf/IsSequential");
const stub = () => {
    const sut = new IsSequential_1.IsSequential();
    return {
        sut,
    };
};
describe('Is Sequential Numbers', () => {
    it('should return false is sequential', () => {
        const { sut } = stub();
        const cpf = '11111111111';
        const isValid = sut.execute(cpf);
        expect(isValid).toBe(false);
    });
    it('should return true is not sequential', () => {
        const { sut } = stub();
        const cpf = '84576016016';
        const isValid = sut.execute(cpf);
        expect(isValid).toBe(true);
    });
});
//# sourceMappingURL=isSequential.spec.js.map