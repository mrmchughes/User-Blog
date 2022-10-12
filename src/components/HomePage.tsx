import React from "react";
import PostCard from "../components/PostCard";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";

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

      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          {posts.map((post) => (
            <Grid
              xs={12}
              sm={6}
              md={3}
              key={post._id}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <PostCard post={post} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default HomePage;
