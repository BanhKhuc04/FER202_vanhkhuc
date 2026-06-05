import PizzaCard from "./PizzaCard";

const pizzas = [
  {
    name: "Margherita Pizza",
    oldPrice: "$28.00",
    price: "$14.00",
    sale: true,
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002",
  },
  {
    name: "Mushroom Pizza",
    oldPrice: "$22.00",
    price: "$17.00",
    sale: false,
    image: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3",
  },
  {
    name: "Hawaiian Pizza",
    oldPrice: "$20.00",
    price: "$16.00",
    sale: true,
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38",
  },
  {
    name: "Pesto Pizza",
    oldPrice: "$22.00",
    price: "$17.00",
    sale: true,
    image: "https://images.unsplash.com/photo-1594007654729-407eedc4be65",
  },
];

function Menu() {
  return (
    <section className="menu">
      <h2>Our Menu</h2>

      <div className="pizza-list">
        {pizzas.map((pizza, index) => (
          <PizzaCard key={index} pizza={pizza} />
        ))}
      </div>
    </section>
  );
}

export default Menu;