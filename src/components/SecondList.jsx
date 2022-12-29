import { useState } from "react";
import "../styles/secondList.css";
import List from "./List.jsx";
import { questions } from "../data.js";

const SecondList = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      <ul className="border">
        <li>
          <div className="aboutUs" onClick={() => setToggle(!toggle)}>
            <div>
              <img src="https://icons-for-free.com/iconfiles/png/512/avatar+human+male+man+people+person+profile+user+users+icon-1320190727966457290.png" />
              <div className="title">
                <h1>About Us</h1>
                <p>{questions.length} articles in this Topic</p>
              </div>
            </div>

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
          </div>
          {toggle && (
            <ul className="border">
              {questions.map((question) => {
                if (question === questions[questions.length - 1]) {
                  return (
                    <List
                      border="none"
                      question={question.question}
                      answer={question.answer}
                    />
                  );
                } else {
                  return (
                    <List
                      question={question.question}
                      answer={question.answer}
                    />
                  );
                }
              })}
            </ul>
          )}
        </li>
      </ul>
    </div>
  );
};

export default SecondList;
