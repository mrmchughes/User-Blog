import React from "react";

const SignUpPage = () => {
  return (
    <div>
      <h2>Sign Up</h2>
      <form method="post">
        <label>
          Username:
          <input
            type="text"
            name="username"
            placeholder="Enter Your Username Here"
          ></input>
        </label>

        <label>
          Password:
          <input
            type="password"
            name="password"
            placeholder="Enter Your Password Here"
          ></input>
        </label>

        <label>
          Confirm Password:
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password Here"
          ></input>
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default SignUpPage;
