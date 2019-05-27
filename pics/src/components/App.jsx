import React from 'react'
import SearchBar from './SearchBar';
import unsplash from '../api/unsplash';
import ImageList from './ImageList';

class App extends React.Component {

  state = { pics: [] };

  constructor(props) {
    super(props);

    this.onSearchSubmit = this.onSearchSubmit.bind(this);
  }


  async onSearchSubmit(term) {
    const response = await unsplash.get("/search/photos", {
      params: {
        query: term
      }
    })
    
    this.setState(
      { pics: response.data.results }
    )
  }

  render() {
    return(
      <div className="ui container">
        <SearchBar onSubmit={this.onSearchSubmit}/>
        <ImageList images={this.state.pics}/>
      </div>
    )
  }
}

export default App