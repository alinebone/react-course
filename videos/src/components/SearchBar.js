import React from 'react';

export default class SearchBar extends React.Component {

  constructor(props) {
    super(props);

    this.state = { 
      term: '' 
    };
  }

  onInputChange = (event) => {
    this.setState({
      term: event.target.value
    })
  };

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onFormSubmit(this.state.term);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <div className='form-group'>
            <input 
              type='text'
              className='form-control form-control-lg' 
              value={this.state.term}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }

}