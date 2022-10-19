import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";

let theme = createTheme();

theme = responsiveFontSizes(theme);

const SignUpPage = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState,
    watch,
    getValues,
    formState: { errors, isSubmitSuccessful },
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
    <Box
      sx={{
        flexGrow: 1,
        width: "50%",
        margin: "0 auto",
      }}
    >
      <ThemeProvider theme={theme}>
        <Typography variant="h2" sx={{ textAlign: "center", m: 2.5 }}>
          Sign Up
        </Typography>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <TextField
              label="Username"
              placeholder="Username"
              sx={{ m: 2 }}
              {...register("username", {
                required: true,
                minLength: 8,
                maxLength: 30,
                pattern: /^[a-zA-Z0-9]+$/,
              })}
            />
            {errors.username?.type === "required" && (
              <span role="alert">Please enter a username</span>
            )}
            {errors.username?.type === "minLength" && (
              <span role="alert">Username must be at least 8 characters</span>
            )}
            {errors.username?.type === "maxLength" && (
              <span role="alert">Username can only be up to 30 characters</span>
            )}
            {errors.username?.type === "pattern" && (
              <span role="alert">
                Username must only include alpha-numeric characters, and no
                spaces
              </span>
            )}

            <TextField
              label="Password"
              placeholder="Password"
              sx={{ m: 2 }}
              type="password"
              {...register("password", {
                required: true,
                minLength: 8,
                pattern:
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
              })}
            />
            {errors.password?.type === "required" && (
              <span role="alert">Please enter a password</span>
            )}
            {errors.password?.type === "minLength" && (
              <span role="alert">Password must be at least 8 characters</span>
            )}
            {errors.password?.type === "pattern" && (
              <span role="alert">
                Password must be at least 8 characters long, include at least 1
                lowercase letter, one uppercase letter, 1 number, and 1 special
                character
              </span>
            )}

            <TextField
              label="Confirm Password"
              placeholder="Confirm Password"
              sx={{ m: 2 }}
              type="password"
              {...register("confirmpassword", {
                required: true,
                validate: (val: string) => {
                  if (watch("password") !== val) {
                    return "Password and Confirm Password must match!";
                  }
                },
              })}
            />
            {errors.confirmpassword?.type === "validate" && (
              <span role="alert">
                Password and Confirm Password must match!
              </span>
            )}

            <Button
              variant="contained"
              type="submit"
              onClick={handleSubmit(onSubmit)}
              sx={{ m: 2 }}
            >
              Register User
            </Button>
          </Box>
        </form>
      </ThemeProvider>
    </Box>
  );
};

export default SignUpPage;
