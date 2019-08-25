import React from 'react';
import VideoItem from './VideoItem';

export default class VideoList extends React.Component {

  renderVideoItems() {
    const videos = this.props.videos.map( (video) => {
      return <VideoItem 
                key={video.id.videoId} 
                video={video}
                thumbnail={video.snippet.thumbnails.default.url} 
                title={video.snippet.title} 
                getSelectedVideo={this.props.getSelectedVideo}/>;
    });
    return videos;
  }

  render() {
    return (
        <div>
          <h4>Videos</h4>
          {this.renderVideoItems()}
        </div>
    );
  }
}