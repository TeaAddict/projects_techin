const Item = ({ data, setItems }) => {
  const { description, quantity, packed } = data;
  // { id: 2, description: "Socks", quantity: 12, packed: false },

  const handlePack = () => {
    setItems((items) => {
      return items.map((item) =>
        item.id == data.id ? { ...item, packed: !item.packed } : item
      );
    });
  };

  const handleDelete = () => {
    setItems((items) => {
      return items.filter((item) => item.id != data.id);
    });
  };

  return (
    <div className="flex text-[#ffebb3] items-center gap-4">
      <input type="checkbox" defaultChecked={packed} onChange={handlePack} />
      <p>{quantity}</p>
      <p>{description}</p>
      <button className="bg-transparent p-0" onClick={handleDelete}>
        ❌
      </button>
    </div>
  );
};

export default Item;
