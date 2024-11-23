const Header = ({ find, setFind }) => {
  return (
    <div className="flex flex-col gap-10 items-center">
      <h1 className="text-[#06d1cb] font-monoton text-4xl">ROBOFRIENDS</h1>
      <input
        className="w-[25%] bg-[#cce8fe]"
        placeholder="search for robots"
        onChange={(e) => setFind(e.target.value)}
        value={find}
      />
    </div>
  );
};

export default Header;
