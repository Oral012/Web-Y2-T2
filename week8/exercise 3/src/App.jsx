import React from "react";

import OrderCard from "./components/OrderCard";
import CheckoutButton from "./components/CheckoutButton";

const ORDERS = [
  {
    product: "Banana",
    price: 54.6,
    quantity: 3,
  },
  {
    product: "Computer",
    price: 100.5,
    quantity: 4,
  },
  {
    product: "Table",
    price: 1070,
    quantity: 3,
  },
];

function calculateTotal(orders) {
  return orders.reduce((sum, order) => sum + order.price * order.quantity, 0);
}

export default function App() {
  const [orders, setOrders] = React.useState(ORDERS);
  
  const updateQ = (index, newQ) => {
    setOrders(orders => orders.map((order, i) => i === index ? {...order, quantity: newQ} : order));
  };

  const total = calculateTotal(orders);
  
  return (
    <>
      <header>
        <h1>Your orders</h1>
      </header>

      <div className="order-list">
        {orders.map((order, index) => (
          <OrderCard key={index} order={order} index={index} updateQ={updateQ} />
        ))}
      </div>

      <CheckoutButton total={total} />
    </>
  );
}
