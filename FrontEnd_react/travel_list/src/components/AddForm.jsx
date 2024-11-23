import { useState } from "react";

const AddForm = ({ setItems }) => {
  const [itemDescr, setItemDescr] = useState("");
  const [itemQuant, setItemQuant] = useState(1);

  const handleClick = (e) => {
    e.preventDefault();
    setItems((items) => {
      const res = items.sort((a, b) => b.id - a.id);
      return [
        ...items,
        {
          id: (res[0]?.id || 0) + 1,
          description: itemDescr,
          quantity: Number(itemQuant),
          packed: false,
        },
      ];
    });
  };

  return (
    <div className="flex border-[1rem] px-10 bg-[#e5771f] border-[#039a3e] items-center gap-4">
      <h3 className="text-5xl font-bold text-[#007800]">Form</h3>
      <p className="font-bold">What do you need for your 😍 trip?</p>
      <form className="add-form h-full gap-3">
        <select
          className="h-full"
          onChange={(e) => setItemQuant(e.target.value)}
        >
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
        <input
          placeholder="Item..."
          onChange={(e) => setItemDescr(e.target.value)}
          value={itemDescr}
        />
        <button onClick={handleClick}>Add</button>
      </form>
    </div>
  );
};

export default AddForm;
