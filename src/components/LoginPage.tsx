import React from "react";

const LoginPage = () => {
  return (
    <div>
      <h2>Sign Up</h2>
      <form method="post">
        <div>
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
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default LoginPage;
