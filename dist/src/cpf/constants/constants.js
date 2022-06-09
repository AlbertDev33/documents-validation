"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.digitValidation = exports.cpfLengthValidation = exports.isSequential = exports.cleanCpf = exports.SECOND_VERIFICATOR_LENGTH = exports.FIRST_VERIFICATION_LENGTH = void 0;
const CleanCpf_1 = require("../CleanCpf");
const IsSequential_1 = require("../IsSequential");
const CpfLengthValidation_1 = require("../CpfLengthValidation");
const DigitValidation_1 = require("../DigitValidation");
exports.FIRST_VERIFICATION_LENGTH = 10;
exports.SECOND_VERIFICATOR_LENGTH = 11;
exports.cleanCpf = new CleanCpf_1.CleanCpf();
exports.isSequential = new IsSequential_1.IsSequential();
exports.cpfLengthValidation = new CpfLengthValidation_1.CpfLengthValidation();
exports.digitValidation = new DigitValidation_1.DigitValidation();
//# sourceMappingURL=constants.js.map