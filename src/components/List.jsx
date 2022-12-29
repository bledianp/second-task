import { useState } from "react";
import "../styles/list.css";

const List = ({ margin, border, question, answer }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="List" style={{ margin: margin, border: border }}>
      <li onClick={() => setToggle(!toggle)}>
        <h4>{question}</h4>
        {toggle ? (
          <img
            src="https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-up-01-512.png"
            className="arrow"
          />
        ) : (
          <img
            src="https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-down-01-512.png"
            className="arrow"
          />
        )}
      </li>
      {toggle && <p>{answer}</p>}
    </div>
  );
};

export default List;
