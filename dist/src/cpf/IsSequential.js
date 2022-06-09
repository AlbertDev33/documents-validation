"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsSequential = void 0;
class IsSequential {
    execute(cpf) {
        const isSequencialNumbers = /^(\d)\1{3,11}$/;
        return !isSequencialNumbers.test(cpf);
    }
}
exports.IsSequential = IsSequential;
//# sourceMappingURL=IsSequential.js.map