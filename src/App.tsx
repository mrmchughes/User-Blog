import React from "react";

function App() {
  fetch(
    "https://rest-api-for-blog-production.up.railway.app/posts/630fe7b526743c6b1ea7d1bf/comments",
    {
      mode: "cors",
    }
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      console.log(response);
    });
  return <div>Different ways to fetch posts</div>;
}

export default App;
