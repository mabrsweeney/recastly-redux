import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';


var handleVideoSearch = (q) => {
  return (query) => {
    searchYouTube({
      key: YOUTUBE_API_KEY, 
      query: q
    }, (videos) => {
      changeVideo(videos[0]);
      changeVideoList(videos);
    });
  };
};

export default handleVideoSearch;
