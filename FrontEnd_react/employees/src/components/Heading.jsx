const Heading = ({ search, setSearch }) => {
  return (
    <div className="bg-[#5ea4a4] min-h-[8rem] content-center pl-14">
      <input
        className=""
        placeholder="Search company"
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      />
    </div>
  );
};

export default Heading;
