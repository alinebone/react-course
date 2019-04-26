import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {lat: null, error: null};
  }
  
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (data) => { 
        this.setState({lat: data.coords.latitude});
      }, 
      (err) => { 
        this.setState({error: err.message});
      }
    );  
  }

  render() {
    return(
      <div>
        <SeasonDisplay lat={this.state.lat} error={this.state.error}/>
      </div>
    );
  };
}

ReactDOM.render(<App/>, document.getElementById('root'));