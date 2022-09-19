import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CommentBox from "./components/CommentBox";
import HomePage from "./components/HomePage";
import NavBar from "./components/NavBar";
import PostCard from "./components/PostCard";
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
    fetch("https://rest-api-for-blog-production.up.railway.app", {
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
        <Route path="*" element={<p> There is nothing here!</p>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
