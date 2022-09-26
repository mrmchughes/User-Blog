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
      <p>
        Sent by {comment.user} at: {comment.timestamp}
      </p>
      <p>{comment.message}</p>
    </div>
  );
};

export default CommentBox;
