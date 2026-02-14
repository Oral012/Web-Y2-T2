import People from "./components/People";
import { WANTED_PEOPLE } from "./data.js";
function App() {
  return (<>
  <header>
    <h1>WANTED: DEAD OR ALIVE</h1>
    <p>These faces. These prices. Make your choice.</p>
    <main>
      <section className="people-category">
        <ul className="people">
          {WANTED_PEOPLE.map(item=><People p={item}/>)}
        </ul>
      </section>

    </main>
  </header>

  </>);
}

export default App;
