
// ES3的语法
// module.exports = function() {
//     var greet = document.createElement("div");
//     greet.textContent = "Hi this is Webpack Demo!哈哈哈哈，😂😂😂kkkkk😂😂";
//     return greet;
// }


// ES6的语法
import React, { Component } from 'react';
import config from './config.json';

// import './text.css';

// 启用css modules之后可以用这种语法
import styles from './text.css';

class Greeter extends Component {
    render() {
        return (
            <div className={ styles.txt }>
                <p>Hello World!!!!</p>
                <h1>啦啦啦🦋🦋🦋</h1>
            </div>
        );        
    }
}

export default Greeter;
