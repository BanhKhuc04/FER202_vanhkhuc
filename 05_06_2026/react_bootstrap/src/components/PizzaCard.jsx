function PizzaCard({ pizza }) {
  return (
    <div className="pizza-card">
      <div className="image-box">
        {pizza.sale && <span className="sale">SALE</span>}
        <img src={pizza.image} alt={pizza.name} />
      </div>

      <div className="pizza-info">
        <h3>{pizza.name}</h3>
        <p>
          <span className="old-price">{pizza.oldPrice}</span>
          <span className="price">{pizza.price}</span>
        </p>
        <button>Buy</button>
      </div>
    </div>
  );
}

export default PizzaCard;