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

const VideoItem = ({ video, onVideoSelect }) => {
  const classes = useStyles();
  return (
    <Grid item xs={12}>
      <Card className={classes.root}>
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
      </Card>
    </Grid>
  );
};

export default VideoItem;

// import React from "react";

// import { Grid, Paper, Typography } from "@material-ui/core";

// const VideoItem = ({ video, onVideoSelect }) => {
//   return (
//     <Grid item xs={12}>
//       <Paper
//         style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
//         onClick={() => onVideoSelect(video)}
//       >
//         <img
//           height={video.snippet.thumbnails.default.height}
//           width={video.snippet.thumbnails.default.width}
//           style={{ marginRight: "10px" }}
//           alt="thumbnail"
//           src={video.snippet.thumbnails.medium.url}
//         />
//         <Typography variant="subtitle1">
//           <b>{video.snippet.title}</b>
//         </Typography>
//       </Paper>
//     </Grid>
//   );
// };

// export default VideoItem;
