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
            <p>
              {"크롬에서 사용시"}
              <br /> {"설정 > 개인 정보 보호 및 보안 > 추가 콘텐츠 설정 > 소리 > 재생허용 사이트 추가"} <br />
              {"https://inhoopark.github.io/toy_ambient/"}
            </p>
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
