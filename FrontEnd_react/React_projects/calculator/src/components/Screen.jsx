const Screen = ({ result, theme }) => {
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  const textTheme = {
    1: "text-theme-1-text-white",
    2: "text-theme-2-text-dark-yellow",
    3: "text-theme-3-text-yellow",
  };
  const bgTheme = {
    1: "text-theme-1-text-white",
    2: "text-theme-2-text-dark-yellow",
    3: "text-theme-3-text-yellow",
  };

  return (
    <div className="bg-theme-1-bg-screen p-4 flex justify-end rounded-lg text-[32px] font-[700]">
      <div className={bgTheme[theme]}>
        <p className={textTheme[theme]}>{numberWithCommas(result)}</p>
      </div>
    </div>
  );
};

export default Screen;
