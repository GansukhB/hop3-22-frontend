import { API } from "../utils/axios";
import { useState, useEffect } from "react";
import PostCard from "../components/PostCard";

export default function PostList() {
  const [posts, setPosts] = useState([]);


  useEffect(() => {
    async function fetchData() {
      const response = await API.get("posts");
      let result = response.data;
      setPosts(result.data);
    }
    fetchData();
  }, []);
  return (
    <div>
      <h1>POST LIST</h1>
      {posts?.map((post, index) => {
        return <PostCard post={post} key={index} index={index} />;
      })}
    </div>
  );
}
