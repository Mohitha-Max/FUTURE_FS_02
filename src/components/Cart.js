import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Cart() {
  const { cart, increaseQty, decreaseQty } = useContext(CartContext);

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  if (cart.length === 0) {
    return <p className="text-center mt-6">Cart is empty 🛒</p>;
  }

  return (
    <div className="mt-8 bg-white p-4 rounded shadow">
      <h2 className="text-xl font-bold mb-4">Your Cart</h2>

      {cart.map((item) => (
        <div
          key={item.id}
          className="flex justify-between items-center mb-3"
        >
          <div>
            <p className="font-semibold">{item.name}</p>
            <p className="text-gray-600">₹{item.price}</p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => decreaseQty(item.id)}
              className="bg-red-500 text-white px-2 rounded"
            >
              −
            </button>

            <span>{item.qty}</span>

            <button
              onClick={() => increaseQty(item.id)}
              className="bg-green-500 text-white px-2 rounded"
            >
              +
            </button>
          </div>
        </div>
      ))}

      {/* ✅ TOTAL — ONLY ONCE */}
      <div className="mt-4 text-right text-lg font-bold">
        Total: ₹{total}
      </div>
    </div>
  );
}
export default Cart;

