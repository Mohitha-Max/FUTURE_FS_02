import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Navbar({ setShowOrders, setShowCart }) {
  const { cart } = useContext(CartContext);

  const totalItems = cart.reduce(
    (sum, p) => sum + p.qty,
    0
  );

  return (
    <nav className="bg-white shadow px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-blue-600">
        Mini E-Commerce
      </h1>

      <div className="flex gap-4 items-center">
        <button
          onClick={() => setShowOrders(true)}
          className="px-4 py-1 rounded bg-gray-200"
        >
          Orders
        </button>

        <button
          onClick={() => setShowCart(true)}
          className="relative bg-blue-600 text-white px-4 py-1 rounded"
        >
          Cart
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-xs px-2 rounded-full">
              {totalItems}
            </span>
          )}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
