// importing react and react dom libs
import React from "react";
import ReactDOM from "react-dom";

//create a react component
//funtion based component 
const App = function() {
    return <div> hello there</div>
}

//put the react component on the screen
//query selector is a built in function
ReactDOM.render(
    <App />,
    document.querySelector("#root")
);