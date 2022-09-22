import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CommentBox from "../components/CommentBox";

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
  const [comments, setComments] = useState<Comment[]>([]);

  interface Comment {
    post: Object;
    user: String;
    timestamp: String;
    message: String;
  }

  useEffect(() => {
    fetch(
      `https://rest-api-for-blog-production.up.railway.app/posts/${id}/comments`,
      {
        mode: "cors",
      }
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (response) {
        setComments(response);
      });
  }, [posts]);

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
            {comments.map((comment, index) => (
              <div key={index}>
                <div>{comment.message}</div>
                <div>{comment.user}</div>
              </div>
            ))}

            <br />
            <div>User Name Input Goes Here</div>
            <div>Comment Input Goes Here</div>
          </div>
        ))}
    </div>
  );
};

export default PostPage;
