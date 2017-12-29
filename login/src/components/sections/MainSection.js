import React, { Component } from 'react';
//import { Field, reduxForm } from 'redux-form';
//import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../actions';
import { 
        Breadcrumb, 
        Button, 
        Checkbox, 
        Form, 
        Label, 
        Message
    } from 'semantic-ui-react';
import UserModal from '../UserModal.js';

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
            <div className="ui container">
                <div>
                    <h1>Hola {activeUser.user_name} </h1>
                    <Button basic color="teal" onClick={ this.logout }>
                        Logout        
                    </Button>
                    <UserModal user={activeUser}/>
                </div>
                <hr/>
                <Breadcrumb>
                    <Breadcrumb.Section link>Home</Breadcrumb.Section>
                    <Breadcrumb.Divider icon='right angle' />
                    <Breadcrumb.Section link>Store</Breadcrumb.Section>
                    <Breadcrumb.Divider icon='right angle' />
                    <Breadcrumb.Section active>T-Shirt</Breadcrumb.Section>
                </Breadcrumb>
                <hr/>

                <h1 className="ui small header">Heading 1</h1>
                <h2 className="ui tiny header">Heading 2</h2>
                <h3 className="ui medium header">Heading 3</h3>
                <h4 className="ui large header">Heading 4</h4>
                <h5 className="ui huge header">Heading 5</h5>

                <hr/>
                <Form>
                    <Form.Field>
                      <label>First Name</label>
                      <input placeholder='First Name' />
                    </Form.Field>
                    <Form.Field>
                      <label>Last Name</label>
                      <input placeholder='Last Name' />
                    </Form.Field>
                    <Form.Field>
                      <Checkbox label='I agree to the Terms and Conditions' />
                    </Form.Field>
                    <Button type='submit'>Submit</Button>
                </Form>
                <hr/>
                <button className="ui button"> Un fucking boton</button>
                <button className="ui primary button"> Un fucking boton</button>
                <button className="ui secondary button"> Un fucking boton</button>
                <button className="ui positive button"> Un fucking boton</button>
                <button className="ui negative button"> Un fucking boton</button>
                <br/><br/>
                <button className="ui loading brown button"> Un fucking boton</button>
                <button className="ui mini yellow button"> Un fucking boton</button>
                <button className="ui tiny olive button"> Un fucking boton</button>
                <button className="ui small violet button"> Un fucking boton</button>
                <button className="ui large orange button"> Un fucking boton</button>
                <button className="ui basic button"> Un fucking boton</button>
                <button className="ui huge button"> Un fucking boton</button>
                <button className="ui massive basic pink button"> Un fucking boton</button>
                <br/><br/>
                <button className="ui basic fluid primary button"> Un fucking boton</button>
                <button className="ui basic fluid secondary button"> Un fucking boton</button>
                <button className="ui basic fluid button"> Un fucking boton</button>
                <hr/>
                <h2>Íconos</h2>
                <i aria-hidden="true" className="help circle big icon"></i>
                <h2></h2>
                <div>
                    <Label as='a' image>
                      <img src='/assets/images/avatar/small/joe.jpg' />
                      Joe
                    </Label>
                    <Label as='a' image>
                      <img src='/assets/images/avatar/small/elliot.jpg' />
                      Elliot
                    </Label>
                    <Label as='a' image>
                      <img src='/assets/images/avatar/small/stevie.jpg' />
                      Stevie
                    </Label>
                </div>
                <hr/>
                <Message color="purple">
                    <Message.Header>
                      Changes in Service
                    </Message.Header>
                    <p>
                      We updated our privacy policy here to better service our customers. We recommend reviewing the changes.
                    </p>
                </Message>
                <hr />
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
    