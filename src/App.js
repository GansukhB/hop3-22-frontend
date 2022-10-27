import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import PostList from "./pages/PostList";
import PostItem from "./pages/PostItem";
import { AddPost } from "./pages/AddPost";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/add_post">Add Post</Link>
            </li>
          </ul>
        </div>
        <Routes>
          <Route path="/" element={<PostList />} />
          <Route path="/posts/:postId" element={<PostItem />} />
          <Route path="/add_post" element={<AddPost />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
