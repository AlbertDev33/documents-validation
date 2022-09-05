"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateEnum = exports.digitValidation = exports.isSequential = exports.lengthValidation = exports.cleanPis = exports.CALC_LENGTH = exports.EXPECTED_LENGTH = void 0;
const CleanPis_1 = require("../CleanPis");
const DigitValidation_1 = require("../DigitValidation");
const IsSequential_1 = require("../IsSequential");
const LengthValidation_1 = require("../LengthValidation");
exports.EXPECTED_LENGTH = 11;
exports.CALC_LENGTH = 10;
exports.cleanPis = new CleanPis_1.CleanPis();
exports.lengthValidation = new LengthValidation_1.LengthValidation();
exports.isSequential = new IsSequential_1.IsSequential();
exports.digitValidation = new DigitValidation_1.DigitValidation();
const validateEnum = (digit) => {
    const enumerator = {
        10: '0',
        11: '0',
    };
    return enumerator[digit] || digit;
};
exports.validateEnum = validateEnum;
//# sourceMappingURL=constants.js.map