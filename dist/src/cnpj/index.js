"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidCNPJ = void 0;
const assertDigits_1 = require("./assertDigits");
const assertLength_1 = require("./assertLength");
const cleanCNPJ_1 = require("./cleanCNPJ");
const isSequential_1 = require("./isSequential");
const sumNumbers_1 = require("./sumNumbers");
const cleanCNPJ = new cleanCNPJ_1.CleanCnpj();
const assertLength = new assertLength_1.AssertLength();
const isSequential = new isSequential_1.IsSequential();
const sumNumbers = new sumNumbers_1.SumNumbers();
const assertDigits = new assertDigits_1.AssertDigits();
const isValidCNPJ = (cnpj) => {
    const cnpjCleaned = cleanCNPJ.execute(cnpj);
    const isValidLength = assertLength.execute(cnpjCleaned);
    const assertIsSequential = isSequential.execute(cnpjCleaned);
    const firstSum = sumNumbers.execute({
        cnpj: cnpjCleaned,
        digit: 'first',
    });
    const secondSum = sumNumbers.execute({
        cnpj: cnpjCleaned,
        digit: 'second',
    });
    const assertFirstDigit = assertDigits.execute({
        cnpj: cnpjCleaned,
        cnpjSummedNumber: firstSum,
        digit: 'first',
    });
    const assertSecondDigit = assertDigits.execute({
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