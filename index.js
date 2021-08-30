import React from 'react';
import ReactDOM from 'react-dom';
import CSS from './App.css'

// function Hi() {
  // return <div className="mainDiv">Hello <strong>Naveed Hussain</strong></div>;
  // return <div>Hello <strong>Naveed <ul><li>HTML</li><li>CSS</li></ul> Hussain</strong></div>;
  // return <div>{5+3}</div>
  function Hi(props) {
    return <div id="main"><div className="userprofile"></div>
     <p className="userName">Hello {props.name}!</p> 
    <p className="profileDate">{props.date}</p>
    <img src="https://source.unsplash.com/collection/190727/300x150"/>
   </div>;
  }
// }

// ReactDOM.render(<Hi name="Naveed Hussain"/>, document.querySelector('#root'));
ReactDOM.render(<div><Hi name="Naveed Hussain" date="30/08/2021"/>

</div>, document.querySelector('#root'));
