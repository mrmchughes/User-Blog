import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

interface Comment {
  post: Object;
  user: String;
  timestamp: String;
  message: String;
}

interface CommentBoxProps {
  comment: Comment;
}

const CommentBox = ({ comment }: CommentBoxProps) => {
  return (
    <Box>
      <Card variant="outlined" sx={{ boxShadow: 3, mb: 2.5, p: 2.5 }}>
        <CardContent sx={{ textAlign: "center" }}>
          <Typography variant="body2">
            {comment.user} at: {comment.timestamp}
          </Typography>
          <Typography variant="body2">{comment.message}</Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default CommentBox;
