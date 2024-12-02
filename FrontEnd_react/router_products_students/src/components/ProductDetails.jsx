import { useEffect, useState } from "react";
import { getOne } from "../helpers/product/get";
import { useParams } from "react-router";

const ProductDetails = () => {
  const [product, setProduct] = useState();

  const { productID } = useParams();

  const handleGetproduct = async () => {
    setProduct(await getOne(productID));
  };

  useEffect(() => {
    handleGetproduct();
  }, []);

  if (!product) return <p>Product does not exist</p>;
  return (
    <div>
      <p>Product: {product.name}</p>
      <p>Price: {product.price}</p>
      <p>Description: {product.description}</p>
    </div>
  );
};

export default ProductDetails;
