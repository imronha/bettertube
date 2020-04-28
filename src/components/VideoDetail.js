import React from "react";
import Divider from "@material-ui/core/Divider";
import { Grid } from "@material-ui/core";

import { Paper, Typography } from "@material-ui/core";

const VideoDetail = ({ video }) => {
  console.log(video);
  if (!video) {
    return <div>Loading...</div>;
  }
  // console.log(video.id);
  
  const videoSrc = `https://www.youtube.com/embed/${video.id}`;
  return (
    <Grid item spacing={2} xs={12}>
      <Grid
        item
        spacing={2}
        xs={12}
        style={{ padding: "10px", height: "400px" }}
      >
        <iframe
          frameBorder="0"
          height="100%"
          width="100%"
          title="Video Player"
          src={videoSrc}
        />
      </Grid>
      <Grid item spacing={2} xs={12}>
        <Paper elevation={6} style={{ padding: "15px" }}>
          <Typography variant="h5">{video.snippet.title}</Typography>

          <Divider />
          <Typography variant="body1">{video.snippet.channelTitle}</Typography>
          <Typography variant="body2">{video.snippet.description}</Typography>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default VideoDetail;
