import React from 'react';
import { connect } from 'react-redux';

class SongDetail extends React.Component {
  render() {

    return !this.props.selectedSong ? <p>select a song</p> :
      <div>
        {this.props.selectedSong.song}<br/>
        {this.props.selectedSong.duration} 
      </div>
  }
}

const mapStateToProps = (state) => {
  return {
    selectedSong: state.selectedSong
  }
}

export default connect(mapStateToProps)(SongDetail);