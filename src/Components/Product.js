import React from 'react'

export default function Product(props) {
    const {product,onItemAdd}=props;
    return (
        <div className="productstyle">
            <img className="small" src={product.image} alt={product.name}></img>
            <h3>{product.name}</h3>
            <div>Rs.{product.price}</div>
            <div>
                <button onClick={()=>onItemAdd(product)}>Add to Cart</button>
            </div>
        </div>
    )
}
