import React, { Component } from 'react';
//import { Field, reduxForm } from 'redux-form';
//import { Link } from 'react-router-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import LoginForm from './sections/LoginSection';
import MainSection from './sections/MainSection';
import SecondarySection from './sections/SecondarySection';
import PrivateRoute from './PrivateRoute';
import { getActiveUser, setLoading } from '../actions';
import { Dimmer, Loader } from 'semantic-ui-react';

//Actions:
//......
class newComponent extends Component {
    componentWillMount(){
        this.props.setLoading(true);
        this.props.getActiveUser(() => {
            this.props.setLoading(false);
        });
    }
        
    render(){
        const showLoader = () => {
            if (this.props.loading){
                return (
                    <Dimmer active inverted>
                        <Loader inverted>Loading</Loader>
                    </Dimmer>
                )
            }
                
        }
        const renderFields = () => {
            if (!this.props.activeUser)
                return (<div>Loading...</div>);
            else
                return(
                    <div>
                        {showLoader()}
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
    return { activeUser: state.activeUser, loading: state.loading }
}
//export default connect(mapStateToProps)(newComponent);
//export default connect(mapStateToProps, { fetchPosts  })(newComponent);
//    export default reduxForm({
//    validate,
//    form: 'PostsNewForm'
//})(
//    connect(null, { createPost })(PostsNew)
//);
export default connect(mapStateToProps, { getActiveUser, setLoading })(newComponent);
    /*
    
    
     */