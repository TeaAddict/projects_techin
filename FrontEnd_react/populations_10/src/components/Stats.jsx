import { tenHighestPopulation as data } from "../data/ten_most_highest_populations";

const Stats = () => {
  const highestVal = data.sort((a, b) => b.population - a.population)[0]
    .population;

  const getPercentage = (num, percentageOf) => {
    return Math.round((num / percentageOf) * 100);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="w-[60%]">
        {data.map((val) => {
          {
            console.log(getPercentage(val.population, highestVal));
            return (
              <div
                key={val.country}
                className="grid grid-cols-[auto_1fr_auto] gap-1 items-center"
              >
                <p className="w-[5rem]">{val.country}</p>
                <div
                  className={`bg-[#ffa500] h-[1rem] rounded-sm`}
                  style={{
                    width: getPercentage(val.population, highestVal) + "%",
                  }}
                ></div>
                <p>{val.population}</p>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Stats;
