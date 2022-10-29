import { useState } from "react";
import { API } from "../utils/axios";


export const AddPost = () => {
  const [post, setPost] = useState({
    title: '',
    body: '',
    coverImage: '',
    userId: ''
  });
  const [res, setRes] = useState('')
  
  const add = async () => {
    const { data } = await API.post('posts', post)
    if(data.error) {
      setRes(data.error.message)
    } else {
      setRes('post added')
    }
  }

  return (
    <div>
      <h1>Add Post</h1>
      
      <input placeholder="title" value={post.title} onChange={(e) => setPost({...post, title: e.target.value})} />
      <input placeholder="body" value={post.body} onChange={(e) => setPost({ ...post, body: e.target.value })} />
      <input placeholder="cover image link" value={post.coverImage} onChange={(e) => setPost({ ...post, coverImage: e.target.value })} />
      <input placeholder="authorId" value={post.userId} onChange={(e) => setPost({ ...post, userId: e.target.value })} />

      <button onClick={add} >Add</button>

      <h3>{res}</h3>

    </div>
  )
}