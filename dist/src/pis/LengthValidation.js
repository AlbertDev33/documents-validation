"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LengthValidation = void 0;
const constants_1 = require("./constants/constants");
class LengthValidation {
    execute(pis) {
        return pis.length === constants_1.EXPECTED_LENGTH;
    }
}
exports.LengthValidation = LengthValidation;
//# sourceMappingURL=LengthValidation.js.map