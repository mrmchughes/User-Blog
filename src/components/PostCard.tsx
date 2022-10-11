import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

interface Post {
  _id: string;
  isPublished: boolean;
  title: string;
  user: string;
  timestamp: string;
  message: string;
}

interface PostCardProps {
  post: Post;
}

const PostCard = ({ post }: PostCardProps) => {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">
        <CardContent sx={{ justify: "center", alignItems: "center" }}>
          <Typography variant="h5" component="div">
            {post.title}
          </Typography>

          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {post.user}
          </Typography>

          <br />

          <Typography variant="body2">{post.timestamp}</Typography>

          <CardActions>
            <Button variant="contained" href={`posts/${post._id}`}>
              View Post
            </Button>
          </CardActions>
        </CardContent>
      </Card>
    </Box>
  );
};

export default PostCard;
