import { useEffect, useState } from "react";
import { getAll } from "../helpers/product/get";
import Product from "./Product";
import { useParams } from "react-router";

const Products = () => {
  const [products, setProducts] = useState();
  const { category } = useParams();

  const handleGetProducts = async () => {
    const res = await getAll();
    const filtered = res.filter((product) => product.category == category);
    setProducts(filtered);
  };

  useEffect(() => {
    handleGetProducts();
  }, [category]);

  if (!products) return <p>Error loading page</p>;
  return (
    <div className="flex flex-col gap-2">
      {products.map((product) => (
        <Product data={product} key={product.id} />
      ))}
    </div>
  );
};

export default Products;
