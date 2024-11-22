const Screen = ({ screen, theme }) => {
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  const textTheme = {
    1: "text-theme-1-text-white",
    2: "text-theme-2-text-dark-yellow",
    3: "text-theme-3-text-yellow",
  };

  const bgScreenTheme = {
    1: "bg-theme-1-bg-screen p-4 flex justify-end rounded-lg text-[32px] font-[700]",
    2: "bg-theme-2-bg-screen p-4 flex justify-end rounded-lg text-[32px] font-[700]",
    3: "bg-theme-3-bg-screen p-4 flex justify-end rounded-lg text-[32px] font-[700]",
  };

  return (
    <div className={bgScreenTheme[theme]}>
      {/* <p className={textTheme[theme]}>{numberWithCommas(screen)}</p> */}
      <p className={textTheme[theme]}>{screen}</p>
    </div>
  );
};

export default Screen;
