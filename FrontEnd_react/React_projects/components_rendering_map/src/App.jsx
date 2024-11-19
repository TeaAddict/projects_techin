import "./App.css";
import Matrix from "./components/Matrix";

function App() {
  const num = 31;
  return (
    <div className="flex flex-col gap-5 bg-white text-black justify-center items-center">
      <div className="flex flex-col gap-5">
        <h1>30 Days Of React</h1>
        <p>Number Generator</p>
      </div>
      <Matrix num={num} />
    </div>
  );
}

export default App;
