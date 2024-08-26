import { useState } from "react";
import data from "./data";
import List from "./List";

const App = () => {
  const [people, setPeople] = useState(data);


  // refresh to set people state back to data
  if (people.length === 0) {
    return <main>
      <button className="btn" onClick={() => setPeople(data)}>Refresh</button>
    </main>;
  }

  return (
    <main>
      <section className="container">
        <h3>{people.length} birthdays today.</h3>
        {/* pass down data as prop to component */}
        <List people={people} />

        {/* clear list */}
        <button type="button" className="btn btn-block" onClick={() => setPeople([])}>
          Clear All
        </button>
      </section>
    </main>
  );
};

export default App;