import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  details: {
    height: "94px",
    width: "168px",
    lineHeight: "1.5em",
  },
  content: {
    width: "400px",
  },
  cover: {
    width: "15%",
    borderRadius: "50%",
  },
}));

const CommentItem = ({ comment }) => {
  const classes = useStyles();
  //   console.log(comment);
  return (
    <Grid item xs={12} spacing={4}>
      <Card className={classes.root}>
        <CardMedia
          className={classes.cover}
          image={comment.snippet.topLevelComment.snippet.authorProfileImageUrl}
          title=""
        />
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <div>
              <Typography noWrap variant="subtitle1">
                {comment.snippet.topLevelComment.snippet.authorDisplayName}
              </Typography>
              <Typography noWrap variant="subtitle2">
                {new Date(
                  comment.snippet.topLevelComment.snippet.publishedAt
                ).toDateString()}
              </Typography>
            </div>
            <Typography variant="body1" color="textSecondary">
              {comment.snippet.topLevelComment.snippet.textDisplay}
            </Typography>
            <Typography noWrap variant="subtitle2" color="textSecondary">
              upvotes / downvotes replies
            </Typography>
          </CardContent>
        </div>
      </Card>
      <Divider />
    </Grid>
  );
};

export default CommentItem;
