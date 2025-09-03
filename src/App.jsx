// App.jsx
import React, { useState } from "react";
import ProductList from "./ProductList";
import CartItems from "./CartItems";

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
        <CartItems onContinueShopping={handleContinueShopping} />
      )}
    </div>
  );
}

export default App;
