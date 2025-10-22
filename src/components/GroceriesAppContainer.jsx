import { useState } from "react";
import products from "../data/products";
import NavBar from "./NavBar";
import ProductsContainer from "./ProductsContainer";
import CartContainer from "./CartContainer";

export default function GroceriesAppContainer() {
  const [cart, setCart] = useState([]);

  // I got looking more into alert() to see what else I could do. I almost did a modal like with a personal project but decided against it for now.
  // https://developer.mozilla.org/en-US/docs/Web/API/Window/alert
  const addToCart = (product, quantity) => {
    if (quantity <= 0) {
      alert("Please select at least one item before adding to cart!");
      return;
    }

    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (!existingItem) return [...prevCart, { ...product, quantity }];

      return prevCart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + quantity }
          : item
      );
    });
  };

  // I needed some better understanding on the .filter() method so I reviewed this page:
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
  const updateQuantity = (id, newQty) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === id ? { ...item, quantity: Math.max(0, newQty) } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeItem = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const emptyCart = () => {
    setCart([]);
  };

  return (
    <>
      <NavBar cartCount={cart.length} />
      <div className="GroceriesApp-Container">
        <ProductsContainer products={products} addToCart={addToCart} />
        <CartContainer
          cart={cart}
          updateQuantity={updateQuantity}
          removeItem={removeItem}
          emptyCart={emptyCart}
        />
      </div>
    </>
  );
}
