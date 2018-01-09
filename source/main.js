
// ES3的语法
// const greeter = require("./Greeter.js");
// document.querySelector("#root").appendChild(greeter());

// ES6的语法
import React from 'react';
import { render } from 'react-dom';
import Greeter from './Greeter.jsx';

render(<Greeter />, document.getElementById('root'));