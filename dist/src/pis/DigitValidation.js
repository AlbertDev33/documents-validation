"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DigitValidation = void 0;
const constants_1 = require("./constants/constants");
class DigitValidation {
    constructor() {
        this.MULTIPLE_FACTOR = [3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
    }
    execute(pis) {
        const parsedPis = pis.split('');
        const digit = parsedPis[constants_1.CALC_LENGTH];
        const sum = parsedPis.reduce((acc, num, index) => {
            let accumulator = acc;
            if (index < constants_1.CALC_LENGTH) {
                accumulator += Number(num) * this.MULTIPLE_FACTOR[index];
            }
            return accumulator;
        }, 0);
        return this.digitVerification(sum, digit);
    }
    digitVerification(sum, digit) {
        const rest = sum % constants_1.EXPECTED_LENGTH;
        const sub = constants_1.EXPECTED_LENGTH - rest;
        const verificationDigit = constants_1.validateEnum(sub);
        return Number(verificationDigit) === Number(digit);
    }
}
exports.DigitValidation = DigitValidation;
//# sourceMappingURL=DigitValidation.js.map