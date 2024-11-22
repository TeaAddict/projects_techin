import ThemelSelector from "./ThemeSelector";

const Header = ({ theme = 1, setTheme }) => {
  const textTheme = {
    1: "text-[32px] font-[700] text-theme-1-text-white",
    2: "text-[32px] font-[700] text-theme-2-text-dark-yellow",
    3: "text-[32px] font-[700] text-theme-3-text-yellow",
  };

  return (
    <div className="flex justify-between items-center">
      <h1 className={textTheme[theme]}>calc</h1>
      <ThemelSelector theme={theme} setTheme={setTheme} />
    </div>
  );
};

export default Header;
