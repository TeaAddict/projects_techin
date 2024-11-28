import { Outlet } from "react-router";

const BlogList = () => {
  return (
    <div>
      <h1>Blog List</h1>
      <ul>
        <li>Blog1</li>
        <li>Blog2</li>
        <li>Blog3</li>
      </ul>
      <Outlet />
    </div>
  );
};

export default BlogList;
