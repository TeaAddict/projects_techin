import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getOne } from "../helpers/get";

const Blog = () => {
  const { postID } = useParams();
  const [post, setPost] = useState();

  const getPost = async (id) => {
    setPost(await getOne(id));
  };

  useEffect(() => {
    getPost(postID);
  }, [postID]);

  console.log(postID);

  if (!post) return <p>Page not found</p>;
  const { title, author } = post;

  return (
    <div>
      <h1>{title}</h1>
      <p>{author}</p>
    </div>
  );
};

export default Blog;
