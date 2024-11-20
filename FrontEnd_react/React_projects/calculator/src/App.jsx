import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import MainButtons from "./components/MainButtons";
import Screen from "./components/Screen";

function App() {
  const [theme, setTheme] = useState(1);

  const bgTheme = {
    1: "flex flex-col gap-8 bg-theme-1-bg-main rounded-lg p-8",
    2: "flex flex-col gap-8 bg-theme-2-bg-main rounded-lg p-8",
    3: "flex flex-col gap-8 bg-theme-3-bg-main rounded-lg p-8",
  };

  return (
    <div className={bgTheme[theme]}>
      <Header theme={theme} setTheme={setTheme} />
      <Screen result={399981} theme={theme} />
      <MainButtons theme={theme} />
    </div>
  );
}

export default App;
