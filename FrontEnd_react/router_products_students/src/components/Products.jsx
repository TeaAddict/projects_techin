import { useEffect, useState } from "react";
import { getAll } from "../helpers/get";
import Product from "./Product";

const Products = () => {
  const [products, setProducts] = useState();

  const handleGetProducts = async () => {
    setProducts(await getAll());
  };

  useEffect(() => {
    handleGetProducts();
  }, []);

  console.log(products);
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
