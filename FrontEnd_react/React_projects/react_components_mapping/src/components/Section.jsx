import Css from "./Css";
import Html from "./Html";
import Js from "./Js";
import React from "./React";

const Section = () => {
  const arr = [
    <li key={1}>
      <Html />
    </li>,
    <li key={2}>
      <Css />
    </li>,
    <li key={3}>
      <Js />
    </li>,
    <li key={4}>
      <React />
    </li>,
  ];
  return (
    <>
      <div className="section">
        <h1>Front End Technologies</h1>
        <ul className="section__ul">{arr.map((val) => val)}</ul>
      </div>
    </>
  );
};

export default Section;
