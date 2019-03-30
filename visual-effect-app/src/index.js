import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

class App extends React.Component {

    state = {styleOne: {}, styleTwo: {}};

    transform(offset) {
        const cos = Math.cos(offset);
        const sin = Math.sin(offset);
        return {transform: `matrix3d(${sin}, ${-cos}, ${sin}, 0, ${-cos}, ${sin}, 0, 0, 0, ${cos}, ${cos}, ${sin}, 0, 0, 0, 1)`};
    }

    onMouseMove = (event) => {
        this.setState({
            styleOne: this.transform(-event.clientX / event.clientY),
            styleTwo: this.transform(event.clientX / event.clientY)
        });
    }

    render() {
        return (
            <div onMouseMove={this.onMouseMove}>
                <div className="panel" style={this.state.styleOne}/>
                <div className="panel" style={this.state.styleTwo}/>
            </div>
        );
    }


}

ReactDOM.render(<App/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
