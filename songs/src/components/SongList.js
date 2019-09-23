import React from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions/index';

class SongList extends React.Component {

  render() {
    
    return(
      <ul>
          {this.props.songs.map((song) => {
            return <li 
                      key={song.song} 
                      onClick={() => this.props.updateSelectedSong(song)}>
                      {song.song}
                   </li>
          })}
      </ul>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    songs: state.songs,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateSelectedSong: (song) => dispatch(selectSong(song))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SongList);