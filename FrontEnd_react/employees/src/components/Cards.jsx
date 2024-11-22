const Cards = ({ data }) => {
  const {
    company,
    logo,
    new: newW,
    featured,
    position,
    postedAt,
    contract,
    location,
  } = data;
  return (
    <div className="flex gap-4 bg-white shadow-lg py-3 px-8">
      <img src={logo} className="object-contain" />
      <div>
        <div>
          <div className="flex gap-2">
            <p className="text-[#5ea3a0] font-bold">{company}</p>
            {newW && (
              <p className="bg-[#5ea3a0] rounded-full px-2 text-white">NEW!</p>
            )}
            {featured && (
              <p className="bg-[#2a3b35] rounded-full px-2 text-white">
                FEATURED
              </p>
            )}
          </div>
        </div>
        <p className="font-bold">{position}</p>
        <ul className="flex gap-7 text-gray-400 font-[500] list-disc">
          <li className="list-none">{postedAt}</li>
          <li>{contract}</li>
          <li>{location}</li>
        </ul>
      </div>
    </div>
  );
};

export default Cards;
