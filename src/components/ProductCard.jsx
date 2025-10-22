import { useState } from "react";
import QuantityCounter from "./QuantityCounter";

export default function ProductCard({ product, addToCart }) {
  const [quantity, setQuantity] = useState(0);

  return (
    <div className="ProductCard">
      <h4>{product.productName}</h4>
      <img src={product.image} alt={product.productName} />
      <p>
        <strong>{product.brand}</strong>
      </p>
      <div className="ProductQuantityDiv">
        <QuantityCounter quantity={quantity} setQuantity={setQuantity} />
      </div>
      <p>
        <strong>Quantity: {product.quantity}</strong>
      </p>
      <p>
        <strong>Price: {product.price}</strong>
      </p>
      <button onClick={() => addToCart(product, quantity)}>Add to Cart</button>
    </div>
  );
}
