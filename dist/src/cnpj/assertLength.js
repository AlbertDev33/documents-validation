"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssertLength = void 0;
const constants_1 = require("./constants");
class AssertLength {
    execute(cnpj) {
        return cnpj.length === constants_1.EXPECTED_LENGTH;
    }
}
exports.AssertLength = AssertLength;
//# sourceMappingURL=assertLength.js.map