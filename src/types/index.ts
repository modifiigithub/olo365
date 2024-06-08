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

export interface ITable {
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

export interface IUser {
    address: string | null;
    city: string | null;
    country: string | null;
    created_at: string;
    deleted_at: string | null;
    device_token: string;
    device_type: string | null;
    email: string;
    email_verified_at: string | null;
    id: number;
    name: string;
    notification_status: number;
    phone: string;
    phone_code: string;
    profile_photo: string | null;
    role_id: number;
    state: string | null;
    status: number;
    updated_at: string;
    verified: number;
    zip_code: string | null;
}

export interface IProductApiResponse {
    total_size: number;
    limit: number;
    offset: number;
    products: IProduct[];
}

export interface IAddress {
    id: number;
    contact_person_name: string;
    contact_person_number: string;
    email: string;
    address: string;
    postal_code: string;
    latitude: string;
    longitude: string;
    notes: string;
    address_type: 'home' | 'work' | 'other';
    road: string;
    house: string;
    floor: string;
    distance: number;
    is_guest: 0 | 1;
}