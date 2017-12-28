import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost, deletePost } from '../actions';
import { Link } from 'react-router-dom';

class PostsShow extends Component {
    componentDidMount() {
        //if (!this.props.post) {}
        const { id } = this.props.match.params;
        this.props.fetchPost(id);
        this.onDeleteClick = this.onDeleteClick.bind(this);
    }
    onDeleteClick() {
        const { id } = this.props.match.params;
        this.props.deletePost(id, () => {
            this.props.history.push('/');
        });
    }
    render(){
        const { post } = this.props;
        if (!post){
            return <div>Loading...</div>;
        }
        return (
            <div>
                <Link to ="/">Back to Index</Link>
                <button
                    className="btn btn-danger pull-xs-right"
                    onClick={this.onDeleteClick}
                >
                    Delete Post
                </button>
                <h3>{post.title}</h3>
                <h6>Categories: {post.categories}</h6>
                <p>{post.content}</p>
            </div>
        );
    }
}

function mapStateToProps({ posts }, ownProps) { //se tome el atributo posts de state
    //ownProps es el objeto this.props en el punto específico
    return { post: posts[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchPost, deletePost })(PostsShow);