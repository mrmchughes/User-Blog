import React from "react";
import PostCard from "../components/PostCard";
import Box from "@mui/material/Box";

interface Post {
  _id: string;
  isPublished: boolean;
  title: string;
  user: string;
  timestamp: string;
  message: string;
}

interface HomePageProps {
  posts: Post[];
}

const HomePage = ({ posts }: HomePageProps) => {
  return (
    <Box component="main">
      <div>
        <p>I'm Michael, welcome to my Blog!</p>
        <p>
          Here is some more filler text that explains what my blog is all about.
        </p>
      </div>
      <div>
        {posts.map((post) => {
          return (
            <div key={post._id}>
              <PostCard post={post} />
            </div>
          );
        })}
      </div>
    </Box>
  );
};

export default HomePage;
