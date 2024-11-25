import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card";
import Header from "./components/Header";
import { robots } from "./data/robots";

function App() {
  const [find, setFind] = useState("");
  const [currentRobots, setCurrentRobots] = useState(robots);

  useEffect(() => {
    const filteredRobots = currentRobots.filter((val) =>
      val.name.toLowerCase().includes(find.toLowerCase())
    );
    if (filteredRobots == currentRobots) {
    }

    console.log(filteredRobots == currentRobots);
    // setCurrentRobots(filteredRobots);
  }, [find]);

  console.log(currentRobots);
  return (
    <div className="flex flex-col gap-4 p-5 lg:py-20 lg:px-[30rem] bg-gradient-to-r from-[#008081] to-[#1d0455]">
      <Header find={find} setFind={setFind} />
      <div className="grid grid-cols-3 gap-5">
        {currentRobots.map((val) => (
          <Card data={val} key={val.id} setCurrentRobots={setCurrentRobots} />
        ))}
      </div>
    </div>
  );
}

export default App;
