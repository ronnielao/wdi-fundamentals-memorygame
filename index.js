import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Post from './App.js';

var post = {
    title : "Dinosaurs are awesome",
    author: "Stealthy Stegosaurus",
    body : "Check out this body properly",
    comment : ["First!", "Great post", "Hire this author now!"]
}
ReactDOM.render(<Post blog={post} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
//serviceWorker.unregister();
