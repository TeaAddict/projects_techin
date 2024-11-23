const Card = ({ data }) => {
  const { id, avatar, name, email, reserved } = data;

  return (
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

        <p
          className={`${
            reserved == "true" ? "bg-[#1d0859]" : "text-black"
          } text-white px-7`}
        >
          Reserve
        </p>
      </figure>
    </div>
  );
};

export default Card;
