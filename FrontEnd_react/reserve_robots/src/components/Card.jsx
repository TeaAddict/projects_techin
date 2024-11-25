const Card = ({ data, setCurrentRobots }) => {
  const { id, avatar, name, email, reserved } = data;

  const handleClick = () => {
    setCurrentRobots((currentRobots) =>
      currentRobots.map((val) =>
        val.id == id
          ? {
              ...val,
              reserved: val.reserved == "true" ? "false" : "true",
            }
          : val
      )
    );
  };

  return (
    <div className="relative flex flex-col items-center">
      <div
        key={id}
        className={`bg-[#91f5d1] flex justify-center p-3 rounded-md ${
          reserved == "false" && "grayscale"
        }`}
      >
        <figure className="flex flex-col items-center gap-2">
          <img src={avatar} />
          <figcaption>
            <p className="font-bold">{name}</p>
            <p className="text-xs">{email}</p>
          </figcaption>

          <button
            className={`${
              reserved == "true" ? "bg-[#1d0859]" : "invisible"
            } text-white px-7`}
            onClick={handleClick}
          >
            Reserve
          </button>
        </figure>
      </div>
      {reserved == "false" && (
        <button
          className="relative top-[-2.25rem] text-red-700 "
          onClick={handleClick}
        >
          Reserve
        </button>
      )}
    </div>
  );
};

export default Card;
