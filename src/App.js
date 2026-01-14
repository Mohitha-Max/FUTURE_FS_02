import { useState } from "react";
import products from "./data/products";
import ProductCard from "./components/ProductCard";
import Navbar from "./components/Navbar";
import CategoryFilter from "./components/CategoryFilter";
import OrderHistory from "./components/OrderHistory";
import CartDrawer from "./components/CartDrawer";

function App() {
  const [showOrders, setShowOrders] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [category, setCategory] = useState("All");

  const filtered =
    category === "All"
      ? products
      : products.filter((p) => p.category === category);

  return (
    <>
      <Navbar
        setShowOrders={setShowOrders}
        setShowCart={setShowCart}
      />

      <CartDrawer
        showCart={showCart}
        setShowCart={setShowCart}
      />

      <div className="p-6 bg-gray-100 min-h-screen">
        {showOrders ? (
          <OrderHistory />
        ) : (
          <>
            <CategoryFilter
              selected={category}
              setSelected={setCategory}
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {filtered.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default App;
