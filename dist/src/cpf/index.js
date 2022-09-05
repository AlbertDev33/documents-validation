"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidCpf = void 0;
const constants_1 = require("./constants/constants");
const isValidCpf = (cpf) => {
    const cleanedCpf = constants_1.cleanCpf.execute(cpf);
    const isSequentialValidation = constants_1.isSequential.execute(cleanedCpf);
    const isValidLength = constants_1.cpfLengthValidation.execute(cleanedCpf);
    const isValidFirstDigit = constants_1.digitValidation.execute(cleanedCpf, constants_1.FIRST_VERIFICATION_LENGTH);
    const isValidSecondDigit = constants_1.digitValidation.execute(cleanedCpf, constants_1.SECOND_VERIFICATOR_LENGTH);
    const validationList = [
        isSequentialValidation,
        isValidLength,
        isValidFirstDigit,
        isValidSecondDigit,
    ];
    const isValid = validationList.every(value => value === true);
    return isValid;
};
exports.isValidCpf = isValidCpf;
//# sourceMappingURL=index.js.map