import "../styles/card.css";

const Card = ({ title, price, prevPrice }) => {
  return (
    <div className="card">
      <h4>{title}</h4>
      <h5>{price}</h5>
      <p>{prevPrice}</p>
      <button className="buyBtn">Buy now</button>
    </div>
  );
};

export default Card;
