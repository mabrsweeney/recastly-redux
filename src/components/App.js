import React from 'react';
import VideoListContainer from '../containers/VideoListContainer.js';
import VideoPlayerContainer from '../containers/VideoPlayerContainer.js';
import Nav from './Nav.js';
import VideoPlayer from './VideoPlayer.js';
import VideoList from './VideoList.js';
import changeVideo from '../actions/currentVideo.js';
import changeVideoList from '../actions/videoList.js';
import exampleVideoData from '../data/exampleVideoData.js';
import store from '../store/store.js';
import search from '../actions/search';
import {connect} from 'react-redux';



const App = class extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.handleVideoListEntryTitleClick('react redux');
  }

  render() {
    return (
      <div>
        <Nav />
        <div className="row">
          <div className="col-md-7">
            <VideoPlayerContainer />
          </div>
          <div className="col-md-5">
            <VideoListContainer />
          </div>
        </div>
      </div>
    );
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleVideoListEntryTitleClick: (query) => dispatch(search(query))
  };
};

export default connect(null, mapDispatchToProps)(App);