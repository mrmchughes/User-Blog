import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import LoginPage from "./components/LoginPage";
import SignUpPage from "./components/SignUpPage";
import NavBar from "./components/NavBar";
import PostPage from "./components/PostPage";
import "./styles/global.css";

function App() {
  const [posts, setPosts] = useState<Post[]>([]);

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
  }, [posts]);

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage posts={posts} />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />

        <Route path="/posts/:id" element={<PostPage posts={posts} />} />
        <Route path="*" element={<p> There is nothing here!!</p>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
