import { useState } from "react";
import "./App.css";
import AddForm from "./components/AddForm";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import { initialItems } from "./data/initialItems";

function App() {
  const [items, setItems] = useState(initialItems);
  return (
    <div className="app p-5">
      <Header />
      <AddForm setItems={setItems} />
      <Main items={items} setItems={setItems} />
      <Footer items={items} />
    </div>
  );
}

export default App;
