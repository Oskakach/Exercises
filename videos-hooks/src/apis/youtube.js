import axios from "axios";

const KEY = "AIzaSyA3rJ3NWHktLPdryvSsTgVD_gr-__F_wI8";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
