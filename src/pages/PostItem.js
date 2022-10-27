import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API } from "../utils/axios";

const PostItem = () => {
  let { postId } = useParams();
  const [post, setPost] = useState({});
  useEffect(() => {
    async function fetchData() {
      const response = await API.get(`posts/${postId}`);
      let result = response.data;
      console.log(result);
      setPost(result.data);
    }
    fetchData();
  }, [postId]);
  return (
    <div>
      <h1>{post.title}</h1>
      <div>{post.body}</div>
    </div>
  );
};
export default PostItem;
