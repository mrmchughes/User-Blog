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
    <Box sx={{ width: 200, height: 200, boxShadow: 3 }}>
      <Card variant="outlined">
        <CardContent sx={{ textAlign: "center" }}>
          <Typography variant="h5" component="div" noWrap>
            {post.title}
          </Typography>

          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {post.user}
          </Typography>

          <br />

          <Typography variant="body2">{post.timestamp}</Typography>

          <CardActions>
            <Box sx={{ margin: "0 auto", display: "flex" }}>
              <Button variant="contained" href={`posts/${post._id}`}>
                View Post
              </Button>
            </Box>
          </CardActions>
        </CardContent>
      </Card>
    </Box>
  );
};

export default PostCard;
