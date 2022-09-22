import React from "react";
import { useParams } from "react-router-dom";

interface Post {
  _id: string;
  isPublished: boolean;
  title: string;
  user: string;
  timestamp: string;
  message: string;
}

interface PostPageProps {
  posts: Post[];
}

const PostPage = ({ posts }: PostPageProps) => {
  const { id } = useParams();

  return (
    <div>
      {posts
        .filter((post) => post._id === id)
        .map((post, index) => (
          <div key={index}>
            <h1>{post.title}</h1>
            <h2>{post.user}</h2>
            <p>{post.timestamp}</p>
            <p>{post.message}</p>
            <h2>Comments:</h2>
          </div>
        ))}
    </div>
  );
};

export default PostPage;
