import "./App.scss";
import Layout from "./Layout";
import Volume from "./Volume";

function App() {
  const sounds = ["birds", "campfire", "lo-fi", "car", "footsteps", "rain", "thunder", "waves", "wind"];
  return (
    <div className="App">
      <Layout>
        <main>
          <section className="section">
            <h1> Ambient </h1>
            <article>
              {sounds.map((sound, key) => {
                return <Volume sound={sound} key={key} />;
              })}
            </article>
          </section>
        </main>
      </Layout>
    </div>
  );
}

export default App;
