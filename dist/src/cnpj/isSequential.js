"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsSequential = void 0;
const constants_1 = require("./constants");
class IsSequential {
    execute(cnpj) {
        return !constants_1.IS_SEQUENTIAL.test(cnpj);
    }
}
exports.IsSequential = IsSequential;
//# sourceMappingURL=isSequential.js.map