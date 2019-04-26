import React from 'react';
import './SeasonDisplay.css';
import Spinner from './Spinner';

class SeasonDisplay extends React.Component {

  seasonConfig = {
    summer: {
      message: 'Vamos a la playa',
      icon: 'sun icon'
    },
    winter: {
      message: 'Brrrl, it\'s cold!',
      icon: 'snowflake icon'
    }
  };

  getSeason(lat) {
    const month = new Date().getMonth();
    if (month > 2 && month < 9) {
      return lat < 0 ? 'summer' : 'winter';
    }
  }     

  renderContent() {
    const season = this.getSeason(this.props.lat);
    const {message, icon} = this.seasonConfig[season];
    const seasonDisplay = (<div className={`SeasonDisplay ${season}`}>
      <i className={`icon-left massive icon ${icon}`}></i>
      <p>{message}</p>
      <i className={`icon-right massive icon ${icon}`}></i>
    </div>);

    if (this.props.error != null && this.props.lat == null)
      return this.props.error
    else if (this.props.error == null && this.props.lat != null) 
      return seasonDisplay
    else
      return <Spinner message="Please allow us to use yout location"/>
  }

  render() {

    return(
    <div className="border red">
      {this.renderContent()}
    </div>
    );
  }
}

export default SeasonDisplay;