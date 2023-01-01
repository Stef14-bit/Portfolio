import "./App.css";
import Desktop from "./components/desktop";
import DesktopContainer from "./components/desktop-element-container";
import Start from "./components/start-bar";

function App() {
  return (
    <div className="App">
      <Desktop />
      <DesktopContainer />
      <Start />
    </div>
  );
}

export default App;
