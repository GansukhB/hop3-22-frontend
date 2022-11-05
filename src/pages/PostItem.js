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
      <img src={`http://localhost:3001/uploads/${post.coverImage}`} style={{ width: '200px', height: '200px' }} />
    </div>
  );
};
export default PostItem;
