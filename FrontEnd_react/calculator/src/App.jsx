import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import MainButtons from "./components/MainButtons";
import Screen from "./components/Screen";

function App() {
  const [theme, setTheme] = useState(1);
  const [screen, setScreen] = useState(0);

  // const bgTheme = {
  //   1: "bg-theme-1-bg-main p-8 flex justify-center h-[100vh]",
  //   2: "bg-theme-2-bg-main p-8 flex justify-center h-[100vh]",
  //   3: "bg-theme-3-bg-main p-8 flex justify-center h-[100vh]",
  // };

  return (
    <div
      className={`bg-theme-${theme}-bg-main p-8 flex justify-center h-[100vh]`}
    >
      <div className={`flex flex-col gap-6 w-full mobile:max-w-[25rem]`}>
        <Header theme={theme} setTheme={setTheme} />
        <Screen screen={screen} theme={theme} />
        <MainButtons theme={theme} setScreen={setScreen} />
      </div>
    </div>
  );
}

export default App;
