import { Link, Outlet, useSearchParams } from "react-router";
import { getAll } from "../helpers/get";
import { useEffect, useState } from "react";

const BlogList = () => {
  const [posts, setPosts] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();

  const searchQuery = searchParams.get("search") || "";

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getPosts = async () => {
    setPosts(await getAll());
  };

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchParams(value ? { search: value } : {});
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div>
      <h1>Blog List</h1>
      <input
        type="text"
        id="search"
        placeholder="Search by title"
        onChange={handleSearch}
      />
      <ul className="flex flex-col gap-4  p-2">
        {filteredPosts.map((post) => (
          <div key={post.id} className="shadow-md p-2">
            <h1>{post.title}</h1>
            <p>{post.author}</p>
            <Link to={post.id}>
              <button className="bg-lime-300 p-2">Read more</button>
            </Link>
          </div>
        ))}
      </ul>
      <Outlet />
    </div>
  );
};

export default BlogList;
