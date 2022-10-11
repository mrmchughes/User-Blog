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
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {posts.map((post) => (
            <Grid xs={2} sm={4} md={4} key={post._id}>
              <PostCard post={post} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default HomePage;
