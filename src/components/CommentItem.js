import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

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
    width: "100%",
  },
  cover: {
    width: 120,
  },
}));

const CommentItem = (props) => {
  const classes = useStyles();
  return <Grid item xs={12}></Grid>;
};

export default CommentItem;
{
  /* <Card className={classes.root}>
<CardMedia
  className={classes.cover}
  image={video.snippet.thumbnails.medium.url}
  title={video.snippet.title}
  onClick={() => onVideoSelect(video)}
  style={{ cursor: "pointer" }}
/>
<div className={classes.details}>
  <CardContent className={classes.content}>
    <Typography noWrap variant="subtitle1">
      {video.snippet.title}
    </Typography>
    <Typography noWrap variant="body1" color="textSecondary">
      {video.snippet.description}
    </Typography>
    <Typography noWrap variant="subtitle2" color="textSecondary">
      {new Date(video.snippet.publishedAt).toDateString()}
    </Typography>
  </CardContent>
</div>
</Card> */
}
