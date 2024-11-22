import "./App.css";
import { generateRandColorArr } from "./functions/hexColorGen";

function App() {
  const colors = generateRandColorArr(8);

  return (
    <div className="h-[100vh] content-center p-[2rem]">
      <ul className="list-none flex flex-col gap-[1px]">
        {colors.map((val) => (
          <li
            className={
              "p-[2rem] text-white text-lg font-bold text-center rounded-[0.3rem]"
            }
            style={{ backgroundColor: val }}
            key={val}
          >
            {val}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
