export type ProductType = "" | "veg" | "non_veg" | "drinks";

export interface IProduct {
    id: number;
    name: string;
    description: string;
    image: string;
    price: number;
    variations: string;
    add_ons: string;
    tax: number;
    available_time_starts: string;
    available_time_ends: string;
    status: number;
    created_at: string;
    updated_at: string;
    attributes: string;
    category_ids: string;
    choice_options: string;
    discount: number;
    discount_type: string;
    tax_type: string;
    set_menu: number;
    branch_id: number;
    colors: null;
    popularity_count: number;
    product_type: ProductType;
    translations: unknown[];
}

export interface ICategory {
    id: number;
    name: string;
    parent_id: number;
    position: number;
    status: number;
    priority: number;
    created_at: string;
    updated_at: string;
    image: string | null;
    banner_image: string | null;
    type: string;
    restaurants: unknown[] | null;
    translations: unknown[];
}


export interface ICartItem {
    id: string;
    type: string;
    name: string;
    price: number;
    description: string;
    quantity: number;
}

export interface Table {
    id: number;
    number: number;
    capacity: number;
    branch_id: number;
    is_active: boolean;
    status: number;
    reservation_type: string;
    position: number;
    combined: boolean;
    created_at: string;
    updated_at: string;
}