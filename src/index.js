import ReactDOM from 'react-dom';
import React from 'react';
//react normal call
// const HelloReact = React.createElement("h1", null, "Hello React");


//using jsx
// const HelloReact = <h1>Hello World</h1>

const HelloReact = (
    <div className="jumbotron">
        <h1>Hello World</h1>
    </div>
);

ReactDOM.render(HelloReact, document.getElementById("root"));