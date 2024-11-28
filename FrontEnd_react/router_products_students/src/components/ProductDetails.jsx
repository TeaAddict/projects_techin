import { useEffect, useState } from "react";
import { getOne } from "../helpers/get";
import { useSearchParams } from "react-router";

const ProductDetails = () => {
  const [product, setProduct] = useState();
  const [searchParams, setSearchParams] = useSearchParams();

  const id = searchParams.get(":productsID") || "";

  const handleGetproduct = async () => {
    setProduct(await getOne(id));
  };

  useEffect(() => {
    handleGetproduct();
  }, []);
  return <div>ProductDetails</div>;
};

export default ProductDetails;
