export interface Billboard {
    id: string;
    label: string;
    imageUrl: string;
};

export interface Category {
    id: string;
    name: string;
    billboard: Billboard;
};

export interface Post {
    id: string;
    name: string;
    description: string
}

export interface Product {
    id: string;
    category: Category;
    name: string;
    description: string;
    price: string;
    isFeatured: boolean;
    images: Image[];
    query?: string;
}

export interface Image {
    id: string;
    url: string;
}


