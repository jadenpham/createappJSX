import ReactDOM from 'react-dom';
import React from 'react';
//react normal call
// const HelloReact = React.createElement("h1", null, "Hello React");


//using jsx
// const HelloReact = <h1>Hello World</h1>


// const HelloReact = (
//     <div className="jumbotron">
//         <h1>Hello World</h1>
//     </div>
// );

//building a function in react that is reusable
//ES5 syntax
// const HelloReact = function(){
//     return(
//         <div className="jumbotron">
//             <h1>Hello World</h1>
//         </div>
//     )
// }

//building in ES6 syntax
const HelloReact = () =>{
    return (
        <div className="jumbotron">
            <h1>Hello World</h1>
        </div>
    )
}
//passing function statement in ES6
// ReactDOM.render(HelloReact(), document.getElementById("root"));

//passing function/property via JSX, same thing as above
ReactDOM.render(<HelloReact/>, document.getElementById("root"));