

export interface Iprod {
    pname : string;
    pdetails : string;
    pstatus : ProductsStatus
    pId : string;
}

// "In Progress" | "Dispatched" | "Delivered" ; 

export enum ProductsStatus {
    InProgress = "In Progress",
    Dispatched = "Dispatched",
    Delivered = "Delivered",
}