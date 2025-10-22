import QuantityCounter from "./QuantityCounter";

export default function CartCard({ item, updateQuantity, removeItem }) {
  const price = parseFloat(item.price.replace("$", ""));
  const subtotal = (price * item.quantity).toFixed(2);

  return (
    <div className="CartCard">
      <div className="CartCardInfo">
        <img src={item.image} alt={item.productName} />
        <p>{item.productName}</p>
        <p>{item.price}</p>
        <QuantityCounter
          quantity={item.quantity}
          setQuantity={(newQty) => updateQuantity(item.id, newQty)}
        />
      </div>
      <div className="CartCardActions">
        <p className="CartItemTotal">
          <strong>Total: ${subtotal}</strong>
        </p>
        <button className="RemoveButton" onClick={() => removeItem(item.id)}>
          Remove
        </button>
      </div>
    </div>
  );
}
