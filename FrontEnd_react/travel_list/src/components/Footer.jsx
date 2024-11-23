const Footer = ({ items }) => {
  const { count, packed } = items.reduce(
    (acc, val) => {
      return {
        count: (acc.count += 1),
        packed: val.packed ? (acc.packed += 1) : acc.packed,
      };
    },
    { count: 0, packed: 0 }
  );

  const percentage = Math.round((packed / count) * 100);

  return (
    <div className="stats">
      <p>{`💼 You have ${count} items on your list, and you already packed ${packed} (${percentage}%)`}</p>
    </div>
  );
};

export default Footer;
