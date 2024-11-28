import { Link } from "react-router";

const Product = ({ data }) => {
  const { id, name, price } = data;
  return (
    <div className="shadow-md p-2">
      <p>Product: {name}</p>
      <p>Price: {price}</p>
      <Link to={id}>
        <button>View Details</button>
      </Link>
    </div>
  );
};

export default Product;
