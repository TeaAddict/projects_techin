import { Link } from "react-router";

const About = () => {
  return (
    <div>
      <h1>About page</h1>
      <Link to="/">
        <button className="bg-green-200 px-2 py-1 rounded-md">
          Go back to home
        </button>
      </Link>
    </div>
  );
};

export default About;
