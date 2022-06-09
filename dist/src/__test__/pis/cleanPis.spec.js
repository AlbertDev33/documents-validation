"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("@src/pis/constants/constants");
const stub = () => {
    const sut = constants_1.cleanPis;
    return {
        sut,
    };
};
describe('Pis Clean Invalid Caracter', () => {
    it('should return cleaned pis number', () => {
        const { sut } = stub();
        const pis = '556.36637.22-8';
        const resultPis = '55636637228';
        const cleanedPis = sut.execute(pis);
        expect(cleanedPis).toEqual(resultPis);
    });
});
//# sourceMappingURL=cleanPis.spec.js.map