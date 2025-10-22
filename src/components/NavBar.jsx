import cartEmpty from "../assets/cart-empty.png";
import cartFull from "../assets/cart-full.png";

export default function NavBar({ cartCount }) {
  const cartIcon = cartCount > 0 ? cartFull : cartEmpty;

  return (
    <nav className="NavBar">
      <div className="NavDiv NavUser">
        <p>Welcome, Zack!</p>
      </div>
      <div className="NavDiv NavTitle">
        <h2>Grocery Shop</h2>
      </div>
      <div className="NavDiv NavCart">
        <img src={cartIcon} alt="" />
      </div>
    </nav>
  );
}
