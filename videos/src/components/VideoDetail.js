import React from 'react';

export default class VideoDetail extends React.Component {

  render() {
    if (!this.props.video) {
      return <div>Loading ...</div>;
    }

    const videoSrc = `https://www.youtube.com/embed/${this.props.video.id.videoId}`;

    return (
      <div>
        <iframe src={videoSrc} allowFullScreen title='Video player'/>
      </div>
    );
  }
}