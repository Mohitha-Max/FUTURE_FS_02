import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function CartDrawer({ showCart, setShowCart }) {
  const { cart, placeOrder } = useContext(CartContext);

  if (!showCart) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-end z-20">
      <div className="bg-white w-80 h-full p-4">
        <h2 className="text-xl font-bold mb-4">
          Your Cart
        </h2>

        {cart.length === 0 ? (
          <p className="text-gray-500">
            Cart is empty
          </p>
        ) : (
          <>
            {cart.map((item) => (
              <div
                key={item.id}
                className="border-b py-2"
              >
                <p className="font-semibold">
                  {item.name}
                </p>
                <p>
                  {item.qty} × ₹{item.price}
                </p>
              </div>
            ))}

            <button
              onClick={() => {
                placeOrder();
                setShowCart(false);
              }}
              className="mt-4 w-full bg-green-600 text-white py-2 rounded"
            >
              Place Order
            </button>
          </>
        )}

        <button
          onClick={() => setShowCart(false)}
          className="mt-4 w-full bg-gray-300 py-2 rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default CartDrawer;
