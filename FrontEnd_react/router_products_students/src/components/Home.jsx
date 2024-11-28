import { NavLink } from "react-router";

const Home = () => {
  return (
    <div>
      <h1>Welcome to home page!</h1>
      <nav className="flex">
        <div className="flex gap-3 bg-red-500 rounded-md p-2">
          <NavLink to="about">About</NavLink>
          <NavLink to="products">Products</NavLink>
          <NavLink to="contact">Contact</NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Home;
