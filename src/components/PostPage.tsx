import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CommentBox from "../components/CommentBox";
import { useForm } from "react-hook-form";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

interface Post {
  _id: string;
  isPublished: boolean;
  title: string;
  user: string;
  timestamp: string;
  message: string;
}

interface Comment {
  post: Object;
  user: String;
  timestamp: String;
  message: String;
}

const PostPage = () => {
  const [post, setPost] = useState<Post>({
    _id: "",
    isPublished: true,
    title: "",
    user: "",
    timestamp: "",
    message: "",
  });

  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    fetch(`https://rest-api-for-blog-production.up.railway.app/posts/${id}`, {
      mode: "cors",
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (response) {
        setPost(response);
      });
  }, []);

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
  }, [comments]);

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

    const newComment = JSON.stringify(data);

    fetch(
      `https://rest-api-for-blog-production.up.railway.app/posts/${id}/comments`,
      {
        method: "post",
        body: newComment,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  };

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({ username: "", message: "" });
    }
  }, [formState, reset]);

  return (
    <div>
      <div>
        <h1>{post.title}</h1>
        <h2>{post.user}</h2>
        <p>{post.timestamp}</p>
        <p>{post.message}</p>
      </div>
      <br />

      <div>
        <h2>Comments:</h2>
        {comments.map((comment, index) => (
          <CommentBox key={index} comment={comment} />
        ))}
      </div>
      <br />

      <form>
        <TextField
          label="Username"
          variant="outlined"
          type="text"
          placeholder="Username"
          {...register("username", {})}
        />
        <TextField
          label="Message"
          multiline
          rows={4}
          placeholder="Message"
          {...register("message", {})}
        />

        <Button
          variant="contained"
          type="submit"
          onClick={handleSubmit(onSubmit)}
        >
          Submit Comment
        </Button>
      </form>
    </div>
  );
};

export default PostPage;
