import React from "react";
import { Link } from "react-router-dom";

interface Post {
  _id: string;
  isPublished: boolean;
  title: string;
  user: string;
  timestamp: string;
  message: string;
}

interface PostCardProps {
  post: Post;
}

const PostCard = ({ post }: PostCardProps) => {
  return (
    <div>
      <h1>{post.title}</h1>
      <h2>{post.user}</h2>
      <br />
      <p>{post.timestamp}</p>
      <Link to={`posts/${post._id}`}>View Post</Link>
    </div>
  );
};

export default PostCard;
