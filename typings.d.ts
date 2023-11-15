type Customer = {
    email: string;
    name: string;
};

type CustomerList = {
    name: ID;
    value: Customer;
};

type TrackingItem = {
    customer_id: ID;
    customer: Customer;
    items: Item[];
};

type Item = {
    item_id: ID;
    name: string;
    price: number;
    quantity: number;
}

type OrderResponse = {
    value: Order;
}

type CustomerResponse = {
    name: ID;
    value: Customer;
};

type Order = {
    carrier: string;
    createdAt: string;
    trackingId: string;
    shippingCost: number;
    Address: string;
    City: string;
    Lng: number;
    Lat: number;
    trackingItems: TrackingItem;
};