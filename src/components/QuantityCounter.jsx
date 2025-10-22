export default function QuantityCounter({ quantity, setQuantity }) {
  const increase = () => setQuantity(quantity + 1);
  const decrease = () => setQuantity(quantity > 0 ? quantity - 1 : 0);

  return (
    <div className="counter-container">
      <button onClick={decrease}>−</button>
      <p>{quantity}</p>
      <button onClick={increase}>+</button>
    </div>
  );
}
