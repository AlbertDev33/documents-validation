"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssertDigits = void 0;
const constants_1 = require("./constants");
class AssertDigits {
    constructor() {
        this.SPLIT_FACTOR = 11;
    }
    execute({ cnpj, cnpjSummedNumber, digit }) {
        const position = constants_1.verificationLength[digit];
        const currentDigit = +cnpj[position];
        const splitResult = cnpjSummedNumber % this.SPLIT_FACTOR;
        const split = Number(constants_1.splitRest(splitResult));
        const resultedDigit = this.SPLIT_FACTOR - split;
        return split === currentDigit || resultedDigit === currentDigit;
    }
}
exports.AssertDigits = AssertDigits;
//# sourceMappingURL=assertDigits.js.map