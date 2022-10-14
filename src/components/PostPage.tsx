import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CommentBox from "../components/CommentBox";
import { useForm } from "react-hook-form";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

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
    fetchedPost();
  }, []);

  useEffect(() => {
    fetchedComments();
  }, [comments]);

  const fetchedPost = () => {
    fetch(`https://rest-api-for-blog-production.up.railway.app/posts/${id}`, {
      mode: "cors",
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (response) {
        setPost(response);
      });
  };

  const fetchedComments = () => {
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
  };

  const { id } = useParams();

  const {
    register,
    handleSubmit,
    reset,
    formState,
    formState: { errors, isSubmitSuccessful },
  } = useForm({ defaultValues: { username: "", message: "" } });

  const onSubmit = (data: any) => {
    setComments([...comments, data]);

    const token = localStorage.getItem("token");
    const bearer = `Bearer ${token}`;

    const newComment = JSON.stringify(data);

    fetch(
      `https://rest-api-for-blog-production.up.railway.app/posts/${id}/comments`,
      {
        method: "post",
        body: newComment,
        headers: {
          "Content-Type": "application/json",
          Authorization: bearer,
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
      <Box sx={{ m: 5 }}>
        <Typography sx={{ textAlign: "center" }}>{post.title}</Typography>
        <Typography sx={{ textAlign: "center" }}>
          Published by {post.user} on {post.timestamp}
        </Typography>
        <Typography sx={{ textAlign: "center" }}>{post.message}</Typography>
      </Box>

      <br />

      <Box>
        <Typography sx={{ textAlign: "center", m: 2.5 }}>Comments:</Typography>

        <Box
          sx={{
            flexGrow: 1,
            width: "50%",
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {comments.map((comment, index) => (
            <CommentBox key={index} comment={comment} />
          ))}
        </Box>
      </Box>

      <br />

      <Box
        sx={{
          flexGrow: 1,
          width: "50%",
          margin: "0 auto",
        }}
      >
        <Typography sx={{ textAlign: "center", m: 2.5 }}>
          Add a comment:
        </Typography>
        <form>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <TextField
              label="Comment"
              multiline
              rows={4}
              placeholder="Comment"
              {...register("message", {
                required: true,
                maxLength: 280,
              })}
            />
            {errors.message?.type === "required" && (
              <span role="alert">Please enter a message</span>
            )}
            {errors.message?.type === "maxLength" && (
              <span role="alert">Message can only be up to 280 characters</span>
            )}

            <Button
              variant="contained"
              type="submit"
              onClick={handleSubmit(onSubmit)}
              sx={{ m: 2 }}
            >
              Submit Comment
            </Button>
          </Box>
        </form>
      </Box>
    </div>
  );
};

export default PostPage;
