"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CpfLengthValidation = void 0;
class CpfLengthValidation {
    constructor() {
        this.length = 11;
    }
    execute(cpf) {
        return cpf.length === this.length;
    }
}
exports.CpfLengthValidation = CpfLengthValidation;
//# sourceMappingURL=CpfLengthValidation.js.map