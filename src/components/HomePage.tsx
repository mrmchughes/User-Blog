import React from "react";
import PostCard from "../components/PostCard";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

const theme = createTheme();

theme.typography.h3 = {
  fontSize: "1.2rem",
  "@media (min-width:600px)": {
    fontSize: "1.5rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "2rem",
  },
};

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
      <ThemeProvider theme={theme}>
        <Box
          sx={{
            boxShadow: 3,
            width: "100%",
            mb: 5,
            p: 5,
            display: { xs: "none", sm: "block" },
          }}
        >
          <Typography
            variant="h3"
            component="div"
            sx={{
              flexGrow: 1,
              textAlign: "center",
            }}
          >
            Hello World! I'm Michael, and welcome to my Blog!
          </Typography>
        </Box>
      </ThemeProvider>

      <Box sx={{ flexGrow: 1, m: 5 }}>
        <Grid container spacing={3}>
          {posts.map((post) => (
            <Grid
              xs={12}
              sm={6}
              md={4}
              lg={3}
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
