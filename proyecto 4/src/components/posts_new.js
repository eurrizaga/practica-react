import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {
    render () {
        return (
            <div>
                PostNew
            </div>
        )
    }
}

export default reduxForm({
    from: 'PostsNewForm'
})(PostsNew);