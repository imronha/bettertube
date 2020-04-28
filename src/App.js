import React from "react";
import { Grid } from "@material-ui/core";

import { fetchSearch, fetchVideos, fetchComments } from "./api/youtube";

import { SearchBar, VideoDetail, VideoList, CommentList } from "./components";
// import styles from "./App.module.css";

const api_key = process.env.REACT_APP_APIKEY;

class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: null,
    comments: [],
  };
  async componentDidMount() {
    const fetchedVideos = await fetchVideos();
    const fetchedComments = await fetchComments(fetchedVideos[0].id.toString());
    // console.log(fetchedVideos);

    // console.log(fetchedVideos[0].id.toString());
    // console.log(fetchedComments);
    this.setState({
      videos: fetchedVideos,
      selectedVideo: fetchedVideos[0],
      comments: fetchedComments.data.items,
    });
    // console.log(this.state.comments);
  }
  onVideoSelect = async (video) => {
    const fetchedComments = await fetchComments(video.id);
    this.setState({
      selectedVideo: video,
      comments: fetchedComments.data.items,
    });
    // console.log(fetchedComments.data.items);
    // this.setState({ comments: fetchComments(video.id) });
  };

  handleSubmit = async (searchTerm) => {
    const searchParams = {
      params: {
        part: "snippet",
        maxResults: 10,
        order: "viewCount",
        key: api_key,
        q: searchTerm,
        type: "video",
      },
    };
    // console.log(fetchSearch);
    const fetchedSearch = await fetchSearch.get("/search", searchParams);
    // const fetchedComments = await fetchComments(
    //   fetchedSearch.data.items[0].id.videoId.toString()
    // );
    // console.log(fetchedSearch.data.items[0].id);
    // console.log(fetchedComments.data.items);
    this.setState({
      videos: fetchedSearch.data.items,
      selectedVideo: fetchedSearch.data.items[0],
    });
  };

  render() {
    const { selectedVideo, videos, comments } = this.state;
    return (
      <Grid justify="center" container spacing={4}>
        <Grid item xs={11}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <SearchBar onFormSubmit={this.handleSubmit} />
            </Grid>
            <Grid container xs={8}>
              <Grid item xs={12}>
                <VideoDetail video={selectedVideo} />
              </Grid>
              <Grid item xs={12}>
                <CommentList comments={comments} />
              </Grid>
            </Grid>

            <Grid item xs={4}>
              <VideoList videos={videos} onVideoSelect={this.onVideoSelect} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default App;
