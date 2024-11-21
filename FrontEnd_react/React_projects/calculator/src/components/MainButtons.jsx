import { useState } from "react";

const MainButtons = ({ theme, setScreen }) => {
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

  const bgTheme = {
    1: "bg-theme-1-bg-toggle rounded-lg p-4",
    2: "bg-theme-2-bg-toggle rounded-lg p-4",
    3: "bg-theme-3-bg-toggle rounded-lg p-4",
  };

  const smallBtn = {
    1: { normal: "theme-1-btn--normal", dark: "theme-1-btn--dark" },
    2: { normal: "theme-2-btn--normal", dark: "theme-2-btn--dark" },
    3: { normal: "theme-3-btn--normal", dark: "theme-3-btn--dark" },
  };

  const largeBtn = {
    1: {
      normal: "theme-1-btn--dark-large",
      highlighted: "theme-1-btn--highlighted-large",
    },
    2: {
      normal: "theme-2-btn--dark-large",
      highlighted: "theme-2-btn--highlighted-large",
    },
    3: {
      normal: "theme-3-btn--dark-large",
      highlighted: "theme-3-btn--highlighted-large",
    },
  };

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

    if (operationSymbols.includes(value)) {
      // if (valueSide == "right") {
      //   const res = operations[operation]();
      //   setOperation(value);
      //   setValues([res, ""]);
      //   setScreen(`${res}${value}`);
      // } else {
      setOperation(value);
      setValueSide("right");
      setScreen(values[0] + value + values[1]);
      // }
      return;
    } else if (valueSide == "right") {
      if (value == "DEL") {
        let newVal = values;
        if (values[1] == 0 || !values[1]) {
          return;
        } else if (String(values[1]).length == 1) {
          newVal = [newVal[0], 0];
        } else {
          newVal = [values[0], values[1].slice(0, -1)];
        }
        setValues(newVal);
        setScreen(newVal[0] + operation + newVal[1]);
        return;
      }
      if (!values[1] || values[1] == 0) {
        valueArr = [values[0], value];
        setValues(valueArr);
      } else {
        valueArr = [values[0], values[1] + value];
        setValues(valueArr);
      }
    } else if (valueSide == "left") {
      if (value == "DEL") {
        let newVal = values;

        if (values[0] == 0 || !values[0]) {
          return;
        } else if (String(values[0]).length == 1) {
          newVal = [0, ""];
        } else {
          newVal = [values[0].slice(0, -1), ""];
        }
        setValues(newVal);
        setScreen(newVal[0] + operation + newVal[1]);
        return;
      }
      if (!values[0] || values[0] == 0) {
        valueArr = [value, values[1]];
        setValues(valueArr);
      } else {
        valueArr = [values[0] + value, values[1]];
        setValues(valueArr);
      }
    }
    const screenRes = valueArr[0] + operation + valueArr[1];
    setScreen(screenRes);
  };

  const onReset = () => {
    setValues(["", ""]);
    setValueSide("left");
    setOperation("");
    setScreen("0");
  };

  const onResult = () => {
    const res = operations[operation]();
    setOperation("");
    setValueSide("left");
    setValues([res, ""]);
    setScreen(res);
  };

  console.log(`Values: ${values}, Operation: ${operation}, Side: ${valueSide}`);
  return (
    <div className={bgTheme[theme]}>
      <div className="flex flex-col gap-3">
        <div className="grid grid-cols-4 gap-3">
          {buttons1.map((button, index) => (
            <button
              key={button + index}
              className={
                button == "DEL" ? smallBtn[theme].dark : smallBtn[theme].normal
              }
              onClick={() => onClick(button)}
            >
              {button}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-3">
          <button className={largeBtn[theme].normal} onClick={onReset}>
            RESET
          </button>
          <button className={largeBtn[theme].highlighted} onClick={onResult}>
            =
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainButtons;
