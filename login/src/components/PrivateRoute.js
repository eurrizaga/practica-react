import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Sidebar, Segment, Button } from 'semantic-ui-react';
import  SidebarMenu from './SidebarMenu';

class PrivateRoute extends React.Component {
    constructor(props){
        super(props);
        this.isAuthenticated = this.isAuthenticated.bind(this);
        this.state = { 
            visible: false, 
            animation: 'overlay'
           
        };
    }
    isAuthenticated(){
        if (this.props.activeUser && this.props.activeUser.id){
            return true;
        }
        return false;
    }
    
    toggleVisibility = () =>{ 
        this.setState({ visible: !this.state.visible })
    }
    changeMenuType = (event) =>{
        this.setState({animation: event.target.value, visible:false});
    }

    render() {
        //const { visible } = this.state;
        const {component: Component, ...rest} = this.props;
        const renderRoute = props => {
            if (this.isAuthenticated()) {
                return (
                    <div style={{height: '100vh'}}>
                        <Button onClick={this.toggleVisibility}>Menú</Button>
                        <select placeholder='Tipo de menú' className="ui selection dropdown" onChange={this.changeMenuType.bind(this)}>
                            <option value="overlay">Overlay</option>
                            <option value="push">Push</option>
                            <option value="scale down">Scale down</option>
                        </select>
                        <Sidebar.Pushable as={Segment}>
                            <SidebarMenu visible={this.state.visible} animation={this.state.animation}/>
                            <Sidebar.Pusher>
                                <Segment basic>
                                    <Component {...props} activeUser={this.props.activeUser}/>
                                </Segment>
                            </Sidebar.Pusher>
                        </Sidebar.Pushable>
                    </div>
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
    return { activeUser: state.activeUser }
}
export default connect(mapStateToProps)(PrivateRoute);