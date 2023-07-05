import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Dallas" />
        <footer>
          <a
            rel="noreferrer"
            href="https://github.com/Michee029/weather-homework-react"
            className="link-secondary"
            target="_blank"
          >
            Open-sourced
          </a>{" "}
          by Michelle Soriano.
        </footer>
      </div>
    </div>
  );
}

export default App;
