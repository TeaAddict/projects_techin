import { Routes, Route } from "react-router";
import "./App.css";
import HomePage from "./components/HomePage";
import About from "./components/About";
import BlogList from "./components/BlogList";
import NotFound from "./components/NotFound";
import Child from "./components/Child";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<BlogList />}>
          <Route path="child" element={<Child />} />
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
