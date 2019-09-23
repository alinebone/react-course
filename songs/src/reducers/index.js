import { combineReducers } from 'redux';

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SELECTED_SONG") {
    selectedSong = action.payload;
    return selectedSong;
  }
  return selectedSong;
}

const songsReducer = () => {
  return [
    { song: 'Song 1', duration: '1:03' },
    { song: 'Song 2', duration: '3:43' },
    { song: 'Song 3', duration: '4:39' }
  ];
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});