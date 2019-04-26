import React from 'react';
import ReactDOM from 'react-dom';

function getName() {
    return "Aline";

}
const App = () => {

    const name = "Aline";

    return (
        <div>
            <label for="name">Enter name</label>
            <input type="text"/>
            <button type="submit" className="button" style={{"background-color": "red", fontSize: "20px"}}>Submit</button>
            <p>{name} or {getName()}</p>
        </div>
        );
}

ReactDOM.render(<App/>, document.getElementById('root'));