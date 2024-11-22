const Screen = ({ screen, theme }) => {
  // const bgScreenTheme = {
  //   1: "bg-theme-1-bg-screen p-4 flex justify-end rounded-lg text-[32px] font-[700]",
  //   2: "bg-theme-2-bg-screen p-4 flex justify-end rounded-lg text-[32px] font-[700]",
  //   3: "bg-theme-3-bg-screen p-4 flex justify-end rounded-lg text-[32px] font-[700]",
  // };

  const textTheme = {
    1: "text-theme-1-text-white",
    2: "text-theme-2-text-dark-yellow",
    3: "text-theme-3-text-yellow",
  };

  return (
    <div
      className={`bg-theme-${theme}-bg-screen p-4 flex justify-end rounded-lg text-[32px] font-[700]`}
    >
      <p className={textTheme[theme]}>{screen}</p>
    </div>
  );
};

export default Screen;
