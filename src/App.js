import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/pages/Home";
import UserBlog from "./components/pages/UserBlog";
import Users from "./components/pages/Users";
import CreatePost from "./components/pages/CreatePost";

import "./styles/normalize.css";
import "./styles/main.css";
import "./styles/fontawesome.min.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:userId" element={<UserBlog />} />
        <Route path="/users/posts/new" element={<CreatePost />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
