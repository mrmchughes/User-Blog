import React from "react";

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
    <div>
      <p>{comment.message}</p>
      <p>{comment.user}</p>
    </div>
  );
};

export default CommentBox;
