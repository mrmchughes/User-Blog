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

const PostCreatePage = () => {
  const { id } = useParams();

  const {
    register,
    handleSubmit,
    reset,
    formState,
    formState: { errors, isSubmitSuccessful },
  } = useForm({ defaultValues: { title: "", message: "" } });

  const onSubmit = (data: any) => {
    const token = localStorage.getItem("token");
    const bearer = `Bearer ${token}`;

    const newPost = JSON.stringify(data);

    fetch(`https://rest-api-for-blog-production.up.railway.app/posts`, {
      method: "post",
      body: newPost,
      headers: {
        "Content-Type": "application/json",
        Authorization: bearer,
      },
    });
  };

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({ title: "", message: "" });
    }
  }, [formState, reset]);

  return (
    <div>
      <form>
        <TextField
          label="Title"
          multiline
          rows={4}
          placeholder="Title"
          {...register("title", {
            required: true,
            maxLength: 280,
          })}
        />
        {errors.message?.type === "required" && (
          <span role="alert">Please enter a title</span>
        )}
        {errors.message?.type === "maxLength" && (
          <span role="alert">Title can only be up to 280 characters</span>
        )}
        <TextField
          label="Message"
          multiline
          rows={4}
          placeholder="Message"
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
        >
          Submit Comment
        </Button>
      </form>
    </div>
  );
};

export default PostCreatePage;
