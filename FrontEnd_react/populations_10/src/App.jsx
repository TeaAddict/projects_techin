import "./App.css";
import Header from "./components/Header";
import Stats from "./components/Stats";

function App() {
  return (
    <div className="flex flex-col gap-4 py-5">
      <Header />
      <Stats />
    </div>
  );
}

export default App;
