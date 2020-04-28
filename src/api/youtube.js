import axios from "axios";
const api_key = process.env.REACT_APP_APIKEY;

export const fetchSearch = axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/",
});

export const fetchVideos = async () => {
  try {
    const {
      data: { items },
    } = await axios.get(
      "https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&maxResults=10&key=" +
        api_key
    );
    console.log(items);
    return items;
  } catch (error) {
    console.log(error);
  }
};

// export const fetchComments = async (videoId) => {
//   try {
//     const res = await axios.get(
//       "https://www.googleapis.com/youtube/v3/comments?part=snippet&videoId=" +
//         videoId +
//         "&key=" +
//         api_key
//     );
//     console.log(res);
//     return res;
//   } catch (error) {
//     console.log(error);
//   }
// };

export const fetchComments = async (videoId) => {
  try {
    const res = await axios.get(
      "https://www.googleapis.com/youtube/v3/commentThreads?key=" +
        api_key +
        "&textFormat=plainText&part=snippet&videoId=" +
        videoId +
        "&maxResults=30"
    );
    console.log(res);
    return res;
  } catch (error) {
    console.log(error);
  }
};
