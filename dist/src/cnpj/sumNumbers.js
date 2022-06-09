"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SumNumbers = void 0;
const constants_1 = require("./constants");
class SumNumbers {
    constructor() {
        this.indexStart = 0;
        this.split = '';
    }
    execute({ cnpj, digit }) {
        const indexEnd = constants_1.verificationLength[digit];
        const arrCnpj = cnpj.slice(this.indexStart, indexEnd).split(this.split);
        const weight = constants_1.weigthChoice(digit);
        const sumValue = arrCnpj.reduce((previousValue, currentValue, index) => {
            let previousNumber = previousValue;
            previousNumber += Number(currentValue) * weight[index];
            return previousNumber;
        }, 0);
        return sumValue;
    }
}
exports.SumNumbers = SumNumbers;
//# sourceMappingURL=sumNumbers.js.map