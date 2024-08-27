import { useState } from "react";
import data from "./data";
import { nanoid } from "nanoid";



const App = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);


  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(count);
    setText(data.slice(0, amount));
  };

  return (
    <section className="section-center">
      <h4>Tired of boring lorem ipsum?</h4>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="amount">paragraphs:</label>
        <input type="number" name="amount" min="1" step="1" max="8" id="amount" value={count} onChange={(e) => setCount(e.target.value)} />
        <button className="btn" type="submit">generate</button>
      </form>

      <article className="lorem-text">
        {text.map((item) => {
          return <p key={nanoid()}>{item}</p>;
        })}
      </article>
    </section>
  );
};
export default App;