import axios from "axios";

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
  
  params: {
    part: "snippet",
    videoId: "M7FIvfx5J10",
  },
  headers: {
    "X-RapidAPI-Key": "8cf55815aemshcfe908feaec3141p1f4a8ejsn4fe6b67e9451",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetchFromApi = async(url) => {
    // through this call we will get "baseUrl/getVideos" or "baseUrl/getChannel"
    const { data } = await axios.get(`${BASE_URL}/${url}`, options)
    return data;
}