import "./App.css";
import Logo from "./assets/Logo";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo />
        <Logo color="#09122F" />
        <Logo color="#09122F" width="190" height="36" />
      </header>
    </div>
  );
}

export default App;
