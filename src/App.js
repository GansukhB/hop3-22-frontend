import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import PostList from "./pages/PostList";
import PostItem from "./pages/PostItem";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </div>
        <Routes>
          <Route path="/" element={<PostList />} />
          <Route path="/posts/:postId" element={<PostItem />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
