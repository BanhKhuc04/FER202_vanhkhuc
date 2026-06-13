import { useCart } from "../context/CartContext";

export default function Cart() {
  const { cartItems, removeFromCart, clearCart, totalItems, totalValue } = useCart();
  if (cartItems.length === 0) return <p>Your cart is empty.</p>;
  return (
    <div>
      <p>Total items: <strong>{totalItems}</strong> | Total: <strong>${totalValue.toFixed(2)}</strong></p>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.name} x{item.qty} — ${(parseFloat(item.price) * item.qty).toFixed(2)}
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <button onClick={clearCart}>Clear Cart</button>
    </div>
  );
}
