import React from "react";
export default function OrderCard({order, index, updateQ}) {
  const sub = ()=>{
    if(order.quantity === 0) return;
    updateQ(index, order.quantity - 1);
  }
  
  return (
    <div className="order">
      <div>
        <h4>{order.product}</h4>
        <small>${order.price}</small>
      </div>

      <div className="order-quantity">
        <div className="order-button" 
          style={{ backgroundColor: order.quantity === 0 ? '#bfbfbf' : "" }} 
          onClick={sub}
        >-</div>
        <h4>{order.quantity}</h4>
        <div className="order-button" onClick={() => updateQ(index, order.quantity + 1)}>+</div>
      </div>
    </div>
  );
}
