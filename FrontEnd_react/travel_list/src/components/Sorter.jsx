import { useEffect, useState } from "react";

const Sorter = ({ items, setItems }) => {
  const [sortBy, setSortBy] = useState("inpDesc");

  const sortItems = (sortType, items) => {
    const itemsCopy = [...items];
    switch (sortType) {
      case "inpDesc":
        return itemsCopy.sort((a, b) => a.id - b.id);
      case "inpAsc":
        return itemsCopy.sort((a, b) => b.id - a.id);
      case "packedDesc":
        return itemsCopy.sort((a, b) => b.packed - a.packed);
      case "packedAsc":
        return itemsCopy.sort((a, b) => a.packed - b.packed);
      case "quantDesc":
        return itemsCopy.sort((a, b) => b.quantity - a.quantity);
      case "quantAsc":
        return itemsCopy.sort((a, b) => a.quantity - b.quantity);
      default:
        return itemsCopy;
    }
  };

  const handleSort = (e) => {
    const newSortBy = e.target.value;
    setSortBy(newSortBy);
    setItems((items) => sortItems(newSortBy, items));
  };

  useEffect(() => {
    const sortedItems = sortItems(sortBy, items);
    if (JSON.stringify(sortedItems) !== JSON.stringify(items)) {
      setItems(sortedItems);
    }
  }, [items, sortBy, setItems]);

  return (
    <select className="uppercase" onChange={handleSort} value={sortBy}>
      <option value="inpDesc">Sort by input order desc</option>
      <option value="inpAsc">Sort by input order asc</option>
      <option value="packedDesc">sort by packed desc</option>
      <option value="packedAsc">sort by packed asc</option>
      <option value="quantDesc">sort by quantity desc</option>
      <option value="quantAsc">sort by quantity asc</option>
    </select>
  );
};

export default Sorter;
