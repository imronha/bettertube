import React from "react";

import { Paper, Typography } from "@material-ui/core";

const VideoDetail = ({ video }) => {
  console.log(video);
  if (!video) {
    return <div>Loading...</div>;
  }
  console.log(video.id);
  const videoSrc = `https://www.youtube.com/embed/${video.id}`;
  return (
    <React.Fragment>
      <Paper elevation={6} style={{ height: "50%" }}>
        <iframe
          frameBorder="0"
          height="100%"
          width="100%"
          title="Video Player"
          src={videoSrc}
        />
      </Paper>
      <Paper elevation={6} style={{ padding: "15px" }}>
        <Typography variant="h5">{video.snippet.title}</Typography>
        <Typography variant="body1">{video.snippet.channelTitle}</Typography>
        <Typography variant="body2">{video.snippet.description}</Typography>
      </Paper>
    </React.Fragment>
  );
};

export default VideoDetail;
