"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CleanCpf_1 = require("../../cpf/CleanCpf");
const stub = () => {
    const sut = new CleanCpf_1.CleanCpf();
    return {
        sut,
    };
};
describe('Clean CPF', () => {
    it('should be able to clean cpf', () => {
        const { sut } = stub();
        const cpf = '955.226.460-04';
        const expectedCpf = '95522646004';
        const cleanedCpf = sut.execute(cpf);
        expect(cleanedCpf).toEqual(expectedCpf);
    });
});
//# sourceMappingURL=cleanCpf.spec.js.map