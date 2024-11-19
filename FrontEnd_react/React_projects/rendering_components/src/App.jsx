import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
  const data = {
    title: "Getting Started React",
    subtitle: "JavaScript Library",
    author: {
      firstName: "Asabeneh",
      lastName: "Yetayeh",
    },
    date: "Oct 9, 2020",
    loggedIn: true,
  };

  const [isVisible, setVisible] = useState(false);

  const elements = (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
  let jsx;
  jsx = isVisible && elements;

  return (
    <>
      {jsx}
      <button onClick={() => setVisible(!isVisible)}>
        {isVisible ? "Hide content" : "Show content"}
      </button>
      {data.author.firstName || "Need name"}
    </>
  );
}

export default App;
