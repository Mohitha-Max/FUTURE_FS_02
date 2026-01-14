import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function ProductCard({ product }) {
  const { cart, addToCart, increaseQty, decreaseQty } =
    useContext(CartContext);

  const item = cart.find((p) => p.id === product.id);

  return (
    <div className="bg-white rounded shadow p-4">
      <img
        src={product.image}
        alt={product.name}
        className="h-40 mx-auto object-contain"
      />

      <h3 className="font-semibold mt-2">
        {product.name}
      </h3>
      <p className="font-bold">₹{product.price}</p>

      {!item ? (
        <button
          onClick={() => addToCart(product)}
          className="mt-3 w-full bg-blue-600 text-white py-2 rounded"
        >
          Add to Cart
        </button>
      ) : (
        <div className="mt-3 flex justify-between items-center">
          <button
            onClick={() => decreaseQty(product.id)}
            className="bg-red-500 text-white px-3 rounded"
          >
            −
          </button>
          <span className="font-bold">
            {item.qty}
          </span>
          <button
            onClick={() => increaseQty(product.id)}
            className="bg-green-500 text-white px-3 rounded"
          >
            +
          </button>
        </div>
      )}
    </div>
  );
}

export default ProductCard;
