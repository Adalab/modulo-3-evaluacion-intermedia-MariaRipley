import "../styles/main.scss";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [quoteList, setQuoteList] = useState([]);

  const [quoteSearch, setQuoteSearch] = useState("");

  useEffect(() => {
    fetch(
      "https://beta.adalab.es/curso-intensivo-fullstack-recursos/apis/quotes-friends-tv-v1/quotes.json"
    )
      .then((response) => response.json())
      .then((data) => {
        setQuoteList(data);
      });
  }, []);

  const handleQuoteSearch = (ev) => {
    setQuoteSearch(ev.target.value);
  };

  const renderQuoteList = () => {
    const filteredList = quoteList.filter((eachQuote) =>
      eachQuote.quote.toLowerCase().includes(quoteSearch.toLowerCase())
    );

    return filteredList.map((eachQuote, index) => (
      <li key={index}>
        <p>
          {eachQuote.quote}
          <span>{eachQuote.character}</span>
        </p>
      </li>
    ));
  };

  return (
    <>
      <header>
        <h1>Frases de Friends</h1>
      </header>
      <main>
        <section>
          <form action="">
            <label htmlFor="quoteFilter">Filtrar por frase</label>
            <input
              type="search"
              value={quoteSearch}
              onInput={handleQuoteSearch}
            />
            <label htmlFor="characterFilter">Filtrar por personaje</label>
            <select name="" id="">
              <option value="">Todos</option>
              <option value="">Ross</option>
              <option value="">Monica</option>
              <option value="">Joey</option>
              <option value="">Phoebe</option>
              <option value="">Chandler</option>
              <option value="">Rachel</option>
            </select>
          </form>
        </section>
        <section>
          <ul>{renderQuoteList()}</ul>
        </section>
      </main>
    </>
  );
}

export default App;
