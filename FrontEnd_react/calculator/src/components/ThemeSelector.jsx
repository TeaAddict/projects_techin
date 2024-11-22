const ThemelSelector = ({ theme = 1, setTheme }) => {
  const positions = { 1: "8%", 2: "40%", 3: "70%" };

  const onClickChangeTheme = () => {
    if (theme == 3) return setTheme(1);
    setTheme(theme + 1);
  };

  const textTheme = {
    1: "text-theme-1-text-white",
    2: "text-theme-2-text-dark-yellow",
    3: "text-theme-3-text-yellow",
  };

  const slideBgTheme = {
    1: "relative w-full h-[2rem] bg-theme-1-bg-toggle rounded-full content-center",
    2: "relative w-full h-[2rem] bg-theme-2-bg-toggle rounded-full content-center",
    3: "relative w-full h-[2rem] bg-theme-3-bg-toggle rounded-full content-center",
  };

  const slideCircleTheme = {
    1: "bg-theme-1-key-red relative h-[1.2rem] w-[1.2rem] bg-blue rounded-full transition-all",
    2: "bg-theme-2-key-orange relative h-[1.2rem] w-[1.2rem] bg-blue rounded-full transition-all",
    3: "bg-theme-3-key-cyan relative h-[1.2rem] w-[1.2rem] bg-blue rounded-full transition-all",
  };

  return (
    <div className="h-full flex gap-6 items-center">
      <div className="h-full grid grid-rows-2 font-[700]">
        <div className="row-start-2 row-end-3 content-center">
          <p className={textTheme[theme]}>THEME</p>
        </div>
      </div>
      <div className={textTheme[theme]}>
        <div className="flex flex-col font-[700] gap-2">
          <div className="flex gap-5 px-3">
            <p>1</p>
            <p>2</p>
            <p>3</p>
          </div>

          <div className={slideBgTheme[theme]} onClick={onClickChangeTheme}>
            <div
              className={slideCircleTheme[theme]}
              style={{ left: positions[theme] }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThemelSelector;
