import React, { Component } from 'react';
import CommentBox from 'components/comment_box';
import CommentList from 'components/comment_list';
export default class App extends Component {
  render() {
    return (
      <div>
        <CommentBox />
        <CommentList />
      </div>
    );
  }
}
