import React, { Component } from 'react';
//import { Field, reduxForm } from 'redux-form';
//import { Link } from 'react-router-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import LoginForm from './LoginForm';
import MainSection from './MainSection';
import PrivateRoute from '../route/PrivateRoute';
import { getActiveUser } from '../actions';

import { Grid } from 'semantic-ui-react'

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
                    <Grid divided='vertically'>
                        <Grid.Row columns={3}>
                            <Grid.Column></Grid.Column>
                            <Grid.Column>
                                <div>
                                    <Switch>
                                        <Route path="/login" component={LoginForm} activeUser={this.props.activeUser}/>
                                        <PrivateRoute path="/" component={MainSection} activeUser={this.props.activeUser}/>
                                    </Switch>
                                </div>
                                
                            </Grid.Column>
                            <Grid.Column></Grid.Column>
                            
                        </Grid.Row>

                           
                        
                    </Grid>
                    
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