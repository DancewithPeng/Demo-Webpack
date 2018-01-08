
// ES3的语法
// module.exports = function() {
//     var greet = document.createElement("div");
//     greet.textContent = "Hi this is Webpack Demo!哈哈哈哈，😂😂😂kkkkk😂😂";
//     return greet;
// }


// ES6的语法
import React, { Component } from 'react';
import config from './config.json';
import './text.css';

class Greeter extends Component {
    render() {
        return (
            <div className='txt'>
                { config.greetText }
            </div>
        );        
    }
}

export default Greeter;
