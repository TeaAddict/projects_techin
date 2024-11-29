import { Link, Outlet } from "react-router";

const Categories = () => {
  return (
    <div className="flex flex-col gap-5 py-5">
      <h1 className="text-3xl">Product categories:</h1>
      <div className="flex ">
        <ul className="flex gap-4 p-2">
          <li>
            <Link
              to="fruit"
              className="border-2 border-gray-500 rounded-md p-1"
            >
              Fruits
            </Link>
          </li>
          <li>
            <Link
              to="drink"
              className="border-2 border-gray-500 rounded-md p-1"
            >
              Drinks
            </Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </div>
  );
};

export default Categories;
