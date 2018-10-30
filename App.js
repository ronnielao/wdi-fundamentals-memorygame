import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Post extends Component {
  render() {
    return (
      <div class='App-header' >
          <h1> {this.props.blog.title}</h1>
          <p>by {this.props.blog.author}</p>
          <p>{this.props.blog.body}</p>
          <h2>Comments</h2>
          <p>by {this.props.blog.comment[0]}</p>          
      </div>
    );
  }
}

export default Post;
