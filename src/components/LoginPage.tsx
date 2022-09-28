import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState,
    formState: { isSubmitSuccessful },
  } = useForm({
    defaultValues: { username: "", password: "" },
  });

  const onSubmit = (data: any) => {
    fetch("https://rest-api-for-blog-production.up.railway.app/login", {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (response) {
        console.log(response.user);
      });
  };

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({ username: "", password: "" });
      navigate("/");
    }
  }, [formState, reset]);

  return (
    <div>
      <h2>Log In</h2>
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

        <input type="submit" />
      </form>
    </div>
  );
};

export default LoginPage;
