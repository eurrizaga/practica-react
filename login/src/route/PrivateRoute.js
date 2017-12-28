import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
/*export const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        localStorage.getItem('user')
            ? <Component {...props} />
            : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
    )} />
)
*/

class PrivateRoute extends React.Component {
    constructor(props){
        super(props);
        console.log(this);
        this.isAuthenticated = this.isAuthenticated.bind(this);
    }
    isAuthenticated(){
        if (this.props.activeUser && this.props.activeUser.id){
            return true;
        }
        return false;
    }
    render() {

       const {component: Component, ...rest} = this.props;
       const renderRoute = props => {
            if (this.isAuthenticated()) {
                return (
                    <Component {...props} activeUser={this.props.activeUser}/>
                );
            }

            const to = {
                pathname: '/login', 
                state: {from: props.location}
            };

            return (
                <Redirect to={to} />
            );
       }

        return (
            <Route {...rest} render={renderRoute}/>
        );
    }
}
function mapStateToProps(state){
    console.log(state.activeUser);
    return { activeUser: state.activeUser }
}
export default connect(mapStateToProps)(PrivateRoute);