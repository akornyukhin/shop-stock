import React, { useState } from 'react'
import SearchBar from '../SearchBar/SearchBar.js'
import ProductTable from '../ProductTable/ProductTable.js'

export default function FilterableTable(props) {
    const products = props.products

    const useFilter = () => {
        const [stockOnly, setStockOnly] = useState(() => {
            return false
        });
    
        const [searchText, setSearchText] = useState(() => {
            return ''
        });

        const test = (product) => (
            (!stockOnly || product.stocked) && product.name.indexOf(searchText) !== -1
        );

        return {
            filter(products) {return products.filter(test); },
            searchText,
            stockOnly,
            setStockOnly,
            setSearchText
        };
    }
    
    const filter = useFilter()

    return (
        <>
        <SearchBar
           filter={filter}
        />
        <ProductTable
            products={filter.filter(products)}
         />
        </>
    )
}
