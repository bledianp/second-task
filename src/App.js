import "./App.css";
import Data from "./components/Data.jsx";
import List from "./components/List.jsx";
import SecondList from "./components/SecondList";

function App() {
  return (
    <div className="App">
      <Data />

      <List
        margin="20px"
        border="1px solid lightgray"
        question="Why park a domain name in Parkname?"
        answer="Parkname is the leading industry standard for domain name parking and monetization services."
      />

      <SecondList />
    </div>
  );
}

export default App;
