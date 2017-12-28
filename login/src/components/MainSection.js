import React, { Component } from 'react';
//import { Field, reduxForm } from 'redux-form';
//import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../actions';
//Actions:
//......
class mainSection extends Component {
    constructor(props){ 
        super(props); 
        this.logout = this.logout.bind(this);
    }
    logout(){
        this.props.logout((response) => {
            this.props.history.push('/login');
        });
    }
    render(){
        const { activeUser } = this.props;
        //const { meta: { touched, error } } = field;
        return (
            <div> 
                <p>Hola {activeUser.user_name} </p>
                <button onClick={ this.logout }>
                    Logout        
                </button>

            </div>

        )
    }
}
//function mapStateToProps(state){
//    return { posts: state.value }
//}
//export default connect(mapStateToProps)(mainSection);
//export default connect(mapStateToProps, { fetchPosts  })(mainSection);
//    export default reduxForm({
//    validate,
//    form: 'PostsNewForm'
//})(
//    connect(null, { createPost })(PostsNew)
//);

export default connect(null, { logout })(mainSection);
    