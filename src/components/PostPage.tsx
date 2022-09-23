import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CommentBox from "../components/CommentBox";
import { useForm } from "react-hook-form";

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
  //comments being stored in individual BlogPage states might works out when it comes to new comments being added?
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
  });

  const { id } = useParams();

  const {
    register,
    handleSubmit,
    reset,
    formState,
    formState: { isSubmitSuccessful },
  } = useForm({ defaultValues: { username: "", message: "" } });

  const onSubmit = (data: any) => {
    setComments([...comments, data]);
    fetch(`https://rest-api-for-blog-production.up.railway.app/posts/${id}`, {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },

      body: JSON.stringify(data),
    });
  };

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({ username: "", message: "" });
    }
  }, [formState, reset]);

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
              <CommentBox key={index} comment={comment} />
            ))}

            <br />
            <div>
              <form onSubmit={handleSubmit(onSubmit)}>
                <input
                  type="text"
                  placeholder="username"
                  {...register("username", {})}
                />
                <textarea {...register("message", {})} />

                <input type="submit" value="Submit" />
              </form>
            </div>
          </div>
        ))}
    </div>
  );
};

export default PostPage;
