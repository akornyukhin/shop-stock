import React from 'react'

export default function ProductRow(props) {
    const product = props.product;
    const name = product.stocked ?
      product.name :
      <span style={{color: 'red'}}>
        {product.name}
      </span>
    
    const price = product.stocked ?
    product.price :
    <span style={{color: 'red'}}>
      {product.price}
    </span>


    return (
      <>
      <tr>
        <td>{name}</td>
        <td>{price}</td>
      </tr>
      </>
    )
}
