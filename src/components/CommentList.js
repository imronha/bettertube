import React from "react";

import { Grid } from "@material-ui/core";
import CommentItem from "./CommentItem";

const CommentList = ({ comments }) => {
  const listOfComments = comments.map((comment, id) => (
    <CommentItem key={id} comment={comment} />
  ));
  return (
    <Grid item spacing={10}>
      {listOfComments}
    </Grid>
  );
};

export default CommentList;
