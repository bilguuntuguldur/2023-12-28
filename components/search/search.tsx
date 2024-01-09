"use client"

import React, { useEffect, useState } from 'react';
import getProducts from '@/actions/get-products';
import { Product } from '@/types';
import ProductList from '@/components/product/product-list';
import Container from '@/components/ui/container';


interface SearchPageProps {
    searchParams: { query: string };
}

const SearchPage: React.FC<SearchPageProps> = ({ searchParams: { query } }) => {

    const [searchResults, setSearchResults] = useState<Product[]>([]);

    useEffect(() => {

        const fetchSearchResults = async () => {
        try {

        const results = await getProducts({ query });
        setSearchResults(results);
        } catch (error) {
        console.error('Error fetching search results:', error);
        }
        };

    fetchSearchResults();
    }, [query]);

    return (
        <Container>
            <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
                <h2 className="text-2xl font-semibold mb-4">Search Results for: {query}</h2>
                <ProductList title="" items={searchResults} />
                {/* You can add pagination logic here if needed */}
            </div>
        </Container>
    );
};

export default SearchPage;
