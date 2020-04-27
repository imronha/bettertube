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
    const fetchedComments = await fetchComments(fetchedVideos[0].id);
    // console.log(fetchedVideos);

    // console.log(fetchedComments);
    this.setState({
      videos: fetchedVideos,
      selectedVideo: fetchedVideos[0],
      comments: fetchedComments,
    });
  }
  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };

  handleSubmit = async (searchTerm) => {
    const searchParams = {
      params: {
        part: "snippet",
        maxResults: 10,
        order: "viewCount",
        key: api_key,
        q: searchTerm,
      },
    };
    console.log(fetchSearch);
    const response = await fetchSearch.get("/search", searchParams);
    // console.log(response.data.items[0]);
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0],
    });
  };

  render() {
    const { selectedVideo, videos } = this.state;
    return (
      <Grid justify="center" container spacing={4}>
        <Grid item xs={11}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <SearchBar onFormSubmit={this.handleSubmit} />
            </Grid>
            <Grid container xs={8}>
              <Grid item xs={12} spacing={2}>
                <VideoDetail video={selectedVideo} />
              </Grid>
              <Grid item xs={12} spacing={2}>
                <CommentList />
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
