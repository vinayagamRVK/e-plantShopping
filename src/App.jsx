// App.jsx
import React, { useState } from "react";
import ProductList from "./ProductList";
import CartItem from "./CartItem";

function App() {
  const [showProductList, setShowProductList] = useState(true);

  const handleContinueShopping = () => {
    setShowProductList(true);
  };

  return (
    <div>
      {showProductList ? (
        <ProductList />
      ) : (
        <CartItem onContinueShopping={handleContinueShopping} />
      )}
    </div>
  );
}

export default App;
