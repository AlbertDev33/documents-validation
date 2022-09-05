"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidPis = void 0;
const constants_1 = require("./constants/constants");
const isValidPis = (pis) => {
    const cleanedPis = constants_1.cleanPis.execute(pis);
    const isValidLength = constants_1.lengthValidation.execute(cleanedPis);
    const isPisSequential = constants_1.isSequential.execute(cleanedPis);
    const isDigitValid = constants_1.digitValidation.execute(cleanedPis);
    const pisArr = [isValidLength, isPisSequential, isDigitValid];
    const isValid = pisArr.every(value => value === true);
    return isValid;
};
exports.isValidPis = isValidPis;
//# sourceMappingURL=index.js.map