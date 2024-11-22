import { useState } from "react";
import "./App.css";
import Cards from "./components/Cards";
import Heading from "./components/Heading";
import data from "./data/data.json";

function App() {
  const [search, setSearch] = useState("");

  const filteredData = data.filter((val) =>
    val.company.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex flex-col gap-4 bg-[#f0fafb] py-5">
      <Heading search={search} setSearch={setSearch} />
      {filteredData.map((val) => (
        <Cards data={val} key={val.id} />
      ))}
    </div>
  );
}

export default App;
