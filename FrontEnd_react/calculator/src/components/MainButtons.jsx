import { useState } from "react";

const MainButtons = ({ theme, setScreen }) => {
  // const bgTheme = {
  //   1: "bg-theme-1-bg-toggle rounded-lg p-4",
  //   2: "bg-theme-2-bg-toggle rounded-lg p-4",
  //   3: "bg-theme-3-bg-toggle rounded-lg p-4",
  // };

  // const smallBtn = {
  //   1: { normal: "theme-1-btn--normal", dark: "theme-1-btn--dark" },
  //   2: { normal: "theme-2-btn--normal", dark: "theme-2-btn--dark" },
  //   3: { normal: "theme-3-btn--normal", dark: "theme-3-btn--dark" },
  // };

  // const largeBtn = {
  //   1: {
  //     normal: "theme-1-btn--dark-large",
  //     highlighted: "theme-1-btn--highlighted-large",
  //   },
  //   2: {
  //     normal: "theme-2-btn--dark-large",
  //     highlighted: "theme-2-btn--highlighted-large",
  //   },
  //   3: {
  //     normal: "theme-3-btn--dark-large",
  //     highlighted: "theme-3-btn--highlighted-large",
  //   },
  // };

  const buttons1 = [
    "7",
    "8",
    "9",
    "DEL",
    "4",
    "5",
    "6",
    "+",
    "1",
    "2",
    "3",
    "-",
    ".",
    "0",
    "/",
    "x",
  ];

  const operationSymbols = "/x+-";

  const [values, setValues] = useState(["", ""]);
  const [operation, setOperation] = useState("");
  const [valueSide, setValueSide] = useState("left");

  const operations = {
    "+": () => Number(values[0]) + Number(values[1]),
    "-": () => Number(values[0]) - Number(values[1]),
    x: () => Number(values[0]) * Number(values[1]),
    "/": () => Number(values[0]) / Number(values[1]),
  };

  const onClick = (value) => {
    let valueArr = values;
    let operator = operation;

    if (operationSymbols.includes(value)) {
      operator = value;
      setOperation(value);
      setValueSide("right");
    } else if (valueSide == "left") {
      if (value == "DEL") {
        if (values[0] == 0 || !values[0]) {
          return;
        } else if (String(values[0]).length == 1) {
          valueArr = [0, ""];
        } else {
          valueArr = [String(values[0]).slice(0, -1), ""];
        }
      } else if (value == "." && !value[0]) {
        valueArr = ["0.", values[1]];
      } else if (!values[0] || values[0] == 0) {
        valueArr = [value, values[1]];
      } else {
        valueArr = [values[0] + value, values[1]];
      }
    } else if (valueSide == "right") {
      if (value == "DEL") {
        if (values[1] == 0 || !values[1]) {
          return;
        } else if (String(values[1]).length == 1) {
          valueArr = [valueArr[0], 0];
        } else {
          valueArr = [values[0], String(values[1]).slice(0, -1)];
        }
      } else if (!values[1] || values[1] == 0) {
        valueArr = [values[0], value];
      } else {
        valueArr = [values[0], values[1] + value];
      }
    }
    setValues(valueArr);
    const screenRes = valueArr[0] + operator + valueArr[1];
    setScreen(screenRes);
  };

  const onReset = () => {
    setValues(["", ""]);
    setValueSide("left");
    setOperation("");
    setScreen("0");
  };

  const onResult = () => {
    if (!operation || !values[1]) return;
    const res = operations[operation]();
    setOperation("");
    setValueSide("left");
    setValues([res, ""]);
    setScreen(res);
  };

  return (
    <div className={`bg-theme-${theme}-bg-toggle rounded-lg p-4`}>
      <div className="flex flex-col gap-3">
        <div className="grid grid-cols-4 gap-3">
          {buttons1.map((button, index) => (
            <button
              key={button + index}
              className={
                button == "DEL"
                  ? `theme-${theme}-btn--dark`
                  : `theme-${theme}-btn--normal`
              }
              onClick={() => onClick(button)}
            >
              {button}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-3">
          <button
            className={`theme-${theme}-btn--dark-large`}
            onClick={onReset}
          >
            RESET
          </button>
          <button
            className={`theme-${theme}-btn--highlighted-large`}
            onClick={onResult}
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainButtons;
