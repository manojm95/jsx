// importing react and react dom libs
import React from 'react';
import ReactDOM from 'react-dom';

//create a react component
//funtion based component 
let temp={fontSize:30}
// const App = function() {//instead of function() use = ()=>
// console.lg("Text"); 
//     return (
//         <div>
//     <label style={temp}>Enter Name:</label>
//     <input id = "name" type="text" value="NNNN" ></input>
//     <button style = {{backgroundColor : 'red', color: 'white'}} > Submit </button>

//     </div>
//     );
// };

const App = ()=> <div>
<label style={temp}>Enter Name:</label>
<input id = "name" type="text" value="NNNN" ></input>
<button style = {{backgroundColor : 'red', color: 'white'}} > Submit </button>

</div>

//put the react component on the screen
//query selector is a built in function
ReactDOM.render(
    <App />,
    document.querySelector('#root'));