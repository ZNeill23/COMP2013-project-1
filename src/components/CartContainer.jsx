import CartCard from "./CartCard";

export default function CartContainer({
  cart,
  updateQuantity,
  removeItem,
  emptyCart,
}) {
  const total = cart.reduce(
    (sum, item) =>
      sum + parseFloat(item.price.replace("$", "")) * item.quantity,
    0
  );

  return (
    <div className="CartContainer">
      <h3>Cart Items: {cart.length}</h3>
      {cart.length === 0 ? (
        <p>No items in the cart.</p>
      ) : (
        <>
          {cart.map((item) => (
            <CartCard
              key={item.id}
              item={item}
              updateQuantity={updateQuantity}
              removeItem={removeItem}
            />
          ))}
          <div className="CartListBtns">
            <button className="RemoveButton" onClick={emptyCart}>
              Empty Cart
            </button>
            <button className="BuyButton">Checkout: ${total.toFixed(2)}</button>
          </div>
        </>
      )}
    </div>
  );
}
