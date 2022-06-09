"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CleanCnpj = void 0;
const constants_1 = require("./constants");
class CleanCnpj {
    execute(cnpj) {
        return cnpj.replace(constants_1.REPLACE_INVALID_CHARACTER, '');
    }
}
exports.CleanCnpj = CleanCnpj;
//# sourceMappingURL=cleanCNPJ.js.map