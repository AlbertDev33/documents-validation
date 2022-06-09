"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidCNPJ = void 0;
const constants_1 = require("./constants");
const isValidCNPJ = (cnpj) => {
    const cnpjCleaned = constants_1.cleanCNPJ.execute(cnpj);
    const isValidLength = constants_1.assertLength.execute(cnpjCleaned);
    const assertIsSequential = constants_1.isSequential.execute(cnpjCleaned);
    const firstSum = constants_1.sumNumbers.execute({
        cnpj: cnpjCleaned,
        digit: 'first',
    });
    const secondSum = constants_1.sumNumbers.execute({
        cnpj: cnpjCleaned,
        digit: 'second',
    });
    const assertFirstDigit = constants_1.assertDigits.execute({
        cnpj: cnpjCleaned,
        cnpjSummedNumber: firstSum,
        digit: 'first',
    });
    const assertSecondDigit = constants_1.assertDigits.execute({
        cnpj: cnpjCleaned,
        cnpjSummedNumber: secondSum,
        digit: 'second',
    });
    const assert = [
        isValidLength,
        assertIsSequential,
        assertFirstDigit,
        assertSecondDigit,
    ];
    return assert.every(value => value === true);
};
exports.isValidCNPJ = isValidCNPJ;
//# sourceMappingURL=index.js.map