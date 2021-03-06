import React from 'react';
import Product from '../Product'

export default function Main(props) {
    const {products,onItemAdd}=props;
    return (
        <main className="block col-2 products ">
            <h2>Products</h2>
            <div className="row">
                {products.map((product)=>(
                <Product key={product.id} product={product} onItemAdd={onItemAdd} />
            ))
            }
            </div>
            
        </main>
    )
}
