import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function timestamp() {
 const element = (
     <div>
       <h1>Hello React</h1>
       <h2>Today's Date is {new Date().toLocaleDateString()} and Current time is {new Date().toLocaleTimeString()}.</h2>
     </div>
 );
 ReactDOM.render(element, document.getElementById('root'));
}

setInterval(timestamp,1000);
