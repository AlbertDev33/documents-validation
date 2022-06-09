"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CleanPis = void 0;
const CLEAN_INVALID_CHARACTER = /[^0-9]/;
const FLAG = 'g';
const REPLACE_INVALID_CHARACTER = new RegExp(CLEAN_INVALID_CHARACTER, FLAG);
class CleanPis {
    execute(pis) {
        return pis.replace(REPLACE_INVALID_CHARACTER, '');
    }
}
exports.CleanPis = CleanPis;
//# sourceMappingURL=CleanPis.js.map