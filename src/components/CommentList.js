import React from "react";

import { Grid } from "@material-ui/core";
import CommentItem from "./CommentItem";

const CommentList = ({ comments }) => {
  // const listOfComments = comments.map((comment, id) => <CommentItem />);
  return (
    <Grid item spacing={4} style={{ backgroundColor: "red" }}>
      <CommentItem></CommentItem>
    </Grid>
  );
};

export default CommentList;
