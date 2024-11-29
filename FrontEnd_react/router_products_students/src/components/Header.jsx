import { NavLink } from "react-router";

const Header = () => {
  return (
    <div>
      <nav className="flex justify-center gap-3 bg-red-500 rounded-md p-2">
        <NavLink
          to="/"
          className="rounded-md px-2"
          style={({ isActive }) =>
            isActive ? { backgroundColor: "#fff" } : {}
          }
        >
          Home
        </NavLink>
        <NavLink
          to="about"
          className="rounded-md px-2"
          style={({ isActive }) =>
            isActive ? { backgroundColor: "#fff" } : {}
          }
        >
          About
        </NavLink>
        <NavLink
          to="products"
          className="rounded-md px-2"
          style={({ isActive }) =>
            isActive ? { backgroundColor: "#fff" } : {}
          }
        >
          Products
        </NavLink>
        <NavLink
          to="contact"
          className="rounded-md px-2"
          style={({ isActive }) =>
            isActive ? { backgroundColor: "#fff" } : {}
          }
        >
          Contact
        </NavLink>
      </nav>
    </div>
  );
};

export default Header;
