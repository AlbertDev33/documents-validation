"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sumNumbers = exports.assertDigits = exports.isSequential = exports.assertLength = exports.cleanCNPJ = exports.weigthChoice = exports.verificationLength = exports.splitRest = exports.EXPECTED_LENGTH = exports.IS_SEQUENTIAL = exports.REPLACE_INVALID_CHARACTER = void 0;
const assertDigits_1 = require("../assertDigits");
const assertLength_1 = require("../assertLength");
const cleanCNPJ_1 = require("../cleanCNPJ");
const isSequential_1 = require("../isSequential");
const sumNumbers_1 = require("../sumNumbers");
const CLEAN_INVALID_CHARACTER = /[^0-9]/;
const FLAG = 'g';
exports.REPLACE_INVALID_CHARACTER = new RegExp(CLEAN_INVALID_CHARACTER, FLAG);
const SEQUENTIAL_PATTERN = /^(\d)\1{3,14}$/;
exports.IS_SEQUENTIAL = new RegExp(SEQUENTIAL_PATTERN);
exports.EXPECTED_LENGTH = 14;
const splitRest = (split) => {
    const keys = {
        1: '0',
        0: '0',
    };
    const value = keys[split];
    return value || split;
};
exports.splitRest = splitRest;
exports.verificationLength = {
    first: 12,
    second: 13,
};
const weigthChoice = (digit) => {
    const choice = {
        first: [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2],
        second: [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2],
    };
    return choice[digit];
};
exports.weigthChoice = weigthChoice;
exports.cleanCNPJ = new cleanCNPJ_1.CleanCnpj();
exports.assertLength = new assertLength_1.AssertLength();
exports.isSequential = new isSequential_1.IsSequential();
exports.assertDigits = new assertDigits_1.AssertDigits();
exports.sumNumbers = new sumNumbers_1.SumNumbers();
//# sourceMappingURL=index.js.map