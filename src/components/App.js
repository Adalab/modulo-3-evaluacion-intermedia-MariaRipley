import "../styles/main.scss";

function App() {
  return (
    <>
      <header>
        <h1>Frases de Friends</h1>
      </header>
      <main>
        <section>
          <form action="">
            <label htmlFor="quoteFilter">Filtrar por frase</label>
            <input type="text" />
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
          <ul></ul>
        </section>
      </main>
    </>
  );
}

export default App;
