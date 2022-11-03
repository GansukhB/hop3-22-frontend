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
    try {
      const { data } = await API.post('posts', post)
      setRes('post added')
    } catch (err) {

      if (err.response.status === 401) {
        setRes('unauthorized')
      }
      if (err.response.status === 400) {
        setRes('dutuu bogolson ')
      }
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