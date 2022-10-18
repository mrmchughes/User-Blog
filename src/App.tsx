import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import LoginPage from "./components/LoginPage";
import SignUpPage from "./components/SignUpPage";
import NavBar from "./components/NavBar";
import PostPage from "./components/PostPage";
import AboutPage from "./components/AboutPage";
import PostCreatePage from "./components/PostCreatePage";
import "./styles/global.css";

function App() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [auth, setAuth] = useState(false);

  const handleChange = () => {
    setAuth((prevAuth) => !prevAuth);
  };

  interface Post {
    _id: string;
    isPublished: boolean;
    title: string;
    user: string;
    timestamp: string;
    message: string;
  }

  useEffect(() => {
    fetch("https://rest-api-for-blog-production.up.railway.app/posts", {
      mode: "cors",
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (response) {
        setPosts(response);
      });
  }, []);

  return (
    <BrowserRouter>
      <NavBar auth={auth} handleChange={handleChange} />
      <Routes>
        <Route path="/" element={<HomePage posts={posts} />} />
        <Route
          path="/login"
          element={<LoginPage auth={auth} handleChange={handleChange} />}
        />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/posts/:id" element={<PostPage />} />
        <Route path="/createPost" element={<PostCreatePage />} />
        <Route path="*" element={<p> There is nothing here!!</p>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
