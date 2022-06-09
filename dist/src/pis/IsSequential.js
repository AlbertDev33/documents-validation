"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsSequential = void 0;
const SEQUENTIAL_PATTERN = /^(\d)\1{3,11}$/;
const IS_SEQUENTIAL = new RegExp(SEQUENTIAL_PATTERN);
class IsSequential {
    execute(pis) {
        return !IS_SEQUENTIAL.test(pis);
    }
}
exports.IsSequential = IsSequential;
//# sourceMappingURL=IsSequential.js.map