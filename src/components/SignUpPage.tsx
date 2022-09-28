import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const SignUpPage = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState,
    formState: { isSubmitSuccessful },
  } = useForm({
    defaultValues: { username: "", password: "", confirmpassword: "" },
  });

  const onSubmit = (data: any) => {
    fetch("https://rest-api-for-blog-production.up.railway.app/signup", {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({ username: "", password: "", confirmpassword: "" });
      navigate("/");
    }
  }, [formState, reset]);

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="username"
          {...register("username", { required: true })}
        />
        <input
          type="password"
          placeholder="password"
          {...register("password", { required: true })}
        />
        <input
          type="password"
          placeholder="confirm password"
          {...register("confirmpassword", { required: true })}
        />

        <input type="submit" />
      </form>
    </div>
  );
};

export default SignUpPage;
