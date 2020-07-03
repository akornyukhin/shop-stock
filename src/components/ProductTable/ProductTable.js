import React from 'react'
import ProductCategoryRow from '../ProductCategoryRow/ProductCategoryRow.js'
import ProductRow from '../ProductRow/ProductRow.js'

export default function ProductTable(props) {
    const rows = [];
    let lastCategory = null;
    
    props.products.forEach((product) => {
      if (product.category !== lastCategory) {
        rows.push(
          <ProductCategoryRow
            category={product.category}
            key={product.category} />
        );
      }
      rows.push(
        <ProductRow
          product={product}
          key={product.name} />
      );
      lastCategory = product.category;
    });
    
    
    return (
       <>
       <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
       </>
    )
}

