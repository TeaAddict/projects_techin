const Stats = ({ stats }) => {
  return (
    <div className="bg-[#A5527D] p-[1rem]">
      <div className="flex divide-x-[1px] divide-black justify-center">
        {Object.entries(stats).map((property) => (
          <div key={property[0]} className="px-[1rem] flex-1">
            <p>{property[0]}</p>
            <p className="text-black">{property[1]}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;
