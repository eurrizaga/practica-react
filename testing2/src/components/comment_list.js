import React, { Component} from 'react';
import { connect } from 'react-redux';
class CommentList extends Component{
    constructor(props){
        super(props);
        this.renderComments = this.renderComments.bind(this);
    }
    renderComments(){
        return this.props.comments.map((comment) => {
            return <li key={comment}>{comment}</li>
        });
    }
    
    
    render(){
        return (
            <div>
                <ul className="comment-list">
                    {this.renderComments()}
                </ul>
            </div>
            
        );
    }
}

// const CommentList = (props) => {
//     const list = props.comments.map((comment) => {
//         return <li key={comment}>{comment}</li>
//     });
//     return (
//         <ul className="comment-list">
//             {list}
//         </ul>
//     );
    
// }

function mapStateToProps(state){
    return { comments: state.comments };
}
export default connect(mapStateToProps)(CommentList);