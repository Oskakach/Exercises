import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID _GWvkry_JgE6E66IO-avo4cSpu3mJ7-bvYMmr3CMxko",
  },
});
