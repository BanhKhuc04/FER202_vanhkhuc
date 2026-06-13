import { useCart } from "../context/CartContext";

const dishes = [
  { id: 0, name: "Uthappizza", price: "4.99", category: "mains", label: "Hot", description: "A unique combination of Indian Uthappam and Italian pizza." },
  { id: 1, name: "Zucchipakoda", price: "1.99", category: "appetizer", label: "", description: "Deep fried Zucchini coated with mildly spiced Chickpea flour batter." },
  { id: 2, name: "Vadonut", price: "1.99", category: "appetizer", label: "New", description: "A quintessential ConFusion experience, is it a vada or is it a donut?" },
  { id: 3, name: "ElaiCheese Cake", price: "2.99", category: "dessert", label: "", description: "A delectable semi-sweet New York Style Cheese Cake." },
];

export default function DishesList() {
  const { addToCart, totalItems, totalValue } = useCart();
  return (
    <div>
      <p>🛒 Cart: <strong>{totalItems}</strong> items | Total: <strong>${totalValue.toFixed(2)}</strong></p>
      <div className="dishes-grid">
        {dishes.map((dish) => (
          <div key={dish.id} className="dish-card">
            {dish.label && <span className="label">{dish.label}</span>}
            <h3>{dish.name}</h3>
            <p className="price">${dish.price}</p>
            <p className="desc">{dish.description}</p>
            <button onClick={() => addToCart(dish)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}
