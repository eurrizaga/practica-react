import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class CommentBox extends Component{
    constructor(props){
        super(props);
        this.state = {comment: ''};
    }
    handleChange(event){
        this.setState({comment: event.target.value});
    }
    handleSubmit(event){
        //prevenir que se haga un submit en las pruebas
        event.preventDefault();

        this.props.saveComment(this.state.comment);
        this.setState({comment: ''});
    }
    
    render(){
        return (
        <div>
            <form onSubmit={this.handleSubmit.bind(this)} className="comment-box">
                <h4>Add a comment</h4>

                <textarea 
                value={this.state.comment}
                onChange={this.handleChange.bind(this)}
                />
                {/*action= submit indica que hay que submitear el form al hacer click*/}
                <div>
                    <button action="submit">Submit</button>
                </div>
            </form>
            <button className="fetch-comments" onClick={this.props.fetchComments}>Fetch Comments</button>
        </div>

        );
    }
}
//export default CommentBox;
export default connect(null, actions)(CommentBox);