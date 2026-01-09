"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.responseHandler = responseHandler;
const common_1 = require("@nestjs/common");
function responseHandler(modelObject) {
    if (!modelObject) {
        throw new common_1.NotFoundException();
    }
    return modelObject;
}
//# sourceMappingURL=resposneHandler.js.map