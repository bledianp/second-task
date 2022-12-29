import Card from "./Card";
import "../styles/cardlist.css";

const CardList = ({ data }) => {
  console.log(data);
  return (
    <div className="cardList">
      {data.map((dat) => {
        return (
          <Card title={dat.title} price={dat.price} prevPrice={dat.prevPrice} />
        );
      })}
    </div>
  );
};

export default CardList;
