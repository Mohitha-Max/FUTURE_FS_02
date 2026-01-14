import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";

function Checkout() {
  const { cart, placeOrder } = useContext(CartContext);
  const [success, setSuccess] = useState(false);

  const handleOrder = () => {
    if (cart.length === 0) {
      alert("Cart is empty!");
      return;
    }

    placeOrder();
    setSuccess(true);
  };

  if (success) {
    return (
      <div className="mt-6 bg-green-100 p-4 rounded text-center">
        <h2 className="text-xl font-bold text-green-700">
          🎉 Order Placed Successfully!
        </h2>
        <p className="mt-2">You can view it in Order History.</p>
      </div>
    );
  }

  return (
    <div className="mt-6 bg-white p-4 rounded shadow">
      <h2 className="text-xl font-bold mb-4">Checkout</h2>

      <input
        type="text"
        placeholder="Name"
        className="w-full border p-2 mb-3 rounded"
      />

      <input
        type="text"
        placeholder="Address"
        className="w-full border p-2 mb-3 rounded"
      />

      <input
        type="text"
        placeholder="Payment Method"
        className="w-full border p-2 mb-3 rounded"
      />

      <button
        onClick={handleOrder}
        className="w-full bg-green-600 text-white py-2 rounded"
      >
        Place Order
      </button>
    </div>
  );
}

export default Checkout;
