import "../styles/main.scss";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [quoteList, setQuoteList] = useState([]);

  const [quoteSearch, setQuoteSearch] = useState("");

  const [characterFilter, setCharacterFilter] = useState("");

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

  const handleCharacterFilter = (ev) => {
    ev.preventDefault();
    setCharacterFilter(ev.target.value);
  };

  const renderQuoteList = () => {
    const filteredList = quoteList.filter(
      (eachQuote) =>
        (characterFilter === "" ||
          eachQuote.character.toLowerCase() ===
            characterFilter.toLowerCase()) &&
        eachQuote.quote.toLowerCase().includes(quoteSearch.toLowerCase()) &&
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
            <select
              name=""
              id=""
              onChange={handleCharacterFilter}
              value={characterFilter}
            >
              <option value="">Todos</option>
              <option value="Ross">Ross</option>
              <option value="Monica">Monica</option>
              <option value="Joey">Joey</option>
              <option value="Phoebe">Phoebe</option>
              <option value="Chandler">Chandler</option>
              <option value="Rachel">Rachel</option>
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
