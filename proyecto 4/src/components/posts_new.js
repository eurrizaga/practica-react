import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPost } from '../actions';

class PostsNew extends Component {
    renderField(field) {
        const { meta: { touched, error } } = field;
        const className = `form-group ${(touched && error) ? 'has-danger': ''}`
        return (
            <div className={className}>
                <label>{field.label}</label>
                <input
                    type="text" 
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
        this.props.createPost(values, () => {
            this.props.history.push('/');    
        });
        
    }
    render () {
        const { handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Field
                    label="Title"
                    name="title"
                    component={this.renderField} />
                <Field
                    label="Categories"
                    name="categories"
                    component={this.renderField} />
                <Field
                    label="Post content"
                    name="content"
                    component={this.renderField} />
                <button type="submit" className="btn btn-primary">Submit</button>
                <Link to="/" className="btn btn-danger" >Cancelar</Link>
            </form>
        )
    }
}

function validate(values){
  const errors = {};
  //validar los inputs de 'values'
  if (!values.title || values.title.length < 3) {
    errors.title = "Enter a valid title!";
  }
  if (!values.categories || values.categories.length < 3) {
    errors.categories = "Enter a valid category!";
  }
  if (!values.content || values.content.length < 3) {
    errors.content = "Enter a valid content!";
  }
  // Si errors está vacío, el form puede enviarse correctamente
  // Si tiene alguna propiedad, redux-form aume que el form es inválido
  return errors;
    
}

export default reduxForm({
    validate,
    form: 'PostsNewForm'
})(
    connect(null, { createPost })(PostsNew)
);