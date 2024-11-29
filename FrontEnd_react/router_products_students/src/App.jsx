import { Outlet } from "react-router";
import "./App.css";
import Header from "./components/Header";

function App() {
  return (
    <div className="p-5">
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
