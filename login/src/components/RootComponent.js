import React, { Component } from 'react';
//import { Field, reduxForm } from 'redux-form';
//import { Link } from 'react-router-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import LoginForm from './sections/LoginForm';
import MainSection from './sections/MainSection';
import SecondarySection from './sections/SecondarySection';
import PrivateRoute from '../route/PrivateRoute';
import { getActiveUser } from '../actions';

//Actions:
//......
class newComponent extends Component {
    componentWillMount(){
        this.props.getActiveUser();
    }
        
    render(){
        const renderFields = () => {
            if (!this.props.activeUser)
                return (
                    <div>Loading...</div>
                )
            else
                return(
                    <div>
                        <Switch>
                            <Route path="/login" component={LoginForm} activeUser={this.props.activeUser}/>
                            <PrivateRoute path="/secondary" component={SecondarySection} activeUser={this.props.activeUser}/>
                            <PrivateRoute path="/" component={MainSection} activeUser={this.props.activeUser}/>

                        </Switch>
                    </div>
                )
        }
        return (
            <div> 
                <BrowserRouter>
                    { renderFields() }
                </BrowserRouter>
            </div>
            
        )
    }
}
function mapStateToProps(state){
    return { activeUser: state.activeUser }
}
//export default connect(mapStateToProps)(newComponent);
//export default connect(mapStateToProps, { fetchPosts  })(newComponent);
//    export default reduxForm({
//    validate,
//    form: 'PostsNewForm'
//})(
//    connect(null, { createPost })(PostsNew)
//);
export default connect(mapStateToProps, { getActiveUser })(newComponent);
    /*
    
    
     */