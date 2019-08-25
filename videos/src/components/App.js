import React from 'react';
import SearchBar from './SearchBar';
import youtube, { baseParams } from '../api/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

export default class App extends React.Component {

  state = {
    videos: [],
    selectedVideo: null
  }

  onFormSubmit = async (term) => {

    const response = await youtube.get('/search', {
      params: {
        ...baseParams,
        q: term
      }
    })

    this.setState({
      videos: response.data.items
    })
  }
 
  getSelectedVideo = (video) => {
    this.setState({selectedVideo: video})
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <SearchBar onFormSubmit={this.onFormSubmit}/>
          </div>
        </div>
        <div className="row">
          <div className="col-md-8">
            <VideoDetail video={this.state.selectedVideo}/>
          </div>
          <div className="col-md-4">
            <VideoList videos={this.state.videos} getSelectedVideo={this.getSelectedVideo}/>
          </div>
        </div>
      </div>
    );
  }

}