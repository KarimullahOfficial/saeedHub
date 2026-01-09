export async function listResponse(model, queryObject, items, query) {
    const page = parseInt(query.page) || 1;
    const limit = parseInt(query.limit) || 10;
    const total = await model.count(queryObject)
    return { total, items, page, limit }
}
