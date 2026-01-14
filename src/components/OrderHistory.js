import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function OrderHistory() {
  const { orders } = useContext(CartContext);

  if (orders.length === 0)
    return <p>No orders yet</p>;

  return (
    <>
      <h2 className="text-2xl font-bold mb-4">
        Your Orders
      </h2>

      {orders.map((o) => (
        <div
          key={o.id}
          className="bg-white p-4 mb-4 rounded shadow"
        >
          <p>Date: {o.date}</p>
          <p>Total: ₹{o.total}</p>
        </div>
      ))}
    </>
  );
}

export default OrderHistory;
