interface ISortPaging {
    sort: any;
    skip: number;
    limit: number;
}
export declare function getSortPaging(query: any): ISortPaging;
export {};
