"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSortPaging = getSortPaging;
function getSortPaging(query) {
    const page = parseInt(query.page) || 1;
    const limit = parseInt(query.limit) || 10;
    let sort = { createdAt: -1 };
    if (query?.sort && query.order) {
        const newSort = {};
        newSort[query?.sort] = query.order;
        sort = newSort;
    }
    return { sort, skip: (page - 1) * limit, limit };
}
//# sourceMappingURL=get-sort-pagination.js.map