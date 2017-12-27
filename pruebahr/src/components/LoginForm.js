import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../actions';
//Actions:
//......
class loginForm extends Component {
    //constructor(props){ super(props) }
    renderField(field) {
        const { meta: { touched, error } } = field;
        const className = `form-group ${(touched && error) ? 'has-danger': ''}`
        return (
            <div className={className}>
                <label>{field.label}</label>
                <input
                    type={field.type} 
                    className="form-control"
                /*
                    el campo de abajo bindea el Field superior con el input en todo lo que hace a sus listeners, esto incluye eventos tales como:
                    onChange={field.input.onChange}
                    onFocus={field.input.onFocus}
                    onBlur={field.input.onBlur}

                 */
                    {...field.input}
                />
                <div className="text-help">
                    {touched ? error: ''}
                </div>
                
            </div>
        );
    }
    onSubmit(values){
        this.props.login(values.email, values.password, (response) => {
            console.log(response.data.data);
        });
        
    }
    render(){
        const { handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Field
                    label="email"
                    name="email"
                    type="email"
                    component={this.renderField} />
                <Field
                    label="password"
                    name="password"
                    type="password"
                    component={this.renderField} />
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        )
    }
}

function validate(values){
  const errors = {};
  //validar los inputs de 'values'
  if (!values.email || values.email.length < 3) {
    errors.email = "Enter a valid email!";
  }
  if (!values.password || values.password.length < 3) {
    errors.password = "Enter a valid category!";
  }
  // Si errors está vacío, el form puede enviarse correctamente
  // Si tiene alguna propiedad, redux-form aume que el form es inválido
  return errors;
    
}

function mapStateToProps(state){
    return { posts: state.value }
}


//export default connect(mapStateToProps)(loginForm);
//export default connect(mapStateToProps, { fetchPosts  })(loginForm);


export default reduxForm({
    validate,
    form: 'LoginForm'
})(
    connect(mapStateToProps, { login })(loginForm)
);
//export default loginForm;