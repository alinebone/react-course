import axios from 'axios';

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/",
});

export const baseParams = {
    part: "snippet",
    maxResults: 5,
    key: "AIzaSyDIigcNEsR3g5Ek5lJgisJXjkFsDYFuggQ"
}