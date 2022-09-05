"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CleanCpf = void 0;
class CleanCpf {
    execute(cpf) {
        const parseString = String(cpf);
        return parseString.replace(/[^0-9]/g, '');
    }
}
exports.CleanCpf = CleanCpf;
//# sourceMappingURL=CleanCpf.js.map