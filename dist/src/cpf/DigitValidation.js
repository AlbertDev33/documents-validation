"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DigitValidation = void 0;
class DigitValidation {
    constructor() {
        this.multiplicator = 10;
        this.mod = 11;
        this.limit = 1;
    }
    execute(cpf, length) {
        const cpfNumbers = cpf.split('');
        const digit = cpfNumbers[length - 1];
        let cpfLength = length;
        const sum = cpfNumbers.reduce((acc, num) => {
            let acumulator = acc;
            if (cpfLength > this.limit) {
                acumulator += Number(num) * cpfLength;
                cpfLength -= 1;
            }
            return acumulator;
        }, 0);
        return this.digitVerification(sum, digit);
    }
    digitVerification(sum, digit) {
        const rest = (sum * this.multiplicator) % this.mod;
        const verificatorDigit = rest % 10;
        return verificatorDigit === Number(digit);
    }
}
exports.DigitValidation = DigitValidation;
//# sourceMappingURL=DigitValidation.js.map