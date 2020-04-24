import React from "react";
import { Grid } from "@material-ui/core";

import { fetchSearch, fetchVideos } from "./api/youtube";

import { SearchBar, VideoDetail, VideoList } from "./components";
// import styles from "./App.module.css";

const api_key = process.env.REACT_APP_APIKEY;

class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: null,
  };
  async componentDidMount() {
    const fetchedVideos = await fetchVideos();
    console.log(fetchedVideos);
    this.setState({
      videos: fetchedVideos,
      selectedVideo: fetchedVideos[0],
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
            <Grid item xs={8}>
              <VideoDetail video={selectedVideo} />
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
