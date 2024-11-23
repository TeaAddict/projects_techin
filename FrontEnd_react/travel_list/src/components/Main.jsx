import Item from "./Item";
import Sorter from "./Sorter";

const Main = ({ items, setItems }) => {
  const handleClearList = () => {
    setItems([]);
  };

  return (
    <div className="bg-[#5a3e2b] px-[2rem] lg:px-[10rem] py-[4rem] flex flex-col justify-between">
      <div className="grid grid-cols-3 lg:grid-cols-4 gap-10 items-start">
        {items.map((val) => (
          <Item data={val} setItems={setItems} key={val.description + val.id} />
        ))}
      </div>
      <div className="flex gap-7 justify-center">
        <Sorter items={items} setItems={setItems} />
        <button onClick={handleClearList}>Clear list</button>
      </div>
    </div>
  );
};

export default Main;
