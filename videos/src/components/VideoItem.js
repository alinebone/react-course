import React from 'react';

export default class VideoItem extends React.Component {
  render() {
    return (
      <div onClick={ () => this.props.getSelectedVideo(this.props.video) }>
          <ul className="list-group">
            <li className="list-group-item">
              {this.props.title}
              <div>
                  <img src={this.props.thumbnail} className="img-fluid" alt={this.props.title}/>
              </div>
            </li>
        </ul>
      </div>
    );
  }
}