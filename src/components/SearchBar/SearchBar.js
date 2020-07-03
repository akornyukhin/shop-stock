import React from 'react'

export default function SearchBar({filter}) {
    const handleFilterTextChange = e => filter.setSearchText(e.target.value);
    const handleStockOnlyChange = e => filter.setStockOnly(e.target.checked);

    return (
        <>
            <input
                type='text'
                placeholder='Imput your search'
                value={filter.searchText}
                onChange={handleFilterTextChange} />
            <p>
                <input
                    type='checkbox'
                    checked={filter.stockOnly}
                    onChange={handleStockOnlyChange} />
                Only show products in stock
            </p>
        </>
    )
}
