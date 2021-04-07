import React from 'react'

export default function Basket(props) {
    const {cartItems,onItemAdd,onItemRemove}=props;
    const TotalPrice=cartItems.reduce((a,c)=>a+c.price *c.qty,0);
    return (
        <aside className="block col-1">
            <h2>Cart Items</h2>
            <div>{cartItems.length===0 && <div>Cart is empty.</div>}</div>
            {cartItems.map((item)=>(
                <div key={item.id} className="row">
                    <div className="col-2">{item.name}</div>
                    <div className="col-2">
                        <button onClick={()=>onItemAdd(item)} className="add">ADD</button>
                        <button onClick={()=>onItemRemove(item)} className="remove">Remove</button>
                    </div>
                    <div className="col-2">{item.qty} * Rs.{item.price.toFixed(2)}</div>
                </div>
    ))}
    {cartItems.length!==0 && (
        <>
        <hr></hr>
        <div className="row">
            <div className="col-2">Total Price:</div>
            <div className="col-2">{TotalPrice.toFixed(2)}</div>
        </div>
        <hr/>
        <div className="row">
            <button onClick={()=>alert('THANKS FOR SHOPPING WITH US')}>Checkout</button>
        </div>
        </>
    )}
        </aside>
    )
}

